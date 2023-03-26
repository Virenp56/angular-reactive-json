import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterPipe } from '../pipes/filter.pipe';
import { SearchPipe } from '../pipes/search.pipe';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  viewProviders:[MyServiceService],
  providers:[SearchPipe,FilterPipe]
})
export class TableComponent implements OnInit{
  userData:any;
  searchTerm!: string;
  statusFilterValue!:string
  constructor(private service: MyServiceService,private router:Router){}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.service.getData().subscribe(response => {
      this.userData = response;
    });
  }

  deleteItem(id: number) {
    this.service.deleteItem(id).subscribe(response => {
      this.loadData();
    });
  }

  editItem(item: any) {
    this.router.navigate(['reactive-form/form', item.id]);
  }

}
