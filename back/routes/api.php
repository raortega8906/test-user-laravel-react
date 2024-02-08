<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('v1/users', [UserController::class, 'index']);
Route::post('v1/usercreate', [UserController::class, 'store']);
Route::get('v1/show/{id}', [UserController::class, 'show']);
Route::put('v1/userupdate/{id}', [UserController::class, 'update']);
Route::delete('v1/userdelete/{id}', [UserController::class, 'destroy']);
