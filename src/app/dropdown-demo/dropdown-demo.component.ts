import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-demo',
  templateUrl: './dropdown-demo.component.html',
  styleUrls: ['./dropdown-demo.component.css']
})
export class DropdownDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mySelect = '2';
  selectedValue: any;

  data = [
    {
      id: 1,
      name: 'Dakota Gaylord PhD',
      address: '14554 Smith Mews'
    },
    {
      id: 2,
      name: 'Maria Legros',
      address: '002 Pagac Drives'
    },
    {
      id: 3,
      name: 'Brandyn Fritsch',
      address: '8542 Lowe Mountain'
    },
    {
      id: 4,
      name: 'Glenna Ward V',
      address: '1260 Oda Summit'
    },
    {
      id: 5,
      name: 'Jamie Veum',
      address: '5017 Lowe Route'
    }
  ];



  selectChange() {
    console.log(this.mySelect);
     // this.selectedValue = this.commonService.getDropDownText(this.mySelect, this.data)[0].name;
  }


}
