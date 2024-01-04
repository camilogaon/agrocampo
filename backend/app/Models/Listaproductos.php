<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Listaproductos extends Model
{
    protected $primaryKey = 'id_carrito';
    public $incrementing = false;
    public $timestamps = false;
    use HasFactory;
    protected $fillable = [
        'id_carrito','nombre_producto', 'descripcion_producto', 'precio_producto', 'id_producto'
    ];

    protected $table = 'listaproductos';
}
