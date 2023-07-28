<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;

class ClienteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Cliente::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Cliente::create($request->all());

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Cliente::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        if(Cliente::where('id' , $id)->exists()){
            $cliente = Cliente::find($id);
            $cliente -> nombre_cliente = $request->nombre_cliente;
            $cliente -> cedula_cliente = $request->cedula_cliente;
            $cliente -> telefono_cliente = $request->telefono_cliente;
            $cliente -> email_cliente = $request->email_cliente;
            $cliente -> contraseña_cliente = $request->contraseña_cliente;
            $cliente->save();
            return response()->json([
            "message" => "record updated successfully"
            ], 200);
            }else{
            return response()->json([
            "message" => "Article not found"
            ],404);
            }
            
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if(Cliente::where('id' , $id)->exists()){
            $cliente = Cliente::find($id);
            $cliente->delete();
            return response()->json([
            "message" => "record deleted"
            ], 202);
            }else{
            return response()->json([
            "message" => 'Article not found'
            ], 404);
            }
            
    }
}
