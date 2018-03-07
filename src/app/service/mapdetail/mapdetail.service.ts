import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class MapdetailService {

  constructor(private http: HttpClient) { 
  	this.http = http;
  }

   ambil(params){
  	return this.http.get('https://ot.tirto.id/visualisasi-database-01/provinsi?q=' + params );
  }

  getDetailProvinsi(params){
    return this.http.get('https://ot.tirto.id/visualisasi-database-01/kota?q='+ params );
  }

  getDetailKota(params){
    return this.http.get('https://ot.tirto.id/visualisasi-database-01/201?kota='+ params );
  }

  public sayHello(){
  	console.log('hello');
  }



}
