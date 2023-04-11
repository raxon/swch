import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token === '123456789';
  }

  public login(email: string, password: string): boolean {
    if (email === 'demo@demo.com' && password === 'Test123@') {
      localStorage.setItem('token', '123456789');
      return true;
    }
    return false;
  }

  public logout(): void {
    localStorage.removeItem('token');
  }

}
