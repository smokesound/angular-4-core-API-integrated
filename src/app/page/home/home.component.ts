import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home/home.service';
import { RouterModule, Routes, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
// import { Observable } from 'rxjs/Observable';
// import { MapdetailComponent } from "../mapdetail/mapdetail";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	data: any;
  userlist: any;
  pathId: any;
  classId: any;
  map: any;
  mapdetail: any;
  ros : any;
  id: any;
  DataProvinsi: any;
  dataRaw: any;
  dataRaw2013: any;
  data2013: any;
  rawDataTable: any;
  dataKota: any;
  current: any;
  parapara: any;
  kabupaten : boolean;
  dataRawPartai : any;
  dataPartai : any;
  data2018 : any;
  dataTahun : any;
  dataRaw2018 : any;
  DataPartai : any;

  

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, public homeService: HomeService, private router: Router){

  }
  ngOnInit() {
    this.kabupaten = false;

this.storage.set("binatang", "ayam");
console.log(this.storage.get("binatang"));
    
      this.homeService.nyokot()
      .subscribe(data => {
        // console.log(data.data);

        this.dataRaw = data;
        console.log(this.dataRaw);
        this.DataProvinsi = this.dataRaw.data;
      }, error => {
        console.log(error);
      });

      this.current = 1;


      this.homeService.dataPartai()
      .subscribe(data => {
        // console.log(data.data);

        this.dataRawPartai = data;
        console.log(this.dataRaw);
        this.DataPartai = this.dataRawPartai.data;
      }, error => {
        console.log(error);
      });

      this.current = 2;


  	
  }

  masukinLocal(params){
    this.storage.set("tahun", params);
    this.dataTahun = this.storage.get("tahun");
    console.log(this.dataTahun);

    this.homeService.getdatatahun(params)
    .subscribe(data => {
          
          console.log(data);
    },
     error => {
      console.log(error)
    });
  }


    pilihKota(params){
      this.kabupaten = false;
      console.log(this.current);
      this.homeService.getdata2018(params)
      .subscribe(data => {
        this.dataRaw2018 = data;
        console.log(this.dataRaw2018);
        this.data2018 = this.dataRaw2018.data;
        var dataPilihKota = params;
        this.kabupaten = true;
      },
      error => {
        console.log(error);
      });

    }



  pilihPartai(params){

    console.log(this.current);
    var params2 = this.current;
    var dataTahun = this.storage.get("tahun");
    // var params2 = "kota padang";
    console.log(params2);
    this.homeService.getdata2018DobPar(params2, params, dataTahun)
    .subscribe(data => {
      // console.log(params);
      // console.log(data);
      this.dataRaw2018 = data;
      console.log(this.dataRaw2018);
      this.data2018 = this.dataRaw2018.data;
      
    },
    error => {
      console.log(error);
    });

}
}
