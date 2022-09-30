import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

// type = interface
type Credentials = {
  email: string;
  pwd: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials: Credentials = {
    email: '',
    pwd: ''
  };

  // DI
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  submit(): void {
    console.log('form submit', this.credentials);
    this.authService.login();
  }

}
