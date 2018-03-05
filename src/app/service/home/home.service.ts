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
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  nyokotlagi(params){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+ params +'/comments');
  }
  getdata2013(){
    return this.http.get('https://ot.tirto.id/visualisasi-database-01/2013');
  }
  getdata2018(){
    return this.http.get('https://ot.tirto.id/visualisasi-database-01/2018');
  }
  getDataTable(params){
    return this.http.get('https://ot.tirto.id/visualisasi-database-01/kota?q=' + params);
  }
  
  public sayHello(){
  	console.log('hello');
  }


}
