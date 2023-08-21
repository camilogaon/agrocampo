<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class producto extends Model
{
    protected $primaryKey = 'id_producto';
    public $incrementing = false;
    public $timestamps = false;
    use HasFactory;

    protected $fillable = [
        'id_producto', 'nombre_producto', 'descripcion_producto', 'precio_producto', 'categoria_id_categoria', 'img_producto'
    ];

    protected $table = 'producto';
    

    public function categoria()
    {
        return $this->belongsTo(Categoria::class, 'categoria_id_categoria', 'id_categoria');
    }
}
