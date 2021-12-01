import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionesScreenComponent } from './notificaciones-screen.component';

describe('NotificacionesScreenComponent', () => {
  let component: NotificacionesScreenComponent;
  let fixture: ComponentFixture<NotificacionesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificacionesScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacionesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
