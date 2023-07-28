<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Listaproductos;

class ListaproductosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Listaproductos::All();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Listaproductos::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Listaproductos::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        if(Listaproductos::where('id' , $id)->exists()){
            $listaproductos = Listaproductos::find($id);
            $listaproductos -> nombre_producto = $request->nombre_producto;
            $listaproductos -> descripcion_producto = $request->descripcion_producto;
            $listaproductos -> cantidad_producto = $request->cantidad_producto;
            $listaproductos->save();
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
        if(Listaproductos::where('id' , $id)->exists()){
            $listaproductos = Listaproductos::find($id);
            $listaproductos->delete();
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
