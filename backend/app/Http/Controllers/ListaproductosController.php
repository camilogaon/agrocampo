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
    public function show(string $id_carrito)
    {
        return Listaproductos::find($id_carrito);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id_carrito)
    {
        if(Listaproductos::where('id_carrito' , $id_carrito)->exists()){
            $listaproductos = Listaproductos::find($id_carrito);
            $listaproductos -> nombre_producto = $request->nombre_producto;
            $listaproductos -> descripcion_producto = $request->descripcion_producto;
            $listaproductos -> precio_producto = $request->precio_producto;
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
    public function destroy(string $id_carrito)
    {
        if(Listaproductos::where('id_carrito' , $id_carrito)->exists()){
            $listaproductos = Listaproductos::find($id_carrito);
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

    public function destroyTabla()
        {
        try {
            Listaproductos::truncate();
            
            return response()->json([
                "message" => "All records deleted"
            ], 202);
        } catch (\Exception $e) {
            return response()->json([
                "message" => "Error: " . $e->getMessage()
            ], 500);
        }
    }

    public function buscarProductos(Request $request)
        {
            $terminoBusqueda = $request->input('q');

            // Realiza la búsqueda en la base de datos utilizando $terminoBusqueda
            // Por ejemplo, puedes usar Eloquent para consultar la tabla de productos

            $resultados = Listaproductos::where('nombre', 'like', '%' . $terminoBusqueda . '%')
                ->orWhere('descripcion', 'like', '%' . $terminoBusqueda . '%')
                ->get();

            return response()->json($resultados);
        }


    
}
