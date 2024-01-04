import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductoAdminComponent } from './new-producto-admin.component';

describe('NewProductoAdminComponent', () => {
  let component: NewProductoAdminComponent;
  let fixture: ComponentFixture<NewProductoAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProductoAdminComponent]
    });
    fixture = TestBed.createComponent(NewProductoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
