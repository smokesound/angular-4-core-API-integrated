import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { HomeService } from './service/home/home.service';



import { HomeComponent } from './page/home/home.component';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [HomeService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
