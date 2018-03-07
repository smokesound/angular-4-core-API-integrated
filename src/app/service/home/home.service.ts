import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {


  constructor(private http: HttpClient) { 
  	this.http = http;
  }

   getting(){
  	return this.http.get('https://api.tirto.net/infografik/latest');
  }
  nyokot(){
    return this.http.get('https://ot.tirto.id/visualisasi-database-01/provinsi');
  }
  dataPartai(){
    return this.http.get('https://ot.tirto.id/visualisasi-database-01/partai');
  }
  nyokotlagi(params){
    return this.http.get('https://ot.tirto.id/visualisasi-database-01/kota?q=' + params);
  }
  getdatatahun(params){
    return this.http.get('https://ot.tirto.id/visualisasi-database-01/' + params);
  }
  getdata2018(params){
    return this.http.get('https://ot.tirto.id/visualisasi-database-01/2018?provinsi=' + params);
  }
  getdata2018DobPar(param1,param2, param3){
    return this.http.get('https://ot.tirto.id/visualisasi-database-01/'+ param3 + '?provinsi=' + param1 + '&partai=' + param2);
  }
  getDataTable(params){
    return this.http.get('https://ot.tirto.id/visualisasi-database-01/kota?q=' + params);
  }

  getDataPartai(params){
    return this.http.get('https://ot.tirto.id/visualisasi-database-01/partai' + params);
  }
  
  public sayHello(){
  	console.log('hello');
  }


}
