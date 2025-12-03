import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/authServices';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profil.html',
  styleUrl: './profil.css',
})
export class Profil {
   private authService = inject(AuthService);

  public currentUser = signal<string | null>(null);

  ngOnInit() {
    const user = this.authService.getCurrentUser();
    this.currentUser.set(user);
  }

}
