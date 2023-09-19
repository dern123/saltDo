import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import("./pages/auth/auth.module").then((m) => m.AuthModule)
  },
  {
    path: 'system',
    loadChildren: () => import("./pages/system/system.module").then((m) => m.SystemModule)
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
