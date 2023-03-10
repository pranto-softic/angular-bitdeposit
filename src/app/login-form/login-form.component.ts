import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface User {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  user: User = {
    username: '',
    password: '',
  };

  constructor() {
    this.user = {} as User;
  }

  myForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.myForm.value);
  }
}
