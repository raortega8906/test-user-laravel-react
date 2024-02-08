<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {

        if(request()->isMethod('POST')){
            return [
                'name' => 'required|string',
                'email' => 'required|string',
                'password' => 'required|string',
            ];
        }

        else{
            return [
                'name' => 'required|string',
                'email' => 'required|string',
                'password' => 'required|string',
            ];
        }

    }

    public function messages()
    {

        if(request()->isMethod('POST')){
            return [
                'required.name' => 'El nombre es requerido',
                'required.email' => 'El email es requerido',
                'required.password' => 'El password es requerido'
            ];
        }

        else{
            return [
                'name' => 'El nombre es requerido',
                'email' => 'El email es requerido',
                'password' => 'El password es requerido'
            ];
        }

    }
}
