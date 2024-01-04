import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionesAdminComponent } from './secciones-admin.component';

describe('SeccionesAdminComponent', () => {
  let component: SeccionesAdminComponent;
  let fixture: ComponentFixture<SeccionesAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionesAdminComponent]
    });
    fixture = TestBed.createComponent(SeccionesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
