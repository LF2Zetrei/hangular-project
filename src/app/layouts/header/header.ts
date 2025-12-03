import { AsyncPipe, CommonModule, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth/authServices';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, AsyncPipe, NgStyle],  
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  linkStyle = {
    'color': '#fff',
    'text-decoration': 'none',
    'padding': '6px 10px',
    'border-radius': '4px',
    'transition': '0.3s',
    ':hover': {
      'background-color': '#fff',
      'color': '#111'
    }
  };

  constructor(public authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
