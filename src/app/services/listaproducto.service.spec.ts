import { TestBed } from '@angular/core/testing';

import { ListaproductoService } from './listaproducto.service';

describe('ListaproductoService', () => {
  let service: ListaproductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaproductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
