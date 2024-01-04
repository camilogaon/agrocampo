import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCategoriaAdminComponent } from './edit-categoria-admin.component';

describe('EditCategoriaAdminComponent', () => {
  let component: EditCategoriaAdminComponent;
  let fixture: ComponentFixture<EditCategoriaAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCategoriaAdminComponent]
    });
    fixture = TestBed.createComponent(EditCategoriaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
