<?php
namespace App\Http\Controllers\Apis;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\JsonResponse;
use App\Models\Address;
use App\Models\State;

class ContactController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function create(Request $request)
    {        
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
            "states_id"
        ]);
        
        $addressData["contact_id"] = $createdContact["id"];
        
        Address::create($addressData);

        return JsonResponse::create([
            "data" => [
                "id" => $createdContact["id"]
            ]
        ]);
    }

    public function update(int $contactId, Request $request)
    {
        return JsonResponse::create(Contact::create($request->only([
            "name",
            "phoneNumber",
            "email"
        ])));
    }
}
    