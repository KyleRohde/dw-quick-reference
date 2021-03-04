import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './pages/home.component';
import { MovesPage } from './pages/moves.component';
import { ClassesPage } from './pages/classes.component';

const routes: Routes = [
  {path: "", component: HomePage },
  {path: "moves", component: MovesPage },
  {path: "classes", component: ClassesPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
