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

  currentPage = 1;
  totalItems = 0;
  items!: any[];
  
  // initialize items per page to default value
  itemsPerPageOptions: number[] = [2,5,10, 15,20, 50];
  itemsPerPage = 10;

  constructor(private service: MyServiceService,private router:Router){}

  ngOnInit() {
    this.service.getData().subscribe((data: any[]) => {
      this.userData = data;
      this.totalItems = data.length;
    });
  }

  get totalPages() {
    return Math.ceil(this.totalItems / this.itemsPerPage);
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
