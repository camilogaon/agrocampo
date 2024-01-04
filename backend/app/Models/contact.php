<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class contact extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $primaryKey = 'cedula_contact';
    protected $fillable = [
        'cedula_contact', 'nombre_contact', 'telefono_contact', 'mensaje'
        ];
        protected $table = 'contactos';
}
