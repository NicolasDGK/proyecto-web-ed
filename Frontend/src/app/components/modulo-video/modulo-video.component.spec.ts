import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloVideoComponent } from './modulo-video.component';

describe('ModuloVideoComponent', () => {
  let component: ModuloVideoComponent;
  let fixture: ComponentFixture<ModuloVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
