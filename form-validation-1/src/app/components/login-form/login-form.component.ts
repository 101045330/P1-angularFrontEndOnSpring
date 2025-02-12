import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  standalone: false,
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})

export class LoginFormComponent {

  username: string = '';
  errorMessage: string = '';
  isValidEmail: boolean = false;

  validateEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (this.username && emailRegex.test(this.username)) {
      this.isValidEmail = true;
      this.errorMessage = '';
    } else {
      this.isValidEmail = false;
      if (this.username) {
        this.errorMessage = 'Invalid email address';
      } else {
        this.errorMessage = '';
      }
    }
  }//validateEmail

  clearError() {
    this.errorMessage = '';
    this.isValidEmail = false;
  }//clearForm

  clearEmail(){
    this.username = '';
  }
  
}

