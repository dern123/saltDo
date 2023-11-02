import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo.component';
import { AuthGuard } from 'src/app/guards/auth/auth.guard';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path: "", canActivate: [AuthGuard], component: TodoComponent,
    children:  [
      {path:"list", component: ListComponent},
      {path:"", redirectTo: "list", pathMatch: "full"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
