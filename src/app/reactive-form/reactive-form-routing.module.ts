import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyComponentComponent } from './component/my-component/my-component.component';
import { TableComponent } from './component/table/table.component';

const routes: Routes = [{
  path:"",redirectTo:"table",pathMatch:"full"
},{
  path:"form/:id",component:MyComponentComponent
},{
  path:"table",component:TableComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormRoutingModule { }
