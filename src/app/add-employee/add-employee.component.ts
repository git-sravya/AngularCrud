import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { simpleCrudService } from '../simplecrud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  productForm=new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    description:new FormControl(''),
    price:new FormControl(''),
    quantity:new FormControl('')
  })
  constructor(private service:simpleCrudService,private router: Router) { }

  ngOnInit(): void {
  }

  submitForm() {
    this.service.create(this.productForm.value).subscribe(res => {
      console.log('Product created!'),
      this.router.navigateByUrl('/home/')
    });
  }
}
