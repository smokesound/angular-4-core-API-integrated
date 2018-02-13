import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { 
  	this.http = http;
  }

  public getting(data){
  	return this.http.get('https://api.tirto.net/infografik/latest');
  }

  public sayHello(){
  	console.log('hello');
  }


}