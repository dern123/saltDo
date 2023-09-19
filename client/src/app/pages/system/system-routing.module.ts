import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './system.component';

const routes: Routes = [
 { path: '', component: SystemComponent,
    children: [
      {
        path: 'system-settings',
        loadChildren: () => import("./system-settings/system-settings.module").then((m) => m.SystemSettingsModule)
      },
      { path: '', redirectTo: 'system-settings', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
