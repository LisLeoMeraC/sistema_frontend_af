"use strict";
(self["webpackChunksakai"] = self["webpackChunksakai"] || []).push([["src_app_demo_components_secretaria_secretaria_module_ts"],{

/***/ 30575:
/*!***********************************************************************************!*\
  !*** ./src/app/demo/components/secretaria/compra-cacao/compra-cacao.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompraCacaoComponent: () => (/* binding */ CompraCacaoComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 63617);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 52575);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ 2752);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf-autotable */ 78198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var src_app_demo_service_compra_cacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/demo/service/compra-cacao.service */ 6785);
/* harmony import */ var src_app_demo_service_cliente_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/demo/service/cliente.service */ 4771);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/selectbutton */ 69656);





















const _c0 = () => ({
  width: "450px"
});
const _c1 = () => ({
  width: "85vw"
});
const _c2 = () => ({
  width: "520px"
});
function CompraCacaoComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Hora");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Tipo de Cacao");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Libras");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CompraCacaoComponent_ng_template_25_small_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cacao_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" CI: ", (cacao_r2.cliente == null ? null : cacao_r2.cliente.cedula) || cacao_r2.cedula, " ");
  }
}
function CompraCacaoComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td")(5, "div", 85)(6, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CompraCacaoComponent_ng_template_25_small_8_Template, 2, 1, "small", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td")(10, "div", 88)(11, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "small", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "lb");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "td", 95)(23, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompraCacaoComponent_ng_template_25_Template_button_click_23_listener() {
      const cacao_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.confirmDeleteCompra(cacao_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const cacao_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 6, cacao_r2.fechaCompra, "HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", cacao_r2.tipoCliente.id === 1 ? (cacao_r2.cliente == null ? null : cacao_r2.cliente.nombres) + " " + (cacao_r2.cliente == null ? null : cacao_r2.cliente.apellidos) : "Consumidor Final", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (cacao_r2.cliente == null ? null : cacao_r2.cliente.cedula) || cacao_r2.cedula);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](cacao_r2.tipoCacao.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", cacao_r2.cantidadLibras, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](21, 9, cacao_r2.totalPagado, "USD"), " ");
  }
}
function CompraCacaoComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " No hay compras registradas hoy. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function CompraCacaoComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Categor\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Inversi\u00F3n Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function CompraCacaoComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const total_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](total_r4.tipoCacao);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](5, 2, total_r4.totalDolares, "USD"), " ");
  }
}
function CompraCacaoComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Sin datos disponibles.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function CompraCacaoComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 104)(1, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div")(4, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Nueva Compra");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Ingrese los detalles de la adquisici\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function CompraCacaoComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 109)(1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "small", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompraCacaoComponent_div_48_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.displayClienteSearchDialog = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx_r2.clienteSeleccionado.nombres, " ", ctx_r2.clienteSeleccionado.apellidos, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("CI: ", ctx_r2.clienteSeleccionado.cedula, "");
  }
}
function CompraCacaoComponent_ng_template_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 104)(1, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div")(4, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Historial de Compras de Cacao");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Filtrado por fecha y auditor\u00EDa detallada");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function CompraCacaoComponent_ng_template_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Fecha y Hora");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Variedad");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Libras");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Efectivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Transf.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Total $");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function CompraCacaoComponent_ng_template_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 95)(5, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cacao_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 7, cacao_r6.fechaCompra, "yyyy-MM-dd HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", cacao_r6.tipoCliente.id === 1 ? (cacao_r6.cliente == null ? null : cacao_r6.cliente.nombres) + " " + (cacao_r6.cliente == null ? null : cacao_r6.cliente.apellidos) : "Consumidor Final", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](cacao_r6.tipoCacao.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](cacao_r6.cantidadLibras);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](13, 10, cacao_r6.pagoEfectivo, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](16, 13, cacao_r6.pagoTransferencia, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](19, 16, cacao_r6.totalPagado, "USD"));
  }
}
function CompraCacaoComponent_ng_template_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "No se encontraron registros para la fecha seleccionada.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function CompraCacaoComponent_ng_template_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 104)(1, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div")(4, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Seleccionar Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Busque por nombre, apellido o c\u00E9dula");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function CompraCacaoComponent_span_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CompraCacaoComponent_div_120_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompraCacaoComponent_div_120_div_1_Template_div_click_0_listener() {
      const c_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.seleccionarCliente(c_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div")(2, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", c_r8.nombres, " ", c_r8.apellidos, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("CI: ", c_r8.cedula, " \u00A0\u00B7\u00A0 ", c_r8.recinto == null ? null : c_r8.recinto.nombreRecinto, "");
  }
}
function CompraCacaoComponent_div_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CompraCacaoComponent_div_120_div_1_Template, 7, 4, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.clientesBuscados);
  }
}
function CompraCacaoComponent_div_121_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " No se encontraron clientes con ese criterio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CompraCacaoComponent_div_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Escriba al menos 2 caracteres para buscar. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CompraCacaoComponent_ng_template_123_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompraCacaoComponent_ng_template_123_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.cancelarSeleccionCliente());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class CompraCacaoComponent {
  constructor(messageService, fb, compraCacaoService, confirmationService, clienteService, datePipe) {
    this.messageService = messageService;
    this.fb = fb;
    this.compraCacaoService = compraCacaoService;
    this.confirmationService = confirmationService;
    this.clienteService = clienteService;
    this.datePipe = datePipe;
    this.displayModalCompraCacao = false;
    this.displayModalCompraCacaoTodas = false;
    this.displayClienteSearchDialog = false;
    this.tipoClientes = [];
    this.tiposCacao = [];
    this.comprasCacao = [];
    this.comprasCacaoTodas = [];
    this.totalCacao = [];
    this.loading = false;
    // Cliente seleccionado cuando es "Cliente Registrado"
    this.clienteSeleccionado = null;
    this.clientesBuscados = [];
    this.totalClientesBuscados = 0;
    this.pageClientes = 0;
    this.rowsClientes = 8;
    this.terminoBusqueda = '';
    this.buscandoCliente = false;
    this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.registerFormCompraCacao = this.fb.group({
      tipoCliente: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      tipoCacao: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      fechaCompra: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      cantidadLibras: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      precioPorQuintal: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      totalPagado: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      pagoEfectivo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      pagoTransferencia: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
    this.searchForm = this.fb.group({
      fecha: [null]
    });
  }
  ngOnInit() {
    this.tipoClientes = [{
      name: 'Cliente Registrado',
      value: 1
    }, {
      name: 'Consumidor Final',
      value: 2
    }];
    this.obtenerComprasCacaoToday();
    this.obtenerTotalTipoCacaoToday();
    this.onTotalPagadoChange();
    this.onCalcularTotalChange();
    // Debounce para búsqueda de clientes
    this.searchSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(350)).subscribe(term => {
      if (term.trim().length >= 2) {
        this.ejecutarBusquedaCliente(term.trim());
      } else if (term.trim().length === 0) {
        // Al borrar completamente el buscador, restablecer la lista inicial
        this.pageClientes = 0;
        this.cargarClientesPagina(0);
      } else {
        this.clientesBuscados = [];
      }
    });
  }
  // ─── TIPO CLIENTE ──────────────────────────────────────────────────────────
  onTipoClienteChange(event) {
    const valor = event?.value?.value;
    if (valor === 1) {
      this.clienteSeleccionado = null;
      this.abrirDialogClientes();
    } else {
      this.clienteSeleccionado = null;
    }
  }
  abrirDialogClientes() {
    this.terminoBusqueda = '';
    this.pageClientes = 0;
    this.cargarClientesPagina(0);
    this.displayClienteSearchDialog = true;
  }
  cargarClientesPagina(page) {
    this.buscandoCliente = true;
    this.clienteService.obtenerClientesPaginados(page, this.rowsClientes).subscribe(data => {
      this.clientesBuscados = data.content || [];
      this.totalClientesBuscados = data.totalElements || 0;
      this.buscandoCliente = false;
    }, () => {
      this.buscandoCliente = false;
    });
  }
  // ─── BÚSQUEDA DE CLIENTES ─────────────────────────────────────────────────
  onTerminoChange() {
    this.searchSubject.next(this.terminoBusqueda);
  }
  ejecutarBusquedaCliente(term) {
    this.buscandoCliente = true;
    const esCedula = /^\d+$/.test(term);
    const obs = esCedula ? this.clienteService.buscarClientesPorCodigoPaginado(term, 0, this.rowsClientes) : this.clienteService.buscarClientesPorNombreApellidoPaginado(term, 0, this.rowsClientes);
    obs.subscribe(data => {
      this.clientesBuscados = Array.isArray(data) ? data : data.content || [];
      this.totalClientesBuscados = Array.isArray(data) ? data.length : data.totalElements || 0;
      this.buscandoCliente = false;
    }, () => {
      this.clientesBuscados = [];
      this.totalClientesBuscados = 0;
      this.buscandoCliente = false;
    });
  }
  onPageClientes(event) {
    this.pageClientes = event.first / event.rows;
    this.rowsClientes = event.rows;
    if (this.terminoBusqueda.trim().length >= 2) {
      this.ejecutarBusquedaCliente(this.terminoBusqueda.trim());
    } else {
      this.cargarClientesPagina(this.pageClientes);
    }
  }
  seleccionarCliente(cliente) {
    this.clienteSeleccionado = cliente;
    this.displayClienteSearchDialog = false;
    this.terminoBusqueda = '';
    this.clientesBuscados = [];
  }
  cancelarSeleccionCliente() {
    this.clienteSeleccionado = null;
    this.terminoBusqueda = '';
    this.clientesBuscados = [];
    this.displayClienteSearchDialog = false;
    this.registerFormCompraCacao.patchValue({
      tipoCliente: null
    });
  }
  // ─── SUBMIT ────────────────────────────────────────────────────────────────
  onSubmitCompraCacao() {
    if (this.registerFormCompraCacao.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Por favor, completa todos los campos obligatorios.'
      });
      return;
    }
    const formValue = this.registerFormCompraCacao.value;
    const esClienteRegistrado = formValue.tipoCliente?.value === 1;
    if (esClienteRegistrado && !this.clienteSeleccionado) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Advertencia',
        detail: 'Debe seleccionar un cliente registrado.'
      });
      this.displayClienteSearchDialog = true;
      return;
    }
    const fechaCompra = new Date(formValue.fechaCompra);
    const compraCacao = {
      tipoCliente: {
        id: formValue.tipoCliente.value
      },
      tipoCacao: {
        id: formValue.tipoCacao.id
      },
      fechaCompra: this.formatearFechaLocal(fechaCompra),
      cantidadLibras: parseFloat(formValue.cantidadLibras),
      precioPorQuintal: parseFloat(formValue.precioPorQuintal),
      totalPagado: parseFloat(formValue.totalPagado),
      pagoEfectivo: parseFloat(formValue.pagoEfectivo),
      pagoTransferencia: parseFloat(formValue.pagoTransferencia)
    };
    // Envelope: siempre envía compraCacao; clienteId solo si es cliente registrado
    const payload = {
      compraCacao
    };
    if (esClienteRegistrado && this.clienteSeleccionado) {
      payload.clienteId = this.clienteSeleccionado.id;
    }
    console.log('Payload enviado:', JSON.stringify(payload));
    this.compraCacaoService.registrarCompraCacao(payload).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Compra registrada correctamente.'
        });
        this.closeModalCompraCacaoDialog();
        this.obtenerComprasCacaoToday();
        this.obtenerTotalTipoCacaoToday();
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Ocurrió un error al registrar la compra.'
        });
      }
    });
  }
  // ─── MODAL ────────────────────────────────────────────────────────────────
  showCompraCacaoModalDialog() {
    this.registerFormCompraCacao.patchValue({
      fechaCompra: new Date(),
      pagoTransferencia: 0.0
    });
    this.clienteSeleccionado = null;
    this.displayModalCompraCacao = true;
    this.obtenerTiposCacao();
  }
  closeModalCompraCacaoDialog() {
    this.displayModalCompraCacao = false;
    this.clienteSeleccionado = null;
    this.registerFormCompraCacao.reset();
  }
  // ─── AUXILIARES ───────────────────────────────────────────────────────────
  onTotalPagadoChange() {
    const ctrl = this.registerFormCompraCacao.get('totalPagado');
    if (ctrl) {
      ctrl.valueChanges.subscribe(value => {
        this.registerFormCompraCacao.patchValue({
          pagoEfectivo: value || 0,
          pagoTransferencia: 0.0
        }, {
          emitEvent: false
        });
      });
    }
  }
  onCalcularTotalChange() {
    const libras = this.registerFormCompraCacao.get('cantidadLibras');
    const precio = this.registerFormCompraCacao.get('precioPorQuintal');
    if (libras && precio) {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(libras.valueChanges, precio.valueChanges).subscribe(() => {
        const qLibras = parseFloat(libras.value) || 0;
        const qPrecio = parseFloat(precio.value) || 0;
        // Conversión: 100 lb = 1 QQ
        const total = qLibras / 100 * qPrecio;
        if (total > 0) {
          this.registerFormCompraCacao.patchValue({
            totalPagado: total.toFixed(2)
          }, {
            emitEvent: true
          });
        }
      });
    }
  }
  eliminarCompra(compraCacao) {
    this.compraCacaoService.eliminarCompraCacao(compraCacao.id).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Registro de compra eliminado correctamente'
      });
      this.obtenerComprasCacaoToday();
      this.obtenerTotalTipoCacaoToday();
    }, () => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Error al eliminar el registro'
      });
    });
  }
  confirmDeleteCompra(compraCacao) {
    this.confirmationService.confirm({
      key: 'confirm',
      message: `¿Estás seguro de que deseas eliminar este registro?`,
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      rejectLabel: 'No',
      accept: () => {
        this.eliminarCompra(compraCacao);
      }
    });
  }
  openDialogTodasCompras() {
    this.displayModalCompraCacaoTodas = true;
  }
  closeDialogTodasCompras() {
    this.displayModalCompraCacaoTodas = false;
    this.limpiarForm();
  }
  obtenerTiposCacao() {
    this.compraCacaoService.obtenerTiposCacao().subscribe(data => {
      this.tiposCacao = data;
    });
  }
  obtenerComprasCacaoToday() {
    this.compraCacaoService.obtenerComprasCacao().subscribe(data => {
      this.comprasCacao = data;
    }, error => {
      console.log(error);
    });
  }
  obtenerTotalTipoCacaoToday() {
    this.compraCacaoService.obtenerTotalTipoCacaoToday().subscribe(data => {
      this.totalCacao = data;
    }, error => {
      console.log(error);
    });
  }
  generarReportePDF() {
    const doc = new jspdf__WEBPACK_IMPORTED_MODULE_0__.jsPDF();
    const dateStr = this.datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm');
    const fileNameDate = this.datePipe.transform(new Date(), 'yyyyMMdd');
    // --- CONFIGURACIÓN DE COLORES ---
    const primaryColor = [27, 94, 32]; // Verde Bosque (AgroFranco)
    const secondaryColor = [52, 152, 219]; // Azul Informática
    const accentColor = [241, 196, 15]; // Amarillo Oro
    // --- ENCABEZADO PREMIUM ---
    // Rectángulo decorativo superior
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(0, 0, 210, 40, 'F');
    // Logo / Título
    doc.setFontSize(28);
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.text('AGROFRANCO', 105, 22, {
      align: 'center'
    });
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('SISTEMA DE GESTIÓN DE COMPRAS - COCOA CENTER', 105, 30, {
      align: 'center'
    });
    // Cuadro de Información del Reporte (Derecha)
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(140, 45, 55, 25, 3, 3, 'FD');
    doc.setTextColor(0);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text('FECHA DE REPORTE', 145, 52);
    doc.setFont('helvetica', 'normal');
    doc.text(this.datePipe.transform(new Date(), 'dd/MM/yyyy') || '', 145, 58);
    doc.setFont('helvetica', 'bold');
    doc.text('HORA:', 145, 64);
    doc.setFont('helvetica', 'normal');
    doc.text(this.datePipe.transform(new Date(), 'HH:mm:ss') || '', 157, 64);
    // Título del Cuerpo
    doc.setFontSize(16);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont('helvetica', 'bold');
    doc.text('REPORTE DIARIO DE ADQUISICIONES', 20, 60);
    doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setLineWidth(1);
    doc.line(20, 63, 110, 63);
    // --- SECCIÓN 1: CONSOLIDADO POR VARIEDAD (Libras y Quintales) ---
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text('1. CONSOLIDADO DE INVERSIÓN POR CATEGORÍA', 20, 75);
    // Agrupamos manualmente para asegurar precisión en libras y QQ
    const resumenMap = new Map();
    this.comprasCacao.forEach(compra => {
      const cat = compra.tipoCacao.nombre;
      if (!resumenMap.has(cat)) {
        resumenMap.set(cat, {
          libras: 0,
          dolares: 0
        });
      }
      const data = resumenMap.get(cat);
      data.libras += compra.cantidadLibras;
      data.dolares += compra.totalPagado;
    });
    const summaryData = Array.from(resumenMap.entries()).map(([nombre, data]) => [nombre || '', `${data.libras.toFixed(2)} lb`, `${(data.libras / 100).toFixed(2)} QQ`, `$ ${data.dolares.toFixed(2)}`]);
    (0,jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__["default"])(doc, {
      startY: 80,
      head: [['Variedad', 'Total Libras', 'Total Quintales (QQ)', 'Inversión Total']],
      body: summaryData,
      theme: 'striped',
      headStyles: {
        fillColor: primaryColor,
        halign: 'center'
      },
      columnStyles: {
        1: {
          halign: 'center'
        },
        2: {
          halign: 'center',
          fontStyle: 'bold'
        },
        3: {
          halign: 'right',
          fontStyle: 'bold'
        }
      },
      margin: {
        left: 20,
        right: 20
      }
    });
    // --- SECCIÓN 2: DETALLE DE COMPRAS ---
    const finalY = doc.lastAutoTable.finalY + 15;
    doc.setFontSize(12);
    doc.text('2. DETALLE CRONOLÓGICO DE COMPRAS', 20, finalY);
    const detailData = this.comprasCacao.map(item => {
      const nombreCliente = item.tipoCliente.id === 1 ? `${item.cliente?.nombres || ''} ${item.cliente?.apellidos || ''}`.trim() : 'Consumidor Final';
      return [this.datePipe.transform(item.fechaCompra, 'HH:mm') || '', nombreCliente || '', item.tipoCacao.nombre || '', `${item.cantidadLibras} lb`, `${(item.cantidadLibras / 100).toFixed(2)} QQ`, `$ ${item.totalPagado.toFixed(2)}`];
    });
    (0,jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__["default"])(doc, {
      startY: finalY + 5,
      head: [['Hora', 'Cliente', 'Variedad', 'Libras', 'QQ', 'Total Pago']],
      body: detailData,
      theme: 'grid',
      headStyles: {
        fillColor: secondaryColor
      },
      columnStyles: {
        0: {
          halign: 'center'
        },
        3: {
          halign: 'center'
        },
        4: {
          halign: 'center'
        },
        5: {
          halign: 'right'
        }
      },
      margin: {
        left: 20,
        right: 20
      }
    });
    // --- TOTALES GENERALES ---
    const finalYDetails = doc.lastAutoTable.finalY + 10;
    const totalLibrasVal = this.comprasCacao.reduce((acc, curr) => acc + curr.cantidadLibras, 0);
    const totalDineroVal = this.comprasCacao.reduce((acc, curr) => acc + curr.totalPagado, 0);
    // Cuadro de totales
    doc.setFillColor(245, 245, 245);
    doc.rect(130, finalYDetails, 60, 22, 'F');
    doc.setDrawColor(200);
    doc.rect(130, finalYDetails, 60, 22, 'S');
    doc.setFontSize(9);
    doc.setTextColor(50);
    doc.text('TOTAL LIBRAS:', 135, finalYDetails + 7);
    doc.text('TOTAL QUINTALES:', 135, finalYDetails + 13);
    doc.text('TOTAL INVERSIÓN:', 135, finalYDetails + 19);
    doc.setTextColor(0);
    doc.setFont('helvetica', 'bold');
    doc.text(`${totalLibrasVal.toFixed(2)} lb`, 185, finalYDetails + 7, {
      align: 'right'
    });
    doc.text(`${(totalLibrasVal / 100).toFixed(2)} QQ`, 185, finalYDetails + 13, {
      align: 'right'
    });
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(`$ ${totalDineroVal.toFixed(2)}`, 185, finalYDetails + 19, {
      align: 'right'
    });
    // --- FIRMAS DE RESPONSABILIDAD ---
    const signatureY = finalYDetails + 45;
    doc.setDrawColor(100);
    doc.line(40, signatureY, 90, signatureY);
    doc.line(120, signatureY, 170, signatureY);
    doc.setFontSize(9);
    doc.setTextColor(100);
    doc.setFont('helvetica', 'normal');
    doc.text('Firma Encargado', 65, signatureY + 5, {
      align: 'center'
    });
    doc.text('Firma Gerencia', 145, signatureY + 5, {
      align: 'center'
    });
    // --- PIE DE PÁGINA ---
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(150);
      const footerText = `Generado por AGROFRANCO - Sistema Cocoa - Página ${i} de ${pageCount}`;
      doc.text(footerText, 105, 285, {
        align: 'center'
      });
    }
    doc.save(`Reporte_AgroFranco_${fileNameDate}.pdf`);
  }
  generarReporteHistorialPDF() {
    const doc = new jspdf__WEBPACK_IMPORTED_MODULE_0__.jsPDF();
    // Determinar fecha para el reporte
    const fechaForm = this.searchForm.get('fecha')?.value;
    const fechaReporte = fechaForm ? new Date(fechaForm) : new Date();
    const dateStr = this.datePipe.transform(fechaReporte, 'dd/MM/yyyy');
    const fileNameDate = this.datePipe.transform(new Date(), 'yyyyMMdd_HHmmss');
    // --- CONFIGURACIÓN DE COLORES ---
    const primaryColor = [27, 94, 32]; // Verde Bosque (AgroFranco)
    const secondaryColor = [52, 152, 219]; // Azul Informática
    // --- ENCABEZADO PREMIUM ---
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(0, 0, 210, 40, 'F');
    doc.setFontSize(28);
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.text('AGROFRANCO', 105, 22, {
      align: 'center'
    });
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('SISTEMA DE GESTIÓN DE COMPRAS - HISTORIAL DE CACAO', 105, 30, {
      align: 'center'
    });
    // Cuadro de Información del Reporte
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(140, 45, 55, 25, 3, 3, 'FD');
    doc.setTextColor(0);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text('FECHA CONSULTA', 145, 52);
    doc.setFont('helvetica', 'normal');
    doc.text(dateStr || '', 145, 58);
    doc.setFont('helvetica', 'bold');
    doc.text('REGISTROS:', 145, 64);
    doc.setFont('helvetica', 'normal');
    doc.text(this.comprasCacaoTodas.length.toString(), 168, 64);
    // Título del Cuerpo
    doc.setFontSize(16);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont('helvetica', 'bold');
    doc.text('REPORTE DE HISTORIAL DE COMPRAS', 20, 60);
    doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setLineWidth(1);
    doc.line(20, 63, 130, 63);
    // --- SECCIÓN 1: CONSOLIDADO POR VARIEDAD ---
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text('1. CONSOLIDADO DE INVERSIÓN POR CATEGORÍA', 20, 75);
    const resumenMap = new Map();
    this.comprasCacaoTodas.forEach(compra => {
      const cat = compra.tipoCacao.nombre;
      if (!resumenMap.has(cat)) {
        resumenMap.set(cat, {
          libras: 0,
          dolares: 0
        });
      }
      const data = resumenMap.get(cat);
      data.libras += compra.cantidadLibras;
      data.dolares += compra.totalPagado;
    });
    const summaryData = Array.from(resumenMap.entries()).map(([nombre, data]) => [nombre || '', `${data.libras.toFixed(2)} lb`, `${(data.libras / 100).toFixed(2)} QQ`, `$ ${data.dolares.toFixed(2)}`]);
    (0,jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__["default"])(doc, {
      startY: 80,
      head: [['Variedad', 'Total Libras', 'Total Quintales (QQ)', 'Inversión Total']],
      body: summaryData,
      theme: 'striped',
      headStyles: {
        fillColor: primaryColor,
        halign: 'center'
      },
      columnStyles: {
        1: {
          halign: 'center'
        },
        2: {
          halign: 'center',
          fontStyle: 'bold'
        },
        3: {
          halign: 'right',
          fontStyle: 'bold'
        }
      },
      margin: {
        left: 20,
        right: 20
      }
    });
    // --- SECCIÓN 2: DETALLE DE COMPRAS ---
    const finalY = doc.lastAutoTable.finalY + 15;
    doc.setFontSize(12);
    doc.text('2. DETALLE CRONOLÓGICO DE COMPRAS', 20, finalY);
    const detailData = this.comprasCacaoTodas.map(item => {
      const nombreCliente = item.tipoCliente.id === 1 ? `${item.cliente?.nombres || ''} ${item.cliente?.apellidos || ''}`.trim() : 'Consumidor Final';
      return [this.datePipe.transform(item.fechaCompra, 'dd/MM/yyyy HH:mm') || '', nombreCliente || '', item.tipoCacao.nombre || '', `${item.cantidadLibras} lb`, `$${item.totalPagado.toFixed(2)}`];
    });
    (0,jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__["default"])(doc, {
      startY: finalY + 5,
      head: [['Fecha/Hora', 'Cliente', 'Variedad', 'Libras', 'Total Pago']],
      body: detailData,
      theme: 'grid',
      headStyles: {
        fillColor: secondaryColor,
        halign: 'center'
      },
      columnStyles: {
        0: {
          halign: 'center'
        },
        2: {
          halign: 'center'
        },
        3: {
          halign: 'center'
        },
        4: {
          halign: 'right',
          textColor: primaryColor,
          fontStyle: 'bold'
        }
      },
      margin: {
        left: 20,
        right: 20
      }
    });
    // --- TOTALES GENERALES ---
    const finalYDetails = doc.lastAutoTable.finalY + 10;
    const totalLibrasVal = this.comprasCacaoTodas.reduce((acc, curr) => acc + curr.cantidadLibras, 0);
    const totalDineroVal = this.comprasCacaoTodas.reduce((acc, curr) => acc + curr.totalPagado, 0);
    doc.setFillColor(245, 245, 245);
    doc.rect(130, finalYDetails, 60, 22, 'F');
    doc.setDrawColor(200);
    doc.rect(130, finalYDetails, 60, 22, 'S');
    doc.setFontSize(9);
    doc.setTextColor(50);
    doc.text('TOTAL LIBRAS:', 135, finalYDetails + 7);
    doc.text('TOTAL QUINTALES:', 135, finalYDetails + 13);
    doc.text('TOTAL INVERSIÓN:', 135, finalYDetails + 19);
    doc.setTextColor(0);
    doc.setFont('helvetica', 'bold');
    doc.text(`${totalLibrasVal.toFixed(2)} lb`, 185, finalYDetails + 7, {
      align: 'right'
    });
    doc.text(`${(totalLibrasVal / 100).toFixed(2)} QQ`, 185, finalYDetails + 13, {
      align: 'right'
    });
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(`$ ${totalDineroVal.toFixed(2)}`, 185, finalYDetails + 19, {
      align: 'right'
    });
    // --- FIRMAS DE RESPONSABILIDAD ---
    const signatureY = finalYDetails + 45;
    doc.setDrawColor(100);
    doc.line(40, signatureY, 90, signatureY);
    doc.line(120, signatureY, 170, signatureY);
    doc.setFontSize(9);
    doc.setTextColor(100);
    doc.setFont('helvetica', 'normal');
    doc.text('Firma Encargado', 65, signatureY + 5, {
      align: 'center'
    });
    doc.text('Firma Gerencia', 145, signatureY + 5, {
      align: 'center'
    });
    // --- PIE DE PÁGINA ---
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(150);
      const footerText = `Generado por AGROFRANCO - Sistema Cocoa - Página ${i} de ${pageCount}`;
      doc.text(footerText, 105, 285, {
        align: 'center'
      });
    }
    doc.save(`Reporte_Historial_Compras_${fileNameDate}.pdf`);
  }
  cargarComprasCacaoFecha() {
    const fecha = this.searchForm.get('fecha')?.value;
    const formattedFecha = this.datePipe.transform(fecha, 'yyyy-MM-dd') || '';
    this.loading = true;
    this.compraCacaoService.obtenerComprasCacaoFecha(formattedFecha).subscribe(data => {
      this.comprasCacaoTodas = data;
      this.loading = false;
    }, error => {
      console.error('Error al obtener las compras:', error);
      this.loading = false;
    });
  }
  limpiarForm() {
    this.searchForm.reset();
    this.obtenerComprasCacaoToday();
  }
  formatearFechaLocal(fecha) {
    const pad = n => n.toString().padStart(2, '0');
    return `${fecha.getFullYear()}-${pad(fecha.getMonth() + 1)}-${pad(fecha.getDate())}` + `T${pad(fecha.getHours())}:${pad(fecha.getMinutes())}:${pad(fecha.getSeconds())}`;
  }
  static {
    this.ɵfac = function CompraCacaoComponent_Factory(t) {
      return new (t || CompraCacaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_9__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_demo_service_compra_cacao_service__WEBPACK_IMPORTED_MODULE_2__.CompraCacaoService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_9__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_demo_service_cliente_service__WEBPACK_IMPORTED_MODULE_3__.ClienteService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: CompraCacaoComponent,
      selectors: [["app-compra-cacao"]],
      decls: 124,
      vars: 46,
      consts: [["key", "confirm", "border", "none"], [1, "grid"], [1, "col-12"], [1, "card", "p-4", "border-none", "shadow-premium", "mb-4", "flex", "align-items-center", "justify-content-between", "bg-white", "overflow-hidden", "relative", 2, "border-radius", "1.25rem"], [1, "flex", "align-items-center", "relative", "z-1"], [1, "p-3", "border-round-xl", "bg-orange-50", "mr-4", "shadow-sm"], [1, "pi", "pi-shopping-bag", "text-orange-600", "text-3xl"], [1, "m-0", "font-bold", "text-900", "line-height-2", "tracking-tight"], [1, "m-0", "text-600", "font-medium", "opacity-70"], [1, "flex", "gap-3", "relative", "z-1"], ["pButton", "", "pRipple", "", "label", "Nueva Compra", "icon", "pi pi-plus", 1, "p-button-primary", "px-4", "py-2", "border-round-xl", "shadow-md", "font-bold", 3, "click"], ["pButton", "", "pRipple", "", "label", "Historial Completo", "icon", "pi pi-history", 1, "p-button-warning", "px-4", "py-2", "border-round-xl", "shadow-md", "font-bold", 3, "click"], [1, "absolute", "-top-10", "-right-10", "bg-orange-50", "border-circle", "opacity-50", 2, "width", "250px", "height", "250px"], [1, "col-12", "xl:col-7"], [1, "card", "border-none", "shadow-2", "border-round-xl", "p-3"], [1, "flex", "align-items-center", "mb-3", 2, "border-left", "4px solid var(--primary-color)", "padding-left", "0.85rem"], [1, "m-0", "font-bold", "text-900", 2, "font-size", "1rem"], ["styleClass", "p-datatable-sm p-datatable-gridlines", "responsiveLayout", "scroll", 3, "value", "rows", "rowHover", "paginator"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "col-12", "xl:col-5"], [1, "card", "border-none", "shadow-2", "border-round-xl", "p-3", "h-full", "flex", "flex-column"], [1, "flex", "align-items-center", "mb-3", 2, "border-left", "4px solid var(--green-500)", "padding-left", "0.85rem"], ["styleClass", "p-datatable-sm p-datatable-gridlines mb-3", 3, "value"], [1, "mt-auto", "surface-50", "p-3", "border-round-lg", "border-1", "border-200"], [1, "text-500", "m-0", "mb-3", "text-sm", "line-height-3"], [1, "pi", "pi-file-pdf", "mr-1"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-file-pdf", "label", "Generar Reporte PDF", 1, "p-button-danger", "w-full", "shadow-2", "border-round-lg", "font-bold", 3, "click"], ["styleClass", "border-round-xl shadow-5 overflow-hidden", 3, "visibleChange", "visible", "modal", "closable"], [1, "p-fluid", 3, "ngSubmit", "formGroup"], [1, "field", "mb-4"], [1, "font-bold", "text-700", "block", "mb-2"], ["optionLabel", "name", "formControlName", "tipoCliente", "styleClass", "w-full", 3, "onChange", "options"], ["class", "mt-2 p-2 border-round-lg surface-100 border-1 border-primary flex align-items-center justify-content-between", 4, "ngIf"], [1, "field", "col-12", "md:col-6", "mb-2"], [1, "font-semibold", "text-700", "block", "mb-1", 2, "font-size", "0.85rem"], ["formControlName", "fechaCompra", "dateFormat", "dd/mm/yy", "hourFormat", "24", "styleClass", "border-round-lg", 3, "showIcon", "showTime", "appendTo"], ["optionLabel", "nombre", "formControlName", "tipoCacao", "placeholder", "Variedad...", "styleClass", "border-round-lg", 3, "options", "showClear", "appendTo"], [1, "p-inputgroup"], [1, "p-inputgroup-addon"], [1, "pi", "pi-tag"], ["pInputText", "", "formControlName", "cantidadLibras", "placeholder", "0"], [1, "pi", "pi-money-bill"], ["pInputText", "", "formControlName", "precioPorQuintal", "placeholder", "0.00"], [1, "field", "col-12", "mb-3"], [1, "font-bold", "text-primary", "block", "mb-1", 2, "font-size", "0.9rem"], [1, "p-inputgroup-addon", "bg-primary", "text-white", "border-primary"], [1, "pi", "pi-dollar"], ["pInputText", "", "formControlName", "totalPagado", "placeholder", "0.00", 1, "font-bold", "text-lg"], [1, "field", "col-6", "mb-2"], [1, "font-semibold", "text-700", "block", "mb-1", 2, "font-size", "0.82rem"], ["pInputText", "", "formControlName", "pagoEfectivo", "placeholder", "0.00"], ["pInputText", "", "formControlName", "pagoTransferencia", "placeholder", "0.00"], [1, "flex", "justify-content-end", "gap-2", "mt-4", "pt-3", "border-top-1", "surface-border"], ["pButton", "", "pRipple", "", "type", "button", "label", "Cancelar", "icon", "pi pi-times", 1, "p-button-text", "p-button-secondary", 3, "click"], ["pButton", "", "pRipple", "", "type", "submit", "label", "Guardar Registro", "icon", "pi pi-save", 1, "p-button-primary", "shadow-2", "border-round-lg"], ["styleClass", "border-round-xl shadow-5", 3, "visibleChange", "visible", "modal", "closable"], [1, "p-1"], [1, "surface-50", "p-3", "border-round-xl", "border-1", "border-200", "mb-3"], [1, "grid", "p-fluid", "align-items-center", 3, "formGroup"], [1, "field", "col-12", "md:col-4", "mb-0"], [1, "font-bold", "text-700", "mb-1", "block"], [1, "pi", "pi-calendar"], ["formControlName", "fecha", "dateFormat", "dd/mm/yy", 3, "showIcon", "appendTo"], [1, "field", "col-12", "md:col-2", "mb-0", "pt-4"], ["pButton", "", "pRipple", "", "type", "button", "label", "Consultar", "icon", "pi pi-search", 1, "p-button-primary", "border-round-lg", "shadow-1", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "label", "Limpiar", "icon", "pi pi-refresh", 1, "p-button-outlined", "p-button-secondary", "border-round-lg", 3, "click"], [1, "field", "col-12", "md:col-4", "mb-0", "pt-4"], ["pButton", "", "pRipple", "", "type", "button", "label", "Exportar PDF", "icon", "pi pi-file-pdf", 1, "p-button-danger", "border-round-lg", "shadow-1", 3, "click", "disabled"], ["styleClass", "p-datatable-sm p-datatable-gridlines", 3, "value", "rows", "rowHover", "paginator", "loading"], [1, "p-fluid"], [1, "p-inputgroup", "mb-3"], [1, "pi", "pi-search"], ["pInputText", "", "placeholder", "Nombre, apellido o c\u00E9dula...", 3, "ngModelChange", "input", "ngModel"], ["class", "p-inputgroup-addon", 4, "ngIf"], ["style", "max-height: 280px; overflow-y: auto;", 4, "ngIf"], ["class", "text-center text-500 py-3", 4, "ngIf"], ["class", "text-center text-400 py-3 text-sm", 4, "ngIf"], ["pTemplate", "footer"], [1, "text-center", 2, "width", "80px"], [1, "text-center", 2, "width", "100px"], [1, "text-right", 2, "width", "130px"], [1, "text-center", 2, "width", "60px"], [1, "text-center", "text-700", "font-medium"], [1, "flex", "flex-column"], [1, "font-bold", "text-900", 2, "font-size", "0.9rem"], ["class", "text-500", 4, "ngIf"], [1, "flex", "align-items-center", "gap-2"], [1, "flex", "align-items-center", "justify-content-center", "border-round", "bg-primary-50", 2, "width", "24px", "height", "24px"], [1, "pi", "pi-tag", "text-primary", "text-xs"], [1, "font-medium", "text-900"], [1, "text-center", "font-bold", "text-700"], [1, "text-500", "font-normal"], [1, "text-right", "font-bold", "text-primary"], [1, "text-center"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-trash", 1, "p-button-rounded", "p-button-danger", "p-button-text", "p-button-sm", 2, "width", "2rem", "height", "2rem", 3, "click"], [1, "text-500"], ["colspan", "6", 1, "text-center", "text-500", "py-4"], [1, "pi", "pi-inbox", "text-3xl", "mb-2", "block"], [1, "text-right"], [1, "font-medium", "text-700"], [1, "text-right", "font-bold", "text-green-600"], ["colspan", "2", 1, "text-center", "text-500", "py-3"], [1, "flex", "align-items-center", "gap-3"], [1, "p-2", "border-round-lg", "bg-primary-50"], [1, "pi", "pi-cart-plus", "text-primary", "text-xl"], [1, "font-bold", "text-900", 2, "font-size", "1.05rem"], [1, "text-500", 2, "font-size", "0.8rem"], [1, "mt-2", "p-2", "border-round-lg", "surface-100", "border-1", "border-primary", "flex", "align-items-center", "justify-content-between"], [1, "pi", "pi-user", "text-primary"], [1, "font-semibold", "text-800"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-pencil", "label", "Cambiar", 1, "p-button-text", "p-button-sm", "p-button-primary", 3, "click"], [1, "p-2", "border-round-lg", "bg-green-50"], [1, "pi", "pi-history", "text-green-600", "text-xl"], [1, "font-bold", "text-700"], [1, "text-center", "font-bold"], [1, "text-center", "font-medium"], [1, "text-right", "text-500"], [1, "text-right", "font-bold", "text-900"], ["colspan", "7", 1, "text-center", "text-500", "py-4"], [1, "p-2", "border-round-lg", "bg-blue-50"], [1, "pi", "pi-users", "text-blue-600", "text-xl"], [1, "pi", "pi-spin", "pi-spinner"], [2, "max-height", "280px", "overflow-y", "auto"], ["class", "flex align-items-center justify-content-between p-2 mb-1 border-round-lg border-1 border-200 cursor-pointer hover:surface-100", "style", "transition: background 0.15s;", 3, "click", 4, "ngFor", "ngForOf"], [1, "flex", "align-items-center", "justify-content-between", "p-2", "mb-1", "border-round-lg", "border-1", "border-200", "cursor-pointer", "hover:surface-100", 2, "transition", "background 0.15s", 3, "click"], [1, "font-semibold", "text-900"], [1, "text-500", "text-sm"], [1, "pi", "pi-chevron-right", "text-primary"], [1, "text-center", "text-500", "py-3"], [1, "pi", "pi-search", "mb-2", "text-2xl", "block"], [1, "text-center", "text-400", "py-3", "text-sm"]],
      template: function CompraCacaoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p-toast")(1, "p-confirmDialog", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div")(9, "h2", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Compras de Cacao");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Gesti\u00F3n de adquisiciones y stock diario \u00B7 AgroFranco ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 9)(14, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompraCacaoComponent_Template_button_click_14_listener() {
            return ctx.showCompraCacaoModalDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompraCacaoComponent_Template_button_click_15_listener() {
            return ctx.openDialogTodasCompras();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 1)(18, "div", 13)(19, "div", 14)(20, "div", 15)(21, "h4", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Compras del D\u00EDa");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "p-table", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, CompraCacaoComponent_ng_template_24_Template, 12, 0, "ng-template", 18)(25, CompraCacaoComponent_ng_template_25_Template, 24, 12, "ng-template", 19)(26, CompraCacaoComponent_ng_template_26_Template, 4, 0, "ng-template", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 21)(28, "div", 22)(29, "div", 23)(30, "h4", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Consolidado Hoy");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "p-table", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, CompraCacaoComponent_ng_template_33_Template, 5, 0, "ng-template", 18)(34, CompraCacaoComponent_ng_template_34_Template, 6, 5, "ng-template", 19)(35, CompraCacaoComponent_ng_template_35_Template, 3, 0, "ng-template", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 25)(37, "p", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " Genere un reporte detallado en PDF de las adquisiciones del d\u00EDa, consolidado por categor\u00EDa para el control de inventario de AGROFRANCO. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompraCacaoComponent_Template_button_click_40_listener() {
            return ctx.generarReportePDF();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "p-dialog", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("visibleChange", function CompraCacaoComponent_Template_p_dialog_visibleChange_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.displayModalCompraCacao, $event) || (ctx.displayModalCompraCacao = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, CompraCacaoComponent_ng_template_42_Template, 8, 0, "ng-template", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "form", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function CompraCacaoComponent_Template_form_ngSubmit_43_listener() {
            return ctx.onSubmitCompraCacao();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 31)(45, "label", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Origen del Cliente");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "p-selectButton", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onChange", function CompraCacaoComponent_Template_p_selectButton_onChange_47_listener($event) {
            return ctx.onTipoClienteChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, CompraCacaoComponent_div_48_Template, 8, 3, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 1)(50, "div", 35)(51, "label", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Fecha y Hora");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "p-calendar", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 35)(55, "label", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Tipo de Cacao");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "p-dropdown", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 35)(59, "label", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Cantidad (Libras)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 39)(62, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "i", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 35)(66, "label", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Precio Quintal ($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 39)(69, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](70, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "input", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 45)(73, "label", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Total a Pagar ($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 39)(76, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](77, "i", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](78, "input", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 50)(80, "label", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "Efectivo");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](82, "input", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 50)(84, "label", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "Transferencia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](86, "input", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "div", 54)(88, "button", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompraCacaoComponent_Template_button_click_88_listener() {
            return ctx.closeModalCompraCacaoDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](89, "button", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "p-dialog", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("visibleChange", function CompraCacaoComponent_Template_p_dialog_visibleChange_90_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.displayModalCompraCacaoTodas, $event) || (ctx.displayModalCompraCacaoTodas = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](91, CompraCacaoComponent_ng_template_91_Template, 8, 0, "ng-template", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 58)(93, "div", 59)(94, "form", 60)(95, "div", 61)(96, "label", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "Buscar por Fecha");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "div", 39)(99, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](100, "i", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](101, "p-calendar", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 65)(103, "button", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompraCacaoComponent_Template_button_click_103_listener() {
            return ctx.cargarComprasCacaoFecha();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "div", 65)(105, "button", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompraCacaoComponent_Template_button_click_105_listener() {
            return ctx.limpiarForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "div", 68)(107, "button", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompraCacaoComponent_Template_button_click_107_listener() {
            return ctx.generarReporteHistorialPDF();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "p-table", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](109, CompraCacaoComponent_ng_template_109_Template, 15, 0, "ng-template", 18)(110, CompraCacaoComponent_ng_template_110_Template, 20, 19, "ng-template", 19)(111, CompraCacaoComponent_ng_template_111_Template, 3, 0, "ng-template", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "p-dialog", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("visibleChange", function CompraCacaoComponent_Template_p_dialog_visibleChange_112_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.displayClienteSearchDialog, $event) || (ctx.displayClienteSearchDialog = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](113, CompraCacaoComponent_ng_template_113_Template, 8, 0, "ng-template", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "div", 71)(115, "div", 72)(116, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](117, "i", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "input", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CompraCacaoComponent_Template_input_ngModelChange_118_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.terminoBusqueda, $event) || (ctx.terminoBusqueda = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function CompraCacaoComponent_Template_input_input_118_listener() {
            return ctx.onTerminoChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](119, CompraCacaoComponent_span_119_Template, 2, 0, "span", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](120, CompraCacaoComponent_div_120_Template, 2, 1, "div", 76)(121, CompraCacaoComponent_div_121_Template, 3, 0, "div", 77)(122, CompraCacaoComponent_div_122_Template, 2, 0, "div", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](123, CompraCacaoComponent_ng_template_123_Template, 1, 0, "ng-template", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.comprasCacao)("rows", 6)("rowHover", true)("paginator", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.totalCacao);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](43, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("visible", ctx.displayModalCompraCacao);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("modal", true)("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.registerFormCompraCacao);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx.tipoClientes);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.clienteSeleccionado);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showIcon", true)("showTime", true)("appendTo", "body");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx.tiposCacao)("showClear", true)("appendTo", "body");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](44, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("visible", ctx.displayModalCompraCacaoTodas);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("modal", true)("closable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.searchForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showIcon", true)("appendTo", "body");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.comprasCacaoTodas.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.comprasCacaoTodas)("rows", 8)("rowHover", true)("paginator", true)("loading", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](45, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("visible", ctx.displayClienteSearchDialog);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("modal", true)("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.terminoBusqueda);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.buscandoCliente);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.clientesBuscados.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.terminoBusqueda.length >= 2 && !ctx.buscandoCliente && ctx.clientesBuscados.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.terminoBusqueda.length < 2);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, primeng_dialog__WEBPACK_IMPORTED_MODULE_11__.Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputText, primeng_table__WEBPACK_IMPORTED_MODULE_14__.Table, primeng_toast__WEBPACK_IMPORTED_MODULE_15__.Toast, primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__.Dropdown, primeng_ripple__WEBPACK_IMPORTED_MODULE_17__.Ripple, primeng_calendar__WEBPACK_IMPORTED_MODULE_18__.Calendar, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_19__.ConfirmDialog, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_20__.SelectButton, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
      styles: [".dialog-header[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.cancel-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n\n.full-width[_ngcontent-%COMP%]     .p-selectbutton .p-button {\n  min-width: 250px;\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXByYS1jYWNhby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLE9BQUE7QUFESiIsImZpbGUiOiJjb21wcmEtY2FjYW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYW5jZWwtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5mdWxsLXdpZHRoIDo6bmctZGVlcCAucC1zZWxlY3RidXR0b24gLnAtYnV0dG9uIHtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7IFxyXG4gICAgZmxleDogMTsgXHJcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL3NlY3JldGFyaWEvY29tcHJhLWNhY2FvL2NvbXByYS1jYWNhby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLE9BQUE7QUFESjtBQUNBLGdzQkFBZ3NCIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2FuY2VsLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxufVxyXG5cclxuXHJcblxyXG4uZnVsbC13aWR0aCA6Om5nLWRlZXAgLnAtc2VsZWN0YnV0dG9uIC5wLWJ1dHRvbiB7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4OyBcclxuICAgIGZsZXg6IDE7IFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 74865:
/*!*************************************************************************!*\
  !*** ./src/app/demo/components/secretaria/compras/compras.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComprasComponent: () => (/* binding */ ComprasComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ 2752);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf-autotable */ 78198);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var src_app_demo_service_compras_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/demo/service/compras.service */ 46830);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/selectbutton */ 69656);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/tabview */ 634);



















const _c0 = () => ({
  width: "450px"
});
const _c1 = () => ({
  width: "350px"
});
const _c2 = () => ({
  width: "750px"
});
function ComprasComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Fecha y Hora");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Pagado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Total (2%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ComprasComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td")(5, "div", 81)(6, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "small", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const compra_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 6, compra_r1.fechaCompra, "dd-MM-yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](compra_r1.producto.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", compra_r1.cantidad, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](compra_r1.producto.unidad_medida);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](16, 9, compra_r1.totalPagado, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](19, 12, compra_r1.valorMasDos, "USD"));
  }
}
function ComprasComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No hay compras registradas hoy.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ComprasComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Fecha y Hora");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Recibido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ComprasComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td")(5, "div", 81)(6, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "small", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const venta_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 5, venta_r2.fechaCompra, "dd-MM-yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](venta_r2.producto.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", venta_r2.cantidad, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](venta_r2.producto.unidad_medida);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](16, 8, venta_r2.totalPagado, "USD"));
  }
}
function ComprasComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No hay ventas registradas hoy.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ComprasComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Inversi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ComprasComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const total_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](total_r3.producto);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 2, total_r3.totalDolares, "USD"));
  }
}
function ComprasComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Sin datos.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ComprasComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Recaudaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ComprasComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const total_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](total_r4.producto);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 2, total_r4.totalDolares, "USD"));
  }
}
function ComprasComponent_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Sin datos.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ComprasComponent_ng_template_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 97)(1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div")(4, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Nueva Compra de Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Ingrese los detalles de la adquisici\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function ComprasComponent_ng_template_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 97)(1, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div")(4, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Nueva Venta de Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Registre la salida de mercader\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function ComprasComponent_ng_template_133_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 97)(1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div")(4, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Crear Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Categorizar nuevo \u00EDtem agr\u00EDcola");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function ComprasComponent_ng_template_150_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 97)(1, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div")(4, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Buscar Compras");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Filtrar adquisiciones por fecha y producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function ComprasComponent_div_164_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Buscando registros...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ComprasComponent_div_165_div_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Fecha y Hora");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Pagado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Total (2%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Tipo de Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ComprasComponent_div_165_div_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td")(5, "div", 81)(6, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "small", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td", 116)(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const compra_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 9, compra_r5.fechaCompra, "dd-MM-yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](compra_r5.producto == null ? null : compra_r5.producto.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", compra_r5.cantidad, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](compra_r5.producto == null ? null : compra_r5.producto.unidad_medida);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](16, 12, compra_r5.totalPagado, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](19, 15, compra_r5.valorMasDos, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("customer-badge status-" + ((compra_r5.tipoCliente == null ? null : compra_r5.tipoCliente.id) === 1 ? "registered" : "final"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (compra_r5.tipoCliente == null ? null : compra_r5.tipoCliente.nombre) || ((compra_r5.tipoCliente == null ? null : compra_r5.tipoCliente.id) === 1 ? "Cliente Registrado" : "Consumidor Final"), " ");
  }
}
function ComprasComponent_div_165_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 112)(1, "div", 113)(2, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Compras Encontradas");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p-table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ComprasComponent_div_165_div_1_ng_template_5_Template, 13, 0, "ng-template", 21)(6, ComprasComponent_div_165_div_1_ng_template_6_Template, 23, 18, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r5.resultadosBusqueda)("rows", 5)("rowHover", true)("paginator", true);
  }
}
function ComprasComponent_div_165_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h5", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Sin Resultados");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "No se encontraron compras para la fecha y el producto seleccionados.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ComprasComponent_div_165_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ComprasComponent_div_165_div_1_Template, 7, 4, "div", 110)(2, ComprasComponent_div_165_div_2_Template, 6, 0, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.resultadosBusqueda.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.resultadosBusqueda.length === 0);
  }
}
class ComprasComponent {
  constructor(messageService, fb, compraservice, datePipe) {
    this.messageService = messageService;
    this.fb = fb;
    this.compraservice = compraservice;
    this.datePipe = datePipe;
    this.compraCacaoModal = false;
    this.compras = [];
    this.ventas = [];
    this.tipoClientes = [];
    this.tipo = [];
    this.productos = [];
    this.totalCompras = [];
    this.totalVentas = [];
    this.productoModal = false;
    this.ventaModal = false;
    this.buscarComprasModal = false;
    this.resultadosBusqueda = [];
    this.busquedaRealizada = false;
    this.cargandoBusqueda = false;
    this.unidadMedidaSeleccionada = '';
    this.unidadesMedida = [{
      label: 'Libra',
      value: 'lb'
    }, {
      label: 'Kilogramo',
      value: 'kg'
    }, {
      label: 'Quintal',
      value: 'qq'
    }, {
      label: 'Unidad',
      value: 'Unidad/es'
    }];
    this.registerCompra = this.fb.group({
      tipoCliente: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      producto: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      fechaCompra: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      cantidad: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      totalPagado: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.registerFormProducto = this.fb.group({
      nombreProducto: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      unidadMedida: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.registerVenta = this.fb.group({
      fechaVenta: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      nombreProducto: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      cantVenta: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      totalCobrado: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      tipo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.buscarComprasForm = this.fb.group({
      fecha: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      productoId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.registerCompra.get('producto')?.valueChanges.subscribe(productoSeleccionado => {
      // Actualiza la unidad de medida seleccionada
      this.unidadMedidaSeleccionada = productoSeleccionado?.unidad_medida || '';
    });
    this.registerVenta.get('nombreProducto')?.valueChanges.subscribe(productoSeleccionado => {
      // Actualiza la unidad de medida seleccionada
      this.unidadMedidaSeleccionada = productoSeleccionado?.unidad_medida || '';
    });
  }
  ngOnInit() {
    this.tipoClientes = [{
      name: 'Cliente Registrado',
      value: 1
    }, {
      name: 'Consumidor Final',
      value: 2
    }];
    this.tipo = [{
      name: 'Venta normal',
      value: 'V'
    }, {
      name: 'Venta a Proveedor',
      value: 'VP'
    }];
    this.obtenerComprasToday();
    this.obtenerVentasToday();
    this.obtenerTotalVentasToday();
    this.obtenerTotalComprasToday();
  }
  openCompraDialog() {
    this.registerCompra.patchValue({
      fechaCompra: new Date()
    });
    this.compraCacaoModal = true;
    this.obtenerProductos();
  }
  closeCompraDialog() {
    this.compraCacaoModal = false;
    this.registerCompra.reset();
  }
  onSubmitCompra() {
    if (this.registerCompra.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Por favor, completa todos los campos obligatorios.'
      });
      return;
    }
    const formValue = this.registerCompra.value;
    const fechaCompra = new Date(formValue.fechaCompra);
    const compra = {
      tipoCliente: {
        id: this.registerCompra.value.tipoCliente.value
      },
      // Asegurarse de enviar solo el ID
      producto: {
        id: this.registerCompra.value.producto.id
      },
      fechaCompra: fechaCompra.toISOString(),
      cantidad: parseFloat(this.registerCompra.value.cantidad),
      // Convertir a número
      totalPagado: parseFloat(this.registerCompra.value.totalPagado),
      tipo: 'C'
    };
    console.log('Datos a enviar:', compra);
    this.compraservice.registrarCompra(compra).subscribe({
      next: response => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Compra registrada correctamente.'
        });
        this.closeCompraDialog();
        this.obtenerComprasToday();
        this.obtenerTotalComprasToday();
      },
      error: error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Ocurrió un error al registrar la compra.'
        });
      }
    });
  }
  onSubmitVenta() {
    if (this.registerVenta.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Por favor, completa todos los campos obligatorios.'
      });
      return;
    }
    const formValue = this.registerVenta.value;
    const fechaVenta = new Date(formValue.fechaVenta);
    const venta = {
      producto: {
        id: this.registerVenta.value.nombreProducto.id
      },
      fechaCompra: fechaVenta.toISOString(),
      cantidad: parseFloat(this.registerVenta.value.cantVenta),
      // Convertir a número
      totalPagado: parseFloat(this.registerVenta.value.totalCobrado),
      tipo: formValue.tipo.value
    };
    console.log('Datos a enviar:', venta);
    this.compraservice.registrarVenta(venta).subscribe({
      next: response => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Venta registrada correctamente.'
        });
        this.closeVentaDialog();
        this.obtenerVentasToday();
        this.obtenerTotalComprasToday();
        this.obtenerTotalVentasToday();
      },
      error: error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Ocurrió un error al registrar la compra.'
        });
      }
    });
  }
  obtenerProductos() {
    this.compraservice.obtenerProductos().subscribe(data => {
      this.productos = data;
    });
  }
  openBuscarComprasDialog() {
    this.buscarComprasModal = true;
    this.resultadosBusqueda = [];
    this.busquedaRealizada = false;
    this.cargandoBusqueda = false;
    this.obtenerProductos();
    this.buscarComprasForm.patchValue({
      fecha: new Date(),
      productoId: null
    });
  }
  closeBuscarComprasDialog() {
    this.buscarComprasModal = false;
    this.buscarComprasForm.reset({
      fecha: new Date(),
      productoId: null
    });
  }
  onBuscar() {
    if (this.buscarComprasForm.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Por favor complete todos los campos de búsqueda.'
      });
      return;
    }
    this.cargandoBusqueda = true;
    this.busquedaRealizada = false;
    const formValue = this.buscarComprasForm.value;
    const fecha = this.datePipe.transform(formValue.fecha, 'yyyy-MM-dd') || '';
    const productoId = formValue.productoId ? formValue.productoId.id : null;
    if (!productoId) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Debe seleccionar un producto válido.'
      });
      this.cargandoBusqueda = false;
      return;
    }
    console.log('Enviando parámetros de búsqueda:', {
      fecha: fecha,
      productoId: productoId
    });
    console.log('URL de Búsqueda:', `http://localhost:8080/compras/buscar?fecha=${fecha}&productoId=${productoId}`);
    this.compraservice.buscarComprasPorFechaYProducto(fecha, productoId).subscribe({
      next: data => {
        this.resultadosBusqueda = data;
        this.cargandoBusqueda = false;
        this.busquedaRealizada = true;
      },
      error: err => {
        this.cargandoBusqueda = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Ocurrió un error al buscar las compras.'
        });
        console.error(err);
      }
    });
  }
  obtenerComprasToday() {
    this.compraservice.obtenerComprasToday().subscribe(data => {
      this.compras = data;
    }, error => {
      console.log(error);
    });
  }
  obtenerVentasToday() {
    this.compraservice.obtenerVentasToday().subscribe(data => {
      this.ventas = data;
    }, error => {
      console.log(error);
    });
  }
  obtenerTotalComprasToday() {
    this.compraservice.obtenerTotalComprasToday().subscribe(data => {
      this.totalCompras = data;
    }, error => {
      console.log(error);
    });
  }
  obtenerTotalVentasToday() {
    this.compraservice.obtenerTotalVentasToday().subscribe(data => {
      this.totalVentas = data;
    }, error => {
      console.log(error);
    });
  }
  registrarTransaccionesCaja() {
    this.compraservice.registrarTransaccionesCaja().subscribe({
      next: response => {
        const successMessage = response.text || 'Transacciones registradas en caja correctamente.';
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: successMessage
        });
        this.obtenerTotalComprasToday();
      },
      error: error => {
        let errorMessage = 'Ocurrió un error al registrar las transacciones en caja.';
        if (error.error && typeof error.error === 'object') {
          if (error.error.text) {
            errorMessage = error.error.text;
          } else {
            errorMessage = JSON.stringify(error.error);
          }
        } else if (error.message) {
          errorMessage = error.message;
        }
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: errorMessage
        });
      }
    });
  }
  OpenProductoModalDialog() {
    this.productoModal = true;
  }
  closeProductoModalDialog() {
    this.productoModal = false;
    this.registerFormProducto.reset();
  }
  onSubmitProducto() {
    if (this.registerFormProducto.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Por favor complete el formulario de producto correctamente.'
      });
      return;
    }
    const producto = {
      nombre: this.registerFormProducto.get('nombreProducto')?.value,
      unidad_medida: this.registerFormProducto.get('unidadMedida')?.value.value // Cambiado para enviar solo el value
    };
    console.log('Producto a enviar:', producto); // Utiliza esto para verificar el objeto antes de enviarlo
    this.compraservice.registrarProducto(producto).subscribe(data => {
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Producto registrado exitosamente.'
      });
      this.closeProductoModalDialog();
      this.obtenerProductos();
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'No se pudo registrar el producto.'
      });
      console.error('Error al registrar un producto:', error);
    });
  }
  openVentaDialog() {
    this.registerVenta.patchValue({
      fechaVenta: new Date()
    });
    this.ventaModal = true;
    this.obtenerProductos();
  }
  closeVentaDialog() {
    this.ventaModal = false;
    this.registerVenta.reset();
  }
  generarReportePDF() {
    const doc = new jspdf__WEBPACK_IMPORTED_MODULE_0__.jsPDF('p', 'mm', 'a4');
    const primaryColor = [27, 94, 32];
    const salesColor = [46, 125, 50];
    const dateNow = this.datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss');
    const fileNameDate = this.datePipe.transform(new Date(), 'yyyyMMdd');
    // --- ENCABEZADO MINIMALISTA ELEGANTE ---
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.rect(0, 0, 210, 3, 'F');
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFontSize(32);
    doc.setFont('times', 'bold');
    doc.text('AGROFRANCO', 15, 20);
    doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setLineWidth(0.8);
    doc.line(15, 23, 60, 23);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text('CENTRO DE ACOPIO Y COMERCIALIZACIÓN DE CACAO', 15, 30);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text('REPORTE DIARIO DE OTRAS COMPRAS Y VENTAS', 15, 36);
    // Caja de Info Sutil
    doc.setDrawColor(220);
    doc.setLineWidth(0.2);
    doc.roundedRect(125, 10, 70, 28, 2, 2, 'S');
    doc.setFontSize(8);
    doc.setTextColor(100);
    doc.setFont('helvetica', 'normal');
    doc.text(`CATEGORÍA:`, 128, 16);
    doc.setFont('helvetica', 'bold');
    doc.text(`PRODUCTOS VARIOS`, 155, 16);
    doc.setFont('helvetica', 'normal');
    doc.text(`FECHA EMISIÓN:`, 128, 22);
    doc.text(`${dateNow}`, 155, 22);
    doc.setFont('helvetica', 'normal');
    doc.text(`ESTADO:`, 128, 28);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(salesColor[0], salesColor[1], salesColor[2]);
    doc.text(`CONSOLIDADO`, 155, 28);
    // --- DASHBOARD DE TOTALES (KPIs) ---
    const totalInv = this.totalCompras.reduce((acc, curr) => acc + curr.totalDolares, 0);
    const totalRec = this.totalVentas.reduce((acc, curr) => acc + curr.totalDolares, 0);
    const balance = totalRec - totalInv;
    doc.setFillColor(252, 252, 252);
    doc.roundedRect(15, 45, 180, 22, 1, 1, 'F');
    doc.setDrawColor(240);
    doc.rect(15, 45, 180, 22, 'S');
    // Inversión
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(120);
    doc.text('INVERSIÓN EN COMPRAS', 25, 53);
    doc.setFontSize(14);
    doc.setTextColor(31, 119, 180);
    doc.text(`$ ${totalInv.toFixed(2)}`, 25, 60);
    // Recaudación
    doc.setFontSize(8);
    doc.setTextColor(120);
    doc.text('RECAUDACIÓN EN VENTAS', 85, 53);
    doc.setFontSize(14);
    doc.setTextColor(46, 125, 50);
    doc.text(`$ ${totalRec.toFixed(2)}`, 85, 60);
    // Balance
    doc.setFontSize(8);
    doc.setTextColor(120);
    doc.text('BALANCE NETO', 145, 53);
    doc.setFontSize(14);
    doc.setTextColor(balance >= 0 ? primaryColor[0] : 183, balance >= 0 ? primaryColor[1] : 28, balance >= 0 ? primaryColor[2] : 28);
    doc.text(`$ ${balance.toFixed(2)}`, 145, 60);
    // --- TABLA DE COMPRAS ---
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text('1. DETALLE DE COMPRAS REALIZADAS', 15, 75);
    const detailCompras = this.compras.map(item => [this.datePipe.transform(item.fechaCompra, 'HH:mm'), item.producto.nombre.toUpperCase(), `${item.cantidad} ${item.producto.unidad_medida}`, `$ ${item.totalPagado.toFixed(2)}`, `$ ${item.valorMasDos.toFixed(2)}`]);
    (0,jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__["default"])(doc, {
      startY: 78,
      head: [['Hora', 'Ítem de Compra', 'Cant.', 'Pagado', 'Total (2%)']],
      body: detailCompras,
      theme: 'striped',
      headStyles: {
        fillColor: [245, 245, 245],
        textColor: primaryColor,
        fontSize: 8,
        halign: 'center',
        fontStyle: 'bold'
      },
      columnStyles: {
        0: {
          halign: 'center'
        },
        2: {
          halign: 'center'
        },
        3: {
          halign: 'right'
        },
        4: {
          halign: 'right',
          fontStyle: 'bold',
          textColor: [31, 119, 180]
        }
      },
      margin: {
        left: 15,
        right: 15
      }
    });
    // --- TABLA DE VENTAS ---
    const finalYCompras = doc.lastAutoTable.finalY + 12;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text('2. DETALLE DE VENTAS REALIZADAS', 15, finalYCompras);
    const detailVentas = this.ventas.map(item => [this.datePipe.transform(item.fechaCompra, 'HH:mm'), item.producto.nombre.toUpperCase(), `${item.cantidad} ${item.producto.unidad_medida}`, `$ ${item.totalPagado.toFixed(2)}`]);
    (0,jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__["default"])(doc, {
      startY: finalYCompras + 3,
      head: [['Hora', 'Ítem de Venta', 'Cant.', 'Recaudación']],
      body: detailVentas,
      theme: 'striped',
      headStyles: {
        fillColor: [245, 245, 245],
        textColor: primaryColor,
        fontSize: 8,
        halign: 'center',
        fontStyle: 'bold'
      },
      columnStyles: {
        0: {
          halign: 'center'
        },
        2: {
          halign: 'center'
        },
        3: {
          halign: 'right',
          fontStyle: 'bold',
          textColor: [46, 125, 50]
        }
      },
      margin: {
        left: 15,
        right: 15
      }
    });
    // Pie de página
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(7);
      doc.setTextColor(150);
      doc.text(`AgroFranco | Gestión de Productos Varios | Página ${i} de ${pageCount}`, 15, 285);
    }
    doc.save(`Reporte_Operaciones_${fileNameDate}.pdf`);
  }
  registrarVentasCaja() {
    this.compraservice.registrarVentasCaja().subscribe({
      next: response => {
        const successMessage = response.text || 'Transacciones registradas en caja correctamente.';
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: successMessage
        });
        this.obtenerTotalVentasToday();
      },
      error: error => {
        let errorMessage = 'Ocurrió un error al registrar las transacciones en caja.';
        if (error.error && typeof error.error === 'object') {
          if (error.error.text) {
            errorMessage = error.error.text;
          } else {
            errorMessage = JSON.stringify(error.error);
          }
        } else if (error.message) {
          errorMessage = error.message;
        }
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: errorMessage
        });
      }
    });
  }
  static {
    this.ɵfac = function ComprasComponent_Factory(t) {
      return new (t || ComprasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_demo_service_compras_service__WEBPACK_IMPORTED_MODULE_2__.ComprasService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ComprasComponent,
      selectors: [["app-compras"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe])],
      decls: 168,
      vars: 64,
      consts: [[1, "grid"], [1, "col-12", "p-0"], [1, "card", "p-4", "border-none", "shadow-premium", "mb-4", "flex", "align-items-center", "justify-content-between", "bg-white", "overflow-hidden", "relative", 2, "border-radius", "1.25rem"], [1, "flex", "align-items-center", "relative", "z-1"], [1, "p-3", "border-round-xl", "bg-orange-50", "mr-4", "shadow-sm"], [1, "pi", "pi-box", "text-orange-600", "text-3xl"], [1, "m-0", "font-bold", "text-900", "line-height-2", "tracking-tight"], [1, "m-0", "text-600", "font-medium", "opacity-70"], [1, "flex", "gap-3", "relative", "z-1"], ["pButton", "", "pRipple", "", "label", "Buscar Compras", "icon", "pi pi-search", 1, "p-button-info", "px-4", "py-2", "border-round-xl", "shadow-md", "font-bold", 3, "click"], ["pButton", "", "pRipple", "", "label", "Nueva Compra", "icon", "pi pi-plus", 1, "p-button-primary", "px-4", "py-2", "border-round-xl", "shadow-md", "font-bold", 3, "click"], ["pButton", "", "pRipple", "", "label", "Nueva Venta", "icon", "pi pi-cart-plus", 1, "p-button-success", "px-4", "py-2", "border-round-xl", "shadow-md", "font-bold", 3, "click"], [1, "absolute", "-top-10", "-right-10", "bg-orange-50", "border-circle", "opacity-50", 2, "width", "250px", "height", "250px"], [1, "col-12", "xl:col-8"], [1, "card", "border-none", "shadow-premium", "border-round-xl", "p-0", "overflow-hidden"], ["styleClass", "custom-tabs"], ["header", "Compras Realizadas"], [1, "p-3"], [1, "flex", "align-items-center", "mb-3", 2, "border-left", "4px solid var(--primary-color)", "padding-left", "0.85rem"], [1, "m-0", "font-bold", "text-900", 2, "font-size", "1rem"], ["styleClass", "p-datatable-sm p-datatable-gridlines", "responsiveLayout", "scroll", 3, "value", "rows", "rowHover", "paginator"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["header", "Ventas Realizadas"], [1, "flex", "align-items-center", "mb-3", 2, "border-left", "4px solid var(--green-500)", "padding-left", "0.85rem"], [1, "col-12", "xl:col-4"], [1, "card", "border-none", "shadow-premium", "border-round-xl", "p-0", "overflow-hidden", "h-full", "flex", "flex-column"], ["styleClass", "custom-tabs-summary h-full"], ["header", "Compras"], [1, "p-3", "h-full", "flex", "flex-column"], [1, "m-0", "font-bold", "text-900"], ["styleClass", "p-datatable-sm p-datatable-gridlines mb-3", 3, "value"], [1, "mt-auto", "pt-3"], ["pButton", "", "type", "button", "icon", "pi pi-file-pdf", "label", "Generar Reporte PDF", 1, "p-button-danger", "w-full", "shadow-2", "border-round-lg", "font-bold", 3, "click"], ["header", "Ventas"], ["styleClass", "border-round-xl shadow-5 overflow-hidden", 3, "visibleChange", "visible", "modal", "closable"], [1, "p-fluid", 3, "ngSubmit", "formGroup"], [1, "field", "mb-4"], [1, "font-bold", "text-700", "block", "mb-2"], ["optionLabel", "name", "formControlName", "tipoCliente", "styleClass", "w-full", 3, "options"], [1, "field", "col-12", "mb-3"], [1, "font-semibold", "text-700", "block", "mb-1"], ["formControlName", "fechaCompra", "dateFormat", "dd/mm/yy", "hourFormat", "24", 3, "showIcon", "showTime", "appendTo"], [1, "flex", "gap-2"], ["optionLabel", "nombre", "formControlName", "producto", "placeholder", "Elija un producto", 1, "flex-1", 3, "options", "showClear", "appendTo"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-plus", 1, "p-button-outlined", "p-button-secondary", 3, "click"], [1, "p-inputgroup"], [1, "p-inputgroup-addon"], [1, "pi", "pi-tag"], ["type", "text", "pInputText", "", "formControlName", "cantidad", "placeholder", "0.00"], [1, "pi", "pi-dollar"], ["type", "text", "pInputText", "", "formControlName", "totalPagado", "placeholder", "0.00"], [1, "flex", "justify-content-end", "gap-2", "mt-4", "pt-3", "border-top-1", "surface-border"], ["pButton", "", "pRipple", "", "type", "button", "label", "Cancelar", "icon", "pi pi-times", 1, "p-button-text", "p-button-secondary", 3, "click"], ["pButton", "", "pRipple", "", "type", "submit", "label", "Registrar Compra", "icon", "pi pi-save", 1, "p-button-primary", "shadow-2", "border-round-lg"], ["optionLabel", "name", "formControlName", "tipo", "styleClass", "w-full", 3, "options"], [1, "font-semibold", "text-700", "block", "mb-2"], ["formControlName", "fechaVenta", "dateFormat", "dd/mm/yy", "hourFormat", "24", 3, "showIcon", "showTime", "appendTo"], ["optionLabel", "nombre", "formControlName", "nombreProducto", "placeholder", "Seleccione el producto", 3, "options", "showClear", "appendTo"], ["type", "text", "pInputText", "", "formControlName", "cantVenta", "placeholder", "0.00"], ["type", "text", "pInputText", "", "formControlName", "totalCobrado", "placeholder", "0.00"], ["pButton", "", "pRipple", "", "type", "submit", "label", "Registrar Venta", "icon", "pi pi-save", 1, "p-button-success", "shadow-2", "border-round-lg"], ["type", "text", "pInputText", "", "formControlName", "nombreProducto", "placeholder", "Nombre del producto"], ["optionLabel", "label", "formControlName", "unidadMedida", "placeholder", "Seleccione unidad", 3, "options", "showClear", "appendTo"], ["pButton", "", "pRipple", "", "type", "submit", "label", "Crear Producto", "icon", "pi pi-check", 1, "p-button-primary", "shadow-2", "border-round-lg"], [1, "p-fluid"], [1, "grid", "mb-4", 3, "ngSubmit", "formGroup"], [1, "field", "col-12", "md:col-5", "mb-3", "md:mb-0"], ["formControlName", "fecha", "dateFormat", "dd/mm/yy", 3, "showIcon", "appendTo"], ["optionLabel", "nombre", "formControlName", "productoId", "placeholder", "Seleccione el producto", 3, "options", "showClear", "appendTo"], [1, "field", "col-12", "md:col-2", "flex", "align-items-end", "mb-0"], ["pButton", "", "pRipple", "", "type", "submit", "label", "Buscar", "icon", "pi pi-search", 1, "p-button-primary", "shadow-2", "border-round-lg", "font-bold", "w-full", 2, "height", "40px"], [1, "border-top-1", "surface-border", "my-4"], ["class", "flex flex-column align-items-center justify-content-center py-5", 4, "ngIf"], [4, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "label", "Cerrar Ventana", "icon", "pi pi-times", 1, "p-button-outlined", "p-button-secondary", "border-round-lg", "font-bold", 3, "click"], [1, "text-center", 2, "width", "140px"], [1, "text-center", 2, "width", "100px"], [1, "text-right", 2, "width", "130px"], [1, "text-center", "text-700"], [1, "flex", "align-items-center", "gap-2"], [1, "flex", "align-items-center", "justify-content-center", "border-round", "bg-primary-50", 2, "width", "24px", "height", "24px"], [1, "pi", "pi-tag", "text-primary", "text-xs"], [1, "font-medium"], [1, "text-center", "font-bold"], [1, "text-500"], [1, "text-right", "font-medium"], [1, "text-right", "font-bold", "text-primary"], ["colspan", "5", 1, "text-center", "text-500", "py-4"], [1, "flex", "align-items-center", "justify-content-center", "border-round", "bg-green-50", 2, "width", "24px", "height", "24px"], [1, "pi", "pi-box", "text-green-600", "text-xs"], [1, "text-right", "font-bold", "text-green-600"], ["colspan", "4", 1, "text-center", "text-500", "py-4"], [1, "text-right"], [1, "font-medium", "text-700"], ["colspan", "2", 1, "text-center", "text-500", "py-2"], [1, "flex", "align-items-center", "gap-3"], [1, "p-2", "border-round-lg", "bg-primary-50"], [1, "pi", "pi-shopping-cart", "text-primary", "text-xl"], [1, "font-bold", "text-900", 2, "font-size", "1.05rem"], [1, "text-500", 2, "font-size", "0.8rem"], [1, "p-2", "border-round-lg", "bg-green-50"], [1, "pi", "pi-cart-plus", "text-green-600", "text-xl"], [1, "pi", "pi-plus", "text-primary", "text-xl"], [1, "p-2", "border-round-lg", "bg-info-50", 2, "background-color", "var(--blue-50)"], [1, "pi", "pi-search", "text-blue-600", "text-xl", 2, "color", "var(--blue-600)"], [1, "flex", "flex-column", "align-items-center", "justify-content-center", "py-5"], [1, "pi", "pi-spin", "pi-spinner", "text-primary", "text-4xl", "mb-3"], [1, "text-600", "font-medium"], ["class", "card border-none shadow-sm border-round-xl p-0 overflow-hidden", 4, "ngIf"], ["class", "flex flex-column align-items-center justify-content-center py-5 bg-gray-50 border-round-xl", 4, "ngIf"], [1, "card", "border-none", "shadow-sm", "border-round-xl", "p-0", "overflow-hidden"], [1, "flex", "align-items-center", "mb-3", "px-3", 2, "border-left", "4px solid var(--primary-color)", "padding-left", "0.85rem"], [1, "text-center", 2, "width", "110px"], [1, "text-right", 2, "width", "120px"], [1, "text-center"], [1, "flex", "flex-column", "align-items-center", "justify-content-center", "py-5", "bg-gray-50", "border-round-xl"], [1, "pi", "pi-exclamation-circle", "text-orange-500", "text-4xl", "mb-3"], [1, "m-0", "font-bold", "text-800", "mb-1"], [1, "m-0", "text-600", "font-medium"]],
      template: function ComprasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div")(8, "h2", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Otras Compras y Ventas");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Gesti\u00F3n de insumos agr\u00EDcolas y productos varios \u00B7 AgroFranco");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8)(13, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComprasComponent_Template_button_click_13_listener() {
            return ctx.openBuscarComprasDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComprasComponent_Template_button_click_14_listener() {
            return ctx.openCompraDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComprasComponent_Template_button_click_15_listener() {
            return ctx.openVentaDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 0)(18, "div", 13)(19, "div", 14)(20, "p-tabView", 15)(21, "p-tabPanel", 16)(22, "div", 17)(23, "div", 18)(24, "h4", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Historial de Compras de Hoy");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p-table", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, ComprasComponent_ng_template_27_Template, 11, 0, "ng-template", 21)(28, ComprasComponent_ng_template_28_Template, 20, 15, "ng-template", 22)(29, ComprasComponent_ng_template_29_Template, 3, 0, "ng-template", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "p-tabPanel", 24)(31, "div", 17)(32, "div", 25)(33, "h4", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Historial de Ventas de Hoy");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "p-table", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, ComprasComponent_ng_template_36_Template, 9, 0, "ng-template", 21)(37, ComprasComponent_ng_template_37_Template, 17, 11, "ng-template", 22)(38, ComprasComponent_ng_template_38_Template, 3, 0, "ng-template", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 26)(40, "div", 27)(41, "p-tabView", 28)(42, "p-tabPanel", 29)(43, "div", 30)(44, "div", 18)(45, "h5", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Total Comprado Hoy");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "p-table", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, ComprasComponent_ng_template_48_Template, 5, 0, "ng-template", 21)(49, ComprasComponent_ng_template_49_Template, 6, 5, "ng-template", 22)(50, ComprasComponent_ng_template_50_Template, 3, 0, "ng-template", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 33)(52, "button", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComprasComponent_Template_button_click_52_listener() {
            return ctx.generarReportePDF();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "p-tabPanel", 35)(54, "div", 30)(55, "div", 25)(56, "h5", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Total Vendido Hoy");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "p-table", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, ComprasComponent_ng_template_59_Template, 5, 0, "ng-template", 21)(60, ComprasComponent_ng_template_60_Template, 6, 5, "ng-template", 22)(61, ComprasComponent_ng_template_61_Template, 3, 0, "ng-template", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 33)(63, "button", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComprasComponent_Template_button_click_63_listener() {
            return ctx.generarReportePDF();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "p-dialog", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("visibleChange", function ComprasComponent_Template_p_dialog_visibleChange_64_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.compraCacaoModal, $event) || (ctx.compraCacaoModal = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, ComprasComponent_ng_template_65_Template, 8, 0, "ng-template", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "form", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ComprasComponent_Template_form_ngSubmit_66_listener() {
            return ctx.onSubmitCompra();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 38)(68, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Origen del Cliente");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "p-selectButton", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 0)(72, "div", 41)(73, "label", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Fecha y Hora");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "p-calendar", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 41)(77, "label", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Seleccionar Producto");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "p-dropdown", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "button", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComprasComponent_Template_button_click_81_listener() {
            return ctx.OpenProductoModalDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 41)(83, "label", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 47)(86, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](87, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](88, "input", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 41)(90, "label", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Total Pagado ($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 47)(93, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "i", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](95, "input", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 53)(97, "button", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComprasComponent_Template_button_click_97_listener() {
            return ctx.closeCompraDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](98, "button", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "p-dialog", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("visibleChange", function ComprasComponent_Template_p_dialog_visibleChange_99_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.ventaModal, $event) || (ctx.ventaModal = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](100, ComprasComponent_ng_template_100_Template, 8, 0, "ng-template", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "form", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ComprasComponent_Template_form_ngSubmit_101_listener() {
            return ctx.onSubmitVenta();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 38)(103, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "Canal de Venta");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](105, "p-selectButton", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 0)(107, "div", 41)(108, "label", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "Fecha y Hora");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](110, "p-calendar", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 41)(112, "label", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "Producto");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](114, "p-dropdown", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "div", 41)(116, "label", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 47)(119, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](120, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](121, "input", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "div", 41)(123, "label", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "Total Cobrado ($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 47)(126, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](127, "i", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](128, "input", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 53)(130, "button", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComprasComponent_Template_button_click_130_listener() {
            return ctx.closeVentaDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](131, "button", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "p-dialog", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("visibleChange", function ComprasComponent_Template_p_dialog_visibleChange_132_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.productoModal, $event) || (ctx.productoModal = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](133, ComprasComponent_ng_template_133_Template, 8, 0, "ng-template", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "form", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ComprasComponent_Template_form_ngSubmit_134_listener() {
            return ctx.onSubmitProducto();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "div", 38)(136, "label", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "Nombre Comercial");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "div", 47)(139, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](140, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](141, "input", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "div", 38)(143, "label", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "Unidad de Medida");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](145, "p-dropdown", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "div", 53)(147, "button", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComprasComponent_Template_button_click_147_listener() {
            return ctx.closeProductoModalDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](148, "button", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "p-dialog", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("visibleChange", function ComprasComponent_Template_p_dialog_visibleChange_149_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.buscarComprasModal, $event) || (ctx.buscarComprasModal = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](150, ComprasComponent_ng_template_150_Template, 8, 0, "ng-template", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "div", 66)(152, "form", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ComprasComponent_Template_form_ngSubmit_152_listener() {
            return ctx.onBuscar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "div", 68)(154, "label", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](155, "Fecha de Compra");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](156, "p-calendar", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "div", 68)(158, "label", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159, "Seleccionar Producto");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](160, "p-dropdown", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "div", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](162, "button", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](163, "hr", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](164, ComprasComponent_div_164_Template, 4, 0, "div", 74)(165, ComprasComponent_div_165_Template, 3, 2, "div", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "div", 53)(167, "button", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComprasComponent_Template_button_click_167_listener() {
            return ctx.closeBuscarComprasDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.compras)("rows", 6)("rowHover", true)("paginator", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.ventas)("rows", 6)("rowHover", true)("paginator", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.totalCompras);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.totalVentas);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](60, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("visible", ctx.compraCacaoModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("modal", true)("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.registerCompra);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.tipoClientes);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showIcon", true)("showTime", true)("appendTo", "body");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.productos)("showClear", true)("appendTo", "body");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Cantidad (", ctx.unidadMedidaSeleccionada || "---", ")");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](61, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("visible", ctx.ventaModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("modal", true)("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.registerVenta);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.tipo);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showIcon", true)("showTime", true)("appendTo", "body");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.productos)("showClear", true)("appendTo", "body");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Cantidad a Vender (", ctx.unidadMedidaSeleccionada || "---", ")");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](62, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("visible", ctx.productoModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("modal", true)("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.registerFormProducto);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.unidadesMedida)("showClear", true)("appendTo", "body");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](63, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("visible", ctx.buscarComprasModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("modal", true)("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.buscarComprasForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showIcon", true)("appendTo", "body");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.productos)("showClear", true)("appendTo", "body");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.cargandoBusqueda);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.cargandoBusqueda && ctx.busquedaRealizada);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, primeng_dialog__WEBPACK_IMPORTED_MODULE_7__.Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputText, primeng_table__WEBPACK_IMPORTED_MODULE_10__.Table, primeng_toast__WEBPACK_IMPORTED_MODULE_11__.Toast, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.Dropdown, primeng_ripple__WEBPACK_IMPORTED_MODULE_13__.Ripple, primeng_calendar__WEBPACK_IMPORTED_MODULE_14__.Calendar, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_15__.SelectButton, primeng_tabview__WEBPACK_IMPORTED_MODULE_16__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_16__.TabPanel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
      styles: [".dialog-header[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.cancel-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n\n.full-width[_ngcontent-%COMP%]     .p-selectbutton .p-button {\n  min-width: 250px;\n  flex: 1;\n}\n\n.buttons-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center; \n\n  gap: 10px; \n\n  width: 100%; \n\n}\n\n.flex[_ngcontent-%COMP%] {\n  flex: 1; \n\n}\n\n.customer-badge[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  padding: 0.25rem 0.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 10px;\n  letter-spacing: 0.3px;\n  display: inline-block;\n}\n.customer-badge.status-registered[_ngcontent-%COMP%] {\n  background: #C8E6C9;\n  color: #256029;\n}\n.customer-badge.status-final[_ngcontent-%COMP%] {\n  background: #B3E5FC;\n  color: #0288D1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXByYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxPQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUEsRUFBQSxvREFBQTtFQUNBLFNBQUEsRUFBQSw4QkFBQTtFQUNBLFdBQUEsRUFBQSxpQ0FBQTtBQURKOztBQUlFO0VBQ0UsT0FBQSxFQUFBLDZFQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBREo7QUFHSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQURSO0FBSUk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFGUiIsImZpbGUiOiJjb21wcmFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2FuY2VsLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxufVxyXG5cclxuXHJcblxyXG4uZnVsbC13aWR0aCA6Om5nLWRlZXAgLnAtc2VsZWN0YnV0dG9uIC5wLWJ1dHRvbiB7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4OyBcclxuICAgIGZsZXg6IDE7IFxyXG59XHJcblxyXG4uYnV0dG9ucy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIEFsaW5lYSBsb3MgYm90b25lcyBhbCBtaXNtbyBuaXZlbCB2ZXJ0aWNhbG1lbnRlICovXHJcbiAgICBnYXA6IDEwcHg7IC8qIEVzcGFjaW8gZW50cmUgbG9zIGJvdG9uZXMgKi9cclxuICAgIHdpZHRoOiAxMDAlOyAvKiBVc2EgdG9kbyBlbCBhbmNobyBkaXNwb25pYmxlICovXHJcbiAgfVxyXG4gIFxyXG4gIC5mbGV4IHtcclxuICAgIGZsZXg6IDE7IC8qIFBlcm1pdGUgcXVlIGxvcyBjb250ZW5lZG9yZXMgZGUgYm90b25lcyBvY3VwZW4gZXNwYWNpbyBwcm9wb3JjaW9uYWxtZW50ZSAqL1xyXG4gIH1cclxuXHJcbi5jdXN0b21lci1iYWRnZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4zcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgJi5zdGF0dXMtcmVnaXN0ZXJlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0M4RTZDOTtcclxuICAgICAgICBjb2xvcjogIzI1NjAyOTtcclxuICAgIH1cclxuXHJcbiAgICAmLnN0YXR1cy1maW5hbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0IzRTVGQztcclxuICAgICAgICBjb2xvcjogIzAyODhEMTtcclxuICAgIH1cclxufVxyIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL3NlY3JldGFyaWEvY29tcHJhcy9jb21wcmFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsT0FBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBLEVBQUEsb0RBQUE7RUFDQSxTQUFBLEVBQUEsOEJBQUE7RUFDQSxXQUFBLEVBQUEsaUNBQUE7QUFESjs7QUFJRTtFQUNFLE9BQUEsRUFBQSw2RUFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQURKO0FBR0k7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFEUjtBQUlJO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBRlI7QUFDQSx3akVBQXdqRSIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhbmNlbC1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmZ1bGwtd2lkdGggOjpuZy1kZWVwIC5wLXNlbGVjdGJ1dHRvbiAucC1idXR0b24ge1xyXG4gICAgbWluLXdpZHRoOiAyNTBweDsgXHJcbiAgICBmbGV4OiAxOyBcclxufVxyXG5cclxuLmJ1dHRvbnMtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBBbGluZWEgbG9zIGJvdG9uZXMgYWwgbWlzbW8gbml2ZWwgdmVydGljYWxtZW50ZSAqL1xyXG4gICAgZ2FwOiAxMHB4OyAvKiBFc3BhY2lvIGVudHJlIGxvcyBib3RvbmVzICovXHJcbiAgICB3aWR0aDogMTAwJTsgLyogVXNhIHRvZG8gZWwgYW5jaG8gZGlzcG9uaWJsZSAqL1xyXG4gIH1cclxuICBcclxuICAuZmxleCB7XHJcbiAgICBmbGV4OiAxOyAvKiBQZXJtaXRlIHF1ZSBsb3MgY29udGVuZWRvcmVzIGRlIGJvdG9uZXMgb2N1cGVuIGVzcGFjaW8gcHJvcG9yY2lvbmFsbWVudGUgKi9cclxuICB9XHJcblxyXG4uY3VzdG9tZXItYmFkZ2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuM3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgICYuc3RhdHVzLXJlZ2lzdGVyZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNDOEU2Qzk7XHJcbiAgICAgICAgY29sb3I6ICMyNTYwMjk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zdGF0dXMtZmluYWwge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNCM0U1RkM7XHJcbiAgICAgICAgY29sb3I6ICMwMjg4RDE7XHJcbiAgICB9XHJcbn1cciJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 99727:
/*!***************************************************************************************************!*\
  !*** ./src/app/demo/components/secretaria/dashboard-secretaria/dashboard-secretaria.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardSecretariaComponent: () => (/* binding */ DashboardSecretariaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_demo_service_cliente_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/cliente.service */ 4771);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);



class DashboardSecretariaComponent {
  constructor(clienteService) {
    this.clienteService = clienteService;
    this.totalClientes = 0;
    this.today = new Date();
  }
  ngOnInit() {
    this.obtenertotalClientesRegistrados();
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
  static {
    this.ɵfac = function DashboardSecretariaComponent_Factory(t) {
      return new (t || DashboardSecretariaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_demo_service_cliente_service__WEBPACK_IMPORTED_MODULE_0__.ClienteService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DashboardSecretariaComponent,
      selectors: [["app-dashboard-secretaria"]],
      decls: 99,
      vars: 9,
      consts: [[1, "grid"], [1, "col-12"], [1, "card", "p-4", "border-none", "shadow-premium", "mb-4", "flex", "align-items-center", "justify-content-between", "bg-white", "overflow-hidden", "relative", 2, "border-radius", "1.25rem"], [1, "flex", "align-items-center", "relative", "z-1"], [1, "p-3", "border-round-xl", "bg-orange-50", "mr-4", "shadow-sm"], [1, "pi", "pi-home", "text-orange-600", "text-3xl"], [1, "m-0", "font-bold", "text-900", "line-height-2", "tracking-tight"], [1, "m-0", "text-600", "font-medium", "opacity-70"], [1, "hidden", "md:flex", "align-items-center", "gap-3", "relative", "z-1"], [1, "px-3", "py-2", "border-round-xl", "bg-surface-50", "text-600", "font-bold", "shadow-sm", 2, "font-size", "0.85rem"], [1, "pi", "pi-calendar", "mr-2", "text-orange-500"], [1, "absolute", "-top-10", "-right-10", "bg-orange-50", "border-circle", "opacity-50", 2, "width", "250px", "height", "250px"], [1, "col-12", "lg:col-6", "xl:col-4"], [1, "card", "mb-0", "shadow-2", "border-none", "border-round-xl", "overflow-hidden", 2, "border-left", "4px solid var(--primary-color)"], [1, "flex", "align-items-center", "justify-content-between", "p-1"], [1, "m-0", "text-500", "font-medium", "mb-1", 2, "font-size", "0.82rem", "text-transform", "uppercase", "letter-spacing", "0.04em"], [1, "text-900", "font-bold", 2, "font-size", "2.2rem", "line-height", "1"], [1, "text-500", 2, "font-size", "0.78rem"], [1, "p-3", "border-round-xl", "bg-primary-50", "shadow-1"], [1, "pi", "pi-users", "text-primary", "text-2xl"], [1, "card", "mb-0", "shadow-2", "border-none", "border-round-xl", "overflow-hidden", 2, "border-left", "4px solid #10b981"], [1, "p-3", "border-round-xl", "shadow-1", 2, "background", "#d1fae5"], [1, "pi", "pi-arrow-circle-down", "text-2xl", 2, "color", "#10b981"], [1, "card", "mb-0", "shadow-2", "border-none", "border-round-xl", "overflow-hidden", 2, "border-left", "4px solid #f59e0b"], [1, "p-3", "border-round-xl", "shadow-1", 2, "background", "#fef3c7"], [1, "pi", "pi-arrow-circle-up", "text-2xl", 2, "color", "#f59e0b"], [1, "col-12", "mt-2"], [1, "card", "border-none", "shadow-2", "p-4", "border-round-xl"], [1, "flex", "align-items-center", "mb-4", 2, "border-left", "4px solid var(--primary-color)", "padding-left", "0.85rem"], [1, "m-0", "font-bold", "text-900", 2, "font-size", "1rem"], [1, "m-0", "text-500", 2, "font-size", "0.8rem"], [1, "col-12", "md:col-6", "lg:col-3"], [1, "border-round-xl", "p-3", "flex", "align-items-center", "gap-3", 2, "background", "#eff6ff", "border", "1.5px solid #bfdbfe", "cursor", "default", "transition", "all 0.2s"], [1, "pi", "pi-shopping-cart", "text-primary", "text-xl"], [1, "font-bold", "text-900", "mb-1", 2, "font-size", "0.88rem"], [1, "text-500", 2, "font-size", "0.76rem"], [1, "border-round-xl", "p-3", "flex", "align-items-center", "gap-3", 2, "background", "#f0fdf4", "border", "1.5px solid #bbf7d0", "cursor", "default", "transition", "all 0.2s"], [1, "p-3", "border-round-xl", "shadow-1", 2, "background", "#dcfce7"], [1, "pi", "pi-users", "text-xl", 2, "color", "#16a34a"], [1, "border-round-xl", "p-3", "flex", "align-items-center", "gap-3", 2, "background", "#fffbeb", "border", "1.5px solid #fde68a", "cursor", "default", "transition", "all 0.2s"], [1, "pi", "pi-wallet", "text-xl", 2, "color", "#d97706"], [1, "border-round-xl", "p-3", "flex", "align-items-center", "gap-3", 2, "background", "#fdf4ff", "border", "1.5px solid #e9d5ff", "cursor", "default", "transition", "all 0.2s"], [1, "p-3", "border-round-xl", "shadow-1", 2, "background", "#f3e8ff"], [1, "pi", "pi-dollar", "text-xl", 2, "color", "#9333ea"]],
      template: function DashboardSecretariaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div")(7, "h2", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Panel de Control");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Resumen general de operaciones \u00B7 AgroFranco");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8)(12, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "uppercase");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12)(19, "div", 13)(20, "div", 14)(21, "div")(22, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Clientes Registrados ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Productores activos en el sistema");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 12)(31, "div", 20)(32, "div", 14)(33, "div")(34, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Ingresos del D\u00EDa ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " $ \u2014 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Total cobros y recepciones de hoy");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 12)(43, "div", 23)(44, "div", 14)(45, "div")(46, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Salidas del D\u00EDa ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " $ \u2014 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Total pagos y egresos de hoy");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 26)(55, "div", 27)(56, "div", 28)(57, "div")(58, "h3", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "M\u00F3dulos del Sistema");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "p", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Accesos r\u00E1pidos a las funciones principales");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 0)(63, "div", 31)(64, "div", 32)(65, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div")(68, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Compras de Cacao");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Recepciones y liquidaciones");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 31)(73, "div", 36)(74, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div")(77, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Gesti\u00F3n de Clientes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Productores y certificaciones");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 31)(82, "div", 39)(83, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div")(86, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Manejo de Caja");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Transacciones y cierres diarios");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 31)(91, "div", 41)(92, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div")(95, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Pr\u00E9stamos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Anticipos y cuotas pendientes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](15, 2, ctx.today, "EEEE, d MMMM yyyy", "", "es")), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.totalClientes, " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
      styles: [".cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1zZWNyZXRhcmlhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6ImRhc2hib2FyZC1zZWNyZXRhcmlhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1cnNvci1wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL3NlY3JldGFyaWEvZGFzaGJvYXJkLXNlY3JldGFyaWEvZGFzaGJvYXJkLXNlY3JldGFyaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7QUFDQSw0VkFBNFYiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Vyc29yLXBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 26761:
/*!*****************************************************************************!*\
  !*** ./src/app/demo/components/secretaria/prestamos/prestamos.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrestamosComponent: () => (/* binding */ PrestamosComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_demo_service_prestamo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/prestamo.service */ 80734);
/* harmony import */ var src_app_demo_service_cliente_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/service/cliente.service */ 4771);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/tag */ 93616);


















const _c0 = ["filter"];
const _c1 = () => ({
  width: "48vw"
});
const _c2 = () => ({
  "960px": "75vw",
  "640px": "100vw"
});
const _c3 = () => ({
  width: "36vw"
});
const _c4 = () => ({
  "960px": "60vw",
  "640px": "100vw"
});
const _c5 = () => ({
  "min-width": "10rem"
});
function PrestamosComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40)(1, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrestamosComponent_ng_template_15_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.abrirModalRegistro());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function PrestamosComponent_ng_template_15_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onTermInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function PrestamosComponent_ng_template_16_ng_template_21_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](option_r5.label);
  }
}
function PrestamosComponent_ng_template_16_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-dropdown", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function PrestamosComponent_ng_template_16_ng_template_21_Template_p_dropdown_onChange_0_listener($event) {
      const filter_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3).filterCallback;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](filter_r4($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PrestamosComponent_ng_template_16_ng_template_21_ng_template_1_Template, 2, 1, "ng-template", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", value_r6)("options", ctx_r1.statuses);
  }
}
function PrestamosComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Prestamista ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "p-sortIcon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Nro. C\u00E9dula ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "p-sortIcon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Contacto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "p-sortIcon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Fecha del Pr\u00E9stamo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "p-sortIcon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Monto Prestado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "p-sortIcon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th", 56)(18, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Estado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p-columnFilter", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, PrestamosComponent_ng_template_16_ng_template_21_Template, 2, 5, "ng-template", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function PrestamosComponent_ng_template_17_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrestamosComponent_ng_template_17_button_24_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const prestamo_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.showPagoDialog(prestamo_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PrestamosComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrestamosComponent_ng_template_17_Template_button_click_2_listener() {
      const prestamo_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleRow(prestamo_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td")(4, "div", 64)(5, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "td")(17, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "p-tag", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, PrestamosComponent_ng_template_17_button_24_Template, 1, 0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const prestamo_r8 = ctx.$implicit;
    const expanded_r10 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", expanded_r10 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](prestamo_r8.nombre + " " + prestamo_r8.apellidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](prestamo_r8.cedula);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](prestamo_r8.contacto);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](15, 10, prestamo_r8.fechaPrestamo, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind4"](19, 13, prestamo_r8.montoPrestamo, "USD", "symbol", "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("severity", prestamo_r8.estado === "activo" ? "warning" : "success")("value", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 18, prestamo_r8.estado))("rounded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", prestamo_r8.estado === "activo");
  }
}
function PrestamosComponent_ng_template_18_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Fecha de Pago ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "p-sortIcon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "th", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Monto Pagado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "p-sortIcon", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Saldo Restante ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "p-sortIcon", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function PrestamosComponent_ng_template_18_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td")(5, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td")(9, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const pago_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 4, pago_r11.fechaPago, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind4"](7, 7, pago_r11.montoPagado, "USD", "symbol", "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", pago_r11.saldoRestante > 0 ? "text-orange-500" : "text-green-600");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind4"](11, 12, pago_r11.saldoRestante, "USD", "symbol", "1.2-2"), " ");
  }
}
function PrestamosComponent_ng_template_18_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " No hay pagos registrados para este pr\u00E9stamo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function PrestamosComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 73)(2, "div", 74)(3, "div", 75)(4, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p-table", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, PrestamosComponent_ng_template_18_ng_template_9_Template, 10, 0, "ng-template", 12)(10, PrestamosComponent_ng_template_18_ng_template_10_Template, 12, 17, "ng-template", 13)(11, PrestamosComponent_ng_template_18_ng_template_11_Template, 4, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const prestamo_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" Historial de Pagos \u2014 ", prestamo_r12.nombre, " ", prestamo_r12.apellidos, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", prestamo_r12.pagos);
  }
}
function PrestamosComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " No se encontraron pr\u00E9stamos registrados. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function PrestamosComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 92)(1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div")(4, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Nuevo Pr\u00E9stamo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Complete los datos del prestamista");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function PrestamosComponent_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrestamosComponent_ng_template_66_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.closeModalDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrestamosComponent_ng_template_66_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.createLoan());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PrestamosComponent_ng_template_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 92)(1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div")(4, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Registrar Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Ingresa los datos del abono al pr\u00E9stamo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function PrestamosComponent_ng_template_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrestamosComponent_ng_template_92_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.closePagoDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrestamosComponent_ng_template_92_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.registrarPago());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class PrestamosComponent {
  constructor(prestamoService, clienteService, fb, messageService) {
    this.prestamoService = prestamoService;
    this.clienteService = clienteService;
    this.fb = fb;
    this.messageService = messageService;
    this.prestamos = [];
    this.loading = true;
    this.expandedRows = {};
    this.isExpanded = false;
    this.displayDialog = false;
    this.displayClientSearchModal = false;
    this.selectedCliente = null;
    this.filteredClientes = [];
    this.clientes = [];
    //para pagos
    this.displayDialogPago = false;
    this.fechaPlaceholder = 'dd/MM/AAAA';
    this.selectedPrestamo = null;
    //para buscar prestamos
    this.searchKeyword = '';
    this.searchCedula = '';
    this.statuses = [{
      label: 'Activo',
      value: 'activo'
    }, {
      label: 'Pagado',
      value: 'pagado'
    }];
    this.nuevoPrestamoForm = this.fb.group({
      nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      apellidos: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      cedula: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      contacto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      montoPrestamo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^\\d+(\\.\\d{1,2})?$')]],
      fechaPrestamo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      estado: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    this.nuevoPagoForm = this.fb.group({
      codigoPrestamo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      fechaPago: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      montoPagado: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0.01)]]
    });
  }
  ngOnInit() {
    this.prestamoService.getPrestamos().subscribe(data => {
      this.prestamos = data;
      console.log('Prestamos:', this.prestamos);
      this.loading = false;
    }, error => {
      console.error('Error al obtener prestamos:', error);
      this.loading = false;
    });
    this.nuevoPrestamoForm.get('fechaPrestamo')?.setValue(new Date());
    this.nuevoPagoForm.get('fechaPago')?.setValue(new Date());
  }
  toggleRow(prestamo) {
    if (this.expandedRows[prestamo.id]) {
      delete this.expandedRows[prestamo.id];
    } else {
      this.expandedRows = {};
      if (!prestamo.pagos) {
        this.loadPayments(prestamo).subscribe(() => {
          this.expandedRows[prestamo.id] = true;
        });
      } else {
        this.expandedRows[prestamo.id] = true;
      }
    }
  }
  handleInput(event) {
    const value = event.target.value;
    if (!value) {
      this.fechaPlaceholder = 'dd/MM/AAAA';
    }
  }
  loadPayments(prestamo) {
    return this.prestamoService.getPagosByPrestamoId(prestamo.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(data => {
      prestamo.pagos = data;
      console.log(`Pagos para el préstamo ${prestamo.id}:`, prestamo.pagos);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      console.error(`Error al obtener pagos para el préstamo ${prestamo.id}:`, error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]);
    }));
  }
  showPagoDialog(prestamo) {
    this.nuevoPagoForm.patchValue({
      codigoPrestamo: prestamo.id,
      fechaPago: new Date(),
      montoPagado: ''
    });
    this.displayDialogPago = true;
    console.log('Valores del formulario después de setValue:', this.nuevoPagoForm.value);
  }
  closePagoDialog() {
    this.displayDialogPago = false;
    this.selectedPrestamo = null;
    this.nuevoPagoForm.reset();
  }
  closeModalDialog() {
    this.displayDialog = false;
    this.nuevoPrestamoForm.reset();
  }
  abrirModalRegistro() {
    this.nuevoPrestamoForm.patchValue({
      nombre: '',
      apellidos: '',
      cedula: '',
      contacto: '',
      montoPrestamo: '',
      fechaPrestamo: new Date(),
      estado: ''
    });
    this.displayDialog = true;
  }
  createLoan() {
    const formValue = this.nuevoPrestamoForm.value;
    // Convertir la fecha del préstamo a UTC antes de enviarla
    const fechaPrestamoLocal = new Date(formValue.fechaPrestamo);
    const fechaPrestamoUTC = new Date(Date.UTC(fechaPrestamoLocal.getFullYear(), fechaPrestamoLocal.getMonth(), fechaPrestamoLocal.getDate(), fechaPrestamoLocal.getHours(), fechaPrestamoLocal.getMinutes(), fechaPrestamoLocal.getSeconds()));
    const prestamoData = {
      id: 0,
      nombre: formValue.nombre,
      apellidos: formValue.apellidos,
      cedula: formValue.cedula,
      contacto: formValue.contacto,
      montoPrestamo: parseFloat(formValue.montoPrestamo),
      fechaPrestamo: fechaPrestamoUTC.toISOString(),
      estado: 'activo'
    };
    console.log('JSON enviado:', JSON.stringify(prestamoData, null, 2));
    this.prestamoService.registrarPrestamo(prestamoData).subscribe(response => {
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Préstamo registrado exitosamente.'
      });
      this.closeModalDialog();
      this.loadPrestamos();
    }, error => {
      if (error.status === 400 && error.error.message === 'No hay ninguna caja abierta. No se puede registrar el préstamo.') {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Antes de registrar el préstamo. Debes de abrir caja.'
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error al registrar el préstamo.'
        });
      }
      console.error('Error al registrar el préstamo:', error);
    });
  }
  registrarPago() {
    const formValue = this.nuevoPagoForm.value;
    const fechaPagoLocal = new Date(formValue.fechaPago);
    const fechaPagoUTC = new Date(Date.UTC(fechaPagoLocal.getFullYear(), fechaPagoLocal.getMonth(), fechaPagoLocal.getDate(), fechaPagoLocal.getHours(), fechaPagoLocal.getMinutes(), fechaPagoLocal.getSeconds()));
    const pagoData = {
      id: 0,
      prestamo: {
        id: formValue.codigoPrestamo
      },
      fechaPago: fechaPagoUTC.toISOString(),
      montoPagado: parseFloat(formValue.montoPagado)
    };
    console.log('JSON enviado:', JSON.stringify(pagoData, null, 2));
    this.prestamoService.registrarPago(pagoData).subscribe(response => {
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Pago registrado exitosamente.'
      });
      this.closePagoDialog();
      this.nuevoPagoForm.reset();
      const prestamoId = formValue.codigoPrestamo;
      const prestamo = this.prestamos.find(p => p.id === Number(prestamoId));
      if (prestamo) {
        this.loadPayments(prestamo).subscribe(() => {
          const totalPagado = (prestamo.pagos || []).reduce((sum, pago) => sum + pago.montoPagado, 0);
          prestamo.saldoRestante = prestamo.montoPrestamo - totalPagado;
          if (prestamo.saldoRestante === 0) {
            this.loadPrestamos();
            this.expandedRows[prestamoId] = false;
          }
        });
      }
    }, error => {
      if (error.status === 400 && error.error.message === 'No hay ninguna caja abierta. No se puede registrar el pago en caja.') {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se puede registrar el pago. La Caja no esta abierta.'
        });
      } else {
        const errorMessage = error.error?.message || 'Error al registrar el pago.';
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: errorMessage
        });
        console.error('Error al registrar el pago:', error);
      }
    });
  }
  loadPrestamos() {
    this.loading = true;
    this.prestamoService.getPrestamos().subscribe(data => {
      this.prestamos = data;
      console.log('Prestamos actualizados:', this.prestamos);
      this.loading = false;
    }, error => {
      console.error('Error al obtener prestamos:', error);
      this.loading = false;
    });
  }
  //para buscar prestamos
  onTermInput(event) {
    const term = event.target.value;
    if (term.length >= 1) {
      this.expandedRows = {};
      this.prestamoService.buscarPrestamos(term).subscribe(data => {
        this.prestamos = data;
      }, error => {
        console.error('Error al buscar el préstamo:', error);
      });
    } else {
      this.loadPrestamos();
    }
  }
  static {
    this.ɵfac = function PrestamosComponent_Factory(t) {
      return new (t || PrestamosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_service_prestamo_service__WEBPACK_IMPORTED_MODULE_0__.PrestamoService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_service_cliente_service__WEBPACK_IMPORTED_MODULE_1__.ClienteService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PrestamosComponent,
      selectors: [["app-prestamos"]],
      viewQuery: function PrestamosComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
        }
      },
      decls: 93,
      vars: 26,
      consts: [[1, "grid"], [1, "col-12"], [1, "card", "p-4", "border-none", "shadow-premium", "mb-4", "flex", "align-items-center", "justify-content-between", "bg-white", "overflow-hidden", "relative", 2, "border-radius", "1.25rem"], [1, "flex", "align-items-center", "relative", "z-1"], [1, "p-3", "border-round-xl", "bg-orange-50", "mr-4", "shadow-sm"], [1, "pi", "pi-dollar", "text-orange-600", "text-3xl"], [1, "m-0", "font-bold", "text-900", "line-height-2", "tracking-tight"], [1, "m-0", "text-600", "font-medium", "opacity-70"], [1, "absolute", "-top-10", "-right-10", "bg-orange-50", "border-circle", "opacity-50", 2, "width", "250px", "height", "250px"], [1, "card", "border-none", "shadow-2", "border-round-xl", "overflow-hidden"], ["dataKey", "id", "responsiveLayout", "scroll", "styleClass", "p-datatable-gridlines", 3, "value", "expandedRowKeys", "paginator", "rows"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "rowexpansion"], ["pTemplate", "emptymessage"], ["styleClass", "border-round-xl overflow-hidden shadow-5", 3, "visibleChange", "visible", "modal", "closable", "breakpoints"], [3, "ngSubmit", "formGroup"], [1, "grid", "p-fluid", "mt-2"], [1, "field", "col-12", "md:col-6"], [1, "font-semibold", "text-700", "mb-2", "block", 2, "font-size", "0.84rem"], [1, "p-inputgroup"], [1, "p-inputgroup-addon"], [1, "pi", "pi-user"], ["type", "text", "pInputText", "", "formControlName", "nombre", "placeholder", "Nombres"], ["type", "text", "pInputText", "", "formControlName", "apellidos", "placeholder", "Apellidos"], [1, "pi", "pi-id-card"], ["type", "text", "pInputText", "", "formControlName", "cedula", "placeholder", "0000000000"], [1, "pi", "pi-phone"], ["type", "text", "pInputText", "", "formControlName", "contacto", "placeholder", "09XXXXXXXX"], [1, "pi", "pi-calendar"], ["formControlName", "fechaPrestamo", "placeholder", "Seleccionar fecha", "dateFormat", "dd/mm/yy", 3, "appendTo"], [1, "pi", "pi-dollar"], ["type", "text", "pInputText", "", "formControlName", "montoPrestamo", "placeholder", "0.00"], ["pTemplate", "footer"], [1, "field", "col-12"], [1, "pi", "pi-code"], ["type", "text", "pInputText", "", "formControlName", "codigoPrestamo", "placeholder", "C\u00F3digo"], ["formControlName", "fechaPago", "dateFormat", "dd/mm/yy", 3, "onInput", "showIcon", "showOnFocus", "placeholder"], ["type", "text", "pInputText", "", "formControlName", "montoPagado", "placeholder", "0.00"], [1, "flex", "align-items-center", "justify-content-between", "flex-wrap", "gap-2", "pb-2"], ["pButton", "", "pRipple", "", "label", "Nuevo Pr\u00E9stamo", "icon", "pi pi-plus", 1, "p-button-primary", "p-button-sm", "border-round-lg", 3, "click"], [1, "p-input-icon-left"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Buscar por nombre, apellido o c\u00E9dula...", 1, "border-round-lg", 2, "min-width", "280px", 3, "input"], [2, "width", "3rem"], ["pSortableColumn", "prestamista", 2, "min-width", "12rem"], ["field", "prestamista"], ["pSortableColumn", "cedula", 2, "min-width", "9rem"], ["field", "cedula"], ["pSortableColumn", "contacto", 2, "min-width", "9rem"], ["field", "contacto"], ["pSortableColumn", "fechaPrestamo", 2, "min-width", "10rem"], ["field", "fechaPrestamo"], ["pSortableColumn", "montoPrestamo", 2, "min-width", "10rem"], ["field", "montoPrestamo"], [2, "min-width", "8rem"], [1, "flex", "justify-content-between", "align-items-center"], ["field", "estado", "matchMode", "equals", "display", "menu"], ["pTemplate", "filter"], [2, "min-width", "9rem", "text-align", "center"], ["placeholder", "Todos", 3, "onChange", "ngModel", "options"], ["pTemplate", "item"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-button-text", "p-button-rounded", "p-button-plain", 3, "click", "icon"], [1, "flex", "align-items-center", "gap-2"], [1, "flex", "align-items-center", "justify-content-center", "border-round-full", "bg-primary-50", 2, "width", "32px", "height", "32px", "min-width", "32px"], [1, "pi", "pi-user", "text-primary", 2, "font-size", "0.75rem"], [1, "font-medium", "text-900"], [1, "font-semibold", "text-900"], [3, "severity", "value", "rounded"], [2, "text-align", "center"], ["pButton", "", "pRipple", "", "icon", "pi pi-plus", "pTooltip", "Registrar Pago", "tooltipPosition", "top", "class", "p-button-rounded p-button-success p-button-text", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "icon", "pi pi-plus", "pTooltip", "Registrar Pago", "tooltipPosition", "top", 1, "p-button-rounded", "p-button-success", "p-button-text", 3, "click"], ["colspan", "8", 1, "p-0"], [1, "p-3", "surface-50"], [1, "flex", "align-items-center", "mb-3", "gap-2"], [1, "p-2", "border-round-lg", "bg-primary-50"], [1, "pi", "pi-list", "text-primary", 2, "font-size", "0.85rem"], [1, "font-bold", "text-700", 2, "font-size", "0.88rem"], ["dataKey", "id", "responsiveLayout", "scroll", "styleClass", "p-datatable-sm p-datatable-striped", 3, "value"], ["pSortableColumn", "fechaPago"], ["field", "fechaPago"], ["pSortableColumn", "montoPagado"], ["field", "montoPagado"], ["pSortableColumn", "saldoRestante"], ["field", "saldoRestante"], [1, "font-medium", "text-green-600"], [1, "font-medium", 3, "ngClass"], ["colspan", "3", 1, "text-center", "text-500", "py-4"], [1, "pi", "pi-inbox", "mr-2"], ["colspan", "8", 1, "text-center", "text-500", "py-5"], [1, "pi", "pi-inbox", "text-3xl", "mb-2", "block"], [1, "flex", "align-items-center", "gap-3", "w-full"], [1, "pi", "pi-dollar", "text-primary", "text-xl"], [1, "font-bold", "text-900", 2, "font-size", "1.05rem"], [1, "text-500", 2, "font-size", "0.8rem"], ["pButton", "", "pRipple", "", "label", "Cancelar", "icon", "pi pi-times", "type", "button", 1, "p-button-text", "p-button-danger", 3, "click"], ["pButton", "", "pRipple", "", "label", "Registrar Pr\u00E9stamo", "icon", "pi pi-save", "type", "button", 1, "p-button-primary", 3, "click"], [1, "p-2", "border-round-lg", 2, "background", "#d1fae5"], [1, "pi", "pi-check-circle", "text-xl", 2, "color", "#10b981"], ["pButton", "", "pRipple", "", "label", "Registrar Pago", "icon", "pi pi-save", "type", "button", 1, "p-button-success", 3, "click"]],
      template: function PrestamosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div")(8, "h2", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Registro de Pr\u00E9stamos y Pagos");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Control de anticipos y cuotas a productores \u00B7 AgroFranco");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9)(14, "p-table", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, PrestamosComponent_ng_template_15_Template, 5, 0, "ng-template", 11)(16, PrestamosComponent_ng_template_16_Template, 24, 0, "ng-template", 12)(17, PrestamosComponent_ng_template_17_Template, 25, 20, "ng-template", 13)(18, PrestamosComponent_ng_template_18_Template, 12, 3, "ng-template", 14)(19, PrestamosComponent_ng_template_19_Template, 4, 0, "ng-template", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p-dialog", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("visibleChange", function PrestamosComponent_Template_p_dialog_visibleChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.displayDialog, $event) || (ctx.displayDialog = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, PrestamosComponent_ng_template_21_Template, 8, 0, "ng-template", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "form", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function PrestamosComponent_Template_form_ngSubmit_22_listener() {
            return ctx.createLoan();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 18)(24, "div", 19)(25, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Nombres");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 21)(28, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 19)(32, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Apellidos");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 21)(35, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 19)(39, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "N\u00BA de C\u00E9dula");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 21)(42, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 19)(46, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "N\u00BA de Contacto");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 21)(49, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 19)(53, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Fecha del Pr\u00E9stamo");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 21)(56, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "p-calendar", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 19)(60, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Monto Prestado (USD)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 21)(63, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "input", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, PrestamosComponent_ng_template_66_Template, 2, 0, "ng-template", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "p-dialog", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("visibleChange", function PrestamosComponent_Template_p_dialog_visibleChange_67_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.displayDialogPago, $event) || (ctx.displayDialogPago = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, PrestamosComponent_ng_template_68_Template, 8, 0, "ng-template", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "form", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function PrestamosComponent_Template_form_ngSubmit_69_listener() {
            return ctx.registrarPago();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 18)(71, "div", 35)(72, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "C\u00F3digo del Pr\u00E9stamo");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 21)(75, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 35)(79, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Fecha del Pago");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 21)(82, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "p-calendar", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onInput", function PrestamosComponent_Template_p_calendar_onInput_84_listener($event) {
            return ctx.handleInput($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 35)(86, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Monto del Pago (USD)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 21)(89, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "input", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](92, PrestamosComponent_ng_template_92_Template, 2, 0, "ng-template", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.prestamos)("expandedRowKeys", ctx.expandedRows)("paginator", true)("rows", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](22, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("visible", ctx.displayDialog);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("modal", true)("closable", false)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](23, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.nuevoPrestamoForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("appendTo", "body");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](24, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("visible", ctx.displayDialogPago);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("modal", true)("closable", false)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](25, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.nuevoPagoForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showIcon", false)("showOnFocus", false)("placeholder", ctx.fechaPlaceholder);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, primeng_dialog__WEBPACK_IMPORTED_MODULE_9__.Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, primeng_table__WEBPACK_IMPORTED_MODULE_12__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_12__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_12__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_12__.ColumnFilter, primeng_toast__WEBPACK_IMPORTED_MODULE_13__.Toast, primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__.Dropdown, primeng_ripple__WEBPACK_IMPORTED_MODULE_15__.Ripple, primeng_calendar__WEBPACK_IMPORTED_MODULE_16__.Calendar, primeng_tooltip__WEBPACK_IMPORTED_MODULE_17__.Tooltip, primeng_tag__WEBPACK_IMPORTED_MODULE_18__.Tag, _angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%]     .p-frozen-column {\n  font-weight: bold;\n}\n\n[_nghost-%COMP%]     .p-datatable-frozen-tbody {\n  font-weight: bold;\n}\n\n[_nghost-%COMP%]     .p-progressbar {\n  height: 0.5rem;\n}\n\n.status-label[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  display: inline-block;\n  text-align: center;\n  min-width: 80px;\n}\n\n.status-activo[_ngcontent-%COMP%] {\n  background-color: #e79494;\n  color: #a81616;\n}\n\n.status-pagado[_ngcontent-%COMP%] {\n  background-color: #c3e6cb;\n  color: #155724;\n}\n\n.selected-row[_ngcontent-%COMP%] {\n  background-color: #d3d3d3; \n\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.cancel-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXN0YW1vcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ0o7RUFDSSxpQkFBQTtBQUNoQjs7QUFFWTtFQUNJLGlCQUFBO0FBQ2hCOztBQUVZO0VBQ0ksY0FBQTtBQUNoQjs7QUFFWTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ2hCOztBQUVZO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBQ2hCOztBQUVZO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBQ2hCOztBQUNZO0VBQ0kseUJBQUEsRUFBQSwyQ0FBQTtBQUVoQjs7QUFBWTtFQUNJLGtCQUFBO0FBR2hCOztBQUFZO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUdoQiIsImZpbGUiOiJwcmVzdGFtb3MuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCA6Om5nLWRlZXAgLnAtZnJvemVuLWNvbHVtbiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUtZnJvemVuLXRib2R5IHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgOmhvc3QgOjpuZy1kZWVwIC5wLXByb2dyZXNzYmFyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAuNXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN0YXR1cy1sYWJlbCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogODBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN0YXR1cy1hY3Rpdm8ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzk0OTQ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNhODE2MTY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zdGF0dXMtcGFnYWRvIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNlNmNiO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTU1NzI0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlbGVjdGVkLXJvdyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMzsgLyogQ2FtYmlhIGVzdGUgY29sb3Igc2Vnw7puIHR1IHByZWZlcmVuY2lhICovXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGlhbG9nLWhlYWRlciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2FuY2VsLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL3NlY3JldGFyaWEvcHJlc3RhbW9zL3ByZXN0YW1vcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ0o7RUFDSSxpQkFBQTtBQUNoQjs7QUFFWTtFQUNJLGlCQUFBO0FBQ2hCOztBQUVZO0VBQ0ksY0FBQTtBQUNoQjs7QUFFWTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ2hCOztBQUVZO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBQ2hCOztBQUVZO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBQ2hCOztBQUNZO0VBQ0kseUJBQUEsRUFBQSwyQ0FBQTtBQUVoQjs7QUFBWTtFQUNJLGtCQUFBO0FBR2hCOztBQUFZO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUdoQjtBQUNBLHdzRUFBd3NFIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICA6aG9zdCA6Om5nLWRlZXAgLnAtZnJvemVuLWNvbHVtbiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUtZnJvemVuLXRib2R5IHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgOmhvc3QgOjpuZy1kZWVwIC5wLXByb2dyZXNzYmFyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAuNXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN0YXR1cy1sYWJlbCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogODBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN0YXR1cy1hY3Rpdm8ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzk0OTQ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNhODE2MTY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zdGF0dXMtcGFnYWRvIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNlNmNiO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTU1NzI0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlbGVjdGVkLXJvdyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMzsgLyogQ2FtYmlhIGVzdGUgY29sb3Igc2Vnw4PCum4gdHUgcHJlZmVyZW5jaWEgKi9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kaWFsb2ctaGVhZGVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jYW5jZWwtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 27417:
/*!***********************************************************************************************************!*\
  !*** ./src/app/demo/components/secretaria/reporte-mensual-clientes/reporte-mensual-clientes.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReporteMensualClientesComponent: () => (/* binding */ ReporteMensualClientesComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ 2752);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf-autotable */ 78198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_demo_service_cliente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/demo/service/cliente.service */ 4771);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/calendar */ 41314);














const _c0 = (a0, a1) => ({
  "text-blue-600 font-bold": a0,
  "text-400": a1
});
function ReporteMensualClientesComponent_ng_template_36_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const m_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](m_r1);
  }
}
function ReporteMensualClientesComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 28)(1, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Datos Generales del Productor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Producci\u00F3n Mensual (Quintales)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Consolidado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "tr", 32)(8, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Apellidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "C\u00E9dula");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Recinto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Has.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ReporteMensualClientesComponent_ng_template_36_th_18_Template, 2, 1, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Total QQ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.mesesLabels);
  }
}
function ReporteMensualClientesComponent_ng_template_37_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const val_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](5, _c0, val_r3 > 0, val_r3 === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", val_r3 > 0 ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 2, val_r3, "1.2-2") : "-", " ");
  }
}
function ReporteMensualClientesComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 40)(1, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ReporteMensualClientesComponent_ng_template_37_td_12_Template, 3, 8, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r4.nombres);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r4.apellidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r4.cedula);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r4.recinto);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 7, item_r4.hectareas, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r4.meses);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](15, 10, item_r4.totalQuintales, "1.2-2"), " ");
  }
}
function ReporteMensualClientesComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 48)(2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "No se encontraron datos para el reporte");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Ajuste los filtros de b\u00FAsqueda para visualizar resultados.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
}
class ReporteMensualClientesComponent {
  constructor(clienteService, messageService, datePipe) {
    this.clienteService = clienteService;
    this.messageService = messageService;
    this.datePipe = datePipe;
    this.fechaInicio = new Date(new Date().getFullYear(), 0, 1); // 1 de Enero
    this.fechaFin = new Date();
    this.programaSeleccionado = 'ninguno';
    this.programas = [{
      label: 'Todos / Ninguno',
      value: 'ninguno'
    }, {
      label: 'Rainforest',
      value: 'rainforest'
    }, {
      label: 'Nestle',
      value: 'nestle'
    }, {
      label: 'Olam',
      value: 'olam'
    }];
    this.mesesLabels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    this.reporteData = [];
    this.totalRecords = 0;
    this.loading = false;
    this.rows = 10;
    this.first = 0;
  }
  ngOnInit() {
    this.cargarReporte();
  }
  cargarReporte() {
    this.loading = true;
    const inicioFormatted = this.datePipe.transform(this.fechaInicio, 'yyyy-MM-dd') || '';
    const finFormatted = this.datePipe.transform(this.fechaFin, 'yyyy-MM-dd') || '';
    const page = Math.floor(this.first / this.rows);
    this.clienteService.obtenerReporteVentas(inicioFormatted, finFormatted, this.programaSeleccionado, page, this.rows).subscribe({
      next: data => {
        // Transformar la lista plana del DTO al formato del componente
        this.reporteData = data.map(item => ({
          ...item,
          nombres: item.nombre,
          // Mapear 'nombre' a 'nombres' para el HTML
          meses: [item.enero, item.febrero, item.marzo, item.abril, item.mayo, item.junio, item.julio, item.agosto, item.septiembre, item.octubre, item.noviembre, item.diciembre],
          totalQuintales: item.totalAnual
        }));
        // El total de registros viene en cada fila del DTO según la implementación del SP
        this.totalRecords = data.length > 0 ? data[0].totalRegistros : 0;
        this.loading = false;
      },
      error: err => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error 500',
          detail: 'Error interno del servidor. Verifique que el procedimiento almacenado exista y los parámetros sean correctos.'
        });
        this.loading = false;
      }
    });
  }
  onLazyLoad(event) {
    this.first = event.first;
    this.rows = event.rows;
    this.cargarReporte();
  }
  limpiarFiltros() {
    this.fechaInicio = new Date(new Date().getFullYear(), 0, 1);
    this.fechaFin = new Date();
    this.programaSeleccionado = 'ninguno';
    this.first = 0;
    this.cargarReporte();
  }
  generarReportePDF() {
    this.loading = true; // Activar el spinner mientras se obtienen todos los datos
    const inicioFormatted = this.datePipe.transform(this.fechaInicio, 'yyyy-MM-dd') || '';
    const finFormatted = this.datePipe.transform(this.fechaFin, 'yyyy-MM-dd') || '';
    // Consultamos con un tamaño de página muy grande (9999) para traer todos los registros
    this.clienteService.obtenerReporteVentas(inicioFormatted, finFormatted, this.programaSeleccionado, 0, 9999).subscribe({
      next: data => {
        const allData = data.map(item => ({
          ...item,
          nombres: item.nombre,
          meses: [item.enero, item.febrero, item.marzo, item.abril, item.mayo, item.junio, item.julio, item.agosto, item.septiembre, item.octubre, item.noviembre, item.diciembre],
          totalQuintales: item.totalAnual
        }));
        this.procesarGeneracionPDF(allData);
        this.loading = false;
      },
      error: err => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudieron recuperar todos los datos para el PDF.'
        });
        this.loading = false;
      }
    });
  }
  procesarGeneracionPDF(datos) {
    const doc = new jspdf__WEBPACK_IMPORTED_MODULE_0__.jsPDF('l', 'mm', 'a4');
    const primaryColor = [27, 94, 32];
    const secondaryColor = [67, 160, 71];
    const lightGray = [245, 245, 245];
    const dateNow = this.datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss');
    const inicioStr = this.datePipe.transform(this.fechaInicio, 'MMMM yyyy')?.toUpperCase();
    const finStr = this.datePipe.transform(this.fechaFin, 'MMMM yyyy')?.toUpperCase();
    const tableBody = datos.map(item => [item.nombres, item.apellidos, item.cedula, item.recinto, item.hectareas.toFixed(2), ...item.meses.map(m => m > 0 ? m.toFixed(2) : '-'), item.totalQuintales.toFixed(2)]);
    (0,jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__["default"])(doc, {
      startY: 50,
      // Solo afecta a la primera página
      head: [['Nombre', 'Apellidos', 'Cédula', 'Recinto', 'Has.', ...this.mesesLabels, 'Total QQ']],
      body: tableBody,
      theme: 'grid',
      headStyles: {
        fillColor: [255, 255, 255],
        textColor: primaryColor,
        fontSize: 9,
        halign: 'center',
        fontStyle: 'bold',
        lineWidth: 0.3,
        lineColor: primaryColor
      },
      bodyStyles: {
        fontSize: 7.5,
        textColor: 50,
        valign: 'middle',
        lineWidth: 0.1,
        lineColor: [230, 230, 230]
      },
      alternateRowStyles: {
        fillColor: [252, 252, 252]
      },
      columnStyles: {
        0: {
          fontStyle: 'bold'
        },
        1: {
          fontStyle: 'bold'
        },
        2: {
          halign: 'center'
        },
        ...Object.fromEntries(Array.from({
          length: 12
        }, (_, i) => [i + 5, {
          halign: 'center'
        }])),
        17: {
          halign: 'right',
          fontStyle: 'bold',
          textColor: primaryColor,
          fillColor: [241, 248, 233]
        }
      },
      margin: {
        top: 15,
        left: 15,
        right: 15
      },
      // Margen superior reducido para páginas > 1
      didDrawPage: data => {
        if (data.pageNumber === 1) {
          // --- ENCABEZADO SOLO PAGINA 1 ---
          doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
          doc.rect(0, 0, 297, 3, 'F');
          doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
          doc.setFontSize(32);
          doc.setFont('times', 'bold');
          doc.text('AGROFRANCO', 15, 20);
          doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
          doc.setLineWidth(0.8);
          doc.line(15, 23, 60, 23);
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(10);
          doc.setTextColor(80, 80, 80);
          doc.text('CENTRO DE ACOPIO Y COMERCIALIZACIÓN DE CACAO', 15, 30);
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(11);
          doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
          doc.text('REPORTE CONSOLIDADO DE PRODUCTIVIDAD MENSUAL', 15, 36);
          // Cuadro Info Pag 1
          doc.setDrawColor(220, 220, 220);
          doc.setLineWidth(0.2);
          doc.roundedRect(190, 8, 95, 30, 2, 2, 'S');
          const prog = this.programaSeleccionado === 'ninguno' ? 'TODOS LOS PROGRAMAS' : this.programaSeleccionado.toUpperCase();
          doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
          doc.roundedRect(195, 12, 85, 7, 1, 1, 'F');
          doc.setTextColor(255, 255, 255);
          doc.setFontSize(9);
          doc.setFont('helvetica', 'bold');
          doc.text(`PROGRAMA: ${prog}`, 237.5, 17, {
            align: 'center'
          });
          doc.setTextColor(80, 80, 80);
          doc.setFontSize(8);
          doc.setFont('helvetica', 'normal');
          doc.text(`PERIODO: ${inicioStr} - ${finStr}`, 197, 24);
          doc.text(`CANTIDAD DE PRODUCTORES: ${datos.length}`, 197, 28);
          doc.text(`FECHA EMISIÓN: ${dateNow}`, 197, 32);
        } else {
          // Mini encabezado para páginas siguientes
          doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
          doc.rect(0, 0, 297, 1.5, 'F');
          doc.setFontSize(8);
          doc.setTextColor(150);
          doc.text(`AgroFranco - Continuación Reporte | ${dateNow}`, 15, 10);
        }
        // Footer siempre
        doc.setFontSize(7);
        doc.setTextColor(180);
        doc.text(`Página ${data.pageNumber}`, 282, 205, {
          align: 'right'
        });
      }
    });
    const finalTotal = datos.reduce((acc, curr) => acc + curr.totalQuintales, 0);
    const finalY = doc.lastAutoTable.finalY + 10;
    if (finalY < 185) {
      doc.setFillColor(240, 240, 240);
      doc.rect(212, finalY + 1, 72, 12, 'F');
      doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      doc.rect(210, finalY, 72, 12, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text('GRAN TOTAL (QQ):', 215, finalY + 7.5);
      doc.text(finalTotal.toFixed(2), 278, finalY + 7.5, {
        align: 'right'
      });
    }
    doc.save(`Reporte_Maestro_Ventas_${this.datePipe.transform(new Date(), 'yyyyMMdd')}.pdf`);
  }
  static {
    this.ɵfac = function ReporteMensualClientesComponent_Factory(t) {
      return new (t || ReporteMensualClientesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_demo_service_cliente_service__WEBPACK_IMPORTED_MODULE_2__.ClienteService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ReporteMensualClientesComponent,
      selectors: [["app-reporte-mensual-clientes"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe])],
      decls: 39,
      vars: 13,
      consts: [[1, "grid", "p-fluid"], [1, "col-12"], [1, "card", "p-4", "border-none", "shadow-premium", "mb-4", "flex", "align-items-center", "justify-content-between", "bg-white", "overflow-hidden", "relative", 2, "border-radius", "1.25rem"], [1, "flex", "align-items-center", "relative", "z-1"], [1, "p-3", "border-round-xl", "bg-orange-50", "mr-4", "shadow-sm"], [1, "pi", "pi-chart-bar", "text-orange-600", "text-3xl"], [1, "m-0", "font-bold", "text-900", "line-height-2", "tracking-tight"], [1, "m-0", "text-600", "font-medium", "opacity-70"], [1, "flex", "gap-3", "relative", "z-1"], ["pButton", "", "pRipple", "", "label", "Generar Reporte PDF", "icon", "pi pi-file-pdf", 1, "p-button-danger", "px-4", "py-2", "border-round-xl", "shadow-lg", "hover:shadow-xl", "transition-all", "font-bold", 3, "click"], [1, "absolute", "-top-10", "-right-10", "bg-orange-50", "border-circle", "opacity-50", 2, "width", "250px", "height", "250px"], [1, "card", "border-none", "shadow-sm", "p-4", "mb-4", "bg-white", "border-round-xl"], [1, "m-0", "mb-4", "font-bold", "text-800", "flex", "align-items-center"], [1, "pi", "pi-filter", "mr-2", "text-orange-500"], [1, "grid", "align-items-end"], [1, "col-12", "md:col-3"], [1, "block", "mb-2", "font-semibold", "text-700", "ml-1"], ["view", "month", "dateFormat", "mm/yy", "placeholder", "Mes Inicio", "styleClass", "w-full border-round-lg shadow-none", 3, "ngModelChange", "ngModel", "showIcon"], ["view", "month", "dateFormat", "mm/yy", "placeholder", "Mes Fin", "styleClass", "w-full border-round-lg shadow-none", 3, "ngModelChange", "ngModel", "showIcon"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Seleccione Programa", "styleClass", "w-full border-round-lg shadow-none", 3, "ngModelChange", "options", "ngModel"], [1, "col-12", "md:col-3", "flex", "gap-2"], ["pButton", "", "pRipple", "", "label", "Consultar Datos", "icon", "pi pi-search", 1, "p-button-primary", "border-round-lg", "shadow-md", "flex-1", "font-bold", "py-2", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-refresh", 1, "p-button-outlined", "p-button-secondary", "border-round-lg", "shadow-sm", 3, "click"], [1, "card", "border-none", "shadow-premium", "p-0", "overflow-hidden", "bg-white", 2, "border-radius", "1.25rem"], ["styleClass", "p-datatable-sm p-datatable-gridlines p-datatable-striped custom-report-table", "scrollHeight", "calc(100vh - 450px)", "responsiveLayout", "scroll", 3, "onLazyLoad", "value", "loading", "rows", "paginator", "lazy", "totalRecords", "scrollable"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "surface-50"], ["colspan", "5", 1, "text-center", "font-bold", "text-800", "bg-orange-50", "border-orange-100", "py-3"], ["colspan", "12", 1, "text-center", "font-bold", "text-800", "bg-blue-50", "border-blue-100", "py-3"], [1, "text-center", "font-bold", "text-white", "bg-green-600", "border-green-700", "py-3"], [1, "surface-ground"], [1, "font-bold", "text-700", 2, "min-width", "150px"], [1, "text-center", "font-bold", "text-700", 2, "min-width", "120px"], [1, "font-bold", "text-700", 2, "min-width", "130px"], [1, "text-center", "font-bold", "text-700", 2, "min-width", "100px"], ["class", "text-center font-semibold text-600", "style", "min-width: 80px;", 4, "ngFor", "ngForOf"], [1, "text-right", "font-bold", "text-green-700", "bg-green-50", 2, "min-width", "110px"], [1, "text-center", "font-semibold", "text-600", 2, "min-width", "80px"], [1, "hover:bg-orange-50", "transition-colors"], [1, "font-medium", "text-900"], [1, "text-center", "text-700", "font-mono", "text-sm"], [1, "text-600"], [1, "text-center", "font-bold", "text-800"], ["class", "text-center", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "text-right", "font-bold", "text-green-700", "bg-green-50"], [1, "text-center", 3, "ngClass"], ["colspan", "18", 1, "text-center", "p-8"], [1, "flex", "flex-column", "align-items-center"], [1, "pi", "pi-search-minus", "text-500", "text-6xl", "mb-4"], [1, "text-xl", "font-bold", "text-700"], [1, "text-500", "mt-2"]],
      template: function ReporteMensualClientesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div")(7, "h2", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Reporte Mensual de Ventas por Productor");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "An\u00E1lisis detallado de productividad y programas de certificaci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8)(12, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReporteMensualClientesComponent_Template_button_click_12_listener() {
            return ctx.generarReportePDF();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11)(15, "h5", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Par\u00E1metros de Filtrado ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Fecha de Inicio");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "p-calendar", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function ReporteMensualClientesComponent_Template_p_calendar_ngModelChange_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.fechaInicio, $event) || (ctx.fechaInicio = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 15)(24, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Fecha de Fin");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p-calendar", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function ReporteMensualClientesComponent_Template_p_calendar_ngModelChange_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.fechaFin, $event) || (ctx.fechaFin = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 15)(28, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Programa / Certificaci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "p-dropdown", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function ReporteMensualClientesComponent_Template_p_dropdown_ngModelChange_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.programaSeleccionado, $event) || (ctx.programaSeleccionado = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 20)(32, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReporteMensualClientesComponent_Template_button_click_32_listener() {
            return ctx.cargarReporte();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReporteMensualClientesComponent_Template_button_click_33_listener() {
            return ctx.limpiarFiltros();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 23)(35, "p-table", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onLazyLoad", function ReporteMensualClientesComponent_Template_p_table_onLazyLoad_35_listener($event) {
            return ctx.onLazyLoad($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, ReporteMensualClientesComponent_ng_template_36_Template, 21, 1, "ng-template", 25)(37, ReporteMensualClientesComponent_ng_template_37_Template, 16, 13, "ng-template", 26)(38, ReporteMensualClientesComponent_ng_template_38_Template, 8, 0, "ng-template", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.fechaInicio);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showIcon", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.fechaFin);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showIcon", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.programas);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.programaSeleccionado);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.reporteData)("loading", ctx.loading)("rows", ctx.rows)("paginator", true)("lazy", true)("totalRecords", ctx.totalRecords)("scrollable", true);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__.Dropdown, primeng_ripple__WEBPACK_IMPORTED_MODULE_10__.Ripple, primeng_calendar__WEBPACK_IMPORTED_MODULE_11__.Calendar, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe],
      styles: [".shadow-premium[_ngcontent-%COMP%] {\n        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05), 0 1px 8px rgba(0, 0, 0, 0.02) !important;\n    }\n    .custom-report-table[_ngcontent-%COMP%]   .p-datatable-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n        border-bottom: 2px solid #edf2f7;\n        padding: 1rem 0.5rem;\n    }\n    .custom-report-table[_ngcontent-%COMP%]   .p-datatable-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n        padding: 0.75rem 0.5rem;\n    }"]
    });
  }
}

/***/ }),

/***/ 2930:
/*!*****************************************************************!*\
  !*** ./src/app/demo/components/secretaria/secretaria.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecretariaModule: () => (/* binding */ SecretariaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clientes/clientes.component */ 1825);
/* harmony import */ var _dashboard_secretaria_dashboard_secretaria_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-secretaria/dashboard-secretaria.component */ 99727);
/* harmony import */ var _prestamos_prestamos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prestamos/prestamos.component */ 26761);
/* harmony import */ var _inventario_inventario_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventario/inventario.component */ 61617);
/* harmony import */ var _ventas_ventas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ventas/ventas.component */ 20305);
/* harmony import */ var _caja_caja_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./caja/caja.component */ 72829);
/* harmony import */ var _compra_cacao_compra_cacao_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compra-cacao/compra-cacao.component */ 30575);
/* harmony import */ var _compras_compras_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./compras/compras.component */ 74865);
/* harmony import */ var _compras_semanales_compras_semanales_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./compras-semanales/compras-semanales.component */ 41857);
/* harmony import */ var _view_compras_otros_productos_view_compras_otros_productos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-compras-otros-productos/view-compras-otros-productos.component */ 80377);
/* harmony import */ var _reporte_mensual_clientes_reporte_mensual_clientes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reporte-mensual-clientes/reporte-mensual-clientes.component */ 27417);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/listbox */ 69607);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/autocomplete */ 38784);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/rating */ 3015);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/slider */ 47763);
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/togglebutton */ 95656);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/multiselect */ 92159);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/progressbar */ 21416);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/progressspinner */ 53244);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! primeng/tag */ 93616);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! primeng/inputswitch */ 46764);
/* harmony import */ var _uikit_table_tabledemo_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../uikit/table/tabledemo-routing.module */ 96417);
/* harmony import */ var _secretaria_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./secretaria.routing.module */ 62718);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/selectbutton */ 69656);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/tabview */ 634);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/checkbox */ 26771);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/inputnumber */ 61759);
/* harmony import */ var _view_ventas_view_ventas_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view-ventas/view-ventas.component */ 913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37580);










































class SecretariaModule {
  static {
    this.ɵfac = function SecretariaModule_Factory(t) {
      return new (t || SecretariaModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
      type: SecretariaModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _uikit_table_tabledemo_routing_module__WEBPACK_IMPORTED_MODULE_11__.TableDemoRoutingModule, _secretaria_routing_module__WEBPACK_IMPORTED_MODULE_12__.SecretariaRoutingModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_18__.DialogModule, primeng_button__WEBPACK_IMPORTED_MODULE_19__.ButtonModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_20__.InputNumberModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_21__.InputTextModule, primeng_table__WEBPACK_IMPORTED_MODULE_22__.TableModule, primeng_toast__WEBPACK_IMPORTED_MODULE_23__.ToastModule, primeng_listbox__WEBPACK_IMPORTED_MODULE_24__.ListboxModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_25__.AutoCompleteModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_26__.DropdownModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_27__.RippleModule, primeng_rating__WEBPACK_IMPORTED_MODULE_28__.RatingModule, primeng_slider__WEBPACK_IMPORTED_MODULE_29__.SliderModule, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_30__.ToggleButtonModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_31__.MultiSelectModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_32__.ProgressBarModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_33__.CalendarModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_34__.ConfirmDialogModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_35__.SelectButtonModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_36__.TooltipModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_37__.TabViewModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_38__.CheckboxModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_39__.ProgressSpinnerModule, primeng_tag__WEBPACK_IMPORTED_MODULE_40__.TagModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_41__.InputSwitchModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](SecretariaModule, {
    declarations: [_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_0__.ClientesComponent, _dashboard_secretaria_dashboard_secretaria_component__WEBPACK_IMPORTED_MODULE_1__.DashboardSecretariaComponent, _prestamos_prestamos_component__WEBPACK_IMPORTED_MODULE_2__.PrestamosComponent, _inventario_inventario_component__WEBPACK_IMPORTED_MODULE_3__.InventarioComponent, _ventas_ventas_component__WEBPACK_IMPORTED_MODULE_4__.VentasComponent, _caja_caja_component__WEBPACK_IMPORTED_MODULE_5__.CajaComponent, _compra_cacao_compra_cacao_component__WEBPACK_IMPORTED_MODULE_6__.CompraCacaoComponent, _compras_compras_component__WEBPACK_IMPORTED_MODULE_7__.ComprasComponent, _compras_semanales_compras_semanales_component__WEBPACK_IMPORTED_MODULE_8__.ComprasSemanalesComponent, _view_compras_otros_productos_view_compras_otros_productos_component__WEBPACK_IMPORTED_MODULE_9__.ViewComprasOtrosProductosComponent, _view_ventas_view_ventas_component__WEBPACK_IMPORTED_MODULE_13__.ViewVentasComponent, _reporte_mensual_clientes_reporte_mensual_clientes_component__WEBPACK_IMPORTED_MODULE_10__.ReporteMensualClientesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _uikit_table_tabledemo_routing_module__WEBPACK_IMPORTED_MODULE_11__.TableDemoRoutingModule, _secretaria_routing_module__WEBPACK_IMPORTED_MODULE_12__.SecretariaRoutingModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_18__.DialogModule, primeng_button__WEBPACK_IMPORTED_MODULE_19__.ButtonModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_20__.InputNumberModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_21__.InputTextModule, primeng_table__WEBPACK_IMPORTED_MODULE_22__.TableModule, primeng_toast__WEBPACK_IMPORTED_MODULE_23__.ToastModule, primeng_listbox__WEBPACK_IMPORTED_MODULE_24__.ListboxModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_25__.AutoCompleteModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_26__.DropdownModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_27__.RippleModule, primeng_rating__WEBPACK_IMPORTED_MODULE_28__.RatingModule, primeng_slider__WEBPACK_IMPORTED_MODULE_29__.SliderModule, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_30__.ToggleButtonModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_31__.MultiSelectModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_32__.ProgressBarModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_33__.CalendarModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_34__.ConfirmDialogModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_35__.SelectButtonModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_36__.TooltipModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_37__.TabViewModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_38__.CheckboxModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_39__.ProgressSpinnerModule, primeng_tag__WEBPACK_IMPORTED_MODULE_40__.TagModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_41__.InputSwitchModule]
  });
})();

/***/ }),

/***/ 62718:
/*!*************************************************************************!*\
  !*** ./src/app/demo/components/secretaria/secretaria.routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecretariaRoutingModule: () => (/* binding */ SecretariaRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _caja_caja_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caja/caja.component */ 72829);
/* harmony import */ var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientes/clientes.component */ 1825);
/* harmony import */ var _compra_cacao_compra_cacao_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compra-cacao/compra-cacao.component */ 30575);
/* harmony import */ var _compras_semanales_compras_semanales_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compras-semanales/compras-semanales.component */ 41857);
/* harmony import */ var _compras_compras_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compras/compras.component */ 74865);
/* harmony import */ var _dashboard_secretaria_dashboard_secretaria_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-secretaria/dashboard-secretaria.component */ 99727);
/* harmony import */ var _inventario_inventario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inventario/inventario.component */ 61617);
/* harmony import */ var _prestamos_prestamos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./prestamos/prestamos.component */ 26761);
/* harmony import */ var _ventas_ventas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ventas/ventas.component */ 20305);
/* harmony import */ var _view_compras_otros_productos_view_compras_otros_productos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-compras-otros-productos/view-compras-otros-productos.component */ 80377);
/* harmony import */ var _view_ventas_view_ventas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-ventas/view-ventas.component */ 913);
/* harmony import */ var _reporte_mensual_clientes_reporte_mensual_clientes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reporte-mensual-clientes/reporte-mensual-clientes.component */ 27417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);















const routes = [{
  path: 'clientes',
  component: _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_1__.ClientesComponent
}, {
  path: 'dashboard',
  component: _dashboard_secretaria_dashboard_secretaria_component__WEBPACK_IMPORTED_MODULE_5__.DashboardSecretariaComponent
}, {
  path: 'prestamos',
  component: _prestamos_prestamos_component__WEBPACK_IMPORTED_MODULE_7__.PrestamosComponent
}, {
  path: 'ventas',
  component: _ventas_ventas_component__WEBPACK_IMPORTED_MODULE_8__.VentasComponent
}, {
  path: 'caja',
  component: _caja_caja_component__WEBPACK_IMPORTED_MODULE_0__.CajaComponent
}, {
  path: 'compras-cacao',
  component: _compra_cacao_compra_cacao_component__WEBPACK_IMPORTED_MODULE_2__.CompraCacaoComponent
}, {
  path: 'otras-compras',
  component: _compras_compras_component__WEBPACK_IMPORTED_MODULE_4__.ComprasComponent
}, {
  path: 'inventario',
  component: _inventario_inventario_component__WEBPACK_IMPORTED_MODULE_6__.InventarioComponent
}, {
  path: 'compras-semanales',
  component: _compras_semanales_compras_semanales_component__WEBPACK_IMPORTED_MODULE_3__.ComprasSemanalesComponent
}, {
  path: 'view-otras-compras',
  component: _view_compras_otros_productos_view_compras_otros_productos_component__WEBPACK_IMPORTED_MODULE_9__.ViewComprasOtrosProductosComponent
}, {
  path: 'view-ventas',
  component: _view_ventas_view_ventas_component__WEBPACK_IMPORTED_MODULE_10__.ViewVentasComponent
}, {
  path: 'reporte-mensual-clientes',
  component: _reporte_mensual_clientes_reporte_mensual_clientes_component__WEBPACK_IMPORTED_MODULE_11__.ReporteMensualClientesComponent
}];
class SecretariaRoutingModule {
  static {
    this.ɵfac = function SecretariaRoutingModule_Factory(t) {
      return new (t || SecretariaRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
      type: SecretariaRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](SecretariaRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
  });
})();

/***/ }),

/***/ 20305:
/*!***********************************************************************!*\
  !*** ./src/app/demo/components/secretaria/ventas/ventas.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VentasComponent: () => (/* binding */ VentasComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_demo_service_articulo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/articulo.service */ 79358);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var src_app_demo_service_ventas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/service/ventas.service */ 65716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputnumber */ 61759);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/progressspinner */ 53244);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/tag */ 93616);




















const _c0 = () => ({
  width: "74vw"
});
const _c1 = () => ({
  "960px": "90vw",
  "640px": "100vw"
});
const _c2 = () => ({
  width: "32px",
  height: "32px"
});
const _c3 = () => ({
  "width": "135px",
  "min-width": "135px"
});
function VentasComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "p-progressSpinner", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div")(3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Registrando venta...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Por favor espere");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c2));
  }
}
function VentasComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "C\u00F3d");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Art\u00EDculo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Detalle de Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "P. Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function VentasComponent_ng_template_47_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 72)(1, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function VentasComponent_ng_template_47_div_16_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const venta_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](venta_r2.montoCobro, $event) || (venta_r2.montoCobro = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function VentasComponent_ng_template_47_div_16_Template_input_ngModelChange_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const venta_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.calcularCantidadPorMonto(venta_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const venta_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", venta_r2.montoCobro);
  }
}
function VentasComponent_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 55)(4, "div", 56)(5, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 59)(8, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td", 62)(13, "div", 63)(14, "p-dropdown", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function VentasComponent_ng_template_47_Template_p_dropdown_ngModelChange_14_listener($event) {
      const venta_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](venta_r2.unidadMedida, $event) || (venta_r2.unidadMedida = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function VentasComponent_ng_template_47_Template_p_dropdown_onChange_14_listener() {
      const venta_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.calcularSubtotal(venta_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function VentasComponent_ng_template_47_Template_input_ngModelChange_15_listener($event) {
      const venta_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](venta_r2.cantidad, $event) || (venta_r2.cantidad = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function VentasComponent_ng_template_47_Template_input_ngModelChange_15_listener() {
      const venta_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.calcularSubtotal(venta_r2));
    })("keydown", function VentasComponent_ng_template_47_Template_input_keydown_15_listener($event) {
      const venta_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]((venta_r2.unidadMedida === "UNIDAD" || !venta_r2.permiteFracciones) && ($event.key === "." || $event.key === ",") ? $event.preventDefault() : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, VentasComponent_ng_template_47_div_16_Template, 4, 1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td", 67)(18, "p-inputNumber", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function VentasComponent_ng_template_47_Template_p_inputNumber_ngModelChange_18_listener($event) {
      const venta_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](venta_r2.precioUnitario, $event) || (venta_r2.precioUnitario = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onInput", function VentasComponent_ng_template_47_Template_p_inputNumber_onInput_18_listener() {
      const venta_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.calcularSubtotal(venta_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td", 70)(23, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VentasComponent_ng_template_47_Template_button_click_23_listener() {
      const venta_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.eliminarFila(venta_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const venta_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](venta_r2.idOrden);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](venta_r2.articulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](venta_r2.descripcion || "Sin descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](18, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", venta_r2.unidadMedida);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r2.unidadesMedidas)("disabled", !venta_r2.permiteFracciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("step", venta_r2.unidadMedida === "UNIDAD" || !venta_r2.permiteFracciones ? "1" : "0.01");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", venta_r2.cantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", venta_r2.permiteFracciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", venta_r2.precioUnitario);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("min", 0)("showButtons", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](21, 15, venta_r2.subtotal, "USD"), " ");
  }
}
function VentasComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Seleccione art\u00EDculos para comenzar la venta. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function VentasComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "TOTAL A PAGAR:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "td", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 1, ctx_r2.total, "USD"), " ");
  }
}
function VentasComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 81)(1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u00BFAbona Saldo?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p-dropdown", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function VentasComponent_div_59_Template_p_dropdown_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r2.isAbona, $event) || (ctx_r2.isAbona = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function VentasComponent_div_59_Template_p_dropdown_onChange_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onAbonoChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.isAbona);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r2.abona)("showClear", true)("appendTo", "body");
  }
}
function VentasComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "M\u00E9todo de Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p-dropdown", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function VentasComponent_div_60_Template_p_dropdown_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r2.tipoPagoSeleccionado, $event) || (ctx_r2.tipoPagoSeleccionado = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.tipoPagoSeleccionado);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r2.tiposDePago)("showClear", true)("appendTo", "body");
  }
}
function VentasComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 81)(1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Monto Abono");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 19)(4, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function VentasComponent_div_61_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r2.monto, $event) || (ctx_r2.monto = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.monto);
  }
}
function VentasComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 85)(1, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VentasComponent_div_62_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.registrarVenta());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function VentasComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 87)(1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div")(4, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Inventario de Art\u00EDculos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Busque y seleccione el stock a vender");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function VentasComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 92)(1, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function VentasComponent_ng_template_67_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r2.searchTermin, $event) || (ctx_r2.searchTermin = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function VentasComponent_ng_template_67_Template_input_input_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onTermInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.searchTermin);
  }
}
function VentasComponent_ng_template_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "th", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "th", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Art\u00EDculo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function VentasComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VentasComponent_ng_template_69_Template_button_click_2_listener() {
      const articulo_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.toggleRow(articulo_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "p-tag", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const articulo_r11 = ctx.$implicit;
    const expanded_r12 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", expanded_r12 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](articulo_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](articulo_r11.nombreArticulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](articulo_r11.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("severity", articulo_r11.estado ? "success" : "danger")("value", articulo_r11.estado ? "En Stock" : "Sin Stock");
  }
}
function VentasComponent_ng_template_70_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 106)(1, "th", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "ID Ingreso");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Fecha Ingreso");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Stock Disp.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "P. Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Vencimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "th", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function VentasComponent_ng_template_70_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td", 97)(15, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VentasComponent_ng_template_70_ng_template_5_Template_button_click_15_listener() {
      const ingreso_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13).$implicit;
      const articulo_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.agregarIngresoVenta(articulo_r15, ingreso_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ingreso_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ingreso_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 5, ingreso_r14.fechaIngreso, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ingreso_r14.unidades);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 8, ingreso_r14.precioVenta, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](13, 11, ingreso_r14.fechaVencimiento, "dd/MM/yyyy"));
  }
}
function VentasComponent_ng_template_70_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No hay lotes disponibles para este art\u00EDculo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function VentasComponent_ng_template_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 103)(2, "div", 104)(3, "p-table", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, VentasComponent_ng_template_70_ng_template_4_Template, 12, 0, "ng-template", 30)(5, VentasComponent_ng_template_70_ng_template_5_Template, 16, 14, "ng-template", 31)(6, VentasComponent_ng_template_70_ng_template_6_Template, 3, 0, "ng-template", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const articulo_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", articulo_r15.ingresosStock);
  }
}
function VentasComponent_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VentasComponent_ng_template_71_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.closeModalDialogArticulos());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class VentasComponent {
  ngOnInit() {}
  constructor(articuloService, messageService, fb, ventasService, router) {
    this.articuloService = articuloService;
    this.messageService = messageService;
    this.fb = fb;
    this.ventasService = ventasService;
    this.router = router;
    this.monto = '';
    this.articulos = [];
    this.ventasRegistradas = [];
    this.expandedRows = {};
    this.loading = true;
    this.first = 0;
    this.unidadesMedidas = [{
      label: 'UNIDAD',
      value: 'UNIDAD'
    }, {
      label: 'LIBRAS',
      value: 'LIBRAS'
    }];
    this.statuses = [{
      label: 'Bajo',
      value: 'bajo'
    }, {
      label: 'Normal',
      value: 'normal'
    }];
    this.salidaProductoDialog = false;
    this.fechaPlaceholder = 'dd/MM/AAAA';
    this.ventasRegistradasDialog = false;
    this.displayModalArticulos = false;
    this.searchTermin = '';
    //los dartos seleccionados en la tabla dde articulos
    this.ventas = [];
    this.total = 0;
    //Para guardar los datos del encabezado
    this.fecha = new Date();
    this.comprador = '';
    this.idOrdenCreada = 0;
    this.guardando = false;
    this.opciones = [{
      nombre: 'Por Pagar',
      valor: false
    }, {
      nombre: 'Pagado',
      valor: true
    }];
    this.tiposDePago = [{
      nombre: 'Transferencia',
      valor: 'T'
    }, {
      nombre: 'Efectivo',
      valor: 'E'
    }];
    this.abona = [{
      nombre: 'Sí',
      valor: 'S'
    }, {
      nombre: 'No',
      valor: 'N'
    }];
  }
  mostrarComponenteVenta() {
    this.router.navigate(['/secretaria/view-ventas']);
  }
  openModalDialogArticulos() {
    this.displayModalArticulos = true;
    this.first = 0;
    this.searchTermin = '';
    this.articulos = [];
    this.loadArticulos();
  }
  closeModalDialogArticulos() {
    this.displayModalArticulos = false;
    this.expandedRows = {};
  }
  eliminarFila(venta) {
    const index = this.ventas.indexOf(venta);
    if (index > -1) {
      this.ventas.splice(index, 1); // Elimina el artículo de la lista
      //console.log('Artículo eliminado', venta);
      this.calcularTotal();
    }
  }
  registrarPagoOrdenVenta() {
    /* const fechaLocal = new Date(this.fecha.getTime() - (this.fecha.getTimezoneOffset() * 60000));
     const fechaUTC = fechaLocal.toISOString();*/
    const fechaSeleccionada = this.fecha; // La fecha seleccionada desde el formulario
    // Obtener la fecha con la hora de Guayaquil
    const fechaFormateada = this.obtenerFechaConHora(fechaSeleccionada);
    const pago = {
      ordenVenta: {
        id: this.idOrdenCreada
      },
      fechaPago: fechaFormateada,
      tipoPago: this.tipoPagoSeleccionado ? this.tipoPagoSeleccionado.valor : null,
      valorPago: this.monto
    };
    console.log('JSON que se enviará:', JSON.stringify(pago));
    console.log('JSON que se enviará:', JSON.stringify(pago));
    // Llamada al servicio para registrar el pago
    this.ventasService.registrarPagoOrdenVenta(pago).subscribe(respuesta => {
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Pago registrado con éxito'
      });
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Hubo un error al registrar el pago'
      });
    });
  }
  registrarVenta() {
    this.guardando = true;
    if (!this.fecha) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Advertencia',
        detail: 'Debe seleccionar una fecha'
      });
      this.guardando = false;
      return;
    }
    if (!this.comprador || this.comprador.trim() === '') {
      this.messageService.add({
        severity: 'warn',
        summary: 'Advertencia',
        detail: 'Debe ingresar un comprador'
      });
      this.guardando = false;
      return;
    }
    if (this.ventas.length === 0) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Advertencia',
        detail: 'Debe agregar al menos un artículo a la orden'
      });
      this.guardando = false;
      return;
    }
    if (this.ventas.some(venta => venta.cantidad === 0)) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Advertencia',
        detail: 'La cantidad de un artículo no puede ser 0'
      });
      this.guardando = false;
      return;
    }
    for (let venta of this.ventas) {
      const factor = this.obtenerFactorConversion(venta.unidadMedida);
      // Convertir el stock (almacenado en UNIDADES) a la unidad seleccionada para comparar
      const stockEnUnidadSeleccionada = parseFloat(venta.cantidadOriginal) / factor;
      if (venta.cantidad > stockEnUnidadSeleccionada) {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: `La cantidad del artículo "${venta.articulo}" supera el stock disponible. Stock disponible: ${stockEnUnidadSeleccionada} ${venta.unidadMedida}`
        });
        this.guardando = false;
        return; // Detener la ejecución si hay un error
      }
    }
    const totalVenta = this.total || 0;
    const montoIngresado = parseFloat(this.monto) || 0;
    if (montoIngresado >= totalVenta) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Advertencia',
        detail: 'El monto del abono es mayor o igual al total de la venta. No se puede registrar el pago.'
      });
      this.guardando = false;
      return;
    }
    const fechaSeleccionada = this.fecha; // La fecha seleccionada desde el formulario
    // Obtener la fecha con la hora de Guayaquil
    const fechaFormateada = this.obtenerFechaConHora(fechaSeleccionada);
    const ordenVenta = {
      fecha: fechaFormateada,
      // Obtén el valor de la fecha
      comprador: this.comprador,
      // Obtén el comprador
      estado: this.estadoSelecionado.valor,
      // Obtén el estado de la orden
      tipoPago: this.tipoPagoSeleccionado ? this.tipoPagoSeleccionado.valor : null // Obtén el tipo de pago
    };
    console.log('JSON que se enviará:', JSON.stringify(ordenVenta));
    // Llamada al servicio para crear la orden
    this.ventasService.crearOrdenVenta(ordenVenta).subscribe(respuesta => {
      this.idOrdenCreada = respuesta.id;
      // Lógica adicional, como mostrar un mensaje de éxito
      this.agregarDetallesOrden();
      // Validar si se debe registrar el pago
      if (this.estadoSelecionado && this.estadoSelecionado.valor === false &&
      // "Por Pagar" es false en la lista
      this.isAbona && this.isAbona.valor === 'S' &&
      // Asegurar que isAbona tiene valor 'S'
      this.tipoPagoSeleccionado && this.tipoPagoSeleccionado.valor &&
      // Verificar que hay tipo de pago
      this.monto && this.monto.trim() !== '' // Verificar que el monto no está vacío
      ) {
        this.registrarPagoOrdenVenta();
      }
    }, error => {
      const errorMessage = error.error?.message || 'Hubo un error al registrar la venta';
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: errorMessage
      });
      this.guardando = false;
    });
  }
  obtenerFechaConHora(fechaSeleccionada) {
    // Obtener la hora actual en Guayaquil
    const fechaGuayaquil = new Date().toLocaleString("en-US", {
      timeZone: "America/Guayaquil"
    });
    // Convertir la fecha de Guayaquil a un objeto Date
    const fechaGuayaquilDate = new Date(fechaGuayaquil);
    // Combinar la fecha seleccionada con la hora actual de Guayaquil
    const fechaConHora = new Date(fechaSeleccionada.getFullYear(), fechaSeleccionada.getMonth(), fechaSeleccionada.getDate(), fechaGuayaquilDate.getHours(), fechaGuayaquilDate.getMinutes(), fechaGuayaquilDate.getSeconds(), fechaGuayaquilDate.getMilliseconds());
    // Convertir la fecha a UTC para tener una representación estándar
    const fechaUTC = new Date(Date.UTC(fechaConHora.getFullYear(), fechaConHora.getMonth(), fechaConHora.getDate(), fechaConHora.getHours(), fechaConHora.getMinutes(), fechaConHora.getSeconds(), fechaConHora.getMilliseconds()));
    // Convertir la fecha a formato ISO 8601
    return fechaUTC.toISOString();
  }
  agregarDetallesOrden() {
    // Creamos un array con los detalles usando la tabla de ventas
    const detalles = this.ventas.map(venta => {
      const factor = this.obtenerFactorConversion(venta.unidadMedida);
      const precioReal = parseFloat(venta.precioUnitario) * factor;
      return {
        ordenVenta: {
          id: this.idOrdenCreada
        },
        // Usamos el id de la orden creada
        ingresoStock: {
          id: venta.idOrden
        },
        // Tomamos el id de ingresoStock
        cantidad: parseFloat(venta.cantidad),
        // Preparado para decimales
        precioUnitario: precioReal,
        // Pasa el precio convertido según la unidad
        unidadMedida: venta.unidadMedida
      };
    });
    console.log('JSON que se enviará:', JSON.stringify(detalles));
    // Enviar detalles al backend
    this.ventasService.registrarDetalleOrdenVenta(detalles).subscribe(response => {
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Orden de Venta registrada con éxito'
      });
      this.guardando = false;
      this.limpiarCampos();
    }, error => {
      console.log('Error recibido:', error); // Verifica la estructura del error
      // Ajustamos la extracción del mensaje según la estructura del error
      const errorMessage = error?.error?.message || error?.message || 'Hubo un error al registrar los detalles de la venta';
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: errorMessage
      });
      this.guardando = false;
    });
  }
  esPorPagar() {
    return this.estadoSelecionado && this.estadoSelecionado.valor === false;
  }
  esPagado() {
    return this.estadoSelecionado && this.estadoSelecionado.valor === true;
  }
  siTipoPagoSeleccionado() {
    return this.tipoPagoSeleccionado != null;
  }
  siAbona() {
    return this.isAbona && this.isAbona.valor === 'S';
  }
  onEstadoChange() {
    this.isAbona = null;
    this.tipoPagoSeleccionado = null;
    this.monto = '';
  }
  onAbonoChange() {
    this.tipoPagoSeleccionado = null;
    this.monto = '';
  }
  montoIngresado() {
    return this.monto.trim() !== '';
  }
  agregarIngresoVenta(articulo, ingreso) {
    const venta = {
      idOrden: ingreso.id,
      articulo: articulo.nombreArticulo,
      descripcion: articulo.descripcion,
      cantidadOriginal: ingreso.unidades,
      cantidad: 0,
      precioUnitario: ingreso.precioVenta || 0,
      subtotal: 0,
      unidadMedida: articulo.permiteFracciones ? 'LIBRAS' : 'UNIDAD',
      montoCobro: null,
      permiteFracciones: articulo.permiteFracciones
    };
    this.ventas.push(venta);
    this.closeModalDialogArticulos();
  }
  obtenerFactorConversion(unidad) {
    if (unidad === 'LIBRAS') return 0.01;
    if (unidad === 'QUINTALES') return 1;
    if (unidad === 'SACOS DE 25LB') return 0.25;
    return 1; // UNIDAD o cualquiera por defecto
  }
  calcularSubtotal(venta) {
    const cant = parseFloat(venta.cantidad) || 0;
    const precio = parseFloat(venta.precioUnitario) || 0;
    const factor = this.obtenerFactorConversion(venta.unidadMedida);
    const montoCalculado = cant * (precio * factor);
    venta.subtotal = montoCalculado;
    if (venta.montoCobro !== montoCalculado) {
      venta.montoCobro = null;
    }
    this.calcularTotal();
  }
  calcularCantidadPorMonto(venta) {
    const monto = parseFloat(venta.montoCobro) || 0;
    const precio = parseFloat(venta.precioUnitario) || 0;
    const factor = this.obtenerFactorConversion(venta.unidadMedida);
    const precioPorUnidadSeleccionada = precio * factor;
    if (precioPorUnidadSeleccionada > 0) {
      venta.cantidad = Number((monto / precioPorUnidadSeleccionada).toFixed(4));
      venta.subtotal = monto;
    } else {
      venta.cantidad = 0;
      venta.subtotal = 0;
    }
    this.calcularTotal();
  }
  calcularTotal() {
    // Suma todos los subtotales para obtener el total general
    this.total = this.ventas.reduce((sum, venta) => sum + venta.subtotal, 0);
  }
  limpiarCampos() {
    this.fecha = new Date();
    this.comprador = '';
    this.estadoSelecionado = null;
    this.tipoPagoSeleccionado = null;
    this.isAbona = null;
    this.monto = '';
    this.ventas = [];
    this.total = 0;
  }
  puedeRegistrarVenta() {
    // Estado "Pagado" con tipo de pago seleccionado
    if (this.estadoSelecionado && this.estadoSelecionado.valor === true && this.tipoPagoSeleccionado && (this.tipoPagoSeleccionado.valor === 'T' || this.tipoPagoSeleccionado.valor === 'E')) {
      return true;
    }
    // Estado "Por Pagar", "Abona Saldo" es "No"
    if (this.estadoSelecionado && this.estadoSelecionado.valor === false && this.isAbona && this.isAbona.valor === 'N') {
      return true;
    }
    // Estado "Por Pagar", "Abona Saldo" es "Sí", y el monto tiene valor
    if (this.estadoSelecionado && this.estadoSelecionado.valor === false && this.isAbona && this.isAbona.valor === 'S' && this.montoIngresado()) {
      return true;
    }
    return false;
  }
  loadArticulos() {
    this.articuloService.listarArticulos().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(data => {
      this.articulos = data;
      console.log('Artículos:', this.articulos);
      this.loading = false;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Error al obtener artículos:', error);
      this.loading = false;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]);
    })).subscribe();
  }
  toggleRow(articulo) {
    const key = articulo.id?.toString() || '';
    if (this.expandedRows[key]) {
      delete this.expandedRows[key];
    } else {
      this.expandedRows = {}; // Resetea las filas expandidas
      this.loadIngresos(articulo).subscribe(() => {
        this.expandedRows[key] = true;
      });
    }
  }
  onTermInput(event) {
    const term = event.target.value;
    if (term.length >= 1) {
      this.expandedRows = {};
      this.first = 0; // Restablecer la página a la primera
      this.articuloService.buscarArticulosPorNombre(term).subscribe(data => {
        this.articulos = data;
      }, error => {
        console.error('Error al buscar el artículo:', error);
      });
    } else {
      this.loadArticulos();
    }
  }
  loadIngresos(articulo) {
    return this.articuloService.obtenerIngresosPorArticulo(articulo.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(data => {
      articulo.ingresosStock = data;
      console.log(`Ingresos para el artículo ${articulo.id}:`, articulo.ingresosStock);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error(`Error al obtener ingresos para el artículo ${articulo.id}:`, error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]);
    }));
  }
  static {
    this.ɵfac = function VentasComponent_Factory(t) {
      return new (t || VentasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_service_articulo_service__WEBPACK_IMPORTED_MODULE_0__.ArticuloService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_service_ventas_service__WEBPACK_IMPORTED_MODULE_1__.VentasService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: VentasComponent,
      selectors: [["app-ventas"]],
      decls: 72,
      vars: 30,
      consts: [["style", "\n        position: fixed;\n        top: 1.2rem;\n        right: 1.2rem;\n        z-index: 9999;\n        background: rgba(255,255,255,0.96);\n        border-radius: 1rem;\n        padding: 1rem 1.5rem;\n        box-shadow: 0 8px 32px rgba(0,0,0,0.15);\n        display: flex;\n        align-items: center;\n        gap: 0.85rem;\n        min-width: 220px;\n        border-left: 4px solid var(--primary-color);\n    ", 4, "ngIf"], [1, "grid"], [1, "col-12", "p-0"], [1, "card", "p-4", "border-none", "shadow-premium", "mb-4", "flex", "align-items-center", "justify-content-between", "bg-white", "overflow-hidden", "relative", 2, "border-radius", "1.25rem"], [1, "flex", "align-items-center", "relative", "z-1"], [1, "p-3", "border-round-xl", "bg-orange-50", "mr-4", "shadow-sm"], [1, "pi", "pi-cart-plus", "text-orange-600", "text-3xl"], [1, "m-0", "font-bold", "text-900", "line-height-2", "tracking-tight"], [1, "m-0", "text-600", "font-medium", "opacity-70"], [1, "flex", "gap-3", "relative", "z-1"], ["pButton", "", "pRipple", "", "label", "Historial de Ventas", "icon", "pi pi-history", 1, "p-button-warning", "px-4", "py-2", "border-round-xl", "shadow-md", "font-bold", 3, "click"], [1, "absolute", "-top-10", "-right-10", "bg-orange-50", "border-circle", "opacity-50", 2, "width", "250px", "height", "250px"], [1, "col-12"], [1, "card", "border-none", "shadow-2", "border-round-xl", "mb-3", "p-3"], [1, "flex", "align-items-center", "mb-3", 2, "border-left", "4px solid var(--primary-color)", "padding-left", "0.85rem"], [1, "m-0", "font-bold", "text-900", 2, "font-size", "1rem"], [1, "grid", "p-fluid"], [1, "field", "col-12", "md:col-3", "mb-0"], [1, "font-semibold", "text-700", "mb-1", "block", 2, "font-size", "0.82rem"], [1, "p-inputgroup"], [1, "p-inputgroup-addon"], [1, "pi", "pi-calendar"], ["dateFormat", "dd/mm/yy", "placeholder", "dd/mm/aaaa", 3, "ngModelChange", "ngModel", "showIcon", "appendTo"], [1, "field", "col-12", "md:col-6", "mb-0"], [1, "pi", "pi-user"], ["pInputText", "", "type", "text", "placeholder", "Ej: Juan P\u00E9rez", "autocomplete", "off", 3, "ngModelChange", "ngModel"], [1, "flex", "align-items-center", "justify-content-between", "mb-3", 2, "border-left", "4px solid var(--primary-color)", "padding-left", "0.85rem"], [1, "m-0", "text-500", 2, "font-size", "0.75rem"], ["pButton", "", "pRipple", "", "label", "Agregar Art\u00EDculo", "icon", "pi pi-plus", 1, "p-button-primary", "p-button-sm", "border-round-lg", 3, "click"], ["styleClass", "p-datatable-gridlines p-datatable-sm", "responsiveLayout", "scroll", 3, "value", "rows", "rowHover", "paginator"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "footer"], [1, "card", "border-none", "shadow-2", "border-round-xl", "p-3"], [1, "grid", "p-fluid", "align-items-end"], ["placeholder", "Seleccione estado", "optionLabel", "nombre", 3, "ngModelChange", "onChange", "ngModel", "options", "showClear", "appendTo"], ["class", "field col-12 md:col-2 mb-0", 4, "ngIf"], ["class", "field col-12 md:col-3 mb-0", 4, "ngIf"], ["class", "field col-12 md:col-3 mb-0 ml-auto", 4, "ngIf"], ["styleClass", "border-round-xl shadow-5 overflow-hidden", 3, "visibleChange", "visible", "modal", "closable", "breakpoints"], [1, "p-1"], ["dataKey", "id", "styleClass", "p-datatable-sm p-datatable-gridlines mt-2", 3, "firstChange", "value", "expandedRowKeys", "paginator", "rows", "first"], ["pTemplate", "caption"], ["pTemplate", "rowexpansion"], [2, "position", "fixed", "top", "1.2rem", "right", "1.2rem", "z-index", "9999", "background", "rgba(255,255,255,0.96)", "border-radius", "1rem", "padding", "1rem 1.5rem", "box-shadow", "0 8px 32px rgba(0,0,0,0.15)", "display", "flex", "align-items", "center", "gap", "0.85rem", "min-width", "220px", "border-left", "4px solid var(--primary-color)"], ["strokeWidth", "4", "animationDuration", ".8s"], [2, "font-weight", "700", "font-size", "0.9rem", "color", "#1a1a2e"], [2, "font-size", "0.75rem", "color", "#6c757d"], [2, "width", "60px", "text-align", "center", "padding", "0.4rem"], [2, "width", "22%", "padding", "0.4rem"], [2, "text-align", "center", "padding", "0.4rem"], [2, "width", "100px", "text-align", "right", "padding", "0.4rem"], [2, "width", "40px", "text-align", "center", "padding", "0.4rem"], [1, "text-center", "font-medium", 2, "padding", "0.4rem"], [2, "padding", "0.4rem"], [1, "flex", "align-items-center", "gap-2"], [1, "flex", "align-items-center", "justify-content-center", "border-round", "bg-primary-50", 2, "width", "24px", "height", "24px", "min-width", "24px"], [1, "pi", "pi-tag", "text-primary", "text-xs"], [1, "flex", "flex-column"], [1, "font-bold", "text-sm", 2, "line-height", "1.2"], [1, "text-500", 2, "font-size", "0.70rem", "line-height", "1"], [1, "text-left", 2, "padding", "0.4rem"], [1, "flex", "align-items-center", "gap-2", "w-full", "justify-content-center", "flex-wrap"], ["optionLabel", "label", "optionValue", "value", "appendTo", "body", "styleClass", "p-dropdown-sm", 3, "ngModelChange", "onChange", "ngModel", "options", "disabled"], ["pInputText", "", "type", "number", "min", "0", "placeholder", "Cant.", 1, "p-inputtext-sm", "text-center", "font-bold", 2, "width", "80px", 3, "ngModelChange", "keydown", "step", "ngModel"], ["class", "p-inputgroup", "style", "width: 110px; min-width: 110px;", "pTooltip", "Calcular por Monto", "tooltipPosition", "bottom", 4, "ngIf"], [1, "text-right", 2, "padding", "0.4rem"], ["mode", "currency", "currency", "USD", "locale", "en-US", 1, "p-inputtext-sm", "w-full", 3, "ngModelChange", "onInput", "ngModel", "min", "showButtons"], [1, "text-right", "font-bold", "text-primary", 2, "padding", "0.4rem"], [1, "text-center", 2, "padding", "0.4rem"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-times", 1, "p-button-rounded", "p-button-danger", "p-button-text", "p-button-sm", 3, "click"], ["pTooltip", "Calcular por Monto", "tooltipPosition", "bottom", 1, "p-inputgroup", 2, "width", "110px", "min-width", "110px"], [1, "p-inputgroup-addon", "py-0", "px-2", "text-xs", 2, "background-color", "var(--green-50)", "color", "var(--green-700)", "border-color", "var(--green-300)"], [1, "pi", "pi-dollar"], ["pInputText", "", "type", "number", "step", "0.01", "min", "0", "placeholder", "Monto", 1, "p-inputtext-sm", "text-green-700", "font-bold", "text-center", "py-1", "w-full", 2, "background-color", "#f0fdf4", "border-color", "var(--green-300)", "padding-left", "0.3rem", "padding-right", "0.3rem", 3, "ngModelChange", "ngModel"], ["colspan", "6", 1, "text-center", "text-500", "py-4"], [1, "pi", "pi-shopping-cart", "text-3xl", "mb-2", "block"], ["colspan", "4", 1, "text-right", "font-bold", "text-900", "border-none", "pt-3"], [1, "text-right", "font-bold", "text-2xl", "text-primary", "border-none", "pt-3"], [1, "border-none", "pt-3"], [1, "field", "col-12", "md:col-2", "mb-0"], ["placeholder", "Elija..", "optionLabel", "nombre", 3, "ngModelChange", "onChange", "ngModel", "options", "showClear", "appendTo"], ["placeholder", "Seleccione..", "optionLabel", "nombre", 3, "ngModelChange", "ngModel", "options", "showClear", "appendTo"], ["pInputText", "", "type", "text", "placeholder", "0.00", 3, "ngModelChange", "ngModel"], [1, "field", "col-12", "md:col-3", "mb-0", "ml-auto"], ["pButton", "", "pRipple", "", "type", "button", "label", "Completar Registro", "icon", "pi pi-check-circle", 1, "p-button-success", "border-round-lg", "shadow-2", 3, "click"], [1, "flex", "align-items-center", "gap-3"], [1, "p-2", "border-round-lg", "bg-primary-50"], [1, "pi", "pi-box", "text-primary", "text-xl"], [1, "font-bold", "text-900", 2, "font-size", "1.05rem"], [1, "text-500", 2, "font-size", "0.8rem"], [1, "flex", "align-items-center", "justify-content-end"], [1, "p-input-icon-left", "w-full", "md:w-20rem"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Buscar por nombre...", 1, "w-full", "border-round-lg", 3, "ngModelChange", "input", "ngModel"], [2, "width", "3rem"], [1, "text-center"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-button-text", "p-button-rounded", "p-button-plain", "p-button-sm", 3, "click", "icon"], [1, "text-center", "font-medium"], [1, "font-bold"], [1, "text-500"], ["styleClass", "border-round-lg", 3, "severity", "value"], ["colspan", "5", 1, "bg-gray-50", "p-3"], [1, "card", "p-0", "border-none", "shadow-1", "border-round-lg", "overflow-hidden"], ["styleClass", "p-datatable-sm", 3, "value"], [1, "surface-100"], [2, "width", "50px"], [1, "text-center", "text-700"], [1, "text-center", "font-bold"], [1, "text-center", "text-primary", "font-bold"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-cart-plus", "pTooltip", "A\u00F1adir a la orden", "tooltipPosition", "left", 1, "p-button-rounded", "p-button-success", "p-button-text", "p-button-sm", 2, "width", "2.2rem", "height", "2.2rem", 3, "click"], ["colspan", "6", 1, "text-center", "text-500", "py-3"], ["pButton", "", "pRipple", "", "label", "Finalizar Selecci\u00F3n", "icon", "pi pi-check", "type", "button", 1, "p-button-text", "p-button-primary", 3, "click"]],
      template: function VentasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, VentasComponent_div_1_Template, 7, 3, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div")(9, "h2", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Ventas de Insumos");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Registro de salidas, facturaci\u00F3n y control de ventas \u00B7 AgroFranco");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9)(14, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VentasComponent_Template_button_click_14_listener() {
            return ctx.mostrarComponenteVenta();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 1)(17, "div", 12)(18, "div", 13)(19, "div", 14)(20, "h4", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Datos del Cliente");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 16)(23, "div", 17)(24, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Fecha de Venta");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 19)(27, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p-calendar", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function VentasComponent_Template_p_calendar_ngModelChange_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.fecha, $event) || (ctx.fecha = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 23)(31, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Nombre del Comprador / Cliente");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 19)(34, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function VentasComponent_Template_input_ngModelChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.comprador, $event) || (ctx.comprador = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 13)(38, "div", 26)(39, "div")(40, "h4", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Detalle de la Orden");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "p", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Art\u00EDculos agregados a la transacci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VentasComponent_Template_button_click_44_listener() {
            return ctx.openModalDialogArticulos();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p-table", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, VentasComponent_ng_template_46_Template, 12, 0, "ng-template", 30)(47, VentasComponent_ng_template_47_Template, 24, 19, "ng-template", 31)(48, VentasComponent_ng_template_48_Template, 4, 0, "ng-template", 32)(49, VentasComponent_ng_template_49_Template, 7, 4, "ng-template", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 34)(51, "div", 14)(52, "h4", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Configuraci\u00F3n de Pago");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 35)(55, "div", 17)(56, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Estado de Orden");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "p-dropdown", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function VentasComponent_Template_p_dropdown_ngModelChange_58_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.estadoSelecionado, $event) || (ctx.estadoSelecionado = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function VentasComponent_Template_p_dropdown_onChange_58_listener() {
            return ctx.onEstadoChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, VentasComponent_div_59_Template, 4, 4, "div", 37)(60, VentasComponent_div_60_Template, 4, 4, "div", 38)(61, VentasComponent_div_61_Template, 7, 1, "div", 37)(62, VentasComponent_div_62_Template, 2, 0, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "p-dialog", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("visibleChange", function VentasComponent_Template_p_dialog_visibleChange_63_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.displayModalArticulos, $event) || (ctx.displayModalArticulos = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, VentasComponent_ng_template_64_Template, 8, 0, "ng-template", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 41)(66, "p-table", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("firstChange", function VentasComponent_Template_p_table_firstChange_66_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.first, $event) || (ctx.first = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, VentasComponent_ng_template_67_Template, 4, 1, "ng-template", 43)(68, VentasComponent_ng_template_68_Template, 10, 0, "ng-template", 30)(69, VentasComponent_ng_template_69_Template, 11, 6, "ng-template", 31)(70, VentasComponent_ng_template_70_Template, 7, 1, "ng-template", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, VentasComponent_ng_template_71_Template, 1, 0, "ng-template", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.guardando);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.fecha);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showIcon", true)("appendTo", "body");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.comprador);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.ventas)("rows", 5)("rowHover", true)("paginator", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.estadoSelecionado);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.opciones)("showClear", true)("appendTo", "body");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.esPorPagar());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.esPagado() || ctx.siAbona());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.siAbona() && ctx.siTipoPagoSeleccionado());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.puedeRegistrarVenta());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](28, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("visible", ctx.displayModalArticulos);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("modal", true)("closable", false)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](29, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.articulos)("expandedRowKeys", ctx.expandedRows)("paginator", true)("rows", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("first", ctx.first);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, primeng_dialog__WEBPACK_IMPORTED_MODULE_10__.Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonDirective, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__.InputNumber, primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputText, primeng_table__WEBPACK_IMPORTED_MODULE_14__.Table, primeng_toast__WEBPACK_IMPORTED_MODULE_15__.Toast, primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__.Dropdown, primeng_ripple__WEBPACK_IMPORTED_MODULE_17__.Ripple, primeng_calendar__WEBPACK_IMPORTED_MODULE_18__.Calendar, primeng_tooltip__WEBPACK_IMPORTED_MODULE_19__.Tooltip, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_20__.ProgressSpinner, primeng_tag__WEBPACK_IMPORTED_MODULE_21__.Tag, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
      styles: [".status-label[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  display: inline-block;\n  text-align: center;\n  min-width: 80px;\n}\n\n.status-en-stock[_ngcontent-%COMP%] {\n  background-color: #c3e6cb;\n  color: #155724;\n}\n\n.status-sin-stock[_ngcontent-%COMP%] {\n  background-color: #e79494;\n  color: #a81616;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.cancel-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbnRhcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1k7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFoQjs7QUFHWTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQUFoQjs7QUFHWTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQUFoQjs7QUFFWTtFQUNJLGtCQUFBO0FBQ2hCOztBQUVZO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUNoQiIsImZpbGUiOiJ2ZW50YXMuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICAuc3RhdHVzLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3RhdHVzLWVuLXN0b2NrIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNlNmNiO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTU1NzI0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3RhdHVzLXNpbi1zdG9jayB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U3OTQ5NDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2E4MTYxNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kaWFsb2ctaGVhZGVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jYW5jZWwtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL3NlY3JldGFyaWEvdmVudGFzL3ZlbnRhcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1k7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFoQjs7QUFHWTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQUFoQjs7QUFHWTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQUFoQjs7QUFFWTtFQUNJLGtCQUFBO0FBQ2hCOztBQUVZO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUNoQjtBQUNBLG8rQ0FBbytDIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICAuc3RhdHVzLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3RhdHVzLWVuLXN0b2NrIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNlNmNiO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTU1NzI0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3RhdHVzLXNpbi1zdG9jayB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U3OTQ5NDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2E4MTYxNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kaWFsb2ctaGVhZGVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jYW5jZWwtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 913:
/*!*********************************************************************************!*\
  !*** ./src/app/demo/components/secretaria/view-ventas/view-ventas.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewVentasComponent: () => (/* binding */ ViewVentasComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 98764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_demo_service_ventas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/ventas.service */ 65716);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/calendar */ 41314);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/tooltip */ 80405);


















const _c0 = () => ({
  width: "350px"
});
const _c1 = (a0, a1) => ({
  "status-label": true,
  "status-activo": a0,
  "status-pagado": a1
});
const _c2 = () => ({
  width: "30vw"
});
function ViewVentasComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewVentasComponent_ng_template_7_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.mostrarComponenteVenta());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 12);
  }
}
function ViewVentasComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Id Orden");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Comprador");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ViewVentasComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 14)(2, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewVentasComponent_ng_template_9_Template_button_click_2_listener() {
      const orden_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.toggleRow(orden_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 19)(14, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewVentasComponent_ng_template_9_Template_button_click_18_listener() {
      const orden_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.showPagoDialog(orden_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewVentasComponent_ng_template_9_Template_button_click_19_listener($event) {
      const orden_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.confirmDeleteOrden(orden_r4, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const orden_r4 = ctx.$implicit;
    const expanded_r5 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", expanded_r5 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](orden_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](orden_r4.comprador);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 8, orden_r4.fecha));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](12, 10, orden_r4.valorTotal, "USD", "code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](14, _c1, !orden_r4.estado, orden_r4.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", orden_r4.estado ? "Pagado" : "Pendiente", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", orden_r4.estado);
  }
}
function ViewVentasComponent_ng_template_10_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Fecha Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Tipo de Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Monto Pagado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Saldo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ViewVentasComponent_ng_template_10_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pago_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](pago_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 5, pago_r7.fechaPago));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](pago_r7.tipoPago === "E" ? "Efectivo" : "Transferencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](10, 7, pago_r7.valorPago, "USD", "code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](13, 11, pago_r7.saldo, "USD", "code"));
  }
}
function ViewVentasComponent_ng_template_10_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No hay pagos para esta venta.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ViewVentasComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 24)(2, "div", 25)(3, "p-table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ViewVentasComponent_ng_template_10_ng_template_4_Template, 11, 0, "ng-template", 6)(5, ViewVentasComponent_ng_template_10_ng_template_5_Template, 14, 15, "ng-template", 7)(6, ViewVentasComponent_ng_template_10_ng_template_6_Template, 3, 0, "ng-template", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p-dialog", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("visibleChange", function ViewVentasComponent_ng_template_10_Template_p_dialog_visibleChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.displayDialog, $event) || (ctx_r1.displayDialog = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ViewVentasComponent_ng_template_10_Template_form_ngSubmit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.registrarPago());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h3", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Registro de Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 31)(12, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewVentasComponent_ng_template_10_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.closePagoDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 33)(14, "div", 34)(15, "div", 35)(16, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "C\u00F3digo de la orden");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 41)(23, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 38)(26, "p-calendar", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onInput", function ViewVentasComponent_ng_template_10_Template_p_calendar_onInput_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.handleInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Fecha del pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 45)(30, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "p-dropdown", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Tipo de Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 41)(35, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Monto de Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 51)(42, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const orden_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", orden_r8.pagosOrdenesVenta);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("visible", ctx_r1.displayDialog);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("modal", true)("closable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.nuevoPagoForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showIcon", false)("showOnFocus", false)("placeholder", ctx_r1.fechaPlaceholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1.tiposDePago)("showClear", true)("appendTo", "body");
  }
}
class ViewVentasComponent {
  constructor(ventaService, fb, messageService, router, confirmationService) {
    this.ventaService = ventaService;
    this.fb = fb;
    this.messageService = messageService;
    this.router = router;
    this.confirmationService = confirmationService;
    this.ordenesVenta = [];
    this.expandedRows = {};
    this.displayDialog = false;
    this.tiposDePago = [{
      nombre: 'Transferencia',
      valor: 'T'
    }, {
      nombre: 'Efectivo',
      valor: 'E'
    }];
    this.fechaPlaceholder = 'dd/MM/AAAA';
    this.nuevoPagoForm = this.fb.group({
      idOrdenVenta: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      fechaPago: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      tipoPago: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      valorPago: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
  }
  ngOnInit() {
    this.cargarOrdenesVenta();
  }
  toggleRow(orden) {
    if (this.expandedRows[orden.id]) {
      delete this.expandedRows[orden.id];
    } else {
      this.expandedRows = {}; // Esto cierra otras filas abiertas
      if (!orden.pagosOrdenesVenta) {
        this.cargarPagos(orden).subscribe(() => {
          this.expandedRows[orden.id] = true;
        });
      } else {
        this.expandedRows[orden.id] = true;
      }
    }
  }
  handleInput(event) {
    const value = event.target.value;
    if (!value) {
      this.fechaPlaceholder = 'dd/MM/AAAA';
    }
  }
  mostrarComponenteVenta() {
    this.router.navigate(['/secretaria/ventas']);
  }
  cargarOrdenesVenta() {
    this.ventaService.obtenerOrdenesVenta().subscribe(data => {
      this.ordenesVenta = data;
      console.log("Se cargaron las ordenes de venta:", data);
    }, error => {
      console.error('Error al obtener prestamos:', error);
    });
  }
  confirmDeleteOrden(orden, event) {
    event.stopPropagation();
    this.confirmationService.confirm({
      key: 'confirm',
      message: `¿Estás seguro de que deseas eliminar la orden #${orden.id} del cliente ${orden.comprador}?`,
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      rejectLabel: 'No',
      accept: () => {
        this.eliminarOrdenVenta(orden.id);
      }
    });
  }
  eliminarOrdenVenta(ordenId) {
    this.ventaService.eliminarOrdenVenta(ordenId).subscribe({
      next: () => {
        // Mensaje principal de éxito
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Orden eliminada correctamente',
          life: 3000
        });
        // Mensaje informativo sobre revisión de caja (se muestra después)
        setTimeout(() => {
          this.messageService.add({
            severity: 'info',
            summary: 'Revisión recomendada',
            detail: 'Por favor verifique en caja si existía un registro relacionado a esta venta',
            life: 8000,
            // Más tiempo visible
            icon: 'pi pi-info-circle'
          });
        }, 500); // Pequeño retardo para mejor UX
        this.cargarOrdenesVenta();
        this.expandedRows = {};
      },
      error: err => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error?.message || 'No se pudo eliminar la orden',
          life: 5000
        });
      }
    });
  }
  cargarPagos(orden) {
    return this.ventaService.obtenerPagosOrdenVenta(orden.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(data => {
      orden.pagosOrdenesVenta = data;
      console.log(`Pagos para la orden de venta ${orden.id}:`, orden.pagosOrdenesVenta);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error(`Error al obtener pagos para la orden ${orden.id}:`, error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]);
    }));
  }
  registrarPago() {
    if (this.nuevoPagoForm.invalid) {
      console.error('Formulario inválido');
      return;
    }
    const orden = this.ordenesVenta.find(o => o.id === this.nuevoPagoForm.value.idOrdenVenta);
    if (!orden) {
      console.error('Orden no encontrada.');
      return;
    }
    const valorPago = parseFloat(this.nuevoPagoForm.value.valorPago);
    const saldoPendiente = orden.pagosOrdenesVenta && orden.pagosOrdenesVenta.length > 0 ? orden.pagosOrdenesVenta[orden.pagosOrdenesVenta.length - 1].saldo : orden.valorTotal || 0;
    // Validación: No permitir pagos mayores al saldo pendiente
    if (valorPago > (saldoPendiente || 0)) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: `El valor del pago (${valorPago}) no puede ser mayor al saldo pendiente (${saldoPendiente}).`
      });
      return;
    }
    const fechaPagoLocal = new Date(this.nuevoPagoForm.value.fechaPago);
    const fechaPagoUTC = new Date(Date.UTC(fechaPagoLocal.getFullYear(), fechaPagoLocal.getMonth(), fechaPagoLocal.getDate(), fechaPagoLocal.getHours(), fechaPagoLocal.getMinutes(), fechaPagoLocal.getSeconds()));
    const pagoData = {
      id: 0,
      ordenVenta: {
        id: this.nuevoPagoForm.value.idOrdenVenta
      },
      fechaPago: fechaPagoUTC.toISOString(),
      tipoPago: this.nuevoPagoForm.value.tipoPago,
      valorPago: valorPago
    };
    console.log('Pago a registrar:', JSON.stringify(pagoData, null, 2));
    this.ventaService.registrarPagoOrdenVenta(pagoData).subscribe(response => {
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Pago registrado exitosamente.'
      });
      this.cargarPagos(orden).subscribe(() => {
        console.log(`Pagos actualizados para la orden de venta ${orden.id}`);
        const ultimoPago = orden.pagosOrdenesVenta && orden.pagosOrdenesVenta.length > 0 ? orden.pagosOrdenesVenta[orden.pagosOrdenesVenta.length - 1] : null;
        const nuevoSaldoPendiente = ultimoPago ? ultimoPago.saldo : 0;
        console.log("Saldo pendiente después del pago:", nuevoSaldoPendiente);
        if (nuevoSaldoPendiente === 0) {
          this.cargarOrdenesVenta();
          this.expandedRows = {};
        } else {
          this.expandedRows[orden.id] = true;
        }
      });
      this.closePagoDialog();
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'No se puede registrar el pago. Intente de nuevo.'
      });
      console.error('Error al registrar pago:', error);
    });
  }
  closePagoDialog() {
    this.displayDialog = false;
    this.nuevoPagoForm.reset();
  }
  showPagoDialog(orden) {
    if (!this.expandedRows[orden.id]) {
      this.toggleRow(orden);
    }
    this.nuevoPagoForm.patchValue({
      idOrdenVenta: orden.id,
      fechaPago: new Date()
    });
    this.displayDialog = true;
  }
  static {
    this.ɵfac = function ViewVentasComponent_Factory(t) {
      return new (t || ViewVentasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_demo_service_ventas_service__WEBPACK_IMPORTED_MODULE_0__.VentasService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.ConfirmationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ViewVentasComponent,
      selectors: [["app-view-ventas"]],
      decls: 11,
      vars: 7,
      consts: [["header", "Confirmaci\u00F3n", "key", "confirm", "icon", "pi pi-exclamation-triangle", "acceptButtonStyleClass", "p-button-text", "rejectButtonStyleClass", "p-button-text"], [1, "card", 2, "height", "30px"], [2, "margin-top", "-10px"], [1, "card"], ["dataKey", "id", "responsiveLayout", "scroll", 3, "value", "expandedRowKeys", "paginator", "rows"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "rowexpansion"], [1, "flex", "align-items-center", "justify-content-between", "mb-2"], [1, "button-group", "mr-2"], ["pButton", "", "pRipple", "", "label", "Ir a Ventas", "icon", "pi pi-arrow-left", 1, "p-button-warning", "mr-2", 3, "click"], [1, "flex", "table-header"], [2, "width", "2rem", "text-align", "center"], [2, "text-align", "center"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-button-text", "p-button-rounded", "p-button-plain", 3, "click", "icon"], [2, "min-width", "10rem", "text-align", "center"], [2, "min-width", "1rem", "text-align", "center"], [2, "min-width", "-10rem", "text-align", "center"], [2, "min-width", "7rem", "text-align", "center"], [3, "ngClass"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-eye", "pTooltip", "Ver Detalles", "tooltipPosition", "top", 1, "p-button-info", "mb-2", "mr-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-plus", "pTooltip", "Registrar Pago", "tooltipPosition", "top", 1, "p-button-success", "mr-2", "mb-2", 3, "click", "disabled"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-trash", "pTooltip", "Eliminar Orden", "tooltipPosition", "top", 1, "p-button-danger", "mr-2", "mb-2", 3, "click"], ["colspan", "7"], [1, "p-3"], ["dataKey", "id", "responsiveLayout", "scroll", 3, "value"], ["pTemplate", "emptymessage"], [3, "visibleChange", "visible", "modal", "closable"], [3, "ngSubmit", "formGroup"], [1, "mt-3", 2, "text-align", "center"], [1, "dialog-header", "cancel-button"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-times", 1, "p-button-danger", "mr-2", 3, "click"], [1, "grid", "p-fluid"], [1, "field", "col-12"], [1, "p-inputgroup"], [1, "p-inputgroup-addon"], [1, "pi", "pi-code"], [1, "p-float-label"], ["type", "text", "pInputText", "", "formControlName", "idOrdenVenta"], ["for", "codigoPrestamo"], [1, "p-inputgroup", "mt-4"], [1, "pi", "pi-calendar"], ["id", "fechaPago", "formControlName", "fechaPago", "dateFormat", "dd/mm/yy", 3, "onInput", "showIcon", "showOnFocus", "placeholder"], ["for", "fechaPago"], [1, "mt-4"], ["id", "tipoPago", "placeholder", "Elija..", "optionLabel", "nombre", "optionValue", "valor", "formControlName", "tipoPago", 3, "options", "showClear", "appendTo"], ["for", "tipoPago"], [1, "pi", "pi-dollar"], ["type", "text", "pInputText", "", "formControlName", "valorPago"], ["for", "montoPagado"], [1, "flex", "flex-column", 2, "height", "100%"], [1, "flex", "justify-content-end", "mt-auto"], ["pButton", "", "label", "Registrar", "icon", "pi pi-save", "type", "submit"], ["colspan", "4"]],
      template: function ViewVentasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast")(1, "p-confirmDialog", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "h4", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Ordenes de ventas");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "p-table", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ViewVentasComponent_ng_template_7_Template, 4, 0, "ng-template", 5)(8, ViewVentasComponent_ng_template_8_Template, 14, 0, "ng-template", 6)(9, ViewVentasComponent_ng_template_9_Template, 20, 17, "ng-template", 7)(10, ViewVentasComponent_ng_template_10_Template, 44, 14, "ng-template", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.ordenesVenta)("expandedRowKeys", ctx.expandedRows)("paginator", true)("rows", 5);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, primeng_dialog__WEBPACK_IMPORTED_MODULE_9__.Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, primeng_table__WEBPACK_IMPORTED_MODULE_12__.Table, primeng_toast__WEBPACK_IMPORTED_MODULE_13__.Toast, primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__.Dropdown, primeng_ripple__WEBPACK_IMPORTED_MODULE_15__.Ripple, primeng_calendar__WEBPACK_IMPORTED_MODULE_16__.Calendar, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_17__.ConfirmDialog, primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__.Tooltip, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
      styles: [".status-label[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem;\n  font-weight: bold;\n  display: inline-block;\n  text-align: center;\n  min-width: 80px;\n}\n\n.status-activo[_ngcontent-%COMP%] {\n  background-color: #e79494;\n  color: #a81616;\n}\n\n.status-pagado[_ngcontent-%COMP%] {\n  background-color: #c3e6cb;\n  color: #155724;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.cancel-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctdmVudGFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDSDs7QUFFQTtFQUNHLHlCQUFBO0VBQ0EsY0FBQTtBQUNIOztBQUVBO0VBQ0cseUJBQUE7RUFDQSxjQUFBO0FBQ0g7O0FBRUE7RUFDRyxrQkFBQTtBQUNIOztBQUVBO0VBQ0csa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUNIIiwiZmlsZSI6InZpZXctdmVudGFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXR1cy1sYWJlbCB7XHJcbiAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xyXG4gICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICBmb250LXdlaWdodDogYm9sZDtcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIG1pbi13aWR0aDogODBweDtcclxufVxyXG5cclxuLnN0YXR1cy1hY3Rpdm8ge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc5NDk0O1xyXG4gICBjb2xvcjogI2E4MTYxNjtcclxufVxyXG5cclxuLnN0YXR1cy1wYWdhZG8ge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNlNmNiO1xyXG4gICBjb2xvcjogIzE1NTcyNDtcclxufVxyXG5cclxuLmRpYWxvZy1oZWFkZXIge1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYW5jZWwtYnV0dG9uIHtcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICB0b3A6IDEwcHg7XHJcbiAgIHJpZ2h0OiAxMHB4O1xyXG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL3NlY3JldGFyaWEvdmlldy12ZW50YXMvdmlldy12ZW50YXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNIOztBQUVBO0VBQ0cseUJBQUE7RUFDQSxjQUFBO0FBQ0g7O0FBRUE7RUFDRyx5QkFBQTtFQUNBLGNBQUE7QUFDSDs7QUFFQTtFQUNHLGtCQUFBO0FBQ0g7O0FBRUE7RUFDRyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQ0g7QUFDQSxncENBQWdwQyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0dXMtbGFiZWwge1xyXG4gICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBtaW4td2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbi5zdGF0dXMtYWN0aXZvIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2U3OTQ5NDtcclxuICAgY29sb3I6ICNhODE2MTY7XHJcbn1cclxuXHJcbi5zdGF0dXMtcGFnYWRvIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2MzZTZjYjtcclxuICAgY29sb3I6ICMxNTU3MjQ7XHJcbn1cclxuXHJcbi5kaWFsb2ctaGVhZGVyIHtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2FuY2VsLWJ1dHRvbiB7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgdG9wOiAxMHB4O1xyXG4gICByaWdodDogMTBweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 80734:
/*!**************************************************!*\
  !*** ./src/app/demo/service/prestamo.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrestamoService: () => (/* binding */ PrestamoService)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ 31070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);



class PrestamoService {
  constructor(http) {
    this.http = http;
  }
  getPrestamos() {
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/prestamos`);
  }
  getPagosByPrestamoId(prestamoId) {
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/pagos/prestamo/${prestamoId}`);
  }
  registrarPrestamo(prestamo) {
    return this.http.post(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/prestamos/`, prestamo);
  }
  registrarPago(pago) {
    return this.http.post(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/pagos/`, pago);
  }
  buscarPrestamos(term) {
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/prestamos/buscar`, {
      params: {
        term
      }
    });
  }
  static {
    this.ɵfac = function PrestamoService_Factory(t) {
      return new (t || PrestamoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PrestamoService,
      factory: PrestamoService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 65716:
/*!************************************************!*\
  !*** ./src/app/demo/service/ventas.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VentasService: () => (/* binding */ VentasService)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ 31070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);



class VentasService {
  constructor(http) {
    this.http = http;
  }
  crearOrdenVenta(orden) {
    return this.http.post(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/ordenes-ventas/encabezado`, orden);
  }
  registrarDetalleOrdenVenta(detalle) {
    return this.http.post(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/ordenes-ventas/crear-detalle`, detalle);
  }
  registrarPagoOrdenVenta(pago) {
    return this.http.post(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/ordenes-ventas/registrar-pago-orden`, pago);
  }
  obtenerOrdenesVenta() {
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/ordenes-ventas/`);
  }
  obtenerPagosOrdenVenta(ordenId) {
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/ordenes-ventas/pagos/${ordenId}`);
  }
  eliminarOrdenVenta(ordenId) {
    return this.http.delete(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/ordenes-ventas/${ordenId}`);
  }
  static {
    this.ɵfac = function VentasService_Factory(t) {
      return new (t || VentasService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: VentasService,
      factory: VentasService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_secretaria_secretaria_module_ts.js.map