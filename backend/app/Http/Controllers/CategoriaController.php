<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Categoria::All();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Categoria::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id_categoria)
    {
        return Categoria::find($id_categoria);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id_categoria)
    {

        if(Categoria::where('id_categoria' , $id_categoria)->exists()){
            $categoria = Categoria::find($id_categoria);
            $categoria -> nombre_categoria = $request->nombre_categoria;
            $categoria -> descripcion_categoria = $request->descripcion_categoria;
            $categoria->save();
            return response()->json([
                "message" => "record updated successfully"
            ], 200);
        }else{
            return response()->json([
                "message" => "Categoria not found"
            ],404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id_categoria)
    {
        if(Categoria::where('id_categoria' , $id_categoria)->exists()){
            $categoria = Categoria::find($id_categoria);
            $categoria->delete();
            return response()->json([
                "message" => "Producto eliminado"
            ], 202);
        }else{
            return response()->json([
                "message" => 'Producto No encontrado'
            ], 404);
         }
            
    }
}
