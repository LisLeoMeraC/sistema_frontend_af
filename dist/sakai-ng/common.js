"use strict";
(self["webpackChunksakai"] = self["webpackChunksakai"] || []).push([["common"],{

/***/ 63671:
/*!*********************************************************!*\
  !*** ./src/app/demo/service/ingreso-factura.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IngresoFacturaService: () => (/* binding */ IngresoFacturaService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ 31070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




class IngresoFacturaService {
  constructor(http) {
    this.http = http;
  }
  registrarFactura(ingresoFactura) {
    return this.http.post(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/ingresofactura/`, ingresoFactura);
  }
  buscarFacturas(codigo, mes, anio) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('codigo', codigo.toString());
    if (mes) params = params.set('mes', mes);
    if (anio) params = params.set('anio', anio.toString());
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/ingresofactura/buscar`, {
      params
    });
  }
  buscarFacturasPorFecha(codigo, fechaDesde, fechaHasta) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('codigo', codigo.toString());
    if (fechaDesde) params = params.set('fechaDesde', fechaDesde);
    if (fechaHasta) params = params.set('fechaHasta', fechaHasta);
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/ingresofactura/buscar-por-fecha`, {
      params
    });
  }
  buscarFacturasGrafico(codigo, mes, anio) {
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/ingresofactura/buscar?codigo=${codigo}&mes=${mes}&anio=${anio}`);
  }
  obtenerFacturas() {
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/ingresofactura`);
  }
  obtenerFacturasPaginadas(page, size) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set(`page`, page.toString()).set(`size`, size.toString());
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/ingresofactura`, {
      params
    });
  }
  obtenerFacturasFiltradas(page, size, idCliente, mes, anio) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('page', page.toString()).set('size', size.toString());
    if (idCliente) params = params.set('idCliente', idCliente.toString());
    if (mes) params = params.set('mes', mes);
    if (anio) params = params.set('anio', anio.toString());
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/ingresofactura/filtrar`, {
      params
    });
  }
  actualizarFactura(id, ingresoFactura) {
    return this.http.put(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/ingresofactura/${id}`, ingresoFactura);
  }
  eliminarFactura(id) {
    return this.http.delete(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/ingresofactura/${id}`);
  }
  static {
    this.ɵfac = function IngresoFacturaService_Factory(t) {
      return new (t || IngresoFacturaService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: IngresoFacturaService,
      factory: IngresoFacturaService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 63617:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/merge.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   merge: () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/mergeAll */ 23222);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./innerFrom */ 82645);
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty */ 59400);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 4083);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./from */ 95429);





function merge(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popScheduler)(args);
  const concurrent = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popNumber)(args, Infinity);
  const sources = args;
  return !sources.length ? _empty__WEBPACK_IMPORTED_MODULE_1__.EMPTY : sources.length === 1 ? (0,_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(sources[0]) : (0,_operators_mergeAll__WEBPACK_IMPORTED_MODULE_3__.mergeAll)(concurrent)((0,_from__WEBPACK_IMPORTED_MODULE_4__.from)(sources, scheduler));
}

/***/ })

}]);
//# sourceMappingURL=common.js.map