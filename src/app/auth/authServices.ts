import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { users } from "./db-init";

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    private loggedIn = new BehaviorSubject<boolean>(this.hasToken());
    loggedIn$ = this.loggedIn.asObservable();

    constructor(){}

    login(username: string, mdp: string): boolean {
        const foundUser = users.find(
            u => u.username === username && u.mdp === mdp
        );

        if (foundUser){
            localStorage.setItem("auth", "true");
            localStorage.setItem("user", username)
            this.loggedIn.next(true);
            return true;
        }

        return false;
    }

    logout() : void {
        localStorage.removeItem("auth");
        localStorage.removeItem("user");
        this.loggedIn.next(false);
    }

    isLoggedIn() : boolean{
        return this.loggedIn.value;
    }

    private hasToken() : boolean{
        return localStorage.getItem("auth") === "true";
    }

    getCurrentUser() : string | null {
        return localStorage.getItem("user");
    }
}   
