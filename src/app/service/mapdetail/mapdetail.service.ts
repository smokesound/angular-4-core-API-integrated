import { Injectable } from '@angular/core';
<<<<<<< HEAD
=======
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
>>>>>>> b64dcab8ac8c3126a5fe936057dfd5e16676552f

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

>>>>>>> b64dcab8ac8c3126a5fe936057dfd5e16676552f

}
