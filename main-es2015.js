(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Main content container -->\n<div class='jumbotron'>\n  <div class='container'>\n      <div class='row'>\n          <div class='col-sm-8 offset-sm-2'>\n              <router-outlet></router-outlet>\n          </div>\n      </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n            <button mat-icon-button class='alphabet_logo' id='alphabet'></button>\n        </div>\n        <div class='row'>\n            <div class='column'>\n                <button mat-icon-button class='phonics_logo' id='phonics' (mouseenter)='playAudio()' routerLink='/phoneme-categories'></button>\n            </div>\n        </div>\n    </div>\n    <div id='side-menu'></div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/phoneme-categories/phoneme-categories.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/phoneme-categories/phoneme-categories.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n\n        <div class = 'row'>\n            <div class='column'>\n                <button mat-icon-button class='category_button' id='consonants' ></button>\n\n                <button mat-icon-button class='category_button' id='consonant_blends' ></button>\n\n                <button mat-icon-button class='category_button' id='vowel_and_consonants' ></button>\n            </div>\n\n            <div class='column'>\n                <button mat-icon-button class='category_button' id='vowels' (mouseenter)='playAudio()' routerLink='/phoneme-list-all'></button>\n\n                <button mat-icon-button class='category_button' id='vowel_blends' ></button>\n\n                <button mat-icon-button class='category_button' id='all' ></button>\n            </div>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' routerLink='/'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/'></button>\n        <button mat-icon-button class='icon bottom' id='bank'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle'></button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/phoneme-list-all/phoneme-list-all.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/phoneme-list-all/phoneme-list-all.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n        <div class='column'>\n            <button mat-icon-button class='phoneme_button' routerLink='/a'>a</button>\n        </div>\n    </div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' routerLink='/phoneme-categories'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/'></button>\n        <button mat-icon-button class='icon bottom' id='repeat' (click)='playAudio()'></button>\n        <button mat-icon-button class='icon bottom' id='quiz'></button>\n        <button mat-icon-button class='icon bottom' id='bank'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle'></button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/phonemes/a/a.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/phonemes/a/a.component.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='background'>\n    <div id='main-body'>\n    \t<!-- Add the letter 'a' image -->\n        <button mat-icon-button class='back-button' id='back'></button>\n        <button mat-icon-button class='after-button' id='forward'></button>\n\t \t<div class='letter' [ngClass]=\"{'animateA': phonemeAnimate}\" (click)='playAudioA()'>a</div>\n    \t<div class='row'>\n\t    \t<div class='column' [ngClass]=\"{'animate': apeAnimate}\">\n\t\t\t\t<img src='../../assets/img/words/ape.jpg' class='word-image ape' (click)='playApeAudio()'>\n\t\t\t\t<br>\n\t\t\t\t<div class='column text' (click)='playApeAudio()'><span style='color: red'>a</span>pe</div>\n\t\t\t</div>\n\n\t\t\t<div class='column' [ngClass]=\"{'animate': skateAnimate}\">\n\t\t\t\t<img src='../../assets/img/words/skate.jpg' class='word-image skate' (click)='playSkateAudio()'>\n\t\t\t\t<br>\n\t\t\t\t<div class='column text' (click)='playSkateAudio()'>sk<span style='color: red'>a</span>te</div>\n\t\t\t</div>\n\n\t\t\t<div class='column' [ngClass]=\"{'animate': craneAnimate}\">\n\t\t\t\t<img src='../../assets/img/words/crane.jpg' class='word-image crane' (click)='playCraneAudio()'>\n\t\t\t\t<br>\n\t\t\t\t<div class='column text' (click)='playCraneAudio()'>cr<span style='color: red'>a</span>ne</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n    <div id='side-menu'>\n        <button mat-icon-button class='icon' id='back' routerLink='/phoneme-list-all'></button>\n        <button mat-icon-button class='icon' id='home' routerLink='/'></button>\n        <button mat-icon-button class='icon bottom' id='repeat' (click)=\"playAudio()\"></button>\n        <button mat-icon-button class='icon bottom' id='quiz'></button>\n        <button mat-icon-button class='icon bottom' id='bank'></button>\n        <button mat-icon-button class='icon bottom' id='puzzle'></button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#background {\n    width: 1980px;\n    height: 1030px;\n    background-color: #6EC7D4;\n    margin: auto;\n}\n\n#side-menu {\n    width: 185px;\n    height: 1030px;\n    background-color: #C4E8E6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNrZ3JvdW5kIHtcbiAgICB3aWR0aDogMTk4MHB4O1xuICAgIGhlaWdodDogMTAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2RUM3RDQ7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4jc2lkZS1tZW51IHtcbiAgICB3aWR0aDogMTg1cHg7XG4gICAgaGVpZ2h0OiAxMDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M0RThFNjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'brainy-phonics-web';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _phoneme_categories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./phoneme-categories */ "./src/app/phoneme-categories/index.ts");
/* harmony import */ var _phoneme_list_all__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./phoneme-list-all */ "./src/app/phoneme-list-all/index.ts");
/* harmony import */ var _phonemes_a__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./phonemes/a */ "./src/app/phonemes/a/index.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _phoneme_categories__WEBPACK_IMPORTED_MODULE_6__["PhonemeCategoriesComponent"],
            _phoneme_list_all__WEBPACK_IMPORTED_MODULE_7__["ListComponent"],
            _phonemes_a__WEBPACK_IMPORTED_MODULE_8__["AComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_3__["appRoutingModule"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingModule", function() { return appRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _phoneme_categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phoneme-categories */ "./src/app/phoneme-categories/index.ts");
/* harmony import */ var _phoneme_list_all__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./phoneme-list-all */ "./src/app/phoneme-list-all/index.ts");
/* harmony import */ var _phonemes_a__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./phonemes/a */ "./src/app/phonemes/a/index.ts");






const routes = [
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'phoneme-categories', component: _phoneme_categories__WEBPACK_IMPORTED_MODULE_3__["PhonemeCategoriesComponent"] },
    { path: 'phoneme-list-all', component: _phoneme_list_all__WEBPACK_IMPORTED_MODULE_4__["ListComponent"] },
    { path: 'a', component: _phonemes_a__WEBPACK_IMPORTED_MODULE_5__["AComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
const appRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#background {\n    background-color: #FFFFFF !important;\n}\n\n#side-menu {\n    background: url('home-side-bar.png') no-repeat scroll 0 0 transparent;\n    background-size: 17.3vh 97vh;\n}\n\n#main-body {\n  width: 169.7vh;\n  height: 0vh;\n  padding-left: 30vh;\n  position: relative;\n}\n\n/* Phonics Logo */\n\n#phonics {\n    background: url('Phonics_logo.png') no-repeat scroll 0 0 transparent;\n    background-size: 60vh 60vh;\n}\n\n#alphabet {\n    background: url('alphabet_letters.png') no-repeat scroll 0 0 transparent;\n    background-size: 68vh 50vh;\n    opacity: 0.6;\n}\n\n.phonics_logo {\n    width: 60vh;\n    height: 60vh;\n    display: block;\n    cursor: pointer;\n    border: none;\n}\n\n.alphabet_logo {\n    width: 68vh;\n    height: 50vh;\n    display: block;\n    /* cursor: pointer; */\n    border: none;\n    margin-top: 9vh;\n}\n\n.column {\n  float: left;\n  width: 50%;\n  margin-top: 15vh;\n}\n\n/* Clear floats after the columns */\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxxRUFBc0Y7SUFDdEYsNEJBQTRCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBLGlCQUFpQjs7QUFDakI7SUFDSSxvRUFBcUY7SUFDckYsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksd0VBQXlGO0lBQ3pGLDBCQUEwQjtJQUMxQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQSxtQ0FBbUM7O0FBQ25DO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XG59XG5cbiNzaWRlLW1lbnUge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9ob21lLXNpZGUtYmFyLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTcuM3ZoIDk3dmg7XG59XG5cbiNtYWluLWJvZHkge1xuICB3aWR0aDogMTY5Ljd2aDtcbiAgaGVpZ2h0OiAwdmg7XG4gIHBhZGRpbmctbGVmdDogMzB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiBQaG9uaWNzIExvZ28gKi9cbiNwaG9uaWNzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvUGhvbmljc19sb2dvLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogNjB2aCA2MHZoO1xufVxuXG4jYWxwaGFiZXQge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9hbHBoYWJldF9sZXR0ZXJzLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogNjh2aCA1MHZoO1xuICAgIG9wYWNpdHk6IDAuNjtcbn1cblxuLnBob25pY3NfbG9nbyB7XG4gICAgd2lkdGg6IDYwdmg7XG4gICAgaGVpZ2h0OiA2MHZoO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5hbHBoYWJldF9sb2dvIHtcbiAgICB3aWR0aDogNjh2aDtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLyogY3Vyc29yOiBwb2ludGVyOyAqL1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiA5dmg7XG59XG5cbi5jb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLXRvcDogMTV2aDtcbn1cblxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
    }
    playAudio() {
        this.phonics = new Audio();
        this.phonics.src = '/assets/audio/phonics.mp3';
        this.phonics.load();
        this.phonics.play();
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../main.css */ "./src/app/main.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]; });





/***/ }),

/***/ "./src/app/main.css":
/*!**************************!*\
  !*** ./src/app/main.css ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#background {\n    width: 187vh;\n    height: 97vh;\n    background-color: #6EC7D4;\n    margin: auto;\n}\n\n#side-menu {\n    width: 17vh;\n    height: 92.5vh;\n    background-color: #C4E8E6;\n    padding-top: 4.5vh;\n    position: relative;\n}\n\n.icon {\n    width: 9.5vh;\n    height: 9.5vh;\n    display: block;\n    position: absolute;\n    margin-left: 3.8vh;\n    cursor: pointer;\n    margin-bottom: 3.5vh;\n    border: none;\n}\n\n/* Side Menu Icons */\n\n#home {\n    background: url('home.png') no-repeat scroll 0 0 transparent;\n    background-size: 9.5vh 9.5vh;\n    top: 16.5vh;\n}\n\n#back {\n    background: url('back.png') no-repeat scroll 0 0 transparent;\n    background-size: 9.5vh 9.5vh;\n}\n\n#quiz {\n    background: url('quiz.png') no-repeat scroll 0 0 transparent;\n    background-size: 9.5vh 9.5vh;\n    bottom: 39.5vh;\n    cursor: auto;\n    opacity: 0.6;\n}\n\n#repeat {\n    background: url('repeat.png') no-repeat scroll 0 0 transparent;\n    background-size: 9.5vh 9.5vh;\n    bottom: 26.5vh;\n}\n\n#bank {\n    background: url('bank.png') no-repeat scroll 0 0 transparent;\n    background-size: 9.5vh 9.5vh;\n    bottom: 13.5vh;\n    cursor: auto;\n    opacity: 0.6;\n}\n\n#puzzle {\n    background: url('puzzle.png') no-repeat scroll 0 0 transparent;\n    background-size: 9.5vh 9.5vh;\n    bottom: 0.5vh;\n    cursor: auto;\n    opacity: 0.6;\n}\n\n/* Text */\n\n@font-face {\n    font-family: 'ComicSans';\n    src: url('comic-sans.ttf');\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOztBQUVBLG9CQUFvQjs7QUFDcEI7SUFDSSw0REFBZ0Y7SUFDaEYsNEJBQTRCO0lBQzVCLFdBQVc7QUFDZjs7QUFDQTtJQUNJLDREQUFnRjtJQUNoRiw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSw0REFBZ0Y7SUFDaEYsNEJBQTRCO0lBQzVCLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFDQTtJQUNJLDhEQUFrRjtJQUNsRiw0QkFBNEI7SUFDNUIsY0FBYztBQUNsQjs7QUFDQTtJQUNJLDREQUFnRjtJQUNoRiw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksOERBQWtGO0lBQ2xGLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUEsU0FBUzs7QUFDVDtJQUNJLHdCQUF3QjtJQUN4QiwwQkFBMEM7QUFDOUMiLCJmaWxlIjoic3JjL2FwcC9tYWluLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNrZ3JvdW5kIHtcbiAgICB3aWR0aDogMTg3dmg7XG4gICAgaGVpZ2h0OiA5N3ZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2RUM3RDQ7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4jc2lkZS1tZW51IHtcbiAgICB3aWR0aDogMTd2aDtcbiAgICBoZWlnaHQ6IDkyLjV2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzRFOEU2O1xuICAgIHBhZGRpbmctdG9wOiA0LjV2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pY29uIHtcbiAgICB3aWR0aDogOS41dmg7XG4gICAgaGVpZ2h0OiA5LjV2aDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IDMuOHZoO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAzLjV2aDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi8qIFNpZGUgTWVudSBJY29ucyAqL1xuI2hvbWUge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vYXNzZXRzL2ltZy9pY29ucy9ob21lLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogOS41dmggOS41dmg7XG4gICAgdG9wOiAxNi41dmg7XG59XG4jYmFjayB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvaW1nL2ljb25zL2JhY2sucG5nJykgbm8tcmVwZWF0IHNjcm9sbCAwIDAgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA5LjV2aCA5LjV2aDtcbn1cbiNxdWl6IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2Fzc2V0cy9pbWcvaWNvbnMvcXVpei5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIDAgMCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDkuNXZoIDkuNXZoO1xuICAgIGJvdHRvbTogMzkuNXZoO1xuICAgIGN1cnNvcjogYXV0bztcbiAgICBvcGFjaXR5OiAwLjY7XG59XG4jcmVwZWF0IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2Fzc2V0cy9pbWcvaWNvbnMvcmVwZWF0LnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogOS41dmggOS41dmg7XG4gICAgYm90dG9tOiAyNi41dmg7XG59XG4jYmFuayB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvaW1nL2ljb25zL2JhbmsucG5nJykgbm8tcmVwZWF0IHNjcm9sbCAwIDAgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA5LjV2aCA5LjV2aDtcbiAgICBib3R0b206IDEzLjV2aDtcbiAgICBjdXJzb3I6IGF1dG87XG4gICAgb3BhY2l0eTogMC42O1xufVxuI3B1enpsZSB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvaW1nL2ljb25zL3B1enpsZS5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIDAgMCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDkuNXZoIDkuNXZoO1xuICAgIGJvdHRvbTogMC41dmg7XG4gICAgY3Vyc29yOiBhdXRvO1xuICAgIG9wYWNpdHk6IDAuNjtcbn1cblxuLyogVGV4dCAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDb21pY1NhbnMnO1xuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvY29taWMtc2Fucy50dGYnKTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/phoneme-categories/index.ts":
/*!*********************************************!*\
  !*** ./src/app/phoneme-categories/index.ts ***!
  \*********************************************/
/*! exports provided: PhonemeCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _phoneme_categories_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phoneme-categories.component */ "./src/app/phoneme-categories/phoneme-categories.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhonemeCategoriesComponent", function() { return _phoneme_categories_component__WEBPACK_IMPORTED_MODULE_1__["PhonemeCategoriesComponent"]; });





/***/ }),

/***/ "./src/app/phoneme-categories/phoneme-categories.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/phoneme-categories/phoneme-categories.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main-body {\n  width: 169.7vh;\n  height: 0vh;\n  padding-left: 40vh;\n  position: relative;\n}\n\n/* Phonics Categories */\n\n#consonants {\n    background: url('consonants.png') no-repeat scroll 0 0 transparent;\n    background-size: 44vh 20vh;\n    opacity: 0.6;\n}\n\n#consonant_blends {\n    background: url('consonant_blends.png') no-repeat scroll 0 0 transparent;\n    background-size: 44vh 20vh;\n    opacity: 0.6;\n}\n\n#vowel_and_consonants {\n    background: url('vowel_and_consonants.png') no-repeat scroll 0 0 transparent;\n    background-size: 44vh 20vh;\n    opacity: 0.6;\n}\n\n#vowels {\n    background: url('vowels.png') no-repeat scroll 0 0 transparent;\n    background-size: 44vh 20vh;\n    cursor: pointer;\n}\n\n#vowel_blends {\n    background: url('vowel_blends.png') no-repeat scroll 0 0 transparent;\n    background-size: 44vh 20vh;\n    opacity: 0.6;\n}\n\n#all {\n    background: url('all.png') no-repeat scroll 0 0 transparent;\n    background-size: 44vh 20vh;\n    opacity: 0.6;\n}\n\n.category_button {\n    width: 54vh;\n    height: 23vh;\n    margin-top: 5vh;\n    /* cursor: pointer; */\n    border: none;\n}\n\n.column {\n  float: left;\n  width: 50%;\n  margin-top: 5vh;\n}\n\n/* Clear floats after the columns */\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvbmVtZS1jYXRlZ29yaWVzL3Bob25lbWUtY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBLHVCQUF1Qjs7QUFDdkI7SUFDSSxrRUFBOEY7SUFDOUYsMEJBQTBCO0lBQzFCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3RUFBb0c7SUFDcEcsMEJBQTBCO0lBQzFCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw0RUFBd0c7SUFDeEcsMEJBQTBCO0lBQzFCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw4REFBMEY7SUFDMUYsMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvRUFBZ0c7SUFDaEcsMEJBQTBCO0lBQzFCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyREFBdUY7SUFDdkYsMEJBQTBCO0lBQzFCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQSxtQ0FBbUM7O0FBQ25DO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9waG9uZW1lLWNhdGVnb3JpZXMvcGhvbmVtZS1jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi1ib2R5IHtcbiAgd2lkdGg6IDE2OS43dmg7XG4gIGhlaWdodDogMHZoO1xuICBwYWRkaW5nLWxlZnQ6IDQwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLyogUGhvbmljcyBDYXRlZ29yaWVzICovXG4jY29uc29uYW50cyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1nL2NhdGVnb3JpZXMvY29uc29uYW50cy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIDAgMCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQ0dmggMjB2aDtcbiAgICBvcGFjaXR5OiAwLjY7XG59XG5cbiNjb25zb25hbnRfYmxlbmRzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvY2F0ZWdvcmllcy9jb25zb25hbnRfYmxlbmRzLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogNDR2aCAyMHZoO1xuICAgIG9wYWNpdHk6IDAuNjtcbn1cblxuI3Zvd2VsX2FuZF9jb25zb25hbnRzIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvY2F0ZWdvcmllcy92b3dlbF9hbmRfY29uc29uYW50cy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIDAgMCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQ0dmggMjB2aDtcbiAgICBvcGFjaXR5OiAwLjY7XG59XG5cbiN2b3dlbHMge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9jYXRlZ29yaWVzL3Zvd2Vscy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIDAgMCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQ0dmggMjB2aDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiN2b3dlbF9ibGVuZHMge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9jYXRlZ29yaWVzL3Zvd2VsX2JsZW5kcy5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIDAgMCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQ0dmggMjB2aDtcbiAgICBvcGFjaXR5OiAwLjY7XG59XG5cbiNhbGwge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9jYXRlZ29yaWVzL2FsbC5wbmcnKSBuby1yZXBlYXQgc2Nyb2xsIDAgMCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQ0dmggMjB2aDtcbiAgICBvcGFjaXR5OiAwLjY7XG59XG5cbi5jYXRlZ29yeV9idXR0b24ge1xuICAgIHdpZHRoOiA1NHZoO1xuICAgIGhlaWdodDogMjN2aDtcbiAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgLyogY3Vyc29yOiBwb2ludGVyOyAqL1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmNvbHVtbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tdG9wOiA1dmg7XG59XG5cbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/phoneme-categories/phoneme-categories.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/phoneme-categories/phoneme-categories.component.ts ***!
  \********************************************************************/
/*! exports provided: PhonemeCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonemeCategoriesComponent", function() { return PhonemeCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PhonemeCategoriesComponent = class PhonemeCategoriesComponent {
    constructor() {
    }
    playAudio() {
        this.vowels = new Audio();
        this.vowels.src = '/assets/audio/vowels.m4a';
        this.vowels.load();
        this.vowels.play();
    }
};
PhonemeCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phoneme-categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/phoneme-categories/phoneme-categories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phoneme-categories.component.css */ "./src/app/phoneme-categories/phoneme-categories.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../main.css */ "./src/app/main.css")).default]
    })
], PhonemeCategoriesComponent);



/***/ }),

/***/ "./src/app/phoneme-list-all/index.ts":
/*!*******************************************!*\
  !*** ./src/app/phoneme-list-all/index.ts ***!
  \*******************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _phoneme_list_all_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phoneme-list-all.component */ "./src/app/phoneme-list-all/phoneme-list-all.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return _phoneme_list_all_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"]; });





/***/ }),

/***/ "./src/app/phoneme-list-all/phoneme-list-all.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/phoneme-list-all/phoneme-list-all.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#main-body {\n  width: 169.7vh;\n  height: 0vh;\n  padding-left: 22vh;\n  position: relative;\n}\n\n#column {\n    width: 42vh;\n}\n\n.phoneme_button {\n    background: url('ape.jpg') no-repeat scroll;\n    background-position: 73% 50%;\n    background-size: 21vh 26vh;\n    width: 52vh;\n    height: 38vh;\n    margin-top: 5vh;\n    cursor: pointer;\n    border: none;\n    border-radius: 2.8vh;\n    background-color: #FFFFFF;\n    font-family: 'ComicSans';\n    font-size: 12vh;\n    text-align: left;\n    padding-left: 11vh;\n    border-bottom: 3vh solid #DEDEDE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvbmVtZS1saXN0LWFsbC9waG9uZW1lLWxpc3QtYWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwyQ0FBa0U7SUFDbEUsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdDQUFnQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL3Bob25lbWUtbGlzdC1hbGwvcGhvbmVtZS1saXN0LWFsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4tYm9keSB7XG4gIHdpZHRoOiAxNjkuN3ZoO1xuICBoZWlnaHQ6IDB2aDtcbiAgcGFkZGluZy1sZWZ0OiAyMnZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNjb2x1bW4ge1xuICAgIHdpZHRoOiA0MnZoO1xufVxuXG4ucGhvbmVtZV9idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy93b3Jkcy9hcGUuanBnJykgbm8tcmVwZWF0IHNjcm9sbDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA3MyUgNTAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjF2aCAyNnZoO1xuICAgIHdpZHRoOiA1MnZoO1xuICAgIGhlaWdodDogMzh2aDtcbiAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAyLjh2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtZmFtaWx5OiAnQ29taWNTYW5zJztcbiAgICBmb250LXNpemU6IDEydmg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDExdmg7XG4gICAgYm9yZGVyLWJvdHRvbTogM3ZoIHNvbGlkICNERURFREU7XG59Il19 */");

/***/ }),

/***/ "./src/app/phoneme-list-all/phoneme-list-all.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/phoneme-list-all/phoneme-list-all.component.ts ***!
  \****************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListComponent = class ListComponent {
    constructor() {
    }
    ngOnInit() {
        this.instruction = new Audio();
        this.instruction.src = '/assets/audio/00_Button_Audio_Complete_a_whole_puzzle_(Phonics_only).mp3';
        this.instruction.load();
        this.playAudio();
    }
    ngOnDestroy() {
        this.instruction.pause();
    }
    playAudio() {
        this.instruction.pause();
        this.instruction.currentTime = 0;
        this.instruction.play();
    }
};
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phoneme-list-all.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/phoneme-list-all/phoneme-list-all.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phoneme-list-all.component.css */ "./src/app/phoneme-list-all/phoneme-list-all.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../main.css */ "./src/app/main.css")).default]
    })
], ListComponent);



/***/ }),

/***/ "./src/app/phonemes/a/a.component.css":
/*!********************************************!*\
  !*** ./src/app/phonemes/a/a.component.css ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#background {\n\tbackground-color: #FFFFFF !important;\n}\n\n#side-menu {\n\tbackground-color: #6EC7D4 !important;\n}\n\n#main-body {\n  width: 169.7vh;\n  height: 0vh;\n  padding-left: 40vh;\n  position: relative;\n}\n\n.column {\n  float: left;\n  text-align: right;\n  width: 48vh;\n  transform: translateX(-21vh);\n}\n\n.column .text {\n  font-size: 4.8vh;\n  margin-left: 3vh;\n  font-family: 'ComicSans';\n  cursor: pointer;\n  position: absolute;\n  top: 55vh;\n  z-index: 999;\n  transform: translateX(-13vh);\n}\n\n.letter {\n  font-size: 19.4vh;\n  font-family: 'ComicSans';\n  padding-top: -10vh;\n  margin-left: 44vh;\n  cursor: pointer;\n  transition: all .5s;\n  transform: scale(1) translate(11vh, 3vh);\n}\n\n.back-button {\n    width: 9.5vh;\n    height: 9.5vh;\n    display: block;\n    position: absolute;\n    margin-left: 10vh;\n    /* cursor: pointer; */\n    margin-bottom: 3.5vh;\n    border: none;\n    margin-top: 15vh;\n    opacity: 0.2;\n}\n\n.after-button {\n    width: 9.5vh;\n    height: 9.5vh;\n    display: block;\n    position: absolute;\n    margin-left: 103vh;\n    /* cursor: pointer; */\n    margin-bottom: 3.5vh;\n    border: none;\n    margin-top: 15vh;\n    opacity: 0.2;\n}\n\n/* Clear floats after the columns */\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.word-image {\n  margin-top: 22vh;\n  cursor: pointer;\n  transition: all .5s;\n  transform: scale(1) !important;\n}\n\n.word-image.ape {\n  width: 25vh;\n  height: 32vh;\n}\n\n.word-image.skate {\n  width: 24vh;\n  height: 34vh;\n}\n\n.word-image.crane {\n  width: 33vh;\n  height: 33vh;\n}\n\n.animate {\n  transition: all .5s;\n  transform: translate(-22vh, -2vh) scale(1.12) !important;\n}\n\n.animateA {\n  transition: all .5s;\n  transform: translate(18vh, 3vh) scale(1.12) !important;\n}\n\n/* Text */\n\nh2 {\n  font-size: 20px;\n}\n\nh2 {\n  font-weight: lighter;\n}\n\np {\n  font-size: 14px;\n}\n\n/* Buttons */\n\n#forward {\n    background: url('forward.png') no-repeat scroll 0 0 transparent;\n    background-size: 9.5vh 9.5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvbmVtZXMvYS9hLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxvQ0FBb0M7QUFDckM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsd0NBQXdDO0FBQzFDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUEsbUNBQW1DOztBQUNuQztFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHdEQUF3RDtBQUMxRDs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixzREFBc0Q7QUFDeEQ7O0FBRUEsU0FBUzs7QUFDVDtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLFlBQVk7O0FBQ1o7SUFDSSwrREFBeUY7SUFDekYsNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvcGhvbmVtZXMvYS9hLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja2dyb3VuZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbn1cblxuI3NpZGUtbWVudSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM2RUM3RDQgIWltcG9ydGFudDtcbn1cblxuI21haW4tYm9keSB7XG4gIHdpZHRoOiAxNjkuN3ZoO1xuICBoZWlnaHQ6IDB2aDtcbiAgcGFkZGluZy1sZWZ0OiA0MHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiA0OHZoO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIxdmgpO1xufVxuXG4uY29sdW1uIC50ZXh0IHtcbiAgZm9udC1zaXplOiA0Ljh2aDtcbiAgbWFyZ2luLWxlZnQ6IDN2aDtcbiAgZm9udC1mYW1pbHk6ICdDb21pY1NhbnMnO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1NXZoO1xuICB6LWluZGV4OiA5OTk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTN2aCk7XG59XG5cbi5sZXR0ZXIge1xuICBmb250LXNpemU6IDE5LjR2aDtcbiAgZm9udC1mYW1pbHk6ICdDb21pY1NhbnMnO1xuICBwYWRkaW5nLXRvcDogLTEwdmg7XG4gIG1hcmdpbi1sZWZ0OiA0NHZoO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDExdmgsIDN2aCk7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDkuNXZoO1xuICAgIGhlaWdodDogOS41dmg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHZoO1xuICAgIC8qIGN1cnNvcjogcG9pbnRlcjsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAzLjV2aDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMTV2aDtcbiAgICBvcGFjaXR5OiAwLjI7XG59XG5cbi5hZnRlci1idXR0b24ge1xuICAgIHdpZHRoOiA5LjV2aDtcbiAgICBoZWlnaHQ6IDkuNXZoO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogMTAzdmg7XG4gICAgLyogY3Vyc29yOiBwb2ludGVyOyAqL1xuICAgIG1hcmdpbi1ib3R0b206IDMuNXZoO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAxNXZoO1xuICAgIG9wYWNpdHk6IDAuMjtcbn1cblxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4ucm93OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4ud29yZC1pbWFnZSB7XG4gIG1hcmdpbi10b3A6IDIydmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSAhaW1wb3J0YW50O1xufVxuXG4ud29yZC1pbWFnZS5hcGUge1xuICB3aWR0aDogMjV2aDtcbiAgaGVpZ2h0OiAzMnZoO1xufVxuLndvcmQtaW1hZ2Uuc2thdGUge1xuICB3aWR0aDogMjR2aDtcbiAgaGVpZ2h0OiAzNHZoO1xufVxuLndvcmQtaW1hZ2UuY3JhbmUge1xuICB3aWR0aDogMzN2aDtcbiAgaGVpZ2h0OiAzM3ZoO1xufVxuXG4uYW5pbWF0ZSB7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMnZoLCAtMnZoKSBzY2FsZSgxLjEyKSAhaW1wb3J0YW50O1xufVxuLmFuaW1hdGVBIHtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTh2aCwgM3ZoKSBzY2FsZSgxLjEyKSAhaW1wb3J0YW50O1xufVxuXG4vKiBUZXh0ICovXG5oMiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaDIge1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLyogQnV0dG9ucyAqL1xuI2ZvcndhcmQge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9pY29ucy9mb3J3YXJkLnBuZycpIG5vLXJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogOS41dmggOS41dmg7XG59Il19 */");

/***/ }),

/***/ "./src/app/phonemes/a/a.component.ts":
/*!*******************************************!*\
  !*** ./src/app/phonemes/a/a.component.ts ***!
  \*******************************************/
/*! exports provided: AComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AComponent", function() { return AComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_2__);



let AComponent = class AComponent {
    constructor() {
        this.phonemePlayAudio = true;
        this.phonemeAnimate = false;
        this.apeAnimate = false;
        this.skateAnimate = false;
        this.craneAnimate = false;
    }
    ngOnInit() {
        this.phonemeAudio = new Audio();
        this.phonemeAudio.src = '/assets/audio/sound-A.mp3';
        this.phonemeAudio.load();
        this.apeAudio = new Audio();
        this.apeAudio.src = '/assets/audio/ape.mp3';
        this.apeAudio.load();
        this.craneAudio = new Audio();
        this.craneAudio.src = '/assets/audio/crane.mp3';
        this.craneAudio.load();
        this.skateAudio = new Audio();
        this.skateAudio.src = '/assets/audio/skate.mp3';
        this.skateAudio.load();
        this.phonemeAudio.onended = () => {
            this.phonemeAnimate = false;
            this.apeAnimate = true;
            Object(q__WEBPACK_IMPORTED_MODULE_2__["delay"])(250).then(() => {
                this.apeAudio.play();
            });
        };
        this.apeAudio.onended = () => {
            this.apeAnimate = false;
            this.skateAnimate = true;
            Object(q__WEBPACK_IMPORTED_MODULE_2__["delay"])(250).then(() => {
                this.skateAudio.play();
            });
        };
        this.skateAudio.onended = () => {
            this.skateAnimate = false;
            this.craneAnimate = true;
            Object(q__WEBPACK_IMPORTED_MODULE_2__["delay"])(250).then(() => {
                this.craneAudio.play();
            });
        };
        this.craneAudio.onended = () => {
            this.craneAnimate = false;
        };
        this.playAudio();
    }
    ngOnDestroy() {
        this.phonemeAudio.pause();
        this.apeAudio.pause();
        this.skateAudio.pause();
        this.craneAudio.pause();
    }
    playAudio() {
        this.phonemeAudio.pause();
        this.phonemeAudio.currentTime = 0;
        this.phonemeAnimate = false;
        this.apeAudio.pause();
        this.apeAudio.currentTime = 0;
        this.apeAnimate = false;
        this.skateAudio.pause();
        this.skateAudio.currentTime = 0;
        this.skateAnimate = false;
        this.craneAudio.pause();
        this.craneAudio.currentTime = 0;
        this.craneAnimate = false;
        this.phonemeAnimate = true;
        this.phonemeAudio.play();
    }
    playAudioA() {
        this.phonemeAnimate = true;
        this.phonemeAudio.onended = () => {
            this.phonemeAnimate = false;
            this.phonemeAudio.onended = () => {
                this.phonemeAnimate = false;
                this.apeAnimate = true;
                Object(q__WEBPACK_IMPORTED_MODULE_2__["delay"])(250).then(() => {
                    this.apeAudio.play();
                });
            };
        };
        this.phonemeAudio.play();
    }
    playApeAudio() {
        this.apeAnimate = true;
        this.apeAudio.onended = () => {
            this.apeAnimate = false;
            this.apeAudio.onended = () => {
                this.apeAnimate = false;
                this.skateAnimate = true;
                Object(q__WEBPACK_IMPORTED_MODULE_2__["delay"])(250).then(() => {
                    this.skateAudio.play();
                });
            };
        };
        this.apeAudio.play();
    }
    playSkateAudio() {
        this.skateAnimate = true;
        this.skateAudio.onended = () => {
            this.skateAnimate = false;
            this.skateAudio.onended = () => {
                this.skateAnimate = false;
                this.craneAnimate = true;
                Object(q__WEBPACK_IMPORTED_MODULE_2__["delay"])(250).then(() => {
                    this.craneAudio.play();
                });
            };
        };
        this.skateAudio.play();
    }
    playCraneAudio() {
        this.craneAnimate = true;
        this.craneAudio.onended = () => {
            this.craneAnimate = false;
        };
        this.craneAudio.play();
    }
};
AComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./a.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/phonemes/a/a.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./a.component.css */ "./src/app/phonemes/a/a.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../main.css */ "./src/app/main.css")).default]
    })
], AComponent);



/***/ }),

/***/ "./src/app/phonemes/a/index.ts":
/*!*************************************!*\
  !*** ./src/app/phonemes/a/index.ts ***!
  \*************************************/
/*! exports provided: AComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _a_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./a.component */ "./src/app/phonemes/a/a.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AComponent", function() { return _a_component__WEBPACK_IMPORTED_MODULE_1__["AComponent"]; });





/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Jasmin/Documents/Project Design/brainy-phonics-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map