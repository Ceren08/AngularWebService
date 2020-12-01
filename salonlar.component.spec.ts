import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { salonlarComponent } from './salonlar.component';

describe('salonlarComponent', () => {
  let component: salonlarComponent;
  let fixture: ComponentFixture<salonlarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ salonlarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(salonlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
