import { Component, Input, OnInit } from '@angular/core';
import { MultiDataSet, Label, Colors } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})

export class DonaComponent implements OnInit {

  @Input() title: string = 'sin titulo'

  @Input('labels') doughnutChartLabels: Label[] = ['label1', 'label2', 'label3'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
   
  public colors : Colors[] = [
     { backgroundColor: [ '#6857E6', '#009FEE', '#F02059'] }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
