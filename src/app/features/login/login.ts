import { Component, inject } from '@angular/core';
import { AuthService } from '../../auth/authServices';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms'; 

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}
  
  login() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigateByUrl('/');
    } else {
      this.errorMessage = 'Identifiants incorrects';
    }
  }
}
