import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapdetailService } from '../../service/mapdetail/mapdetail.service';

@Component({
  selector: 'app-mapdetail',
  templateUrl: './mapdetail.component.html',
  styleUrls: ['./mapdetail.component.css']
})
export class MapdetailComponent implements OnInit {

usertitle: any;
userbody: any;
sub: any;
id: any;

  constructor(private route: ActivatedRoute, public mapdetailService: MapdetailService
    ) { }

  ngOnInit(){

  	this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
 
    });
    console.log(this.id);

    this.mapdetailService.ambil(this.id)
    .subscribe(data => {
      console.log(data);
      this.userbody = data;
      this.usertitle = this.userbody.title;
      console.log(this.userbody);
    }, error => {
      console.log(error);

    });
}
  }

