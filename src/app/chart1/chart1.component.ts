import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';

declare const require: any;

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit 
{
  options: any;
  reporte: {tipoProcedimiento:string, sumaPromedio:number, sumaEstablecido:number}[];

  constructor(private reportService:ReportService) { }

  ngOnInit(){

    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    xAxisData.push("BID LPN");
    xAxisData.push("BID CD");
    xAxisData.push("BID SP");
    xAxisData.push("BID CP");
    xAxisData.push("BID LPI");
    xAxisData.push("BM CD");
    xAxisData.push("BM SP");

    data1.push(325);
    data1.push(125);
    data1.push(110);
    data1.push(55);
    data1.push(148);
    data1.push(195);
    data1.push(203);
    
    data2.push(103);
    data2.push(95);
    data2.push(157);
    data2.push(70);
    data2.push(135);
    data2.push(95);
    data2.push(100);

    this.options = {
          color:['#3E92CC', '#F06449'],
          legend: {
            data: ['Suma Promedio', 'Suma Establecido'],
            align: 'left'
          },
          tooltip: {},
          xAxis: {
            data: xAxisData,
            silent: false,
            splitLine: {
              show: false
            }
          },
          yAxis: {
          },
          series: [{
            name: 'Suma Promedio',
            type: 'bar',
            data: data1,
            animationDelay: function (idx) {
              return idx * 10;
            }
          }, {
            name: 'Suma Establecido',
            type: 'line',
            data: data2,
            animationDelay: function (idx) {
              return idx * 10 + 100;
            }
          }],
          animationEasing: 'elasticOut',
          animationDelayUpdate: function (idx) {
            return idx * 5;
          }
        };
  }

  //Comento todo para la demo, este codigo es el que funciona, se comunica con el backend, etc.

  // ngOnInit() 
  // {
  //   this.reportService.getDiasPorProcedimiento()
  //     .subscribe(reporteData => 
  //     {
  //       this.reporte = reporteData;
  //       const xAxisData = [];
  //       const data1 = [];
  //       const data2 = [];

  //       for(let key in reporteData)
  //       {
  //         xAxisData.push(reporteData[key].tipoProcedimiento);
  //         data1.push(reporteData[key].sumaPromedio);
  //         data2.push(reporteData[key].sumaEstablecido);
  //       }
  //       this.populateOptions(xAxisData, data1, data2)
  //     }); 
  // }

  // //Setea los parametros y los datos del chart
  // populateOptions(xAxisData, data1, data2)
  // {
  //   this.options = {
  //     color:['#3E92CC', '#F06449'],
  //     legend: {
  //       data: ['Suma Promedio', 'Suma Establecido'],
  //       align: 'left'
  //     },
  //     tooltip: {},
  //     xAxis: {
  //       data: xAxisData,
  //       silent: false,
  //       splitLine: {
  //         show: false
  //       }
  //     },
  //     yAxis: {
  //     },
  //     series: [{
  //       name: 'Suma Promedio',
  //       type: 'bar',
  //       data: data1,
  //       animationDelay: function (idx) {
  //         return idx * 10;
  //       }
  //     }, {
  //       name: 'Suma Establecido',
  //       type: 'line',
  //       data: data2,
  //       animationDelay: function (idx) {
  //         return idx * 10 + 100;
  //       }
  //     }],
  //     animationEasing: 'elasticOut',
  //     animationDelayUpdate: function (idx) {
  //       return idx * 5;
  //     }
  //   };
  // }
}
