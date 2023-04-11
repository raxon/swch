import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardService   {
  constructor(public authService: AuthService, public router: Router) { }
  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
