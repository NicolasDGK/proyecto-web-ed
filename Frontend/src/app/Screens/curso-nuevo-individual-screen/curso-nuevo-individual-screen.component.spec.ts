import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoNuevoIndividualScreenComponent } from './curso-nuevo-individual-screen.component';

describe('CursoNuevoIndividualScreenComponent', () => {
  let component: CursoNuevoIndividualScreenComponent;
  let fixture: ComponentFixture<CursoNuevoIndividualScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoNuevoIndividualScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoNuevoIndividualScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
