import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCategoriaAdminComponent } from './new-categoria-admin.component';

describe('NewCategoriaAdminComponent', () => {
  let component: NewCategoriaAdminComponent;
  let fixture: ComponentFixture<NewCategoriaAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCategoriaAdminComponent]
    });
    fixture = TestBed.createComponent(NewCategoriaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
