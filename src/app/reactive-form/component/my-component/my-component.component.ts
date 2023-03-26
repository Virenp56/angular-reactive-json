import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit{
  profileForm: FormGroup;
  id!: number;
  constructor(private service: MyServiceService,private router:Router,private route:ActivatedRoute)
  {
      
    this.profileForm = new FormGroup(
      {
        name:new FormControl(null,Validators.required),
        description:new FormControl(null,Validators.required),
        status:new FormControl(null,Validators.required),
        rate:new FormControl(null,Validators.required),
        deposite:new FormControl(null,Validators.required),
        balance:new FormControl(null,Validators.required),

      }
    //   {
    //   firstName: new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
    //   lastName: new FormControl(null,Validators.required),
    //   hobby:new FormArray([
    //     new FormControl(null)
    //   ])
    // }
    
    );
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getItem(this.id)
      .subscribe((data) => {
        this.profileForm.setValue({
          name: data.name,
          description: data.description,
          status: data.status,
          rate: data.rate,
          deposite: data.deposite,
          balance: data.balance
        });
        console.log(data);
        
      });
  }
  
  onSubmit() {
    console.log(this.profileForm.value);
    
    this.service.updateItem(this.id, this.profileForm.value)
    .subscribe(() => {
      this.router.navigate(['reactive-form/table']);
    });
  }

  // get firstName() { 
  //   return this.profileForm.get('firstName'); 
  // }

  // get hobby() {
  //   return this.profileForm.get('hobby') as FormArray;
  // }

  // addHobby() {
  //   this.hobby.push(new FormControl(null));
  // }

  // removeGroup(i:any){
  //   this.hobby.removeAt(i);
  // }
}
