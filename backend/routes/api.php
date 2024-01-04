<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Article;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoriaController;
use App\Http\Resources\ArticleResource;
use App\Models\Cliente;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\ContactController;
use App\Http\Resources\ClienteResource;
use App\Models\Listaproductos;
use App\Http\Controllers\ListaproductosController;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\VentasController;
use App\Http\Resources\CategoriaResource;
use App\Http\Resources\ContactResource;
use App\Http\Resources\ListaproductoResource;
use App\Http\Resources\ProductoResource;
use App\Http\Resources\VentasResource;
use App\Models\Categoria;
use App\Models\contact;
use App\Models\producto;
use App\Models\Ventas;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/



Route::get('/articles', function (){
    return ArticleResource::collection(Article::all());
});

Route::get('/article/{id}', function ($id){
    return new ArticleResource(Article::findOrFail($id));
});

Route::post('/articles', [ArticleController::class, 'store']);

Route::put('/article/{id}', [ArticleController::class, 'update']);

Route::delete('/article/{id}', [ArticleController::class, 'destroy']);




Route::get('/clientes', function (){
    return ClienteResource::collection(Cliente::all());
});

Route::get('/cliente/{id}', function ($id){
    return new ClienteResource(Cliente::findOrFail($id));
});

Route::post('/clientes', [clienteController::class, 'store']);

Route::put('/cliente/{id}', [clienteController::class, 'update']);

Route::delete('/cliente/{id}', [clienteController::class, 'destroy']);



Route::get('/listaproductos', function (){
    return ListaproductoResource::collection(Listaproductos::all());
});

Route::get('/listaproducto/{id_carrito}', function ($id_carrito){
    return new ListaproductoResource(Listaproductos::findOrFail($id_carrito));
});

Route::post('/listaproductos', [ListaproductosController::class, 'store']);

Route::put('/listaproducto/{id_carrito}', [ListaproductosController::class, 'update']);

Route::delete('/listaproducto/{id_carrito}', [ListaproductosController::class, 'destroy']);

Route::delete('/listaproductos', [ListaproductosController::class, 'destroyTabla']);

Route::get('/buscar-productos', [ProductoController::class, 'buscarProductos']);



Route::get('/contacts', function (){
    return ContactResource::collection(contact::all());
});

Route::get('/contact/{cedula_contact}', function ($cedula_contact){
    return new ContactResource(contact::findOrFail($cedula_contact));
});

Route::post('/contacts', [ContactController::class, 'store']);

Route::put('/contact/{cedula_contact}', [ContactController::class, 'update']);

Route::delete('/contact/{cedula_contact}', [ContactController::class, 'destroy']);





Route::group([

    'middleware' => 'api',


], function ($router) {

    Route::post('login', [AuthController::class,'login']);
    Route::post('signup', [AuthController::class,'signup']);
    Route::post('logout', [AuthController::class,'logout']);
    Route::post('refresh', [AuthController::class,'refresh']);
    Route::post('me', [AuthController::class,'me']);

});



Route::get('/categorias', function (){
    return CategoriaResource::collection(Categoria::all());
});

Route::get('/categoria/{id_categoria}', function ($id_categoria){
    return new CategoriaResource(Categoria::findOrFail($id_categoria));
});

Route::post('/categorias', [CategoriaController::class, 'store']);

Route::put('/categoria/{id_categoria}', [CategoriaController::class, 'update']);

Route::delete('/categoria/{id_categoria}', [CategoriaController::class, 'destroy']);





Route::get('/productos', function (){
    return ProductoResource::collection(producto::all());
});

Route::get('/producto/{id_producto}', function ($id_producto){
    return new ProductoResource(producto::findOrFail($id_producto));
});

Route::post('/productos', [ProductoController::class, 'store']);


Route::put('/producto/{id_producto}', [ProductoController::class, 'update']);

Route::delete('/producto/{id_producto}', [ProductoController::class, 'destroy']);






Route::get('/ventas', function (){
    return VentasResource::collection(Ventas::all());
});

Route::get('/venta/{id}', function ($id_ventas){
    return new VentasResource(Ventas::findOrFail($id_ventas));
});

Route::post('/ventas', [VentasController::class, 'store']);

Route::put('/venta/{id}', [VentasController::class, 'update']);

Route::delete('/venta/{id}', [VentasController::class, 'destroy']);






Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
