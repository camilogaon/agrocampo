<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Article;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\AuthController;
use App\Http\Resources\ArticleResource;
use App\Models\Cliente;
use App\Http\Controllers\ClienteController;
use App\Http\Resources\ClienteResource;
use App\Models\Listaproductos;
use App\Http\Controllers\ListaproductosController;
use App\Http\Resources\ListaproductoResource;



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

Route::get('/listaproducto/{id}', function ($id){
    return new ListaproductoResource(Listaproductos::findOrFail($id));
});

Route::post('/listaproductos', [ListaproductosController::class, 'store']);

Route::put('/listaproducto/{id}', [ListaproductosController::class, 'update']);

Route::delete('/listaproducto/{id}', [ListaproductosController::class, 'destroy']);


Route::group([

    'middleware' => 'api',


], function ($router) {

    Route::post('login', [AuthController::class,'login']);
    Route::post('signup', [AuthController::class,'signup']);
    Route::post('logout', [AuthController::class,'logout']);
    Route::post('refresh', [AuthController::class,'refresh']);
    Route::post('me', [AuthController::class,'me']);

});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
