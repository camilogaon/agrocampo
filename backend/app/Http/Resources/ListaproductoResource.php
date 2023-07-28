<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ListaproductoResource extends JsonResource
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
            'nombre_producto' => $this->nombre_producto,
            'descripcion_producto' => $this->descripcion_producto,
            'cantidad_producto' => $this->cantidad_producto,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            ];
            
    }
}
