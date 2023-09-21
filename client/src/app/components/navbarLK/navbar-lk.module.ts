import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarLKComponent } from './navbar-lk.component';



@NgModule({
  declarations: [NavbarLKComponent],
  exports: [NavbarLKComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class NavbarLKModule { }
