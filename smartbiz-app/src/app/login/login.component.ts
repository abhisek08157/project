import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  selectedRole = '';
  username = '';
  password = '';
  errorMsg = '';

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    this.auth.login(this.username, this.password).subscribe({
      next: (res) => {
        console.log('Backend response:', res);
        if (res.role === this.selectedRole) {
          this.auth.setRole(res.role);
          const route = res.role === 'Admin' ? '/admin' : '/employee';
          this.router.navigate([route]);
        } else {
          this.errorMsg = 'Role mismatch. Please try again.';
        }
      },
      error: (err) => {
        console.error('Login failed:', err);
        this.errorMsg = 'Invalid username or password';
      }
    });
  }
}
