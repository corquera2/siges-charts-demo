import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  vista = 1;
  
  ngOnInit(){ }

  onChartChange(event:any){
    this.vista = event.target.value;
  }

  onDownload()
  { 
    var newCanvas = document.querySelector('#chartContainer canvas');
    var chartTitle = document.querySelector('.chartTitle');
    
    //Creo una imagen a partir del Canvas
    var newCanvasImg = (<HTMLCanvasElement> newCanvas).toDataURL();

    //Creo el PDF a partir de la imagen.
    var doc = new jsPDF('portrait');
    
    doc.setFontSize(16);
    doc.setTextColor("#000000");
    doc.text(chartTitle.textContent, 50, 20 );
    doc.addImage(newCanvasImg, 'JPEG', 10, 30);
    doc.save('reporte.pdf');
  }

}
