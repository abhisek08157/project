import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:8080/auth';
  private role: string | null = null;
  private loggedIn = false;

  constructor(private http: HttpClient) { }

login(username: string, password: string) {
  return this.http.post<{ role: string }>(`${this.baseUrl}/login`, { username, password });
}

  setRole(role: string) {
    this.role = role;
    this.loggedIn = true;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getRole(): string | null {
    return this.role;
  }

  logout() {
    this.role = null;
    this.loggedIn = false;
  }
}
