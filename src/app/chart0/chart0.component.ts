import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-chart0',
  templateUrl: './chart0.component.html',
  styleUrls: ['./chart0.component.css']
})
export class Chart0Component implements OnInit {

  chartOption: EChartOption;

  ngOnInit(){
    this.chartOption={
      xAxis:
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis:
      {
        type: 'value'
      },
      series: 
      [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }
      ]
    }
  }

}
