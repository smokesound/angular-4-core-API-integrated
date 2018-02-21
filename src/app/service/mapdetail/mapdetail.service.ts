import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class MapdetailService {

  constructor(private http: HttpClient) { 
  	this.http = http;
  }

   ambil(params){
  	return this.http.get('https://jsonplaceholder.typicode.com/posts/' + params );
  }


  public sayHello(){
  	console.log('hello');
  }



}
