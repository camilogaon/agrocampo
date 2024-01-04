<?php

namespace App\Http\Controllers;

use App\Models\producto;
use Illuminate\Http\Request;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return producto::All();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return producto::create($request->all());    
    }


    // public function file(Request $request){
    //     $producto = new producto();
    //     if($request->hasFile('img_producto')){
    //         $completeFileName = $request->file('img_producto')->getClientOriginalName();
    //         $fileNameOnly = pathinfo($completeFileName, PATHINFO_FILENAME);
    //         $extenshion = $request->file('img_producto')->getClientOriginalExtension();
    //         $compPic = str_replace(' ', ' ', $fileNameOnly).'-'.rand().'_'.time(). '.' .$extenshion;
    //         $path = $request->file('img_producto')->storeAs('public/posts', $compPic);
    //         $producto -> img_producto =$compPic;
    //         // return producto::create($request->all());  
    //         dd($compPic);
    //     }
    //     if($producto->save()){
    //         return ['status' => true, 'message' => 'Post Saved Succesfully'];
    //     }else{
    //         return ['status' => false, 'message' => 'Something Went Wrong'];
    //     }  
    // }

    /**
     * Display the specified resource.
     */
    public function show(string $id_producto)
    {
        return producto::find($id_producto);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id_producto)
    {
        if(producto::where('id_producto' , $id_producto)->exists()){
            $producto = producto::find($id_producto);
            $producto -> nombre_producto = $request->nombre_producto;
            $producto -> descripcion_producto = $request->descripcion_producto;
            $producto -> precio_producto = $request->precio_producto;
            $producto -> categoria_id_categoria = $request->categoria_id_categoria;
            $producto -> img_producto = $request->img_producto;
            $producto->save();
            return response()->json([
                "message" => "record updated successfully"
            ], 200);
        }else{
            return response()->json([
            "message" => "Producto not found"
            ],404);
        }
            
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id_producto)
    {
        if(producto::where('id_producto' , $id_producto)->exists()){
            $producto = producto::find($id_producto);
            $producto->delete();
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
