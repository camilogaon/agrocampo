<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id_producto' => $this->id_producto,
            'nombre_producto' => $this->nombre_producto,
            'descripcion_producto' => $this->descripcion_producto,
            'precio_producto' => $this->precio_producto,
            'categoria_id_categoria' => $this->categoria_id_categoria,
        ];
    }
}
