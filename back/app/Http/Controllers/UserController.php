<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function index(){

        $users = User::all();

        if($users->count() == 0){

            return response()->json([
                'message' => 'No hay usuarios registrados.'
            ],404);

        }

        return response()->json([
            'data' => $users
        ]);

    }

}
