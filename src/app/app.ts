import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Memory } from './features/memory/memory';
import { Header } from './layouts/header/header';
import { Footer } from './layouts/footer/footer';
import { Profil } from './features/profil/profil';
import { TikTakToe } from './features/tik-tak-toe/tik-tak-toe';
import { ChuchNorris } from './features/chuch-norris/chuch-norris';
import { Statistiques } from './features/statistiques/statistiques';
import { ErrorPage } from './features/error-page/error-page';
import { Login } from './features/login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Memory, Header, Footer, Profil, TikTakToe, ChuchNorris, Statistiques, ErrorPage, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
