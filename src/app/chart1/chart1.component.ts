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
  xAxisData = [];
  data1 = [];
  data2 = [];

  constructor(private reportService:ReportService) { }

  ngOnInit(){

    this.xAxisData = [];
    this.data1 = [];
    this.data2 = [];

    this.xAxisData.push("BID LPN");
    this.xAxisData.push("BID CD");
    this.xAxisData.push("BID SP");
    this.xAxisData.push("BID CP");
    this.xAxisData.push("BID LPI");
    this.xAxisData.push("BM CD");
    this.xAxisData.push("BM SP");

    this.data1.push(325);
    this.data1.push(125);
    this.data1.push(110);
    this.data1.push(55);
    this.data1.push(148);
    this.data1.push(195);
    this.data1.push(203);
    
    this.data2.push(103);
    this.data2.push(95);
    this.data2.push(157);
    this.data2.push(70);
    this.data2.push(135);
    this.data2.push(95);
    this.data2.push(100);

    this.options = {
          color:['#3E92CC', '#F06449'],
          legend: {
            data: ['Suma Promedio', 'Suma Establecido'],
            align: 'left'
          },
          tooltip: {},
          xAxis: {
            data: this.xAxisData,
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
            data: this.data1,
            animationDelay: function (idx) {
              return idx * 10;
            }
          }, {
            name: 'Suma Establecido',
            type: 'line',
            data: this.data2,
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
