import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { simpleCrudService } from '../simplecrud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  productForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public crudService: simpleCrudService
  ){ }
  ngOnInit() {
      this.productForm = this.fb.group({
        id:[],
      name: [''],
      description: [''],
      price: [],
      quantity: [],    
    })
  }

  submitForm() {
    console.log(this.productForm.value)
    this.crudService.create(this.productForm.value).subscribe(res => {
      console.log('Product created!'),
      console.log(res)
      this.router.navigateByUrl('/home/')
    });
  }
}



