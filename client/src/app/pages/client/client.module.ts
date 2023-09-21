import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { HeaderLKModule } from 'src/app/components/headerLK/header-lk.module';
import { ListComponent } from './todo/list/list.component';


@NgModule({
  declarations: [
    ClientComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HeaderLKModule
  ]
})
export class ClientModule { }
