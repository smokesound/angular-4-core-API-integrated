import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { HomeService } from './service/home/home.service';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './page/home/home.component';
import { MapdetailComponent } from './page/mapdetail/mapdetail.component';
import { MapdetailService } from './service/mapdetail/mapdetail.service';
import { CalondetailComponent } from './page/calondetail/calondetail.component';
import { FormsModule } from '@angular/forms';
import { StorageServiceModule} from 'angular-webstorage-service';


const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'mapdetail/:id', pathMatch: 'full', component: MapdetailComponent },
];


@NgModule({
  declarations: [
    HomeComponent,
    MapdetailComponent,
    AppComponent,
    CalondetailComponent,
  ],
  imports: [
    BrowserModule,
    StorageServiceModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [HomeService, MapdetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
