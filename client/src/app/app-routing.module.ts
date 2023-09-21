import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from './guards/permission/permission.guard';
import { AuthGuard } from './guards/auth/auth.guard';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import("./pages/auth/auth.module").then((m) => m.AuthModule)
  },
  { path: "home", component: MainComponent },
  {
    path: "admin", canActivate: [AuthGuard, PermissionGuard], canDeactivate: [AuthGuard],
    loadChildren: () => import("./pages/admin/admin.module").then((m) => m.AdminModule)
  },
  {
    path: 'client', canActivate: [AuthGuard, PermissionGuard], canDeactivate: [AuthGuard],
    loadChildren: () => import("./pages/client/client.module").then((m) => m.ClientModule)
  },
  { path: '', redirectTo: 'auth/login', pathMatch: "full" },
  {
    path: "**",
    loadChildren:() => import("./pages/not-found/not-found.module").then((m) => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
