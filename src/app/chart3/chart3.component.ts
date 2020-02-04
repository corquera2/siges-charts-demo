import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart3',
  templateUrl: './chart3.component.html',
  styleUrls: ['./chart3.component.css']
})
export class Chart3Component implements OnInit 
{
  options:any;

  constructor() { }

  ngOnInit() 
  {
    this.options = {
      tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      series: 
      [
          {
              name: 'Monto',
              type: 'pie',
              label:{ //Aca tiro datos sobre la grafica
                show: true,
                position: 'outside',
                trigger:'item',
                formatter: '{b} - [{c}] '

              },   
              data: [
                  {value: 335, name: 'ATEL S.A.'},
                  {value: 310, name: 'DISTRIBUIDORA CUMMINS S.A.'},
                  {value: 234, name: 'CONSORCIO: DELOITTE S.C Y NETLABS S.R.L.'},
                  {value: 135, name: 'PORTO VARESE S.A.'},
                  {value: 1548, name: 'URUDATA S.A.'},
                  {value: 310, name: 'ACCESSA S.A.'},
                  {value: 234, name: 'CONSORCIO: FIDUNER ZONE E IXADUL S.A.'},
                  {value: 135, name: 'NAIMADE S.A.'},
                  {value: 1548, name: 'CASAGESTALT'},
                  {value: 310, name: 'SACAPUNTAS S.R.L.'},
                  {value: 234, name: 'PEREGRINUS CONSULTING S.R.L.'}
              ],
              emphasis: {
                  itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }
      ]
  };
  
  }

}
