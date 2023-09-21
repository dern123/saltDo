import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth/auth.guard';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path: "", canActivate:[AuthGuard], 
  children:[
    {path:"home", component:ListComponent},
    { path: '', redirectTo: 'home', pathMatch: "full" },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
