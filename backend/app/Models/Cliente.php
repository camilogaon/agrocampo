<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombre_cliente', 'cedula_cliente', 'telefono_cliente', 'email_cliente', 'contraseña_cliente'
    ];

    protected $table = 'clientes';
    
}
