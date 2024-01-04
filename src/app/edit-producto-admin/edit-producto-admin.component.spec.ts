import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductoAdminComponent } from './edit-producto-admin.component';

describe('EditProductoAdminComponent', () => {
  let component: EditProductoAdminComponent;
  let fixture: ComponentFixture<EditProductoAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProductoAdminComponent]
    });
    fixture = TestBed.createComponent(EditProductoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
