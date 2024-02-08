<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserStoreRequest;
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

    public function store(UserStoreRequest $request){

        try {

            User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password)
            ]);

            return response()->json([
                'message' => 'Usuario creado correctamente'
            ], 201);

        }catch (\Exception $exception){

            return response()->json([
                'message' => 'Ups, ha ocurrido un error'.$exception->getMessage()
            ],500);

        }

    }

}
