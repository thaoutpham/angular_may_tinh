import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  restlt() {
   let input1 = document.getElementById('input1').value;
   let input2 = document.getElementById('input2').value;
   let calculation = document.getElementById('calculation').value;
    switch (calculation) {
      case '+':
        // tslint:disable-next-line:label-position radix
         const ketqua = parseInt(input1) + parseInt(input2);
         document.getElementById('ketqua').value = String(ketqua);
         break;
      case '-':
        // tslint:disable-next-line:label-position radix
        const ketqua1 = parseInt(input1) - parseInt(input2);
        document.getElementById('ketqua').value = String(ketqua1);
        break;
      case '*':
        // tslint:disable-next-line:label-position radix
        const ketqua2 = parseInt(input1) * parseInt(input2);
        document.getElementById('ketqua').value = String(ketqua2);
        break;
      case '/':
        // tslint:disable-next-line:label-position radix
        const ketqua3 = parseInt(input1) / parseInt(input2);
        document.getElementById('ketqua').value = String(ketqua3);
        break;
    }
  }

}
