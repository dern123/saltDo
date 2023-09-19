import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemSettingsComponent } from './system-settings.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: SystemSettingsComponent,
    children:[
      { path: "form", component: FormComponent },
      { path: '', redirectTo: 'form', pathMatch : 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemSettingsRoutingModule { }
