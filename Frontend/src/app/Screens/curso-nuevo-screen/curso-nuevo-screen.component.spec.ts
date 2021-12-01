import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoNuevoScreenComponent } from './curso-nuevo-screen.component';

describe('CursoNuevoScreenComponent', () => {
  let component: CursoNuevoScreenComponent;
  let fixture: ComponentFixture<CursoNuevoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoNuevoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoNuevoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
