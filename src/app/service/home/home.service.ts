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
  
  public sayHello(){
  	console.log('hello');
  }


}
