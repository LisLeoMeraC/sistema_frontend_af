"use strict";
(self["webpackChunksakai"] = self["webpackChunksakai"] || []).push([["src_app_demo_components_Asistente-factura_asistente-factura_module_ts"],{

/***/ 21543:
/*!***************************************************************************************!*\
  !*** ./src/app/demo/components/Asistente-factura/asistente-factura-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsistenteFacturaRoutingModule: () => (/* binding */ AsistenteFacturaRoutingModule)
/* harmony export */ });
/* harmony import */ var _ingreso_factura_ingreso_factura_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingreso-factura/ingreso-factura.component */ 97889);
/* harmony import */ var _dashboard_asistente_fact_dashboard_asistente_fact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-asistente-fact/dashboard-asistente-fact.component */ 14651);
/* harmony import */ var _view_facturas_view_facturas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-facturas/view-facturas.component */ 22461);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);






const routes = [{
  path: 'ingreso-factura',
  component: _ingreso_factura_ingreso_factura_component__WEBPACK_IMPORTED_MODULE_0__.IngresoFacturaComponent
}, {
  path: 'dashboard',
  component: _dashboard_asistente_fact_dashboard_asistente_fact_component__WEBPACK_IMPORTED_MODULE_1__.DashboardAsistenteFactComponent
}, {
  path: 'view-facturas',
  component: _view_facturas_view_facturas_component__WEBPACK_IMPORTED_MODULE_2__.ViewFacturasComponent
}];
class AsistenteFacturaRoutingModule {
  static {
    this.ɵfac = function AsistenteFacturaRoutingModule_Factory(t) {
      return new (t || AsistenteFacturaRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AsistenteFacturaRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AsistenteFacturaRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 44150:
/*!*******************************************************************************!*\
  !*** ./src/app/demo/components/Asistente-factura/asistente-factura.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsistenteFacturaModule: () => (/* binding */ AsistenteFacturaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _ingreso_factura_ingreso_factura_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingreso-factura/ingreso-factura.component */ 97889);
/* harmony import */ var _dashboard_asistente_fact_dashboard_asistente_fact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-asistente-fact/dashboard-asistente-fact.component */ 14651);
/* harmony import */ var _view_facturas_view_facturas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-facturas/view-facturas.component */ 22461);
/* harmony import */ var _asistente_factura_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asistente-factura-routing.module */ 21543);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/listbox */ 69607);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/progressbar */ 21416);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/autocomplete */ 38784);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/rating */ 3015);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/slider */ 47763);
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/togglebutton */ 95656);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/multiselect */ 92159);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/progressspinner */ 53244);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);




 // Importa el módulo de enrutamiento





















class AsistenteFacturaModule {
  static {
    this.ɵfac = function AsistenteFacturaModule_Factory(t) {
      return new (t || AsistenteFacturaModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AsistenteFacturaModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_5__.ConfirmationService],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, primeng_table__WEBPACK_IMPORTED_MODULE_8__.TableModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_9__.DialogModule, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputTextModule, primeng_toast__WEBPACK_IMPORTED_MODULE_12__.ToastModule, primeng_listbox__WEBPACK_IMPORTED_MODULE_13__.ListboxModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_14__.AutoCompleteModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__.DropdownModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_16__.RippleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, primeng_rating__WEBPACK_IMPORTED_MODULE_18__.RatingModule, primeng_slider__WEBPACK_IMPORTED_MODULE_19__.SliderModule, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_20__.ToggleButtonModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_21__.MultiSelectModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_22__.ProgressBarModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_23__.CalendarModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__.ConfirmDialogModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_25__.ProgressSpinnerModule, _asistente_factura_routing_module__WEBPACK_IMPORTED_MODULE_3__.AsistenteFacturaRoutingModule // Asegúrate de incluirlo aquí
      ]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AsistenteFacturaModule, {
    declarations: [_ingreso_factura_ingreso_factura_component__WEBPACK_IMPORTED_MODULE_0__.IngresoFacturaComponent, _dashboard_asistente_fact_dashboard_asistente_fact_component__WEBPACK_IMPORTED_MODULE_1__.DashboardAsistenteFactComponent, _view_facturas_view_facturas_component__WEBPACK_IMPORTED_MODULE_2__.ViewFacturasComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, primeng_table__WEBPACK_IMPORTED_MODULE_8__.TableModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_9__.DialogModule, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputTextModule, primeng_toast__WEBPACK_IMPORTED_MODULE_12__.ToastModule, primeng_listbox__WEBPACK_IMPORTED_MODULE_13__.ListboxModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_14__.AutoCompleteModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__.DropdownModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_16__.RippleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, primeng_rating__WEBPACK_IMPORTED_MODULE_18__.RatingModule, primeng_slider__WEBPACK_IMPORTED_MODULE_19__.SliderModule, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_20__.ToggleButtonModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_21__.MultiSelectModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_22__.ProgressBarModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_23__.CalendarModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__.ConfirmDialogModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_25__.ProgressSpinnerModule, _asistente_factura_routing_module__WEBPACK_IMPORTED_MODULE_3__.AsistenteFacturaRoutingModule // Asegúrate de incluirlo aquí
    ]
  });
})();

/***/ }),

/***/ 14651:
/*!******************************************************************************************************************!*\
  !*** ./src/app/demo/components/Asistente-factura/dashboard-asistente-fact/dashboard-asistente-fact.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardAsistenteFactComponent: () => (/* binding */ DashboardAsistenteFactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

class DashboardAsistenteFactComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function DashboardAsistenteFactComponent_Factory(t) {
      return new (t || DashboardAsistenteFactComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardAsistenteFactComponent,
      selectors: [["app-dashboard-asistente-fact"]],
      decls: 2,
      vars: 0,
      template: function DashboardAsistenteFactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard-asistente-fact works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtYXNpc3RlbnRlLWZhY3QuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL0FzaXN0ZW50ZS1mYWN0dXJhL2Rhc2hib2FyZC1hc2lzdGVudGUtZmFjdC9kYXNoYm9hcmQtYXNpc3RlbnRlLWZhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRMQUE0TCIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 97889:
/*!************************************************************************************************!*\
  !*** ./src/app/demo/components/Asistente-factura/ingreso-factura/ingreso-factura.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IngresoFacturaComponent: () => (/* binding */ IngresoFacturaComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 52575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_demo_service_cliente_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/cliente.service */ 4771);
/* harmony import */ var src_app_demo_service_ingreso_factura_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/service/ingreso-factura.service */ 63671);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/progressspinner */ 53244);















function IngresoFacturaComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42)(1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function IngresoFacturaComponent_ng_template_17_Template_input_input_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onIdInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function IngresoFacturaComponent_ng_template_17_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Haga clic en una fila para seleccionar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchTerm);
  }
}
function IngresoFacturaComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Nombres y Apellidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "C\u00E9dula");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function IngresoFacturaComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IngresoFacturaComponent_ng_template_19_Template_tr_click_0_listener() {
      const cliente_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onRowClienteSeleccionado({
        data: cliente_r4
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td")(4, "div", 52)(5, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cliente_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cliente_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", cliente_r4.nombres, " ", cliente_r4.apellidos, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cliente_r4.cedula);
  }
}
function IngresoFacturaComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No se encontraron clientes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function IngresoFacturaComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "p-progressSpinner", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function IngresoFacturaComponent_div_71_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Solo se permiten n\u00FAmeros. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function IngresoFacturaComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, IngresoFacturaComponent_div_71_small_1_Template, 3, 0, "small", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r1.registerForm.get("libras")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["pattern"]);
  }
}
class IngresoFacturaComponent {
  constructor(clienteService, ingresoFacturaService, messageService, fb) {
    this.clienteService = clienteService;
    this.ingresoFacturaService = ingresoFacturaService;
    this.messageService = messageService;
    this.fb = fb;
    this.clientes = [];
    this.errorMessage = null;
    this.msgs = [];
    this.totalRecords = 0;
    this.loading = false;
    this.rowsPerPage = 5; // Registros por página
    this.currentPage = 0; // Página actual
    this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.searchTerm = '';
    this.registerForm = this.fb.group({
      codigo: [{
        value: '',
        disabled: true
      }],
      nombres: [{
        value: '',
        disabled: true
      }],
      apellidos: [{
        value: '',
        disabled: true
      }],
      cedula: [{
        value: '',
        disabled: true
      }],
      libras: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^\d*\.?\d*$/)]],
      fecha: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
  }
  ngOnInit() {
    this.cargarClientesPaginados(this.currentPage, this.rowsPerPage);
    this.searchTerms.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(300) // Tiempo de espera antes de iniciar la búsqueda
    ).subscribe(value => {
      this.loading = true; // Activa el spinner al iniciar la búsqueda
      if (value) {
        this.buscarClientesPorId(value); // Busca clientes por ID
      } else {
        // Restablece la página actual a 0 y carga todos los clientes paginados
        this.currentPage = 0; // Vuelve a la primera página
        this.cargarClientesPaginados(this.currentPage, this.rowsPerPage); // Carga clientes paginados
      }
    });
  }
  cargarClientesPaginados(page, size) {
    this.loading = true; // Activa el spinner al iniciar la carga de datos
    this.clienteService.obtenerClientesPaginados(page, size).subscribe(data => {
      this.clientes = data.content; // Ajusta según la estructura de tu respuesta
      this.totalRecords = data.totalElements; // Total de registros
      this.loading = false; // Oculta el spinner
    }, error => {
      console.error('Error al obtener clientes:', error);
      this.loading = false; // Asegúrate de ocultar el spinner en caso de error
    });
  }
  buscarClientesPorId(id) {
    this.loading = true; // Activa el spinner
    this.clienteService.buscarClientePorId(+id).subscribe(data => {
      this.clientes = [data]; // Ajusta según la estructura de tu respuesta
      this.totalRecords = 1; // Solo un cliente
      this.loading = false; // Oculta el spinner
    }, error => {
      this.clientes = []; // Limpia la lista en caso de error
      this.totalRecords = 0; // Actualiza total records
      this.loading = false; // Oculta el spinner
      console.error('Error al buscar cliente por ID:', error);
    });
  }
  onIdInput(event) {
    const inputElement = event.target; // Asegúrate de usar el tipo correcto
    this.searchTerm = inputElement.value; // Asigna el valor de entrada
    this.searchTerms.next(this.searchTerm); // Envía el valor al Subject
  }
  onLazyLoad(event) {
    this.currentPage = event.first / event.rows; // Calcula la página actual
    this.rowsPerPage = event.rows; // Obtiene el tamaño de la página
    // Carga clientes paginados
    this.cargarClientesPaginados(this.currentPage, this.rowsPerPage);
  }
  /* onIdInput(event: any): void {
  const id = event.target.value;
  if (id) {
    this.clienteService.buscarClientePorId(+id).subscribe(
      (data: Cliente) => {
        this.clientes = [data];
        this.errorMessage = null;
      },
      (error) => {
        this.clientes = [];
        this.errorMessage = 'Cliente no encontrado';
        console.error('Error al buscar cliente:', error);
      }
    );
  } else {
    this.cargarClientes();
  }
  }*/
  onClear() {
    this.registerForm.reset({
      codigo: {
        value: '',
        disabled: true
      },
      nombres: {
        value: '',
        disabled: true
      },
      apellidos: {
        value: '',
        disabled: true
      },
      cedula: {
        value: '',
        disabled: true
      },
      libras: '',
      fecha: new Date()
    });
    this.searchTerm = ''; // Limpia el valor del campo de búsqueda
    this.searchTerms.next(this.searchTerm); // Llama al método para actualizar la búsqueda
    // Carga todos los clientes desde la primera página
    this.currentPage = 0; // Reinicia la página actual
    this.cargarClientesPaginados(this.currentPage, this.rowsPerPage);
  }
  onRowClienteSeleccionado(event) {
    const cliente = event.data;
    console.log('Cliente seleccionado:', cliente);
    if (cliente) {
      this.registerForm.patchValue({
        codigo: cliente.id,
        nombres: cliente.nombres,
        apellidos: cliente.apellidos,
        cedula: cliente.cedula
      });
    }
  }
  onSubmit() {
    if (this.registerForm.valid) {
      // Obtener los datos del formulario
      const formData = this.registerForm.value;
      // Obtener el ID del cliente seleccionado desde el formulario
      const clienteId = this.registerForm.get('codigo')?.value;
      // Construir el objeto cliente para enviar
      const cliente = {
        id: clienteId
      };
      // Crear el objeto de datos a enviar
      const data = {
        id: 0,
        cliente: cliente,
        fecha: formData.fecha.toISOString(),
        cantQuintales: formData.libras || '0'
      };
      console.log('Datos a enviar:', data);
      // Enviar la solicitud al servicio
      this.ingresoFacturaService.registrarFactura(data).subscribe(response => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Factura registrada con éxito'
        });
        this.onClear(); // Limpiar el formulario después del envío
      }, error => {
        console.error('Error al registrar factura:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo registrar la factura'
        });
      });
    } else {
      console.log('Formulario no válido');
    }
  }
  static {
    this.ɵfac = function IngresoFacturaComponent_Factory(t) {
      return new (t || IngresoFacturaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_service_cliente_service__WEBPACK_IMPORTED_MODULE_0__.ClienteService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_service_ingreso_factura_service__WEBPACK_IMPORTED_MODULE_1__.IngresoFacturaService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: IngresoFacturaComponent,
      selectors: [["app-ingreso-factura"]],
      decls: 75,
      vars: 12,
      consts: [[1, "card", "p-3", "border-none", "shadow-2", "mb-3", "flex", "align-items-center", "justify-content-between", 2, "border-left", "8px solid var(--primary-color)"], [1, "flex", "align-items-center"], [1, "p-2", "border-round-lg", "bg-primary-50", "mr-3", "shadow-1"], [1, "pi", "pi-receipt", "text-primary", "text-2xl"], [1, "m-0", "font-bold", "text-900", "line-height-2"], [1, "m-0", "text-500", "font-medium", 2, "font-size", "0.8rem"], [1, "grid"], [1, "col-12", "xl:col-6"], [1, "card", "border-none", "shadow-2", "border-round-xl", "p-3", "relative"], [1, "flex", "align-items-center", "mb-3", 2, "border-left", "4px solid var(--primary-color)", "padding-left", "0.85rem"], [1, "m-0", "font-bold", "text-900", 2, "font-size", "1rem"], ["styleClass", "p-datatable-sm p-datatable-gridlines", 3, "onLazyLoad", "onRowSelect", "value", "lazy", "totalRecords", "rows", "rowHover", "paginator"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["class", "absolute top-0 left-0 w-full h-full border-round-xl flex align-items-center justify-content-center", "style", "background: rgba(255,255,255,0.7); z-index: 10;", 4, "ngIf"], [1, "card", "border-none", "shadow-2", "border-round-xl", "p-3"], [1, "flex", "align-items-center", "mb-4", 2, "border-left", "4px solid var(--green-500)", "padding-left", "0.85rem"], [3, "ngSubmit", "formGroup"], [1, "grid", "p-fluid"], [1, "field", "col-12", "md:col-4", "mb-3"], [1, "font-bold", "text-700", "mb-2", "block", "text-sm"], [1, "p-inputgroup"], [1, "p-inputgroup-addon", "bg-gray-100"], [1, "pi", "pi-id-card", "text-500"], ["type", "text", "pInputText", "", "formControlName", "codigo", 1, "border-round-right-lg", "surface-50"], [1, "field", "col-12", "md:col-8", "mb-3"], ["type", "text", "pInputText", "", "formControlName", "cedula", 1, "border-round-right-lg", "surface-50"], [1, "field", "col-12", "md:col-6", "mb-3"], [1, "pi", "pi-user", "text-500"], ["type", "text", "pInputText", "", "formControlName", "nombres", 1, "border-round-right-lg", "surface-50"], ["type", "text", "pInputText", "", "formControlName", "apellidos", 1, "border-round-right-lg", "surface-50"], [1, "p-inputgroup-addon"], [1, "pi", "pi-calendar"], ["id", "fecha", "formControlName", "fecha", "dateFormat", "dd/mm/yy", "styleClass", "w-full border-round-right-lg", 3, "showIcon", "appendTo"], [1, "pi", "pi-chart-line"], ["type", "text", "pInputText", "", "formControlName", "libras", "placeholder", "0.00", 1, "border-round-right-lg"], ["class", "p-error mt-1", 4, "ngIf"], [1, "flex", "justify-content-end", "gap-2", "mt-4", "pt-3", "border-top-1", "surface-border"], ["pButton", "", "pRipple", "", "type", "button", "label", "Limpiar Formulario", "icon", "pi pi-refresh", 1, "p-button-text", "p-button-secondary", "border-round-lg", 3, "click"], ["pButton", "", "pRipple", "", "type", "submit", "label", "Registrar Factura", "icon", "pi pi-save", 1, "p-button-primary", "shadow-2", "border-round-lg", "px-4", 3, "disabled"], [1, "flex", "justify-content-between", "align-items-center", "flex-column", "sm:flex-row", "gap-2"], [1, "p-input-icon-left", "w-full", "sm:w-20rem"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Buscar por C\u00F3digo", 1, "w-full", "border-round-lg", 3, "input", "ngModelChange", "ngModel"], [1, "text-500", "text-sm", "hidden", "sm:block"], [1, "pi", "pi-info-circle", "mr-1"], [1, "text-center", 2, "width", "80px"], [2, "width", "140px"], [1, "cursor-pointer", "transition-all", "hover:surface-100", 3, "click"], [1, "text-center", "font-bold", "text-primary"], [1, "flex", "flex-column"], [1, "font-bold", "text-900"], [1, "text-700", "font-medium"], ["colspan", "3", 1, "text-center", "text-500", "py-4"], [1, "absolute", "top-0", "left-0", "w-full", "h-full", "border-round-xl", "flex", "align-items-center", "justify-content-center", 2, "background", "rgba(255,255,255,0.7)", "z-index", "10"], ["styleClass", "w-3rem h-3rem"], [1, "p-error", "mt-1"], ["class", "text-xs", 4, "ngIf"], [1, "text-xs"], [1, "pi", "pi-times-circle", "mr-1"]],
      template: function IngresoFacturaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div")(6, "h3", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Ingreso de Facturas");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Registro y vinculaci\u00F3n de comprobantes a clientes");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "h4", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Selecci\u00F3n de Cliente");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p-table", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onLazyLoad", function IngresoFacturaComponent_Template_p_table_onLazyLoad_16_listener($event) {
            return ctx.onLazyLoad($event);
          })("onRowSelect", function IngresoFacturaComponent_Template_p_table_onRowSelect_16_listener($event) {
            return ctx.onRowClienteSeleccionado($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, IngresoFacturaComponent_ng_template_17_Template, 7, 1, "ng-template", 12)(18, IngresoFacturaComponent_ng_template_18_Template, 7, 0, "ng-template", 13)(19, IngresoFacturaComponent_ng_template_19_Template, 9, 4, "ng-template", 14)(20, IngresoFacturaComponent_ng_template_20_Template, 3, 0, "ng-template", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, IngresoFacturaComponent_div_21_Template, 2, 0, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 7)(23, "div", 17)(24, "div", 18)(25, "h4", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Detalles del Comprobante");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "form", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function IngresoFacturaComponent_Template_form_ngSubmit_27_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 20)(29, "div", 21)(30, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "C\u00F3digo Cliente");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 23)(33, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 27)(37, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Documento de Identidad");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 23)(40, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 29)(44, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Nombres");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 23)(47, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 29)(51, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Apellidos");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 23)(54, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 29)(58, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Fecha de Registro");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 23)(61, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "p-calendar", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 29)(65, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Cantidad (Libras)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 23)(68, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, IngresoFacturaComponent_div_71_Template, 2, 1, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 39)(73, "button", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IngresoFacturaComponent_Template_button_click_73_listener() {
            return ctx.onClear();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "button", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          let tmp_10_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.clientes)("lazy", true)("totalRecords", ctx.totalRecords)("rows", 5)("rowHover", true)("paginator", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.registerForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showIcon", false)("appendTo", "body");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx.registerForm.get("libras")) == null ? null : tmp_10_0.invalid) && (((tmp_10_0 = ctx.registerForm.get("libras")) == null ? null : tmp_10_0.dirty) || ((tmp_10_0 = ctx.registerForm.get("libras")) == null ? null : tmp_10_0.touched)));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.registerForm.invalid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputText, primeng_toast__WEBPACK_IMPORTED_MODULE_11__.Toast, primeng_ripple__WEBPACK_IMPORTED_MODULE_12__.Ripple, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, primeng_calendar__WEBPACK_IMPORTED_MODULE_13__.Calendar, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_14__.ProgressSpinner],
      styles: ["@charset \"UTF-8\";\n.table-loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 33%; \n\n  left: 13%; \n\n  width: 60%; \n\n  height: 60%; \n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 20;\n}\n\n.loading-box[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #ccc;\n  padding: 1px;\n  border-radius: 10px;\n  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.spinner-overlay[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 70px;\n  z-index: 100;\n}\n\np-table.relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.table-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2); \n\n  transition: box-shadow 0.3s ease; \n\n}\n\n.table-row-hover[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZ3Jlc28tZmFjdHVyYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxrQkFBQTtFQUNBLFFBQUEsRUFBQSwwQkFBQTtFQUNBLFNBQUEsRUFBQSwrQkFBQTtFQUNBLFVBQUEsRUFBQSxtQkFBQTtFQUNBLFdBQUEsRUFBQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNBO0VBQ0ksdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSwyQ0FBQSxFQUFBLHFCQUFBO0VBQ0EsZ0NBQUEsRUFBQSxvQkFBQTtBQUVKOztBQUNBO0VBQ0ksZUFBQTtBQUVKIiwiZmlsZSI6ImluZ3Jlc28tZmFjdHVyYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1sb2FkaW5nLW92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMyU7IC8qIE1vdmVyIG3DoXMgaGFjaWEgYWJham8gKi9cclxuICAgIGxlZnQ6IDEzJTsgLyogTW92ZXIgbcOhcyBoYWNpYSBsYSBkZXJlY2hhICovXHJcbiAgICB3aWR0aDogNjAlOyAvKiBBbmNobyBvcGNpb25hbCAqL1xyXG4gICAgaGVpZ2h0OiA2MCU7IC8qIEFsdHVyYSBvcGNpb25hbCAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDIwO1xyXG59XHJcblxyXG4ubG9hZGluZy1ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5zcGlubmVyLW92ZXJsYXkge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbnAtdGFibGUucmVsYXRpdmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udGFibGUtc2hhZG93IHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7IC8qIEVmZWN0byBkZSBzb21icmEgKi9cclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlOyAvKiBBbmltYWNpw7NuIHN1YXZlICovXHJcbn1cclxuXHJcbi50YWJsZS1yb3ctaG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL0FzaXN0ZW50ZS1mYWN0dXJhL2luZ3Jlc28tZmFjdHVyYS9pbmdyZXNvLWZhY3R1cmEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksa0JBQUE7RUFDQSxRQUFBLEVBQUEsMEJBQUE7RUFDQSxTQUFBLEVBQUEsK0JBQUE7RUFDQSxVQUFBLEVBQUEsbUJBQUE7RUFDQSxXQUFBLEVBQUEsb0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFFSjs7QUFDQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKOztBQUNBO0VBQ0ksMkNBQUEsRUFBQSxxQkFBQTtFQUNBLGdDQUFBLEVBQUEsb0JBQUE7QUFFSjs7QUFDQTtFQUNJLGVBQUE7QUFFSjtBQUNBLDQ0REFBNDREIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWxvYWRpbmctb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMzJTsgLyogTW92ZXIgbcODwqFzIGhhY2lhIGFiYWpvICovXHJcbiAgICBsZWZ0OiAxMyU7IC8qIE1vdmVyIG3Dg8KhcyBoYWNpYSBsYSBkZXJlY2hhICovXHJcbiAgICB3aWR0aDogNjAlOyAvKiBBbmNobyBvcGNpb25hbCAqL1xyXG4gICAgaGVpZ2h0OiA2MCU7IC8qIEFsdHVyYSBvcGNpb25hbCAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDIwO1xyXG59XHJcblxyXG4ubG9hZGluZy1ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5zcGlubmVyLW92ZXJsYXkge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbnAtdGFibGUucmVsYXRpdmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udGFibGUtc2hhZG93IHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7IC8qIEVmZWN0byBkZSBzb21icmEgKi9cclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlOyAvKiBBbmltYWNpw4PCs24gc3VhdmUgKi9cclxufVxyXG5cclxuLnRhYmxlLXJvdy1ob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 22461:
/*!********************************************************************************************!*\
  !*** ./src/app/demo/components/Asistente-factura/view-facturas/view-facturas.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewFacturasComponent: () => (/* binding */ ViewFacturasComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_demo_service_ingreso_factura_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/ingreso-factura.service */ 63671);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);















const _c0 = a0 => ({
  "table-shadow": a0
});
const _c1 = () => ({
  width: "40vw"
});
const _c2 = () => ({
  width: "350px"
});
function ViewFacturasComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37)(1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "ID Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "p-dropdown", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 27)(9, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewFacturasComponent_ng_template_9_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.limpiarFiltros());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1.months);
  }
}
function ViewFacturasComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "C\u00F3digo Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Fecha de Compra");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Cant Registradas en Libras ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ViewFacturasComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td")(10, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewFacturasComponent_ng_template_11_Template_button_click_10_listener() {
      const factura_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.showModalUpdate(factura_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewFacturasComponent_ng_template_11_Template_button_click_11_listener() {
      const factura_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.confirmDeleteTransaccion(factura_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const factura_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](factura_r4.clienteId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", factura_r4.nombres, " ", factura_r4.apellidos, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](factura_r4.fecha);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", factura_r4.cantQuintales, " ");
  }
}
function ViewFacturasComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No existen registros.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ViewFacturasComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading users data. Please wait.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ViewFacturasComponent_div_61_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Solo se permiten n\u00FAmeros y un punto decimal.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ViewFacturasComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ViewFacturasComponent_div_61_small_1_Template, 2, 0, "small", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r1.updateForm.get("libras")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["pattern"]);
  }
}
class ViewFacturasComponent {
  constructor(ingresoFacturaService, fb, messageService, confirmationService) {
    this.ingresoFacturaService = ingresoFacturaService;
    this.fb = fb;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    /* private meses = [
         'Ene',
         'Feb',
         'Mar',
         'Abr',
         'May',
         'Jun',
         'Jul',
         'Ago',
         'Sep',
         'Oct',
         'Nov',
         'Dic',
     ];*/
    this.months = [{
      label: 'Enero',
      value: '01'
    }, {
      label: 'Febrero',
      value: '02'
    }, {
      label: 'Marzo',
      value: '03'
    }, {
      label: 'Abril',
      value: '04'
    }, {
      label: 'Mayo',
      value: '05'
    }, {
      label: 'Junio',
      value: '06'
    }, {
      label: 'Julio',
      value: '07'
    }, {
      label: 'Agosto',
      value: '08'
    }, {
      label: 'Septiembre',
      value: '09'
    }, {
      label: 'Octubre',
      value: '10'
    }, {
      label: 'Noviembre',
      value: '11'
    }, {
      label: 'Diciembre',
      value: '12'
    }];
    this.facturasRegistradas = [];
    this.facturasPaginadas = [];
    this.modalUpdate = false;
    this.facturaSeleccionada = null;
    this.facturaId = null;
    this.totalRecords = 0;
    this.loading = false;
    this.rowsPerPage = 10;
    this.currentPage = 0;
    this.updateForm = this.fb.group({
      codigo: [{
        value: '',
        disabled: true
      }],
      nombres: [{
        value: '',
        disabled: true
      }],
      apellidos: [{
        value: '',
        disabled: true
      }],
      cantQuintales: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^\d*\.?\d*$/)]],
      fecha: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
    this.searchForm = this.fb.group({
      codigoCliente: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[0-9]*$')]],
      selectedMonth: [null],
      selectedYear: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[0-9]{4}$')]]
    });
  }
  ngOnInit() {
    this.cargarFacturasPaginadas(this.currentPage, this.rowsPerPage);
  }
  cargarFacturasPaginadas(page, size) {
    this.loading = true;
    this.ingresoFacturaService.obtenerFacturasPaginadas(page, size).subscribe(data => {
      console.log('Datos de facturas:', data);
      this.facturasPaginadas = data.content;
      this.totalRecords = data.totalElements;
      this.loading = false;
    }, error => {
      console.error('Error al obtener las facturas', error);
      this.loading = false;
    });
  }
  onLazyLoad(event) {
    this.currentPage = event.first / event.rows;
    this.rowsPerPage = event.rows;
    console.log(`Cargando página: ${this.currentPage}, filas por página: ${this.rowsPerPage}`);
    this.cargarFacturasPaginadas(this.currentPage, this.rowsPerPage);
  }
  showModalUpdate(factura) {
    this.facturaSeleccionada = factura;
    console.log('La factura seleccionada es: ' + JSON.stringify(this.facturaSeleccionada));
    this.facturaId = factura.id;
    this.updateForm.patchValue({
      codigo: factura.clienteId,
      nombres: factura.nombres,
      apellidos: factura.apellidos,
      cantQuintales: factura.cantQuintales,
      fecha: new Date(new Date(factura.fecha).getTime() + new Date().getTimezoneOffset() * 60000)
    });
    this.modalUpdate = true;
  }
  closeModalUpdate() {
    this.modalUpdate = false;
    this.updateForm.reset();
  }
  confirmDeleteTransaccion(factura) {
    this.confirmationService.confirm({
      key: 'confirm',
      message: `¿Deseas eliminar esta factura?`,
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      rejectLabel: 'No',
      accept: () => {
        this.deleteFactura(factura.id);
      }
    });
  }
  consultarFacturasConFiltros() {
    const {
      codigoCliente,
      selectedMonth,
      selectedYear
    } = this.searchForm.value;
    this.loading = true;
    this.ingresoFacturaService.obtenerFacturasFiltradas(this.currentPage, this.rowsPerPage, codigoCliente, selectedMonth, selectedYear).subscribe(data => {
      console.log('facturas filtradas', data);
      this.facturasPaginadas = data.content;
      this.totalRecords = data.totalElements;
      this.loading = false;
    }, error => {
      console.error('error al cargar las facturas filtradas', error);
      this.loading = false;
    });
  }
  limpiarFiltros() {
    this.searchForm.reset();
    this.cargarFacturasPaginadas(0, this.rowsPerPage);
  }
  deleteFactura(id) {
    this.ingresoFacturaService.eliminarFactura(id).subscribe({
      next: response => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Factura eliminada correctamente'
        });
        this.cargarFacturasPaginadas(this.currentPage, this.rowsPerPage);
      },
      error: err => {
        if (err.error && err.error.text === 'Factura eliminada exitosamente') {
          this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: 'Factura eliminada correctamente'
          });
          this.cargarFacturasPaginadas(this.currentPage, this.rowsPerPage);
        } else {
          let errorMessage = 'No se pudo eliminar la factura';
          if (err.error) {
            errorMessage = typeof err.error === 'string' ? err.error : JSON.stringify(err.error);
          }
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: errorMessage
          });
          console.error('Error al eliminar la factura:', err);
        }
      }
    });
  }
  onUpdateFactura() {
    const factura = {
      id: this.facturaSeleccionada.id,
      cliente: {
        id: this.updateForm.get('codigo')?.value
      },
      fecha: this.updateForm.get('fecha')?.value,
      cantQuintales: this.updateForm.get('cantQuintales')?.value
    };
    console.log('id de la factura: ' + this.facturaSeleccionada.id);
    console.log("id cliente al actualizar: " + factura.cliente.id);
    this.ingresoFacturaService.actualizarFactura(this.facturaSeleccionada.id, factura).subscribe(data => {
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Factura actualizada correctamente'
      });
      this.closeModalUpdate();
      this.cargarFacturasPaginadas(this.currentPage, this.rowsPerPage);
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Error al actualizar factura'
      });
    });
  }
  static {
    this.ɵfac = function ViewFacturasComponent_Factory(t) {
      return new (t || ViewFacturasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_demo_service_ingreso_factura_service__WEBPACK_IMPORTED_MODULE_0__.IngresoFacturaService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.ConfirmationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ViewFacturasComponent,
      selectors: [["app-view-facturas"]],
      decls: 65,
      vars: 23,
      consts: [[1, "card", 2, "height", "30px"], [2, "margin-top", "-10px"], [1, "card"], [3, "ngSubmit", "formGroup"], ["responsiveLayout", "scroll", "styleClass", "relative", 3, "onLazyLoad", "value", "lazy", "totalRecords", "paginator", "rows", "ngClass"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "loadingbody"], [3, "visibleChange", "visible", "modal", "closable"], [2, "text-align", "center"], [1, "dialog-header", "cancel-button"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-times", 1, "p-button-danger", "mr-2", "mb-2", 3, "click"], [1, "grid", "p-fluid", "mt-3"], [1, "field", "col-12", "md:col-6"], [1, "p-inputgroup"], [1, "p-inputgroup-addon"], [1, "pi", "pi-id-card"], [1, "p-float-label"], ["type", "text", "pInputText", "", "formControlName", "codigo"], ["for", "codigo"], [1, "pi", "pi-user"], ["type", "text", "pInputText", "", "formControlName", "nombres"], ["for", "nombres"], ["type", "text", "pInputText", "", "formControlName", "apellidos"], ["for", "apellidos"], [1, "pi", "pi-calendar"], ["id", "fecha", "formControlName", "fecha", "dateFormat", "dd/mm/yy", 3, "showIcon", "appendTo"], ["for", "fecha"], [1, "pi", "pi-chart-line"], ["type", "text", "pInputText", "", "formControlName", "cantQuintales"], ["for", "cantQuintales"], ["class", "p-error", 4, "ngIf"], [1, "flex", "justify-content-end"], ["pButton", "", "label", "Actualizar", "icon", "pi pi-save", "type", "submit"], ["header", "Confirmaci\u00F3n", "key", "confirm", "icon", "pi pi-exclamation-triangle", "message", "Are you sure you want to proceed?", "acceptButtonStyleClass", "p-button-text", "rejectButtonStyleClass", "p-button-text"], [1, "flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2"], [1, "p-float-label", "small-input-container"], ["type", "text", "pInputText", "", "formControlName", "codigoCliente", 1, "small-input"], ["for", "codigoCliente"], [1, "p-input-icon-left"], ["formControlName", "selectedMonth", "placeholder", "Selecciona un mes", 1, "w-full", 3, "options"], ["pInputText", "", "type", "text", "placeholder", "A\u00F1o", "formControlName", "selectedYear", 1, "small-input"], ["pButton", "", "pRipple", "", "type", "submit", "label", "Consultar", "icon", "pi pi-refresh"], ["pButton", "", "pRipple", "", "type", "button", "label", "Limpiar", "icon", "pi pi-trash", 1, "p-button-warning", "ml-2", 3, "click"], [2, "text-align", "center", "width", "30%"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-pencil", 1, "p-button-success", "mb-2", "mr-2", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-trash", 1, "p-button-danger", "mr-2", "mb-2", 3, "click"], ["colspan", "6"], [1, "p-error"], [4, "ngIf"]],
      template: function ViewFacturasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "h4", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Facturas de Compras de Cacao");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Facturas Ingresadas");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ViewFacturasComponent_Template_form_ngSubmit_7_listener() {
            return ctx.consultarFacturasConFiltros();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p-table", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onLazyLoad", function ViewFacturasComponent_Template_p_table_onLazyLoad_8_listener($event) {
            return ctx.onLazyLoad($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ViewFacturasComponent_ng_template_9_Template, 12, 1, "ng-template", 5)(10, ViewFacturasComponent_ng_template_10_Template, 11, 0, "ng-template", 6)(11, ViewFacturasComponent_ng_template_11_Template, 12, 5, "ng-template", 7)(12, ViewFacturasComponent_ng_template_12_Template, 3, 0, "ng-template", 8)(13, ViewFacturasComponent_ng_template_13_Template, 3, 0, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p-dialog", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("visibleChange", function ViewFacturasComponent_Template_p_dialog_visibleChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.modalUpdate, $event) || (ctx.modalUpdate = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ViewFacturasComponent_Template_form_ngSubmit_15_listener() {
            return ctx.onUpdateFactura();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h3", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12)(19, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewFacturasComponent_Template_button_click_19_listener() {
            return ctx.closeModalUpdate();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14)(21, "div", 15)(22, "div", 16)(23, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "C\u00F3digo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 15)(30, "div", 16)(31, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Nombres");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 15)(38, "div", 16)(39, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Apellidos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 15)(46, "div", 16)(47, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "p-calendar", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Fecha del pago");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 15)(54, "div", 16)(55, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "label", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Cantidad en Libras");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, ViewFacturasComponent_div_61_Template, 2, 1, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "p-footer", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "button", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "p-confirmDialog", 36);
        }
        if (rf & 2) {
          let tmp_15_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.searchForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.facturasPaginadas)("lazy", true)("totalRecords", ctx.totalRecords)("paginator", true)("rows", 10)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c0, ctx.loading));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("visible", ctx.modalUpdate);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("modal", true)("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.updateForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Actualizar Factura con ID: ", ctx.facturaId, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showIcon", true)("appendTo", "body");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_15_0 = ctx.updateForm.get("libras")) == null ? null : tmp_15_0.invalid) && (((tmp_15_0 = ctx.updateForm.get("libras")) == null ? null : tmp_15_0.dirty) || ((tmp_15_0 = ctx.updateForm.get("libras")) == null ? null : tmp_15_0.touched)));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c2));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, primeng_table__WEBPACK_IMPORTED_MODULE_5__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_3__.Footer, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, primeng_dialog__WEBPACK_IMPORTED_MODULE_6__.Dialog, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, primeng_toast__WEBPACK_IMPORTED_MODULE_9__.Toast, primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__.Dropdown, primeng_ripple__WEBPACK_IMPORTED_MODULE_11__.Ripple, primeng_calendar__WEBPACK_IMPORTED_MODULE_12__.Calendar, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__.ConfirmDialog],
      styles: [".dialog-header[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.cancel-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n\n.small-input[_ngcontent-%COMP%] {\n  width: 110px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctZmFjdHVyYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKIiwiZmlsZSI6InZpZXctZmFjdHVyYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYW5jZWwtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uc21hbGwtaW5wdXQge1xyXG4gICAgd2lkdGg6IDExMHB4OyBcclxuICAgLy8gcGFkZGluZzogMC4yNXJlbSAwLjVyZW07IFxyXG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL0FzaXN0ZW50ZS1mYWN0dXJhL3ZpZXctZmFjdHVyYXMvdmlldy1mYWN0dXJhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7QUFDQSw0b0JBQTRvQiIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhbmNlbC1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zbWFsbC1pbnB1dCB7XHJcbiAgICB3aWR0aDogMTEwcHg7IFxyXG4gICAvLyBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTsgXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_Asistente-factura_asistente-factura_module_ts.js.map