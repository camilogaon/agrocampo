<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ventas extends Model
{
    use HasFactory;
    protected $primaryKey = 'id_ventas';
    public $incrementing = true;
    public $timestamps = false;
    protected $fillable = [
         'id_ventas','id_cliente', 'id_producto'
        ];
        protected $table = 'ventas';
}
