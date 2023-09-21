import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth/auth.guard';
import { PermissionGuard } from 'src/app/guards/permission/permission.guard';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {path: "", canActivate: [AuthGuard], component: AdminComponent,
  children:[
    {path: "dashboard", 
      loadChildren: ()=> import("./dashboard/dashboard.module").then((m) => m.DashboardModule)
    },
    {
      path: 'system', canActivate: [AuthGuard, PermissionGuard],
      loadChildren: () => import("../../pages/system/system.module").then((m) => m.SystemModule)
    },
    { path: '', redirectTo: 'dashboard', pathMatch: "full" },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
