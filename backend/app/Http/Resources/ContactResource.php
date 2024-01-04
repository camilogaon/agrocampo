<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ContactResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'cedula_contact' => $this->cedula_contact,
            'nombre_contact' => $this->nombre_contact,
            'telefono_contact' => $this->telefono_contact,
            'mensaje' => $this->mensaje
           
        ];
    }
}
