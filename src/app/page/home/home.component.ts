import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home/home.service';
import { RouterModule, Routes, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  

  constructor(public homeService: HomeService, private router: Router){

  }
  ngOnInit() {

      this.homeService.nyokot()
      .subscribe(data => {
        // console.log(data.data);

        this.dataRaw = data;
        console.log(this.dataRaw);
        this.DataProvinsi = this.dataRaw;
      }, error => {
        console.log(error);
      });

      this.current = 1;


  	
  }
  //   makeAlert(params) {
  //       var ros = this.router.navigate(['/mapdetail/?' + 'params']);
  //       console.log(this.ros);
  // }

  cekBerita(param){
  	alert(param);
  	console.log(param);
  }

  LihatKota(params){
    var ros = this.router.navigate(['mapdetail/',params]);
    console.log(params);
  }

  tahun2013(param){
    this.homeService.getdata2013()
    .subscribe(data => {
      this.dataRaw2013 = data;
      this.data2013 = this.dataRaw2013.data;

    }, error => {
        console.log(error);
      });


  }

  selectName(params){
    console.log(this.current);
    this.homeService.nyokotlagi(params)
    .subscribe(data => {
      // console.log(params);
      // console.log(data);
      this.nama = data;
      console.log(this.nama);
      // this.rawDataTable = data;
      // this.dataKota = this.rawDataTable.data;
      // this.dataTable = JSON.stringify(JSON.parse(this.rawDataTable.data));
      // console.log(this.dataKota);

    },
    error => {
      console.log(error);
    });
  }

  

      // this.pathId = "M36.45,91.68l-0.17,0.1l-0.71,-1.09l-1.25,-1.34l-0.98,-0.46l-0.59,-0.1l-0.24,-0.15l0.11,-0.15l0.99,-0.2l2.06,0.13l0.69,1.08l0.34,0.98l-0.01,0.86L36.45,91.68zM8.9,30.57l2.59,1.42l0.08,0.66l0.28,0.46l1.01,1l1.79,1.4l0.85,0.35l3.94,0.98l4.04,0.27l1.91,-0.35l2.23,-0.88h0.36l0.9,0.48L30.4,36l1.12,0.12l1.41,0.53l0.38,0.33l0.32,0.86l0.62,0.21l0.98,-0.2l3.93,-1.52l0.47,0.02l0.88,0.89l1.09,1.51l2.15,2.26l1.56,1.32l1.21,0.28l0.89,1.77l0.15,1.52l0.41,0.97l0.44,0.59l-0.09,0.93l0.82,-0.1l0.97,0.36l0.64,0.31l2.06,1.58l0.14,1.33l-0.36,0.86l0,0l-0.4,0.14l-0.8,-0.15l-0.77,0.21l-0.06,0.32l-0.27,0.12l-0.56,0.12l-0.38,-0.09l-0.09,0.21l0.3,0.53l-0.03,0.38l-0.41,0.24l0.15,0.47l-0.47,0.68l0.03,0.97l-0.21,0.29l-0.24,1.33l-1.21,0.65l0.06,0.38l-0.15,0.27l-0.56,-0.38l-0.18,0.03l-0.09,0.32l0.41,0.74l-0.12,0.35l-1.48,1.18l-0.44,0.62l0.33,0.82l0.47,0.5v0.32l0.27,0.18l-0.03,0.74l0.74,0.35l0.21,0.88l0.56,0.41l-0.33,0.53l0.27,0.56l0.03,0.44l0.65,0.44l0.27,-0.12l0.38,0.71l-0.24,0.79l-2.37,0.65l0.09,0.18l0.59,0.12l0.5,0.5l0.06,0.74l0.62,0.65l-0.09,0.97l-0.62,-0.06l-0.18,0.12l0.21,0.26l-0.03,0.53l0.27,0.88v1.06l0.92,0.24l0.59,1.06l0.95,0.12l-0.03,0.26l0.24,0.29l-0.33,0.5l-0.06,0.38l0.15,0.65l0.5,0.5l0.03,0.26l-0.62,0.21l-0.24,1.41l0.18,1l0.41,0.56l-0.06,0.71l0.83,0.35l0.53,1.62l-0.61,2.79l0,0l-3.51,-1.98h-0.4l-0.93,0.46l-2.1,-0.53l-1.65,-2.3l-0.1,-4l-0.32,-2.17l-0.58,-1.78l-0.2,-0.21l-0.8,-0.01l-1.57,-0.62L38,76.36l-0.66,-0.63l-1.24,-1.73l-0.46,-1.96l-0.47,-0.77l-1.53,-0.52l-1.58,-2.52l-1.23,-2.32l-1.4,-0.78l-0.47,-0.52l-0.3,-1.13l-1.6,-1.12l-2.64,-0.15l-1.33,0.22l-0.68,-0.14l-0.52,-0.3l-1.68,-1.64l-1.86,-2.77l-1.7,-1.81l-0.76,-0.24l-1.31,-1.01l-0.98,-0.44l-1.17,-1.04l-1.96,-2.36l-2.84,-2.64l-2.3,-1.88l-1.87,-2.83l-2.41,-4.69l0.34,-0.67l-0.06,-0.3l-1.17,-1.87l0.4,-2.12L0,32.4l0.17,-1.57l0.86,0.01l2.17,-1.4l0.4,-0.07l2.87,0.44L8.9,30.57z";
    // this.classId = "jakarta";

    //  this.map = [
    //   { 
    //     "id": 1,
    //     "pathId" : "M388.19,70.24l-0.56,0.43l-1.29,-1.02l-0.47,-1.24L385.9,68l0.16,-0.22l1.46,-0.12l0.82,0.25l0.15,0.32L388.19,70.24zM383.46,65.45l2.2,1.3l-0.01,0.2l-0.54,0.47l-1.69,-0.74l-1.93,-0.1l-0.64,-0.31l-0.4,-0.54l0.08,-0.43l0.91,-0.38L383.46,65.45zM389.15,58.05l-0.78,0.29l-1.19,-0.87L387,56.58l0.07,-0.22l0.78,-0.85l0.49,0.05l1.25,1.01l0.1,0.47L389.15,58.05zM391.93,54.74l0.43,0.19l0.42,2.01l-0.56,0.44l-0.51,0.08l-0.61,-0.31l-3.52,-2.82l0.06,-0.26l0.9,-0.74l0.51,-0.03l1,0.35l0.19,0.38l0.58,0.42L391.93,54.74zM353.97,56.18l0.04,-0.93l0.33,-0.67l0.37,0.03l0.79,-0.91l0.4,0.06l0.14,0.33l0.41,-0.11l0.13,-0.57l0.72,-0.6l-0.14,-0.42l0.12,-1.04l0.53,-0.19l0.33,0.57l1.51,0.3l0.27,0.2l0.11,0.49l0.65,0.5l0.2,-0.13l0.39,-0.76l0.85,-0.33l0.13,-0.64l0.15,-0.11l1.41,0.21l0.3,0.18l1.52,-0.35l1.17,0.97L367,52.9l0.59,-0.14l0.23,-0.54l0.37,0.16l0.47,-0.08l-0.05,-0.62l0.54,-0.67l0.41,0.45l0.38,0.12l0.25,0.61l0.77,-0.24l0.53,0.16l0.31,-0.1l0.28,-0.16l0.26,-0.5l0.41,0.25l0.38,0.48l0.26,-0.11l0.49,0.28l0.69,-0.2l0.53,-0.41l0.73,0.18l0.29,0.23l0.65,0.06l0.28,0.3l0.34,-0.39l1.11,0.15l0.65,-0.17l0.59,0.11l0.64,-0.16l0.09,-0.19l0.53,-0.21l3.02,2.15l0.4,0.86l0.24,0.15l1.21,0.34l0.89,-0.26l0.24,0.17l0,0l-0.81,0.5l-0.91,0.28l-1.56,-0.45l-0.17,0.19v0.56l0.39,0.32l0.96,0.23l2.64,2.22l-1.75,0.26l1.66,0.95l1.56,0.17l1.27,1.34l0.04,0.26l-0.25,0.64l1.06,0.32L391.05,63l-1.2,1.12l-1.07,0.21l-3.17,0.23l-2.67,-0.38l-1.8,0.3l-0.48,0.29l-0.44,0.65l0.03,0.41l0.56,0.87l1.48,0.93l1.26,-0.15l0.8,0.21l0.02,0.84l-0.28,0.52l1.76,0.92l-0.17,0.28l-1.26,0.17l-0.86,0.34l-0.29,0.46l-0.97,0.17l-0.17,0.34l0.54,0.32l2.01,0.35l2.71,1.18l1.22,2.08l-0.28,1.61l-0.01,1.26l1.02,0.18l0.8,0.49l0.21,0.33l0.14,1.34l0.23,0.72l2.78,2.74l0,0l-0.69,0.59l-1.29,0.15l-1.29,0.77l-0.36,-0.05l-1.39,-0.51l-1.13,-1.38l-0.46,-0.31l-1.08,0.26l-0.51,-0.1l-1.29,-0.61l-0.62,-0.46l-0.51,-1.13h-0.87l-1.6,0.41l-1.44,-0.31l-1.29,0.05l-2.01,1.18l-2.26,0.77l-1.75,1.13l-1.03,0.31l-0.72,0.05l-0.62,-0.31v-0.41L369,84.11l-0.77,-0.31l-0.57,-0.56l-0.51,0.05l-0.26,0.31l-0.31,1.33l-0.36,0.26l-0.82,1.38l-0.21,0.72l-0.05,2.2l-0.15,0.82l-0.67,0.41l-0.26,0.66l-1.08,0.56l-0.46,0.56l-0.1,0.67l0.31,1.18l-1.29,2.45l-1.6,2.15l-0.87,0.77l-0.57,1.18l-1.03,0.87l-2.32,0.05l-2.31,0.87l-1.96,-0.05l-0.41,0.41l-0.26,1.58l-0.51,0.26l-0.77,0.92l-1.03,-0.2l-0.82,0.92l-0.77,-0.1l-0.57,-0.26h-1.34l-0.87,0.97l-0.67,-0.05l-0.46,-0.2l-0.41,-0.46l-0.15,-0.61l-0.31,-0.41l-0.51,-0.2l-0.72,-0.1l-0.82,0.46l-0.21,-0.26l-0.21,-1.02l-0.77,-0.87l-1.59,-0.46l-0.62,-0.51l-0.26,-0.46l-0.79,-0.42l0,0l0.49,-0.81l-0.18,-0.3l0.12,-0.75l0.8,-0.47l0.52,-0.92l0.38,-0.31l0.13,-0.99l-0.11,-1.19l-0.13,-0.13l0.49,-0.66l-0.07,-0.27l0.56,-0.16l0.54,0.25l0.45,-0.64l0.67,-0.11l0.36,-0.34l-0.4,-0.81l0.05,-0.23l0.69,-0.52l-0.02,-0.22l-0.51,-0.25l-0.76,0.34l-0.2,-0.45l0.16,-0.96l-0.35,-0.19l-0.16,-0.29l-0.02,-0.82l0.34,-1.31l1.84,-0.2l0.78,-0.49l0.04,-0.23l-0.33,-0.43l0.31,-0.63l0.67,0.11l0.43,-0.23l0.51,-0.59h0.67l0.2,-0.59l0.45,-0.41l0.58,-0.18l0.78,0.02l0.6,-0.5l0.07,-0.31l-0.47,-0.34l-0.11,-0.34l-0.67,-0.79l-0.99,0.31l-0.31,-0.47l0.31,-0.38l0.09,-0.41v-0.49l-0.23,-0.14v-0.38l0.6,-0.52v-0.43l0.18,-0.34l-0.18,-0.27l-0.51,-0.13l-0.04,-0.18l0.96,-0.77l0.25,-1.06l1.59,-1.06l0.34,-0.83l0.61,0.65l0.04,0.41l1.23,-0.09l0.81,-0.77l1.03,-0.14l0.18,-0.34v-0.84l0.13,-0.25l0.81,-0.67v-0.2l-0.71,-0.52l-0.05,-0.18l0.42,-2.81l0.63,-1.26l0.34,0.02l0.4,0.63l0.4,-0.58l-0.58,-1.01l-0.13,-1.1l-0.38,-0.47l-0.16,-0.86l0.05,-1.55l0.14,-0.71l0.52,-1.04l0.04,-0.56l-0.05,-0.18l-0.78,-0.56l-0.13,-0.31l0.85,-0.23l0.45,-0.41l0.67,-2.08l0,0L353.97,56.18z",
    //     "classId" : "kalimantanUtara"
    //   },
    //   {
    //     "id": 2,
    //     "pathId" : "M393.51,84.34L394.95,85.91L395.69,87.14L395.67,87.57L395.06,88.49L392.35,90.94L391.35,90.52L391.05,90.53L391.52,90.97L391.73,91.68L391.64,93.85L391.79,94.45L392.59,95.36L394.89,96.95L396.34,98.41L401.27,101.31L401.8,102.66L403.12,103.27L403.71,103.18L404.31,103.36L407.41,106.02L407.76,106.94L408.52,107.83L409.69,108.3L409.96,108.27L411.21,108.68L411.39,108.84L411.46,109.79L410.9,110.59L410.17,111.28L407.75,112.95L405.71,112.18L402.74,112.46L399.95,112.21L396.87,111.63L395.24,110.89L394.54,110.17L393.87,108.37L393.2,107.8L392.39,107.4L392.15,107.49L392.12,107.93L394.52,112.03L394.61,112.77L394.38,113.14L394,113.21L393.66,113.11L392.91,112.41L392.33,112.31L390.74,112.82L389.54,113.99L389.18,114.76L389.17,115.67L387.46,119.2L386.55,119.86L385.74,121.59L385.03,123.69L384.79,124.92L385.23,126.15L385.7,126.57L385.85,127.26L385.66,127.69L385.03,128.36L384.24,130.83L384.25,131.3L384.85,132.58L384.4,135.7L386.97,134.03L387.42,133.89L387.63,133.98L387.7,134.25L386.64,137.84L387.46,139.61L387.49,140.05L387.35,140.27L384.56,141.51L382.42,141.39L381.72,140.56L381.3,140.82L381.16,141.62L379.21,143.97L377.16,147.31L376.78,147.64L375.38,148.26L373.54,148.59L372.22,145.62L372.53,144.5L372.45,144.3L372.21,144.36L371.73,145.65L371.74,146.19L372.44,146.89L373.03,148.2L372.48,150.2L370.23,150.98L368.73,152.03L368.6,152.19L368.69,152.95L369.18,153.74L369.07,154.22L368.74,154.62L366.37,155.56L364.71,156.37L363.28,157.27L363.4,157.58L363.93,157.85L364.63,157.7L365.22,157.23L366.04,157.05L366.76,157.13L367.11,157.34L367.37,159.58L367.33,161.85L366.94,162.34L365.85,162.72L365.6,163L366.92,163.28L367.73,163.28L368.14,162.88L368.48,163.62L368.43,163.96L369.85,164.34L369.74,165.73L369.04,168.2L369.04,168.2L367.71,167.59L366.61,167.3L363.91,167.27L362.63,166.85L359.9,166.7L359.51,166.63L358.98,166.14L358.44,166.63L357.66,166.92L357.56,167.23L357.17,167.59L356.63,167.76L356.35,167.23L356.38,166.21L355.67,164.48L355.85,162.96L356.21,162.4L356.06,162.15L355.46,161.9L354.96,162.04L354.61,161.76L354.43,161.8L354.64,161.2L354.36,160.88L354.36,160.46L354.68,159.75L354.75,159.04L354.61,157.17L354.25,156.43L353.76,155.87L353.65,155.37L353.79,155.06L353.08,154.49L352.94,154.17L353.08,153.47L352.8,153.08L352.19,152.97L351.59,153.22L351.41,152.87L351.48,152.52L352.12,151.95L352.55,151.28L353.37,150.58L353.69,150.65L353.54,151.42L353.79,151.49L354.86,150.22L355.11,149.23L355.11,149.23L355.1,149.24L355.1,149.24L355.33,147.94L355.78,147.41L356.69,146.75L356.72,146.49L355.96,145.83L355.64,145.9L355.3,146.23L355.07,146.09L354.88,145.4L354.54,145.26L354.14,144.82L353.72,144.87L353.51,143.92L353.28,143.63L351.96,142.79L351.36,141.81L350.57,141.12L348.89,140.82L348.48,139.81L348.51,138.62L348.23,136.72L347.73,136.29L347.34,135.26L346.62,134.52L346.39,134.46L346.6,133.37L346.23,133.27L346.04,131.81L346.46,131.73L346.5,131.25L346.21,130.8L346.76,129.85L346.76,129.18L347.2,128.92L347.62,128.34L347.26,127.22L344.84,128.39L344.55,129.05L344.08,129.06L343.61,129.29L342.85,129.95L341.95,129.71L340.93,129.9L340.93,129.37L340.72,128.9L340.8,128.26L340.35,127.41L340.25,125.97L340.01,125.66L339.64,125.68L339.32,125.33L338.73,125.44L338.44,124.94L338.81,124.06L338.73,123.64L339.16,123.16L339.18,122.81L339.57,122.74L339.76,122.54L340.29,121.41L340.96,120.98L341.23,121.04L341.34,121.25L341.65,121.09L342.38,121.04L342.55,121.06L342.89,121.54L343.04,121.22L344.23,120.39L344.43,120L344.48,119.29L343.83,118.72L343.51,118.07L342.78,117.21L342.22,116.05L341.93,114.44L341.54,113.74L341.09,113.37L340.58,113.23L339.78,113.98L339.74,114.21L340.04,114.69L339.57,114.57L339.37,114.15L338.84,113.82L338.45,114.06L337.95,113.99L337.13,114.59L336.81,114.45L336.26,114.55L335.77,115.2L334.88,115.84L334.09,115.87L334.09,116.5L333.88,116.89L332.88,116.92L332.21,117.37L332.27,118.04L332.06,118.1L331.36,117.98L330.85,117.55L330.12,117.37L328.57,117.55L328.15,117.37L328.05,116.95L327.42,116.62L327.42,116.41L327.75,116.08L327.42,115.11L326.69,114.66L326.39,114.78L326.03,114.69L324.75,115.35L324.21,115.26L323.51,115.5L323.27,115.44L323.02,115.62L322.6,115.29L322.11,115.29L322.11,115.29L321.99,115.05L322.17,114.51L322.84,114.24L323.02,113.88L322.96,113.06L323.48,112.43L323.48,112.13L322.9,111.65L322.63,110.95L322.72,110.68L323.24,110.17L323.42,109.66L323.3,109.23L322.96,108.93L323.05,108.57L323.72,108.42L324.02,108.18L324.12,107.52L324.63,107.09L325.33,107.03L325.63,107.18L326.18,106.82L326.69,106.91L327,106.61L327.21,105.92L327.21,105.23L327.54,104.8L327.33,104.62L327.45,102.9L328.27,102.48L328.27,102.48L328.64,102.33L328.64,102.33L328.88,101.88L329.58,101.79L331.16,101.12L331.73,100.58L334.31,102.09L334.71,101.97L334.92,101.54L334.92,101.54L335.71,101.96L335.96,102.42L336.58,102.93L338.17,103.39L338.95,104.26L339.15,105.28L339.36,105.54L340.18,105.08L340.9,105.18L341.42,105.39L341.73,105.79L341.88,106.41L342.29,106.87L342.75,107.07L343.42,107.12L344.3,106.15L345.64,106.15L346.2,106.41L346.97,106.51L347.8,105.59L348.83,105.79L349.6,104.87L350.11,104.62L350.37,103.03L350.78,102.62L352.74,102.68L355.05,101.81L357.37,101.76L358.4,100.89L358.96,99.71L359.84,98.94L361.43,96.8L362.72,94.34L362.41,93.17L362.51,92.5L362.98,91.94L364.06,91.38L364.31,90.71L364.98,90.3L365.14,89.48L365.19,87.28L365.39,86.57L366.22,85.19L366.58,84.93L366.89,83.6L367.14,83.29L367.66,83.24L368.22,83.81L369,84.11L369.3,84.42L369.3,84.83L369.92,85.14L370.64,85.08L371.67,84.78L373.42,83.65L375.68,82.88L377.69,81.71L378.98,81.66L380.42,81.96L382.01,81.55L382.89,81.55L383.4,82.68L384.02,83.14L385.31,83.75L385.82,83.86L386.9,83.6L387.36,83.91L388.5,85.29L389.88,85.8L390.25,85.85L391.53,85.08L392.82,84.93L0,NaNz",
    //     "classId" : "kalimantanTimur"
    //   },
    //   { 
    //     "id": 3,
    //     "pathId" : "M366.16,189.16l-0.17,0.2l-1.1,-1.78l0.65,-1.65l0.86,-1.09l0.23,-0.06l0.2,0.45l0,0.59L366.16,189.16zM361.45,196.11l-0.56,0.16l-0.53,-0.05l-0.07,-0.21l0.06,-0.77l0.39,-1.28l-0.06,-1.79l-0.9,-1.25l-0.25,-0.81l0.02,-0.66l1.9,-5.56l2.45,-1.75l0.23,0.06l0.06,0.35l-0.36,2.29l0.27,2.65l0.82,3.98l-0.24,2.43l-2.51,1.88L361.45,196.11zM355.11,149.23l-0.25,0.99l-1.06,1.27l-0.25,-0.07l0.14,-0.78l-0.32,-0.07l-0.82,0.71l-0.43,0.67l-0.64,0.56l-0.07,0.35l0.18,0.35l0.6,-0.25l0.6,0.11l0.28,0.39l-0.14,0.71l0.14,0.32l0.71,0.56l-0.14,0.32l0.11,0.49l0.5,0.56l0.35,0.74l0.14,1.87l-0.07,0.71l-0.32,0.71v0.42l0.28,0.32l-0.21,0.6l0.18,-0.04l0.35,0.28l0.5,-0.14l0.6,0.25l0.14,0.25l-0.35,0.56l-0.18,1.52l0.71,1.73l-0.04,1.02l0.28,0.53l0.53,-0.18l0.39,-0.35l0.11,-0.32l0.78,-0.28l0.53,-0.49l0.53,0.49l0.39,0.07l2.73,0.14l1.28,0.42l2.7,0.04l1.1,0.28l1.33,0.62l0,0l-0.39,1.87l-0.52,0.66l-0.4,0.02l-0.16,-0.16l-0.12,-0.61l-0.76,-0.4l-1.98,0.4l-0.05,1.62l1.01,0.91l0.2,3.11l-0.33,0.85l-1.39,1.8l-0.51,0.26l-0.23,-0.05l-0.24,-0.35l-0.21,-1.2l-0.95,-1.65l-0.2,-0.19l-0.13,0.14l-0.38,1.72l0.19,0.89l0.98,1.4l0.57,0.5l0.1,0.98l-0.77,0.39l-1.25,1.71l-1.52,2.87l-0.38,2.45l-0.24,0.47l-0.38,0.22l-1.98,0.29l-1.15,1.1l-0.65,0.42l-3.24,1.38l-4.53,1.63l-6.2,2.59l-3.79,2.28l-1.24,0.16l-0.36,-0.39l-0.13,-0.57l-0.01,-7.32l-0.11,-0.84l-0.35,-0.7l-1.02,-1.34l-0.71,-0.66l-0.73,0.08l-1.54,-0.88l0,0l0,-0.91l0.78,-2.37l1.46,-2.29l0.39,-2.26l1.53,-3l0.99,-0.28l0.35,-0.28l0.18,-0.21l-0.14,-0.25l0.21,-0.39l0.36,0.11l0.85,-0.32l0.46,-0.6l0.32,-1.8l0.7,-0.55l0.5,-0.78l-0.04,-0.64l0.21,-0.32l0.57,0.04l5.9,-4.27l0.39,0.28l0.32,-0.04l0.21,-1.31l0.39,-0.81l-0.71,-1.55v-0.39l0.96,-0.74l0.25,-0.81l-0.67,-0.92l-0.11,-0.78l0.71,-2.22l0.89,-3.88l0.14,-0.18l1.85,-0.14l1.81,-0.67l0.39,-0.32l0.5,0.11l0.99,-0.78l0,0L355.11,149.23z",
    //     "classId" : "kalimantanSelatan"
    //   },
    //   {
    //     "id": 4,
    //     "pathId" : "M235.75,155.4l-0.39,-0.07l-0.58,-1.45l0.15,-0.3l1.59,-0.47l0.62,0.14l0.55,0.61l0.02,0.26l-0.32,0.63L235.75,155.4zM247.56,143.86l0.54,0.06l0.42,-0.33l0.63,0.04l0.46,0.47l0.4,0.12l0.34,-0.14l0.33,-0.4l0.47,0.24l0.31,0.53l0.19,0.86l-0.07,0.53l0.23,0.25l0,0.25l-5.01,2.89l-1.31,-0.43l-0.44,-0.45l0.56,-0.61l0.18,-0.51l0.42,-2.2l-0.04,-0.43l0.75,-1.05L247.56,143.86zM249.5,91.1l-0.5,1.38l-0.38,0.22l-0.3,0.75l-0.6,0.07L247.67,94l0.17,0.65l0.45,0.32l0.4,0.62l1.2,0.3l0.15,0.35l-0.42,2.14l0.3,0.65l1.82,1.81l0.35,0.15l0.83,1.29l1.27,0.05l0.5,0.2l0.25,0.3l0.17,1.39l1.49,0.74l0.35,0.87l0.43,0.35l0.6,-0.07l0.73,0.15l0.45,0.67l0.15,0.52l0.48,0.4l0.42,0.72l0.32,0.97h0.98l0.97,0.25l0.9,1.37l0.35,0.27l1.2,0.42l0.73,0.07l0.55,-0.12l0.4,-0.67l0.45,0.45l0.45,-0.02l0.38,-0.32l0.77,-0.25l0.95,-0.55l0.72,-0.12l0.63,-0.55l0.27,-0.6l3.85,-0.5l1.95,-0.57l0.32,0.3l1.75,0.57l0.5,0.32l0.5,-0.02l0.7,-0.3l0.77,0.12l0.7,1.17l0.23,-0.02l0.1,-0.52l0.52,-0.07l1.13,-0.82l0.27,-0.02l1,0.52l0.58,-0.17l1.7,0.35l0.32,-0.77l1.35,-1.39l3.22,-0.22l-0.03,-0.65l0.25,-0.6l0.15,-1.49l0.85,-0.84l0.05,-0.65l-0.42,-0.65l0.5,-0.55h0.42l1.27,-0.79l1.57,-0.35l0.55,-0.27l0.08,-0.3l1.02,-0.37l2.9,0.37l1.65,-0.12l0.55,0.4l0.35,0.02l0.57,-0.3l0.35,-0.47l0.2,-0.05l0.82,0.22l0.92,-0.07l0.63,0.12l0.52,0.3l0.13,0.4l-0.17,0.05l-0.5,0.99l-0.5,0.17l-0.3,0.3l-0.15,0.45l0.75,0.07l1.35,-0.45l0.37,0.05l0.38,0.67l0.75,0.22l1.6,-0.15l0.77,0.2l0.72,0.5l0.17,0.35l0.6,0.37l0.3,0.37l0.4,0.02l0.33,-0.3l0.57,-0.22l0.82,-0.05l0.67,0.3l0.75,1.34l0.32,0.1h0.3l0.35,-0.22l0.38,-0.45l1.9,-0.77l0.28,-0.84l-0.13,-0.2l0.07,-0.17l1.92,-0.79l0.4,-0.45l3.05,-0.32l0.97,0.65l0.2,0.28l0,0l-0.03,0.01l0,0l-0.82,0.42l-0.12,1.72l0.21,0.18l-0.33,0.42v0.69l-0.21,0.69l-0.3,0.3l-0.52,-0.09l-0.55,0.36l-0.3,-0.15l-0.7,0.06l-0.52,0.42l-0.09,0.66l-0.3,0.24l-0.67,0.15l-0.09,0.36l0.33,0.3l0.12,0.42l-0.18,0.51l-0.52,0.51l-0.09,0.27l0.27,0.69l0.58,0.48v0.3l-0.52,0.63l0.06,0.81l-0.18,0.36l-0.67,0.27l-0.18,0.54l0.12,0.24l0,0l-0.51,0.29l-0.23,0.71l-0.36,0.24l-0.19,0.44l-0.37,0.16l-0.19,0.42h-0.4l-0.68,0.42l-0.27,1.09l-1.31,0.76l-0.16,0.31l-0.96,0.82l-0.05,0.23l-0.53,0.41l-0.92,0.56l-1.38,-0.26l-0.74,0.2l-0.63,0.38l-0.03,0.19l1.03,1.01l1.55,0.82l-0.15,1.34l0.19,0.35l0.36,0.25l-0.26,0.38l-0.18,0.76l0.37,0.05l0.07,0.22l-0.36,0.79l-0.44,0.26l0.34,0.2l-0.08,0.33l-0.36,0.07l-0.27,0.57l-0.56,0.52l-0.85,0.18l-0.42,0.6l-0.53,0.37l-0.19,0.6l-0.29,0.22l0.78,0.71l0.19,0.78l-0.66,0.8l-0.16,0.49l-0.12,0.08l-0.15,-0.14l-0.29,-0.5l-0.49,-0.01l-0.14,-0.35l-0.38,0.12l-0.27,0.52h-0.37l-0.33,0.23l-1.33,-0.14l-0.33,0.31l-1.44,0.42l-0.67,0.63l-0.7,0.12l-0.58,-0.18l-0.58,0.15l-0.08,0.86l-0.74,0.03l-0.25,0.42l-0.89,0.03l-0.6,0.35v0.2l-0.92,0.08l-0.1,0.19l-0.85,-0.16l-0.08,0.46l-0.23,0.23l-0.37,-0.26l-0.01,-0.61l-0.37,-0.14l-0.49,0.44l-0.85,0.31l-0.41,-0.18l-0.36,0.44l-0.41,-0.48l-0.64,-1.21l-0.34,-0.29l-0.55,-0.03l-0.82,1.14l0.23,0.72l-0.1,0.07h-0.38l-0.77,-0.31l-1.08,-0.11l-0.19,0.18l0.31,1.12l-0.07,0.31l-1.21,0.34l-0.37,-0.15l-0.49,-0.53l-0.14,0.86l0.29,0.76l-0.67,-0.15l-0.15,0.07l-0.16,0.57l-0.46,0.26l-1.01,-0.07l-0.77,0.27l-0.22,0.3l-0.93,0.56l-0.59,0.04l-0.3,0.37l0.18,0.69l-0.47,0.48l-0.48,0.15l-0.27,0.54l0.31,0.64l-0.26,0.48l0.33,0.29l-0.12,0.3l-1.19,0.2l-0.31,0.26l-1.11,0.01l-0.22,0.18l-0.12,0.54h-0.3l-0.36,0.75l-0.63,0.33l-0.16,0.6l-0.42,0.48l-0.21,0.04l0.04,0.29l-1.11,-0.22l-0.12,0.53l-0.38,-0.14l0.14,0.79l-0.08,0.65l-0.31,-0.14l-0.04,-0.49l-0.27,-0.16l-0.82,0.49l0.26,0.39l0.07,0.45l-0.81,0.22l-0.37,-0.42l-0.48,0.15l-0.3,0.3l-0.49,-0.39l-0.44,0.54l-0.88,0.22l-0.29,0.42l-0.55,0.38l0.04,0.78l0.44,0.11l0.18,0.44l0.26,0.19l0.42,-0.1l0.18,-0.14l0.11,-0.45l0.42,-0.18l0.29,0.16l0.22,0.52l0.12,1.2l-0.15,0.38l-0.37,0.34l-0.11,0.44l-0.03,0.64l0.33,0.41l-0.04,0.37l-0.34,0.42l0.15,0.42l0.34,0.23l0.52,-0.14l0.89,0.12l0.04,0.15l-0.15,0.4l0.07,0.42l-0.7,0.59l0.68,1.29l-0.04,0.23l-0.19,0.23l0.03,0.29l-0.62,0.72l0.69,1.13l0.52,1.82l0.08,1.31l0.53,2.06l-0.33,0.82l0.45,0.27l0.34,-0.01l0.15,0.45l-0.52,0.91l-0.9,0.45l-1.45,0.37l-0.15,0.57l-0.62,0.52l-1.18,0.2l-0.78,0.48l-1.21,0.41l-0.38,0.29l-0.34,0.94l0,0L267,179l-0.34,-0.14l0.08,-0.3l-0.19,-0.69l0.08,-0.84l-0.37,-0.87l-0.47,-0.57l-0.64,-0.07l-1.08,0.33l-1.31,0.63l-1.95,1.6l-0.2,-0.27l-0.47,-0.1l-0.17,-0.94l-0.34,-0.57l0.54,-1.07l0.1,-0.6l-0.34,-0.47l-0.41,-0.19l-0.18,-1.66l-1.26,-0.37l0.67,-0.8l0.25,-1.26l-1.04,-3.8l-0.73,-0.87l0.04,-1.11l0.49,-1.46l0.01,-0.68l-0.7,-1.8l-0.69,-0.5l-1.67,-0.71l-0.78,-0.75l0.19,-0.92l1.34,-0.79l0.69,-1.2l0.65,-3.33l0.01,-1.52l-0.22,-0.74l-0.21,-0.38l-0.66,-0.52l-0.8,-0.18l-0.87,-1.1l0.52,-1.4l-1.92,-0.63l-1.17,-1.61l-0.67,-0.41l-0.73,0.49l-1.13,-0.75l-0.41,-0.76l-0.3,-0.27l-1.98,-0.55l-0.29,-0.27l-0.48,0.12l0.2,0.84l-0.26,0.41l-0.26,0.08l-1.72,-0.57l-0.56,-0.57l-0.46,-0.89l0.2,-2.6l0.46,0.12l0.36,0.37l1.15,0.34l0.79,0.04l1.05,0.63l0.02,-0.51l-0.97,-0.73l-0.87,-0.03l-0.23,-0.46l0.27,-0.46l0.04,-0.66l-1.42,0.03l-0.4,0.13l-1.68,-0.6l-0.72,-0.81l-0.43,-1.93l-0.99,-2.58l0.34,-0.59l0.64,-0.13l-0.17,-0.81l1.13,-1.79l0.38,-1.61l-0.2,-1.18l-0.84,-1.89l-1.1,-1.16l-0.82,-0.24l-1.23,-0.05l-0.28,-0.26l0.03,-0.63l0.45,-0.94l0,-0.52l-0.71,-0.84l0.47,-2.12l-0.27,-0.92l-0.73,-0.79l0.25,-0.87l-0.75,-0.89l0.15,-0.43l0.69,-0.55l0.52,-0.05l0.67,-0.69l0.39,-1.14l-0.43,-1.42l-0.49,-0.42l-0.47,-1.36l0.13,-0.2l0.73,0.17v-0.76l0.6,-1.12l0.73,-0.73l0.23,-0.79l-0.2,-1.26l0.13,-0.89l0.37,-0.69l0.74,-0.69l2.22,-1.34l0.54,-0.59v-0.45l0.5,-1.09l0.7,-0.96l0.06,-1.05l-0.26,-0.61l0.07,-0.26l0.47,-0.17l1.38,-0.03l0.31,-0.44l0.47,-0.2l1.69,-0.03L249.5,91.1zM235.53,77.73l-0.17,0.06l-0.97,-0.74l0.92,-0.77l0.31,-1.05l0.48,-0.17l0.27,0.08l0.18,0.35l-0.18,1.49L235.53,77.73zM181.92,77.95l-0.38,0.02l-0.26,-0.27l-0.33,-2.69l0.12,-0.88l0.18,-0.04l2.55,1.42l-0.61,1.34l-0.87,0.88L181.92,77.95zM226.4,63.5l-2.29,0.48l-1.46,-0.81l0.6,-0.84l1.25,-0.91l-0.63,-0.37l-1.79,-0.59l-0.98,-1.85l-0.23,-1.12l0.59,-0.71l0.74,-0.21l1.96,-2.05l1.21,0.28l0.11,0.84l0.22,0.49l2.2,2.17l0.16,1.79l-0.22,0.78L226.4,63.5z",
    //     "classId" : "kalimantanBarat"
    //   },
    //   { 
    //     "id": 5,
    //     "pathId" : "M268.36,178.17L268.71,177.24L269.09,176.95L270.29,176.54L271.07,176.07L272.25,175.86L272.87,175.34L273.02,174.77L274.47,174.4L275.38,173.95L275.9,173.04L275.74,172.59L275.4,172.61L274.95,172.33L275.28,171.52L274.75,169.45L274.66,168.15L274.14,166.32L273.46,165.19L274.07,164.47L274.05,164.18L274.24,163.95L274.28,163.72L273.59,162.43L274.29,161.84L274.22,161.42L274.38,161.03L274.33,160.88L273.44,160.75L272.92,160.89L272.58,160.66L272.43,160.24L272.77,159.81L272.81,159.45L272.49,159.04L272.51,158.4L272.62,157.96L272.99,157.62L273.14,157.24L273.02,156.04L272.8,155.52L272.51,155.36L272.09,155.54L271.98,155.99L271.8,156.12L271.38,156.22L271.12,156.03L270.94,155.59L270.5,155.48L270.46,154.71L271.01,154.33L271.29,153.9L272.17,153.69L272.61,153.14L273.1,153.54L273.4,153.24L273.88,153.09L274.25,153.51L275.06,153.29L274.99,152.84L274.73,152.45L275.55,151.96L275.83,152.12L275.87,152.61L276.18,152.75L276.27,152.09L276.13,151.3L276.51,151.44L276.64,150.91L277.75,151.13L277.7,150.84L277.91,150.8L278.33,150.32L278.5,149.73L279.13,149.4L279.49,148.65L279.79,148.65L279.91,148.11L280.13,147.93L281.24,147.92L281.55,147.66L282.75,147.45L282.87,147.15L282.54,146.87L282.8,146.39L282.48,145.75L282.76,145.21L283.24,145.06L283.7,144.58L283.53,143.89L283.83,143.52L284.42,143.48L285.35,142.92L285.57,142.63L286.33,142.35L287.35,142.42L287.81,142.16L287.97,141.59L288.12,141.52L288.8,141.67L288.51,140.91L288.65,140.05L289.14,140.58L289.51,140.73L290.71,140.39L290.78,140.08L290.47,138.97L290.66,138.79L291.74,138.9L292.51,139.21L292.89,139.21L292.99,139.14L292.75,138.42L293.58,137.28L294.12,137.31L294.47,137.59L295.11,138.8L295.52,139.28L295.88,138.84L296.29,139.02L297.14,138.71L297.63,138.27L298,138.41L298.01,139.02L298.38,139.28L298.62,139.05L298.7,138.58L299.55,138.75L299.64,138.56L300.56,138.48L300.56,138.27L301.16,137.92L302.05,137.89L302.3,137.47L303.04,137.44L303.12,136.59L303.7,136.44L304.27,136.61L304.97,136.49L305.64,135.86L307.08,135.44L307.41,135.13L308.74,135.27L309.07,135.03L309.44,135.03L309.71,134.52L310.1,134.4L310.23,134.75L310.73,134.76L311.01,135.27L311.16,135.4L311.29,135.32L311.45,134.83L312.11,134.03L311.92,133.25L311.14,132.54L311.42,132.33L311.62,131.73L312.15,131.36L312.57,130.76L313.43,130.58L313.99,130.07L314.26,129.5L314.62,129.43L314.7,129.1L314.36,128.9L314.8,128.64L315.15,127.85L315.08,127.63L314.71,127.58L314.89,126.81L315.15,126.43L314.8,126.19L314.6,125.84L314.76,124.49L313.21,123.68L312.18,122.67L312.21,122.48L312.84,122.1L313.58,121.9L314.96,122.15L315.88,121.6L316.41,121.19L316.47,120.96L317.43,120.14L317.59,119.83L318.91,119.07L319.18,117.98L319.86,117.56L320.26,117.56L320.45,117.14L320.82,116.97L321.01,116.54L321.37,116.29L321.6,115.58L322.11,115.29L322.11,115.29L322.6,115.29L323.02,115.62L323.27,115.44L323.51,115.5L324.21,115.26L324.75,115.35L326.03,114.69L326.39,114.78L326.69,114.66L327.42,115.11L327.75,116.08L327.42,116.41L327.42,116.62L328.05,116.95L328.15,117.37L328.57,117.55L330.12,117.37L330.85,117.55L331.36,117.98L332.06,118.1L332.27,118.04L332.21,117.37L332.88,116.92L333.88,116.89L334.09,116.5L334.09,115.87L334.88,115.84L335.77,115.2L336.26,114.55L336.81,114.45L337.13,114.59L337.95,113.99L338.45,114.06L338.84,113.82L339.37,114.15L339.57,114.57L340.04,114.69L339.74,114.21L339.78,113.98L340.58,113.23L341.09,113.37L341.54,113.74L341.93,114.44L342.22,116.05L342.78,117.21L343.51,118.07L343.83,118.72L344.48,119.29L344.43,120L344.23,120.39L343.04,121.22L342.89,121.54L342.55,121.06L342.38,121.04L341.65,121.09L341.34,121.25L341.23,121.04L340.96,120.98L340.29,121.41L339.76,122.54L339.57,122.74L339.18,122.81L339.16,123.16L338.73,123.64L338.81,124.06L338.44,124.94L338.73,125.44L339.32,125.33L339.64,125.68L340.01,125.66L340.25,125.97L340.35,127.41L340.8,128.26L340.72,128.9L340.93,129.37L340.93,129.9L341.95,129.71L342.85,129.95L343.61,129.29L344.08,129.06L344.55,129.05L344.84,128.39L347.26,127.22L347.62,128.34L347.2,128.92L346.76,129.18L346.76,129.85L346.21,130.8L346.5,131.25L346.46,131.73L346.04,131.81L346.23,133.27L346.6,133.37L346.39,134.46L346.62,134.52L347.34,135.26L347.73,136.29L348.23,136.72L348.51,138.62L348.48,139.81L348.89,140.82L350.57,141.12L351.36,141.81L351.96,142.79L353.28,143.63L353.51,143.92L353.72,144.87L354.14,144.82L354.54,145.26L354.88,145.4L355.07,146.09L355.3,146.23L355.64,145.9L355.96,145.83L356.72,146.49L356.69,146.75L355.78,147.41L355.33,147.94L355.1,149.24L355.1,149.24L354.75,149.55L354.75,149.55L353.76,150.33L353.26,150.22L352.87,150.54L351.06,151.21L349.21,151.35L349.07,151.53L348.18,155.41L347.47,157.63L347.58,158.41L348.25,159.33L348,160.14L347.04,160.88L347.04,161.27L347.75,162.82L347.36,163.63L347.15,164.94L346.83,164.97L346.44,164.69L340.55,168.96L339.98,168.93L339.76,169.25L339.8,169.88L339.3,170.66L338.6,171.21L338.28,173.01L337.82,173.61L336.97,173.92L336.61,173.82L336.4,174.21L336.54,174.45L336.36,174.67L336.01,174.95L335.01,175.23L333.49,178.23L333.1,180.49L331.64,182.79L330.86,185.15L330.86,186.06L330.86,186.06L328.44,184.91L326.58,184.41L325.36,184.5L321.77,186.22L319.92,186.5L319.12,186.47L318.05,185.82L318.54,184.26L318.61,182.68L318.35,181.77L317.99,181.24L315.73,181.38L315.28,181.87L315.11,182.47L313.84,182.76L311.75,181.43L308.63,178.17L308.11,178.1L306.64,179.7L306.53,180.27L306.97,180.84L306.67,181.84L303.36,183.87L302.18,184.7L301.48,185.42L299.73,185.96L299.41,185.93L297.43,184.36L295.5,183.69L294.46,183.67L293.01,184.23L289.32,187.75L288.71,188.09L288.3,188.15L286.85,187.55L287.5,185.27L287.03,181.61L287.03,180.79L287.31,179.71L287.28,178.99L285.92,176.56L285.52,174.96L285.04,174.89L285.11,175.69L284.54,176.53L284.97,176.88L284.87,177.33L283.93,177.5L283.63,177.83L282.39,178.6L282.22,178.13L281.31,177.33L280.57,176.76L280.14,176.69L278.66,176.69L275.61,178.44L274.39,178.97L273.42,179.27L271.94,179.47L269.76,177.93z",
    //     "classId" : "kalimantanTengah"
    //   },
    // ];

}
