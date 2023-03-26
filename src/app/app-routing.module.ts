import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:"reactive-form",pathMatch:"full"}
  ,{
  path:"reactive-form",loadChildren: () => import('./reactive-form/reactive-form.module').then(m => m.ReactiveFormModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
