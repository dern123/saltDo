import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) {

  }

  public formLogin: FormGroup = new FormGroup(
    {
      login: new FormControl('', [Validators.required, Validators.pattern(/^[^<>\!@#$%^&*()_](\S*\s){0,0}\S*$/), Validators.pattern(/.[A-Za-z0-9]{2}$/)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
    }
  )

  submit(){
    const {login, password} = this.formLogin.value;
    this.loginService.login(login, password )
    .subscribe((data: any)=> {
      console.log("🚀 ~ file: signup.component.ts:38 ~ SignupComponent ~ .subscribe ~ data:", data)
    })
  }
  
  ngOnInit(): void {
  }
}
