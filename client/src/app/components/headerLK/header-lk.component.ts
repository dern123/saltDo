import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/pages/auth/login/login.service';

@Component({
  selector: 'app-header-lk',
  templateUrl: './header-lk.component.html',
  styleUrls: ['./header-lk.component.scss']
})
export class HeaderLKComponent implements OnInit {

  constructor(private authService: LoginService) { }
  
  public open: boolean = false;
  
  openMenu(){
    this.open = !this.open
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
  }

}
