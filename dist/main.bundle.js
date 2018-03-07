webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_home_home_service__ = __webpack_require__("../../../../../src/app/service/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_component__ = __webpack_require__("../../../../../src/app/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_home_home_component__ = __webpack_require__("../../../../../src/app/page/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_mapdetail_mapdetail_component__ = __webpack_require__("../../../../../src/app/page/mapdetail/mapdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_mapdetail_mapdetail_service__ = __webpack_require__("../../../../../src/app/service/mapdetail/mapdetail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page_calondetail_calondetail_component__ = __webpack_require__("../../../../../src/app/page/calondetail/calondetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_webstorage_service__ = __webpack_require__("../../../../angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_7__page_home_home_component__["a" /* HomeComponent */] },
    { path: 'mapdetail/:id', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_8__page_mapdetail_mapdetail_component__["a" /* MapdetailComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__page_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__page_mapdetail_mapdetail_component__["a" /* MapdetailComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__page_calondetail_calondetail_component__["a" /* CalondetailComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12_angular_webstorage_service__["b" /* StorageServiceModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__service_home_home_service__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_9__service_mapdetail_mapdetail_service__["a" /* MapdetailService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page/calondetail/calondetail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page/calondetail/calondetail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  calondetail works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/page/calondetail/calondetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalondetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalondetailComponent = /** @class */ (function () {
    function CalondetailComponent() {
    }
    CalondetailComponent.prototype.ngOnInit = function () {
    };
    CalondetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-calondetail',
            template: __webpack_require__("../../../../../src/app/page/calondetail/calondetail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page/calondetail/calondetail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CalondetailComponent);
    return CalondetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".kalimantanUtara{\n\tfill:black;\t\n}\n.kalimantanTimur{\n\tfill:black;\t\n}\n.kalimantanSelatan{\n\tfill:black;\t\n}\n.kalimantanBarat{\n\tfill:black;\t\n}\n.kalimantanTengah{\n\tfill:black;\t\n}\n.kalimantanUtara:hover{\n\tfill:red;\t\n}\n.kalimantanTimur:hover{\n\tfill:red;\t\n}\n.kalimantanSelatan:hover{\n\tfill:red;\t\n}\n.kalimantanBarat:hover{\n\tfill:red;\t\n}\n.kalimantanTengah:hover{\n\tfill:red;\t\n}\n.mapHover:hover{\n\tfill: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t\n\t<a (click)=masukinLocal(2018)> 2013 </a> \n\t<a (clcik)=tahun2018()> 2018 </a>   \n\t2017\n\t2018\n\n<div>\n<svg height=\"500\" width=\"1000\">\n  \n  <path *ngFor=\"let mapkecil of DataProvinsi\" [attr.d]=\"mapkecil.Koordinat\" (click)=\"makeAlert(mapkecil.Provinsi)\" [ngClass]=\"mapkecil.Provinsi\" class=\"mapHover\" stroke=\"white\" />\n  \n</svg>\n\n</div>\n\n</div>\n\n\n             <!--   <div class=\"col-sm-8 col-md-4\">  \n                   <select id=\"Id\" class=\"hideLabel form-control\" name=\"Id\" (change)=\"selectName(value);\">  \n                           <option selected=\"\" value=\"\"></option>  \n                        <option [ngValue]=\"provinsi.Id\" *ngFor=\"let provinsi of DataProvinsi\">  \n                            {{provinsi.Provinsi}}  \n                     </option>  \n                </select>  \n               </div>   -->\n\n               <select  #select [(ngModel)]=\"current\" (change)=\"pilihKota(select.value)\">\n            <option *ngFor=\"let provinsi of DataProvinsi\" [value]=\"provinsi.Provinsi\">{{provinsi.Provinsi}}</option>\n        </select>\n\n     <!--  <select (change)=\"selectName(select.value)\">\n    <option *ngFor=\"let provinsi of DataProvinsi\" [ngValue]=\"provinsi.id\">{{provinsi.title}}</option>\n</select> -->\n <select *ngIf=\"kabupaten\" (change)=\"pilihPartai($event.target.value)\">\n    <option *ngFor=\"let partai of DataPartai\">{{partai.Partai}}</option>\n</select>\n\n<div *ngFor=\"let calon of data2018\">\t\n\t{{calon.Provinsi}}\n\t{{calon.Kota}}\n\t{{calon.Pemilihan}}\n\t{{calon.CalonKepala}}\n\t{{calon.CalonWakil}}\n\t\n\n</div>\n\n\n\n\n<!-- <div *ngFor=\"let provinsi of DataProvinsi\" (click)=\"LihatKota(provinsi.Provinsi)\" >\n  {{ provinsi.No }}\n  {{ provinsi.Provinsi }}\n\n\n</div> -->\n\n\n<!-- \n{{DataProvinsi.limit}} -->\n<!-- <div>\n  <svg height=\"500\" width=\"1000\">\n  \n  <path *ngFor=\"let mapkecil of map\" [attr.d]=\"mapkecil.pathId\" (click)=\"makeAlert(mapkecil.id)\" [ngClass]=\"mapkecil.classId\" stroke=\"white\"/>\n  \n</svg>\n\n<a routerLink=\"/mapdetail/{{userinfo.id}}\" *ngFor=\"let userinfo of userlist\">\t  \n\t  \t{{ userinfo.title }}<br>\n\t  \t{{ userinfo.body }}<br> -->\n\t  \t<!-- <img src=\"{{userinfo.image_url}}\" width=\"75px\"> <br><br>\n\t  </a>\n\t</div>\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/page/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_home_home_service__ = __webpack_require__("../../../../../src/app/service/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_webstorage_service__ = __webpack_require__("../../../../angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






// import { Observable } from 'rxjs/Observable';
// import { MapdetailComponent } from "../mapdetail/mapdetail";


var HomeComponent = /** @class */ (function () {
    function HomeComponent(storage, homeService, router) {
        this.storage = storage;
        this.homeService = homeService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kabupaten = false;
        this.storage.set("binatang", "ayam");
        console.log(this.storage.get("binatang"));
        this.homeService.nyokot()
            .subscribe(function (data) {
            // console.log(data.data);
            _this.dataRaw = data;
            console.log(_this.dataRaw);
            _this.DataProvinsi = _this.dataRaw.data;
        }, function (error) {
            console.log(error);
        });
        this.current = 1;
        this.homeService.dataPartai()
            .subscribe(function (data) {
            // console.log(data.data);
            _this.dataRawPartai = data;
            console.log(_this.dataRaw);
            _this.DataPartai = _this.dataRawPartai.data;
        }, function (error) {
            console.log(error);
        });
        this.current = 2;
    };
    HomeComponent.prototype.masukinLocal = function (params) {
        this.storage.set("tahun", params);
        this.dataTahun = this.storage.get("tahun");
        console.log(this.dataTahun);
        this.homeService.getdatatahun(params)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    HomeComponent.prototype.pilihKota = function (params) {
        var _this = this;
        this.kabupaten = false;
        console.log(this.current);
        this.homeService.getdata2018(params)
            .subscribe(function (data) {
            _this.dataRaw2018 = data;
            console.log(_this.dataRaw2018);
            _this.data2018 = _this.dataRaw2018.data;
            var dataPilihKota = params;
            _this.kabupaten = true;
        }, function (error) {
            console.log(error);
        });
    };
    HomeComponent.prototype.pilihPartai = function (params) {
        var _this = this;
        console.log(this.current);
        var params2 = this.current;
        var dataTahun = this.storage.get("tahun");
        // var params2 = "kota padang";
        console.log(params2);
        this.homeService.getdata2018DobPar(params2, params, dataTahun)
            .subscribe(function (data) {
            // console.log(params);
            // console.log(data);
            _this.dataRaw2018 = data;
            console.log(_this.dataRaw2018);
            _this.data2018 = _this.dataRaw2018.data;
        }, function (error) {
            console.log(error);
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/page/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page/home/home.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4_angular_webstorage_service__["a" /* LOCAL_STORAGE */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angular_webstorage_service__["c" /* WebStorageService */], __WEBPACK_IMPORTED_MODULE_1__service_home_home_service__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page/mapdetail/mapdetail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page/mapdetail/mapdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"keluar\">\n  {{mapkecil.id}}<br>\n\n  \n</div>\n<div (click)=bikinKeluar()>keluarin</div>\n<ul>\n\t<li>bangke</li>\n\t<li>bangke 2</li>\n\t<li>bangke 3</li>\n</ul>\n<div *ngIf=\"peta\">\n\t{{title}} <br><br>\n\n\n</div> -->\n<div>\n\t\n\t\n</div>\n\n\n<div *ngFor= \"let kota of DataKabupaten\" (click)=\"detailKota(kota.Kota)\">\n\t{{kota.Kota}}\n\t{{kota.Provinsi}}\n\t{{kota.Kota}}\n\n</div>\n\n<!-- <div *ngFor= \"let calon of DataCalon\">\n\t{{calon[3]}}\n\t{{calon[4]}}\n\t{{calon[5]}}\n\t{{calon[6]}}\n\n\n\n</div> -->\n\n"

/***/ }),

/***/ "../../../../../src/app/page/mapdetail/mapdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapdetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_mapdetail_mapdetail_service__ = __webpack_require__("../../../../../src/app/service/mapdetail/mapdetail.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapdetailComponent = /** @class */ (function () {
    function MapdetailComponent(route, mapdetailService) {
        this.route = route;
        this.mapdetailService = mapdetailService;
        this.keluar = false;
        this.peta = false;
    }
    MapdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id']; // (+) converts string 'id' to a number
        });
        console.log(this.id);
        this.mapdetailService.getDetailProvinsi(this.id)
            .subscribe(function (data) {
            console.log(data);
            _this.dataLuar = data;
            _this.DataKabupaten = _this.dataLuar.data;
            console.log(_this.DataKota);
        }, function (error) {
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
    };
    MapdetailComponent.prototype.bikinKeluar = function () {
        console.log(this.keluar);
        if (this.keluar == true) {
            this.keluar = false;
        }
        else {
            this.keluar = true;
        }
    };
    MapdetailComponent.prototype.hitApi = function (params) {
        var _this = this;
        this.peta = true;
        this.mapdetailService.ambil(params)
            .subscribe(function (data) {
            console.log(data);
            _this.alldata = data;
            _this.title = _this.alldata.title;
            console.log(_this.alldata);
        }, function (error) {
            console.log(error);
        });
    };
    MapdetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mapdetail',
            template: __webpack_require__("../../../../../src/app/page/mapdetail/mapdetail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page/mapdetail/mapdetail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__service_mapdetail_mapdetail_service__["a" /* MapdetailService */]])
    ], MapdetailComponent);
    return MapdetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service/home/home.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
        this.http = http;
    }
    HomeService.prototype.getting = function () {
        return this.http.get('https://api.tirto.net/infografik/latest');
    };
    HomeService.prototype.nyokot = function () {
        return this.http.get('https://ot.tirto.id/visualisasi-database-01/provinsi');
    };
    HomeService.prototype.dataPartai = function () {
        return this.http.get('https://ot.tirto.id/visualisasi-database-01/partai');
    };
    HomeService.prototype.nyokotlagi = function (params) {
        return this.http.get('https://ot.tirto.id/visualisasi-database-01/kota?q=' + params);
    };
    HomeService.prototype.getdatatahun = function (params) {
        return this.http.get('https://ot.tirto.id/visualisasi-database-01/' + params);
    };
    HomeService.prototype.getdata2018 = function (params) {
        return this.http.get('https://ot.tirto.id/visualisasi-database-01/2018?provinsi=' + params);
    };
    HomeService.prototype.getdata2018DobPar = function (param1, param2, param3) {
        return this.http.get('https://ot.tirto.id/visualisasi-database-01/' + param3 + '?provinsi=' + param1 + '&partai=' + param2);
    };
    HomeService.prototype.getDataTable = function (params) {
        return this.http.get('https://ot.tirto.id/visualisasi-database-01/kota?q=' + params);
    };
    HomeService.prototype.getDataPartai = function (params) {
        return this.http.get('https://ot.tirto.id/visualisasi-database-01/partai' + params);
    };
    HomeService.prototype.sayHello = function () {
        console.log('hello');
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "../../../../../src/app/service/mapdetail/mapdetail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapdetailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapdetailService = /** @class */ (function () {
    function MapdetailService(http) {
        this.http = http;
        this.http = http;
    }
    MapdetailService.prototype.ambil = function (params) {
        return this.http.get('https://ot.tirto.id/visualisasi-database-01/provinsi?q=' + params);
    };
    MapdetailService.prototype.getDetailProvinsi = function (params) {
        return this.http.get('https://ot.tirto.id/visualisasi-database-01/kota?q=' + params);
    };
    MapdetailService.prototype.getDetailKota = function (params) {
        return this.http.get('https://ot.tirto.id/visualisasi-database-01/201?kota=' + params);
    };
    MapdetailService.prototype.sayHello = function () {
        console.log('hello');
    };
    MapdetailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], MapdetailService);
    return MapdetailService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map