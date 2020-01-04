import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async loginUser(event: FormGroup) {
    const {email, password} = event.value; // destructuring
    // use async await (instead of using .then)
    try {
      await this.authService.loginUser(email, password);
      await this.router.navigate(['/']);
      console.log('login successful');
    } catch (err) {
      this.error = err.message;
    }
  }

}
