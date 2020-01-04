import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/services/auth.service';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  async registerUser(event: FormGroup) {
    // this.authService.createUser(event.value.email, event.value.password);
    const {email, password} = event.value; // destructuring
    // use async await (instead of using .then)
    try {
      await this.authService.createUser(email, password);
      await this.router.navigate(['/']);
    } catch (err) {
      this.error = err.message;
    }
  }

}
