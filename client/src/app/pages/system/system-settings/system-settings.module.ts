import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemSettingsRoutingModule } from './system-settings-routing.module';
import { FormComponent } from './form/form.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ FormComponent],
  imports: [
    CommonModule,
    SystemSettingsRoutingModule,
    RouterModule
  ]
})
export class SystemSettingsModule { }
