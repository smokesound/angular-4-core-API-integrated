import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home/home.service';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	berita:Array<string>;

  constructor(public homeService: HomeService){

  }


  ngOnInit() {
  	console.log('tes');

  	this.homeService.sayHello();

  	this.homeService.getting()
  	.subscribe(data => {
  		this.berita = data.data;
  		console.log(this.berita);
  	}, error => {
  		console.log(error);
  	});
  }

  cekBerita(param){
  	alert(param);
  	console.log(param);
  }

}
