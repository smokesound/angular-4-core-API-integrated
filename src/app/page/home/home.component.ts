import { Component, OnInit, Http } from '@angular/core';
import { HomeService } from '../../service/home/home.service'

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

}
