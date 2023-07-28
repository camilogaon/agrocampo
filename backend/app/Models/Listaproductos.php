<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Listaproductos extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombre_producto', 'descripcion_producto', 'cantidad_producto'
    ];

    protected $table = 'listaproductos';
}
