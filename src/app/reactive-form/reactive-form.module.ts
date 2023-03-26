import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { MyComponentComponent } from './component/my-component/my-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './component/table/table.component';
import { MyServiceService } from './component/services/my-service.service';
import { SearchPipe } from './component/pipes/search.pipe';
import { FilterPipe } from './component/pipes/filter.pipe';


@NgModule({
  declarations: [
    MyComponentComponent,
    TableComponent,
    SearchPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],providers:[
    MyServiceService
  ]
})
export class ReactiveFormModule { }
