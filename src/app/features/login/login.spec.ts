import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Login } from './login';
import { AuthService } from '../../auth/authServices';
import { Router } from '@angular/router';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
    routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

    await TestBed.configureTestingModule({
      imports: [Login],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate when login succeeds', () => {
    authServiceSpy.login.and.returnValue(true);

    component.username = 'john';
    component.password = 'doe';
    component.login();

    expect(authServiceSpy.login).toHaveBeenCalledWith('john', 'doe');
    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/');
  });

  it('should set errorMessage when login fails', () => {
    authServiceSpy.login.and.returnValue(false);

    component.username = 'john';
    component.password = 'wrong';
    component.login();

    expect(component.errorMessage).toBe('Identifiants incorrects');
  });
});
