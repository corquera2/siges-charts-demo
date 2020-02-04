import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ReportService
{
    constructor(private http:HttpClient){}
    
    getDiasPorProcedimiento(){
        return this.http
        .get<{tipoProcedimiento:string, sumaPromedio:number, sumaEstablecido:number}[]>('http://localhost:8080/reportes/diasPorProcedimiento')
    }

    getCantidadPorTipoProcedimiento(){}

    getMontoPorAdjudicatario(){}

}