import { Routes } from '@angular/router';
import { HomePage } from './features/home-page/home-page';
import { Memory } from './features/memory/memory';
import { ChuchNorris } from './features/chuch-norris/chuch-norris';
import { TikTakToe } from './features/tik-tak-toe/tik-tak-toe';
import { Statistiques } from './features/statistiques/statistiques';
import { Profil } from './features/profil/profil';
import { Login } from './features/login/login';
import { ErrorPage } from './features/error-page/error-page';
import { AuthGuard } from './auth-guard/auth-guard';

export const routes: Routes = [
    {path: '', component: HomePage},
    {path: 'memory', component: Memory, canActivate: [AuthGuard]},
    {path: 'chuck-norris', component: ChuchNorris, canActivate: [AuthGuard]},
    {path: 'tik-tak-toe', component: TikTakToe, canActivate: [AuthGuard]},
    {path: 'statistiques', component: Statistiques, canActivate: [AuthGuard]},
    {path: 'profil', component: Profil, canActivate: [AuthGuard]},
    {path: 'login', component: Login},
    {path: '**', component: ErrorPage},
];
