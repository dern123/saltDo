import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderLKModule } from 'src/app/components/headerLK/header-lk.module';
import { ListComponent } from './status_todo/list/list.component';


@NgModule({
  declarations: [
    AdminComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HeaderLKModule
  ]
})
export class AdminModule { }
