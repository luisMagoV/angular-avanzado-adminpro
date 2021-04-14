import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: [
  ]
})
export class Graficas1Component  {


  @Input() title: string = 'sin titulo'

  public labels1: string[] = ['pan', 'refescos', 'tacos'];
  public data1 = [
    [10, 15, 40]
  ];

 
  

}
