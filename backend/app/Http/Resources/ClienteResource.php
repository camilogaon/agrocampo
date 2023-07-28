<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ClienteResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'nombre_cliente' => $this->nombre_cliente,
            'cedula_cliente' => $this->cedula_cliente,
            'telefono_cliente' => $this->telefono_cliente,
            'email_cliente' => $this->email_cliente,
            'contraseña_cliente' => $this->contraseña_cliente,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            ];
    }
}
