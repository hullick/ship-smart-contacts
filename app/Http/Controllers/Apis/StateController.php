<?php
namespace App\Http\Controllers\Apis;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\JsonResponse;
use App\Models\Address;
use App\Models\State;

class StateController extends Controller
{

    public function list(Request $request)
    {
        return JsonResponse::create(State::all());
    }
}
    