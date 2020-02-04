import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-chart4',
  templateUrl: './chart4.component.html',
  styleUrls: ['./chart4.component.css']
})
export class Chart4Component implements OnInit 
{

  xAxisData = [];
  data1 = [];
  data2 = [];
  options: any;
  reporte: {tipoProcedimiento:string, sumaPromedio:number, sumaEstablecido:number}[];

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

    this.options = 
    {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['Suma Promedio', 'Suma Establecido']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: this.xAxisData
        },
        series: [
            {
                label:{ 
                    show: true,
                    position: 'inside',
                    trigger:'item',
                    formatter: '{c}'
    
                  },
                name: 'Suma Promedio',
                type: 'bar',
                data: this.data1
            },
            {
                label:{ 
                    show: true,
                    position: 'inside',
                    trigger:'item',
                    formatter: '{c}'
    
                  },
                name: 'Suma Establecido',
                type: 'bar',
                data: this.data2
            }
        ]
    };
  }

  //Se comenta el codigo que esta fguncionando con el backend

  // ngOnInit() 
  // {
  //   this.reportService.getDiasPorProcedimiento()
  //     .subscribe(dataResponse => {

  //       this.reporte = dataResponse;
  //       const xAxisData = [];
  //       const data1 = [];
  //       const data2 = [];
  //       const diff = [];

  //       console.log(dataResponse);
  //       for(let key in dataResponse)
  //       {
  //         xAxisData.push(dataResponse[key].tipoProcedimiento);
  //         data1.push(dataResponse[key].sumaPromedio);
  //         data2.push(dataResponse[key].sumaEstablecido);
  //       }

  //       this.populateOptions(xAxisData, data1, data2);
      
  //     });
  // }

  // populateOptions(xAxisData, data1, data2)
  // {
  //   this.options = 
  //   {
  //       tooltip: {
  //           trigger: 'axis',
  //           axisPointer: {
  //               type: 'shadow'
  //           }
  //       },
  //       legend: {
  //           data: ['Suma Promedio', 'Suma Establecido']
  //       },
  //       grid: {
  //           left: '3%',
  //           right: '4%',
  //           bottom: '3%',
  //           containLabel: true
  //       },
  //       xAxis: {
  //           type: 'value',
  //           boundaryGap: [0, 0.01]
  //       },
  //       yAxis: {
  //           type: 'category',
  //           data: xAxisData
  //       },
  //       series: [
  //           {
  //               label:{ 
  //                   show: true,
  //                   position: 'inside',
  //                   trigger:'item',
  //                   formatter: '{c}'
    
  //                 },
  //               name: 'Suma Promedio',
  //               type: 'bar',
  //               data: data1
  //           },
  //           {
  //               label:{ 
  //                   show: true,
  //                   position: 'inside',
  //                   trigger:'item',
  //                   formatter: '{c}'
    
  //                 },
  //               name: 'Suma Establecido',
  //               type: 'bar',
  //               data: data2
  //           }
  //       ]
  //   };
 // }

}
