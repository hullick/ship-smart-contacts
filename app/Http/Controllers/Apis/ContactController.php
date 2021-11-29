<?php
namespace App\Http\Controllers\Apis;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\JsonResponse;
use App\Models\Address;
use Illuminate\Support\Facades\DB;

class ContactController extends Controller
{

    public function list(Request $request)
    {
        return JsonResponse::create(Contact::all());
    }

    public function get(Request $request, int $contactId)
    {
        return JsonResponse::create(Contact::with([
            "address",
            "address.state"
        ])->findOrFail($contactId));
    }
    
    public function delete(Request $request, int $contactId)
    {
        Contact::findOrFail($contactId)->delete();
        
        return JsonResponse::create([]);
    }

    public function create(Request $request)
    {
        try {
            DB::beginTransaction();

            $createdContact = Contact::create($request->only([
                "name",
                "phone_number",
                "email"
            ]));

            $addressData = $request->only([
                "cep",
                "city",
                "district",
                "address",
                "residence_number",
                "state_id"
            ]);

            $addressData["contact_id"] = $createdContact["id"];

            Address::create($addressData);

            DB::commit();

            return JsonResponse::create([
                "id" => $createdContact["id"]
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }

    public function associateAvatar(Request $request, int $contactId, string $avatar_filename)
    {
        Contact::findOrFail($contactId)->setAttribute("avatar_filename", $avatar_filename)->save();

        return JsonResponse::create([]);
    }

    public function changeAvatar(Request $request, int $contactId, string $avatar_filename)
    {        
        $contact=Contact::findOrFail($contactId);
        
        FileController::delete("avatars", $contact->avatar_filename);
        
        $contact->setAttribute("avatar_filename", $avatar_filename)->save();

        return JsonResponse::create([]);
    }

    public function update(int $contactId, Request $request)
    {
        $updatedContact = Contact::findOrFail($contactId);
        $updatedContact->fill($request->only([
            "name",
            "phone_number",
            "email"
        ]))
            ->save();

        $updatedContact->address->fill($request->only([
            "cep",
            "city",
            "district",
            "address",
            "residence_number",
            "state_id"
        ]))
            ->save();

        return JsonResponse::create($updatedContact);
    }
}
    