<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    protected $primaryKey = 'id_categoria';
    public $incrementing = false;
    public $timestamps = false;
    use HasFactory;
    protected $fillable = [
        'id_categoria', 'nombre_categoria', 'descripcion_categoria'
    ];

    protected $table = 'categoria';

    public function productos()
    {
        return $this->hasMany(Producto::class, 'categoria_id_categoria', 'id_categoria');
    }
    
}

