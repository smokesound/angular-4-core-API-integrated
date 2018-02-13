import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { HomeService } from './service/home/home.service';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './page/home/home.component';
import { MapdetailComponent } from './page/mapdetail/mapdetail.component';


const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'mapdetail', pathMatch: 'full', component: MapdetailComponent },
];


@NgModule({
  declarations: [
    HomeComponent,
    MapdetailComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
