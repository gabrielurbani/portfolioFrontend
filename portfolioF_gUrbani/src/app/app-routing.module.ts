import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyEditComponent } from './components/_body/body-edit/body-edit.component';
import { BodyComponent } from './components/_body/body/body.component';

const routes: Routes = [
  {path: 'home', component:BodyComponent},
  {path:'edit', component:BodyEditComponent},
  
  {path:'', redirectTo: 'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
