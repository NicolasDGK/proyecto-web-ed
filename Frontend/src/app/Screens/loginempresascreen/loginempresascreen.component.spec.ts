import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginempresascreenComponent } from './loginempresascreen.component';

describe('LoginempresascreenComponent', () => {
  let component: LoginempresascreenComponent;
  let fixture: ComponentFixture<LoginempresascreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginempresascreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginempresascreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
