"use strict";
(self["webpackChunksakai"] = self["webpackChunksakai"] || []).push([["src_app_demo_components_Administrador_administrador_module_ts"],{

/***/ 92067:
/*!*******************************************************************************!*\
  !*** ./src/app/demo/components/Administrador/administrador-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdministradorRoutingModule: () => (/* binding */ AdministradorRoutingModule)
/* harmony export */ });
/* harmony import */ var _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuarios/usuarios.component */ 40721);
/* harmony import */ var _dashboard_admi_dashboard_admi_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-admi/dashboard-admi.component */ 17707);
/* harmony import */ var _consulta_cacao_consulta_cacao_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consulta-cacao/consulta-cacao.component */ 60261);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _secretaria_caja_caja_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../secretaria/caja/caja.component */ 72829);
/* harmony import */ var _secretaria_inventario_inventario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../secretaria/inventario/inventario.component */ 61617);
/* harmony import */ var _secretaria_compras_semanales_compras_semanales_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../secretaria/compras-semanales/compras-semanales.component */ 41857);
/* harmony import */ var _secretaria_view_compras_otros_productos_view_compras_otros_productos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../secretaria/view-compras-otros-productos/view-compras-otros-productos.component */ 80377);
/* harmony import */ var _secretaria_fijaciones_fijaciones_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../secretaria/fijaciones/fijaciones.component */ 5157);
/* harmony import */ var _control_ra_control_ra_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./control-ra/control-ra.component */ 1865);
/* harmony import */ var _secretaria_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../secretaria/clientes/clientes.component */ 1825);
/* harmony import */ var _balance_comercial_balance_comercial_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./balance-comercial/balance-comercial.component */ 38069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37580);














const routes = [{
  path: 'usuarios',
  component: _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_0__.UsuariosComponent
}, {
  path: 'dashboard-admi',
  component: _dashboard_admi_dashboard_admi_component__WEBPACK_IMPORTED_MODULE_1__.DashboardAdmiComponent
}, {
  path: 'consulta-cacao',
  component: _consulta_cacao_consulta_cacao_component__WEBPACK_IMPORTED_MODULE_2__.ConsultaCacaoComponent
}, {
  path: 'compras-semanales',
  component: _secretaria_compras_semanales_compras_semanales_component__WEBPACK_IMPORTED_MODULE_5__.ComprasSemanalesComponent
}, {
  path: 'caja',
  component: _secretaria_caja_caja_component__WEBPACK_IMPORTED_MODULE_3__.CajaComponent
}, {
  path: 'view-otras-compras',
  component: _secretaria_view_compras_otros_productos_view_compras_otros_productos_component__WEBPACK_IMPORTED_MODULE_6__.ViewComprasOtrosProductosComponent
}, {
  path: 'inventario',
  component: _secretaria_inventario_inventario_component__WEBPACK_IMPORTED_MODULE_4__.InventarioComponent
}, {
  path: 'fijaciones',
  component: _secretaria_fijaciones_fijaciones_component__WEBPACK_IMPORTED_MODULE_7__.FijacionesComponent
}, {
  path: 'control-ra',
  component: _control_ra_control_ra_component__WEBPACK_IMPORTED_MODULE_8__.ControlRaComponent
}, {
  path: 'clientes',
  component: _secretaria_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_9__.ClientesComponent
}, {
  path: 'balance-comercial',
  component: _balance_comercial_balance_comercial_component__WEBPACK_IMPORTED_MODULE_10__.BalanceComercialComponent
}, {
  path: '',
  redirectTo: 'dashboard-admi',
  pathMatch: 'full'
}];
class AdministradorRoutingModule {
  static {
    this.ɵfac = function AdministradorRoutingModule_Factory(t) {
      return new (t || AdministradorRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
      type: AdministradorRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AdministradorRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
})();

/***/ }),

/***/ 48258:
/*!***********************************************************************!*\
  !*** ./src/app/demo/components/Administrador/administrador.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdministradorModule: () => (/* binding */ AdministradorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _consulta_cacao_consulta_cacao_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consulta-cacao/consulta-cacao.component */ 60261);
/* harmony import */ var _bodega_bodega_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bodega/bodega.component */ 38459);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/chart */ 8564);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/menu */ 23673);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_styleclass__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/styleclass */ 50053);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/panelmenu */ 78635);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var _dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard/dashboard-routing.module */ 96303);
/* harmony import */ var _dashboard_admi_dashboard_admi_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-admi/dashboard-admi.component */ 17707);
/* harmony import */ var _administrador_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./administrador-routing.module */ 92067);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var _secretaria_fijaciones_fijaciones_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../secretaria/fijaciones/fijaciones.component */ 5157);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);
/* harmony import */ var _control_ra_control_ra_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./control-ra/control-ra.component */ 1865);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/tabview */ 634);
/* harmony import */ var primeng_splitter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/splitter */ 71369);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/fieldset */ 63148);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/progressspinner */ 53244);
/* harmony import */ var _balance_comercial_balance_comercial_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./balance-comercial/balance-comercial.component */ 38069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);



























class AdministradorModule {
  static {
    this.ɵfac = function AdministradorModule_Factory(t) {
      return new (t || AdministradorModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: AdministradorModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, primeng_toast__WEBPACK_IMPORTED_MODULE_11__.ToastModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_12__.DialogModule, primeng_chart__WEBPACK_IMPORTED_MODULE_13__.ChartModule, primeng_menu__WEBPACK_IMPORTED_MODULE_14__.MenuModule, primeng_table__WEBPACK_IMPORTED_MODULE_15__.TableModule, primeng_styleclass__WEBPACK_IMPORTED_MODULE_16__.StyleClassModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_17__.PanelMenuModule, primeng_button__WEBPACK_IMPORTED_MODULE_18__.ButtonModule, _dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__.DashboardsRoutingModule, _administrador_routing_module__WEBPACK_IMPORTED_MODULE_4__.AdministradorRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_19__.CalendarModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_20__.InputTextModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__.DropdownModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_22__.ConfirmDialogModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_23__.TabViewModule, primeng_splitter__WEBPACK_IMPORTED_MODULE_24__.SplitterModule, primeng_fieldset__WEBPACK_IMPORTED_MODULE_25__.FieldsetModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_26__.ProgressSpinnerModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AdministradorModule, {
    declarations: [_consulta_cacao_consulta_cacao_component__WEBPACK_IMPORTED_MODULE_0__.ConsultaCacaoComponent, _bodega_bodega_component__WEBPACK_IMPORTED_MODULE_1__.BodegaComponent, _dashboard_admi_dashboard_admi_component__WEBPACK_IMPORTED_MODULE_3__.DashboardAdmiComponent, _secretaria_fijaciones_fijaciones_component__WEBPACK_IMPORTED_MODULE_5__.FijacionesComponent, _control_ra_control_ra_component__WEBPACK_IMPORTED_MODULE_6__.ControlRaComponent, _balance_comercial_balance_comercial_component__WEBPACK_IMPORTED_MODULE_7__.BalanceComercialComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, primeng_toast__WEBPACK_IMPORTED_MODULE_11__.ToastModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_12__.DialogModule, primeng_chart__WEBPACK_IMPORTED_MODULE_13__.ChartModule, primeng_menu__WEBPACK_IMPORTED_MODULE_14__.MenuModule, primeng_table__WEBPACK_IMPORTED_MODULE_15__.TableModule, primeng_styleclass__WEBPACK_IMPORTED_MODULE_16__.StyleClassModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_17__.PanelMenuModule, primeng_button__WEBPACK_IMPORTED_MODULE_18__.ButtonModule, _dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__.DashboardsRoutingModule, _administrador_routing_module__WEBPACK_IMPORTED_MODULE_4__.AdministradorRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_19__.CalendarModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_20__.InputTextModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__.DropdownModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_22__.ConfirmDialogModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_23__.TabViewModule, primeng_splitter__WEBPACK_IMPORTED_MODULE_24__.SplitterModule, primeng_fieldset__WEBPACK_IMPORTED_MODULE_25__.FieldsetModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_26__.ProgressSpinnerModule]
  });
})();

/***/ }),

/***/ 38069:
/*!************************************************************************************************!*\
  !*** ./src/app/demo/components/Administrador/balance-comercial/balance-comercial.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BalanceComercialComponent: () => (/* binding */ BalanceComercialComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_demo_service_balance_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/balance.service */ 73565);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);















const _c0 = () => ({
  width: "90vw"
});
const _c1 = () => ({
  width: "30vw"
});
const _c2 = () => ({
  width: "350px"
});
const _c3 = () => ({
  "width": "100%"
});
const _c4 = (a0, a1) => ({
  "status-label": true,
  "status-abierto": a0,
  "status-cerrado": a1
});
function BalanceComercialComponent_ng_template_6_Template(rf, ctx) {}
function BalanceComercialComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Id Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Fecha Inicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Fecha Fin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function BalanceComercialComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 61)(12, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td", 61)(15, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BalanceComercialComponent_ng_template_8_Template_button_click_15_listener() {
      const balance_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.openViewBalance(balance_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const balance_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](balance_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](balance_r2.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 6, balance_r2.fechaInicio, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 9, balance_r2.fechaFin, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](12, _c4, balance_r2.estado === true, balance_r2.estado === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", balance_r2.estado ? "Activo" : "Compras Cerradas", " ");
  }
}
function BalanceComercialComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No existen registros");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function BalanceComercialComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading users data. Please wait.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function BalanceComercialComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "QQ. Netos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Precio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function BalanceComercialComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 70)(16, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BalanceComercialComponent_ng_template_25_Template_button_click_16_listener() {
      const compra_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.openUpdTransaccionDialog(compra_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BalanceComercialComponent_ng_template_25_Template_button_click_17_listener() {
      const compra_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.confirmDeleteTransaccion(compra_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const compra_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 7, compra_r5.fecha, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](compra_r5.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 10, compra_r5.qqNetos, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](11, 13, compra_r5.precio, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 16, compra_r5.total, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", (ctx_r2.selectedBalance == null ? null : ctx_r2.selectedBalance.estado) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", (ctx_r2.selectedBalance == null ? null : ctx_r2.selectedBalance.estado) === false);
  }
}
function BalanceComercialComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No existen registros");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function BalanceComercialComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading data. Please wait.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function BalanceComercialComponent_ng_template_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "QQ. Netos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Precio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function BalanceComercialComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 70)(16, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BalanceComercialComponent_ng_template_69_Template_button_click_16_listener() {
      const venta_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.openUpdTransaccionDialog(venta_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BalanceComercialComponent_ng_template_69_Template_button_click_17_listener() {
      const venta_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.confirmDeleteTransaccion(venta_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const venta_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 5, venta_r7.fecha, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](venta_r7.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 8, venta_r7.qqNetos, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](11, 11, venta_r7.precio, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 14, venta_r7.total, "1.2-2"));
  }
}
function BalanceComercialComponent_ng_template_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No existen registros");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function BalanceComercialComponent_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading data. Please wait.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function BalanceComercialComponent_ng_template_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Tipo de Gasto");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Valor Pagado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function BalanceComercialComponent_ng_template_113_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 70)(7, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BalanceComercialComponent_ng_template_113_Template_button_click_7_listener() {
      const gasto_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.openGastoDialogUpd(gasto_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BalanceComercialComponent_ng_template_113_Template_button_click_8_listener() {
      const gasto_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.confirmDeleteGasto(gasto_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const gasto_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](gasto_r9.tiposGastos.gasto);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 2, gasto_r9.montoPagado, "1.2-2"));
  }
}
function BalanceComercialComponent_ng_template_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No existen registros");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function BalanceComercialComponent_ng_template_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading data. Please wait.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class BalanceComercialComponent {
  constructor(balanceService, messageService, fb, confirmationService) {
    this.balanceService = balanceService;
    this.messageService = messageService;
    this.fb = fb;
    this.confirmationService = confirmationService;
    this.balances = [];
    this.selectedBalance = null;
    this.transaccionesCompra = [];
    this.transaccionesVenta = [];
    this.gastos = [];
    this.openViewBalanceModel = false;
    this.dialogTransaccion = false;
    this.tipoTransaccion = 'compra';
    this.selectedTransaccionId = null;
    this.dialogUpdateTransaccion = false;
    this.tiposGastos = [];
    this.dialogGastos = false;
    this.currentBalanceId = 0;
    this.totalQqCompra = 0;
    this.totalCompra = 0;
    this.promedioCompra = 0;
    this.totalQqVenta = 0;
    this.totalVenta = 0;
    this.promedioVenta = 0;
    this.totalGastos = 0;
    this.sacosVenta = 0;
    this.sacosCompra = 0;
    this.perdidaQQ = 0;
    this.porcentajePerdidaQQ = 0;
    this.sumaTotal = 0;
    this.utilidadNeta = 0;
    this.isEditMode = false;
    this.selectedGastoId = null;
    this.selectedTipo = null;
    this.labelQQ = 'Pérdida QQ';
    this.labelPorcentaje = '% de Pérdida';
    this.qqColor = 'red';
    this.transaccionForm = this.fb.group({
      id: [null],
      fecha: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      descripcion: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      qqNetos: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      precio: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
    this.updateTransaccionForm = this.fb.group({
      id: [null],
      fecha: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      descripcion: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      qqNetos: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      precio: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      tipo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
    this.gastosForm = this.fb.group({
      id: [null],
      tipoGasto: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      montoPagado: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
  }
  ngOnInit() {
    this.listarBalances();
    this.obtenerTiposGastos();
  }
  openViewBalance(codBalance) {
    const balance = this.balances.find(b => b.id === codBalance);
    if (balance) {
      this.selectedBalance = balance;
      this.openViewBalanceModel = true;
      this.currentBalanceId = codBalance;
      // Listar transacciones y otros datos asociados a este balance
      this.listarTransaccionesComprasPorBalance(codBalance);
      this.listarTransaccionesVentasPorBalance(codBalance);
      this.listarGastosPorBalance(codBalance);
    } else {
      // Si no se encuentra el balance, tal vez mostrar un mensaje de error o tomar alguna acción
      console.error('Balance no encontrado con el id:', codBalance);
    }
  }
  closeViewBalance() {
    this.openViewBalanceModel = false;
  }
  openTransaccionDialog(tipo) {
    this.tipoTransaccion = tipo;
    this.dialogTransaccion = true;
    this.transaccionForm.patchValue({
      fecha: new Date()
    });
  }
  closeTransaccionDialog() {
    this.dialogTransaccion = false;
    this.transaccionForm.reset();
  }
  confirmDeleteTransaccion(trancaccion) {
    this.confirmationService.confirm({
      key: 'confirm',
      message: `¿Estás seguro de que deseas eliminar este registro?`,
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      rejectLabel: 'No',
      accept: () => {
        this.eliminarTransaccion(trancaccion);
      }
    });
  }
  confirmDeleteGasto(gasto) {
    this.confirmationService.confirm({
      key: 'confirm',
      message: `¿Estás seguro de que deseas eliminar este registro?`,
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      rejectLabel: 'No',
      accept: () => {
        this.eliminarGasto(gasto);
      }
    });
  }
  eliminarTransaccion(trancaccion) {
    const tipo = trancaccion.tipo;
    this.balanceService.eliminarTransaccion(trancaccion.id).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Registro eliminado correctamente'
      });
      if (tipo === 'C') {
        this.listarTransaccionesComprasPorBalance(this.currentBalanceId);
      } else {
        this.listarTransaccionesVentasPorBalance(this.currentBalanceId);
      }
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Error al elimminar el registro'
      });
    });
  }
  eliminarGasto(gasto) {
    this.balanceService.eliminarGasto(gasto.id).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Registro eliminado correctamente'
      });
      this.listarGastosPorBalance(this.currentBalanceId);
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Error al elimminar el registro'
      });
    });
  }
  openUpdTransaccionDialog(transaccion) {
    this.selectedTransaccionId = transaccion.id;
    const tipoTransaccion = transaccion.tipo === 'C' ? 'Compra' : 'Venta';
    let fechaT = null;
    if (transaccion.fecha) {
      // Creamos un objeto Date sin concatenar 'T00:00:00' si ya es un string ISO válido
      const fechaLocal = new Date(transaccion.fecha);
      if (!isNaN(fechaLocal.getTime())) {
        // Verificamos que sea una fecha válida
        fechaT = fechaLocal;
      }
    }
    this.updateTransaccionForm.patchValue({
      ...transaccion,
      fecha: fechaT,
      tipo: tipoTransaccion
    });
    this.dialogUpdateTransaccion = true;
  }
  closeUpdTransaccionDialog() {
    this.dialogUpdateTransaccion = false;
    this.updateTransaccionForm.reset();
  }
  openGastoDialog() {
    this.isEditMode = false;
    this.dialogGastos = true;
    this.obtenerTiposGastos();
  }
  openGastoDialogUpd(gasto) {
    this.isEditMode = true;
    this.selectedGastoId = gasto.id;
    this.selectedTipo = gasto.tiposGastos;
    this.gastosForm.patchValue({
      id: gasto.id,
      tipoGasto: this.selectedTipo,
      montoPagado: gasto.montoPagado
    });
    console.log(this.tiposGastos);
    this.dialogGastos = true;
  }
  closeGastoDialog() {
    this.dialogGastos = false;
    this.selectedGastoId = null;
    this.selectedTipo = null;
    this.gastosForm.reset();
  }
  listarBalances() {
    this.balanceService.listarBalances().subscribe(data => {
      this.balances = data;
    }, error => {
      console.error('Error al cargar los datos:', error);
    });
  }
  listarTransaccionesComprasPorBalance(codBalance) {
    this.balanceService.listarTransaccionesCompraPorBalance(codBalance).subscribe(data => {
      this.transaccionesCompra = data;
      this.calcularTotales();
    }, error => {
      console.error('Error al cargar las transacciones:', error);
    });
  }
  listarTransaccionesVentasPorBalance(codBalance) {
    this.balanceService.listarTransaccionesVentaPorBalance(codBalance).subscribe(data => {
      this.transaccionesVenta = data;
      this.calcularTotales();
    }, error => {
      console.error('Error al cargar las transacciones:', error);
    });
  }
  listarGastosPorBalance(codBalance) {
    this.balanceService.listarGastosPorBalance(codBalance).subscribe(data => {
      this.gastos = data;
      this.calcularTotales();
    }, error => {
      console.error('Error al cargar los gastos:', error);
    });
  }
  registrarTransaccion() {
    const fechaLocal = this.transaccionForm.value.fecha; // Obtén la fecha local
    const fechaUTC = this.convertToUTC(fechaLocal); // Convierte a UTC
    const transaccionData = {
      id: 0,
      fecha: fechaUTC,
      descripcion: this.transaccionForm.value.descripcion,
      qqNetos: this.transaccionForm.value.qqNetos,
      precio: this.transaccionForm.value.precio,
      total: this.transaccionForm.value.total,
      tipo: this.tipoTransaccion === 'compra' ? 'C' : 'V' // Define el tipo automáticamente
    };
    console.log(`Registrando ${this.tipoTransaccion}:`, transaccionData);
    this.balanceService.registrarTransaccion(transaccionData).subscribe(response => {
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Transacción registrada correctamente.'
      });
      this.closeTransaccionDialog();
      this.listarTransaccionesComprasPorBalance(this.currentBalanceId);
      this.listarTransaccionesVentasPorBalance(this.currentBalanceId);
    }, error => {
      console.error('Error al registrar la transacción:', error);
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'No se pudo registrar la transacción.'
      });
    });
  }
  //Para actualizar una transaccion
  actualizarTransaccion() {
    const fechaLocal = this.updateTransaccionForm.value.fecha; // Obtén la fecha local
    const fechaUTC = this.convertToUTC(fechaLocal);
    const trancaccion = {
      id: this.updateTransaccionForm.get('id')?.value,
      fecha: fechaUTC,
      descripcion: this.updateTransaccionForm.get('descripcion')?.value,
      qqNetos: this.updateTransaccionForm.get('qqNetos')?.value,
      precio: this.updateTransaccionForm.get('precio')?.value
    };
    if (this.selectedTransaccionId !== null) {
      this.balanceService.actualizarRegistro(this.selectedTransaccionId, trancaccion).subscribe(response => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Transacción actualizada correctamente.'
        });
        this.closeUpdTransaccionDialog();
        this.listarTransaccionesComprasPorBalance(this.currentBalanceId);
        this.listarTransaccionesVentasPorBalance(this.currentBalanceId);
      }, error => {
        console.error('Error al registrar la transacción:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo registrar la transacción.'
        });
      });
    }
  }
  convertToUTC(fechaLocal) {
    return new Date(Date.UTC(fechaLocal.getFullYear(), fechaLocal.getMonth(), fechaLocal.getDate(), fechaLocal.getHours(), fechaLocal.getMinutes(), fechaLocal.getSeconds()));
  }
  obtenerTiposGastos() {
    this.balanceService.obtenerTiposGastos().subscribe(data => {
      this.tiposGastos = data;
      console.log('Tipos de gastos cargados: ', this.tiposGastos);
    });
  }
  registrarGasto() {
    const selectedTipoGasto = this.gastosForm.value.tipoGasto;
    const gasto = {
      id: this.selectedGastoId ?? 0,
      // Usar el ID del gasto seleccionado si estamos en modo de edición
      tiposGastos: {
        id: selectedTipoGasto?.id ?? selectedTipoGasto // Manejar el caso donde el valor sea un objeto o un ID
      },
      montoPagado: parseFloat(this.gastosForm.value.montoPagado)
    };
    let request$;
    if (this.isEditMode) {
      // Llamada al servicio para actualizar el gasto existente
      request$ = this.balanceService.actualizarGasto(this.selectedGastoId || 0, gasto);
    } else {
      // Llamada al servicio para registrar un nuevo gasto
      request$ = this.balanceService.registrarGasto(gasto);
    }
    request$.subscribe(response => {
      const successMessage = this.isEditMode ? 'Gasto actualizado correctamente.' : 'Gasto registrado correctamente.';
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: successMessage
      });
      this.closeGastoDialog();
      this.listarGastosPorBalance(this.currentBalanceId); // Actualiza la lista de gastos
    }, error => {
      const errorMessage = this.isEditMode ? 'No se pudo actualizar el gasto.' : 'No se pudo registrar el gasto.';
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: errorMessage
      });
    });
  }
  calcularTotales() {
    this.totalQqCompra = parseFloat(this.transaccionesCompra.reduce((sum, item) => sum + (item.qqNetos || 0), 0).toFixed(2));
    this.totalCompra = parseFloat(this.transaccionesCompra.reduce((sum, item) => sum + (item.total || 0), 0).toFixed(3));
    this.promedioCompra = this.totalQqCompra > 0 ? parseFloat((this.totalCompra / this.totalQqCompra).toFixed(3)) : 0;
    this.totalQqVenta = parseFloat(this.transaccionesVenta.reduce((sum, item) => sum + (item.qqNetos || 0), 0).toFixed(2));
    this.totalVenta = parseFloat(this.transaccionesVenta.reduce((sum, item) => sum + (item.total || 0), 0).toFixed(2));
    this.promedioVenta = this.totalQqVenta > 0 ? parseFloat((this.totalVenta / this.totalQqVenta).toFixed(3)) : 0;
    this.totalGastos = parseFloat(this.gastos.reduce((sum, item) => sum + (item.montoPagado || 0), 0).toFixed(2));
    //sacos
    this.sacosVenta = Math.floor(this.totalQqVenta / 1.5 * 100) / 100;
    this.sacosCompra = Math.floor(this.totalQqCompra / 1.5 * 100) / 100;
    //Perdida de QQ
    this.perdidaQQ = parseFloat((this.totalQqVenta - this.totalQqCompra).toFixed(3));
    this.porcentajePerdidaQQ = parseFloat((this.perdidaQQ / this.totalQqCompra * 100).toFixed(2));
    this.labelQQ = this.perdidaQQ >= 0 ? 'Ganancia QQ' : 'Pérdida QQ';
    this.labelPorcentaje = this.perdidaQQ >= 0 ? '% de Ganancia' : '% de Pérdida';
    this.qqColor = this.perdidaQQ >= 0 ? 'green' : 'red';
    this.perdidaQQ = Math.abs(this.perdidaQQ);
    this.porcentajePerdidaQQ = Math.abs(this.porcentajePerdidaQQ);
    //Utilidad Neta
    this.sumaTotal = parseFloat((this.totalVenta - this.totalCompra).toFixed(2));
    this.utilidadNeta = parseFloat((this.sumaTotal - this.totalGastos).toFixed(2));
  }
  static {
    this.ɵfac = function BalanceComercialComponent_Factory(t) {
      return new (t || BalanceComercialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_demo_service_balance_service__WEBPACK_IMPORTED_MODULE_0__.BalanceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.ConfirmationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: BalanceComercialComponent,
      selectors: [["app-balance-comercial"]],
      decls: 280,
      vars: 113,
      consts: [[1, "card", 2, "height", "30px"], [2, "margin-top", "-10px"], [1, "card"], ["scrollDirection", "both", "scrollHeight", "400px", "responsiveLayout", "scroll", 3, "value", "rows", "rowHover", "scrollable", "paginator"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "loadingbody"], [3, "visibleChange", "visible", "modal", "closable"], [1, "mt-3", 2, "text-align", "center"], [1, "dialog-header", "cancel-button"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-times", 1, "p-button-danger", "mr-2", "small-button", 3, "click"], [1, "grid"], [1, "col-12", "xl:col-6"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between"], ["pButton", "", "pRipple", "", "icon", "pi pi-plus", "pTooltip", "Agregar Compra", "tooltipPosition", "top", 1, "mr-2", "mb-2", 3, "click", "disabled"], ["styleClass", "p-datatable-gridlines", "scrollDirection", "both", "scrollHeight", "200px", "responsiveLayout", "scroll", 3, "value", "rows", "rowHover", "scrollable"], [1, "field", 2, "text-align", "left", "margin-top", "1rem"], [1, "p-inputgroup", "mr-2", 2, "width", "30%", "display", "inline-flex"], [1, "p-inputgroup-addon"], [1, "pi", "pi-dollar"], [1, "p-float-label"], ["type", "text", "pInputText", "", "disabled", "", 1, "color-text", 3, "value"], [1, "p-inputgroup", "mr-2", 2, "width", "37%", "display", "inline-flex"], [1, "p-inputgroup", 2, "width", "30%", "display", "inline-flex"], ["pButton", "", "pRipple", "", "icon", "pi pi-plus", "pTooltip", "Agregar Venta", "tooltipPosition", "top", 1, "mr-2", "mb-2", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-plus", "pTooltip", "Agregar Gasto", "tooltipPosition", "top", 1, "mr-2", "mb-2", 3, "click"], [1, "field", 2, "text-align", "right", "margin-top", "1rem"], [1, "p-inputgroup", 2, "width", "auto", "display", "inline-flex"], [1, "p-inputgroup", 2, "width", "40%", "display", "inline-flex"], ["type", "text", "pInputText", "", "disabled", "", 1, "red-text", "large-input", 3, "value"], [3, "ngSubmit", "formGroup"], [1, "grid", "p-fluid"], [1, "field", "col-12"], [1, "p-inputgroup", "mt-4"], [1, "pi", "pi-calendar"], ["id", "fecha", "formControlName", "fecha", "dateFormat", "dd/mm/yy", 3, "showIcon", "appendTo"], ["for", "fecha"], [1, "pi", "pi-truck"], ["type", "text", "pInputText", "", "formControlName", "descripcion"], ["for", "descripcion"], ["type", "text", "pInputText", "", "formControlName", "qqNetos"], ["for", "qqNetos"], ["type", "text", "pInputText", "", "formControlName", "precio"], ["for", "precio"], [1, "flex", "flex-column", 2, "height", "100%"], [1, "flex", "justify-content-end", "mt-auto"], ["pButton", "", "type", "submit", "icon", "pi pi-save", 3, "label"], ["header", "Confirmaci\u00F3n", "key", "confirm", "icon", "pi pi-exclamation-triangle", "message", "Are you sure you want to proceed?", "acceptButtonStyleClass", "p-button-text", "rejectButtonStyleClass", "p-button-text"], [1, "p-inputgroup", "mt-4", 2, "display", "inline-flex", "width", "48%"], ["type", "text", "pInputText", "", "formControlName", "id"], ["for", "id"], ["type", "text", "pInputText", "", "formControlName", "tipo"], ["for", "tipo"], ["pButton", "", "type", "submit", "icon", "pi pi-save", "label", "Guardar Cambios"], [1, "mt-4"], ["id", "tiposGastos", "placeholder", "Tipo de Gastoo", "optionLabel", "gasto", "formControlName", "tipoGasto", 3, "options", "showClear", "appendTo", "ngStyle"], ["for", "tipoCacao"], ["type", "text", "pInputText", "", "formControlName", "montoPagado"], ["for", "montoPagado"], [2, "text-align", "center"], [3, "ngClass"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-eye", "pTooltip", "Ver Informaci\u00F3n", "tooltipPosition", "top", 1, "p-button-help", "mr-2", "mb-2", 3, "click"], ["colspan", "7"], [2, "width", "20%", "text-align", "center"], [2, "width", "23%", "text-align", "center"], [2, "width", "18%", "text-align", "center"], [2, "width", "11%", "text-align", "center"], [2, "width", "17%", "text-align", "center"], [2, "width", "5px", "padding", "0", "margin", "0", "text-align", "center"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-pencil", 1, "p-button-success", "p-button-text", 2, "font-size", "12px", "padding", "2px", "width", "24px", "height", "24px", "margin", "0", 3, "click", "disabled"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-trash", 1, "p-button-danger", "p-button-text", 2, "font-size", "12px", "padding", "2px", "width", "24px", "height", "24px", "margin", "0", 3, "click", "disabled"], ["colspan", "6"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-pencil", 1, "p-button-success", "p-button-text", 2, "font-size", "12px", "padding", "2px", "width", "24px", "height", "24px", "margin", "0", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-trash", 1, "p-button-danger", "p-button-text", 2, "font-size", "12px", "padding", "2px", "width", "24px", "height", "24px", "margin", "0", 3, "click"], [2, "width", "45%", "text-align", "center"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-pencil", 1, "p-button-success", "p-button-text", "mr-2", "mb-2", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-trash", 1, "p-button-danger", "p-button-text", "mr-2", "mb-2", 3, "click"]],
      template: function BalanceComercialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "h4", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Balance Comercial");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "p-table", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, BalanceComercialComponent_ng_template_6_Template, 0, 0, "ng-template", 4)(7, BalanceComercialComponent_ng_template_7_Template, 13, 0, "ng-template", 5)(8, BalanceComercialComponent_ng_template_8_Template, 16, 15, "ng-template", 6)(9, BalanceComercialComponent_ng_template_9_Template, 3, 0, "ng-template", 7)(10, BalanceComercialComponent_ng_template_10_Template, 3, 0, "ng-template", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p-dialog", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("visibleChange", function BalanceComercialComponent_Template_p_dialog_visibleChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.openViewBalanceModel, $event) || (ctx.openViewBalanceModel = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form")(13, "h3", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Balance Semanal");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11)(16, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BalanceComercialComponent_Template_button_click_16_listener() {
            return ctx.closeViewBalance();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13)(18, "div", 14)(19, "div", 15)(20, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Compras");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BalanceComercialComponent_Template_button_click_22_listener() {
            return ctx.openTransaccionDialog("compra");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p-table", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, BalanceComercialComponent_ng_template_24_Template, 13, 0, "ng-template", 5)(25, BalanceComercialComponent_ng_template_25_Template, 18, 19, "ng-template", 6)(26, BalanceComercialComponent_ng_template_26_Template, 3, 0, "ng-template", 7)(27, BalanceComercialComponent_ng_template_27_Template, 3, 0, "ng-template", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 18)(29, "div", 19)(30, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Total QQ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 24)(38, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 25)(46, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](50, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Promedio Precio");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 18)(54, "div", 19)(55, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](59, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Sacos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 14)(63, "div", 15)(64, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Ventas");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BalanceComercialComponent_Template_button_click_66_listener() {
            return ctx.openTransaccionDialog("venta");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "p-table", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, BalanceComercialComponent_ng_template_68_Template, 13, 0, "ng-template", 5)(69, BalanceComercialComponent_ng_template_69_Template, 18, 17, "ng-template", 6)(70, BalanceComercialComponent_ng_template_70_Template, 3, 0, "ng-template", 7)(71, BalanceComercialComponent_ng_template_71_Template, 3, 0, "ng-template", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 18)(73, "div", 19)(74, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](78, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Total QQ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 24)(82, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](86, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 25)(90, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](94, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Promedio Precio");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 18)(98, "div", 19)(99, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](103, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Sacos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 14)(107, "div", 15)(108, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Otros Gastos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BalanceComercialComponent_Template_button_click_110_listener() {
            return ctx.openGastoDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "p-table", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](112, BalanceComercialComponent_ng_template_112_Template, 7, 0, "ng-template", 5)(113, BalanceComercialComponent_ng_template_113_Template, 9, 5, "ng-template", 6)(114, BalanceComercialComponent_ng_template_114_Template, 3, 0, "ng-template", 7)(115, BalanceComercialComponent_ng_template_115_Template, 3, 0, "ng-template", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 28)(117, "div", 29)(118, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](122, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Total de Gastos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 14)(126, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "C\u00E1lculos - Utilidad Neta");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 18)(129, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "QQ En Calificaci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 24)(132, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](136, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 25)(140, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "h6");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "C\u00E1lculo - Utilidad Neta");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 24)(149, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](152, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](153, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Ventas-Compras");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 30)(157, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](158, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](160, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](161, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Utilidad Neta");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "p-dialog", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("visibleChange", function BalanceComercialComponent_Template_p_dialog_visibleChange_164_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.dialogTransaccion, $event) || (ctx.dialogTransaccion = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "form", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function BalanceComercialComponent_Template_form_ngSubmit_165_listener() {
            return ctx.registrarTransaccion();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "h3", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 11)(169, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BalanceComercialComponent_Template_button_click_169_listener() {
            return ctx.closeTransaccionDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 33)(171, "div", 34)(172, "div", 35)(173, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](174, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](176, "p-calendar", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "label", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "Fecha");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 35)(180, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "input", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "label", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "Descripci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 35)(187, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](188, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](190, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "label", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "QQ. Netos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 35)(194, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](195, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](197, "input", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "label", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "Precio");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 46)(201, "div", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](202, "button", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](203, "p-confirmDialog", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "p-dialog", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("visibleChange", function BalanceComercialComponent_Template_p_dialog_visibleChange_204_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.dialogUpdateTransaccion, $event) || (ctx.dialogUpdateTransaccion = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "form", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function BalanceComercialComponent_Template_form_ngSubmit_205_listener() {
            return ctx.actualizarTransaccion();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "h3", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "Editar Registro ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "div", 11)(209, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BalanceComercialComponent_Template_button_click_209_listener() {
            return ctx.closeUpdTransaccionDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 33)(211, "div", 34)(212, "div", 50)(213, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](214, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](216, "input", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "label", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "Cod");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 50)(220, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](221, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](223, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "label", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "Tipo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 35)(227, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](228, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](230, "p-calendar", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "label", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "Fecha");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "div", 35)(234, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](235, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](237, "input", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "label", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239, "Descripci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "div", 35)(241, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](242, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](244, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "label", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, "QQ. Netos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "div", 35)(248, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](249, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](251, "input", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "label", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, "Precio");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "div", 46)(255, "div", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](256, "button", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "p-dialog", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("visibleChange", function BalanceComercialComponent_Template_p_dialog_visibleChange_257_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.dialogGastos, $event) || (ctx.dialogGastos = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "form", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function BalanceComercialComponent_Template_form_ngSubmit_258_listener() {
            return ctx.registrarGasto();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "h3", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "div", 11)(262, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BalanceComercialComponent_Template_button_click_262_listener() {
            return ctx.closeGastoDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "div", 33)(264, "div", 34)(265, "div", 56)(266, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](267, "p-dropdown", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "label", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](269, "Tipo de Gasto");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "div", 35)(271, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](272, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](274, "input", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "label", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, "Valor Pagado");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "div", 46)(278, "div", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](279, "button", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.balances)("rows", 7)("rowHover", true)("scrollable", true)("paginator", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](107, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("visible", ctx.openViewBalanceModel);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("modal", true)("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", (ctx.selectedBalance == null ? null : ctx.selectedBalance.estado) === false);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.transaccionesCompra)("rows", 4)("rowHover", true)("scrollable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](34, 71, ctx.totalQqCompra, "1.2-2"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](42, 74, ctx.totalCompra, "1.2-2"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](50, 77, ctx.promedioCompra, "1.2-2"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](59, 80, ctx.sacosCompra, "1.2-2"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.transaccionesVenta)("rows", 4)("rowHover", true)("scrollable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](78, 83, ctx.totalQqVenta, "1.2-2"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](86, 86, ctx.totalVenta, "1.2-2"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](94, 89, ctx.promedioVenta, "1.2-2"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](103, 92, ctx.sacosVenta, "1.2-2"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.gastos)("rows", 4)("rowHover", true)("scrollable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](122, 95, ctx.totalGastos, "1.2-2"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](136, 98, ctx.perdidaQQ, "1.2-2"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.labelQQ);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.porcentajePerdidaQQ);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.labelPorcentaje);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](153, 101, ctx.sumaTotal, "1.2-2"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](161, 104, ctx.utilidadNeta, "1.2-2"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](108, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("visible", ctx.dialogTransaccion);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("modal", true)("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.transaccionForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Registro de ", ctx.tipoTransaccion === "compra" ? "Compra" : "Venta", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showIcon", true)("appendTo", "body");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("label", "Registrar ", ctx.tipoTransaccion, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](109, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](110, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("visible", ctx.dialogUpdateTransaccion);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("modal", true)("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.updateTransaccionForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showIcon", true)("appendTo", "body");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](111, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("visible", ctx.dialogGastos);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("modal", true)("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.gastosForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isEditMode ? "Actualizar Gasto" : "Registro de Gastos", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.tiposGastos)("showClear", true)("appendTo", "body")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](112, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx.isEditMode ? "Guardar Cambios" : "Registrar Gasto");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, primeng_toast__WEBPACK_IMPORTED_MODULE_5__.Toast, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, primeng_dialog__WEBPACK_IMPORTED_MODULE_6__.Dialog, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.Tooltip, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, primeng_calendar__WEBPACK_IMPORTED_MODULE_10__.Calendar, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.Dropdown, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__.ConfirmDialog, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
      styles: ["@charset \"UTF-8\";\n.dialog-header[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.cancel-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n\n.small-button[_ngcontent-%COMP%] {\n  width: 24px; \n\n  height: 24px; \n\n  font-size: 12px; \n\n}\n\n[_nghost-%COMP%]     .status-label {\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  display: inline-block;\n  text-align: center;\n  min-width: 80px;\n}\n\n[_nghost-%COMP%]     .status-abierto {\n  background-color: #c3e6cb; \n\n  color: #155724;\n}\n\n[_nghost-%COMP%]     .status-cerrado {\n  background-color: #e79494; \n\n  color: #801155;\n}\n\n.centrado[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.red-text[_ngcontent-%COMP%] {\n  color: red !important;\n  font-weight: bold;\n}\n\n.color-text[_ngcontent-%COMP%] {\n  color: rgb(0, 0, 0) !important;\n  font-weight: bold;\n}\n\n.large-input[_ngcontent-%COMP%] {\n  font-size: 1.5rem; \n\n  font-weight: bold; \n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGFuY2UtY29tZXJjaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBLEVBQUEsd0JBQUE7RUFDQSxZQUFBLEVBQUEsd0JBQUE7RUFDQSxlQUFBLEVBQUEsa0RBQUE7QUFFSjs7QUFDQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQ0E7RUFDSSx5QkFBQSxFQUFBLHVCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0kseUJBQUEsRUFBQSx1QkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQ0E7RUFDSSw4QkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQ0E7RUFDSSxpQkFBQSxFQUFBLG1DQUFBO0VBQ0EsaUJBQUEsRUFBQSw2QkFBQTtBQUVKIiwiZmlsZSI6ImJhbGFuY2UtY29tZXJjaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2FuY2VsLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxufVxyXG5cclxuLnNtYWxsLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjRweDsgLyogbyBlbCB0YW1hw7FvIGRlc2VhZG8gKi9cclxuICAgIGhlaWdodDogMjRweDsgLyogbyBlbCB0YW1hw7FvIGRlc2VhZG8gKi9cclxuICAgIGZvbnQtc2l6ZTogMTJweDsgLyogQWp1c3RhIGVsIHRhbWHDsW8gZGUgbGEgZnVlbnRlIHNpIGVzIG5lY2VzYXJpbyAqL1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnN0YXR1cy1sYWJlbCB7XHJcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1pbi13aWR0aDogODBweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5zdGF0dXMtYWJpZXJ0byB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNlNmNiOyAvKiBDb2xvciBwYXJhIEFiaWVydG8gKi9cclxuICAgIGNvbG9yOiAjMTU1NzI0O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnN0YXR1cy1jZXJyYWRvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzk0OTQ7IC8qIENvbG9yIHBhcmEgQ2VycmFkbyAqL1xyXG4gICAgY29sb3I6ICM4MDExNTU7XHJcbn1cclxuXHJcbi5jZW50cmFkb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJlZC10ZXh0IHtcclxuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY29sb3ItdGV4dCB7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmxhcmdlLWlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtOyAvKiBBdW1lbnRhIGVsIHRhbWHDsW8gZGUgbGEgZnVlbnRlICovXHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgLyogSGFjZSBlbCB0ZXh0byBtw6FzIGdydWVzbyAqL1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL0FkbWluaXN0cmFkb3IvYmFsYW5jZS1jb21lcmNpYWwvYmFsYW5jZS1jb21lcmNpYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksa0JBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUEsRUFBQSx3QkFBQTtFQUNBLFlBQUEsRUFBQSx3QkFBQTtFQUNBLGVBQUEsRUFBQSxrREFBQTtBQUVKOztBQUNBO0VBQ0ksdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFDQTtFQUNJLHlCQUFBLEVBQUEsdUJBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0E7RUFDSSx5QkFBQSxFQUFBLHVCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7QUFFSjs7QUFDQTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFDQTtFQUNJLDhCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFDQTtFQUNJLGlCQUFBLEVBQUEsbUNBQUE7RUFDQSxpQkFBQSxFQUFBLDZCQUFBO0FBRUo7QUFDQSx3NEVBQXc0RSIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhbmNlbC1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zbWFsbC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDI0cHg7IC8qIG8gZWwgdGFtYcODwrFvIGRlc2VhZG8gKi9cclxuICAgIGhlaWdodDogMjRweDsgLyogbyBlbCB0YW1hw4PCsW8gZGVzZWFkbyAqL1xyXG4gICAgZm9udC1zaXplOiAxMnB4OyAvKiBBanVzdGEgZWwgdGFtYcODwrFvIGRlIGxhIGZ1ZW50ZSBzaSBlcyBuZWNlc2FyaW8gKi9cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5zdGF0dXMtbGFiZWwge1xyXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtaW4td2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuc3RhdHVzLWFiaWVydG8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MzZTZjYjsgLyogQ29sb3IgcGFyYSBBYmllcnRvICovXHJcbiAgICBjb2xvcjogIzE1NTcyNDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5zdGF0dXMtY2VycmFkbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc5NDk0OyAvKiBDb2xvciBwYXJhIENlcnJhZG8gKi9cclxuICAgIGNvbG9yOiAjODAxMTU1O1xyXG59XHJcblxyXG4uY2VudHJhZG97XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZWQtdGV4dCB7XHJcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNvbG9yLXRleHQge1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5sYXJnZS1pbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTsgLyogQXVtZW50YSBlbCB0YW1hw4PCsW8gZGUgbGEgZnVlbnRlICovXHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgLyogSGFjZSBlbCB0ZXh0byBtw4PCoXMgZ3J1ZXNvICovXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 38459:
/*!**************************************************************************!*\
  !*** ./src/app/demo/components/Administrador/bodega/bodega.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BodegaComponent: () => (/* binding */ BodegaComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_demo_service_articulo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/articulo.service */ 79358);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 48361);










const _c0 = () => ({
  width: "40vw"
});
function BodegaComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function BodegaComponent_ng_template_8_Template_input_input_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onTermInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function BodegaComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "C\u00F3digo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Art\u00EDculo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Cantidad existentes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function BodegaComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td")(10, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td")(13, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BodegaComponent_ng_template_10_Template_button_click_13_listener() {
      const articulo_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.openModalIngresos(articulo_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const articulo_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](articulo_r4.codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](articulo_r4.articulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](articulo_r4.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](articulo_r4.totalUnidades);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.getStatusClass(articulo_r4.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.getStatusText(articulo_r4.estado), " ");
  }
}
function BodegaComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No existen registros");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function BodegaComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No existen registros");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function BodegaComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Fecha de Ingreso");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Stock Disponible");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Precio de Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Caducidad del Art\u00EDculo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function BodegaComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ingreso_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ingreso_r5.fechaIngreso));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ingreso_r5.unidades);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](8, 6, ingreso_r5.precioVenta, "USD", "code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 10, ingreso_r5.fechaVencimiento));
  }
}
function BodegaComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No existen registros");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function BodegaComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No existen registros");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class BodegaComponent {
  constructor(articulosService) {
    this.articulosService = articulosService;
    this.articulos = [];
    //Para el modal de lista de ingreso stock
    this.ingresoStockModal = false;
  }
  ngOnInit() {
    this.obtenerArticulos();
  }
  obtenerArticulos() {
    this.articulosService.obtenerArticulosConStock().subscribe(data => {
      this.articulos = data;
    }, error => {
      console.log(error);
    });
  }
  getStatusClass(estado) {
    switch (estado) {
      case 0:
        return 'status-sin-stock';
      case 1:
        return 'status-poco';
      case 2:
        return 'status-en-stock';
      default:
        return '';
    }
  }
  getStatusText(estado) {
    switch (estado) {
      case 0:
        return 'No hay stock';
      case 1:
        return 'Pocas Unidades';
      case 2:
        return 'En Stock';
      default:
        return '';
    }
  }
  //Metodos para listar los ingresos de stock de un articulo
  openModalIngresos(articulo) {
    console.log('Artículo seleccionado:', articulo); // Agrega esto para depurar
    this.selectedArticulo = articulo;
    this.ingresoStockModal = true;
    this.loadIngresos(this.selectedArticulo).subscribe(() => {
      this.ingresoStockModal = true;
    });
  }
  closeModalIngresos() {
    this.ingresoStockModal = false;
  }
  loadIngresos(articulo) {
    return this.articulosService.obtenerIngresosPorArticulo(articulo.codigo).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(data => {
      this.selectedArticulo.ingresosStock = data;
      console.log(`Ingresos para el artículo ${articulo.codigo}:`, this.selectedArticulo.ingresosStock);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      console.error(`Error al obtener ingresos para el artículo ${articulo.codigo}:`, error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]);
    }));
  }
  onTermInput(event) {
    const term = event.target.value;
    if (term.length >= 1) {
      this.articulosService.buscarArticulosEstado(term).subscribe(data => {
        this.articulos = data;
      }, error => {
        console.error('Error al buscar el artículo:', error);
      });
    } else {
      this.obtenerArticulos();
    }
  }
  static {
    this.ɵfac = function BodegaComponent_Factory(t) {
      return new (t || BodegaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_demo_service_articulo_service__WEBPACK_IMPORTED_MODULE_0__.ArticuloService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: BodegaComponent,
      selectors: [["app-bodega"]],
      decls: 23,
      vars: 17,
      consts: [[1, "card", 2, "height", "30px"], [2, "margin-top", "-10px"], [1, "card"], [1, "titulo"], ["scrollDirection", "both", "scrollHeight", "400px", "styleClass", "mt-3", "responsiveLayout", "scroll", 3, "value", "rows", "rowHover", "scrollable", "paginator"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "loadingbody"], [3, "visibleChange", "visible", "modal", "closable"], [2, "text-align", "center"], [1, "flex", "justify-content-end"], ["pButton", "", "pRipple", "", "label", "Cerrar", "type", "button", "icon", "pi pi-times", 1, "p-button-danger", "mr-2", "mb-2", 3, "click"], [1, "p-d-flex", "p-ai-center", "p-jc-between", "p-field", "button-container"], [1, "p-input-icon-left", "mr-2"], [1, "pi", "pi-calendar"], ["pInputText", "", "type", "text", "placeholder", "Nombre del art\u00EDculo", 1, "narrow-input", 3, "input"], [1, "status-label", 3, "ngClass"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-info-circle", "label", "M\u00E1s Detalles", 1, "p-button-info", "mr-2", "mb-2", 3, "click"], ["colspan", "8"]],
      template: function BodegaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "h4", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Inventario");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "h4", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Art\u00EDculos en bodega");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p-table", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, BodegaComponent_ng_template_8_Template, 4, 0, "ng-template", 5)(9, BodegaComponent_ng_template_9_Template, 13, 0, "ng-template", 6)(10, BodegaComponent_ng_template_10_Template, 14, 6, "ng-template", 7)(11, BodegaComponent_ng_template_11_Template, 3, 0, "ng-template", 8)(12, BodegaComponent_ng_template_12_Template, 3, 0, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p-dialog", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("visibleChange", function BodegaComponent_Template_p_dialog_visibleChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.ingresoStockModal, $event) || (ctx.ingresoStockModal = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h3", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p-table", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, BodegaComponent_ng_template_17_Template, 9, 0, "ng-template", 6)(18, BodegaComponent_ng_template_18_Template, 12, 12, "ng-template", 7)(19, BodegaComponent_ng_template_19_Template, 3, 0, "ng-template", 8)(20, BodegaComponent_ng_template_20_Template, 3, 0, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p-footer", 12)(22, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BodegaComponent_Template_button_click_22_listener() {
            return ctx.closeModalIngresos();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.articulos)("rows", 10)("rowHover", true)("scrollable", true)("paginator", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("visible", ctx.ingresoStockModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("modal", true)("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Ordenes de Ingresos del Art\u00EDculo ", ctx.selectedArticulo == null ? null : ctx.selectedArticulo.articulo, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.selectedArticulo == null ? null : ctx.selectedArticulo.ingresosStock)("rows", 5)("rowHover", true)("scrollable", true)("paginator", true);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, primeng_toast__WEBPACK_IMPORTED_MODULE_6__.Toast, primeng_api__WEBPACK_IMPORTED_MODULE_7__.Footer, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_dialog__WEBPACK_IMPORTED_MODULE_8__.Dialog, primeng_table__WEBPACK_IMPORTED_MODULE_9__.Table, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
      styles: [".status-label[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  display: inline-block;\n  text-align: center;\n  min-width: 80px;\n}\n\n.status-en-stock[_ngcontent-%COMP%] {\n  background-color: #c3e6cb;\n  color: #155724;\n}\n\n.status-sin-stock[_ngcontent-%COMP%] {\n  background-color: #e79494;\n  color: #a81616;\n}\n\n.status-poco[_ngcontent-%COMP%] {\n  background-color: #edba60;\n  color: #685128;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvZGVnYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1k7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFoQjs7QUFFWTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQUNoQjs7QUFDWTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQUVoQjs7QUFBWTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQUdoQiIsImZpbGUiOiJib2RlZ2EuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICAuc3RhdHVzLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN0YXR1cy1lbi1zdG9jayB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MzZTZjYjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzE1NTcyNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdGF0dXMtc2luLXN0b2NrIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc5NDk0O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjYTgxNjE2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN0YXR1cy1wb2NvIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRiYTYwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjg1MTI4O1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL0FkbWluaXN0cmFkb3IvYm9kZWdhL2JvZGVnYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1k7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFoQjs7QUFFWTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQUNoQjs7QUFDWTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQUVoQjs7QUFBWTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQUdoQjtBQUNBLHd5Q0FBd3lDIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICAuc3RhdHVzLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN0YXR1cy1lbi1zdG9jayB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MzZTZjYjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzE1NTcyNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdGF0dXMtc2luLXN0b2NrIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc5NDk0O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjYTgxNjE2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN0YXR1cy1wb2NvIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRiYTYwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjg1MTI4O1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 60261:
/*!******************************************************************************************!*\
  !*** ./src/app/demo/components/Administrador/consulta-cacao/consulta-cacao.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsultaCacaoComponent: () => (/* binding */ ConsultaCacaoComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 52575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_demo_service_ingreso_factura_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/ingreso-factura.service */ 63671);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var src_app_demo_service_cliente_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/service/cliente.service */ 4771);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/chart */ 8564);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/progressspinner */ 53244);


















const _c0 = ["clientesTable"];
const _c1 = ["searchInput"];
const _c2 = ["searchInputId"];
const _c3 = a0 => ({
  "opacity-60": a0
});
const _c4 = () => ({
  width: "70vw"
});
const _c5 = () => ({
  width: "500px"
});
function ConsultaCacaoComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Mostrando resultados para: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.clienteNombre);
  }
}
function ConsultaCacaoComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "ID Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Fecha de Movimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Quintales (qq)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ConsultaCacaoComponent_ng_template_50_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const detalle_r3 = ctx.$implicit;
    const factura_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](factura_r4.idCliente);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 3, detalle_r3.fecha, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 6, detalle_r3.cantQuintales, "1.2-2"), " ");
  }
}
function ConsultaCacaoComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ConsultaCacaoComponent_ng_template_50_tr_0_Template, 10, 9, "tr", 73);
  }
  if (rf & 2) {
    const factura_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", factura_r4 == null ? null : factura_r4.detalles);
  }
}
function ConsultaCacaoComponent_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Seleccione un cliente y rango de fechas para consultar. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ConsultaCacaoComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "p-progressSpinner", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ConsultaCacaoComponent_ng_template_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 82)(1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div")(4, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "An\u00E1lisis Estad\u00EDstico");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Tendencia de compras por per\u00EDodo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function ConsultaCacaoComponent_h5_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.clienteNombre, " ");
  }
}
function ConsultaCacaoComponent_ng_template_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 82)(1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div")(4, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Base de Productores");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Seleccione un cliente para la consulta");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function ConsultaCacaoComponent_ng_template_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 90)(1, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 93, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function ConsultaCacaoComponent_ng_template_93_Template_input_input_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onTermInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 95, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function ConsultaCacaoComponent_ng_template_93_Template_input_input_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onIdInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ConsultaCacaoComponent_ng_template_93_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchTerm);
  }
}
function ConsultaCacaoComponent_ng_template_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Cod");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Nombres y Apellidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "C\u00E9dula");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ConsultaCacaoComponent_ng_template_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConsultaCacaoComponent_ng_template_95_Template_tr_click_0_listener() {
      const cliente_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onSelectCliente(cliente_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cliente_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cliente_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cliente_r7.nombres + " " + cliente_r7.apellidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cliente_r7.cedula);
  }
}
function ConsultaCacaoComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "p-progressSpinner", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class ConsultaCacaoComponent {
  constructor(ingresoFacturaService, fb, messageService, clienteService, datePipe) {
    //paso 2
    /* this.registerForm = this.fb.group({
         codigoCliente: [
             null,
             [Validators.required, Validators.pattern('^[0-9]*$')],
         ],
         selectedMonth: [null],
         selectedYear: [null, [Validators.pattern('^[0-9]{4}$')]],
     });*/
    this.ingresoFacturaService = ingresoFacturaService;
    this.fb = fb;
    this.messageService = messageService;
    this.clienteService = clienteService;
    this.datePipe = datePipe;
    this.meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
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
    this.loadings = false;
    this.facturas = [];
    this.totalLibras = 0;
    this.codigoClienteInvalid = false;
    this.yearInvalid = false;
    this.fechaDesde = new Date();
    this.fechaHasta = new Date();
    this.ModalGrafico = false;
    this.clientes = [];
    this.ClientesModal = false;
    this.totalRecords = 0;
    this.loading = false;
    this.rowsPerPage = 10;
    this.currentPage = 0;
    this.searchTermSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.currentSearchTerm = '';
    this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.searchTerm = '';
    this.clienteNombre = '';
    this.registerForm = this.fb.group({
      codigoCliente: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      fechaDesde: [''],
      fechaHasta: ['']
    });
    this.graficoForm = this.fb.group({
      codigoClienteModal: [''],
      fechaDesde: [''],
      fechaHasta: [''],
      graficoData: [''],
      graficoOptions: ['']
    });
  }
  ngOnInit() {
    this.searchTermSubject.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(300)).subscribe(term => this.onSearchTermChange(term, true));
    this.searchTerms.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(300)).subscribe(id => this.onSearchTermChange(id, false));
  }
  //Metodos para la busqueda de un cliente
  onSearchTermChange(term, isNameSearch) {
    this.loading = true;
    if (isNameSearch) {
      this.handleNameSearch(term);
    } else {
      this.handleIdSearch(term);
    }
  }
  handleNameSearch(term) {
    if (term.length >= 1) {
      setTimeout(() => {
        this.currentSearchTerm = term;
        this.buscarClientes(term, this.currentPage, this.rowsPerPage);
      }, 1000);
    } else {
      this.cargarClientesPaginados(this.currentPage, this.rowsPerPage);
    }
  }
  handleIdSearch(id) {
    if (id) {
      this.buscarClientes(id, 0, 1);
    } else {
      this.currentPage = 0;
      this.cargarClientesPaginados(this.currentPage, this.rowsPerPage);
    }
  }
  //Para buscar un cliente
  cargarClientesPaginados(page, size) {
    this.clienteService.obtenerClientesPaginados(page, size).subscribe(data => {
      this.clientes = data.content;
      this.totalRecords = data.totalElements;
      this.loading = false;
    }, error => {
      console.error('Error al obtener clientes:', error);
      this.loading = false;
    });
  }
  openClienteModal() {
    this.currentPage = 0;
    this.totalRecords = 0;
    this.clientes = [];
    this.ClientesModal = true;
    this.loading = true;
    this.cargarClientesPaginados(this.currentPage, 5);
  }
  closeClienteModal() {
    this.ClientesModal = false;
    this.clientes = [];
    this.searchInput.nativeElement.value = '';
    this.searchInputId.nativeElement.value = '';
  }
  buscarClientes(term, page, size) {
    const isNumeric = !isNaN(Number(term));
    const searchObservable = isNumeric ? this.clienteService.buscarClientePorId(+term) : this.clienteService.buscarClientesPorNombreApellidoPaginado(term, page, size);
    searchObservable.subscribe(data => {
      if (isNumeric) {
        this.clientes = [data];
        this.totalRecords = 1;
      } else {
        this.clientes = data.content;
        this.totalRecords = data.totalElements;
      }
      this.loading = false;
    }, error => {
      this.clientes = [];
      this.totalRecords = 0;
      this.loading = false;
      console.error('Error al buscar cliente:', error);
    });
  }
  onTermInput(event) {
    const term = event.target.value;
    this.searchTermSubject.next(term);
  }
  onIdInput(event) {
    const inputElement = event.target;
    const id = inputElement.value;
    this.searchTerms.next(id);
  }
  onLazyLoad(event) {
    const page = event.first / event.rows;
    const size = event.rows;
    this.loading = true;
    if (this.currentSearchTerm) {
      this.buscarClientes(this.currentSearchTerm, page, size);
    } else {
      this.cargarClientesPaginados(page, size);
    }
  }
  onLazyLoader(event) {
    this.currentPage = event.first / event.rows;
    this.rowsPerPage = event.rows;
    this.cargarClientesPaginados(this.currentPage, this.rowsPerPage);
  }
  //Metodo para cargar los detalles de cada cliente
  /*consultar(): void {
      this.clienteNombre = '';
      this.facturas = [null];
      this.totalLibras = 0;
      if (this.registerForm.valid) {
          const { codigoCliente, selectedMonth, selectedYear } = this.registerForm.value;
           this.loadings = true;
           this.clienteService.buscarClientePorId(codigoCliente).subscribe(
              (cliente) => {
                  if (this.clienteNombre == "") {
                      this.clienteNombre = `${cliente.nombres} ${cliente.apellidos}`;
                  }
              },
              (error) => {
                  console.error('Error al buscar cliente por ID:', error);
                  this.clienteNombre = ''; // Limpiar si hay un error
                  this.loadings = false;
              }
          );
           this.ingresoFacturaService
              .buscarFacturas(codigoCliente, selectedMonth, selectedYear)
              .subscribe((data) => {
                  this.facturas = [data];
                  if (this.facturas[0].detalles && this.facturas[0].detalles.length > 0) {
                      this.totalLibras = Math.round(
                          this.facturas[0].detalles.reduce(
                              (total: number, detalle: { cantQuintales: number }) => total + detalle.cantQuintales,
                              0
                          ) * 100
                      ) / 100;
                  } else {
                      this.totalLibras = 0;
                  }
                  this.loadings = false;
               },
                  () => {
                      this.loadings = false;
                  }
              );
      } else {
          this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Por favor complete el formulario correctamente.',
          });
      }
  }*/
  consultar() {
    this.clienteNombre = '';
    this.facturas = [null];
    this.totalLibras = 0;
    if (this.registerForm.valid) {
      const {
        codigoCliente,
        fechaDesde,
        fechaHasta
      } = this.registerForm.value;
      // Validar que fechaDesde no sea mayor que fechaHasta
      if (fechaDesde && fechaHasta && new Date(fechaDesde) > new Date(fechaHasta)) {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'La fecha desde no puede ser mayor que la fecha hasta'
        });
        return;
      }
      this.loadings = true;
      // Buscar información del cliente
      this.clienteService.buscarClientePorId(codigoCliente).subscribe(cliente => {
        this.clienteNombre = `${cliente.nombres} ${cliente.apellidos}`;
      }, error => {
        console.error('Error al buscar cliente por ID:', error);
        this.loadings = false;
      });
      // Formatear fechas para el servicio
      const fechaDesdeFormatted = fechaDesde ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.formatDate)(fechaDesde, 'yyyy-MM-dd', 'en-US') : undefined;
      const fechaHastaFormatted = fechaHasta ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.formatDate)(fechaHasta, 'yyyy-MM-dd', 'en-US') : undefined;
      // Buscar facturas
      this.ingresoFacturaService.buscarFacturasPorFecha(codigoCliente, fechaDesdeFormatted, fechaHastaFormatted).subscribe(data => {
        this.facturas = [data];
        if (this.facturas[0]?.detalles?.length > 0) {
          this.totalLibras = Math.round(this.facturas[0].detalles.reduce((total, detalle) => total + detalle.cantQuintales, 0) * 100) / 100;
        } else {
          this.totalLibras = 0;
          this.messageService.add({
            severity: 'info',
            summary: 'Información',
            detail: 'No se encontraron facturas en el rango de fechas especificado'
          });
        }
        this.loadings = false;
      }, error => {
        console.error('Error al buscar facturas:', error);
        this.loadings = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Ocurrió un error al buscar las facturas'
        });
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Por favor complete el formulario correctamente.'
      });
    }
  }
  showModalDialog() {
    const codCliente = this.registerForm.get('codigoCliente')?.value;
    this.codigoClienteModal = codCliente;
    this.ModalGrafico = true;
    this.clienteNombre = '';
  }
  closeModalDialog() {
    this.ModalGrafico = false;
    this.limpiarControles();
    this.clienteNombre = '';
  }
  limpiarControlesPrincipales() {
    this.registerForm.reset();
    this.facturas = [null];
    this.totalLibras = 0;
    this.clienteNombre = '';
  }
  limpiarControles() {
    this.graficoForm.reset();
    this.fechaDesde = new Date();
    this.fechaHasta = new Date();
    this.graficoData = null;
    this.clienteNombre = '';
    this.graficoOptions = null;
  }
  onSelectCliente(cliente) {
    this.codigoCliente = cliente.id;
    this.registerForm.controls['codigoCliente'].setValue(cliente.id);
    this.clienteNombre = cliente.nombres + ' ' + cliente.apellidos;
    this.closeClienteModal();
  }
  generarGrafico() {
    // Limpiar el nombre del cliente al inicio si el input está vacío
    if (!this.codigoClienteModal) {
      this.clienteNombre = ''; // Resetea el nombre del cliente
      console.error('El código del cliente es obligatorio para generar el gráfico.');
      this.messageService.add({
        severity: 'warn',
        summary: 'Advertencia',
        detail: 'Por favor ingrese un código de cliente.'
      });
      return; // Salir del método si no hay código del cliente
    }
    // Buscar el cliente por ID
    this.clienteService.buscarClientePorId(this.codigoClienteModal).subscribe(cliente => {
      // Asignar el nombre del cliente si existe
      this.clienteNombre = `${cliente.nombres} ${cliente.apellidos}`;
      // Proceder a generar el gráfico
      this.generarDatosGrafico();
    }, error => {
      console.error('Error al buscar cliente por ID:', error);
      this.clienteNombre = ''; // Limpiar el nombre si ocurre un error
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'No se pudo obtener los datos del cliente. Verifique el código ingresado.'
      });
    });
  }
  generarDatosGrafico() {
    if (this.codigoClienteModal && this.fechaDesde && this.fechaHasta) {
      const fechaDesde = new Date(this.fechaDesde);
      const fechaHasta = new Date(this.fechaHasta);
      console.log('Rango de fechas ingresadas:');
      console.log('Desde:', fechaDesde.toISOString().split('T')[0]);
      console.log('Hasta:', fechaHasta.toISOString().split('T')[0]);
      const datosPorMes = {};
      let mesActual = fechaDesde.getUTCMonth();
      let anioActual = fechaDesde.getUTCFullYear();
      const observables = [];
      while (new Date(anioActual, mesActual) <= fechaHasta) {
        const observable = this.ingresoFacturaService.buscarFacturasGrafico(this.codigoClienteModal, mesActual + 1, anioActual);
        observables.push(observable);
        if (mesActual === 11) {
          mesActual = 0;
          anioActual++;
        } else {
          mesActual++;
        }
      }
      (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)(observables).subscribe(results => {
        results.forEach((data, index) => {
          console.log(`Datos recibidos de la API para el mes ${index + 1}:`);
          console.log(data);
          if (data.detalles && data.detalles.length > 0) {
            data.detalles.forEach(detalle => {
              const fecha = new Date(detalle.fecha);
              const mes = fecha.getUTCMonth() + 1;
              const anio = fecha.getUTCFullYear();
              const mesAnio = this.formatearMesAnio(mes - 1, anio);
              console.log(`Fecha en formato UTC: ${fecha.toISOString()}`);
              console.log('Mes-Año:', mesAnio);
              if (fecha >= fechaDesde && fecha <= fechaHasta) {
                console.log(`Procesando: ${mesAnio} - ${detalle.cantQuintales}`);
                // Acumular valores asegurando precisión de dos decimales
                datosPorMes[mesAnio] = parseFloat(((datosPorMes[mesAnio] || 0) + (detalle.cantQuintales || 0)).toFixed(2));
              }
            });
          }
        });
        console.log('Datos agrupados por mes:');
        console.log(JSON.stringify(datosPorMes, null, 2));
        const sortedKeys = Object.keys(datosPorMes).sort((a, b) => {
          const [mesA, anioA] = a.split('-').map((val, index) => index === 0 ? this.meses.indexOf(val) : parseInt(val));
          const [mesB, anioB] = b.split('-').map((val, index) => index === 0 ? this.meses.indexOf(val) : parseInt(val));
          return new Date(anioA, mesA).getTime() - new Date(anioB, mesB).getTime();
        });
        const labels = sortedKeys;
        // Formatear los valores para el gráfico con dos decimales
        const values = sortedKeys.map(key => parseFloat(datosPorMes[key].toFixed(2)));
        this.graficoData = {
          labels: labels,
          datasets: [{
            label: 'Quintales Adquiridos',
            backgroundColor: '#2196F3',
            hoverBackgroundColor: '#1976D2',
            borderColor: '#1E88E5',
            borderWidth: 1,
            borderRadius: 8,
            // Barras redondeadas "cool"
            data: values,
            barPercentage: 0.6
          }]
        };
        this.graficoOptions = {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            duration: 1000,
            easing: 'easeOutQuart'
          },
          plugins: {
            legend: {
              display: false // Menos ruido, el label ya está en el dataset
            },
            tooltip: {
              callbacks: {
                label: tooltipItem => {
                  return ` Quintales: ${parseFloat(tooltipItem.raw).toFixed(2)} qq`;
                }
              },
              backgroundColor: 'rgba(33, 37, 41, 0.9)',
              titleFont: {
                size: 14,
                weight: 'bold'
              },
              bodyFont: {
                size: 13
              },
              padding: 12,
              cornerRadius: 8,
              displayColors: false
            }
          },
          scales: {
            x: {
              ticks: {
                color: '#64748b',
                font: {
                  size: 11,
                  weight: '600'
                }
              },
              grid: {
                display: false,
                drawBorder: false
              }
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: '#94a3b8',
                font: {
                  size: 11
                }
              },
              grid: {
                color: '#f1f5f9',
                drawBorder: false
              }
            }
          }
        };
      });
    } else {
      console.error('Faltan datos para generar el gráfico.');
      this.messageService.add({
        severity: 'warn',
        summary: 'Advertencia',
        detail: 'Por favor complete todos los campos requeridos.'
      });
    }
  }
  formatearMesAnio(mes, anio) {
    return `${this.meses[mes]}-${anio}`;
  }
  static {
    this.ɵfac = function ConsultaCacaoComponent_Factory(t) {
      return new (t || ConsultaCacaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_service_ingreso_factura_service__WEBPACK_IMPORTED_MODULE_0__.IngresoFacturaService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_8__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_service_cliente_service__WEBPACK_IMPORTED_MODULE_1__.ClienteService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ConsultaCacaoComponent,
      selectors: [["app-consulta-cacao"]],
      viewQuery: function ConsultaCacaoComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.clientesTable = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.searchInputId = _t.first);
        }
      },
      decls: 97,
      vars: 41,
      consts: [["clientesTable", ""], ["searchInput", ""], ["searchInputId", ""], [1, "card", "p-4", "border-none", "shadow-premium", "mb-4", "flex", "align-items-center", "justify-content-between", "bg-white", "overflow-hidden", "relative", 2, "border-radius", "1.25rem"], [1, "flex", "align-items-center", "relative", "z-1"], [1, "p-3", "border-round-xl", "bg-orange-50", "mr-4", "shadow-sm"], [1, "pi", "pi-search-plus", "text-orange-600", "text-3xl"], [1, "m-0", "font-bold", "text-900", "line-height-2", "tracking-tight"], [1, "m-0", "text-600", "font-medium", "opacity-70"], [1, "absolute", "-top-10", "-right-10", "bg-orange-50", "border-circle", "opacity-50", 2, "width", "250px", "height", "250px"], [1, "card", "border-none", "shadow-premium", "mb-4", 2, "border-radius", "1.25rem"], [3, "ngSubmit", "formGroup"], [1, "grid", "p-fluid", "align-items-end"], [1, "col-12", "md:col-3"], [1, "font-bold", "text-700", "mb-2", "block", "text-sm"], [1, "p-inputgroup"], [1, "p-inputgroup-addon", "bg-gray-50"], [1, "pi", "pi-user", "text-500"], ["type", "text", "pInputText", "", "formControlName", "codigoCliente", "placeholder", "ID Cliente", 1, "border-round-none"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-search", 1, "p-button-secondary", "border-round-right-lg", 3, "click"], [1, "pi", "pi-calendar"], ["formControlName", "fechaDesde", "placeholder", "Desde", "dateFormat", "dd/mm/yy", 3, "showButtonBar"], [1, "pi", "pi-calendar-plus"], ["formControlName", "fechaHasta", "placeholder", "Hasta", "dateFormat", "dd/mm/yy", 3, "showButtonBar"], [1, "col-12", "md:col-3", "flex", "gap-2"], ["pButton", "", "pRipple", "", "type", "submit", "label", "Consultar", "icon", "pi pi-filter", 1, "p-button-primary", "border-round-lg", "shadow-2", "flex-1"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-refresh", 1, "p-button-outlined", "p-button-secondary", "border-round-lg", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-chart-bar", "pTooltip", "Ver An\u00E1lisis Gr\u00E1fico", 1, "p-button-info", "border-round-lg", "shadow-2", 3, "click"], ["class", "mt-3 p-2 bg-primary-50 border-round-lg flex align-items-center", 4, "ngIf"], [1, "grid", "mt-2"], [1, "col-12", "lg:col-9"], [1, "card", "border-none", "shadow-premium", "relative", "p-4", 2, "border-radius", "1.25rem", 3, "ngClass"], [1, "flex", "align-items-center", "mb-3"], [1, "pi", "pi-list", "text-primary", "mr-2", "text-xl"], [1, "m-0", "font-bold", "text-900", 2, "font-size", "1rem"], ["styleClass", "p-datatable-sm p-datatable-gridlines", "responsiveLayout", "scroll", 3, "value", "rows", "rowHover", "paginator"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["class", "absolute top-0 left-0 w-full h-full border-round-xl flex align-items-center justify-content-center", "style", "background: rgba(255,255,255,0.7); z-index: 10;", 4, "ngIf"], [1, "col-12", "lg:col-3"], [1, "card", "border-none", "shadow-premium", "p-4", "flex", "flex-column", "align-items-center", "justify-content-center", "text-center", "bg-primary", 2, "border-radius", "1.25rem"], [1, "p-3", "bg-white-alpha-20", "border-round-circle", "mb-3", "shadow-2"], [1, "pi", "pi-box", "text-white", "text-3xl"], [1, "text-white-alpha-80", "font-medium", "uppercase", "tracking-wider", "mb-2", "text-sm"], [1, "text-white", "font-bold", "text-4xl", "mb-1"], [1, "text-white-alpha-70", "text-sm"], ["styleClass", "border-round-xl shadow-8", 3, "visibleChange", "visible", "modal", "closable"], [1, "p-1"], [3, "formGroup"], [1, "grid", "p-fluid", "align-items-end", "mb-4", "bg-gray-50", "p-3", "border-round-xl", "border-1", "border-200"], [1, "col-12", "md:col-2"], [1, "font-bold", "text-700", "mb-2", "block", "text-xs"], ["pInputText", "", "type", "text", "formControlName", "codigoClienteModal", "readonly", "", 1, "surface-0", 3, "ngModelChange", "ngModel"], ["dateFormat", "dd-mm-yy", "formControlName", "fechaDesde", "styleClass", "surface-0", 3, "ngModelChange", "ngModel"], ["dateFormat", "dd-mm-yy", "formControlName", "fechaHasta", "styleClass", "surface-0", 3, "ngModelChange", "ngModel"], [1, "col-12", "md:col-4", "flex", "gap-2"], ["pButton", "", "pRipple", "", "label", "Actualizar", "icon", "pi pi-sync", 1, "p-button-primary", "shadow-2", "border-round-lg", "flex-1", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", 1, "p-button-outlined", "p-button-secondary", "border-round-lg", 3, "click"], ["class", "text-center font-bold text-primary mb-4 border-bottom-1 surface-border pb-3", 4, "ngIf"], [1, "flex", "justify-content-center"], [1, "p-2", 2, "width", "100%", "height", "400px"], ["type", "bar", "styleClass", "w-full h-full", 3, "data", "options"], ["styleClass", "p-datatable-sm p-datatable-gridlines", "responsiveLayout", "scroll", 3, "onLazyLoad", "value", "lazy", "totalRecords", "rows", "paginator"], ["pTemplate", "caption"], ["class", "flex justify-content-center py-4", 4, "ngIf"], [1, "mt-3", "p-2", "bg-primary-50", "border-round-lg", "flex", "align-items-center"], [1, "pi", "pi-info-circle", "text-primary", "mr-2"], [1, "text-primary", "font-bold"], [1, "ml-2", "text-900", "font-medium"], [1, "text-center", 2, "width", "140px"], [1, "text-center"], [1, "text-right"], [4, "ngFor", "ngForOf"], [1, "text-center", "font-bold", "text-primary"], [1, "text-center", "text-700"], [1, "pi", "pi-calendar-minus", "mr-2", "text-500"], [1, "text-right", "font-bold", "text-900"], ["colspan", "3", 1, "text-center", "text-500", "py-5"], [1, "pi", "pi-search-minus", "text-4xl", "mb-3", "block"], [1, "absolute", "top-0", "left-0", "w-full", "h-full", "border-round-xl", "flex", "align-items-center", "justify-content-center", 2, "background", "rgba(255,255,255,0.7)", "z-index", "10"], ["styleClass", "w-3rem h-3rem"], [1, "flex", "align-items-center", "gap-3"], [1, "p-2", "border-round-lg", "bg-primary-50"], [1, "pi", "pi-chart-bar", "text-primary", "text-xl"], [1, "font-bold", "text-900", 2, "font-size", "1.05rem"], [1, "text-500", 2, "font-size", "0.8rem"], [1, "text-center", "font-bold", "text-primary", "mb-4", "border-bottom-1", "surface-border", "pb-3"], [1, "pi", "pi-user", "mr-2"], [1, "pi", "pi-users", "text-primary", "text-xl"], [1, "flex", "flex-column", "gap-2"], [1, "p-input-icon-left", "w-full"], [1, "pi", "pi-user-edit"], ["pInputText", "", "type", "text", "placeholder", "B\u00FAsqueda por nombre...", 1, "w-full", 3, "input"], [1, "pi", "pi-id-card"], ["pInputText", "", "type", "text", "placeholder", "B\u00FAsqueda por ID...", 1, "w-full", 3, "input", "ngModelChange", "ngModel"], [1, "text-center", 2, "width", "80px"], [2, "width", "120px"], [1, "cursor-pointer", "hover:surface-100", "transition-all", 3, "click"], [1, "text-700", "text-sm"], [1, "flex", "justify-content-center", "py-4"]],
      template: function ConsultaCacaoComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3)(2, "div", 4)(3, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div")(6, "h2", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Consulta por Cliente");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Historial detallado de compras de cacao por productor \u00B7 AgroFranco");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10)(12, "form", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ConsultaCacaoComponent_Template_form_ngSubmit_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.consultar());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12)(14, "div", 13)(15, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Cliente");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 15)(18, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConsultaCacaoComponent_Template_button_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.openClienteModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 13)(23, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Fecha Desde");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 15)(26, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "p-calendar", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 13)(30, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Fecha Hasta");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 15)(33, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "p-calendar", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConsultaCacaoComponent_Template_button_click_38_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.limpiarControlesPrincipales());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConsultaCacaoComponent_Template_button_click_39_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.showModalDialog());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, ConsultaCacaoComponent_div_40_Template, 6, 1, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 29)(42, "div", 30)(43, "div", 31)(44, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "h4", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Historial de Transacciones");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "p-table", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, ConsultaCacaoComponent_ng_template_49_Template, 7, 0, "ng-template", 36)(50, ConsultaCacaoComponent_ng_template_50_Template, 1, 1, "ng-template", 37)(51, ConsultaCacaoComponent_ng_template_51_Template, 4, 0, "ng-template", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, ConsultaCacaoComponent_div_52_Template, 2, 0, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 40)(54, "div", 41)(55, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "span", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Volumen Consolidado");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](61, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Quintales Totales");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "p-dialog", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("visibleChange", function ConsultaCacaoComponent_Template_p_dialog_visibleChange_64_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.ModalGrafico, $event) || (ctx.ModalGrafico = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](65, ConsultaCacaoComponent_ng_template_65_Template, 8, 0, "ng-template", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 48)(67, "form", 49)(68, "div", 50)(69, "div", 51)(70, "label", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "C\u00F3d. Cliente");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ConsultaCacaoComponent_Template_input_ngModelChange_72_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.codigoClienteModal, $event) || (ctx.codigoClienteModal = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 13)(74, "label", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Desde");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "p-calendar", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ConsultaCacaoComponent_Template_p_calendar_ngModelChange_76_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.fechaDesde, $event) || (ctx.fechaDesde = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 13)(78, "label", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Hasta");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "p-calendar", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ConsultaCacaoComponent_Template_p_calendar_ngModelChange_80_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.fechaHasta, $event) || (ctx.fechaHasta = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 56)(82, "button", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConsultaCacaoComponent_Template_button_click_82_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.generarGrafico());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "button", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConsultaCacaoComponent_Template_button_click_83_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.limpiarControles());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](84, ConsultaCacaoComponent_h5_84_Template, 3, 1, "h5", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 60)(86, "div", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "p-chart", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "p-dialog", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("visibleChange", function ConsultaCacaoComponent_Template_p_dialog_visibleChange_88_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.ClientesModal, $event) || (ctx.ClientesModal = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](89, ConsultaCacaoComponent_ng_template_89_Template, 8, 0, "ng-template", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 48)(91, "p-table", 63, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onLazyLoad", function ConsultaCacaoComponent_Template_p_table_onLazyLoad_91_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onLazyLoad($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](93, ConsultaCacaoComponent_ng_template_93_Template, 9, 1, "ng-template", 64)(94, ConsultaCacaoComponent_ng_template_94_Template, 7, 0, "ng-template", 36)(95, ConsultaCacaoComponent_ng_template_95_Template, 7, 3, "ng-template", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](96, ConsultaCacaoComponent_div_96_Template, 2, 0, "div", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.registerForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showButtonBar", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showButtonBar", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.clienteNombre);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](37, _c3, ctx.loadings));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.facturas)("rows", 10)("rowHover", true)("paginator", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loadings);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](61, 34, ctx.totalLibras, "1.2-2"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](39, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("visible", ctx.ModalGrafico);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("modal", true)("closable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.graficoForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.codigoClienteModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.fechaDesde);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.fechaHasta);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.clienteNombre);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.graficoData)("options", ctx.graficoOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](40, _c5));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("visible", ctx.ClientesModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("modal", true)("closable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.clientes)("lazy", true)("totalRecords", ctx.totalRecords)("rows", 5)("paginator", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, primeng_toast__WEBPACK_IMPORTED_MODULE_9__.Toast, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_dialog__WEBPACK_IMPORTED_MODULE_10__.Dialog, primeng_chart__WEBPACK_IMPORTED_MODULE_11__.UIChart, primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__.Tooltip, primeng_table__WEBPACK_IMPORTED_MODULE_13__.Table, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, primeng_calendar__WEBPACK_IMPORTED_MODULE_15__.Calendar, primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__.InputText, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_17__.ProgressSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
      styles: ["@charset \"UTF-8\";\n.narrow-input[_ngcontent-%COMP%] {\n  width: 110px; \n\n}\n\n\n\n.p-d-flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.p-ai-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.p-jc-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.p-field[_ngcontent-%COMP%] {\n  margin-right: 1rem; \n\n}\n\n.p-field[_ngcontent-%COMP%]:last-child {\n  margin-right: 0; \n\n}\n\n.p-calendar[_ngcontent-%COMP%] {\n  width: 100%; \n\n}\n\n.p-button[_ngcontent-%COMP%] {\n  margin-left: 1rem; \n\n}\n\n[_nghost-%COMP%]     .p-chart {\n  width: 100% !important;\n  height: 500px !important; \n\n  border: 1px solid #ccc; \n\n  border-radius: 8px; \n\n}\n\n.p-field[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.p-inputgroup[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  margin-left: auto;\n  justify-content: flex-start;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.cancel-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n\n.table-loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 33%; \n\n  left: 20%; \n\n  width: 60%; \n\n  height: 60%; \n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 20;\n}\n\n.loading-box[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #ccc;\n  padding: 1px;\n  border-radius: 10px;\n  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.spinner-overlay[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 70px;\n  z-index: 100;\n}\n\np-table.relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.table-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2); \n\n  transition: box-shadow 0.3s ease; \n\n}\n\n.table-row-hover[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.small-input-container[_ngcontent-%COMP%] {\n  flex-grow: 0;\n}\n\n.small-input[_ngcontent-%COMP%] {\n  width: 110px;\n}\n\n.small-button[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\n.relative-table[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.table-loading-overlays[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center; \n\n  padding-left: 300px;\n  padding-top: 350px;\n  background-color: rgba(255, 255, 255, 0.8);\n  z-index: 1;\n}\n\n.loading-boxs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.spinner-overlays[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n\n\n\n.narrow-datepicker[_ngcontent-%COMP%] {\n  width: 160px; \n\n  \n\n}\n@media screen and (max-width: 768px) {\n  .narrow-datepicker[_ngcontent-%COMP%] {\n    width: 140px;\n  }\n}\n@media screen and (max-width: 576px) {\n  .narrow-datepicker[_ngcontent-%COMP%] {\n    width: 120px;\n  }\n}\n\n\n\n.narrow-datepicker[_ngcontent-%COMP%]   .p-calendar[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.narrow-datepicker[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bHRhLWNhY2FvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLFlBQUEsRUFBQSx3Q0FBQTtBQUVKOztBQUVBLDBHQUFBO0FBQ0E7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBLEVBQUEsNkJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUEsRUFBQSxpREFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQSxFQUFBLGlFQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQSxFQUFBLGlEQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLHdCQUFBLEVBQUEsaUNBQUE7RUFDQSxzQkFBQSxFQUFBLG1DQUFBO0VBQ0Esa0JBQUEsRUFBQSw4QkFBQTtBQUNKOztBQUdFO0VBQ0Usa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLDJCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBLEVBQUEsMEJBQUE7RUFDQSxTQUFBLEVBQUEsK0JBQUE7RUFDQSxVQUFBLEVBQUEsbUJBQUE7RUFDQSxXQUFBLEVBQUEsb0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFESjs7QUFJQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksMkNBQUEsRUFBQSxxQkFBQTtFQUNBLGdDQUFBLEVBQUEsb0JBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7QUFESjs7QUFLQTtFQUNJLFlBQUE7QUFGSjs7QUFLQTtFQUNJLFlBQUE7QUFGSjs7QUFNQTtFQUNJLGNBQUE7QUFISjs7QUFPQTtFQUNJLGtCQUFBO0FBSko7O0FBT0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQSxFQUFBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsVUFBQTtBQUpKOztBQU9BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFKSjs7QUFPQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBSko7O0FBT0EsMkJBQUE7QUFDQTtFQUNJLFlBQUEsRUFBQSxtQkFBQTtFQUVBLHdCQUFBO0FBTEo7QUFNSTtFQUpKO0lBS1EsWUFBQTtFQUhOO0FBQ0Y7QUFLSTtFQVJKO0lBU1EsWUFBQTtFQUZOO0FBQ0Y7O0FBS0EsNkJBQUE7QUFDQTtFQUNJLFdBQUE7QUFGSjs7QUFLQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUZKIiwiZmlsZSI6ImNvbnN1bHRhLWNhY2FvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hcnJvdy1pbnB1dCB7XHJcbiAgICB3aWR0aDogMTEwcHg7IC8qIEFqdXN0YSBlbCB2YWxvciBzZWfDum4gc2VhIG5lY2VzYXJpbyAqL1xyXG59XHJcblxyXG5cclxuLyogQXNlZ8O6cmF0ZSBkZSBhw7FhZGlyIGVzdG9zIGVzdGlsb3MgZW4gdHUgYXJjaGl2byBDU1MgZ2xvYmFsIG8gZW4gdW4gYXJjaGl2byBDU1MgYXNvY2lhZG8gYWwgY29tcG9uZW50ZSAqL1xyXG4ucC1kLWZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnAtYWktY2VudGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wLWpjLWJldHdlZW4ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ucC1maWVsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07IC8qIEVzcGFjaW8gZW50cmUgbG9zIGNhbXBvcyAqL1xyXG59XHJcblxyXG4ucC1maWVsZDpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDsgLyogRWwgw7psdGltbyBjYW1wbyBubyBkZWJlIHRlbmVyIG1hcmdlbiBkZXJlY2hvICovXHJcbn1cclxuXHJcbi5wLWNhbGVuZGFyIHtcclxuICAgIHdpZHRoOiAxMDAlOyAvKiBBc2VndXJhIHF1ZSBlbCBjYW1wbyBkZSBmZWNoYSBvY3VwZSB0b2RvIGVsIGFuY2hvIGRpc3BvbmlibGUgKi9cclxufVxyXG5cclxuLnAtYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtOyAvKiBFc3BhY2lvIGVudHJlIGVsIGJvdMOzbiB5IGxvcyBjYW1wb3MgZGUgZmVjaGEgKi9cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5wLWNoYXJ0IHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDUwMHB4ICFpbXBvcnRhbnQ7IC8qIEFqdXN0YSBsYSBhbHR1cmEgY29tbyBkZXNlZXMgKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IC8qIEJvcmRlIG9wY2lvbmFsIHBhcmEgZWwgZ3LDoWZpY28gKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDsgLyogQm9yZGUgcmVkb25kZWFkbyBvcGNpb25hbCAqL1xyXG4gIH1cclxuXHJcblxyXG4gIC5wLWZpZWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnAtaW5wdXRncm91cCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IFxyXG59XHJcblxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmRpYWxvZy1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2FuY2VsLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxufVxyXG5cclxuXHJcbi50YWJsZS1sb2FkaW5nLW92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMyU7IC8qIE1vdmVyIG3DoXMgaGFjaWEgYWJham8gKi9cclxuICAgIGxlZnQ6IDIwJTsgLyogTW92ZXIgbcOhcyBoYWNpYSBsYSBkZXJlY2hhICovXHJcbiAgICB3aWR0aDogNjAlOyAvKiBBbmNobyBvcGNpb25hbCAqL1xyXG4gICAgaGVpZ2h0OiA2MCU7IC8qIEFsdHVyYSBvcGNpb25hbCAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDIwO1xyXG59XHJcblxyXG4ubG9hZGluZy1ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5zcGlubmVyLW92ZXJsYXkge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbnAtdGFibGUucmVsYXRpdmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udGFibGUtc2hhZG93IHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7IC8qIEVmZWN0byBkZSBzb21icmEgKi9cclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlOyAvKiBBbmltYWNpw7NuIHN1YXZlICovXHJcbn1cclxuXHJcbi50YWJsZS1yb3ctaG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuLnNtYWxsLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWdyb3c6IDA7XHJcbn1cclxuXHJcbi5zbWFsbC1pbnB1dCB7XHJcbiAgICB3aWR0aDogMTEwcHg7IFxyXG4gICAvLyBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTsgXHJcbn1cclxuXHJcbi5zbWFsbC1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAvL3BhZGRpbmc6IDAuM3JlbTsgXHJcbn1cclxuXHJcbi5yZWxhdGl2ZS10YWJsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG59XHJcblxyXG4udGFibGUtbG9hZGluZy1vdmVybGF5cyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQWxpbmVhIGVsIHNwaW5uZXIgaGFjaWEgbGEgZGVyZWNoYSAqL1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMDBweDsgXHJcbiAgICBwYWRkaW5nLXRvcDogMzUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7IFxyXG4gICAgei1pbmRleDogMTsgXHJcbn1cclxuXHJcbi5sb2FkaW5nLWJveHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNwaW5uZXItb3ZlcmxheXMge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi8qIEVuIHR1IGFyY2hpdm8gQ1NTL1NDU1MgKi9cclxuLm5hcnJvdy1kYXRlcGlja2VyIHtcclxuICAgIHdpZHRoOiAxNjBweDsgLyogQW5jaG8gcmVkdWNpZG8gKi9cclxuICAgIFxyXG4gICAgLyogRXN0aWxvcyByZXNwb25zaXZvcyAqL1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBBanVzdGFyIGVsIGlucHV0IGludGVybm8gKi9cclxuLm5hcnJvdy1kYXRlcGlja2VyIC5wLWNhbGVuZGFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubmFycm93LWRhdGVwaWNrZXIgLnAtaW5wdXR0ZXh0IHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL0FkbWluaXN0cmFkb3IvY29uc3VsdGEtY2FjYW8vY29uc3VsdGEtY2FjYW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksWUFBQSxFQUFBLHdDQUFBO0FBRUo7O0FBRUEsMEdBQUE7QUFDQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUEsRUFBQSw2QkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQSxFQUFBLGlEQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBLEVBQUEsaUVBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBLEVBQUEsaURBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0VBQ0Esd0JBQUEsRUFBQSxpQ0FBQTtFQUNBLHNCQUFBLEVBQUEsbUNBQUE7RUFDQSxrQkFBQSxFQUFBLDhCQUFBO0FBQ0o7O0FBR0U7RUFDRSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EsMkJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQUo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFFBQUEsRUFBQSwwQkFBQTtFQUNBLFNBQUEsRUFBQSwrQkFBQTtFQUNBLFVBQUEsRUFBQSxtQkFBQTtFQUNBLFdBQUEsRUFBQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlBO0VBQ0ksdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0FBREo7O0FBSUE7RUFDSSwyQ0FBQSxFQUFBLHFCQUFBO0VBQ0EsZ0NBQUEsRUFBQSxvQkFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtBQURKOztBQUtBO0VBQ0ksWUFBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtBQUZKOztBQU1BO0VBQ0ksY0FBQTtBQUhKOztBQU9BO0VBQ0ksa0JBQUE7QUFKSjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBLEVBQUEsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxVQUFBO0FBSko7O0FBT0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUpKOztBQU9BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFKSjs7QUFPQSwyQkFBQTtBQUNBO0VBQ0ksWUFBQSxFQUFBLG1CQUFBO0VBRUEsd0JBQUE7QUFMSjtBQU1JO0VBSko7SUFLUSxZQUFBO0VBSE47QUFDRjtBQUtJO0VBUko7SUFTUSxZQUFBO0VBRk47QUFDRjs7QUFLQSw2QkFBQTtBQUNBO0VBQ0ksV0FBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBRko7QUFDQSw0dk5BQTR2TiIsInNvdXJjZXNDb250ZW50IjpbIi5uYXJyb3ctaW5wdXQge1xyXG4gICAgd2lkdGg6IDExMHB4OyAvKiBBanVzdGEgZWwgdmFsb3Igc2Vnw4PCum4gc2VhIG5lY2VzYXJpbyAqL1xyXG59XHJcblxyXG5cclxuLyogQXNlZ8ODwrpyYXRlIGRlIGHDg8KxYWRpciBlc3RvcyBlc3RpbG9zIGVuIHR1IGFyY2hpdm8gQ1NTIGdsb2JhbCBvIGVuIHVuIGFyY2hpdm8gQ1NTIGFzb2NpYWRvIGFsIGNvbXBvbmVudGUgKi9cclxuLnAtZC1mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5wLWFpLWNlbnRlciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucC1qYy1iZXR3ZWVuIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnAtZmllbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtOyAvKiBFc3BhY2lvIGVudHJlIGxvcyBjYW1wb3MgKi9cclxufVxyXG5cclxuLnAtZmllbGQ6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7IC8qIEVsIMODwrpsdGltbyBjYW1wbyBubyBkZWJlIHRlbmVyIG1hcmdlbiBkZXJlY2hvICovXHJcbn1cclxuXHJcbi5wLWNhbGVuZGFyIHtcclxuICAgIHdpZHRoOiAxMDAlOyAvKiBBc2VndXJhIHF1ZSBlbCBjYW1wbyBkZSBmZWNoYSBvY3VwZSB0b2RvIGVsIGFuY2hvIGRpc3BvbmlibGUgKi9cclxufVxyXG5cclxuLnAtYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtOyAvKiBFc3BhY2lvIGVudHJlIGVsIGJvdMODwrNuIHkgbG9zIGNhbXBvcyBkZSBmZWNoYSAqL1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnAtY2hhcnQge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNTAwcHggIWltcG9ydGFudDsgLyogQWp1c3RhIGxhIGFsdHVyYSBjb21vIGRlc2VlcyAqL1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgLyogQm9yZGUgb3BjaW9uYWwgcGFyYSBlbCBncsODwqFmaWNvICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7IC8qIEJvcmRlIHJlZG9uZGVhZG8gb3BjaW9uYWwgKi9cclxuICB9XHJcblxyXG5cclxuICAucC1maWVsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5wLWlucHV0Z3JvdXAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyBcclxufVxyXG5cclxuLmJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5kaWFsb2ctaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhbmNlbC1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4udGFibGUtbG9hZGluZy1vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzMlOyAvKiBNb3ZlciBtw4PCoXMgaGFjaWEgYWJham8gKi9cclxuICAgIGxlZnQ6IDIwJTsgLyogTW92ZXIgbcODwqFzIGhhY2lhIGxhIGRlcmVjaGEgKi9cclxuICAgIHdpZHRoOiA2MCU7IC8qIEFuY2hvIG9wY2lvbmFsICovXHJcbiAgICBoZWlnaHQ6IDYwJTsgLyogQWx0dXJhIG9wY2lvbmFsICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogMjA7XHJcbn1cclxuXHJcbi5sb2FkaW5nLWJveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLnNwaW5uZXItb3ZlcmxheSB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxucC10YWJsZS5yZWxhdGl2ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50YWJsZS1zaGFkb3cge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgLyogRWZlY3RvIGRlIHNvbWJyYSAqL1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2U7IC8qIEFuaW1hY2nDg8KzbiBzdWF2ZSAqL1xyXG59XHJcblxyXG4udGFibGUtcm93LWhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi5zbWFsbC1pbnB1dC1jb250YWluZXIge1xyXG4gICAgZmxleC1ncm93OiAwO1xyXG59XHJcblxyXG4uc21hbGwtaW5wdXQge1xyXG4gICAgd2lkdGg6IDExMHB4OyBcclxuICAgLy8gcGFkZGluZzogMC4yNXJlbSAwLjVyZW07IFxyXG59XHJcblxyXG4uc21hbGwtYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgLy9wYWRkaW5nOiAwLjNyZW07IFxyXG59XHJcblxyXG4ucmVsYXRpdmUtdGFibGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxufVxyXG5cclxuLnRhYmxlLWxvYWRpbmctb3ZlcmxheXMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIEFsaW5lYSBlbCBzcGlubmVyIGhhY2lhIGxhIGRlcmVjaGEgKi9cclxuICAgIHBhZGRpbmctbGVmdDogMzAwcHg7IFxyXG4gICAgcGFkZGluZy10b3A6IDM1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpOyBcclxuICAgIHotaW5kZXg6IDE7IFxyXG59XHJcblxyXG4ubG9hZGluZy1ib3hzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zcGlubmVyLW92ZXJsYXlzIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4vKiBFbiB0dSBhcmNoaXZvIENTUy9TQ1NTICovXHJcbi5uYXJyb3ctZGF0ZXBpY2tlciB7XHJcbiAgICB3aWR0aDogMTYwcHg7IC8qIEFuY2hvIHJlZHVjaWRvICovXHJcbiAgICBcclxuICAgIC8qIEVzdGlsb3MgcmVzcG9uc2l2b3MgKi9cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLyogQWp1c3RhciBlbCBpbnB1dCBpbnRlcm5vICovXHJcbi5uYXJyb3ctZGF0ZXBpY2tlciAucC1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm5hcnJvdy1kYXRlcGlja2VyIC5wLWlucHV0dGV4dCB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1865:
/*!**********************************************************************************!*\
  !*** ./src/app/demo/components/Administrador/control-ra/control-ra.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlRaComponent: () => (/* binding */ ControlRaComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var src_app_demo_service_control_ra_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/control-ra.service */ 44874);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tabview */ 634);
















const _c0 = () => ({
  width: "350px"
});
const _c1 = () => ({
  width: "25vw"
});
const _c2 = () => ({
  "width": "80vw",
  "max-width": "600px",
  "min-width": "300px"
});
const _c3 = () => ({
  "960px": "90vw",
  "640px": "95vw"
});
const _c4 = (a0, a1) => ({
  "status-label": true,
  "status-abierto": a0,
  "status-cerrado": a1
});
function ControlRaComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 66)(1, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ControlRaComponent_ng_template_8_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.openRegistroTnDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ControlRaComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Periodo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Tn Asignada");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "QQ Asignados");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "QQ Enviados");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "QQ Restantes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ControlRaComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 36)(18, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td", 36)(21, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ControlRaComponent_ng_template_10_Template_button_click_21_listener() {
      const control_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.openEditTnDialog(control_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ControlRaComponent_ng_template_10_Template_button_click_22_listener() {
      const control_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.confirmDeactivate(control_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const control_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 10, control_r4.fechaInicio, "MMMM yyyy"), " / ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 13, control_r4.fechaFin, "MMMM yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 16, control_r4.tnAsignada, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 19, control_r4.qqAsignados, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](13, 22, control_r4.quintalesEnviados, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](16, 25, control_r4.qqRestantes, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](28, _c4, control_r4.estado === true, control_r4.estado === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", control_r4.estado ? "Activo" : "Inactivo", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !control_r4.estado);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !control_r4.estado);
  }
}
function ControlRaComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No users found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ControlRaComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading users data. Please wait.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ControlRaComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 66)(1, "div", 72)(2, "div", 40)(3, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ControlRaComponent_ng_template_15_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.openContratoDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ControlRaComponent_ng_template_15_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cargarContratosRegistrados());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 75)(6, "div", 40)(7, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 22)(10, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ControlRaComponent_ng_template_15_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.currentLote, $event) || (ctx_r1.currentLote = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function ControlRaComponent_ng_template_15_Template_input_input_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.filtrarContratosPorLote(ctx_r1.getInputValue($event)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Lote");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.currentLote);
  }
}
function ControlRaComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "QQ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Contrato");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Lote");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Placa");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Observacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ControlRaComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td", 78)(15, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 80)(18, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ControlRaComponent_ng_template_17_Template_button_click_18_listener() {
      const contrato_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.openContratoDialog(contrato_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ControlRaComponent_ng_template_17_Template_button_click_19_listener() {
      const contrato_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.confirmDeleteContrato(contrato_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ControlRaComponent_ng_template_17_Template_button_click_20_listener() {
      const contrato_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.openContratoDetailsDialog(contrato_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const contrato_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](contrato_r7.fecha);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 8, contrato_r7.quintales, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](contrato_r7.contrato);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](contrato_r7.lote);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](contrato_r7.placa);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](contrato_r7.observacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](11, _c4, contrato_r7.estado === true, contrato_r7.estado === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", contrato_r7.estado ? "Pagado" : "Sin Pagar", " ");
  }
}
function ControlRaComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No existen registros.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ControlRaComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading users data. Please wait.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ControlRaComponent_div_49_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Solo se permiten n\u00FAmeros y un punto decimal.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ControlRaComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ControlRaComponent_div_49_small_1_Template, 2, 0, "small", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r1.registroToneladaForm.get("tnAsignada")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["pattern"]);
  }
}
function ControlRaComponent_small_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Equivale a ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r1.kilogramosToQuintales, "1.2-2"), " quintales (qq)");
  }
}
function ControlRaComponent_div_77_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Solo se permiten n\u00FAmeros y un punto decimal.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ControlRaComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ControlRaComponent_div_77_small_1_Template, 2, 0, "small", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r1.newContratoForm.get("kilogramos")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["pattern"]);
  }
}
function ControlRaComponent_button_125_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "button", 86);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("label", ctx_r1.editing ? "Guardar Cambios" : "Registrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.newContratoForm.invalid);
  }
}
class ControlRaComponent {
  constructor(messageService, fb, controlraService, confirmationService) {
    this.messageService = messageService;
    this.fb = fb;
    this.controlraService = controlraService;
    this.confirmationService = confirmationService;
    this.dialogRegistroTonelada = false;
    this.controles = [];
    this.isEditMode = false;
    this.controlRASeleccionado = null;
    this.dialogContrato = false;
    this.contratos = [];
    this.contratosFiltrados = [];
    //para editar
    this.selectedContrato = null;
    this.editing = false;
    this.isDetail = false;
    this.currentLote = '';
    this.isSaving = false;
    //Para convertir de quilogramos a Kg
    this.kilogramosToQuintales = 0;
    this.estadoOptions = [{
      label: 'No Pagado',
      value: false
    }, {
      label: 'Pagado',
      value: true
    }];
    this.registroToneladaForm = this.fb.group({
      tnAsignada: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^\\d+(\\.\\d{1,2})?$')]],
      fechaInicio: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      fechaFin: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
    this.newContratoForm = this.fb.group({
      fecha: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      kilogramos: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^\\d+(\\.\\d{1,2})?$')]],
      contrato: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      lote: [null],
      observacion: [null],
      estado: [null],
      placa: [null],
      fechaPago: [null]
    });
  }
  ngOnInit() {
    this.cargarControlesRa();
    this.cargarContratosRegistrados();
  }
  onKilogramosChange() {
    const kilogramos = this.newContratoForm.get('kilogramos').value;
    this.kilogramosToQuintales = kilogramos ? Math.floor(kilogramos / 45.36 * 100) / 100 + (Math.floor(kilogramos / 45.36 * 1000 % 10) > 5 ? 0.01 : 0) : 0;
  }
  confirmDeactivate(control) {
    this.confirmationService.confirm({
      key: 'confirm',
      message: '¿Deseas dar por finalizado este período?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deactivateControlRA(control);
      },
      reject: () => {
        console.log('Cambio de estado rechazado');
      },
      acceptLabel: 'Sí',
      rejectLabel: 'No'
    });
  }
  deactivateControlRA(control) {
    // Cambia el estado en el objeto
    const id = control.id ?? 0;
    this.controlraService.actualizarEstado(id).subscribe(response => {
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Estado cambiado a inactivo de forma exitosa'
      });
      this.cargarControlesRa();
    }, error => {
      const errorMessage = error.error.message || 'Ocurrió un error al cambiar el estado';
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: errorMessage
      });
    });
  }
  confirmDeleteContrato(contrato) {
    this.confirmationService.confirm({
      key: 'confirm',
      message: `¿Estás seguro de que deseas eliminar el contrato con lote ${contrato.lote}?`,
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      rejectLabel: 'No',
      accept: () => {
        this.eliminarContrato(contrato);
      }
    });
  }
  eliminarContrato(contrato) {
    this.controlraService.eliminarContrato(contrato.id).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Contrato eliminado correctamente'
      });
      this.cargarContratosRegistrados();
      this.cargarControlesRa();
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Erro al eliminar el contrato'
      });
    });
  }
  closeRegistroTnDialog() {
    this.dialogRegistroTonelada = false;
    this.registroToneladaForm.reset();
  }
  openRegistroTnDialog() {
    this.registroToneladaForm.patchValue({
      fechaInicio: new Date(),
      fechaFin: new Date()
    });
    this.dialogRegistroTonelada = true;
  }
  openEditTnDialog(controlRA) {
    this.isEditMode = true;
    this.controlRASeleccionado = controlRA;
    const fechaI = controlRA.fechaInicio ? new Date(controlRA.fechaInicio + 'T00:00:00') : null;
    const fechaF = controlRA.fechaFin ? new Date(controlRA.fechaFin + 'T00:00:00') : null;
    this.registroToneladaForm.patchValue({
      fechaInicio: fechaI,
      fechaFin: fechaF,
      tnAsignada: controlRA.tnAsignada
    });
    this.dialogRegistroTonelada = true;
  }
  registrarTnAsignadas() {
    const formValue = this.registroToneladaForm.value;
    const fechaDesde = new Date(formValue.fechaInicio);
    const fechaHasta = new Date(formValue.fechaFin);
    const desdeUTC = this.convertToUTC(fechaDesde);
    const hastaUTC = this.convertToUTC(fechaHasta);
    const controlra = {
      id: 0,
      fechaInicio: desdeUTC.toISOString(),
      fechaFin: hastaUTC.toISOString(),
      tnAsignada: parseFloat(formValue.tnAsignada)
    };
    if (this.isEditMode && this.controlRASeleccionado && this.controlRASeleccionado.id !== undefined) {
      const codigo = this.controlRASeleccionado.id;
      // Aquí iría el código para actualizar
      this.controlraService.actualizarTnAsignada(codigo, controlra).subscribe(response => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Actualización de asignación de Tn realizada de forma exitosa'
        });
        this.closeRegistroTnDialog();
        this.cargarControlesRa();
      }, error => {
        const errorMessage = error.error.message || 'Ocurrió un error en la actualización';
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: errorMessage
        });
      });
    } else {
      // Registrar nuevo ControlRA
      console.log('Estas en registro');
      this.controlraService.registrarTnAsignada(controlra).subscribe(response => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Registro de asignación de Tn realizada de forma exitosa'
        });
        this.closeRegistroTnDialog();
        this.cargarControlesRa();
      }, error => {
        const errorMessage = error.error.message || 'Ocurrió un error en el registro';
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: errorMessage
        });
      });
    }
  }
  convertToUTC(fechaLocal) {
    return new Date(Date.UTC(fechaLocal.getFullYear(), fechaLocal.getMonth(), fechaLocal.getDate(), fechaLocal.getHours(), fechaLocal.getMinutes(), fechaLocal.getSeconds()));
  }
  cargarControlesRa() {
    this.controlraService.obtenerControles().subscribe(data => {
      this.controles = data;
    }, error => {
      console.error('Error al cargar los datos', error);
    });
  }
  saveContrato() {
    const contrato = this.newContratoForm.value;
    if (contrato.kilogramos != null && !isNaN(contrato.kilogramos)) {
      let quintalesExactos = contrato.kilogramos / 45.36;
      let truncado = Math.floor(quintalesExactos * 100) / 100;
      let tercerDecimal = Math.floor(quintalesExactos * 1000 % 10);
      contrato.quintales = tercerDecimal > 5 ? truncado + 0.01 : truncado;
    } else {
      contrato.quintales = 0;
    }
    this.isSaving = true;
    if (this.editing && this.selectedContrato) {
      // Actualizamos contrato
      contrato.id = this.selectedContrato.id;
      this.controlraService.registrarContrato(contrato).subscribe(response => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Contrato actualizado exitosamente'
        });
        this.closeContratoDialog();
        this.cargarContratosRegistrados();
        this.cargarControlesRa();
        this.filtrarContratosPorLote(this.currentLote);
      }, error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error al actualizar el contrato'
        });
      },
      //poner segundos para desbailitar el boton
      () => {
        setTimeout(() => {
          this.isSaving = false;
        }, 3000);
      });
    } else {
      // Registra nuevo contrato
      this.controlraService.registrarContrato(contrato).subscribe(response => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Contrato registrado correctamente'
        });
        this.closeContratoDialog();
        this.cargarContratosRegistrados();
        this.cargarControlesRa();
      }, error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error al registrar el contrato'
        });
      }, () => {
        setTimeout(() => {
          this.isSaving = false;
        }, 3000);
      });
    }
  }
  closeContratoDialog() {
    this.dialogContrato = false;
    this.newContratoForm.reset();
    this.inicializarFecha();
    this.selectedContrato = null;
    this.editing = false;
  }
  openContratoDetailsDialog(contrato) {
    this.dialogContrato = true;
    this.editing = false;
    this.isDetail = true;
    console.log('Estado al abrir el detalle:', {
      editing: this.editing,
      isDetail: this.isDetail
    });
    // Asigna los valores del contrato al formulario
    const fechaContrato = contrato.fecha ? new Date(contrato.fecha + 'T00:00:00') : null;
    const fechaPago = contrato.fechaPago ? new Date(contrato.fechaPago + 'T00:00:00') : null;
    this.newContratoForm.patchValue({
      ...contrato,
      fecha: fechaContrato,
      fechaPago: fechaPago
    });
  }
  inicializarFecha() {
    this.newContratoForm.patchValue({
      fecha: new Date()
    });
  }
  openContratoDialog(contrato) {
    this.inicializarFecha();
    this.dialogContrato = true;
    if (contrato) {
      this.editing = true;
      this.isDetail = false;
      this.selectedContrato = contrato;
      const kilogramos = contrato.quintales ? Math.floor(contrato.quintales * 45.36) : 0;
      const fechaContrato = contrato.fecha ? new Date(contrato.fecha + 'T00:00:00') : null;
      const fechaPago = contrato.fechaPago ? new Date(contrato.fechaPago + 'T00:00:00') : null;
      this.newContratoForm.patchValue({
        ...contrato,
        kilogramos: kilogramos,
        fecha: fechaContrato,
        fechaPago: fechaPago
      });
    } else {
      this.editing = false;
      this.isDetail = false;
      this.selectedContrato = null;
      this.newContratoForm.reset();
      this.inicializarFecha();
    }
  }
  cargarContratosRegistrados() {
    this.currentLote = '';
    this.controlraService.obtenerContratos().subscribe(data => {
      this.contratos = data;
      this.contratosFiltrados = data;
    }, error => {
      console.error('Error al cargar los datos', error);
    });
  }
  getInputValue(event) {
    const target = event.target;
    return target ? target.value : '';
  }
  filtrarContratosPorLote(lote) {
    this.currentLote = lote;
    if (lote.trim() === '') {
      this.contratosFiltrados = this.contratos;
    } else {
      this.controlraService.obtenerContratosPorLote(lote).subscribe(data => {
        this.contratosFiltrados = data;
      }, error => {
        console.error('Error al filtrar los datos', error);
      });
    }
  }
  static {
    this.ɵfac = function ControlRaComponent_Factory(t) {
      return new (t || ControlRaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_demo_service_control_ra_service__WEBPACK_IMPORTED_MODULE_0__.ControlRaService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.ConfirmationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ControlRaComponent,
      selectors: [["app-control-ra"]],
      decls: 126,
      vars: 42,
      consts: [["header", "Confirmaci\u00F3n", "key", "confirm", "icon", "pi pi-exclamation-triangle", "message", "Are you sure you want to proceed?", "acceptButtonStyleClass", "p-button-text", "rejectButtonStyleClass", "p-button-text"], [1, "card"], ["orientation", "left"], ["header", "Inicio RA", 1, "line-height-3", "m-0"], ["responsiveLayout", "scroll", 3, "value", "paginator", "rows"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "loadingbody"], ["header", "Contratos", 1, "line-height-3", "m-0"], ["responsiveLayout", "scroll", "styleClass", "p-datatable-gridlines", "scrollDirection", "both", "scrollHeight", "500px", "styleClass", "mt-3", 3, "value", "rows", "scrollable"], [3, "visibleChange", "visible", "modal", "closable"], [3, "formGroup"], [1, "mt-3", 2, "text-align", "center"], [1, "dialog-header", "cancel-button"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-times", 1, "p-button-danger", "mr-2", "small-button", 3, "click"], [1, "grid", "p-fluid"], [1, "field", "col-12"], [1, "p-inputgroup", "mt-4"], [1, "p-inputgroup-addon"], [1, "pi", "pi-calendar"], [1, "p-float-label"], ["id", "fechaInicio", "formControlName", "fechaInicio", "dateFormat", "dd/mm/yy", 3, "showIcon", "appendTo"], ["for", "fechaInicio"], ["id", "fechaFin", "formControlName", "fechaFin", "dateFormat", "dd/mm/yy", 3, "showIcon", "appendTo"], ["for", "fechaFin"], [1, "pi", "pi-table"], ["type", "text", "pInputText", "", "formControlName", "tnAsignada"], ["for", "tnAsignada"], ["class", "p-error", 4, "ngIf"], [1, "flex", "flex-column", 2, "height", "100%"], [1, "flex", "justify-content-end", "mt-auto"], ["pButton", "", "type", "button", "icon", "pi pi-save", 3, "click", "label", "disabled"], [3, "visibleChange", "visible", "modal", "closable", "breakpoints"], [3, "ngSubmit", "formGroup"], [2, "text-align", "center"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-times", 1, "p-button-danger", "mr-2", 3, "click"], [1, "grid", "p-fluid", "mt-3"], [1, "field", "col-12", "md:col-6"], [1, "p-inputgroup"], ["id", "fecha", "formControlName", "fecha", "dateFormat", "dd/mm/yy", 3, "showIcon", "appendTo"], ["for", "fecha"], [1, "pi", "pi-hourglass"], ["type", "text", "pInputText", "", "formControlName", "kilogramos", 3, "ngModelChange"], ["for", "kilogramos"], [4, "ngIf"], [1, "field", "col-12", "md:col-4"], [1, "pi", "pi-file-import"], ["type", "text", "pInputText", "", "formControlName", "contrato"], ["for", "contrato"], [1, "pi", "pi-file"], ["type", "text", "pInputText", "", "formControlName", "lote"], ["for", "lote"], [1, "col-12", "md:col-4"], ["formControlName", "estado", 3, "options"], ["for", "estado"], [1, "field", "col-12", "md:col-13"], [1, "pi", "pi-file-edit"], ["type", "text", "pInputText", "", "formControlName", "observacion"], ["for", "observacion"], ["type", "text", "pInputText", "", "formControlName", "placa"], ["for", "placa"], ["id", "fechaPago", "formControlName", "fechaPago", "dateFormat", "dd/mm/yy", 3, "showIcon", "appendTo"], ["for", "fechaPago"], ["pButton", "", "icon", "pi pi-save", "type", "submit", 3, "label", "disabled", 4, "ngIf"], [1, "flex", "justify-content-between", "flex-column", "sm:flex-row"], ["pButton", "", "pRipple", "", "label", "Registro Tn", "icon", "pi pi-plus", 1, "mr-2", "mb-2", 3, "click"], [3, "ngClass"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-pencil", "pTooltip", "Editar Datos", "tooltipPosition", "top", 1, "p-button-success", "mb-2", "mr-2", 3, "click", "disabled"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-times", "pTooltip", "Finalizar Per\u00EDodo", "tooltipPosition", "top", 1, "p-button-danger", "mb-2", 3, "click", "disabled"], ["colspan", "6"], [1, "col-12", "md:col-5"], ["pButton", "", "pRipple", "", "label", "Nuevo Registro", "icon", "pi pi-plus", 1, "mr-2", "mb-2", 3, "click"], ["pButton", "", "pRipple", "", "label", "Resetear", "icon", "pi pi-sync", 1, "p-button-warning", "mr-2", "mb-2", 3, "click"], [1, "col-12", "md:col-3", 2, "margin-left", "auto"], ["type", "text", "pInputText", "", 3, "ngModelChange", "input", "ngModel"], [2, "text-align", "center", "width", "100px"], [2, "text-align", "center", "width", "90px"], [1, "sombreado-lote", 2, "text-align", "center", "width", "85px"], [2, "text-align", "center", "width", "160px"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-pencil", 1, "p-button-success", "mb-2", "mr-2", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-trash", 1, "p-button-danger", "mb-2", "mr-2", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-eye", 1, "p-button-help", "mr-2", "mb-2", 3, "click"], ["colspan", "8"], [1, "p-error"], ["pButton", "", "icon", "pi pi-save", "type", "submit", 3, "label", "disabled"]],
      template: function ControlRaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast")(1, "p-confirmDialog", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Control RA");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-tabView", 2)(6, "p-tabPanel", 3)(7, "p-table", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ControlRaComponent_ng_template_8_Template, 2, 0, "ng-template", 5)(9, ControlRaComponent_ng_template_9_Template, 15, 0, "ng-template", 6)(10, ControlRaComponent_ng_template_10_Template, 23, 31, "ng-template", 7)(11, ControlRaComponent_ng_template_11_Template, 3, 0, "ng-template", 8)(12, ControlRaComponent_ng_template_12_Template, 3, 0, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p-tabPanel", 10)(14, "p-table", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ControlRaComponent_ng_template_15_Template, 13, 1, "ng-template", 5)(16, ControlRaComponent_ng_template_16_Template, 17, 0, "ng-template", 6)(17, ControlRaComponent_ng_template_17_Template, 21, 14, "ng-template", 7)(18, ControlRaComponent_ng_template_18_Template, 3, 0, "ng-template", 8)(19, ControlRaComponent_ng_template_19_Template, 3, 0, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p-dialog", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("visibleChange", function ControlRaComponent_Template_p_dialog_visibleChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.dialogRegistroTonelada, $event) || (ctx.dialogRegistroTonelada = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "form", 13)(22, "h3", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 15)(25, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ControlRaComponent_Template_button_click_25_listener() {
            return ctx.closeRegistroTnDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 17)(27, "div", 18)(28, "div", 19)(29, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "p-calendar", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Periodo desde");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 19)(36, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "p-calendar", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Periodo hasta");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 19)(43, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Tn Asignada");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, ControlRaComponent_div_49_Template, 2, 1, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 31)(51, "div", 32)(52, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ControlRaComponent_Template_button_click_52_listener() {
            return ctx.registrarTnAsignadas();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p-dialog", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("visibleChange", function ControlRaComponent_Template_p_dialog_visibleChange_53_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.dialogContrato, $event) || (ctx.dialogContrato = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "form", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ControlRaComponent_Template_form_ngSubmit_54_listener() {
            return ctx.saveContrato();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "h3", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 15)(58, "button", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ControlRaComponent_Template_button_click_58_listener() {
            return ctx.closeContratoDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 38)(60, "div", 39)(61, "div", 40)(62, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "p-calendar", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "label", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Fecha");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 39)(69, "div", 40)(70, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span", 22)(73, "input", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ControlRaComponent_Template_input_ngModelChange_73_listener() {
            return ctx.onKilogramosChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "label", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Kilogramos(Kg)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, ControlRaComponent_small_76_Template, 3, 4, "small", 46)(77, ControlRaComponent_div_77_Template, 2, 1, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 47)(79, "div", 40)(80, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "i", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "input", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "label", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Contrato");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 47)(87, "div", 40)(88, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "i", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "input", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "label", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Lote");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 54)(95, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "p-dropdown", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "label", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Estado");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 57)(100, "div", 40)(101, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "i", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "input", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "label", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Observaci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 39)(108, "div", 40)(109, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "i", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "input", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "label", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Placa");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 39)(116, "div", 40)(117, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "p-calendar", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "label", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Fecha Pago");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 31)(124, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](125, ControlRaComponent_button_125_Template, 1, 2, "button", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          let tmp_17_0;
          let tmp_30_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](38, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.controles)("paginator", true)("rows", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.contratosFiltrados)("rows", 8)("scrollable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](39, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("visible", ctx.dialogRegistroTonelada);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("modal", true)("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registroToneladaForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isEditMode ? "Editar Asignaci\u00F3n de Tn" : "Registro de Tn - Nuevo Periodo", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showIcon", true)("appendTo", "body");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showIcon", true)("appendTo", "body");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_17_0 = ctx.registroToneladaForm.get("tnAsignada")) == null ? null : tmp_17_0.invalid) && (((tmp_17_0 = ctx.registroToneladaForm.get("tnAsignada")) == null ? null : tmp_17_0.dirty) || ((tmp_17_0 = ctx.registroToneladaForm.get("tnAsignada")) == null ? null : tmp_17_0.touched)));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx.isEditMode ? "Actualizar" : "Registrar")("disabled", ctx.registroToneladaForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](40, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("visible", ctx.dialogContrato);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("modal", true)("closable", false)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](41, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.newContratoForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.editing ? "Editar Contrato" : ctx.isDetail ? "Detalles del Contrato" : "Registro de Contratos", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showIcon", true)("appendTo", "body");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.kilogramosToQuintales);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_30_0 = ctx.newContratoForm.get("kilogramos")) == null ? null : tmp_30_0.invalid) && (((tmp_30_0 = ctx.newContratoForm.get("kilogramos")) == null ? null : tmp_30_0.dirty) || ((tmp_30_0 = ctx.newContratoForm.get("kilogramos")) == null ? null : tmp_30_0.touched)));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.estadoOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showIcon", true)("appendTo", "body");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isDetail);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, primeng_toast__WEBPACK_IMPORTED_MODULE_5__.Toast, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, primeng_dialog__WEBPACK_IMPORTED_MODULE_6__.Dialog, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.Tooltip, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, primeng_calendar__WEBPACK_IMPORTED_MODULE_10__.Calendar, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.Dropdown, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_13__.ConfirmDialog, primeng_tabview__WEBPACK_IMPORTED_MODULE_14__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_14__.TabPanel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
      styles: ["@charset \"UTF-8\";\n.dialog-header[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.cancel-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n\n.small-button[_ngcontent-%COMP%] {\n  width: 24px; \n\n  height: 24px; \n\n  font-size: 12px; \n\n}\n\n[_nghost-%COMP%]     .status-label {\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  display: inline-block;\n  text-align: center;\n  min-width: 80px;\n}\n\n[_nghost-%COMP%]     .status-abierto {\n  background-color: #c3e6cb; \n\n  color: #155724;\n}\n\n[_nghost-%COMP%]     .status-cerrado {\n  background-color: #e79494; \n\n  color: #a81616;\n}\n\n.title-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.sombreado-lote[_ngcontent-%COMP%] {\n  background-color: rgba(207, 188, 238, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtcmEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksa0JBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUEsRUFBQSx3QkFBQTtFQUNBLFlBQUEsRUFBQSx3QkFBQTtFQUNBLGVBQUEsRUFBQSxrREFBQTtBQUVKOztBQUNBO0VBQ0ksdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFDQTtFQUNJLHlCQUFBLEVBQUEsdUJBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0E7RUFDSSx5QkFBQSxFQUFBLHVCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7QUFFSjs7QUFDQTtFQUNJLDBDQUFBO0FBRUoiLCJmaWxlIjoiY29udHJvbC1yYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhbmNlbC1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zbWFsbC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDI0cHg7IC8qIG8gZWwgdGFtYcOxbyBkZXNlYWRvICovXHJcbiAgICBoZWlnaHQ6IDI0cHg7IC8qIG8gZWwgdGFtYcOxbyBkZXNlYWRvICovXHJcbiAgICBmb250LXNpemU6IDEycHg7IC8qIEFqdXN0YSBlbCB0YW1hw7FvIGRlIGxhIGZ1ZW50ZSBzaSBlcyBuZWNlc2FyaW8gKi9cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5zdGF0dXMtbGFiZWwge1xyXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtaW4td2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuc3RhdHVzLWFiaWVydG8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MzZTZjYjsgLyogQ29sb3IgcGFyYSBBYmllcnRvICovXHJcbiAgICBjb2xvcjogIzE1NTcyNDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5zdGF0dXMtY2VycmFkbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc5NDk0OyAvKiBDb2xvciBwYXJhIENlcnJhZG8gKi9cclxuICAgIGNvbG9yOiAjYTgxNjE2O1xyXG59XHJcblxyXG4udGl0bGUtY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc29tYnJlYWRvLWxvdGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDcsIDE4OCwgMjM4LCAwLjUpO1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL0FkbWluaXN0cmFkb3IvY29udHJvbC1yYS9jb250cm9sLXJhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBLEVBQUEsd0JBQUE7RUFDQSxZQUFBLEVBQUEsd0JBQUE7RUFDQSxlQUFBLEVBQUEsa0RBQUE7QUFFSjs7QUFDQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQ0E7RUFDSSx5QkFBQSxFQUFBLHVCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0kseUJBQUEsRUFBQSx1QkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSwwQ0FBQTtBQUVKO0FBQ0EsdzdEQUF3N0QiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYW5jZWwtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uc21hbGwtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAyNHB4OyAvKiBvIGVsIHRhbWHDg8KxbyBkZXNlYWRvICovXHJcbiAgICBoZWlnaHQ6IDI0cHg7IC8qIG8gZWwgdGFtYcODwrFvIGRlc2VhZG8gKi9cclxuICAgIGZvbnQtc2l6ZTogMTJweDsgLyogQWp1c3RhIGVsIHRhbWHDg8KxbyBkZSBsYSBmdWVudGUgc2kgZXMgbmVjZXNhcmlvICovXHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuc3RhdHVzLWxhYmVsIHtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWluLXdpZHRoOiA4MHB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnN0YXR1cy1hYmllcnRvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjM2U2Y2I7IC8qIENvbG9yIHBhcmEgQWJpZXJ0byAqL1xyXG4gICAgY29sb3I6ICMxNTU3MjQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuc3RhdHVzLWNlcnJhZG8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3OTQ5NDsgLyogQ29sb3IgcGFyYSBDZXJyYWRvICovXHJcbiAgICBjb2xvcjogI2E4MTYxNjtcclxufVxyXG5cclxuLnRpdGxlLWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNvbWJyZWFkby1sb3RlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA3LCAxODgsIDIzOCwgMC41KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 17707:
/*!******************************************************************************************!*\
  !*** ./src/app/demo/components/Administrador/dashboard-admi/dashboard-admi.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardAdmiComponent: () => (/* binding */ DashboardAdmiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_demo_service_cliente_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/cliente.service */ 4771);
/* harmony import */ var src_app_demo_service_articulo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/service/articulo.service */ 79358);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 49136);









const _c0 = () => ({
  "font-size": "1.5rem"
});
const _c1 = () => ({
  "font-size": "2rem"
});
const _c2 = () => ({
  width: "2.5rem",
  height: "2.5rem"
});
const _c3 = () => ({
  width: "50vw"
});
const _c4 = () => ({
  height: "8px"
});
const _c5 = a0 => ({
  width: a0
});
function DashboardAdmiComponent_li_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 29)(1, "div")(2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 32)(7, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const articulo_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](articulo_r1.nombreArticulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](articulo_r1.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("pTooltip", "", articulo_r1.totalUnidadesVendidas, " Unidades");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r2.getColor(i_r2))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c5, (articulo_r1.totalUnidadesVendidas > 100 ? 100 : articulo_r1.totalUnidadesVendidas) + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r2.getTextColor(i_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", articulo_r1.totalUnidadesVendidas, " Unidades");
  }
}
function DashboardAdmiComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Art\u00EDculo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Fecha de ingreso de la Orden");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Precio de Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Unidades en Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Fecha de Vencimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Dias Faltantes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function DashboardAdmiComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const articulo_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](articulo_r4.nombreArticulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](articulo_r4.fechaIngreso);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](articulo_r4.precioVenta);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](articulo_r4.unidades);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](articulo_r4.fechaVencimiento);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](articulo_r4.diasRestantes);
  }
}
function DashboardAdmiComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No existen registros");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function DashboardAdmiComponent_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No existen registros");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class DashboardAdmiComponent {
  constructor(clienteService, articuloService) {
    this.clienteService = clienteService;
    this.articuloService = articuloService;
    this.totalClientes = 0;
    this.ArticulosPorCaducarModal = false;
    this.totalAriculosCaducar = 0;
    this.topArticulos = [];
    this.articulosPorCaducar = [];
    this.colores = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];
  }
  ngOnInit() {
    this.obtenertotalClientesRegistrados();
    this.obtenerTopArticulosVendidos();
    this.obtenertotalArticulosPorCaducar();
  }
  obtenertotalClientesRegistrados() {
    this.clienteService.contarClientes().subscribe({
      next: total => {
        this.totalClientes = total;
      },
      error: err => {
        console.error('Error al contar clientes', err);
      }
    });
  }
  obtenerTopArticulosVendidos() {
    this.articuloService.obtenerTopArticulosVendidos().subscribe({
      next: articulos => {
        this.topArticulos = articulos;
      },
      error: err => {
        console.error('Error al obtener los artículos más vendidos', err);
      }
    });
  }
  obtenertotalArticulosPorCaducar() {
    this.articuloService.contarAriculosProximoCaducar().subscribe({
      next: total => {
        this.totalAriculosCaducar = total;
      },
      error: err => {
        console.error('Error al contar articulos proximos a caducar', err);
      }
    });
  }
  //metodos para listar todos los articulos por caducar
  openDialogProductoPorCaducar() {
    this.obtenerArticulosPorCaducar();
    this.ArticulosPorCaducarModal = true;
  }
  closeDialogProductoPorCaducar() {
    this.ArticulosPorCaducarModal = false;
  }
  obtenerArticulosPorCaducar() {
    this.articuloService.obtenerArticulosPorCaducar().subscribe({
      next: articulos => {
        this.articulosPorCaducar = articulos;
      },
      error: err => {
        console.error('Error al obtener los artículos por caducar', err);
      }
    });
  }
  getColor(index) {
    return this.colores[index % this.colores.length];
  }
  getTextColor(index) {
    const color = this.getColor(index);
    return color.replace('bg-', 'text-');
  }
  static {
    this.ɵfac = function DashboardAdmiComponent_Factory(t) {
      return new (t || DashboardAdmiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_service_cliente_service__WEBPACK_IMPORTED_MODULE_0__.ClienteService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_service_articulo_service__WEBPACK_IMPORTED_MODULE_1__.ArticuloService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: DashboardAdmiComponent,
      selectors: [["app-dashboard-admi"]],
      decls: 58,
      vars: 38,
      consts: [[1, "grid"], [1, "col-12", "lg:col-6", "xl:col-3"], [1, "card", "mb-0"], [1, "flex", "justify-content-between", "mb-2"], [1, "block", "text-500", "font-medium", "mb-2", 3, "ngStyle"], [1, "text-1000", "font-medium", 3, "ngStyle"], [1, "flex", "align-items-center", "justify-content-center", "bg-cyan-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-users", "text-cyan-500", "text-xl"], [1, "col-12", "lg:col-6", "xl:col-3", "cursor-pointer", 3, "click"], [1, "flex", "align-items-center", "justify-content-center", "bg-blue-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-box", "text-blue-500", "text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-orange-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-money-bill", "text-orange-500", "text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-green-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-money-bill", "text-green-500", "text-xl"], [1, "col-12", "xl:col-6"], [1, "card"], [1, "flex", "justify-content-between", "align-items-center", "mb-5"], [1, "list-none", "p-0", "m-0"], ["class", "flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4", 4, "ngFor", "ngForOf"], [3, "visibleChange", "visible", "modal", "closable"], [2, "text-align", "center"], ["scrollDirection", "both", "scrollHeight", "400px", "styleClass", "mt-3", "responsiveLayout", "scroll", 3, "value", "rows", "rowHover", "scrollable", "paginator"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "loadingbody"], [1, "flex", "justify-content-end"], ["pButton", "", "pRipple", "", "label", "Cerrar", "type", "button", "icon", "pi pi-times", 1, "p-button-danger", "mr-2", "mb-2", 3, "click"], [1, "flex", "flex-column", "md:flex-row", "md:align-items-center", "md:justify-content-between", "mb-4"], [1, "text-900", "font-medium", "mr-2", "mb-1", "md:mb-0"], [1, "mt-1", "text-600"], [1, "mt-2", "md:mt-0", "flex", "align-items-center"], [1, "surface-300", "border-round", "overflow-hidden", "w-10rem", "lg:w-6rem", 3, "ngStyle"], ["tooltipPosition", "top", 1, "h-full", 3, "ngClass", "ngStyle", "pTooltip"], [1, "ml-3", "font-medium", 3, "ngClass"], ["colspan", "8"]],
      template: function DashboardAdmiComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Clientes Registrados");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardAdmiComponent_Template_div_click_11_listener() {
            return ctx.openDialogProductoPorCaducar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 2)(13, "div", 3)(14, "div")(15, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Art\u00EDculos por Caducar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 1)(22, "div", 2)(23, "div", 3)(24, "div")(25, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Ingresos en el D\u00EDa");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "$");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 1)(32, "div", 2)(33, "div", 3)(34, "div")(35, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Salidas en el D\u00EDa");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "$ ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 15)(42, "div", 16)(43, "div", 17)(44, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Los Art\u00EDculos m\u00E1s vendidos en los \u00FAltimos 60 d\u00EDas");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "ul", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, DashboardAdmiComponent_li_47_Template, 11, 12, "li", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "p-dialog", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("visibleChange", function DashboardAdmiComponent_Template_p_dialog_visibleChange_48_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.ArticulosPorCaducarModal, $event) || (ctx.ArticulosPorCaducarModal = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "h3", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Art\u00EDculos proximos a su fecha de Vencimiento");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "p-table", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, DashboardAdmiComponent_ng_template_52_Template, 13, 0, "ng-template", 23)(53, DashboardAdmiComponent_ng_template_53_Template, 13, 6, "ng-template", 24)(54, DashboardAdmiComponent_ng_template_54_Template, 3, 0, "ng-template", 25)(55, DashboardAdmiComponent_ng_template_55_Template, 3, 0, "ng-template", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "p-footer", 27)(57, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardAdmiComponent_Template_button_click_57_listener() {
            return ctx.closeDialogProductoPorCaducar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](25, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](26, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.totalClientes);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](27, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](28, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](29, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.totalAriculosCaducar);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](30, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](31, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](32, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](33, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](34, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](35, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](36, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.topArticulos);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](37, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("visible", ctx.ArticulosPorCaducarModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("modal", true)("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.articulosPorCaducar)("rows", 5)("rowHover", true)("scrollable", true)("paginator", true);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_api__WEBPACK_IMPORTED_MODULE_4__.Footer, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_dialog__WEBPACK_IMPORTED_MODULE_5__.Dialog, primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__.Tooltip, primeng_table__WEBPACK_IMPORTED_MODULE_7__.Table, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective],
      styles: [".cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1hZG1pLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6ImRhc2hib2FyZC1hZG1pLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1cnNvci1wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL0FkbWluaXN0cmFkb3IvZGFzaGJvYXJkLWFkbWkvZGFzaGJvYXJkLWFkbWkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7QUFDQSw0VUFBNFUiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Vyc29yLXBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5157:
/*!*******************************************************************************!*\
  !*** ./src/app/demo/components/secretaria/fijaciones/fijaciones.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FijacionesComponent: () => (/* binding */ FijacionesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_demo_service_fijaciones_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/fijaciones.service */ 18290);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);















const _c0 = () => ({
  width: "350px"
});
const _c1 = () => ({
  width: "30vw"
});
function FijacionesComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 16)(1, "div", 20)(2, "div", 54)(3, "div", 22)(4, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FijacionesComponent_ng_template_13_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.registrarFijacion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 54)(6, "div", 22)(7, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "p-calendar", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Fecha Inicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 58)(14, "div", 22)(15, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "p-calendar", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Fecha Fin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 54)(22, "div", 22)(23, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FijacionesComponent_ng_template_13_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cargarFijacionesPorFecha());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FijacionesComponent_ng_template_13_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.limpiarControles());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", 63);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.searchForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r1.allFijacionesCortadas);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showIcon", true)("appendTo", "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showIcon", true)("appendTo", "body");
  }
}
function FijacionesComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Cod");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Descripci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Fecha Inicio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Fecha de Corte ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Acciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function FijacionesComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td")(2, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FijacionesComponent_ng_template_15_Template_button_click_2_listener() {
      const fijacion_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.toggleRow(fijacion_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 74)(14, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FijacionesComponent_ng_template_15_Template_button_click_14_listener() {
      const fijacion_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.openNuevoFijadosDialog(fijacion_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FijacionesComponent_ng_template_15_Template_button_click_15_listener() {
      const fijacion_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.openNewEnviadosDialog(fijacion_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FijacionesComponent_ng_template_15_Template_button_click_16_listener() {
      const fijacion_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.confirmHacerCorteFijacion(fijacion_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const fijacion_r4 = ctx.$implicit;
    const expanded_r5 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", expanded_r5 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fijacion_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fijacion_r4.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 8, fijacion_r4.fechaInicio, "yyyy-MM-dd"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](12, 11, fijacion_r4.fechaCorte, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", fijacion_r4.fechaCorte != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", fijacion_r4.fechaCorte != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", fijacion_r4.fechaCorte != null);
  }
}
function FijacionesComponent_ng_template_16_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "QQ Fijados");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Precio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "QQ Enviados");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Custodia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Transporte");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Valor Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function FijacionesComponent_ng_template_16_ng_template_5_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const detalle_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, detalle_r7.custodia * detalle_r7.qqEnviados, "1.2-2"), ")");
  }
}
function FijacionesComponent_ng_template_16_ng_template_5_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const detalle_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, detalle_r7.transporte * detalle_r7.qqEnviados, "1.2-2"), ")");
  }
}
function FijacionesComponent_ng_template_16_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, FijacionesComponent_ng_template_16_ng_template_5_span_15_Template, 3, 4, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, FijacionesComponent_ng_template_16_ng_template_5_span_19_Template, 3, 4, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td", 100)(24, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FijacionesComponent_ng_template_16_ng_template_5_Template_button_click_24_listener() {
      const detalle_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.openDialogEdicion(detalle_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FijacionesComponent_ng_template_16_ng_template_5_Template_button_click_25_listener() {
      const detalle_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6).$implicit;
      const fijacion_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.confirmDeleteDetalleFijacion(detalle_r7, fijacion_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const detalle_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](detalle_r7.fecha);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 9, detalle_r7.qqFijados, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 12, detalle_r7.precio, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](11, 15, detalle_r7.qqEnviados, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 18, detalle_r7.custodia, "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", detalle_r7.custodia && detalle_r7.qqEnviados);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](18, 21, detalle_r7.transporte, "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", detalle_r7.transporte);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 24, detalle_r7.qqFijados * detalle_r7.precio, "1.2-2"));
  }
}
function FijacionesComponent_ng_template_16_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No existen registros.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function FijacionesComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 78)(2, "div", 79)(3, "p-table", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FijacionesComponent_ng_template_16_ng_template_4_Template, 17, 0, "ng-template", 10)(5, FijacionesComponent_ng_template_16_ng_template_5_Template, 26, 27, "ng-template", 11)(6, FijacionesComponent_ng_template_16_ng_template_6_Template, 3, 0, "ng-template", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 82)(8, "div", 54)(9, "div", 83)(10, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Total QQ Fijados");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 54)(18, "div", 83)(19, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Total QQ Enviados");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 54)(27, "div", 83)(28, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Total Dinero");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 54)(36, "div", 83)(37, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "QQ Pendientes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 54)(45, "div", 83)(46, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](50, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Sacos Pendientes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 54)(54, "div", 83)(55, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](59, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Precio Promedio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 54)(63, "div", 83)(64, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](68, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Retencion 1.75%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 54)(72, "div", 83)(73, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](77, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Precio Neto");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const fijacion_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", fijacion_r8.detalleFijacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 9, ctx_r1.totalQQFijados, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](23, 12, ctx_r1.totalQQEnviados, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](32, 15, ctx_r1.totalMultiplicacion, "USD", "code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](41, 19, ctx_r1.qqPendientes, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](50, 22, ctx_r1.sacosPendientes, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](59, 25, ctx_r1.precioPromedio, "USD", "code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](68, 29, ctx_r1.retencion, "USD", "code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](77, 33, ctx_r1.precioNeto, "USD", "code"));
  }
}
function FijacionesComponent_div_48_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Solo se permiten n\u00FAmeros y un punto decimal.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function FijacionesComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FijacionesComponent_div_48_small_1_Template, 2, 0, "small", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r1.detalleFijadosForm.get("qqFijados")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["pattern"]);
  }
}
function FijacionesComponent_div_56_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Solo se permiten n\u00FAmeros y un punto decimal.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function FijacionesComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FijacionesComponent_div_56_small_1_Template, 2, 0, "small", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r1.detalleFijadosForm.get("precio")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["pattern"]);
  }
}
function FijacionesComponent_div_89_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Solo se permiten n\u00FAmeros y un punto decimal.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function FijacionesComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FijacionesComponent_div_89_small_1_Template, 2, 0, "small", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r1.detalleEnviadosForm.get("qqEnviados")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["pattern"]);
  }
}
function FijacionesComponent_div_101_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Solo se permiten n\u00FAmeros y un punto decimal.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function FijacionesComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FijacionesComponent_div_101_small_1_Template, 2, 0, "small", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r1.detalleEnviadosForm.get("custodia")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["pattern"]);
  }
}
function FijacionesComponent_div_113_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Solo se permiten n\u00FAmeros y un punto decimal.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function FijacionesComponent_div_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FijacionesComponent_div_113_small_1_Template, 2, 0, "small", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r1.detalleEnviadosForm.get("transporte")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["pattern"]);
  }
}
class FijacionesComponent {
  constructor(fijacionesService, messageService, fb, datePipe, confirmationService) {
    this.fijacionesService = fijacionesService;
    this.messageService = messageService;
    this.fb = fb;
    this.datePipe = datePipe;
    this.confirmationService = confirmationService;
    this.fijaciones = [];
    this.loading = true;
    this.expandedRows = {};
    this.isExpanded = false;
    //para los modals
    this.dialogDetalleFijados = false;
    this.dialogDetalleEnviados = false;
    this.totalQQFijados = 0;
    this.totalQQEnviados = 0;
    this.totalMultiplicacion = 0;
    this.qqPendientes = 0;
    this.totalCustodia = 0;
    this.totalTransporte = 0;
    this.sacosPendientes = 0;
    this.precioPromedio = 0;
    this.retencion = 0;
    this.precioNeto = 0;
    this.allFijacionesCortadas = true;
    this.esEdicion = false;
    console.log('Constructor del componentr llamado');
    this.detalleFijadosForm = this.fb.group({
      id: [null],
      codFijacion: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      fecha: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      qqFijados: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^\\d+(\\.\\d{1,2})?$')]],
      precio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^\\d+(\\.\\d{1,2})?$')]]
    });
    this.detalleEnviadosForm = this.fb.group({
      id: [null],
      codFijacion: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      fecha: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      qqEnviados: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^\\d+(\\.\\d{1,2})?$')]],
      custodia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^\\d+(\\.\\d{1,2})?$')]],
      transporte: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^\\d+(\\.\\d{1,2})?$')]],
      totalTransporte: [{
        value: '',
        disabled: true
      }],
      totalCustodia: [{
        value: '',
        disabled: true
      }]
    });
    this.searchForm = this.fb.group({
      fechaI: [null],
      fechaF: [null]
    });
  }
  ngOnInit() {
    console.log('ngOnInit del componente llamado');
    this.listarFijaciones();
    this.inicializarFecha();
    this.detalleEnviadosForm.get('qqEnviados')?.valueChanges.subscribe(() => {
      this.calcularTotales();
    });
    this.detalleEnviadosForm.get('custodia')?.valueChanges.subscribe(() => {
      this.calcularTotales();
    });
    this.detalleEnviadosForm.get('transporte')?.valueChanges.subscribe(() => {
      this.calcularTotales();
    });
  }
  calcularTotales() {
    const qqEnviados = parseFloat(this.detalleEnviadosForm.get('qqEnviados')?.value) || 0;
    const custodia = parseFloat(this.detalleEnviadosForm.get('custodia')?.value) || 0;
    const transporte = parseFloat(this.detalleEnviadosForm.get('transporte')?.value) || 0;
    const totalCustodia = qqEnviados * custodia;
    const totalTransporte = qqEnviados * transporte;
    this.detalleEnviadosForm.get('totalCustodia')?.setValue(totalCustodia.toFixed(2), {
      emitEvent: false
    });
    this.detalleEnviadosForm.get('totalTransporte')?.setValue(totalTransporte.toFixed(2), {
      emitEvent: false
    });
  }
  inicializarFecha() {
    this.searchForm.patchValue({
      fechaI: new Date(),
      fechaF: new Date()
    });
  }
  confirmDeleteDetalleFijacion(detalle, fijacion) {
    this.confirmationService.confirm({
      key: 'confirmDelReg',
      message: `¿Deseas eliminar este registro?`,
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      rejectLabel: 'No',
      accept: () => {
        this.deleteRegistro(detalle.id, fijacion.id);
      }
    });
  }
  deleteRegistro(id, fijacionId) {
    this.fijacionesService.eliminarDetalle(id).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Registro eliminado',
          detail: `El registro con ID ${id} ha sido eliminado correctamente.`
        });
        // Imprimir el ID de la fijación
        console.log(`ID de la fijación eliminada: ${fijacionId}`);
        // Recalcular totales y listar detalles de la fijación actual
        const fijacion = this.fijaciones.find(f => f.id === Number(fijacionId));
        if (fijacion) {
          this.listarDetallesFijaciones(fijacion).subscribe(detalles => {
            if (detalles.length === 0) {
              // Si no hay más registros, resetear los campos
              console.log('No quedan detalles, se procederá a resetear los campos.');
              this.resetearCampos();
            } else {
              // Calcular totales con los detalles restantes
              this.calcularTotalesFijacion(detalles);
            }
          });
        }
        // Cerrar el diálogo de confirmación
        this.confirmationService.close();
      },
      error: err => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Hubo un error al eliminar el registro.'
        });
        console.error('Error al eliminar el registro:', err);
      }
    });
  }
  registrarFijacion() {
    console.log('Método registrarFijacion llamado');
    this.fijacionesService.registrarFijacion().subscribe(response => {
      console.log('Respuesta recibida:', response);
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Fijación registrada exitosamente.'
      });
      this.fijaciones.push(response);
      this.listarFijaciones();
    }, error => {
      console.log('Error recibido:', error);
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Error al registrar la fijación.'
      });
    });
  }
  confirmHacerCorteFijacion(fijacion) {
    this.confirmationService.confirm({
      key: 'confirmHaCorte',
      message: `¿Deseas finalizar este periodo de Fijacion?`,
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      rejectLabel: 'No',
      accept: () => {
        this.FinalizarCorte(fijacion);
      }
    });
  }
  FinalizarCorte(fijacion) {
    if (this.expandedRows[fijacion.id]) {
      // Si está expandida, la colapsamos
      delete this.expandedRows[fijacion.id];
    }
    this.fijacionesService.registrarCorte(fijacion.id).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Corte registrado exitosamente.'
      });
      this.listarFijaciones();
    }, error => {
      console.error('Error al registrar el corte:', error);
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Ocurrió un error al registrar el corte.'
      });
    });
  }
  listarFijaciones() {
    this.loading = true;
    this.fijacionesService.obtenerFijaciones().subscribe(data => {
      // Inicializa detalleFijacion para cada fijación
      this.fijaciones = data.map(fijacion => ({
        ...fijacion,
        detalleFijacion: fijacion.detalleFijacion || [] // Inicializa como array vacío
      }));
      this.loading = false;
      this.checkAllFijacionesCortadas();
    }, error => {
      console.error('Error al obtener las fijaciones', error);
      this.loading = false;
    });
  }
  checkAllFijacionesCortadas() {
    this.allFijacionesCortadas = this.fijaciones.length === 0 || this.fijaciones.every(fijacion => fijacion.fechaCorte != null);
  }
  listarDetallesFijaciones(fijacion) {
    return this.fijacionesService.obtenerDetalleFijacionesId(fijacion.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(data => {
      fijacion.detalleFijacion = data || []; // Asegúrate de que sea un array
      console.log(`detalle de fijaciones para la fijacion ${fijacion.id}:`, fijacion.detalleFijacion);
      this.calcularTotalesFijacion(fijacion.detalleFijacion);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error(`Error al obtener los detalles de la fijacion ${fijacion.id}:`, error);
      fijacion.detalleFijacion = []; // Asegúrate de restablecer a un array vacío
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]); // Retorna un array vacío para manejar errores
    }));
  }
  toggleRow(fijacion) {
    // Asegúrate de que detalleFijacion siempre sea un array
    if (!fijacion.detalleFijacion) {
      fijacion.detalleFijacion = [];
    }
    if (this.expandedRows[fijacion.id]) {
      delete this.expandedRows[fijacion.id];
    } else {
      this.expandedRows = {};
      // Verificar si la fijación no tiene detalles
      if (fijacion.detalleFijacion.length === 0) {
        this.resetearCampos();
        this.listarDetallesFijaciones(fijacion).subscribe(detalles => {
          this.expandedRows[fijacion.id] = true;
          fijacion.detalleFijacion = detalles;
          // Si se cargaron detalles, realizar los cálculos
          if (detalles.length > 0) {
            this.calcularTotalesFijacion(detalles);
          }
        });
      } else {
        // Si ya tiene detalles, simplemente expandir la fila y hacer los cálculos
        this.expandedRows[fijacion.id] = true;
        this.calcularTotalesFijacion(fijacion.detalleFijacion);
      }
    }
  }
  //Para registrar los detalles
  guardarOActualizarFijacion() {
    console.log('guardarOActualizarFijacion llamado');
    const formValue = this.detalleFijadosForm.value;
    const fechaLocal = new Date(formValue.fecha);
    const fechaUTC = this.convertToUTC(fechaLocal);
    // Crea el objeto DetalleFijacion
    const detalleFijados = {
      id: this.esEdicion ? formValue.id : undefined,
      // Solo asignar ID si está en edición
      fijacion: {
        id: formValue.codFijacion
      },
      fecha: fechaUTC.toISOString(),
      qqFijados: parseFloat(formValue.qqFijados),
      precio: parseFloat(formValue.precio)
    };
    // Llama al servicio correspondiente según si está en modo de edición
    const accion = this.esEdicion ? this.fijacionesService.actualizarDetalle(detalleFijados.id, detalleFijados) : this.fijacionesService.registrarDetalle(detalleFijados);
    accion.subscribe(response => {
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: this.esEdicion ? 'Fijación actualizada exitosamente' : 'Fijación registrada exitosamente'
      });
      // Cerrar el diálogo y resetear el formulario
      this.closeFijadoDialog();
      this.detalleFijadosForm.reset();
      // Actualizar la lista de detalles de la fijación
      const fijacionId = formValue.codFijacion;
      const fijacion = this.fijaciones.find(f => f.id === Number(fijacionId));
      if (fijacion) {
        this.listarDetallesFijaciones(fijacion).subscribe(detalles => {
          this.calcularTotalesFijacion(detalles);
        });
      }
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Ocurrió un error al ' + (this.esEdicion ? 'actualizar' : 'registrar') + ' la fijación.'
      });
    });
  }
  convertToUTC(fechaLocal) {
    return new Date(Date.UTC(fechaLocal.getFullYear(), fechaLocal.getMonth(), fechaLocal.getDate(), fechaLocal.getHours(), fechaLocal.getMinutes(), fechaLocal.getSeconds()));
  }
  openDialogEdicion(detalle) {
    this.esEdicion = true;
    const fecha = detalle.fecha ? new Date(detalle.fecha + 'T00:00:00') : null;
    if (detalle.qqFijados != null) {
      // Si qqFijados no es null, abre el diálogo de Fijados
      this.detalleFijadosForm.patchValue({
        id: detalle.id,
        codFijacion: detalle.fijacion.id,
        fecha: fecha,
        qqFijados: detalle.qqFijados,
        precio: detalle.precio
      });
      this.dialogDetalleFijados = true;
    } else {
      // Si qqFijados es null, abre el diálogo de Enviados
      this.detalleEnviadosForm.patchValue({
        id: detalle.id,
        codFijacion: detalle.fijacion.id,
        fecha: fecha,
        qqEnviados: detalle.qqEnviados,
        custodia: detalle.custodia,
        transporte: detalle.transporte
      });
      this.dialogDetalleEnviados = true;
    }
  }
  openNuevoFijadosDialog(fijacion) {
    this.esEdicion = false;
    this.detalleFijadosForm.patchValue({
      codFijacion: fijacion.id,
      fecha: new Date()
    });
    this.dialogDetalleFijados = true;
  }
  closeFijadoDialog() {
    this.dialogDetalleFijados = false;
    this.detalleFijadosForm.reset();
  }
  /*openEnviadosDialog(detalle:DetalleFijacion) {
      this.esEdicion=true;
      const fechaEnvio= detalle.fecha?new Date(detalle.fecha+'T00:00:00'):null;
      this.detalleEnviadosForm.patchValue({
          id:detalle.id,
          codFijacion: detalle.fijacion.id,
          fecha: fechaEnvio,
          qqEnviados:detalle.qqEnviados,
          custodia:detalle.custodia,
          transporte:detalle.transporte
      });
      this.dialogDetalleEnviados = true;
  }*/
  openNewEnviadosDialog(fijacion) {
    this.esEdicion = false;
    this.detalleEnviadosForm.patchValue({
      codFijacion: fijacion.id,
      fecha: new Date()
    });
    this.dialogDetalleEnviados = true;
  }
  closeEnviadosDialog() {
    this.dialogDetalleEnviados = false;
    this.detalleEnviadosForm.reset();
  }
  registrarDetalleEnviados() {
    console.log('registrarDetalleEnviadosllamado');
    const formValueEnviado = this.detalleEnviadosForm.value;
    const fechaLocal = new Date(formValueEnviado.fecha);
    const fechaUTC = this.convertToUTC(fechaLocal);
    const detalleEnviados = {
      id: this.esEdicion ? formValueEnviado.id : undefined,
      fijacion: {
        id: formValueEnviado.codFijacion
      },
      fecha: fechaUTC.toISOString(),
      qqEnviados: parseFloat(formValueEnviado.qqEnviados),
      custodia: parseFloat(formValueEnviado.custodia),
      transporte: parseFloat(formValueEnviado.transporte)
    };
    console.log('JSON enviado:', JSON.stringify(detalleEnviados, null, 2));
    const accion = this.esEdicion ? this.fijacionesService.actualizarDetalle(detalleEnviados.id, detalleEnviados) : this.fijacionesService.registrarDetalle(detalleEnviados);
    accion.subscribe(response => {
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: this.esEdicion ? 'Registro de envio actualizada exitosamente' : 'Registro de envio registrada exitosamente'
      });
      this.closeEnviadosDialog();
      this.detalleEnviadosForm.reset();
      const fijacionId = formValueEnviado.codFijacion;
      const fijacion = this.fijaciones.find(f => f.id === Number(fijacionId));
      if (fijacion) {
        this.listarDetallesFijaciones(fijacion).subscribe(detalles => {
          this.calcularTotalesFijacion(detalles);
        });
      }
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Ocurrió un error al ' + (this.esEdicion ? 'actualizar' : 'registrar') + ' el registro de envio.'
      });
    });
  }
  calcularTotalesFijacion(detalles) {
    if (!detalles || detalles.length === 0) {
      console.log('No hay detalles de fijación.');
      return;
    }
    this.totalQQFijados = detalles.reduce((sum, detalle) => sum + (detalle.qqFijados || 0), 0);
    this.totalQQEnviados = detalles.reduce((sum, detalle) => sum + (detalle.qqEnviados || 0), 0);
    this.totalMultiplicacion = detalles.reduce((sum, detalle) => sum + (detalle.qqFijados || 0) * (detalle.precio || 0), 0);
    this.qqPendientes = +(this.totalQQFijados - this.totalQQEnviados).toFixed(2);
    this.sacosPendientes = +(this.qqPendientes / 1.5).toFixed(2);
    this.precioPromedio = this.totalQQFijados > 0 ? +(this.totalMultiplicacion / this.totalQQFijados).toFixed(2) : 0;
    this.retencion = this.precioPromedio > 0 ? +(this.precioPromedio * 1.75 / 100).toFixed(3) : 0;
    const totalCustodia = detalles.reduce((sum, detalle) => sum + (detalle.custodia || 0), 0);
    const totalTransporte = detalles.reduce((sum, detalle) => sum + (detalle.transporte || 0), 0);
    this.precioNeto = +(this.precioPromedio - this.retencion - totalCustodia - totalTransporte).toFixed(2);
  }
  resetearCampos() {
    this.totalQQFijados = 0;
    this.totalQQEnviados = 0;
    this.totalMultiplicacion = 0;
    this.qqPendientes = 0;
    this.sacosPendientes = 0;
    this.precioPromedio = 0;
    this.retencion = 0;
    this.precioNeto = 0;
  }
  cargarFijacionesPorFecha() {
    const fechaInicio = this.searchForm.get('fechaI')?.value;
    const fechaFin = this.searchForm.get('fechaF')?.value;
    const formattedFechaInicio = this.datePipe.transform(fechaInicio, 'yyyy-MM-dd') || '';
    const formattedFechaFin = this.datePipe.transform(fechaFin, 'yyyy-MM-dd') || '';
    this.fijacionesService.obtenerobtenerFijacionesPorFecha(formattedFechaInicio, formattedFechaFin).subscribe(data => {
      this.fijaciones = data;
    }, error => {
      console.error('Error al obtener las fijaciones');
    });
  }
  limpiarControles() {
    this.searchForm.reset();
    this.listarFijaciones();
    this.inicializarFecha();
  }
  static {
    this.ɵfac = function FijacionesComponent_Factory(t) {
      return new (t || FijacionesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_demo_service_fijaciones_service__WEBPACK_IMPORTED_MODULE_0__.FijacionesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.ConfirmationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FijacionesComponent,
      selectors: [["app-fijaciones"]],
      decls: 117,
      vars: 37,
      consts: [[1, "card", "p-4", "border-none", "shadow-premium", "mb-4", "flex", "align-items-center", "justify-content-between", "bg-white", "overflow-hidden", "relative", 2, "border-radius", "1.25rem"], [1, "flex", "align-items-center", "relative", "z-1"], [1, "p-3", "border-round-xl", "bg-orange-50", "mr-4", "shadow-sm"], [1, "pi", "pi-money-bill", "text-orange-600", "text-3xl"], [1, "m-0", "font-bold", "text-900", "line-height-2", "tracking-tight"], [1, "m-0", "text-600", "font-medium", "opacity-70"], [1, "absolute", "-top-10", "-right-10", "bg-orange-50", "border-circle", "opacity-50", 2, "width", "250px", "height", "250px"], [1, "card", "border-none", "shadow-premium", "border-round-xl", "overflow-hidden"], ["dataKey", "id", "responsiveLayout", "scroll", 3, "value", "expandedRowKeys"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "rowexpansion"], ["header", "Confirmaci\u00F3n", "key", "confirmDelReg", "icon", "pi pi-exclamation-triangle", "message", "Are you sure you want to proceed?", "acceptButtonStyleClass", "p-button-text", "rejectButtonStyleClass", "p-button-text"], ["header", "Confirmaci\u00F3n", "key", "confirmHaCorte", "icon", "pi pi-exclamation-triangle", "message", "Are you sure you want to proceed?", "acceptButtonStyleClass", "p-button-text", "rejectButtonStyleClass", "p-button-text"], [3, "visibleChange", "visible", "modal", "closable"], [3, "formGroup"], [1, "mt-3", 2, "text-align", "center"], [1, "dialog-header", "cancel-button"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-times", 1, "p-button-danger", "mr-2", 3, "click"], [1, "grid", "p-fluid"], [1, "field", "col-12"], [1, "p-inputgroup"], [1, "p-inputgroup-addon"], [1, "pi", "pi-code"], [1, "p-float-label"], ["type", "text", "pInputText", "", "formControlName", "codFijacion"], ["for", "codFijacion"], [1, "p-inputgroup", "mt-4"], [1, "pi", "pi-calendar"], ["id", "fechaIngreso", "formControlName", "fecha", "dateFormat", "dd/mm/yy", 3, "showIcon", "appendTo"], ["for", "fecha"], [1, "pi", "pi-hourglass"], ["type", "text", "pInputText", "", "formControlName", "qqFijados"], ["for", "qqFijados"], ["class", "p-error", 4, "ngIf"], [1, "pi", "pi-dollar"], ["type", "text", "pInputText", "", "formControlName", "precio"], ["for", "precio"], [1, "flex", "flex-column", 2, "height", "100%"], [1, "flex", "justify-content-end", "mt-auto"], ["pButton", "", "type", "button", "icon", "pi pi-save", 3, "click", "label", "disabled"], ["id", "fecha", "formControlName", "fecha", "dateFormat", "dd/mm/yy", 3, "showIcon", "appendTo"], [1, "pi", "pi-truck"], ["type", "text", "pInputText", "", "formControlName", "qqEnviados"], ["for", "qqEnviados"], ["type", "text", "pInputText", "", "formControlName", "custodia"], ["for", "custodia"], ["type", "text", "pInputText", "", "formControlName", "totalCustodia"], ["for", "totalCustodia"], ["type", "text", "pInputText", "", "formControlName", "transporte"], ["for", "transporte"], ["type", "text", "pInputText", "", "formControlName", "totalTransporte"], ["for", "totalTransporte"], [1, "col-12", "md:col-3"], ["pButton", "", "pRipple", "", "label", "Nueva Fijaci\u00F3n", "icon", "pi pi-plus", 1, "mr-2", 3, "click", "disabled"], ["id", "fechaInicio", "formControlName", "fechaI", "dateFormat", "dd/mm/yy", 3, "showIcon", "appendTo"], ["for", "fechaInicio"], [1, "col-10", "md:col-3"], ["id", "fechaFin", "formControlName", "fechaF", "dateFormat", "dd/mm/yy", 3, "showIcon", "appendTo"], ["for", "fechaFin"], ["pButton", "", "type", "button", "label", "Buscar ", "icon", "pi pi-search", 1, "mr-2", 3, "click"], ["pButton", "", "type", "button", "label", "Limpiar", "icon", "pi pi-trash", 1, "p-button-warning", 3, "click"], [1, "flex", "table-header"], ["pSortableColumn", "Cod", 2, "min-width", "10rem"], ["pSortableColumn", "descripcion", 2, "min-width", "10rem"], ["pSortableColumn", "fechaInicio", 2, "min-width", "10rem"], ["pSortableColumn", "fechaCorte", 2, "min-width", "10rem"], ["pSortableColumn", "acciones", 2, "min-width", "10rem"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-button-text", "p-button-rounded", "p-button-plain", 3, "click", "icon"], [2, "min-width", "10rem"], [2, "min-width", "1rem"], [2, "min-width", "-10rem"], [2, "min-width", "7rem"], [2, "min-width", "5rem"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-plus", "pTooltip", "Fijar", "tooltipPosition", "top", 1, "p-button-success", "mb-2", "mr-2", 3, "click", "disabled"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-chart-line", "pTooltip", "QQ Enviado", "tooltipPosition", "top", 1, "p-button-warning", "mb-2", "mr-2", 3, "click", "disabled"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-pause", "pTooltip", "Hacer Corte", "tooltipPosition", "top", 1, "p-button-danger", "mb-2", "mr-2", 3, "click", "disabled"], ["colspan", "7"], [1, "p-3"], ["dataKey", "id", "responsiveLayout", "scroll", 3, "value"], ["pTemplate", "emptymessage"], [1, "grid", "p-fluid", "justify-content-end"], [1, "p-inputgroup", "mt-2"], [1, "pi", "pi-plus"], ["type", "text", "pInputText", "", "disabled", "", 1, "red-text", 3, "value"], ["for", "cantidadVendida"], ["for", "totalRecibido"], [1, "pi", "pi-percentage"], ["for", "SumaTotal"], ["for", "qqPendientes"], ["for", "sacosPendientes"], ["for", "precioPromedio"], [1, "pi", "pi-tag"], ["for", "nuevoCampo4"], ["for", "nuevoCampo5"], ["pSortableColumn", "fecha", 2, "text-align", "center"], ["pSortableColumn", "qqFijados", 2, "text-align", "center"], ["pSortableColumn", "precio", 2, "text-align", "center"], ["pSortableColumn", "qqEnviados", 2, "text-align", "center"], [2, "text-align", "center"], [4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-pencil", "pTooltip", "Editar Registro", "tooltipPosition", "top", 1, "p-button-primary", "p-button-text", "mr-2", "mb-2", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-trash", "pTooltip", "Eliminar Registro", "tooltipPosition", "top", 1, "p-button-danger", "p-button-text", "mr-2", "mb-2", 3, "click"], ["colspan", "4"], [1, "p-error"]],
      template: function FijacionesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div")(6, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Fijaciones de Cacao");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Control de precios pactados y liquidaciones \u00B7 AgroFranco");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7)(12, "p-table", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, FijacionesComponent_ng_template_13_Template, 26, 6, "ng-template", 9)(14, FijacionesComponent_ng_template_14_Template, 12, 0, "ng-template", 10)(15, FijacionesComponent_ng_template_15_Template, 17, 14, "ng-template", 11)(16, FijacionesComponent_ng_template_16_Template, 80, 37, "ng-template", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "p-confirmDialog", 13)(18, "p-confirmDialog", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p-dialog", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("visibleChange", function FijacionesComponent_Template_p_dialog_visibleChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.dialogDetalleFijados, $event) || (ctx.dialogDetalleFijados = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "form", 16)(21, "h3", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18)(24, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FijacionesComponent_Template_button_click_24_listener() {
            return ctx.closeFijadoDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 20)(26, "div", 21)(27, "div", 22)(28, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "C\u00F3digo de Fijaci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 28)(35, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "p-calendar", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Fecha");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 28)(42, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "QQ Fijados");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, FijacionesComponent_div_48_Template, 2, 1, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 28)(50, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "label", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Precio");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, FijacionesComponent_div_56_Template, 2, 1, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 39)(58, "div", 40)(59, "button", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FijacionesComponent_Template_button_click_59_listener() {
            return ctx.guardarOActualizarFijacion();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "p-dialog", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("visibleChange", function FijacionesComponent_Template_p_dialog_visibleChange_60_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.dialogDetalleEnviados, $event) || (ctx.dialogDetalleEnviados = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "form", 16)(62, "h3", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 18)(65, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FijacionesComponent_Template_button_click_65_listener() {
            return ctx.closeEnviadosDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 20)(67, "div", 21)(68, "div", 22)(69, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "C\u00F3digo de Fijaci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 28)(76, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "p-calendar", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Fecha");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 28)(83, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "input", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "label", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "QQ Enviados");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, FijacionesComponent_div_89_Template, 2, 1, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 28)(91, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "input", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "label", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Pago Custodia(x QQ)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "input", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "label", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Pago Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, FijacionesComponent_div_101_Template, 2, 1, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 28)(103, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "label", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Pago Transporte");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "input", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "label", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Pago Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](113, FijacionesComponent_div_113_Template, 2, 1, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 39)(115, "div", 40)(116, "button", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FijacionesComponent_Template_button_click_116_listener() {
            return ctx.registrarDetalleEnviados();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          let tmp_12_0;
          let tmp_13_0;
          let tmp_24_0;
          let tmp_25_0;
          let tmp_26_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.fijaciones)("expandedRowKeys", ctx.expandedRows);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](33, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](34, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](35, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("visible", ctx.dialogDetalleFijados);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("modal", true)("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.detalleFijadosForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.esEdicion ? "Editar Fijaci\u00F3n de Cacao" : "Nueva Fijaci\u00F3n de Cacao");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showIcon", true)("appendTo", "body");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx.detalleFijadosForm.get("qqFijados")) == null ? null : tmp_12_0.invalid) && (((tmp_12_0 = ctx.detalleFijadosForm.get("qqFijados")) == null ? null : tmp_12_0.dirty) || ((tmp_12_0 = ctx.detalleFijadosForm.get("qqFijados")) == null ? null : tmp_12_0.touched)));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_13_0 = ctx.detalleFijadosForm.get("precio")) == null ? null : tmp_13_0.invalid) && (((tmp_13_0 = ctx.detalleFijadosForm.get("precio")) == null ? null : tmp_13_0.dirty) || ((tmp_13_0 = ctx.detalleFijadosForm.get("precio")) == null ? null : tmp_13_0.touched)));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx.esEdicion ? "Actualizar" : "Registrar")("disabled", ctx.detalleFijadosForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](36, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("visible", ctx.dialogDetalleEnviados);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("modal", true)("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.detalleEnviadosForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.esEdicion ? "Editar QQ Enviados" : "Registro QQ Enviados");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showIcon", true)("appendTo", "body");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_24_0 = ctx.detalleEnviadosForm.get("qqEnviados")) == null ? null : tmp_24_0.invalid) && (((tmp_24_0 = ctx.detalleEnviadosForm.get("qqEnviados")) == null ? null : tmp_24_0.dirty) || ((tmp_24_0 = ctx.detalleEnviadosForm.get("qqEnviados")) == null ? null : tmp_24_0.touched)));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_25_0 = ctx.detalleEnviadosForm.get("custodia")) == null ? null : tmp_25_0.invalid) && (((tmp_25_0 = ctx.detalleEnviadosForm.get("custodia")) == null ? null : tmp_25_0.dirty) || ((tmp_25_0 = ctx.detalleEnviadosForm.get("custodia")) == null ? null : tmp_25_0.touched)));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_26_0 = ctx.detalleEnviadosForm.get("transporte")) == null ? null : tmp_26_0.invalid) && (((tmp_26_0 = ctx.detalleEnviadosForm.get("transporte")) == null ? null : tmp_26_0.dirty) || ((tmp_26_0 = ctx.detalleEnviadosForm.get("transporte")) == null ? null : tmp_26_0.touched)));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx.esEdicion ? "Actualizar" : "Registrar")("disabled", ctx.detalleEnviadosForm.invalid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, primeng_toast__WEBPACK_IMPORTED_MODULE_8__.Toast, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_dialog__WEBPACK_IMPORTED_MODULE_9__.Dialog, primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__.Tooltip, primeng_table__WEBPACK_IMPORTED_MODULE_11__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_11__.SortableColumn, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, primeng_calendar__WEBPACK_IMPORTED_MODULE_13__.Calendar, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputText, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__.ConfirmDialog, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
      styles: [".dialog-header[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.cancel-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n\n.red-text[_ngcontent-%COMP%] {\n  color: red !important;\n  font-weight: bold !important;\n}\n\ninput.red-text[disabled][_ngcontent-%COMP%] {\n  color: red !important;\n  font-weight: bold !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpamFjaW9uZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSw0QkFBQTtBQUNKIiwiZmlsZSI6ImZpamFjaW9uZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYW5jZWwtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ucmVkLXRleHQge1xyXG4gICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXQucmVkLXRleHRbZGlzYWJsZWRdIHtcclxuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL3NlY3JldGFyaWEvZmlqYWNpb25lcy9maWphY2lvbmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsNEJBQUE7QUFDSjtBQUNBLHcxQkFBdzFCIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2FuY2VsLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxufVxyXG5cclxuLnJlZC10ZXh0IHtcclxuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlucHV0LnJlZC10ZXh0W2Rpc2FibGVkXSB7XHJcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 73565:
/*!*************************************************!*\
  !*** ./src/app/demo/service/balance.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BalanceService: () => (/* binding */ BalanceService)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ 31070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);



class BalanceService {
  constructor(http) {
    this.http = http;
  }
  listarBalances() {
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/balance`);
  }
  listarTransaccionesCompraPorBalance(codBalance) {
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/balance/transacciones-compras/${codBalance}`);
  }
  listarTransaccionesVentaPorBalance(codBalance) {
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/balance/transacciones-ventas/${codBalance}`);
  }
  listarGastosPorBalance(codBalance) {
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/balance/otros-gastos/${codBalance}`);
  }
  registrarTransaccion(transaccion) {
    return this.http.post(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/balance/transacciones/registrar`, transaccion);
  }
  obtenerTiposGastos() {
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/balance/tipos-gastos`);
  }
  registrarGasto(gasto) {
    return this.http.post(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/balance/otros-gastos/registrar/`, gasto);
  }
  actualizarRegistro(cod, transaccion) {
    return this.http.put(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/balance/transacciones/actualizar/${cod}`, transaccion);
  }
  actualizarGasto(cod, gasto) {
    return this.http.put(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/balance/gastos/actualizar/${cod}`, gasto);
  }
  eliminarTransaccion(cod) {
    return this.http.delete(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/balance/transacciones/${cod}`);
  }
  eliminarGasto(cod) {
    return this.http.delete(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/balance/gastos/${cod}`);
  }
  static {
    this.ɵfac = function BalanceService_Factory(t) {
      return new (t || BalanceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: BalanceService,
      factory: BalanceService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 44874:
/*!****************************************************!*\
  !*** ./src/app/demo/service/control-ra.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlRaService: () => (/* binding */ ControlRaService)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ 31070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);



class ControlRaService {
  constructor(http) {
    this.http = http;
  }
  registrarTnAsignada(controlRa) {
    return this.http.post(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/controlra/registrar`, controlRa);
  }
  obtenerControles() {
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/controlra`);
  }
  actualizarTnAsignada(id, controlRA) {
    return this.http.put(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/controlra/actualizar/${id}`, controlRA);
  }
  actualizarEstado(id) {
    return this.http.put(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/controlra/estado/${id}`, null);
  }
  registrarContrato(contrato) {
    return this.http.post(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/contratos/registrar`, contrato);
  }
  obtenerContratos() {
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/contratos/listar`);
  }
  obtenerContratosPorLote(lote) {
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/contratos/lote?lote=${lote}`);
  }
  eliminarContrato(id) {
    return this.http.delete(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/contratos/${id}`);
  }
  static {
    this.ɵfac = function ControlRaService_Factory(t) {
      return new (t || ControlRaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ControlRaService,
      factory: ControlRaService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 18290:
/*!****************************************************!*\
  !*** ./src/app/demo/service/fijaciones.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FijacionesService: () => (/* binding */ FijacionesService)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ 31070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);



class FijacionesService {
  constructor(http) {
    this.http = http;
  }
  registrarFijacion() {
    return this.http.post(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/fijaciones/crear`, {});
  }
  registrarDetalle(detalleFijacion) {
    return this.http.post(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/fijaciones/detalle`, detalleFijacion);
  }
  actualizarDetalle(id, detalleFijacion) {
    return this.http.put(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/fijaciones/detalle/${id}`, detalleFijacion);
  }
  obtenerFijaciones() {
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/fijaciones`);
  }
  obtenerDetalleFijacionesId(fijacionId) {
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/fijaciones/detalles/${fijacionId}`);
  }
  registrarCorte(idFijacion) {
    return this.http.post(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/fijaciones/corte/${idFijacion}`, {});
  }
  obtenerobtenerFijacionesPorFecha(fechaInicio, fechaFin) {
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/fijaciones/fecha?desde=${fechaInicio}&hasta=${fechaFin}`);
  }
  eliminarDetalle(id) {
    return this.http.delete(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/fijaciones/detalles/${id}`);
  }
  static {
    this.ɵfac = function FijacionesService_Factory(t) {
      return new (t || FijacionesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: FijacionesService,
      factory: FijacionesService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_Administrador_administrador_module_ts.js.map