import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-multicheckbox',
  templateUrl: './multicheckbox.component.html',
  styleUrls: ['./multicheckbox.component.css']
})
export class MulticheckboxComponent implements OnInit {

  title = 'angular-checkboxes-example';
  form: FormGroup;

  CountryData: Array<any> = [
    { name: 'IND', value: 'India' },
    { name: 'AUS', value: 'Australia' },
    { name: 'USA', value: 'America' },
    { name: 'RUS', value: 'Rusia' },
    { name: 'Eng', value: 'England' }
  ];
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      checkArray: this.fb.array([])
    })
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
  
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    
  
  }
  
  submitForm() {
    console.log(this.form.value)
  }
  
  ngOnInit(): void {
  }

}
