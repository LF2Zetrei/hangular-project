# Project

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.9.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

Analyse du projet 

Projet
│
├─ app.html
│   ├─ <app-header></app-header>
│   ├─ <router-outlet/>
│   └─ <app-footer></app-footer>
│
├─ app.routes.ts
│   └─ Ajout des pages dans le const routes
│
├─ src
│   ├─ Auth-Guard
│   │   └─ authGuard.ts
│   │       ├─ Retourne un bool en fonction de isLoggedIn()
│   │       └─ Redirige vers la page de connexion
│   │
│   ├─ Auth
│   │   ├─ db-init.ts → Initialise la base des utilisateurs
│   │   ├─ db-model.ts → Interface User { username / mdp / numberOfWin }
│   │   └─ auth-service.ts
│   │       ├─ Observable loggedIn pour savoir si connecté
│   │       ├─ login(username, mdp) → vérifie les identifiants, met loggedIn à true, stocke token et user
│   │       ├─ logout() → loggedIn = false, supprime items du localStorage
│   │       ├─ isLoggedIn() → retourne la valeur de loggedIn
│   │       ├─ hasToken → vérifie le token dans le localStorage
│   │       └─ getCurrentUser → récupère l’utilisateur dans le localStorage
│   │
│   ├─ Layout
│   │   ├─ header
│   │   │   ├─ header.css / header.html / header.ts / header.spec.ts
│   │   │   └─ header.ts
│   │   │       ├─ logout() → appelle auth.logout() + redirection
│   │   │       └─ ngIf isLoggedIn() → nav bar adaptée
│   │   │
│   │   └─ footer
│   │       ├─ footer.css / footer.html / footer.ts / footer.spec.ts
│   │       └─ Contenu aléatoire et ngIf avec isLogged
│   │
│   ├─ features
│   │   ├─ memory → déjà fait, ajouter nb de coups
│   │   ├─ chuckNorris → déjà fait
│   │   ├─ tikTakToe
│   │   │   ├─ tikTakToe.css / TikTakToe.html / tikTakToe.ts / TikTakToe.spec.ts
│   │   │   └─ tikTakToe.ts
│   │   │       ├─ Tableau de strings
│   │   │       ├─ Player / Win condition
│   │   │       ├─ play() → joue un pion, vérifie win, change joueur
│   │   │       ├─ rejouer()
│   │   │       └─ vérifie victoire
│   │   │
│   │   ├─ stat
│   │   │   ├─ stat.css / stat.html / stat.ts / stat.spec.ts
│   │   │   └─ stat.ts
│   │   │       ├─ Récupère parties Memory et TikTakToe
│   │   │       ├─ Affiche nb de coups et moyenne générale
│   │   │       └─ Affiche parties gagnées
│   │   │
│   │   ├─ homePage
│   │   │   ├─ homePage.css / homePage.html / homePage.ts / homePage.spec.ts
│   │   │   └─ homePage.ts
│   │   │       └─ Présente le site + incitation à connexion / cartes de jeu si connecté
│   │   │
│   │   ├─ profil
│   │   │   ├─ profil.css / profil.html / profil.ts / profil.spec.ts
│   │   │   └─ profil.ts → récupère et affiche données utilisateur
│   │   │
│   │   └─ login
│   │       ├─ login.css / login.html / login.ts / login.spec.ts
│   │       └─ login.ts → login() appelle auth.login()
│   │
│   ├─ Store (utilisation de elf-entities)
│   │   ├─ stat.store.ts → nb de coups moyen Memory
│   │   ├─ score.store.ts → numberOfWin par session
│   │   └─ blagues.store.ts
│   │
│   └─ shared
│       ├─ splitSection
│       │   ├─ child1 / child2
│       │   ├─ padding / backgroundColor gauche et droite
│       │
│       └─ card
│           ├─ description
│           ├─ image
│           └─ route

Seulement 14 tests sur les 19 présent sont bons, je n'ai pas eu le temps d'en faire plus.

