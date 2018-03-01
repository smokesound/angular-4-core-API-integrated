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
keluar: boolean = false;
alldata: any;
peta: boolean = false;
title: any;
DataKota: any;
DataCalon:any;

  constructor(private route: ActivatedRoute, public mapdetailService: MapdetailService
    ) { }


  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; // (+) converts string 'id' to a number
    });

    console.log(this.id);

  this.mapdetailService.getDetailProvinsi(this.id)
    .subscribe(data => {
      console.log(data);
      // this.DataKota = data.data;
      console.log(this.DataKota);
    }, error => {
      console.log(error);

    });

    // this.mapdetailService.ambil(this.id)
    // .subscribe(data => {
    //   console.log(data.id);
    //   this.userbody = data.id;
    //   // this.userid = userbody.id
    //   // console.log(this.userid);
    // }, error => {
    //   console.log(error);

    // });
}

bikinKeluar(){
  console.log(this.keluar);
    if (this.keluar == true) {
      this.keluar = false;
    } else {
      this.keluar = true;
    }
  }

  hitApi(params){
    this.peta = true;
    this.mapdetailService.ambil(params)
    .subscribe(data => {
      console.log(data);
      this.alldata = data;
      this.title = this.alldata.title
      console.log(this.alldata);
    }, error =>{
      console.log(error);
    })
  }
  
  detailKota(params){
    console.log(params);
     this.mapdetailService.getDetailKota(params)
    .subscribe(data => {
      console.log(data);
      // this.DataCalon = data.data;
      console.log(this.DataCalon);
    }, error => {
      console.log(error);

    });
  }

}