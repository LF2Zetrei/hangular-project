import { inject } from "@angular/core"
import { Router } from "@angular/router";
import { AuthService } from "../auth/authServices";

export const AuthGuard = () => {
    const auth: AuthService = inject(AuthService);
    const router = inject(Router);

    if (!auth.isLoggedIn()) {
        router.navigateByUrl('/');
        return false;
    }

    return true;
};