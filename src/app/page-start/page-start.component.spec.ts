import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStartComponent } from './page-start.component';

describe('PageStartComponent', () => {
  let component: PageStartComponent;
  let fixture: ComponentFixture<PageStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageStartComponent]
    });
    fixture = TestBed.createComponent(PageStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
