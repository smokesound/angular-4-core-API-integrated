import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home/home.service';
import { RouterModule, Routes } from '@angular/router';
import 'rxjs/add/operator/map';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	berita:any;
	singleberita: any;
	data: Array<any>;
  userlist: any;

  constructor(public homeService: HomeService){

  }
  ngOnInit() {
  	console.log('tes');

  	this.homeService.sayHello();

  	this.homeService.nyokot()
  	.subscribe(data => {
  		console.log(data);
  		this.userlist = data;
      console.log(this.userlist);
  	}, error => {
  		console.log(error);
  	});
  }

  cekBerita(param){
  	alert(param);
  	console.log(param);
  }

}
