import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleosScreenComponent } from './empleos-screen.component';

describe('EmpleosScreenComponent', () => {
  let component: EmpleosScreenComponent;
  let fixture: ComponentFixture<EmpleosScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleosScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
