import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarLKModule } from '../navbarLK/navbar-lk.module';
import { HeaderLKComponent } from './header-lk.component';



@NgModule({
  declarations: [
    HeaderLKComponent
  ],
  exports: [
    HeaderLKComponent
  ],
  imports: [
    CommonModule,
    NavbarLKModule
  ]
})
export class HeaderLKModule { }
