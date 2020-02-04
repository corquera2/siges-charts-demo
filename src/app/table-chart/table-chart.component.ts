import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-chart',
  templateUrl: './table-chart.component.html',
  styleUrls: ['./table-chart.component.css']
})
export class TableChartComponent implements OnInit 
{
  @Input("xAxisData")
  xAxisData:string[];

  @Input("data1")
  data1:number[];

  @Input("data2")
  data2:number[];
  

  constructor() { }

  ngOnInit() {
    
  }

}
