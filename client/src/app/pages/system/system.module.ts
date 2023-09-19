import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemSettingsComponent } from './system-settings/system-settings.component';
import { RouterModule } from '@angular/router';
import { SystemComponent } from './system.component';


@NgModule({
  declarations: [SystemSettingsComponent, SystemComponent],
  imports: [
    CommonModule,
    SystemRoutingModule,
    RouterModule
  ]
})
export class SystemModule { }
