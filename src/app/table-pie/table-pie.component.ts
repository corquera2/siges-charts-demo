import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-pie',
  templateUrl: './table-pie.component.html',
  styleUrls: ['./table-pie.component.css']
})
export class TablePieComponent implements OnInit {

  @Input("reportData")
  reportData:any[];
  totalCompras:number=0;

  constructor() { }

  ngOnInit() {

    for(let tipo of this.reportData){
      this.totalCompras += tipo.value;
    }
  
  }  

}
