import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements OnInit {

  options:any;

  constructor() { }

  ngOnInit() 
  {
    this.options = {
      tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      series: 
      [
          {
            label:{ //Aca tiro datos sobre la grafica
                show: true,
                position: 'outside',
                trigger:'item',
                formatter: '{b} - [{c}] '

              },
              name: 'Cantidad por Tipo',
              type: 'pie',
              radius: ['50%', '70%'],
              data: 
              [
                  {value: 2, name: 'BID LPN'},
                  {value: 8, name: 'BID CD'},
                  {value: 11, name: 'BID SP'},
                  {value: 6, name: 'BID CP'},
                  {value: 4, name: 'BID LPI'},
                  {value: 3, name: 'BM CD'},
                  {value: 1, name: 'BM SP'},
                  {value: 2, name: 'BM SDO'}
              ],
          }
      ]
  };
  }
}
