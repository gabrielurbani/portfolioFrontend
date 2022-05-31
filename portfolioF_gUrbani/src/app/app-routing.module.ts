import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/_body/body/body.component';
import { EduEditComponent } from './components/_body/education/edu-edit/edu-edit.component';
import { ExpAltaComponent } from './components/_body/experiencia/exp-alta/exp-alta.component';
import { ExpEditComponent } from './components/_body/experiencia/exp-edit/exp-edit.component';
import { ProjEditComponent } from './components/_body/project/proj-edit/proj-edit.component';

const routes: Routes = [
  {path: 'home', component:BodyComponent},
  {path:'alta', component:ExpAltaComponent},
  {path:'edit/:id', component:ExpEditComponent},
  {path:'edit-proj/:id', component:ProjEditComponent},
  {path:'edit-edu/:id', component:EduEditComponent},
  {path:'**', redirectTo: 'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
