import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  vista = "1";
  
  ngOnInit(){ }

  onChartChange(event:any){
    this.vista = event.target.value;
  }

  onDownload()
  { 
    var newCanvas = <HTMLCanvasElement> document.querySelector('#chartContainer canvas');
    var chartTitle = document.querySelector('.chartTitle');

    //Creo una imagen a partir del Canvas
    var newCanvasImg = (<HTMLCanvasElement> newCanvas).toDataURL();
    //Creo el PDF a partir de la imagen.
    var doc = new jsPDF('portrait');
    
    doc.setFontSize(16);
    doc.setTextColor("#000");
    doc.text(chartTitle.textContent, 50, 20 );
    doc.addImage(newCanvasImg, 'JPEG', 10, 30);


    if(this.vista === "1" || this.vista === "4")
    {
      //Generar Tabla
      var columns = ["Tipos de Procedimientos", "Cantidad Días", "Promedio", "Establecido"];
      var data = [
        ["BID LPN", 425, 325, 103],
        ["BID CD", 225, 125, 95],
        ["BID SP", 210, 110, 157],
        ["BID CP", 155, 55, 70],
        ["BID LPI", 248, 148, 135],
        ["BM CD", 295, 195, 95],
        ["BM SP", 303, 203, 100]
      ]
      //doc.autoTable({ html: '#my-table' })
      doc.autoTable({
        styles: { halign: 'center' },
        columns: columns,
        body: data,
        margin: { top: 140 },
      });
    }
    else if(this.vista === "2")
    {
      var columns = ["Tipos de Procedimientos", "Cantidad"]
      var data = [
        ["BID LPN", 2],
        ["BID CD", 8],
        ["BID SP", 11],
        ["BID CP", 6],
        ["BID LPI", 4],
        ["BM CD", 3],
        ["BM SP", 1],
        ["BM SDO", 2],
        ["Total", 37]
      ]

      doc.autoTable({
        styles: { halign: 'center', fontStyle: 'bold' },
        columns: columns,
        body: data,
        margin: { top: 140 },
      });
    
    }

    doc.save(chartTitle.textContent.toLowerCase());
  }

}
