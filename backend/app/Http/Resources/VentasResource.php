<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VentasResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id_ventas' => $this->id_ventas,
            'id_cliente' => $this->id_cliente,
            'id_producto' => $this->id_producto,
            ];
    }
}
