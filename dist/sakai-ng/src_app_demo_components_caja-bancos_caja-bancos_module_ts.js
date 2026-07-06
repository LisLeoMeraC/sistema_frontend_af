(self["webpackChunksakai"] = self["webpackChunksakai"] || []).push([["src_app_demo_components_caja-bancos_caja-bancos_module_ts"],{

/***/ 51038:
/*!************************************************************************!*\
  !*** ./src/app/demo/components/caja-bancos/bancos/bancos.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BancosComponent: () => (/* binding */ BancosComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_banco_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/banco.service */ 84550);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tooltip */ 80405);












const _c0 = () => ["nombre"];
const _c1 = () => ({
  width: "450px"
});
const _c2 = a0 => ({
  "ng-invalid ng-dirty": a0
});
function BancosComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "p-sortIcon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Nombre de la Entidad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "p-sortIcon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function BancosComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 28)(4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 31)(8, "div", 32)(9, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BancosComponent_ng_template_23_Template_button_click_9_listener() {
      const banco_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.editBanco(banco_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BancosComponent_ng_template_23_Template_button_click_10_listener() {
      const banco_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.deleteBanco(banco_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const banco_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", banco_r3.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", banco_r3.nombre, " ");
  }
}
function BancosComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " No se encontraron bancos registrados. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function BancosComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37)(1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div")(4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Detalles del Banco");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Informaci\u00F3n de la entidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function BancosComponent_ng_template_27_small_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "El nombre es requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function BancosComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42)(1, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Nombre de la Entidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 44)(4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function BancosComponent_ng_template_27_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r3.banco.nombre, $event) || (ctx_r3.banco.nombre = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, BancosComponent_ng_template_27_small_7_Template, 2, 0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.banco.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c2, ctx_r3.submitted && !ctx_r3.banco.nombre));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.submitted && !ctx_r3.banco.nombre);
  }
}
function BancosComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 50)(1, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BancosComponent_ng_template_28_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.hideDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BancosComponent_ng_template_28_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.saveBanco());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class BancosComponent {
  constructor(bancoService) {
    this.bancoService = bancoService;
    this.bancos = [];
    this.bancoDialog = false;
    this.banco = {
      nombre: ''
    };
    this.submitted = false;
  }
  ngOnInit() {
    this.cargarBancos();
  }
  cargarBancos() {
    this.bancoService.listarBancosActivos().subscribe(res => {
      this.bancos = res;
    });
  }
  openNew() {
    this.banco = {
      nombre: ''
    };
    this.submitted = false;
    this.bancoDialog = true;
  }
  editBanco(banco) {
    this.banco = {
      ...banco
    };
    this.bancoDialog = true;
  }
  hideDialog() {
    this.bancoDialog = false;
    this.submitted = false;
  }
  saveBanco() {
    this.submitted = true;
    if (this.banco.nombre?.trim()) {
      if (this.banco.id) {
        this.bancoService.actualizarBanco(this.banco.id, this.banco).subscribe({
          next: () => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Éxito', 'Banco actualizado correctamente', 'success');
            this.cargarBancos();
            this.hideDialog();
          },
          error: err => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error', 'Hubo un error al actualizar', 'error');
          }
        });
      } else {
        this.bancoService.crearBanco(this.banco).subscribe({
          next: () => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Éxito', 'Banco creado correctamente', 'success');
            this.cargarBancos();
            this.hideDialog();
          },
          error: err => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error', 'Hubo un error al crear', 'error');
          }
        });
      }
    }
  }
  deleteBanco(banco) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: '¿Estás seguro?',
      text: `No podrás revertir esto. Se desactivará el banco: ${banco.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.isConfirmed) {
        if (banco.id) {
          this.bancoService.desactivarBanco(banco.id).subscribe({
            next: () => {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Eliminado!', 'El banco ha sido desactivado.', 'success');
              this.cargarBancos();
            },
            error: () => {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error', 'Hubo un problema al desactivar.', 'error');
            }
          });
        }
      }
    });
  }
  static {
    this.ɵfac = function BancosComponent_Factory(t) {
      return new (t || BancosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_banco_service__WEBPACK_IMPORTED_MODULE_1__.BancoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: BancosComponent,
      selectors: [["app-bancos"]],
      decls: 29,
      vars: 11,
      consts: [["dt", ""], [1, "grid"], [1, "col-12"], [1, "card", "p-4", "border-none", "shadow-premium", "mb-4", "flex", "align-items-center", "justify-content-between", "bg-white", "overflow-hidden", "relative", 2, "border-radius", "1.25rem"], [1, "flex", "align-items-center", "relative", "z-1"], [1, "p-3", "border-round-xl", "bg-blue-50", "mr-4", "shadow-sm"], [1, "pi", "pi-building", "text-blue-600", "text-3xl"], [1, "m-0", "font-bold", "text-900", "line-height-2", "tracking-tight"], [1, "m-0", "text-600", "font-medium", "opacity-70"], [1, "flex", "gap-3", "relative", "z-1"], ["pButton", "", "pRipple", "", "label", "Nuevo Banco", "icon", "pi pi-plus", 1, "p-button-primary", "px-4", "py-2", "border-round-xl", "shadow-md", "font-bold", 3, "click"], [1, "absolute", "-top-10", "-right-10", "bg-blue-50", "border-circle", "opacity-50", 2, "width", "250px", "height", "250px"], [1, "card", "border-none", "shadow-2", "border-round-xl", "p-3"], [1, "flex", "align-items-center", "mb-3", 2, "border-left", "4px solid var(--primary-color)", "padding-left", "0.85rem"], [1, "m-0", "font-bold", "text-900", 2, "font-size", "1rem"], ["responsiveLayout", "scroll", "dataKey", "id", "styleClass", "p-datatable-sm p-datatable-gridlines", 3, "value", "rows", "paginator", "globalFilterFields", "rowHover"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["styleClass", "border-round-xl shadow-5 overflow-hidden", 1, "p-fluid", 3, "visibleChange", "visible", "modal"], ["pTemplate", "content"], ["pTemplate", "footer"], ["pSortableColumn", "id", 1, "text-center", 2, "width", "100px"], ["field", "id"], ["pSortableColumn", "nombre"], ["field", "nombre"], [1, "text-center", 2, "width", "120px"], [1, "text-center", "font-medium", "text-600"], [1, "font-bold", "text-800"], [1, "flex", "align-items-center", "gap-2"], [1, "pi", "pi-building", "text-primary-500"], [1, "text-center"], [1, "flex", "justify-content-center", "gap-2"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", "pTooltip", "Editar", "tooltipPosition", "top", 1, "p-button-rounded", "p-button-text", "p-button-success", "p-button-sm", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", "pTooltip", "Desactivar", "tooltipPosition", "top", 1, "p-button-rounded", "p-button-text", "p-button-danger", "p-button-sm", 3, "click"], ["colspan", "3", 1, "text-center", "text-500", "py-4"], [1, "pi", "pi-inbox", "text-3xl", "mb-2", "block"], [1, "flex", "align-items-center", "gap-3"], [1, "p-2", "border-round-lg", "bg-primary-50"], [1, "pi", "pi-building", "text-primary", "text-xl"], [1, "font-bold", "text-900", 2, "font-size", "1.05rem"], [1, "text-500", 2, "font-size", "0.8rem"], [1, "field", "mt-3"], ["for", "nombre", 1, "font-semibold", "text-700", "block", "mb-1"], [1, "p-inputgroup"], [1, "p-inputgroup-addon"], [1, "pi", "pi-id-card"], ["type", "text", "pInputText", "", "id", "nombre", "required", "", "autofocus", "", "styleClass", "border-round-lg", "placeholder", "Ej. BANCO PICHINCHA", 3, "ngModelChange", "ngModel", "ngClass"], ["class", "ng-dirty ng-invalid text-red-500 mt-1 block", 4, "ngIf"], [1, "ng-dirty", "ng-invalid", "text-red-500", "mt-1", "block"], [1, "flex", "justify-content-end", "gap-2", "mt-2", "pt-3", "border-top-1", "surface-border"], ["pButton", "", "pRipple", "", "label", "Cancelar", "icon", "pi pi-times", 1, "p-button-text", "p-button-secondary", 3, "click"], ["pButton", "", "pRipple", "", "label", "Guardar", "icon", "pi pi-check", 1, "p-button-primary", "shadow-2", "border-round-lg", 3, "click"]],
      template: function BancosComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div")(7, "h2", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Administraci\u00F3n de Bancos");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Gesti\u00F3n de entidades financieras del sistema");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9)(12, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BancosComponent_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.openNew());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 1)(15, "div", 2)(16, "div", 12)(17, "div", 13)(18, "h4", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Listado de Bancos");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p-table", 15, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, BancosComponent_ng_template_22_Template, 9, 0, "ng-template", 16)(23, BancosComponent_ng_template_23_Template, 11, 2, "ng-template", 17)(24, BancosComponent_ng_template_24_Template, 4, 0, "ng-template", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p-dialog", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("visibleChange", function BancosComponent_Template_p_dialog_visibleChange_25_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.bancoDialog, $event) || (ctx.bancoDialog = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, BancosComponent_ng_template_26_Template, 8, 0, "ng-template", 16)(27, BancosComponent_ng_template_27_Template, 8, 5, "ng-template", 20)(28, BancosComponent_ng_template_28_Template, 3, 0, "ng-template", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.bancos)("rows", 10)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c0))("rowHover", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("visible", ctx.bancoDialog);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("modal", true);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, primeng_table__WEBPACK_IMPORTED_MODULE_5__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_6__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_5__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_5__.SortIcon, primeng_dialog__WEBPACK_IMPORTED_MODULE_7__.Dialog, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputText, primeng_ripple__WEBPACK_IMPORTED_MODULE_10__.Ripple, primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__.Tooltip],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5jb3MuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL2NhamEtYmFuY29zL2JhbmNvcy9iYW5jb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 34983:
/*!***************************************************************************!*\
  !*** ./src/app/demo/components/caja-bancos/caja-bancos-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CajaBancosRoutingModule: () => (/* binding */ CajaBancosRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _bancos_bancos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bancos/bancos.component */ 51038);
/* harmony import */ var _cuentas_bancarias_cuentas_bancarias_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cuentas-bancarias/cuentas-bancarias.component */ 73572);
/* harmony import */ var _transacciones_banco_transacciones_banco_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transacciones-banco/transacciones-banco.component */ 94312);
/* harmony import */ var _cuentas_por_pagar_cuentas_por_pagar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cuentas-por-pagar/cuentas-por-pagar.component */ 18736);
/* harmony import */ var _cuentas_por_cobrar_cuentas_por_cobrar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cuentas-por-cobrar/cuentas-por-cobrar.component */ 11408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);








const routes = [{
  path: 'bancos',
  component: _bancos_bancos_component__WEBPACK_IMPORTED_MODULE_0__.BancosComponent
}, {
  path: 'cuentas-bancarias',
  component: _cuentas_bancarias_cuentas_bancarias_component__WEBPACK_IMPORTED_MODULE_1__.CuentasBancariasComponent
}, {
  path: 'transacciones-banco',
  component: _transacciones_banco_transacciones_banco_component__WEBPACK_IMPORTED_MODULE_2__.TransaccionesBancoComponent
}, {
  path: 'cuentas-por-pagar',
  component: _cuentas_por_pagar_cuentas_por_pagar_component__WEBPACK_IMPORTED_MODULE_3__.CuentasPorPagarComponent
}, {
  path: 'cuentas-por-cobrar',
  component: _cuentas_por_cobrar_cuentas_por_cobrar_component__WEBPACK_IMPORTED_MODULE_4__.CuentasPorCobrarComponent
}];
class CajaBancosRoutingModule {
  static {
    this.ɵfac = function CajaBancosRoutingModule_Factory(t) {
      return new (t || CajaBancosRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: CajaBancosRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CajaBancosRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 62198:
/*!*******************************************************************!*\
  !*** ./src/app/demo/components/caja-bancos/caja-bancos.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CajaBancosModule: () => (/* binding */ CajaBancosModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _caja_bancos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caja-bancos-routing.module */ 34983);
/* harmony import */ var _bancos_bancos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bancos/bancos.component */ 51038);
/* harmony import */ var _cuentas_bancarias_cuentas_bancarias_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cuentas-bancarias/cuentas-bancarias.component */ 73572);
/* harmony import */ var _transacciones_banco_transacciones_banco_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transacciones-banco/transacciones-banco.component */ 94312);
/* harmony import */ var _cuentas_por_pagar_cuentas_por_pagar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cuentas-por-pagar/cuentas-por-pagar.component */ 18736);
/* harmony import */ var _cuentas_por_cobrar_cuentas_por_cobrar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cuentas-por-cobrar/cuentas-por-cobrar.component */ 11408);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/toolbar */ 31973);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/inputnumber */ 61759);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/inputtextarea */ 87058);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);






















class CajaBancosModule {
  static {
    this.ɵfac = function CajaBancosModule_Factory(t) {
      return new (t || CajaBancosModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: CajaBancosModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_7__.ConfirmationService],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _caja_bancos_routing_module__WEBPACK_IMPORTED_MODULE_0__.CajaBancosRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, primeng_table__WEBPACK_IMPORTED_MODULE_10__.TableModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_11__.DialogModule, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputTextModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__.DropdownModule, primeng_toast__WEBPACK_IMPORTED_MODULE_15__.ToastModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_16__.ToolbarModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_17__.RippleModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_18__.ConfirmDialogModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_19__.InputNumberModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_20__.TooltipModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_21__.InputTextareaModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CajaBancosModule, {
    declarations: [_bancos_bancos_component__WEBPACK_IMPORTED_MODULE_1__.BancosComponent, _cuentas_bancarias_cuentas_bancarias_component__WEBPACK_IMPORTED_MODULE_2__.CuentasBancariasComponent, _transacciones_banco_transacciones_banco_component__WEBPACK_IMPORTED_MODULE_3__.TransaccionesBancoComponent, _cuentas_por_pagar_cuentas_por_pagar_component__WEBPACK_IMPORTED_MODULE_4__.CuentasPorPagarComponent, _cuentas_por_cobrar_cuentas_por_cobrar_component__WEBPACK_IMPORTED_MODULE_5__.CuentasPorCobrarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _caja_bancos_routing_module__WEBPACK_IMPORTED_MODULE_0__.CajaBancosRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, primeng_table__WEBPACK_IMPORTED_MODULE_10__.TableModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_11__.DialogModule, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputTextModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__.DropdownModule, primeng_toast__WEBPACK_IMPORTED_MODULE_15__.ToastModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_16__.ToolbarModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_17__.RippleModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_18__.ConfirmDialogModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_19__.InputNumberModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_20__.TooltipModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_21__.InputTextareaModule]
  });
})();

/***/ }),

/***/ 73572:
/*!**********************************************************************************************!*\
  !*** ./src/app/demo/components/caja-bancos/cuentas-bancarias/cuentas-bancarias.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CuentasBancariasComponent: () => (/* binding */ CuentasBancariasComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_cuenta_bancaria_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/cuenta-bancaria.service */ 8025);
/* harmony import */ var _service_banco_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/banco.service */ 84550);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tooltip */ 80405);














const _c0 = () => ["numeroCuenta", "titular", "banco.nombre"];
const _c1 = () => ({
  width: "500px"
});
const _c2 = (a0, a1) => ({
  "p-badge-info": a0,
  "p-badge-success": a1
});
const _c3 = a0 => ({
  "ng-invalid ng-dirty": a0
});
function CuentasBancariasComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Banco ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p-sortIcon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "N\u00FAmero de Cuenta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "p-sortIcon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Tipo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "p-sortIcon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Titular ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "p-sortIcon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Saldo Actual ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "p-sortIcon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CuentasBancariasComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 36)(7, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td", 36)(16, "div", 41)(17, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CuentasBancariasComponent_ng_template_23_Template_button_click_17_listener() {
      const cuenta_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.editCuenta(cuenta_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CuentasBancariasComponent_ng_template_23_Template_button_click_18_listener() {
      const cuenta_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.deleteCuenta(cuenta_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const cuenta_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cuenta_r3.banco == null ? null : cuenta_r3.banco.nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cuenta_r3.numeroCuenta, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](9, _c2, cuenta_r3.tipoCuenta === "CORRIENTE", cuenta_r3.tipoCuenta === "AHORROS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cuenta_r3.tipoCuenta, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cuenta_r3.titular, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](14, 6, cuenta_r3.saldoActual, "USD"), " ");
  }
}
function CuentasBancariasComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " No se encontraron cuentas bancarias. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CuentasBancariasComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 46)(1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div")(4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Detalles de la Cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Informaci\u00F3n bancaria");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function CuentasBancariasComponent_ng_template_27_small_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El banco es requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CuentasBancariasComponent_ng_template_27_small_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CuentasBancariasComponent_ng_template_27_small_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CuentasBancariasComponent_ng_template_27_small_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El titular es requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CuentasBancariasComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Banco");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p-dropdown", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CuentasBancariasComponent_ng_template_27_Template_p_dropdown_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r3.bancoSeleccionado, $event) || (ctx_r3.bancoSeleccionado = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CuentasBancariasComponent_ng_template_27_small_5_Template, 2, 0, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 56)(7, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "N\u00FAmero de Cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CuentasBancariasComponent_ng_template_27_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r3.cuenta.numeroCuenta, $event) || (ctx_r3.cuenta.numeroCuenta = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, CuentasBancariasComponent_ng_template_27_small_10_Template, 2, 0, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 56)(12, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Tipo de Cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p-dropdown", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CuentasBancariasComponent_ng_template_27_Template_p_dropdown_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r3.cuenta.tipoCuenta, $event) || (ctx_r3.cuenta.tipoCuenta = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CuentasBancariasComponent_ng_template_27_small_15_Template, 2, 0, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 52)(17, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Titular");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 62)(20, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CuentasBancariasComponent_ng_template_27_Template_input_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r3.cuenta.titular, $event) || (ctx_r3.cuenta.titular = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, CuentasBancariasComponent_ng_template_27_small_23_Template, 2, 0, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 66)(25, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Saldo Inicial / Actual ($)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 62)(28, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CuentasBancariasComponent_ng_template_27_Template_input_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r3.cuenta.saldoActual, $event) || (ctx_r3.cuenta.saldoActual = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r3.bancos);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.bancoSeleccionado);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c3, ctx_r3.submitted && !ctx_r3.bancoSeleccionado))("appendTo", "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.submitted && !ctx_r3.bancoSeleccionado);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.cuenta.numeroCuenta);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](19, _c3, ctx_r3.submitted && !ctx_r3.cuenta.numeroCuenta));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.submitted && !ctx_r3.cuenta.numeroCuenta);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r3.tiposCuenta);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.cuenta.tipoCuenta);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](21, _c3, ctx_r3.submitted && !ctx_r3.cuenta.tipoCuenta))("appendTo", "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.submitted && !ctx_r3.cuenta.tipoCuenta);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.cuenta.titular);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](23, _c3, ctx_r3.submitted && !ctx_r3.cuenta.titular));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.submitted && !ctx_r3.cuenta.titular);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.cuenta.saldoActual);
  }
}
function CuentasBancariasComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 71)(1, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CuentasBancariasComponent_ng_template_28_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.hideDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CuentasBancariasComponent_ng_template_28_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.saveCuenta());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class CuentasBancariasComponent {
  constructor(cuentaService, bancoService) {
    this.cuentaService = cuentaService;
    this.bancoService = bancoService;
    this.cuentas = [];
    this.bancos = [];
    this.tiposCuenta = [{
      label: 'Corriente',
      value: 'CORRIENTE'
    }, {
      label: 'Ahorros',
      value: 'AHORROS'
    }];
    this.cuentaDialog = false;
    this.cuenta = {
      banco: {
        nombre: ''
      },
      numeroCuenta: '',
      tipoCuenta: '',
      titular: '',
      saldoActual: 0
    };
    this.bancoSeleccionado = null;
    this.submitted = false;
  }
  ngOnInit() {
    this.cargarCuentas();
    this.cargarBancos();
  }
  cargarCuentas() {
    this.cuentaService.listarCuentasBancariasActivas().subscribe(res => {
      this.cuentas = res;
    });
  }
  cargarBancos() {
    this.bancoService.listarBancosActivos().subscribe(res => {
      this.bancos = res;
    });
  }
  openNew() {
    this.cuenta = {
      banco: {
        nombre: ''
      },
      numeroCuenta: '',
      tipoCuenta: '',
      titular: '',
      saldoActual: 0
    };
    this.bancoSeleccionado = null;
    this.submitted = false;
    this.cuentaDialog = true;
  }
  editCuenta(cuenta) {
    this.cuenta = {
      ...cuenta
    };
    // Find the banco object in the loaded list so the dropdown selects it properly
    if (this.cuenta.banco && this.cuenta.banco.id) {
      this.bancoSeleccionado = this.bancos.find(b => b.id === this.cuenta.banco.id) || null;
    }
    this.cuentaDialog = true;
  }
  hideDialog() {
    this.cuentaDialog = false;
    this.submitted = false;
  }
  saveCuenta() {
    this.submitted = true;
    if (this.cuenta.numeroCuenta?.trim() && this.cuenta.tipoCuenta && this.cuenta.titular?.trim() && this.bancoSeleccionado) {
      if (this.cuenta.id) {
        this.cuenta.banco = this.bancoSeleccionado;
        this.cuentaService.actualizarCuentaBancaria(this.cuenta.id, this.cuenta).subscribe({
          next: () => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Éxito', 'Cuenta bancaria actualizada correctamente', 'success');
            this.cargarCuentas();
            this.hideDialog();
          },
          error: () => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error', 'Hubo un error al actualizar', 'error');
          }
        });
      } else {
        if (this.bancoSeleccionado.id) {
          this.cuentaService.crearCuentaBancaria(this.bancoSeleccionado.id, this.cuenta).subscribe({
            next: () => {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Éxito', 'Cuenta bancaria creada correctamente', 'success');
              this.cargarCuentas();
              this.hideDialog();
            },
            error: () => {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error', 'Hubo un error al crear', 'error');
            }
          });
        }
      }
    }
  }
  deleteCuenta(cuenta) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: '¿Estás seguro?',
      text: `No podrás revertir esto. Se desactivará la cuenta: ${cuenta.numeroCuenta}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.isConfirmed) {
        if (cuenta.id) {
          this.cuentaService.desactivarCuentaBancaria(cuenta.id).subscribe({
            next: () => {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Eliminado!', 'La cuenta bancaria ha sido desactivada.', 'success');
              this.cargarCuentas();
            },
            error: () => {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error', 'Hubo un problema al desactivar.', 'error');
            }
          });
        }
      }
    });
  }
  static {
    this.ɵfac = function CuentasBancariasComponent_Factory(t) {
      return new (t || CuentasBancariasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_cuenta_bancaria_service__WEBPACK_IMPORTED_MODULE_1__.CuentaBancariaService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_banco_service__WEBPACK_IMPORTED_MODULE_2__.BancoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CuentasBancariasComponent,
      selectors: [["app-cuentas-bancarias"]],
      decls: 29,
      vars: 11,
      consts: [["dt", ""], [1, "grid"], [1, "col-12"], [1, "card", "p-4", "border-none", "shadow-premium", "mb-4", "flex", "align-items-center", "justify-content-between", "bg-white", "overflow-hidden", "relative", 2, "border-radius", "1.25rem"], [1, "flex", "align-items-center", "relative", "z-1"], [1, "p-3", "border-round-xl", "bg-indigo-50", "mr-4", "shadow-sm"], [1, "pi", "pi-wallet", "text-indigo-600", "text-3xl"], [1, "m-0", "font-bold", "text-900", "line-height-2", "tracking-tight"], [1, "m-0", "text-600", "font-medium", "opacity-70"], [1, "flex", "gap-3", "relative", "z-1"], ["pButton", "", "pRipple", "", "label", "Nueva Cuenta", "icon", "pi pi-plus", 1, "p-button-primary", "px-4", "py-2", "border-round-xl", "shadow-md", "font-bold", 3, "click"], [1, "absolute", "-top-10", "-right-10", "bg-indigo-50", "border-circle", "opacity-50", 2, "width", "250px", "height", "250px"], [1, "card", "border-none", "shadow-2", "border-round-xl", "p-3"], [1, "flex", "align-items-center", "mb-3", 2, "border-left", "4px solid var(--primary-color)", "padding-left", "0.85rem"], [1, "m-0", "font-bold", "text-900", 2, "font-size", "1rem"], ["responsiveLayout", "scroll", "dataKey", "id", "styleClass", "p-datatable-sm p-datatable-gridlines", 3, "value", "rows", "paginator", "globalFilterFields", "rowHover"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["styleClass", "border-round-xl shadow-5 overflow-hidden", 1, "p-fluid", 3, "visibleChange", "visible", "modal"], ["pTemplate", "content"], ["pTemplate", "footer"], ["pSortableColumn", "banco.nombre"], ["field", "banco.nombre"], ["pSortableColumn", "numeroCuenta"], ["field", "numeroCuenta"], ["pSortableColumn", "tipoCuenta", 1, "text-center"], ["field", "tipoCuenta"], ["pSortableColumn", "titular"], ["field", "titular"], ["pSortableColumn", "saldoActual", 1, "text-right"], ["field", "saldoActual"], [1, "text-center", 2, "width", "120px"], [1, "font-semibold", "text-800"], [1, "text-700", "font-medium"], [1, "pi", "pi-credit-card", "text-500", "mr-2"], [1, "text-center"], [1, "p-badge", 3, "ngClass"], [1, "text-700"], [1, "pi", "pi-user", "text-500", "mr-2"], [1, "text-right", "font-bold", "text-primary"], [1, "flex", "justify-content-center", "gap-2"], ["pButton", "", "pRipple", "", "icon", "pi pi-pencil", "pTooltip", "Editar", "tooltipPosition", "top", 1, "p-button-rounded", "p-button-text", "p-button-success", "p-button-sm", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-trash", "pTooltip", "Desactivar", "tooltipPosition", "top", 1, "p-button-rounded", "p-button-text", "p-button-danger", "p-button-sm", 3, "click"], ["colspan", "6", 1, "text-center", "text-500", "py-4"], [1, "pi", "pi-inbox", "text-3xl", "mb-2", "block"], [1, "flex", "align-items-center", "gap-3"], [1, "p-2", "border-round-lg", "bg-primary-50"], [1, "pi", "pi-wallet", "text-primary", "text-xl"], [1, "font-bold", "text-900", 2, "font-size", "1.05rem"], [1, "text-500", 2, "font-size", "0.8rem"], [1, "grid", "mt-2"], [1, "field", "col-12", "mb-3"], ["for", "banco", 1, "font-semibold", "text-700", "block", "mb-1"], ["optionLabel", "nombre", "placeholder", "Selecciona un Banco", "styleClass", "border-round-lg", 3, "ngModelChange", "options", "ngModel", "ngClass", "appendTo"], ["class", "ng-dirty ng-invalid text-red-500 mt-1 block", 4, "ngIf"], [1, "field", "col-12", "md:col-6", "mb-3"], ["for", "numeroCuenta", 1, "font-semibold", "text-700", "block", "mb-1"], ["type", "text", "pInputText", "", "id", "numeroCuenta", "required", "", "styleClass", "border-round-lg", 3, "ngModelChange", "ngModel", "ngClass"], ["for", "tipoCuenta", 1, "font-semibold", "text-700", "block", "mb-1"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Seleccione", "styleClass", "border-round-lg", 3, "ngModelChange", "options", "ngModel", "ngClass", "appendTo"], ["for", "titular", 1, "font-semibold", "text-700", "block", "mb-1"], [1, "p-inputgroup"], [1, "p-inputgroup-addon"], [1, "pi", "pi-user"], ["type", "text", "pInputText", "", "id", "titular", "required", "", "styleClass", "border-round-lg", 3, "ngModelChange", "ngModel", "ngClass"], [1, "field", "col-12", "mb-2"], ["for", "saldoActual", 1, "font-semibold", "text-700", "block", "mb-1"], [1, "pi", "pi-dollar"], ["type", "number", "pInputText", "", "id", "saldoActual", "placeholder", "0.00", "step", "0.01", "styleClass", "border-round-lg", 3, "ngModelChange", "ngModel"], [1, "ng-dirty", "ng-invalid", "text-red-500", "mt-1", "block"], [1, "flex", "justify-content-end", "gap-2", "pt-3", "border-top-1", "surface-border"], ["pButton", "", "pRipple", "", "label", "Cancelar", "icon", "pi pi-times", 1, "p-button-text", "p-button-secondary", 3, "click"], ["pButton", "", "pRipple", "", "label", "Guardar", "icon", "pi pi-check", 1, "p-button-primary", "shadow-2", "border-round-lg", 3, "click"]],
      template: function CuentasBancariasComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div")(7, "h2", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Cuentas Bancarias");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Gesti\u00F3n de cuentas corrientes y de ahorros");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9)(12, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CuentasBancariasComponent_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.openNew());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 1)(15, "div", 2)(16, "div", 12)(17, "div", 13)(18, "h4", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Listado de Cuentas Activas");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "p-table", 15, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, CuentasBancariasComponent_ng_template_22_Template, 18, 0, "ng-template", 16)(23, CuentasBancariasComponent_ng_template_23_Template, 19, 12, "ng-template", 17)(24, CuentasBancariasComponent_ng_template_24_Template, 4, 0, "ng-template", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "p-dialog", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("visibleChange", function CuentasBancariasComponent_Template_p_dialog_visibleChange_25_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.cuentaDialog, $event) || (ctx.cuentaDialog = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, CuentasBancariasComponent_ng_template_26_Template, 8, 0, "ng-template", 16)(27, CuentasBancariasComponent_ng_template_27_Template, 31, 25, "ng-template", 20)(28, CuentasBancariasComponent_ng_template_28_Template, 3, 0, "ng-template", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.cuentas)("rows", 10)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c0))("rowHover", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("visible", ctx.cuentaDialog);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("modal", true);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_table__WEBPACK_IMPORTED_MODULE_6__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_6__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_6__.SortIcon, primeng_dialog__WEBPACK_IMPORTED_MODULE_8__.Dialog, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputText, primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__.Dropdown, primeng_ripple__WEBPACK_IMPORTED_MODULE_12__.Ripple, primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__.Tooltip, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdWVudGFzLWJhbmNhcmlhcy5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL2NhamEtYmFuY29zL2N1ZW50YXMtYmFuY2FyaWFzL2N1ZW50YXMtYmFuY2FyaWFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnTEFBZ0wiLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 11408:
/*!************************************************************************************************!*\
  !*** ./src/app/demo/components/caja-bancos/cuentas-por-cobrar/cuentas-por-cobrar.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CuentasPorCobrarComponent: () => (/* binding */ CuentasPorCobrarComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_cuenta_por_cobrar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/cuenta-por-cobrar.service */ 30279);
/* harmony import */ var _service_cuenta_bancaria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/cuenta-bancaria.service */ 8025);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputnumber */ 61759);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtextarea */ 87058);














const _c0 = () => ["proveedorNombre"];
const _c1 = () => ({
  width: "500px"
});
const _c2 = (a0, a1) => ({
  "p-badge-success": a0,
  "p-badge-warning": a1
});
const _c3 = a0 => ({
  "ng-invalid ng-dirty": a0
});
function CuentasPorCobrarComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "ID Venta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p-sortIcon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Fecha ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "p-sortIcon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Cliente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "p-sortIcon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Monto Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "p-sortIcon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Cobrado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "p-sortIcon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Saldo Pendiente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "p-sortIcon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Estado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "p-sortIcon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CuentasPorCobrarComponent_ng_template_22_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CuentasPorCobrarComponent_ng_template_22_button_23_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const cuenta_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.openAbonoDialog(cuenta_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CuentasPorCobrarComponent_ng_template_22_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Cobrada");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CuentasPorCobrarComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td", 43)(19, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "td", 43)(22, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, CuentasPorCobrarComponent_ng_template_22_button_23_Template, 1, 0, "button", 46)(24, CuentasPorCobrarComponent_ng_template_22_span_24_Template, 3, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const cuenta_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("#", cuenta_r3.ordenVentaCacaoId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 10, cuenta_r3.fechaCreacion, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", cuenta_r3.proveedorNombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 13, cuenta_r3.montoTotal, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](14, 16, cuenta_r3.montoCobrado, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](17, 19, cuenta_r3.saldoPendiente, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](22, _c2, cuenta_r3.estado === "COBRADA", cuenta_r3.estado === "PENDIENTE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cuenta_r3.estado, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", cuenta_r3.estado !== "COBRADA");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", cuenta_r3.estado === "COBRADA");
  }
}
function CuentasPorCobrarComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " No se encontraron cuentas por cobrar. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CuentasPorCobrarComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 53)(1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div")(4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Registrar Cobro");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Ingreso por saldo pendiente");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function CuentasPorCobrarComponent_ng_template_26_div_0_small_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El monto debe ser mayor a 0.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CuentasPorCobrarComponent_ng_template_26_div_0_small_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El monto no puede superar el saldo pendiente.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CuentasPorCobrarComponent_ng_template_26_div_0_div_17_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const cb_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", cb_r7.banco == null ? null : cb_r7.banco.nombre, " - ", cb_r7.numeroCuenta, " ");
  }
}
function CuentasPorCobrarComponent_ng_template_26_div_0_div_17_ng_template_5_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r3.cuentaBancariaSeleccionada.banco.nombre, " - ", ctx_r3.cuentaBancariaSeleccionada.numeroCuenta, "");
  }
}
function CuentasPorCobrarComponent_ng_template_26_div_0_div_17_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CuentasPorCobrarComponent_ng_template_26_div_0_div_17_ng_template_5_div_0_Template, 2, 2, "div", 77);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.cuentaBancariaSeleccionada);
  }
}
function CuentasPorCobrarComponent_ng_template_26_div_0_div_17_small_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Debe seleccionar una cuenta bancaria.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CuentasPorCobrarComponent_ng_template_26_div_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 63)(1, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Cuenta Bancaria (Destino del Dinero)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p-dropdown", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CuentasPorCobrarComponent_ng_template_26_div_0_div_17_Template_p_dropdown_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r3.cuentaBancariaSeleccionada, $event) || (ctx_r3.cuentaBancariaSeleccionada = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CuentasPorCobrarComponent_ng_template_26_div_0_div_17_ng_template_4_Template, 1, 2, "ng-template", 75)(5, CuentasPorCobrarComponent_ng_template_26_div_0_div_17_ng_template_5_Template, 1, 1, "ng-template", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CuentasPorCobrarComponent_ng_template_26_div_0_div_17_small_6_Template, 2, 0, "small", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r3.cuentasBancarias);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.cuentaBancariaSeleccionada);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c3, ctx_r3.submitted && !ctx_r3.cuentaBancariaSeleccionada))("appendTo", "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.submitted && !ctx_r3.cuentaBancariaSeleccionada);
  }
}
function CuentasPorCobrarComponent_ng_template_26_div_0_small_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "La descripci\u00F3n es requerida.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CuentasPorCobrarComponent_ng_template_26_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 59)(1, "div", 60)(2, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Por Cobrar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 63)(8, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Monto a Cobrar ($)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p-inputNumber", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CuentasPorCobrarComponent_ng_template_26_div_0_Template_p_inputNumber_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r3.montoAbono, $event) || (ctx_r3.montoAbono = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CuentasPorCobrarComponent_ng_template_26_div_0_small_11_Template, 2, 0, "small", 66)(12, CuentasPorCobrarComponent_ng_template_26_div_0_small_12_Template, 2, 0, "small", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 63)(14, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "M\u00E9todo de Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "p-dropdown", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CuentasPorCobrarComponent_ng_template_26_div_0_Template_p_dropdown_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r3.metodoPago, $event) || (ctx_r3.metodoPago = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, CuentasPorCobrarComponent_ng_template_26_div_0_div_17_Template, 7, 7, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 63)(19, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "textarea", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CuentasPorCobrarComponent_ng_template_26_div_0_Template_textarea_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r3.descripcionAbono, $event) || (ctx_r3.descripcionAbono = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, CuentasPorCobrarComponent_ng_template_26_div_0_small_22_Template, 2, 0, "small", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](6, 14, ctx_r3.cuentaSeleccionada.saldoPendiente, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.montoAbono);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("min", 0.01)("max", ctx_r3.cuentaSeleccionada.saldoPendiente)("required", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c3, ctx_r3.submitted && ctx_r3.montoAbono <= 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.submitted && ctx_r3.montoAbono <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.submitted && ctx_r3.montoAbono > ctx_r3.cuentaSeleccionada.saldoPendiente);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r3.metodosPago);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.metodoPago);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.metodoPago === "TRANSFERENCIA");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.descripcionAbono);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](19, _c3, ctx_r3.submitted && !ctx_r3.descripcionAbono));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.submitted && !ctx_r3.descripcionAbono);
  }
}
function CuentasPorCobrarComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CuentasPorCobrarComponent_ng_template_26_div_0_Template, 23, 21, "div", 58);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.cuentaSeleccionada);
  }
}
function CuentasPorCobrarComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 78)(1, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CuentasPorCobrarComponent_ng_template_27_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.hideAbonoDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CuentasPorCobrarComponent_ng_template_27_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.saveAbono());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class CuentasPorCobrarComponent {
  constructor(cuentaCobrarService, cuentaBancariaService) {
    this.cuentaCobrarService = cuentaCobrarService;
    this.cuentaBancariaService = cuentaBancariaService;
    this.cuentas = [];
    this.cuentasBancarias = [];
    this.abonoDialog = false;
    this.cuentaSeleccionada = null;
    // Formulario Abono
    this.montoAbono = 0;
    this.metodoPago = 'EFECTIVO';
    this.cuentaBancariaSeleccionada = null;
    this.descripcionAbono = '';
    this.submitted = false;
    this.metodosPago = [{
      label: 'Efectivo',
      value: 'EFECTIVO'
    }, {
      label: 'Transferencia Bancaria',
      value: 'TRANSFERENCIA'
    }];
  }
  ngOnInit() {
    this.cargarCuentasPorCobrar();
    this.cargarCuentasBancarias();
  }
  cargarCuentasPorCobrar() {
    this.cuentaCobrarService.listarCuentasPorCobrar().subscribe(res => {
      this.cuentas = res;
    });
  }
  cargarCuentasBancarias() {
    this.cuentaBancariaService.listarCuentasBancariasActivas().subscribe(res => {
      this.cuentasBancarias = res;
    });
  }
  openAbonoDialog(cuenta) {
    this.cuentaSeleccionada = cuenta;
    this.montoAbono = 0;
    this.metodoPago = 'EFECTIVO';
    this.cuentaBancariaSeleccionada = null;
    this.descripcionAbono = '';
    this.submitted = false;
    this.abonoDialog = true;
  }
  hideAbonoDialog() {
    this.abonoDialog = false;
    this.submitted = false;
    this.cuentaSeleccionada = null;
  }
  saveAbono() {
    this.submitted = true;
    // Validaciones
    if (!this.cuentaSeleccionada) return;
    if (this.montoAbono <= 0) return;
    if (this.montoAbono > this.cuentaSeleccionada.saldoPendiente) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Atención', 'El monto del cobro no puede superar el saldo pendiente.', 'warning');
      return;
    }
    if (!this.descripcionAbono.trim()) return;
    if (this.metodoPago === 'TRANSFERENCIA' && !this.cuentaBancariaSeleccionada) return;
    const request = {
      monto: this.montoAbono,
      metodoPago: this.metodoPago,
      descripcion: this.descripcionAbono,
      cuentaBancariaId: this.metodoPago === 'TRANSFERENCIA' ? this.cuentaBancariaSeleccionada?.id : undefined
    };
    let mensajeInfo = this.metodoPago === 'EFECTIVO' ? 'Se registrará el cobro ingresando el dinero a Caja General. ¿Deseas continuar?' : `Se registrará el cobro ingresando el dinero a la cuenta bancaria ${this.cuentaBancariaSeleccionada?.numeroCuenta}. ¿Deseas continuar?`;
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: 'Confirmar Cobro',
      text: mensajeInfo,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Sí, continuar',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.isConfirmed) {
        this.cuentaCobrarService.cobrarCuenta(this.cuentaSeleccionada.id, request).subscribe({
          next: () => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Éxito', 'Cobro registrado correctamente', 'success');
            this.hideAbonoDialog();
            this.cargarCuentasPorCobrar();
          },
          error: err => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error', err.error?.message || 'Error al registrar cobro', 'error');
          }
        });
      }
    });
  }
  static {
    this.ɵfac = function CuentasPorCobrarComponent_Factory(t) {
      return new (t || CuentasPorCobrarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_cuenta_por_cobrar_service__WEBPACK_IMPORTED_MODULE_1__.CuentaPorCobrarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_cuenta_bancaria_service__WEBPACK_IMPORTED_MODULE_2__.CuentaBancariaService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CuentasPorCobrarComponent,
      selectors: [["app-cuentas-por-cobrar"]],
      decls: 28,
      vars: 12,
      consts: [["dt", ""], [1, "grid"], [1, "col-12"], [1, "card", "p-4", "border-none", "shadow-premium", "mb-4", "flex", "align-items-center", "justify-content-between", "bg-white", "overflow-hidden", "relative", 2, "border-radius", "1.25rem"], [1, "flex", "align-items-center", "relative", "z-1"], [1, "p-3", "border-round-xl", "bg-green-50", "mr-4", "shadow-sm"], [1, "pi", "pi-money-bill", "text-green-600", "text-3xl"], [1, "m-0", "font-bold", "text-900", "line-height-2", "tracking-tight"], [1, "m-0", "text-600", "font-medium", "opacity-70"], [1, "absolute", "-top-10", "-right-10", "bg-green-50", "border-circle", "opacity-50", 2, "width", "250px", "height", "250px"], [1, "card", "border-none", "shadow-2", "border-round-xl", "p-3"], [1, "flex", "flex-column", "md:flex-row", "align-items-center", "justify-content-between", "mb-3", "pb-2", "border-bottom-1", "surface-border"], [1, "flex", "align-items-center", 2, "border-left", "4px solid var(--green-500)", "padding-left", "0.85rem"], [1, "m-0", "font-bold", "text-900", 2, "font-size", "1rem"], ["responsiveLayout", "scroll", "dataKey", "id", "styleClass", "p-datatable-sm p-datatable-gridlines", 3, "value", "rows", "paginator", "globalFilterFields", "rowHover"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["styleClass", "border-round-xl shadow-5 overflow-hidden", 1, "p-fluid", 3, "visibleChange", "visible", "modal", "focusTrap"], ["pTemplate", "content"], ["pTemplate", "footer"], ["pSortableColumn", "id", 1, "text-center"], ["field", "id"], ["pSortableColumn", "fechaCreacion", 1, "text-center"], ["field", "fechaCreacion"], ["pSortableColumn", "proveedorNombre"], ["field", "proveedorNombre"], ["pSortableColumn", "montoTotal", 1, "text-right"], ["field", "montoTotal"], ["pSortableColumn", "montoCobrado", 1, "text-right"], ["field", "montoCobrado"], ["pSortableColumn", "saldoPendiente", 1, "text-right"], ["field", "saldoPendiente"], ["pSortableColumn", "estado", 1, "text-center"], ["field", "estado"], [1, "text-center", 2, "width", "120px"], [1, "text-center", "font-medium", "text-600"], [1, "text-center", "text-700", "font-medium"], [1, "font-bold", "text-800"], [1, "pi", "pi-user", "mr-2", "text-primary-500"], [1, "text-right", "font-medium", "text-700"], [1, "text-right", "text-green-600", "font-bold"], [1, "text-right", "text-orange-600", "font-bold", "text-lg"], [1, "text-center"], [1, "p-badge", 3, "ngClass"], [1, "flex", "justify-content-center", "gap-2"], ["pButton", "", "pRipple", "", "label", "Cobrar", "icon", "pi pi-dollar", "class", "p-button-success p-button-sm border-round-lg shadow-2 font-bold px-3", 3, "click", 4, "ngIf"], ["class", "text-500 text-sm font-italic", 4, "ngIf"], ["pButton", "", "pRipple", "", "label", "Cobrar", "icon", "pi pi-dollar", 1, "p-button-success", "p-button-sm", "border-round-lg", "shadow-2", "font-bold", "px-3", 3, "click"], [1, "text-500", "text-sm", "font-italic"], [1, "pi", "pi-check-circle", "text-green-500", "mr-1"], ["colspan", "8", 1, "text-center", "text-500", "py-4"], [1, "pi", "pi-inbox", "text-3xl", "mb-2", "block"], [1, "flex", "align-items-center", "gap-3"], [1, "p-2", "border-round-lg", "bg-green-50"], [1, "pi", "pi-dollar", "text-green-600", "text-xl"], [1, "font-bold", "text-900", 2, "font-size", "1.05rem"], [1, "text-500", 2, "font-size", "0.8rem"], ["class", "mt-2", 4, "ngIf"], [1, "mt-2"], [1, "bg-orange-50", "px-4", "py-3", "border-round-lg", "border-1", "border-orange-200", "mb-4", "flex", "align-items-center", "justify-content-between"], [1, "text-orange-800", "font-bold"], [1, "text-2xl", "font-bold", "text-orange-600"], [1, "field"], ["for", "monto", 1, "font-semibold", "text-700", "block", "mb-1"], ["id", "monto", "mode", "currency", "currency", "USD", "locale", "en-US", "inputStyleClass", "border-round-lg font-bold text-lg", 3, "ngModelChange", "ngModel", "min", "max", "required", "ngClass"], ["class", "ng-dirty ng-invalid text-red-500 mt-1 block", 4, "ngIf"], ["for", "metodoPago", 1, "font-semibold", "text-700", "block", "mb-1"], ["id", "metodoPago", "optionLabel", "label", "optionValue", "value", "styleClass", "border-round-lg", 3, "ngModelChange", "options", "ngModel"], ["class", "field", 4, "ngIf"], ["for", "descripcion", 1, "font-semibold", "text-700", "block", "mb-1"], ["id", "descripcion", "pInputTextarea", "", "required", "", "rows", "3", 1, "border-round-lg", 3, "ngModelChange", "ngModel", "ngClass"], [1, "ng-dirty", "ng-invalid", "text-red-500", "mt-1", "block"], ["for", "cuentaBancaria", 1, "font-semibold", "text-700", "block", "mb-1"], ["id", "cuentaBancaria", "optionLabel", "numeroCuenta", "placeholder", "Selecciona una Cuenta", "styleClass", "border-round-lg", 3, "ngModelChange", "options", "ngModel", "ngClass", "appendTo"], ["pTemplate", "item"], ["pTemplate", "selectedItem"], [4, "ngIf"], [1, "flex", "justify-content-end", "gap-2", "pt-3", "border-top-1", "surface-border"], ["pButton", "", "pRipple", "", "label", "Cancelar", "icon", "pi pi-times", 1, "p-button-text", "p-button-secondary", 3, "click"], ["pButton", "", "pRipple", "", "label", "Registrar Cobro", "icon", "pi pi-check", 1, "p-button-primary", "shadow-2", "border-round-lg", "p-button-success", 3, "click"]],
      template: function CuentasPorCobrarComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div")(7, "h2", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Cuentas por Cobrar");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Saldos a favor por ventas de cacao");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 1)(13, "div", 2)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "h4", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Listado de Cuentas por Cobrar");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p-table", 14, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, CuentasPorCobrarComponent_ng_template_21_Template, 24, 0, "ng-template", 15)(22, CuentasPorCobrarComponent_ng_template_22_Template, 25, 25, "ng-template", 16)(23, CuentasPorCobrarComponent_ng_template_23_Template, 4, 0, "ng-template", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p-dialog", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("visibleChange", function CuentasPorCobrarComponent_Template_p_dialog_visibleChange_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.abonoDialog, $event) || (ctx.abonoDialog = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, CuentasPorCobrarComponent_ng_template_25_Template, 8, 0, "ng-template", 15)(26, CuentasPorCobrarComponent_ng_template_26_Template, 1, 1, "ng-template", 19)(27, CuentasPorCobrarComponent_ng_template_27_Template, 3, 0, "ng-template", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.cuentas)("rows", 10)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c0))("rowHover", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("visible", ctx.abonoDialog);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("modal", true)("focusTrap", false);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_table__WEBPACK_IMPORTED_MODULE_6__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_6__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_6__.SortIcon, primeng_dialog__WEBPACK_IMPORTED_MODULE_8__.Dialog, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__.Dropdown, primeng_ripple__WEBPACK_IMPORTED_MODULE_11__.Ripple, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__.InputNumber, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__.InputTextarea, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdWVudGFzLXBvci1jb2JyYXIuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL2NhamEtYmFuY29zL2N1ZW50YXMtcG9yLWNvYnJhci9jdWVudGFzLXBvci1jb2JyYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9MQUFvTCIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 18736:
/*!**********************************************************************************************!*\
  !*** ./src/app/demo/components/caja-bancos/cuentas-por-pagar/cuentas-por-pagar.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CuentasPorPagarComponent: () => (/* binding */ CuentasPorPagarComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_cuenta_por_pagar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/cuenta-por-pagar.service */ 3181);
/* harmony import */ var _service_cuenta_bancaria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/cuenta-bancaria.service */ 8025);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputnumber */ 61759);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtextarea */ 87058);















const _c0 = () => ["clienteNombre"];
const _c1 = () => ({
  width: "500px"
});
const _c2 = () => ({
  width: "650px"
});
const _c3 = (a0, a1) => ({
  "p-badge-success": a0,
  "p-badge-warning": a1
});
const _c4 = a0 => ({
  "ng-invalid ng-dirty": a0
});
function CuentasPorPagarComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "ID Compra ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p-sortIcon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Fecha ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "p-sortIcon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Proveedor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "p-sortIcon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Monto Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "p-sortIcon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Abonado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "p-sortIcon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Saldo Pendiente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "p-sortIcon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Estado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "p-sortIcon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CuentasPorPagarComponent_ng_template_24_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CuentasPorPagarComponent_ng_template_24_button_23_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const cuenta_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.openAbonoDialog(cuenta_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CuentasPorPagarComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td", 46)(19, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "td", 46)(22, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, CuentasPorPagarComponent_ng_template_24_button_23_Template, 1, 0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CuentasPorPagarComponent_ng_template_24_Template_button_click_24_listener() {
      const cuenta_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.verHistorial(cuenta_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const cuenta_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("#", cuenta_r4.compraCacaoId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 9, cuenta_r4.fechaCreacion, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", cuenta_r4.clienteNombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 12, cuenta_r4.montoTotal, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](14, 15, cuenta_r4.montoPagado, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](17, 18, cuenta_r4.saldoPendiente, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](21, _c3, cuenta_r4.estado === "PAGADA", cuenta_r4.estado === "PENDIENTE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cuenta_r4.estado, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", cuenta_r4.estado !== "PAGADA");
  }
}
function CuentasPorPagarComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " No se encontraron cuentas por pagar. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CuentasPorPagarComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54)(1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div")(4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Registrar Abono");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Pago de obligaci\u00F3n pendiente");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function CuentasPorPagarComponent_ng_template_28_div_0_small_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El monto debe ser mayor a 0.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CuentasPorPagarComponent_ng_template_28_div_0_small_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El monto no puede superar la deuda.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CuentasPorPagarComponent_ng_template_28_div_0_div_17_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const cb_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", cb_r8.banco.nombre, " - ", cb_r8.numeroCuenta, " ");
  }
}
function CuentasPorPagarComponent_ng_template_28_div_0_div_17_ng_template_5_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r4.cuentaBancariaSeleccionada.banco.nombre, " - ", ctx_r4.cuentaBancariaSeleccionada.numeroCuenta, "");
  }
}
function CuentasPorPagarComponent_ng_template_28_div_0_div_17_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CuentasPorPagarComponent_ng_template_28_div_0_div_17_ng_template_5_div_0_Template, 2, 2, "div", 78);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.cuentaBancariaSeleccionada);
  }
}
function CuentasPorPagarComponent_ng_template_28_div_0_div_17_small_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Debe seleccionar una cuenta bancaria.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CuentasPorPagarComponent_ng_template_28_div_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 64)(1, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Cuenta Bancaria (Origen del Dinero)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p-dropdown", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CuentasPorPagarComponent_ng_template_28_div_0_div_17_Template_p_dropdown_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r4.cuentaBancariaSeleccionada, $event) || (ctx_r4.cuentaBancariaSeleccionada = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CuentasPorPagarComponent_ng_template_28_div_0_div_17_ng_template_4_Template, 1, 2, "ng-template", 76)(5, CuentasPorPagarComponent_ng_template_28_div_0_div_17_ng_template_5_Template, 1, 1, "ng-template", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CuentasPorPagarComponent_ng_template_28_div_0_div_17_small_6_Template, 2, 0, "small", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r4.cuentasBancarias);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r4.cuentaBancariaSeleccionada);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c4, ctx_r4.submitted && !ctx_r4.cuentaBancariaSeleccionada))("appendTo", "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.submitted && !ctx_r4.cuentaBancariaSeleccionada);
  }
}
function CuentasPorPagarComponent_ng_template_28_div_0_small_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "La descripci\u00F3n es requerida.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CuentasPorPagarComponent_ng_template_28_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 60)(1, "div", 61)(2, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Deuda Pendiente:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 64)(8, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Monto a Abonar ($)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p-inputNumber", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CuentasPorPagarComponent_ng_template_28_div_0_Template_p_inputNumber_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r4.montoAbono, $event) || (ctx_r4.montoAbono = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CuentasPorPagarComponent_ng_template_28_div_0_small_11_Template, 2, 0, "small", 67)(12, CuentasPorPagarComponent_ng_template_28_div_0_small_12_Template, 2, 0, "small", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 64)(14, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "M\u00E9todo de Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "p-dropdown", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CuentasPorPagarComponent_ng_template_28_div_0_Template_p_dropdown_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r4.metodoPago, $event) || (ctx_r4.metodoPago = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, CuentasPorPagarComponent_ng_template_28_div_0_div_17_Template, 7, 7, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 64)(19, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "textarea", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function CuentasPorPagarComponent_ng_template_28_div_0_Template_textarea_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r4.descripcionAbono, $event) || (ctx_r4.descripcionAbono = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, CuentasPorPagarComponent_ng_template_28_div_0_small_22_Template, 2, 0, "small", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](6, 14, ctx_r4.cuentaSeleccionada.saldoPendiente, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r4.montoAbono);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("min", 0.01)("max", ctx_r4.cuentaSeleccionada.saldoPendiente)("required", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c4, ctx_r4.submitted && ctx_r4.montoAbono <= 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.montoAbono <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.submitted && ctx_r4.montoAbono > ctx_r4.cuentaSeleccionada.saldoPendiente);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r4.metodosPago);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r4.metodoPago);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.metodoPago === "TRANSFERENCIA");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r4.descripcionAbono);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](19, _c4, ctx_r4.submitted && !ctx_r4.descripcionAbono));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.submitted && !ctx_r4.descripcionAbono);
  }
}
function CuentasPorPagarComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CuentasPorPagarComponent_ng_template_28_div_0_Template, 23, 21, "div", 59);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.cuentaSeleccionada);
  }
}
function CuentasPorPagarComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 79)(1, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CuentasPorPagarComponent_ng_template_29_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.hideAbonoDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CuentasPorPagarComponent_ng_template_29_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.saveAbono());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CuentasPorPagarComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54)(1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div")(4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Historial de Pagos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Proveedor: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.cuentaSeleccionada == null ? null : ctx_r4.cuentaSeleccionada.clienteNombre);
  }
}
function CuentasPorPagarComponent_ng_template_32_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Fecha de Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "M\u00E9todo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Monto Abonado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CuentasPorPagarComponent_ng_template_32_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td", 46)(5, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pago_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 5, pago_r10.fechaPago, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", pago_r10.metodoPago === "EFECTIVO" ? "p-badge-success" : "p-badge-info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", pago_r10.metodoPago, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](pago_r10.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 8, pago_r10.monto, "USD"));
  }
}
function CuentasPorPagarComponent_ng_template_32_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No hay pagos registrados para esta cuenta.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CuentasPorPagarComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-table", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CuentasPorPagarComponent_ng_template_32_ng_template_1_Template, 9, 0, "ng-template", 17)(2, CuentasPorPagarComponent_ng_template_32_ng_template_2_Template, 12, 11, "ng-template", 18)(3, CuentasPorPagarComponent_ng_template_32_ng_template_3_Template, 3, 0, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r4.pagosHistorial)("loading", ctx_r4.loadingHistorial)("rowHover", true);
  }
}
class CuentasPorPagarComponent {
  constructor(cuentaPagarService, cuentaBancariaService) {
    this.cuentaPagarService = cuentaPagarService;
    this.cuentaBancariaService = cuentaBancariaService;
    this.cuentas = [];
    this.cuentasBancarias = [];
    this.vistaActual = 'PENDIENTES';
    this.loading = false;
    this.abonoDialog = false;
    this.historialDialog = false;
    this.cuentaSeleccionada = null;
    this.pagosHistorial = [];
    this.loadingHistorial = false;
    // Formulario Abono
    this.montoAbono = 0;
    this.metodoPago = 'EFECTIVO';
    this.cuentaBancariaSeleccionada = null;
    this.descripcionAbono = '';
    this.submitted = false;
    this.metodosPago = [{
      label: 'Efectivo',
      value: 'EFECTIVO'
    }, {
      label: 'Transferencia Bancaria',
      value: 'TRANSFERENCIA'
    }];
  }
  ngOnInit() {
    this.cargarCuentasPorPagar();
    this.cargarCuentasBancarias();
  }
  cargarCuentasPorPagar() {
    this.loading = true;
    this.cuentaPagarService.listarCuentasPorPagar().subscribe(res => {
      this.cuentas = res;
      this.loading = false;
    });
  }
  cargarCuentasPagadas() {
    this.loading = true;
    this.cuentaPagarService.listarCuentasPagadas().subscribe(res => {
      this.cuentas = res;
      this.loading = false;
    });
  }
  toggleVista() {
    if (this.vistaActual === 'PENDIENTES') {
      this.vistaActual = 'PAGADAS';
      this.cargarCuentasPagadas();
    } else {
      this.vistaActual = 'PENDIENTES';
      this.cargarCuentasPorPagar();
    }
  }
  cargarCuentasBancarias() {
    this.cuentaBancariaService.listarCuentasBancariasActivas().subscribe(res => {
      this.cuentasBancarias = res;
    });
  }
  openAbonoDialog(cuenta) {
    this.cuentaSeleccionada = cuenta;
    this.montoAbono = 0;
    this.metodoPago = 'EFECTIVO';
    this.cuentaBancariaSeleccionada = null;
    this.descripcionAbono = '';
    this.submitted = false;
    this.abonoDialog = true;
  }
  hideAbonoDialog() {
    this.abonoDialog = false;
    this.submitted = false;
    this.cuentaSeleccionada = null;
  }
  verHistorial(cuenta) {
    this.cuentaSeleccionada = cuenta;
    this.historialDialog = true;
    this.loadingHistorial = true;
    this.pagosHistorial = [];
    this.cuentaPagarService.obtenerPagosCuenta(cuenta.id).subscribe({
      next: res => {
        this.pagosHistorial = res;
        this.loadingHistorial = false;
      },
      error: err => {
        console.error(err);
        this.loadingHistorial = false;
      }
    });
  }
  hideHistorialDialog() {
    this.historialDialog = false;
    this.cuentaSeleccionada = null;
  }
  saveAbono() {
    this.submitted = true;
    // Validaciones
    if (!this.cuentaSeleccionada) return;
    if (this.montoAbono <= 0) return;
    if (this.montoAbono > this.cuentaSeleccionada.saldoPendiente) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Atención', 'El monto del abono no puede superar el saldo pendiente.', 'warning');
      return;
    }
    if (!this.descripcionAbono.trim()) return;
    if (this.metodoPago === 'TRANSFERENCIA' && !this.cuentaBancariaSeleccionada) return;
    const request = {
      monto: this.montoAbono,
      metodoPago: this.metodoPago,
      descripcion: this.descripcionAbono,
      cuentaBancariaId: this.metodoPago === 'TRANSFERENCIA' ? this.cuentaBancariaSeleccionada?.id : undefined
    };
    let mensajeInfo = this.metodoPago === 'EFECTIVO' ? 'Se registrará el pago restando el dinero de Caja General. ¿Deseas continuar?' : `Se registrará el pago restando de la cuenta bancaria ${this.cuentaBancariaSeleccionada?.numeroCuenta}. ¿Deseas continuar?`;
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: 'Confirmar Abono',
      text: mensajeInfo,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Sí, continuar',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.isConfirmed) {
        this.cuentaPagarService.pagarCuenta(this.cuentaSeleccionada.id, request).subscribe({
          next: () => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Éxito', 'Abono registrado correctamente', 'success');
            this.hideAbonoDialog();
            this.cargarCuentasPorPagar();
          },
          error: err => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error', err.error?.message || 'Error al registrar abono', 'error');
          }
        });
      }
    });
  }
  static {
    this.ɵfac = function CuentasPorPagarComponent_Factory(t) {
      return new (t || CuentasPorPagarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_cuenta_por_pagar_service__WEBPACK_IMPORTED_MODULE_1__.CuentaPorPagarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_cuenta_bancaria_service__WEBPACK_IMPORTED_MODULE_2__.CuentaBancariaService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CuentasPorPagarComponent,
      selectors: [["app-cuentas-por-pagar"]],
      decls: 33,
      vars: 23,
      consts: [["dt", ""], [1, "grid"], [1, "col-12"], [1, "card", "p-4", "border-none", "shadow-premium", "mb-4", "flex", "align-items-center", "justify-content-between", "bg-white", "overflow-hidden", "relative", 2, "border-radius", "1.25rem"], [1, "flex", "align-items-center", "relative", "z-1"], [1, "p-3", "border-round-xl", "bg-red-50", "mr-4", "shadow-sm"], [1, "pi", "pi-file-excel", "text-red-600", "text-3xl"], [1, "m-0", "font-bold", "text-900", "line-height-2", "tracking-tight"], [1, "m-0", "text-600", "font-medium", "opacity-70"], [1, "absolute", "-top-10", "-right-10", "bg-red-50", "border-circle", "opacity-50", 2, "width", "250px", "height", "250px"], [1, "card", "border-none", "shadow-2", "border-round-xl", "p-3"], [1, "flex", "flex-column", "md:flex-row", "align-items-center", "justify-content-between", "mb-3", "pb-2", "border-bottom-1", "surface-border"], [1, "flex", "align-items-center", 2, "border-left", "4px solid var(--red-500)", "padding-left", "0.85rem"], [1, "m-0", "font-bold", "text-900", 2, "font-size", "1rem"], [1, "mt-3", "md:mt-0"], ["pButton", "", "pRipple", "", 3, "click", "label", "icon"], ["responsiveLayout", "scroll", "dataKey", "id", "styleClass", "p-datatable-sm p-datatable-gridlines", 3, "value", "loading", "rows", "paginator", "globalFilterFields", "rowHover"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["styleClass", "border-round-xl shadow-5 overflow-hidden", 1, "p-fluid", 3, "visibleChange", "visible", "modal", "focusTrap"], ["pTemplate", "content"], ["pTemplate", "footer"], ["styleClass", "border-round-xl shadow-5 overflow-hidden", 1, "p-fluid", 3, "visibleChange", "visible", "modal"], ["pSortableColumn", "id", 1, "text-center"], ["field", "id"], ["pSortableColumn", "fechaCreacion", 1, "text-center"], ["field", "fechaCreacion"], ["pSortableColumn", "clienteNombre"], ["field", "clienteNombre"], ["pSortableColumn", "montoTotal", 1, "text-right"], ["field", "montoTotal"], ["pSortableColumn", "montoPagado", 1, "text-right"], ["field", "montoPagado"], ["pSortableColumn", "saldoPendiente", 1, "text-right"], ["field", "saldoPendiente"], ["pSortableColumn", "estado", 1, "text-center"], ["field", "estado"], [1, "text-center", 2, "width", "120px"], [1, "text-center", "font-medium", "text-600"], [1, "text-center", "text-700", "font-medium"], [1, "font-bold", "text-800"], [1, "pi", "pi-user", "mr-2", "text-primary-500"], [1, "text-right", "font-medium", "text-700"], [1, "text-right", "text-green-600", "font-bold"], [1, "text-right", "text-red-600", "font-bold", "text-lg"], [1, "text-center"], [1, "p-badge", 3, "ngClass"], [1, "flex", "justify-content-center", "gap-2"], ["pButton", "", "pRipple", "", "label", "Abonar", "icon", "pi pi-money-bill", "class", "p-button-success p-button-sm border-round-lg shadow-2 font-bold px-3", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "icon", "pi pi-list", "pTooltip", "Ver Historial de Pagos", "tooltipPosition", "top", 1, "p-button-info", "p-button-sm", "border-round-lg", "shadow-2", "px-3", 3, "click"], ["pButton", "", "pRipple", "", "label", "Abonar", "icon", "pi pi-money-bill", 1, "p-button-success", "p-button-sm", "border-round-lg", "shadow-2", "font-bold", "px-3", 3, "click"], ["colspan", "8", 1, "text-center", "text-500", "py-4"], [1, "pi", "pi-inbox", "text-3xl", "mb-2", "block"], [1, "flex", "align-items-center", "gap-3"], [1, "p-2", "border-round-lg", "bg-green-50"], [1, "pi", "pi-money-bill", "text-green-600", "text-xl"], [1, "font-bold", "text-900", 2, "font-size", "1.05rem"], [1, "text-500", 2, "font-size", "0.8rem"], ["class", "mt-2", 4, "ngIf"], [1, "mt-2"], [1, "bg-red-50", "px-4", "py-3", "border-round-lg", "border-1", "border-red-200", "mb-4", "flex", "align-items-center", "justify-content-between"], [1, "text-red-800", "font-bold"], [1, "text-2xl", "font-bold", "text-red-600"], [1, "field"], ["for", "monto", 1, "font-semibold", "text-700", "block", "mb-1"], ["id", "monto", "mode", "currency", "currency", "USD", "locale", "en-US", "inputStyleClass", "border-round-lg font-bold text-lg", 3, "ngModelChange", "ngModel", "min", "max", "required", "ngClass"], ["class", "ng-dirty ng-invalid text-red-500 mt-1 block", 4, "ngIf"], ["for", "metodoPago", 1, "font-semibold", "text-700", "block", "mb-1"], ["id", "metodoPago", "optionLabel", "label", "optionValue", "value", "styleClass", "border-round-lg", 3, "ngModelChange", "options", "ngModel"], ["class", "field", 4, "ngIf"], ["for", "descripcion", 1, "font-semibold", "text-700", "block", "mb-1"], ["id", "descripcion", "pInputTextarea", "", "required", "", "rows", "3", 1, "border-round-lg", 3, "ngModelChange", "ngModel", "ngClass"], [1, "ng-dirty", "ng-invalid", "text-red-500", "mt-1", "block"], ["for", "cuentaBancaria", 1, "font-semibold", "text-700", "block", "mb-1"], ["id", "cuentaBancaria", "optionLabel", "numeroCuenta", "placeholder", "Selecciona una Cuenta", "styleClass", "border-round-lg", 3, "ngModelChange", "options", "ngModel", "ngClass", "appendTo"], ["pTemplate", "item"], ["pTemplate", "selectedItem"], [4, "ngIf"], [1, "flex", "justify-content-end", "gap-2", "pt-3", "border-top-1", "surface-border"], ["pButton", "", "pRipple", "", "label", "Cancelar", "icon", "pi pi-times", 1, "p-button-text", "p-button-secondary", 3, "click"], ["pButton", "", "pRipple", "", "label", "Registrar Pago", "icon", "pi pi-check", 1, "p-button-primary", "shadow-2", "border-round-lg", "p-button-success", 3, "click"], [1, "p-2", "border-round-lg", "bg-blue-50"], [1, "pi", "pi-history", "text-blue-600", "text-xl"], [1, "font-bold", "text-700"], ["responsiveLayout", "scroll", "styleClass", "p-datatable-sm p-datatable-gridlines mt-3", 3, "value", "loading", "rowHover"], [1, "text-right"], [1, "font-medium", "text-700"], [1, "text-600"], ["colspan", "4", 1, "text-center", "text-500", "py-3"]],
      template: function CuentasPorPagarComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div")(7, "h2", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Cuentas por Pagar");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Deudas pendientes por compras de cacao");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 1)(13, "div", 2)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "h4", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14)(20, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CuentasPorPagarComponent_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.toggleVista());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p-table", 16, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, CuentasPorPagarComponent_ng_template_23_Template, 24, 0, "ng-template", 17)(24, CuentasPorPagarComponent_ng_template_24_Template, 25, 24, "ng-template", 18)(25, CuentasPorPagarComponent_ng_template_25_Template, 4, 0, "ng-template", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p-dialog", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("visibleChange", function CuentasPorPagarComponent_Template_p_dialog_visibleChange_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.abonoDialog, $event) || (ctx.abonoDialog = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, CuentasPorPagarComponent_ng_template_27_Template, 8, 0, "ng-template", 17)(28, CuentasPorPagarComponent_ng_template_28_Template, 1, 1, "ng-template", 21)(29, CuentasPorPagarComponent_ng_template_29_Template, 3, 0, "ng-template", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "p-dialog", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("visibleChange", function CuentasPorPagarComponent_Template_p_dialog_visibleChange_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.historialDialog, $event) || (ctx.historialDialog = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, CuentasPorPagarComponent_ng_template_31_Template, 10, 1, "ng-template", 17)(32, CuentasPorPagarComponent_ng_template_32_Template, 4, 3, "ng-template", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.vistaActual === "PENDIENTES" ? "Listado de Obligaciones Pendientes" : "Historial de Obligaciones Pagadas", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.vistaActual === "PENDIENTES" ? "p-button-outlined p-button-secondary" : "p-button-outlined p-button-primary");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", ctx.vistaActual === "PENDIENTES" ? "Ver Pagadas" : "Ver Pendientes")("icon", ctx.vistaActual === "PENDIENTES" ? "pi pi-history" : "pi pi-list");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.cuentas)("loading", ctx.loading)("rows", 10)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](20, _c0))("rowHover", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](21, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("visible", ctx.abonoDialog);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("modal", true)("focusTrap", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](22, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("visible", ctx.historialDialog);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("modal", true);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_table__WEBPACK_IMPORTED_MODULE_6__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_6__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_6__.SortIcon, primeng_dialog__WEBPACK_IMPORTED_MODULE_8__.Dialog, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__.Dropdown, primeng_ripple__WEBPACK_IMPORTED_MODULE_11__.Ripple, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__.InputNumber, primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__.Tooltip, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__.InputTextarea, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdWVudGFzLXBvci1wYWdhci5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL2NhamEtYmFuY29zL2N1ZW50YXMtcG9yLXBhZ2FyL2N1ZW50YXMtcG9yLXBhZ2FyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnTEFBZ0wiLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 94312:
/*!**************************************************************************************************!*\
  !*** ./src/app/demo/components/caja-bancos/transacciones-banco/transacciones-banco.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransaccionesBancoComponent: () => (/* binding */ TransaccionesBancoComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_transaccion_bancaria_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/transaccion-bancaria.service */ 75502);
/* harmony import */ var _service_cuenta_bancaria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/cuenta-bancaria.service */ 8025);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputnumber */ 61759);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtextarea */ 87058);















const _c0 = () => ({
  width: "450px"
});
const _c1 = (a0, a1) => ({
  "p-badge-success": a0,
  "p-badge-danger": a1
});
const _c2 = (a0, a1) => ({
  "pi-arrow-down": a0,
  "pi-arrow-up": a1
});
const _c3 = (a0, a1) => ({
  "text-green-600 font-bold": a0,
  "text-red-600 font-bold": a1
});
const _c4 = (a0, a1) => ({
  "bg-green-50": a0,
  "bg-orange-50": a1
});
const _c5 = (a0, a1) => ({
  "pi-arrow-down text-green-600": a0,
  "pi-arrow-up text-orange-600": a1
});
const _c6 = a0 => ({
  "ng-invalid ng-dirty": a0
});
const _c7 = (a0, a1) => ({
  "p-button-success": a0,
  "p-button-warning": a1
});
function TransaccionesBancoComponent_ng_template_20_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.cuentaSeleccionada.banco.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("- ", ctx_r0.cuentaSeleccionada.numeroCuenta, "");
  }
}
function TransaccionesBancoComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, TransaccionesBancoComponent_ng_template_20_div_0_Template, 6, 2, "div", 24);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.cuentaSeleccionada);
  }
}
function TransaccionesBancoComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29)(1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cuenta_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cuenta_r2.banco == null ? null : cuenta_r2.banco.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cuenta_r2.numeroCuenta);
  }
}
function TransaccionesBancoComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32)(1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransaccionesBancoComponent_div_22_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.openDeposito());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransaccionesBancoComponent_div_22_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.openRetiro());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function TransaccionesBancoComponent_div_23_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Fecha y Hora");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Tipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Monto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "N\u00BA Comprobante");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Comprobante");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function TransaccionesBancoComponent_div_23_ng_template_14_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransaccionesBancoComponent_div_23_ng_template_14_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const tx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.descargarComprobante(tx_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function TransaccionesBancoComponent_div_23_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td", 50)(5, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td", 50)(16, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, TransaccionesBancoComponent_div_23_ng_template_14_button_17_Template, 1, 0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransaccionesBancoComponent_div_23_ng_template_14_Template_button_click_18_listener() {
      const tx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.openSubirComprobante(tx_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const tx_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 10, tx_r6.fechaHora, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](16, _c1, tx_r6.tipo === "INGRESO", tx_r6.tipo === "EGRESO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](19, _c2, tx_r6.tipo === "INGRESO", tx_r6.tipo === "EGRESO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", tx_r6.tipo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](22, _c3, tx_r6.tipo === "INGRESO", tx_r6.tipo === "EGRESO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", tx_r6.tipo === "INGRESO" ? "+" : "-", " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 13, tx_r6.monto, "USD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](tx_r6.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](tx_r6.numeroComprobante || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", tx_r6.tieneComprobante);
  }
}
function TransaccionesBancoComponent_div_23_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " No se encontraron transacciones para esta cuenta. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function TransaccionesBancoComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35)(1, "div", 36)(2, "div", 37)(3, "h4", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Historial de Movimientos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 39)(6, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Saldo Actual");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p-table", 42, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, TransaccionesBancoComponent_div_23_ng_template_13_Template, 13, 0, "ng-template", 20)(14, TransaccionesBancoComponent_div_23_ng_template_14_Template, 19, 25, "ng-template", 43)(15, TransaccionesBancoComponent_div_23_ng_template_15_Template, 4, 0, "ng-template", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 5, ctx_r0.cuentaSeleccionada.saldoActual, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r0.transacciones)("rows", 10)("paginator", true)("rowHover", true);
  }
}
function TransaccionesBancoComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 62)(1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div")(4, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Registro de movimiento de capital");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](3, _c4, ctx_r0.tipoOperacion === "DEPOSITO", ctx_r0.tipoOperacion === "RETIRO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](6, _c5, ctx_r0.tipoOperacion === "DEPOSITO", ctx_r0.tipoOperacion === "RETIRO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.tipoOperacion === "DEPOSITO" ? "Depositar a Banco" : "Retirar de Banco");
  }
}
function TransaccionesBancoComponent_ng_template_26_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Este dinero saldr\u00E1 de la ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Caja General");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " y se sumar\u00E1 a esta cuenta bancaria.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function TransaccionesBancoComponent_ng_template_26_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Este dinero se restar\u00E1 de esta cuenta bancaria e ingresar\u00E1 a la ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Caja General");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function TransaccionesBancoComponent_ng_template_26_small_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "El monto debe ser mayor a 0.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function TransaccionesBancoComponent_ng_template_26_small_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "La descripci\u00F3n es requerida.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function TransaccionesBancoComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TransaccionesBancoComponent_ng_template_26_span_2_Template, 5, 0, "span", 69)(3, TransaccionesBancoComponent_ng_template_26_span_3_Template, 5, 0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 70)(5, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Monto ($)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p-inputNumber", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function TransaccionesBancoComponent_ng_template_26_Template_p_inputNumber_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r0.montoOperacion, $event) || (ctx_r0.montoOperacion = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, TransaccionesBancoComponent_ng_template_26_small_8_Template, 2, 0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 70)(10, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Descripci\u00F3n de la Operaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "textarea", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function TransaccionesBancoComponent_ng_template_26_Template_textarea_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r0.descripcionOperacion, $event) || (ctx_r0.descripcionOperacion = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, TransaccionesBancoComponent_ng_template_26_small_13_Template, 2, 0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.tipoOperacion === "DEPOSITO");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.tipoOperacion === "RETIRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.montoOperacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("min", 0.01)("required", true)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c6, ctx_r0.submitted && ctx_r0.montoOperacion <= 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.montoOperacion <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.descripcionOperacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c6, ctx_r0.submitted && !ctx_r0.descripcionOperacion));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.submitted && !ctx_r0.descripcionOperacion);
  }
}
function TransaccionesBancoComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 78)(1, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransaccionesBancoComponent_ng_template_27_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.hideDepositoRetiroDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransaccionesBancoComponent_ng_template_27_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.saveDepositoRetiro());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c7, ctx_r0.tipoOperacion === "DEPOSITO", ctx_r0.tipoOperacion === "RETIRO"));
  }
}
function TransaccionesBancoComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 62)(1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div")(4, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Subir Comprobante");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Adjuntar respaldo a la transacci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function TransaccionesBancoComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 83)(1, "label", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Seleccione un archivo (PDF, JPG, PNG)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 86)(5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function TransaccionesBancoComponent_ng_template_30_Template_input_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.onFileChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function TransaccionesBancoComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 78)(1, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransaccionesBancoComponent_ng_template_31_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.hideComprobanteDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransaccionesBancoComponent_ng_template_31_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.subirComprobante());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r0.archivoComprobante);
  }
}
class TransaccionesBancoComponent {
  constructor(transaccionService, cuentaService) {
    this.transaccionService = transaccionService;
    this.cuentaService = cuentaService;
    this.cuentas = [];
    this.cuentaSeleccionada = null;
    this.transacciones = [];
    // Variables para depositos/retiros
    this.depositoRetiroDialog = false;
    this.tipoOperacion = 'DEPOSITO';
    this.montoOperacion = 0;
    this.descripcionOperacion = '';
    this.submitted = false;
    // Variables para comprobantes
    this.comprobanteDialog = false;
    this.transaccionSeleccionadaParaComprobante = null;
    this.archivoComprobante = null;
  }
  ngOnInit() {
    this.cargarCuentas();
  }
  cargarCuentas() {
    this.cuentaService.listarCuentasBancariasActivas().subscribe(res => {
      this.cuentas = res;
    });
  }
  onCuentaChange() {
    if (this.cuentaSeleccionada && this.cuentaSeleccionada.id) {
      this.cargarTransacciones(this.cuentaSeleccionada.id);
    } else {
      this.transacciones = [];
    }
  }
  cargarTransacciones(cuentaId) {
    this.transaccionService.listarPorCuenta(cuentaId).subscribe(res => {
      this.transacciones = res;
      // Actualizar el saldo de la cuenta actual
      if (this.cuentaSeleccionada && this.cuentaSeleccionada.id === cuentaId) {
        this.cuentaService.obtenerCuentaBancariaPorId(cuentaId).subscribe(cuentaActualizada => {
          this.cuentaSeleccionada.saldoActual = cuentaActualizada.saldoActual;
        });
      }
    });
  }
  openDeposito() {
    if (!this.cuentaSeleccionada) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Atención', 'Debe seleccionar una cuenta bancaria primero', 'warning');
      return;
    }
    this.tipoOperacion = 'DEPOSITO';
    this.montoOperacion = 0;
    this.descripcionOperacion = '';
    this.submitted = false;
    this.depositoRetiroDialog = true;
  }
  openRetiro() {
    if (!this.cuentaSeleccionada) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Atención', 'Debe seleccionar una cuenta bancaria primero', 'warning');
      return;
    }
    this.tipoOperacion = 'RETIRO';
    this.montoOperacion = 0;
    this.descripcionOperacion = '';
    this.submitted = false;
    this.depositoRetiroDialog = true;
  }
  hideDepositoRetiroDialog() {
    this.depositoRetiroDialog = false;
    this.submitted = false;
  }
  saveDepositoRetiro() {
    this.submitted = true;
    if (this.montoOperacion > 0 && this.descripcionOperacion.trim() && this.cuentaSeleccionada?.id) {
      const dto = {
        monto: this.montoOperacion,
        descripcion: this.descripcionOperacion,
        cuentaBancariaId: this.cuentaSeleccionada.id
      };
      let mensajeAviso = this.tipoOperacion === 'DEPOSITO' ? 'Este monto será RESTADO del saldo de Caja General para enviarse al Banco. ¿Deseas continuar?' : 'Este monto será SUMADO al saldo de Caja General tras retirar del Banco. ¿Deseas continuar?';
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: '¿Confirmar Operación?',
        text: mensajeAviso,
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Sí, continuar',
        cancelButtonText: 'Cancelar'
      }).then(result => {
        if (result.isConfirmed) {
          if (this.tipoOperacion === 'DEPOSITO') {
            this.transaccionService.realizarDeposito(dto).subscribe({
              next: () => this.operacionExitosa(),
              error: err => sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error', err.error?.message || 'Error al procesar depósito', 'error')
            });
          } else {
            this.transaccionService.realizarRetiro(dto).subscribe({
              next: () => this.operacionExitosa(),
              error: err => sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error', err.error?.message || 'Error al procesar retiro', 'error')
            });
          }
        }
      });
    }
  }
  operacionExitosa() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Éxito', `Operación registrada correctamente`, 'success');
    this.hideDepositoRetiroDialog();
    if (this.cuentaSeleccionada?.id) {
      this.cargarTransacciones(this.cuentaSeleccionada.id);
    }
  }
  // Comprobantes
  descargarComprobante(transaccion) {
    if (transaccion.id) {
      this.transaccionService.descargarComprobante(transaccion.id).subscribe(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Comprobante_${transaccion.numeroComprobante || transaccion.id}.pdf`; // Extensión puede variar
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, err => {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error', 'No se pudo descargar el comprobante', 'error');
      });
    }
  }
  openSubirComprobante(transaccion) {
    this.transaccionSeleccionadaParaComprobante = transaccion;
    this.archivoComprobante = null;
    this.comprobanteDialog = true;
  }
  hideComprobanteDialog() {
    this.comprobanteDialog = false;
    this.archivoComprobante = null;
    this.transaccionSeleccionadaParaComprobante = null;
  }
  onFileChange(event) {
    if (event.target.files.length > 0) {
      this.archivoComprobante = event.target.files[0];
    }
  }
  subirComprobante() {
    if (this.archivoComprobante && this.transaccionSeleccionadaParaComprobante?.id) {
      this.transaccionService.subirComprobante(this.transaccionSeleccionadaParaComprobante.id, this.archivoComprobante).subscribe({
        next: () => {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Éxito', 'Comprobante subido correctamente', 'success');
          this.hideComprobanteDialog();
          if (this.cuentaSeleccionada?.id) {
            this.cargarTransacciones(this.cuentaSeleccionada.id);
          }
        },
        error: () => {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Error', 'Hubo un error al subir el comprobante', 'error');
        }
      });
    } else {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Atención', 'Debe seleccionar un archivo', 'warning');
    }
  }
  static {
    this.ɵfac = function TransaccionesBancoComponent_Factory(t) {
      return new (t || TransaccionesBancoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_transaccion_bancaria_service__WEBPACK_IMPORTED_MODULE_1__.TransaccionBancariaService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_cuenta_bancaria_service__WEBPACK_IMPORTED_MODULE_2__.CuentaBancariaService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: TransaccionesBancoComponent,
      selectors: [["app-transacciones-banco"]],
      decls: 32,
      vars: 16,
      consts: [["dt", ""], [1, "grid"], [1, "col-12"], [1, "card", "p-4", "border-none", "shadow-premium", "mb-4", "flex", "align-items-center", "justify-content-between", "bg-white", "overflow-hidden", "relative", 2, "border-radius", "1.25rem"], [1, "flex", "align-items-center", "relative", "z-1"], [1, "p-3", "border-round-xl", "bg-teal-50", "mr-4", "shadow-sm"], [1, "pi", "pi-book", "text-teal-600", "text-3xl"], [1, "m-0", "font-bold", "text-900", "line-height-2", "tracking-tight"], [1, "m-0", "text-600", "font-medium", "opacity-70"], [1, "absolute", "-top-10", "-right-10", "bg-teal-50", "border-circle", "opacity-50", 2, "width", "250px", "height", "250px"], [1, "card", "border-none", "shadow-2", "border-round-xl", "p-4", "mb-4", "bg-gray-50"], [1, "flex", "flex-column", "md:flex-row", "align-items-center", "justify-content-between", "gap-4"], [1, "w-full", "md:w-5"], ["for", "cuenta", 1, "font-bold", "text-700", "block", "mb-2"], ["optionLabel", "numeroCuenta", "placeholder", "Elegir Cuenta...", "styleClass", "w-full border-round-lg shadow-1", "filterBy", "banco.nombre,numeroCuenta", 3, "ngModelChange", "onChange", "options", "ngModel", "filter"], ["pTemplate", "selectedItem"], ["pTemplate", "item"], ["class", "w-full md:w-7 flex align-items-center justify-content-end gap-3", 4, "ngIf"], ["class", "card border-none shadow-2 border-round-xl p-3", 4, "ngIf"], ["styleClass", "border-round-xl shadow-5 overflow-hidden", 1, "p-fluid", 3, "visibleChange", "visible", "modal", "focusTrap"], ["pTemplate", "header"], ["pTemplate", "content"], ["pTemplate", "footer"], ["styleClass", "border-round-xl shadow-5 overflow-hidden", 1, "p-fluid", 3, "visibleChange", "visible", "modal"], ["class", "flex align-items-center gap-2", 4, "ngIf"], [1, "flex", "align-items-center", "gap-2"], [1, "pi", "pi-building", "text-primary"], [1, "font-bold"], [1, "text-500"], [1, "flex", "flex-column"], [1, "text-sm", "text-500"], [1, "pi", "pi-credit-card", "text-xs", "mr-1"], [1, "w-full", "md:w-7", "flex", "align-items-center", "justify-content-end", "gap-3"], ["pButton", "", "pRipple", "", "label", "Depositar (Desde Caja)", "icon", "pi pi-arrow-up", 1, "p-button-success", "border-round-lg", "shadow-2", "font-bold", "px-4", 3, "click"], ["pButton", "", "pRipple", "", "label", "Retirar (Hacia Caja)", "icon", "pi pi-arrow-down", 1, "p-button-warning", "border-round-lg", "shadow-2", "font-bold", "px-4", 3, "click"], [1, "card", "border-none", "shadow-2", "border-round-xl", "p-3"], [1, "flex", "flex-column", "md:flex-row", "align-items-center", "justify-content-between", "mb-4", "border-bottom-1", "surface-border", "pb-3"], [1, "flex", "align-items-center", 2, "border-left", "4px solid var(--primary-color)", "padding-left", "0.85rem"], [1, "m-0", "font-bold", "text-900", 2, "font-size", "1.1rem"], [1, "bg-primary-50", "px-4", "py-2", "border-round-xl", "border-1", "border-primary-200", "shadow-sm", "flex", "align-items-center", "gap-3"], [1, "text-primary-700", "font-bold", "uppercase", "text-sm"], [1, "text-2xl", "font-bold", "text-primary-900"], ["responsiveLayout", "scroll", "styleClass", "p-datatable-sm p-datatable-gridlines", 3, "value", "rows", "paginator", "rowHover"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "text-center", 2, "width", "150px"], [1, "text-center", 2, "width", "120px"], [1, "text-right", 2, "width", "130px"], [1, "text-center", 2, "width", "140px"], [1, "text-center", "font-medium", "text-700"], [1, "text-center"], [1, "p-badge", 3, "ngClass"], [1, "pi", 2, "font-size", "0.7rem", "margin-right", "4px", 3, "ngClass"], [1, "text-right", "text-lg", 3, "ngClass"], [1, "text-700"], [1, "text-center", "text-500", "font-medium"], [1, "flex", "justify-content-center", "gap-2"], ["pButton", "", "pRipple", "", "icon", "pi pi-download", "class", "p-button-rounded p-button-text p-button-info p-button-sm", "pTooltip", "Descargar Comprobante", "tooltipPosition", "top", 3, "click", 4, "ngIf"], ["pButton", "", "pRipple", "", "icon", "pi pi-upload", "pTooltip", "Subir Comprobante", "tooltipPosition", "top", 1, "p-button-rounded", "p-button-text", "p-button-secondary", "p-button-sm", 3, "click"], ["pButton", "", "pRipple", "", "icon", "pi pi-download", "pTooltip", "Descargar Comprobante", "tooltipPosition", "top", 1, "p-button-rounded", "p-button-text", "p-button-info", "p-button-sm", 3, "click"], ["colspan", "6", 1, "text-center", "text-500", "py-4"], [1, "pi", "pi-inbox", "text-3xl", "mb-2", "block"], [1, "flex", "align-items-center", "gap-3"], [1, "p-2", "border-round-lg", 3, "ngClass"], [1, "text-xl", 3, "ngClass"], [1, "font-bold", "text-900", 2, "font-size", "1.05rem"], [1, "text-500", 2, "font-size", "0.8rem"], [1, "p-message", "p-message-info", "p-3", "mb-4", "border-round-lg", "mt-2"], [1, "pi", "pi-info-circle", "mr-2", "text-blue-600"], ["class", "text-blue-800 text-sm", 4, "ngIf"], [1, "field"], ["for", "monto", 1, "font-semibold", "text-700", "block", "mb-1"], ["id", "monto", "mode", "currency", "currency", "USD", "locale", "en-US", "inputStyleClass", "border-round-lg font-bold text-lg", 3, "ngModelChange", "ngModel", "min", "required", "ngClass"], ["class", "ng-dirty ng-invalid text-red-500 mt-1 block", 4, "ngIf"], ["for", "descripcion", 1, "font-semibold", "text-700", "block", "mb-1"], ["id", "descripcion", "pInputTextarea", "", "required", "", "rows", "3", 1, "border-round-lg", 3, "ngModelChange", "ngModel", "ngClass"], [1, "text-blue-800", "text-sm"], [1, "ng-dirty", "ng-invalid", "text-red-500", "mt-1", "block"], [1, "flex", "justify-content-end", "gap-2", "pt-3", "border-top-1", "surface-border"], ["pButton", "", "pRipple", "", "label", "Cancelar", "icon", "pi pi-times", 1, "p-button-text", "p-button-secondary", 3, "click"], ["pButton", "", "pRipple", "", "label", "Confirmar Operaci\u00F3n", "icon", "pi pi-check", 1, "p-button-primary", "shadow-2", "border-round-lg", 3, "click", "ngClass"], [1, "p-2", "border-round-lg", "bg-indigo-50"], [1, "pi", "pi-cloud-upload", "text-indigo-600", "text-xl"], [1, "field", "mt-3"], ["for", "archivo", 1, "block", "font-semibold", "text-700", "mb-2"], [1, "border-2", "border-dashed", "border-300", "border-round-xl", "p-4", "text-center", "hover:border-primary", "transition-duration-200"], [1, "pi", "pi-file-arrow-up", "text-4xl", "text-500", "mb-3"], ["type", "file", "id", "archivo", "accept", ".pdf,image/*", 1, "w-full", "text-sm", "text-500", 3, "change"], ["pButton", "", "pRipple", "", "label", "Subir Archivo", "icon", "pi pi-upload", 1, "p-button-primary", "shadow-2", "border-round-lg", 3, "click", "disabled"]],
      template: function TransaccionesBancoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div")(7, "h2", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Libro Banco");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Consulta y registro de movimientos bancarios");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 1)(13, "div", 2)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "label", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Selecciona una Cuenta Bancaria");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p-dropdown", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function TransaccionesBancoComponent_Template_p_dropdown_ngModelChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.cuentaSeleccionada, $event) || (ctx.cuentaSeleccionada = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChange", function TransaccionesBancoComponent_Template_p_dropdown_onChange_19_listener() {
            return ctx.onCuentaChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, TransaccionesBancoComponent_ng_template_20_Template, 1, 1, "ng-template", 15)(21, TransaccionesBancoComponent_ng_template_21_Template, 6, 2, "ng-template", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, TransaccionesBancoComponent_div_22_Template, 3, 0, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, TransaccionesBancoComponent_div_23_Template, 16, 8, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p-dialog", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("visibleChange", function TransaccionesBancoComponent_Template_p_dialog_visibleChange_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.depositoRetiroDialog, $event) || (ctx.depositoRetiroDialog = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, TransaccionesBancoComponent_ng_template_25_Template, 8, 9, "ng-template", 20)(26, TransaccionesBancoComponent_ng_template_26_Template, 14, 14, "ng-template", 21)(27, TransaccionesBancoComponent_ng_template_27_Template, 3, 4, "ng-template", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "p-dialog", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("visibleChange", function TransaccionesBancoComponent_Template_p_dialog_visibleChange_28_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.comprobanteDialog, $event) || (ctx.comprobanteDialog = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, TransaccionesBancoComponent_ng_template_29_Template, 8, 0, "ng-template", 20)(30, TransaccionesBancoComponent_ng_template_30_Template, 7, 0, "ng-template", 21)(31, TransaccionesBancoComponent_ng_template_31_Template, 3, 1, "ng-template", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.cuentas);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.cuentaSeleccionada);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("filter", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.cuentaSeleccionada);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.cuentaSeleccionada);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](14, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("visible", ctx.depositoRetiroDialog);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("modal", true)("focusTrap", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](15, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("visible", ctx.comprobanteDialog);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("modal", true);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_table__WEBPACK_IMPORTED_MODULE_6__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_dialog__WEBPACK_IMPORTED_MODULE_8__.Dialog, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__.Dropdown, primeng_ripple__WEBPACK_IMPORTED_MODULE_11__.Ripple, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__.InputNumber, primeng_tooltip__WEBPACK_IMPORTED_MODULE_13__.Tooltip, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_14__.InputTextarea, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2FjY2lvbmVzLWJhbmNvLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL2NhamEtYmFuY29zL3RyYW5zYWNjaW9uZXMtYmFuY28vdHJhbnNhY2Npb25lcy1iYW5jby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0xBQW9MIiwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 84550:
/*!***********************************************!*\
  !*** ./src/app/demo/service/banco.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BancoService: () => (/* binding */ BancoService)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ 31070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);



class BancoService {
  constructor(http) {
    this.http = http;
  }
  crearBanco(banco) {
    return this.http.post(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/bancos`, banco);
  }
  listarBancosActivos() {
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/bancos`);
  }
  actualizarBanco(id, banco) {
    return this.http.put(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/bancos/${id}`, banco);
  }
  desactivarBanco(id) {
    return this.http.put(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/bancos/${id}/desactivar`, {});
  }
  static {
    this.ɵfac = function BancoService_Factory(t) {
      return new (t || BancoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: BancoService,
      factory: BancoService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 30279:
/*!***********************************************************!*\
  !*** ./src/app/demo/service/cuenta-por-cobrar.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CuentaPorCobrarService: () => (/* binding */ CuentaPorCobrarService)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ 31070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);



class CuentaPorCobrarService {
  constructor(http) {
    this.http = http;
  }
  listarCuentasPorCobrar() {
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/cuentas-por-cobrar`);
  }
  cobrarCuenta(id, request) {
    return this.http.post(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/cuentas-por-cobrar/${id}/cobrar`, request);
  }
  static {
    this.ɵfac = function CuentaPorCobrarService_Factory(t) {
      return new (t || CuentaPorCobrarService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CuentaPorCobrarService,
      factory: CuentaPorCobrarService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3181:
/*!**********************************************************!*\
  !*** ./src/app/demo/service/cuenta-por-pagar.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CuentaPorPagarService: () => (/* binding */ CuentaPorPagarService)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ 31070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);



class CuentaPorPagarService {
  constructor(http) {
    this.http = http;
  }
  listarCuentasPorPagar() {
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/cuentas-por-pagar`);
  }
  pagarCuenta(id, request) {
    return this.http.post(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/cuentas-por-pagar/${id}/pagar`, request);
  }
  listarCuentasPagadas() {
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/cuentas-por-pagar/pagadas`);
  }
  obtenerPagosCuenta(id) {
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/cuentas-por-pagar/${id}/pagos`);
  }
  static {
    this.ɵfac = function CuentaPorPagarService_Factory(t) {
      return new (t || CuentaPorPagarService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CuentaPorPagarService,
      factory: CuentaPorPagarService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 75502:
/*!**************************************************************!*\
  !*** ./src/app/demo/service/transaccion-bancaria.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransaccionBancariaService: () => (/* binding */ TransaccionBancariaService)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ 31070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);



class TransaccionBancariaService {
  constructor(http) {
    this.http = http;
  }
  listarPorCuenta(cuentaId) {
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/transacciones-bancarias/cuenta/${cuentaId}`);
  }
  realizarDeposito(deposito) {
    return this.http.post(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/transacciones-bancarias/deposito`, deposito);
  }
  realizarRetiro(retiro) {
    return this.http.post(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/transacciones-bancarias/retiro`, retiro);
  }
  subirComprobante(id, archivo) {
    const formData = new FormData();
    formData.append('archivo', archivo);
    return this.http.post(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/transacciones-bancarias/${id}/comprobante`, formData);
  }
  descargarComprobante(id) {
    return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/transacciones-bancarias/${id}/comprobante`, {
      responseType: 'blob'
    });
  }
  static {
    this.ɵfac = function TransaccionBancariaService_Factory(t) {
      return new (t || TransaccionBancariaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: TransaccionBancariaService,
      factory: TransaccionBancariaService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 37581:
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/***/ (function(module) {

/*!
* sweetalert2 v11.26.25
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() : 0;
})(this, function () {
  'use strict';

  function _assertClassBrand(e, t, n) {
    if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
    throw new TypeError("Private element is not present on this object");
  }
  function _checkPrivateRedeclaration(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  function _classPrivateFieldGet2(s, a) {
    return s.get(_assertClassBrand(s, a));
  }
  function _classPrivateFieldInitSpec(e, t, a) {
    _checkPrivateRedeclaration(e, t), t.set(e, a);
  }
  function _classPrivateFieldSet2(s, a, r) {
    return s.set(_assertClassBrand(s, a), r), r;
  }
  const RESTORE_FOCUS_TIMEOUT = 100;

  /** @type {GlobalState} */
  const globalState = {};
  const focusPreviousActiveElement = () => {
    if (globalState.previousActiveElement instanceof HTMLElement) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  };

  /**
   * Restore previous active (focused) element
   *
   * @param {boolean} returnFocus
   * @returns {Promise<void>}
   */
  const restoreActiveElement = returnFocus => {
    return new Promise(resolve => {
      if (!returnFocus) {
        return resolve();
      }
      const x = window.scrollX;
      const y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(() => {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      window.scrollTo(x, y);
    });
  };
  const swalPrefix = 'swal2-';

  /**
   * @typedef {Record<SwalClass, string>} SwalClasses
   */

  /**
   * @typedef {'success' | 'warning' | 'info' | 'question' | 'error'} SwalIcon
   * @typedef {Record<SwalIcon, string>} SwalIcons
   */

  /** @type {SwalClass[]} */
  const classNames = ['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error', 'draggable', 'dragging'];
  const swalClasses = classNames.reduce((acc, className) => {
    acc[className] = swalPrefix + className;
    return acc;
  }, /** @type {SwalClasses} */{});

  /** @type {SwalIcon[]} */
  const icons = ['success', 'warning', 'info', 'question', 'error'];
  const iconTypes = icons.reduce((acc, icon) => {
    acc[icon] = swalPrefix + icon;
    return acc;
  }, /** @type {SwalIcons} */{});
  const consolePrefix = 'SweetAlert2:';

  /**
   * Capitalize the first letter of a string
   *
   * @param {string} str
   * @returns {string}
   */
  const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

  /**
   * Standardize console warnings
   *
   * @param {string | string[]} message
   */
  const warn = message => {
    console.warn(`${consolePrefix} ${typeof message === 'object' ? message.join(' ') : message}`);
  };

  /**
   * Standardize console errors
   *
   * @param {string} message
   */
  const error = message => {
    console.error(`${consolePrefix} ${message}`);
  };

  /**
   * Private global state for `warnOnce`
   *
   * @type {string[]}
   * @private
   */
  const previousWarnOnceMessages = [];

  /**
   * Show a console warning, but only if it hasn't already been shown
   *
   * @param {string} message
   */
  const warnOnce = message => {
    if (!previousWarnOnceMessages.includes(message)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };

  /**
   * Show a one-time console warning about deprecated params/methods
   *
   * @param {string} deprecatedParam
   * @param {string?} useInstead
   */
  const warnAboutDeprecation = (deprecatedParam, useInstead = null) => {
    warnOnce(`"${deprecatedParam}" is deprecated and will be removed in the next major release.${useInstead ? ` Use "${useInstead}" instead.` : ''}`);
  };

  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   *
   * @param {(() => *) | *} arg
   * @returns {*}
   */
  const callIfFunction = arg => typeof arg === 'function' ? arg() : arg;

  /**
   * @param {*} arg
   * @returns {boolean}
   */
  const hasToPromiseFn = arg => arg && typeof arg.toPromise === 'function';

  /**
   * @param {*} arg
   * @returns {Promise<*>}
   */
  const asPromise = arg => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);

  /**
   * @param {*} arg
   * @returns {boolean}
   */
  const isPromise = arg => arg && Promise.resolve(arg) === arg;

  /**
   * @returns {boolean}
   */
  const isFirefox = () => navigator.userAgent.includes('Firefox');

  /**
   * Gets the popup container which contains the backdrop and the popup itself.
   *
   * @returns {HTMLElement | null}
   */
  const getContainer = () => document.body.querySelector(`.${swalClasses.container}`);

  /**
   * @param {string} selectorString
   * @returns {HTMLElement | null}
   */
  const elementBySelector = selectorString => {
    const container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  /**
   * @param {string} className
   * @returns {HTMLElement | null}
   */
  const elementByClass = className => {
    return elementBySelector(`.${className}`);
  };

  /**
   * @returns {HTMLElement | null}
   */
  const getPopup = () => elementByClass(swalClasses.popup);

  /**
   * @returns {HTMLElement | null}
   */
  const getIcon = () => elementByClass(swalClasses.icon);

  /**
   * @returns {HTMLElement | null}
   */
  const getIconContent = () => elementByClass(swalClasses['icon-content']);

  /**
   * @returns {HTMLElement | null}
   */
  const getTitle = () => elementByClass(swalClasses.title);

  /**
   * @returns {HTMLElement | null}
   */
  const getHtmlContainer = () => elementByClass(swalClasses['html-container']);

  /**
   * @returns {HTMLElement | null}
   */
  const getImage = () => elementByClass(swalClasses.image);

  /**
   * @returns {HTMLElement | null}
   */
  const getProgressSteps = () => elementByClass(swalClasses['progress-steps']);

  /**
   * @returns {HTMLElement | null}
   */
  const getValidationMessage = () => elementByClass(swalClasses['validation-message']);

  /**
   * @returns {HTMLButtonElement | null}
   */
  const getConfirmButton = () => (/** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.confirm}`));

  /**
   * @returns {HTMLButtonElement | null}
   */
  const getCancelButton = () => (/** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.cancel}`));

  /**
   * @returns {HTMLButtonElement | null}
   */
  const getDenyButton = () => (/** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.deny}`));

  /**
   * @returns {HTMLElement | null}
   */
  const getInputLabel = () => elementByClass(swalClasses['input-label']);

  /**
   * @returns {HTMLElement | null}
   */
  const getLoader = () => elementBySelector(`.${swalClasses.loader}`);

  /**
   * @returns {HTMLElement | null}
   */
  const getActions = () => elementByClass(swalClasses.actions);

  /**
   * @returns {HTMLElement | null}
   */
  const getFooter = () => elementByClass(swalClasses.footer);

  /**
   * @returns {HTMLElement | null}
   */
  const getTimerProgressBar = () => elementByClass(swalClasses['timer-progress-bar']);

  /**
   * @returns {HTMLElement | null}
   */
  const getCloseButton = () => elementByClass(swalClasses.close);

  // https://github.com/jkup/focusable/blob/master/index.js
  const focusable = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`;
  /**
   * @returns {HTMLElement[]}
   */
  const getFocusableElements = () => {
    const popup = getPopup();
    if (!popup) {
      return [];
    }
    /** @type {NodeListOf<HTMLElement>} */
    const focusableElementsWithTabindex = popup.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])');
    const focusableElementsWithTabindexSorted = Array.from(focusableElementsWithTabindex)
    // sort according to tabindex
    .sort((a, b) => {
      const tabindexA = parseInt(a.getAttribute('tabindex') || '0');
      const tabindexB = parseInt(b.getAttribute('tabindex') || '0');
      if (tabindexA > tabindexB) {
        return 1;
      } else if (tabindexA < tabindexB) {
        return -1;
      }
      return 0;
    });

    /** @type {NodeListOf<HTMLElement>} */
    const otherFocusableElements = popup.querySelectorAll(focusable);
    const otherFocusableElementsFiltered = Array.from(otherFocusableElements).filter(el => el.getAttribute('tabindex') !== '-1');
    return [...new Set(focusableElementsWithTabindexSorted.concat(otherFocusableElementsFiltered))].filter(el => isVisible$1(el));
  };

  /**
   * @returns {boolean}
   */
  const isModal = () => {
    return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses['toast-shown']) && !hasClass(document.body, swalClasses['no-backdrop']);
  };

  /**
   * @returns {boolean}
   */
  const isToast = () => {
    const popup = getPopup();
    if (!popup) {
      return false;
    }
    return hasClass(popup, swalClasses.toast);
  };

  /**
   * @returns {boolean}
   */
  const isLoading = () => {
    const popup = getPopup();
    if (!popup) {
      return false;
    }
    return popup.hasAttribute('data-loading');
  };

  /**
   * Securely set innerHTML of an element
   * https://github.com/sweetalert2/sweetalert2/issues/1926
   *
   * @param {HTMLElement} elem
   * @param {string} html
   */
  const setInnerHtml = (elem, html) => {
    elem.textContent = '';
    if (html) {
      const parser = new DOMParser();
      const parsed = parser.parseFromString(html, `text/html`);
      const head = parsed.querySelector('head');
      if (head) {
        Array.from(head.childNodes).forEach(child => {
          elem.appendChild(child);
        });
      }
      const body = parsed.querySelector('body');
      if (body) {
        Array.from(body.childNodes).forEach(child => {
          if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) {
            elem.appendChild(child.cloneNode(true)); // https://github.com/sweetalert2/sweetalert2/issues/2507
          } else {
            elem.appendChild(child);
          }
        });
      }
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {boolean}
   */
  const hasClass = (elem, className) => {
    if (!className) {
      return false;
    }
    return className.split(/\s+/).every(cls => elem.classList.contains(cls));
  };

  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   */
  const removeCustomClasses = (elem, params) => {
    Array.from(elem.classList).forEach(className => {
      if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass || {}).includes(className)) {
        elem.classList.remove(className);
      }
    });
  };

  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   * @param {string} className
   */
  const applyCustomClass = (elem, params, className) => {
    removeCustomClasses(elem, params);
    if (!params.customClass) {
      return;
    }
    const customClass = params.customClass[(/** @type {keyof SweetAlertCustomClass} */className)];
    if (!customClass) {
      return;
    }
    if (typeof customClass !== 'string' && !customClass.forEach) {
      warn(`Invalid type of customClass.${className}! Expected string or iterable object, got "${typeof customClass}"`);
      return;
    }
    addClass(elem, customClass);
  };

  /**
   * @param {HTMLElement} popup
   * @param {import('./renderers/renderInput').InputClass | SweetAlertInput} inputClass
   * @returns {HTMLInputElement | null}
   */
  const getInput$1 = (popup, inputClass) => {
    if (!inputClass) {
      return null;
    }
    switch (inputClass) {
      case 'select':
      case 'textarea':
      case 'file':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses[inputClass]}`);
      case 'checkbox':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.checkbox} input`);
      case 'radio':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:checked`) || popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:first-child`);
      case 'range':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.range} input`);
      default:
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.input}`);
    }
  };

  /**
   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
   */
  const focusInput = input => {
    input.focus();

    // place cursor at end of text in text input
    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      const val = input.value;
      input.value = '';
      input.value = val;
    }
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   * @param {boolean} condition
   */
  const toggleClass = (target, classList, condition) => {
    if (!target || !classList) {
      return;
    }
    const classes = typeof classList === 'string' ? classList.split(/\s+/).filter(Boolean) : classList;
    const targets = Array.isArray(target) ? target : [target];
    targets.forEach(elem => {
      classes.forEach(className => {
        if (condition) {
          elem.classList.add(className);
        } else {
          elem.classList.remove(className);
        }
      });
    });
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */
  const addClass = (target, classList) => {
    toggleClass(target, classList, true);
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */
  const removeClass = (target, classList) => {
    toggleClass(target, classList, false);
  };

  /**
   * Get direct child of an element by class name
   *
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {HTMLElement | undefined}
   */
  const getDirectChildByClass = (elem, className) => (/** @type {HTMLElement | undefined} */
  Array.from(elem.children).find(child => child instanceof HTMLElement && hasClass(child, className)));

  /**
   * @param {HTMLElement} elem
   * @param {string} property
   * @param {string | number | null | undefined} value
   */
  const applyNumericalStyle = (elem, property, value) => {
    if (value === `${parseInt(`${value}`)}`) {
      value = parseInt(value);
    }
    if (value || value === 0) {
      elem.style.setProperty(property, typeof value === 'number' ? `${value}px` : (/** @type {string} */value));
    } else {
      elem.style.removeProperty(property);
    }
  };

  /**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */
  const show = (elem, display = 'flex') => {
    if (!elem) {
      return;
    }
    elem.style.display = display;
  };

  /**
   * @param {HTMLElement | null} elem
   */
  const hide = elem => {
    if (!elem) {
      return;
    }
    elem.style.display = 'none';
  };

  /**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */
  const showWhenInnerHtmlPresent = (elem, display = 'block') => {
    if (!elem) {
      return;
    }
    new MutationObserver(() => {
      toggle(elem, elem.innerHTML, display);
    }).observe(elem, {
      childList: true,
      subtree: true
    });
  };

  /**
   * @param {HTMLElement} parent
   * @param {string} selector
   * @param {string} property
   * @param {string} value
   */
  const setStyle = (parent, selector, property, value) => {
    /** @type {HTMLElement | null} */
    const el = parent.querySelector(selector);
    if (el) {
      el.style.setProperty(property, value);
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {boolean | string | null | undefined} condition
   * @param {string} display
   */
  const toggle = (elem, condition, display = 'flex') => {
    if (condition) {
      show(elem, display);
    } else {
      hide(elem);
    }
  };

  /**
   * borrowed from jquery $(elem).is(':visible') implementation
   *
   * @param {HTMLElement | null} elem
   * @returns {boolean}
   */
  const isVisible$1 = elem => Boolean(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));

  /**
   * @returns {boolean}
   */
  const allButtonsAreHidden = () => !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());

  /**
   * @param {HTMLElement} elem
   * @returns {boolean}
   */
  const isScrollable = elem => Boolean(elem.scrollHeight > elem.clientHeight);

  /**
   * @param {HTMLElement} element
   * @param {HTMLElement} stopElement
   * @returns {boolean}
   */
  const selfOrParentIsScrollable = (element, stopElement) => {
    let parent = /** @type {HTMLElement | null} */element;
    while (parent && parent !== stopElement) {
      if (isScrollable(parent)) {
        return true;
      }
      parent = parent.parentElement;
    }
    return false;
  };

  /**
   * borrowed from https://stackoverflow.com/a/46352119
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */
  const hasCssAnimation = elem => {
    const style = window.getComputedStyle(elem);
    const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };

  /**
   * @param {number} timer
   * @param {boolean} reset
   */
  const animateTimerProgressBar = (timer, reset = false) => {
    const timerProgressBar = getTimerProgressBar();
    if (!timerProgressBar) {
      return;
    }
    if (isVisible$1(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }
      setTimeout(() => {
        timerProgressBar.style.transition = `width ${timer / 1000}s linear`;
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  const stopTimerProgressBar = () => {
    const timerProgressBar = getTimerProgressBar();
    if (!timerProgressBar) {
      return;
    }
    const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    const timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
    timerProgressBar.style.width = `${timerProgressBarPercent}%`;
  };

  /**
   * Detect Node env
   *
   * @returns {boolean}
   */
  const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined';
  const sweetHTML = `
 <div aria-labelledby="${swalClasses.title}" aria-describedby="${swalClasses['html-container']}" class="${swalClasses.popup}" tabindex="-1">
   <button type="button" class="${swalClasses.close}"></button>
   <ul class="${swalClasses['progress-steps']}"></ul>
   <div class="${swalClasses.icon}"></div>
   <img class="${swalClasses.image}" />
   <h2 class="${swalClasses.title}" id="${swalClasses.title}"></h2>
   <div class="${swalClasses['html-container']}" id="${swalClasses['html-container']}"></div>
   <input class="${swalClasses.input}" id="${swalClasses.input}" />
   <input type="file" class="${swalClasses.file}" />
   <div class="${swalClasses.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${swalClasses.select}" id="${swalClasses.select}"></select>
   <div class="${swalClasses.radio}"></div>
   <label class="${swalClasses.checkbox}">
     <input type="checkbox" id="${swalClasses.checkbox}" />
     <span class="${swalClasses.label}"></span>
   </label>
   <textarea class="${swalClasses.textarea}" id="${swalClasses.textarea}"></textarea>
   <div class="${swalClasses['validation-message']}" id="${swalClasses['validation-message']}"></div>
   <div class="${swalClasses.actions}">
     <div class="${swalClasses.loader}"></div>
     <button type="button" class="${swalClasses.confirm}"></button>
     <button type="button" class="${swalClasses.deny}"></button>
     <button type="button" class="${swalClasses.cancel}"></button>
   </div>
   <div class="${swalClasses.footer}"></div>
   <div class="${swalClasses['timer-progress-bar-container']}">
     <div class="${swalClasses['timer-progress-bar']}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, '');

  /**
   * @returns {boolean}
   */
  const resetOldContainer = () => {
    const oldContainer = getContainer();
    if (!oldContainer) {
      return false;
    }
    oldContainer.remove();
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'],
    // @ts-ignore: 'has-column' is not defined in swalClasses but may be set dynamically
    swalClasses['has-column']]);
    return true;
  };
  const resetValidationMessage$1 = () => {
    if (globalState.currentInstance) {
      globalState.currentInstance.resetValidationMessage();
    }
  };
  const addInputChangeListeners = () => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    const input = getDirectChildByClass(popup, swalClasses.input);
    const file = getDirectChildByClass(popup, swalClasses.file);
    /** @type {HTMLInputElement | null} */
    const range = popup.querySelector(`.${swalClasses.range} input`);
    /** @type {HTMLOutputElement | null} */
    const rangeOutput = popup.querySelector(`.${swalClasses.range} output`);
    const select = getDirectChildByClass(popup, swalClasses.select);
    /** @type {HTMLInputElement | null} */
    const checkbox = popup.querySelector(`.${swalClasses.checkbox} input`);
    const textarea = getDirectChildByClass(popup, swalClasses.textarea);
    if (input) {
      input.oninput = resetValidationMessage$1;
    }
    if (file) {
      file.onchange = resetValidationMessage$1;
    }
    if (select) {
      select.onchange = resetValidationMessage$1;
    }
    if (checkbox) {
      checkbox.onchange = resetValidationMessage$1;
    }
    if (textarea) {
      textarea.oninput = resetValidationMessage$1;
    }
    if (range && rangeOutput) {
      range.oninput = () => {
        resetValidationMessage$1();
        rangeOutput.value = range.value;
      };
      range.onchange = () => {
        resetValidationMessage$1();
        rangeOutput.value = range.value;
      };
    }
  };

  /**
   * @param {string | HTMLElement} target
   * @returns {HTMLElement}
   */
  const getTarget = target => {
    if (typeof target === 'string') {
      const element = document.querySelector(target);
      if (!element) {
        throw new Error(`Target element "${target}" not found`);
      }
      return /** @type {HTMLElement} */element;
    }
    return target;
  };

  /**
   * @param {SweetAlertOptions} params
   */
  const setupAccessibility = params => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  /**
   * @param {HTMLElement} targetElement
   */
  const setupRTL = targetElement => {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
      globalState.isRTL = true;
    }
  };

  /**
   * Add modal + backdrop to DOM
   *
   * @param {SweetAlertOptions} params
   */
  const init = params => {
    // Clean up the old popup container if it exists
    const oldContainerExisted = resetOldContainer();
    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }
    const container = document.createElement('div');
    container.className = swalClasses.container;
    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }
    setInnerHtml(container, sweetHTML);
    container.dataset['swal2Theme'] = params.theme;
    const targetElement = getTarget(params.target || 'body');
    targetElement.appendChild(container);
    if (params.topLayer) {
      container.setAttribute('popover', '');
      container.showPopover();
    }
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  /**
   * @param {HTMLElement | object | string} param
   * @param {HTMLElement} target
   */
  const parseHtmlToContainer = (param, target) => {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param);
    }

    // Object
    else if (typeof param === 'object') {
      handleObject(param, target);
    }

    // Plain string
    else if (param) {
      setInnerHtml(target, param);
    }
  };

  /**
   * @param {object} param
   * @param {HTMLElement} target
   */
  const handleObject = (param, target) => {
    // JQuery element(s)
    if ('jquery' in param) {
      handleJqueryElem(target, param);
    }

    // For other objects use their string representation
    else {
      setInnerHtml(target, param.toString());
    }
  };

  /**
   * @param {HTMLElement} target
   * @param {any} elem
   */
  const handleJqueryElem = (target, elem) => {
    target.textContent = '';
    if (0 in elem) {
      for (let i = 0; i in elem; i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderActions = (instance, params) => {
    const actions = getActions();
    const loader = getLoader();
    if (!actions || !loader) {
      return;
    }

    // Actions (buttons) wrapper
    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } else {
      show(actions);
    }

    // Custom class
    applyCustomClass(actions, params, 'actions');

    // Render all the buttons
    renderButtons(actions, loader, params);

    // Loader
    setInnerHtml(loader, params.loaderHtml || '');
    applyCustomClass(loader, params, 'loader');
  };

  /**
   * @param {HTMLElement} actions
   * @param {HTMLElement} loader
   * @param {SweetAlertOptions} params
   */
  function renderButtons(actions, loader, params) {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();
    if (!confirmButton || !denyButton || !cancelButton) {
      return;
    }

    // Render buttons
    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
    if (params.reverseButtons) {
      if (params.toast) {
        actions.insertBefore(cancelButton, confirmButton);
        actions.insertBefore(denyButton, confirmButton);
      } else {
        actions.insertBefore(cancelButton, loader);
        actions.insertBefore(denyButton, loader);
        actions.insertBefore(confirmButton, loader);
      }
    }
  }

  /**
   * @param {HTMLElement} confirmButton
   * @param {HTMLElement} denyButton
   * @param {HTMLElement} cancelButton
   * @param {SweetAlertOptions} params
   */
  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
      return;
    }
    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled);

    // Apply custom background colors and outline colors to action buttons
    /** @type {[HTMLElement, string, string | undefined][]} */
    const buttons = [[confirmButton, 'confirm', params.confirmButtonColor], [denyButton, 'deny', params.denyButtonColor], [cancelButton, 'cancel', params.cancelButtonColor]];
    buttons.forEach(([button, type, color]) => {
      if (color) {
        button.style.setProperty(`--swal2-${type}-button-background-color`, color);
      }
      applyOutlineColor(button);
    });
  }

  /**
   * @param {HTMLElement} button
   */
  function applyOutlineColor(button) {
    const buttonStyle = window.getComputedStyle(button);
    if (buttonStyle.getPropertyValue('--swal2-action-button-focus-box-shadow')) {
      // If the button already has a custom outline color, no need to change it
      return;
    }
    const outlineColor = buttonStyle.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/, 'rgba($1, $2, $3, 0.5)');
    button.style.setProperty('--swal2-action-button-focus-box-shadow', buttonStyle.getPropertyValue('--swal2-outline').replace(/ rgba\(.*/, ` ${outlineColor}`));
  }

  /**
   * @param {HTMLElement} button
   * @param {'confirm' | 'deny' | 'cancel'} buttonType
   * @param {SweetAlertOptions} params
   */
  function renderButton(button, buttonType, params) {
    const buttonName = /** @type {'Confirm' | 'Deny' | 'Cancel'} */capitalizeFirstLetter(buttonType);
    toggle(button, params[`show${buttonName}Button`], 'inline-block');
    setInnerHtml(button, params[`${buttonType}ButtonText`] || ''); // Set caption text
    button.setAttribute('aria-label', params[`${buttonType}ButtonAriaLabel`] || ''); // ARIA label

    // Add buttons custom classes
    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, `${buttonType}Button`);
  }

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderCloseButton = (instance, params) => {
    const closeButton = getCloseButton();
    if (!closeButton) {
      return;
    }
    setInnerHtml(closeButton, params.closeButtonHtml || '');

    // Custom class
    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel || '');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderContainer = (instance, params) => {
    const container = getContainer();
    if (!container) {
      return;
    }
    handleBackdropParam(container, params.backdrop);
    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow);

    // Custom class
    applyCustomClass(container, params, 'container');
  };

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['backdrop']} backdrop
   */
  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['position']} position
   */
  function handlePositionParam(container, position) {
    if (!position) {
      return;
    }
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['grow']} grow
   */
  function handleGrowParam(container, grow) {
    if (!grow) {
      return;
    }
    addClass(container, swalClasses[`grow-${grow}`]);
  }

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */

  var privateProps = {
    innerParams: new WeakMap(),
    domCache: new WeakMap(),
    focusedElement: new WeakMap()
  };

  /// <reference path="../../../../sweetalert2.d.ts"/>

  /** @type {InputClass[]} */
  const inputClasses = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderInput = (instance, params) => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    const innerParams = privateProps.innerParams.get(instance);
    const rerender = !innerParams || params.input !== innerParams.input;
    inputClasses.forEach(inputClass => {
      const inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);
      if (!inputContainer) {
        return;
      }

      // set attributes
      setAttributes(inputClass, params.inputAttributes);

      // set class
      inputContainer.className = swalClasses[inputClass];
      if (rerender) {
        hide(inputContainer);
      }
    });
    if (params.input) {
      if (rerender) {
        showInput(params);
      }
      // set custom class
      setCustomClass(params);
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  const showInput = params => {
    if (!params.input) {
      return;
    }
    if (!renderInputType[params.input]) {
      error(`Unexpected type of input! Expected ${Object.keys(renderInputType).join(' | ')}, got "${params.input}"`);
      return;
    }
    const inputContainer = getInputContainer(params.input);
    if (!inputContainer) {
      return;
    }
    const input = renderInputType[params.input](inputContainer, params);
    show(inputContainer);

    // input autofocus
    if (params.inputAutoFocus) {
      setTimeout(() => {
        focusInput(input);
      });
    }
  };

  /**
   * @param {HTMLInputElement} input
   */
  const removeAttributes = input => {
    for (const {
      name
    } of Array.from(input.attributes)) {
      if (!['id', 'type', 'value', 'style'].includes(name)) {
        input.removeAttribute(name);
      }
    }
  };

  /**
   * @param {InputClass} inputClass
   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
   */
  const setAttributes = (inputClass, inputAttributes) => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    const input = getInput$1(popup, inputClass);
    if (!input) {
      return;
    }
    removeAttributes(input);
    for (const attr in inputAttributes) {
      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  const setCustomClass = params => {
    if (!params.input) {
      return;
    }
    const inputContainer = getInputContainer(params.input);
    if (inputContainer) {
      applyCustomClass(inputContainer, params, 'input');
    }
  };

  /**
   * @param {HTMLInputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions} params
   */
  const setInputPlaceholder = (input, params) => {
    if (!input.placeholder && params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  /**
   * @param {Input} input
   * @param {Input} prependTo
   * @param {SweetAlertOptions} params
   */
  const setInputLabel = (input, prependTo, params) => {
    if (params.inputLabel) {
      const label = document.createElement('label');
      const labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;
      if (typeof params.customClass === 'object') {
        addClass(label, params.customClass.inputLabel);
      }
      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };

  /**
   * @param {SweetAlertInput} inputType
   * @returns {HTMLElement | undefined}
   */
  const getInputContainer = inputType => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    return getDirectChildByClass(popup, swalClasses[(/** @type {SwalClass} */inputType)] || swalClasses.input);
  };

  /**
   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions['inputValue']} inputValue
   */
  const checkAndSetInputValue = (input, inputValue) => {
    if (['string', 'number'].includes(typeof inputValue)) {
      input.value = `${inputValue}`;
    } else if (!isPromise(inputValue)) {
      warn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof inputValue}"`);
    }
  };

  /** @type {Record<SweetAlertInput, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */
  const renderInputType = {};

  /**
   * @param {Input | HTMLElement} input
   * @param {SweetAlertOptions} params
   * @returns {Input}
   */
  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = renderInputType.search = renderInputType.date = renderInputType['datetime-local'] = renderInputType.time = renderInputType.week = renderInputType.month = /** @type {(input: Input | HTMLElement, params: SweetAlertOptions) => Input} */
  (input, params) => {
    // oxfmt-ignore
    const inputElement = /** @type {HTMLInputElement} */input;
    checkAndSetInputValue(inputElement, params.inputValue);
    setInputLabel(inputElement, inputElement, params);
    setInputPlaceholder(inputElement, params);
    // oxfmt-ignore
    inputElement.type = /** @type {string} */params.input;
    return inputElement;
  };

  /**
   * @param {Input | HTMLElement} input
   * @param {SweetAlertOptions} params
   * @returns {Input}
   */
  renderInputType.file = (input, params) => {
    const inputElement = /** @type {HTMLInputElement} */input;
    setInputLabel(inputElement, inputElement, params);
    setInputPlaceholder(inputElement, params);
    return inputElement;
  };

  /**
   * @param {Input | HTMLElement} range
   * @param {SweetAlertOptions} params
   * @returns {Input}
   */
  renderInputType.range = (range, params) => {
    const rangeContainer = /** @type {HTMLElement} */range;
    const rangeInput = rangeContainer.querySelector('input');
    const rangeOutput = rangeContainer.querySelector('output');
    if (rangeInput) {
      checkAndSetInputValue(rangeInput, params.inputValue);
      rangeInput.type = /** @type {string} */params.input;
      setInputLabel(rangeInput, /** @type {Input} */range, params);
    }
    if (rangeOutput) {
      checkAndSetInputValue(rangeOutput, params.inputValue);
    }
    return /** @type {Input} */range;
  };

  /**
   * @param {Input | HTMLElement} select
   * @param {SweetAlertOptions} params
   * @returns {Input}
   */
  renderInputType.select = (select, params) => {
    const selectElement = /** @type {HTMLSelectElement} */select;
    selectElement.textContent = '';
    if (params.inputPlaceholder) {
      const placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      selectElement.appendChild(placeholder);
    }
    setInputLabel(selectElement, selectElement, params);
    return selectElement;
  };

  /**
   * @param {Input | HTMLElement} radio
   * @returns {Input}
   */
  renderInputType.radio = radio => {
    const radioElement = /** @type {HTMLElement} */radio;
    radioElement.textContent = '';
    return /** @type {Input} */radio;
  };

  /**
   * @param {Input | HTMLElement} checkboxContainer
   * @param {SweetAlertOptions} params
   * @returns {Input}
   */
  renderInputType.checkbox = (checkboxContainer, params) => {
    const popup = getPopup();
    if (!popup) {
      throw new Error('Popup not found');
    }
    const checkbox = getInput$1(popup, 'checkbox');
    if (!checkbox) {
      throw new Error('Checkbox input not found');
    }
    checkbox.value = '1';
    checkbox.checked = Boolean(params.inputValue);
    const containerElement = /** @type {HTMLElement} */checkboxContainer;
    const label = containerElement.querySelector('span');
    if (label) {
      const placeholderOrLabel = params.inputPlaceholder || params.inputLabel;
      if (placeholderOrLabel) {
        setInnerHtml(label, placeholderOrLabel);
      }
    }
    return checkbox;
  };

  /**
   * @param {Input | HTMLElement} textarea
   * @param {SweetAlertOptions} params
   * @returns {Input}
   */
  renderInputType.textarea = (textarea, params) => {
    const textareaElement = /** @type {HTMLTextAreaElement} */textarea;
    checkAndSetInputValue(textareaElement, params.inputValue);
    setInputPlaceholder(textareaElement, params);
    setInputLabel(textareaElement, textareaElement, params);

    /**
     * @param {HTMLElement} el
     * @returns {number}
     */
    const getMargin = el => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);

    // https://github.com/sweetalert2/sweetalert2/issues/2291
    setTimeout(() => {
      // https://github.com/sweetalert2/sweetalert2/issues/1699
      if ('MutationObserver' in window) {
        const popup = getPopup();
        if (!popup) {
          return;
        }
        const initialPopupWidth = parseInt(window.getComputedStyle(popup).width);
        const textareaResizeHandler = () => {
          // check if texarea is still in document (i.e. popup wasn't closed in the meantime)
          if (!document.body.contains(textareaElement)) {
            return;
          }
          const textareaWidth = textareaElement.offsetWidth + getMargin(textareaElement);
          const popupElement = getPopup();
          if (popupElement) {
            if (textareaWidth > initialPopupWidth) {
              popupElement.style.width = `${textareaWidth}px`;
            } else {
              applyNumericalStyle(popupElement, 'width', params.width);
            }
          }
        };
        new MutationObserver(textareaResizeHandler).observe(textareaElement, {
          attributes: true,
          attributeFilter: ['style']
        });
      }
    });
    return textareaElement;
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderContent = (instance, params) => {
    const htmlContainer = getHtmlContainer();
    if (!htmlContainer) {
      return;
    }
    showWhenInnerHtmlPresent(htmlContainer);
    applyCustomClass(htmlContainer, params, 'htmlContainer');

    // Content as HTML
    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block');
    }

    // Content as plain text
    else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block');
    }

    // No content
    else {
      hide(htmlContainer);
    }
    renderInput(instance, params);
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderFooter = (instance, params) => {
    const footer = getFooter();
    if (!footer) {
      return;
    }
    showWhenInnerHtmlPresent(footer);
    toggle(footer, Boolean(params.footer), 'block');
    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    }

    // Custom class
    applyCustomClass(footer, params, 'footer');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderIcon = (instance, params) => {
    const innerParams = privateProps.innerParams.get(instance);
    const icon = getIcon();
    if (!icon) {
      return;
    }

    // if the given icon already rendered, apply the styling without re-rendering the icon
    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }
    if (!params.icon && !params.iconHtml) {
      hide(icon);
      return;
    }
    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${params.icon}"`);
      hide(icon);
      return;
    }
    show(icon);

    // Custom or default content
    setContent(icon, params);
    applyStyles(icon, params);

    // Animate icon
    addClass(icon, params.showClass && params.showClass.icon);

    // Re-adjust the success icon on system theme change
    const colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeQueryList.addEventListener('change', adjustSuccessIconBackgroundColor);
  };

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  const applyStyles = (icon, params) => {
    for (const [iconType, iconClassName] of Object.entries(iconTypes)) {
      if (params.icon !== iconType) {
        removeClass(icon, iconClassName);
      }
    }
    addClass(icon, params.icon && iconTypes[params.icon]);

    // Icon color
    setColor(icon, params);

    // Success icon background color
    adjustSuccessIconBackgroundColor();

    // Custom class
    applyCustomClass(icon, params, 'icon');
  };

  // Adjust success icon background color to match the popup background color
  const adjustSuccessIconBackgroundColor = () => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    /** @type {NodeListOf<HTMLElement>} */
    const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
    successIconParts.forEach(part => {
      part.style.backgroundColor = popupBackgroundColor;
    });
  };

  /**
   *
   * @param {SweetAlertOptions} params
   * @returns {string}
   */
  const successIconHtml = params => `
  ${params.animation ? '<div class="swal2-success-circular-line-left"></div>' : ''}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${params.animation ? '<div class="swal2-success-fix"></div>' : ''}
  ${params.animation ? '<div class="swal2-success-circular-line-right"></div>' : ''}
`;
  const errorIconHtml = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`;

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  const setContent = (icon, params) => {
    if (!params.icon && !params.iconHtml) {
      return;
    }
    let oldContent = icon.innerHTML;
    let newContent = '';
    if (params.iconHtml) {
      newContent = iconContent(params.iconHtml);
    } else if (params.icon === 'success') {
      newContent = successIconHtml(params);
      oldContent = oldContent.replace(/ style=".*?"/g, ''); // undo adjustSuccessIconBackgroundColor()
    } else if (params.icon === 'error') {
      newContent = errorIconHtml;
    } else if (params.icon) {
      const defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      newContent = iconContent(defaultIconHtml[params.icon]);
    }
    if (oldContent.trim() !== newContent.trim()) {
      setInnerHtml(icon, newContent);
    }
  };

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  const setColor = (icon, params) => {
    if (!params.iconColor) {
      return;
    }
    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;
    for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {
      setStyle(icon, sel, 'background-color', params.iconColor);
    }
    setStyle(icon, '.swal2-success-ring', 'border-color', params.iconColor);
  };

  /**
   * @param {string} content
   * @returns {string}
   */
  const iconContent = content => `<div class="${swalClasses['icon-content']}">${content}</div>`;

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderImage = (instance, params) => {
    const image = getImage();
    if (!image) {
      return;
    }
    if (!params.imageUrl) {
      hide(image);
      return;
    }
    show(image, '');

    // Src, alt
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt || '');

    // Width, height
    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight);

    // Class
    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };
  let dragging = false;
  let mousedownX = 0;
  let mousedownY = 0;
  let initialX = 0;
  let initialY = 0;

  /**
   * @param {HTMLElement} popup
   */
  const addDraggableListeners = popup => {
    popup.addEventListener('mousedown', down);
    document.body.addEventListener('mousemove', move);
    popup.addEventListener('mouseup', up);
    popup.addEventListener('touchstart', down);
    document.body.addEventListener('touchmove', move);
    popup.addEventListener('touchend', up);
  };

  /**
   * @param {HTMLElement} popup
   */
  const removeDraggableListeners = popup => {
    popup.removeEventListener('mousedown', down);
    document.body.removeEventListener('mousemove', move);
    popup.removeEventListener('mouseup', up);
    popup.removeEventListener('touchstart', down);
    document.body.removeEventListener('touchmove', move);
    popup.removeEventListener('touchend', up);
  };

  /**
   * @param {MouseEvent | TouchEvent} event
   */
  const down = event => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    const icon = getIcon();
    if (event.target === popup || icon && icon.contains(/** @type {HTMLElement} */event.target)) {
      dragging = true;
      const clientXY = getClientXY(event);
      mousedownX = clientXY.clientX;
      mousedownY = clientXY.clientY;
      initialX = parseInt(popup.style.insetInlineStart) || 0;
      initialY = parseInt(popup.style.insetBlockStart) || 0;
      addClass(popup, 'swal2-dragging');
    }
  };

  /**
   * @param {MouseEvent | TouchEvent} event
   */
  const move = event => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    if (dragging) {
      let {
        clientX,
        clientY
      } = getClientXY(event);
      const deltaX = clientX - mousedownX;
      // In RTL mode, negate the horizontal delta since insetInlineStart refers to the right edge
      popup.style.insetInlineStart = `${initialX + (globalState.isRTL ? -deltaX : deltaX)}px`;
      popup.style.insetBlockStart = `${initialY + (clientY - mousedownY)}px`;
    }
  };
  const up = () => {
    const popup = getPopup();
    dragging = false;
    removeClass(popup, 'swal2-dragging');
  };

  /**
   * @param {MouseEvent | TouchEvent} event
   * @returns {{ clientX: number, clientY: number }}
   */
  const getClientXY = event => {
    const source = event.type.startsWith('touch') ? /** @type {TouchEvent} */event.touches[0] : (/** @type {MouseEvent} */event);
    return {
      clientX: source.clientX,
      clientY: source.clientY
    };
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderPopup = (instance, params) => {
    const container = getContainer();
    const popup = getPopup();
    if (!container || !popup) {
      return;
    }

    // Width
    // https://github.com/sweetalert2/sweetalert2/issues/2170
    if (params.toast) {
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
      const loader = getLoader();
      if (loader) {
        popup.insertBefore(loader, getIcon());
      }
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    }

    // Padding
    applyNumericalStyle(popup, 'padding', params.padding);

    // Color
    if (params.color) {
      popup.style.color = params.color;
    }

    // Background
    if (params.background) {
      popup.style.background = params.background;
    }
    hide(getValidationMessage());

    // Classes
    addClasses$1(popup, params);
    if (params.draggable && !params.toast) {
      addClass(popup, swalClasses.draggable);
      addDraggableListeners(popup);
    } else {
      removeClass(popup, swalClasses.draggable);
      removeDraggableListeners(popup);
    }
  };

  /**
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */
  const addClasses$1 = (popup, params) => {
    const showClass = params.showClass || {};
    // Default Class + showClass when updating Swal.update({})
    popup.className = `${swalClasses.popup} ${isVisible$1(popup) ? showClass.popup : ''}`;
    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    }

    // Custom class
    applyCustomClass(popup, params, 'popup');
    // TODO: remove in the next major
    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    }

    // Icon class (#1842)
    if (params.icon) {
      addClass(popup, swalClasses[`icon-${params.icon}`]);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderProgressSteps = (instance, params) => {
    const progressStepsContainer = getProgressSteps();
    if (!progressStepsContainer) {
      return;
    }
    const {
      progressSteps,
      currentProgressStep
    } = params;
    if (!progressSteps || progressSteps.length === 0 || currentProgressStep === undefined) {
      hide(progressStepsContainer);
      return;
    }
    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    if (currentProgressStep >= progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }
    progressSteps.forEach((step, index) => {
      const stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);
      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }
      if (index !== progressSteps.length - 1) {
        const lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  /**
   * @param {string} step
   * @returns {HTMLLIElement}
   */
  const createStepElement = step => {
    const stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  /**
   * @param {SweetAlertOptions} params
   * @returns {HTMLLIElement}
   */
  const createLineElement = params => {
    const lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);
    if (params.progressStepsDistance) {
      applyNumericalStyle(lineEl, 'width', params.progressStepsDistance);
    }
    return lineEl;
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderTitle = (instance, params) => {
    const title = getTitle();
    if (!title) {
      return;
    }
    showWhenInnerHtmlPresent(title);
    toggle(title, Boolean(params.title || params.titleText), 'block');
    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }
    if (params.titleText) {
      title.innerText = params.titleText;
    }

    // Custom class
    applyCustomClass(title, params, 'title');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const render = (instance, params) => {
    var _globalState$eventEmi;
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderProgressSteps(instance, params);
    renderIcon(instance, params);
    renderImage(instance, params);
    renderTitle(instance, params);
    renderCloseButton(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);
    const popup = getPopup();
    if (typeof params.didRender === 'function' && popup) {
      params.didRender(popup);
    }
    (_globalState$eventEmi = globalState.eventEmitter) === null || _globalState$eventEmi === void 0 || _globalState$eventEmi.emit('didRender', popup);
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */
  const isVisible = () => {
    return isVisible$1(getPopup());
  };

  /*
   * Global function to click 'Confirm' button
   */
  const clickConfirm = () => {
    var _dom$getConfirmButton;
    return (_dom$getConfirmButton = getConfirmButton()) === null || _dom$getConfirmButton === void 0 ? void 0 : _dom$getConfirmButton.click();
  };

  /*
   * Global function to click 'Deny' button
   */
  const clickDeny = () => {
    var _dom$getDenyButton;
    return (_dom$getDenyButton = getDenyButton()) === null || _dom$getDenyButton === void 0 ? void 0 : _dom$getDenyButton.click();
  };

  /*
   * Global function to click 'Cancel' button
   */
  const clickCancel = () => {
    var _dom$getCancelButton;
    return (_dom$getCancelButton = getCancelButton()) === null || _dom$getCancelButton === void 0 ? void 0 : _dom$getCancelButton.click();
  };

  /** @type {Record<DismissReason, DismissReason>} */
  const DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  /**
   * @param {GlobalState} globalState
   */
  const removeKeydownHandler = globalState => {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded && globalState.keydownHandler) {
      const handler = /** @type {EventListenerOrEventListenerObject} */
      /** @type {unknown} */globalState.keydownHandler;
      globalState.keydownTarget.removeEventListener('keydown', handler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }
  };

  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {(dismiss: DismissReason) => void} dismissWith
   */
  const addKeydownHandler = (globalState, innerParams, dismissWith) => {
    removeKeydownHandler(globalState);
    if (!innerParams.toast) {
      /** @type {(this: HTMLElement, event: KeyboardEvent) => void} */
      const handler = e => keydownHandler(innerParams, e, dismissWith);
      globalState.keydownHandler = handler;
      const target = innerParams.keydownListenerCapture ? window : getPopup();
      if (target) {
        globalState.keydownTarget = target;
        globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
        const eventHandler = /** @type {EventListenerOrEventListenerObject} */ /** @type {unknown} */handler;
        globalState.keydownTarget.addEventListener('keydown', eventHandler, {
          capture: globalState.keydownListenerCapture
        });
        globalState.keydownHandlerAdded = true;
      }
    }
  };

  /**
   * @param {number} index
   * @param {number} increment
   * @returns {boolean} shouldPreventDefault
   */
  const setFocus = (index, increment) => {
    var _dom$getPopup;
    const focusableElements = getFocusableElements();
    // search for visible elements and select the next possible match
    if (focusableElements.length) {
      index = index + increment;

      // shift + tab when .swal2-popup is focused
      if (index === -2) {
        index = focusableElements.length - 1;
      }

      // rollover to first item
      if (index === focusableElements.length) {
        index = 0;

        // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }
      focusableElements[index].focus();

      // don't prevent default for iframes (Firefox fix)
      // https://github.com/sweetalert2/sweetalert2/issues/2931
      if (isFirefox() && focusableElements[index] instanceof HTMLIFrameElement) {
        return false;
      }
      return true;
    }
    // no visible focusable elements, focus the popup
    (_dom$getPopup = getPopup()) === null || _dom$getPopup === void 0 || _dom$getPopup.focus();
    return true;
  };
  const arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
  const arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {KeyboardEvent} event
   * @param {(dismiss: DismissReason) => void} dismissWith
   */
  const keydownHandler = (innerParams, event, dismissWith) => {
    if (!innerParams) {
      return; // This instance has already been destroyed
    }

    // Ignore keydown during IME composition
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
    // https://github.com/sweetalert2/sweetalert2/issues/720
    // https://github.com/sweetalert2/sweetalert2/issues/2406
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    if (innerParams.stopKeydownPropagation) {
      event.stopPropagation();
    }

    // ENTER
    if (event.key === 'Enter') {
      handleEnter(event, innerParams);
    }

    // TAB
    else if (event.key === 'Tab') {
      handleTab(event);
    }

    // ARROWS - switch focus between buttons
    else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(event.key)) {
      handleArrows(event.key);
    }

    // ESC
    else if (event.key === 'Escape') {
      handleEsc(event, innerParams, dismissWith);
    }
  };

  /**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   */
  const handleEnter = (event, innerParams) => {
    // https://github.com/sweetalert2/sweetalert2/issues/2386
    if (!callIfFunction(innerParams.allowEnterKey)) {
      return;
    }
    const popup = getPopup();
    if (!popup || !innerParams.input) {
      return;
    }
    const input = getInput$1(popup, innerParams.input);
    if (event.target && input && event.target instanceof HTMLElement && event.target.outerHTML === input.outerHTML) {
      if (['textarea', 'file'].includes(innerParams.input)) {
        return; // do not submit
      }
      clickConfirm();
      event.preventDefault();
    }
  };

  /**
   * @param {KeyboardEvent} event
   */
  const handleTab = event => {
    const targetElement = event.target;
    const focusableElements = getFocusableElements();
    const btnIndex = focusableElements.findIndex(el => el === targetElement);

    // don't prevent default for iframes (Firefox fix)
    // https://github.com/sweetalert2/sweetalert2/issues/2931
    let shouldPreventDefault = true;

    // Cycle to the next button
    if (!event.shiftKey) {
      shouldPreventDefault = setFocus(btnIndex, 1);
    }

    // Cycle to the prev button
    else {
      shouldPreventDefault = setFocus(btnIndex, -1);
    }
    event.stopPropagation();
    if (shouldPreventDefault) {
      event.preventDefault();
    }
  };

  /**
   * @param {string} key
   */
  const handleArrows = key => {
    const actions = getActions();
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();
    if (!actions || !confirmButton || !denyButton || !cancelButton) {
      return;
    }
    /** @type HTMLElement[] */
    const buttons = [confirmButton, denyButton, cancelButton];
    if (document.activeElement instanceof HTMLElement && !buttons.includes(document.activeElement)) {
      return;
    }
    const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
    let buttonToFocus = document.activeElement;
    if (!buttonToFocus) {
      return;
    }
    for (let i = 0; i < actions.children.length; i++) {
      buttonToFocus = buttonToFocus[sibling];
      if (!buttonToFocus) {
        return;
      }
      if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) {
        break;
      }
    }
    if (buttonToFocus instanceof HTMLButtonElement) {
      buttonToFocus.focus();
    }
  };

  /**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   * @param {(dismiss: DismissReason) => void} dismissWith
   */
  const handleEsc = (event, innerParams, dismissWith) => {
    event.preventDefault();
    if (callIfFunction(innerParams.allowEscapeKey)) {
      dismissWith(DismissReason.esc);
    }
  };

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */

  var privateMethods = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap()
  };

  // From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  const setAriaHidden = () => {
    const container = getContainer();
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(el => {
      if (el.contains(container)) {
        return;
      }
      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden') || '');
      }
      el.setAttribute('aria-hidden', 'true');
    });
  };
  const unsetAriaHidden = () => {
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(el => {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden') || '');
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  // @ts-ignore
  const isSafariOrIOS = typeof window !== 'undefined' && Boolean(window.GestureEvent); // true for Safari desktop + all iOS browsers https://stackoverflow.com/a/70585394

  // @ts-ignore
  const isIOS = isSafariOrIOS && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  /**
   * Fix iOS scrolling
   * http://stackoverflow.com/q/39626302
   */
  const iOSfix = () => {
    if (isSafariOrIOS && !hasClass(document.body, swalClasses.iosfix)) {
      const offset = document.body.scrollTop;
      document.body.style.top = `${offset * -1}px`;
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
    }
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1246
   */
  const lockBodyScroll = () => {
    const container = getContainer();
    if (!container) {
      return;
    }
    /** @type {boolean} */
    let preventTouchMove;
    /**
     * @param {TouchEvent} event
     */
    container.ontouchstart = event => {
      preventTouchMove = shouldPreventTouchMove(event);
    };
    /**
     * @param {TouchEvent} event
     */
    container.ontouchmove = event => {
      if (preventTouchMove) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
  };

  /**
   * @param {TouchEvent} event
   * @returns {boolean}
   */
  const shouldPreventTouchMove = event => {
    const target = event.target;
    const container = getContainer();
    const htmlContainer = getHtmlContainer();
    if (!container || !htmlContainer) {
      return false;
    }
    if (isStylus(event) || isZoom(event)) {
      return false;
    }
    if (target === container) {
      return true;
    }
    if (!isScrollable(container) && target instanceof HTMLElement && !selfOrParentIsScrollable(target, htmlContainer) &&
    // #2823
    target.tagName !== 'INPUT' &&
    // #1603
    target.tagName !== 'TEXTAREA' &&
    // #2266
    !(isScrollable(htmlContainer) &&
    // #1944
    htmlContainer.contains(target))) {
      return true;
    }
    return false;
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1786
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */
  const isStylus = event => {
    return Boolean(event.touches && event.touches.length &&
    // @ts-ignore - touchType is not a standard property
    event.touches[0].touchType === 'stylus');
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1891
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */
  const isZoom = event => {
    return event.touches && event.touches.length > 1;
  };
  const undoIOSfix = () => {
    if (hasClass(document.body, swalClasses.iosfix)) {
      const offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /**
   * Measure scrollbar width for padding body during modal show/hide
   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
   *
   * @returns {number}
   */
  const measureScrollbar = () => {
    const scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  /**
   * Remember state in cases where opening and handling a modal will fiddle with it.
   * @type {number | null}
   */
  let previousBodyPadding = null;

  /**
   * @param {string} initialBodyOverflow
   */
  const replaceScrollbarWithPadding = initialBodyOverflow => {
    // for queues, do not do this more than once
    if (previousBodyPadding !== null) {
      return;
    }
    // if the body has overflow
    if (document.body.scrollHeight > window.innerHeight || initialBodyOverflow === 'scroll' // https://github.com/sweetalert2/sweetalert2/issues/2663
    ) {
      // add padding so the content doesn't shift after removal of scrollbar
      previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = `${previousBodyPadding + measureScrollbar()}px`;
    }
  };
  const undoReplaceScrollbarWithPadding = () => {
    if (previousBodyPadding !== null) {
      document.body.style.paddingRight = `${previousBodyPadding}px`;
      previousBodyPadding = null;
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {(() => void) | undefined} didClose
   */
  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
      removeKeydownHandler(globalState);
    }

    // workaround for https://github.com/sweetalert2/sweetalert2/issues/2088
    // for some reason removing the container in Safari will scroll the document to bottom
    if (isSafariOrIOS) {
      container.setAttribute('style', 'display:none !important');
      container.removeAttribute('class');
      container.innerHTML = '';
    } else {
      container.remove();
    }
    if (isModal()) {
      undoReplaceScrollbarWithPadding();
      undoIOSfix();
      unsetAriaHidden();
    }
    removeBodyClasses();
  }

  /**
   * Remove SweetAlert2 classes from body
   */
  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }

  /**
   * Instance method to close sweetAlert
   *
   * @param {SweetAlertResult | undefined} resolveValue
   * @this {SweetAlert}
   */
  function close(resolveValue) {
    resolveValue = prepareResolveValue(resolveValue);
    const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    const didClose = triggerClosePopup(this);
    if (this.isAwaitingPromise) {
      // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
      if (!resolveValue.isDismissed) {
        handleAwaitingPromise(this);
        swalPromiseResolve(resolveValue);
      }
    } else if (didClose) {
      // Resolve Swal promise
      swalPromiseResolve(resolveValue);
    }
  }

  /**
   * @param {SweetAlert} instance
   * @returns {boolean}
   */
  const triggerClosePopup = instance => {
    const popup = getPopup();
    if (!popup) {
      return false;
    }
    const innerParams = privateProps.innerParams.get(instance);
    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return false;
    }
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    const backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(instance, popup, innerParams);
    return true;
  };

  /**
   * @param {Error | string} error
   * @this {SweetAlert}
   */
  function rejectPromise(error) {
    const rejectPromise = privateMethods.swalPromiseReject.get(this);
    handleAwaitingPromise(this);
    if (rejectPromise) {
      // Reject Swal promise
      rejectPromise(error);
    }
  }

  /**
   * @param {SweetAlert} instance
   */
  const handleAwaitingPromise = instance => {
    if (instance.isAwaitingPromise) {
      // @ts-ignore
      delete instance.isAwaitingPromise;
      // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335
      if (!privateProps.innerParams.get(instance)) {
        instance._destroy();
      }
    }
  };

  /**
   * @param {SweetAlertResult | undefined} resolveValue
   * @returns {SweetAlertResult}
   */
  const prepareResolveValue = resolveValue => {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }
    return Object.assign({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} innerParams
   */
  const handlePopupAnimation = (instance, popup, innerParams) => {
    var _globalState$eventEmi;
    const container = getContainer();
    // If animation is supported, animate
    const animationIsSupported = hasCssAnimation(popup);
    if (typeof innerParams.willClose === 'function') {
      innerParams.willClose(popup);
    }
    (_globalState$eventEmi = globalState.eventEmitter) === null || _globalState$eventEmi === void 0 || _globalState$eventEmi.emit('willClose', popup);
    if (animationIsSupported && container) {
      animatePopup(instance, popup, container, Boolean(innerParams.returnFocus), innerParams.didClose);
    } else if (container) {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, Boolean(innerParams.returnFocus), innerParams.didClose);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {(() => void) | undefined} didClose
   */
  const animatePopup = (instance, popup, container, returnFocus, didClose) => {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    /**
     * @param {AnimationEvent | TransitionEvent} e
     */
    const swalCloseAnimationFinished = function (e) {
      if (e.target === popup) {
        var _globalState$swalClos;
        (_globalState$swalClos = globalState.swalCloseEventFinishedCallback) === null || _globalState$swalClos === void 0 || _globalState$swalClos.call(globalState);
        delete globalState.swalCloseEventFinishedCallback;
        popup.removeEventListener('animationend', swalCloseAnimationFinished);
        popup.removeEventListener('transitionend', swalCloseAnimationFinished);
      }
    };
    popup.addEventListener('animationend', swalCloseAnimationFinished);
    popup.addEventListener('transitionend', swalCloseAnimationFinished);
  };

  /**
   * @param {SweetAlert} instance
   * @param {(() => void) | undefined} didClose
   */
  const triggerDidCloseAndDispose = (instance, didClose) => {
    setTimeout(() => {
      var _globalState$eventEmi2;
      if (typeof didClose === 'function') {
        didClose.bind(instance.params)();
      }
      (_globalState$eventEmi2 = globalState.eventEmitter) === null || _globalState$eventEmi2 === void 0 || _globalState$eventEmi2.emit('didClose');
      // instance might have been destroyed already
      if (instance._destroy) {
        instance._destroy();
      }
    });
  };

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   *
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */
  const showLoading = buttonToReplace => {
    let popup = getPopup();
    if (!popup) {
      new Swal();
    }
    popup = getPopup();
    if (!popup) {
      return;
    }
    const loader = getLoader();
    if (isToast()) {
      hide(getIcon());
    } else {
      replaceButton(popup, buttonToReplace);
    }
    show(loader);
    popup.setAttribute('data-loading', 'true');
    popup.setAttribute('aria-busy', 'true');
    popup.focus();
  };

  /**
   * @param {HTMLElement} popup
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */
  const replaceButton = (popup, buttonToReplace) => {
    const actions = getActions();
    const loader = getLoader();
    if (!actions || !loader) {
      return;
    }
    if (!buttonToReplace && isVisible$1(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }
    show(actions);
    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
      actions.insertBefore(loader, buttonToReplace);
    }
    addClass([popup, actions], swalClasses.loading);
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const handleInputOptionsAndValue = (instance, params) => {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].some(i => i === params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      showLoading(getConfirmButton());
      handleInputValue(instance, params);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} innerParams
   * @returns {SweetAlertInputValue}
   */
  const getInputValue = (instance, innerParams) => {
    const input = instance.getInput();
    if (!input) {
      return null;
    }
    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);
      case 'radio':
        return getRadioValue(input);
      case 'file':
        return getFileValue(input);
      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  /**
   * @param {HTMLInputElement} input
   * @returns {number}
   */
  const getCheckboxValue = input => input.checked ? 1 : 0;

  /**
   * @param {HTMLInputElement} input
   * @returns {string | null}
   */
  const getRadioValue = input => input.checked ? input.value : null;

  /**
   * @param {HTMLInputElement} input
   * @returns {FileList | File | null}
   */
  const getFileValue = input => input.files && input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const handleInputOptions = (instance, params) => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    /**
     * @param {*} inputOptions
     */
    const processInputOptions = inputOptions => {
      if (params.input === 'select') {
        populateSelectOptions(popup, formatInputOptions(inputOptions), params);
      } else if (params.input === 'radio') {
        populateRadioOptions(popup, formatInputOptions(inputOptions), params);
      }
    };
    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(inputOptions => {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (typeof params.inputOptions === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof params.inputOptions}`);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const handleInputValue = (instance, params) => {
    const input = instance.getInput();
    if (!input) {
      return;
    }
    hide(input);
    asPromise(params.inputValue).then(inputValue => {
      input.value = params.input === 'number' ? `${parseFloat(inputValue) || 0}` : `${inputValue}`;
      show(input);
      input.focus();
      instance.hideLoading();
    }).catch(err => {
      error(`Error in inputValue promise: ${err}`);
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  /**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */
  function populateSelectOptions(popup, inputOptions, params) {
    const select = getDirectChildByClass(popup, swalClasses.select);
    if (!select) {
      return;
    }
    /**
     * @param {HTMLElement} parent
     * @param {string} optionLabel
     * @param {string} optionValue
     */
    const renderOption = (parent, optionLabel, optionValue) => {
      const option = document.createElement('option');
      option.value = optionValue;
      setInnerHtml(option, optionLabel);
      option.selected = isSelected(optionValue, params.inputValue);
      parent.appendChild(option);
    };
    inputOptions.forEach(inputOption => {
      const optionValue = inputOption[0];
      const optionLabel = inputOption[1];
      // <optgroup> spec:
      // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
      // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
      // check whether this is a <optgroup>
      if (Array.isArray(optionLabel)) {
        // if it is an array, then it is an <optgroup>
        const optgroup = document.createElement('optgroup');
        optgroup.label = optionValue;
        optgroup.disabled = false; // not configurable for now
        select.appendChild(optgroup);
        optionLabel.forEach(o => renderOption(optgroup, o[1], o[0]));
      } else {
        // case of <option>
        renderOption(select, optionLabel, optionValue);
      }
    });
    select.focus();
  }

  /**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */
  function populateRadioOptions(popup, inputOptions, params) {
    const radio = getDirectChildByClass(popup, swalClasses.radio);
    if (!radio) {
      return;
    }
    inputOptions.forEach(inputOption => {
      const radioValue = inputOption[0];
      const radioLabel = inputOption[1];
      const radioInput = document.createElement('input');
      const radioLabelElement = document.createElement('label');
      radioInput.type = 'radio';
      radioInput.name = swalClasses.radio;
      radioInput.value = radioValue;
      if (isSelected(radioValue, params.inputValue)) {
        radioInput.checked = true;
      }
      const label = document.createElement('span');
      setInnerHtml(label, radioLabel);
      label.className = swalClasses.label;
      radioLabelElement.appendChild(radioInput);
      radioLabelElement.appendChild(label);
      radio.appendChild(radioLabelElement);
    });
    const radios = radio.querySelectorAll('input');
    if (radios.length) {
      radios[0].focus();
    }
  }

  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   *
   * @param {*} inputOptions
   * @typedef {string[]} InputOptionFlattened
   * @returns {InputOptionFlattened[]}
   */
  const formatInputOptions = inputOptions => {
    const entries = inputOptions instanceof Map ? Array.from(inputOptions) : Object.entries(inputOptions);
    return entries.map(([key, value]) => [key, typeof value === 'object' ? formatInputOptions(value) : value]); // case of <optgroup>
  };

  /**
   * @param {string} optionValue
   * @param {SweetAlertInputValue} inputValue
   * @returns {boolean}
   */
  const isSelected = (optionValue, inputValue) => Boolean(inputValue) && inputValue != null && inputValue.toString() === optionValue.toString();

  /**
   * @param {SweetAlert} instance
   */
  const handleConfirmButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();
    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, 'confirm');
    } else {
      confirm(instance, true);
    }
  };

  /**
   * @param {SweetAlert} instance
   */
  const handleDenyButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();
    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, 'deny');
    } else {
      deny(instance, false);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {(dismiss: DismissReason) => void} dismissWith
   */
  const handleCancelButtonClick = (instance, dismissWith) => {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  /**
   * @param {SweetAlert} instance
   * @param {'confirm' | 'deny'} type
   */
  const handleConfirmOrDenyWithInput = (instance, type) => {
    const innerParams = privateProps.innerParams.get(instance);
    if (!innerParams.input) {
      error(`The "input" parameter is needed to be set when using returnInputValueOn${capitalizeFirstLetter(type)}`);
      return;
    }
    const input = instance.getInput();
    const inputValue = getInputValue(instance, innerParams);
    if (innerParams.inputValidator) {
      handleInputValidator(instance, inputValue, type);
    } else if (input && !input.checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage || input.validationMessage);
    } else if (type === 'deny') {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertInputValue} inputValue
   * @param {'confirm' | 'deny'} type
   */
  const handleInputValidator = (instance, inputValue, type) => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableInput();
    const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
    validationPromise.then(validationMessage => {
      instance.enableButtons();
      instance.enableInput();
      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else if (type === 'deny') {
        deny(instance, inputValue);
      } else {
        confirm(instance, inputValue);
      }
    });
  };

  /**
   * @param {SweetAlert} instance
   * @param {*} value
   */
  const deny = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance);
    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }
    if (innerParams.preDeny) {
      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received
      const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
      preDenyPromise.then(preDenyValue => {
        if (preDenyValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          instance.close(/** @type SweetAlertResult */{
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      }).catch(error => rejectWith(instance, error));
    } else {
      instance.close(/** @type SweetAlertResult */{
        isDenied: true,
        value
      });
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {*} value
   */
  const succeedWith = (instance, value) => {
    instance.close(/** @type SweetAlertResult */{
      isConfirmed: true,
      value
    });
  };

  /**
   *
   * @param {SweetAlert} instance
   * @param {string} error
   */
  const rejectWith = (instance, error) => {
    instance.rejectPromise(error);
  };

  /**
   *
   * @param {SweetAlert} instance
   * @param {*} value
   */
  const confirm = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance);
    if (innerParams.showLoaderOnConfirm) {
      showLoading();
    }
    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received
      const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
      preConfirmPromise.then(preConfirmValue => {
        if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      }).catch(error => rejectWith(instance, error));
    } else {
      succeedWith(instance, value);
    }
  };

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   * @this {SweetAlert}
   */
  function hideLoading() {
    // do nothing if popup is closed
    const innerParams = privateProps.innerParams.get(this);
    if (!innerParams) {
      return;
    }
    const domCache = privateProps.domCache.get(this);
    hide(domCache.loader);
    if (isToast()) {
      if (innerParams.icon) {
        show(getIcon());
      }
    } else {
      showRelatedButton(domCache);
    }
    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    this.enableButtons();
  }

  /**
   * @param {DomCache} domCache
   */
  const showRelatedButton = domCache => {
    const dataButtonToReplace = domCache.loader.getAttribute('data-button-to-replace');
    const buttonToReplace = dataButtonToReplace ? domCache.popup.getElementsByClassName(dataButtonToReplace) : [];
    if (buttonToReplace.length) {
      show(/** @type {HTMLElement} */buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }
  };

  /**
   * Gets the input DOM node, this method works with input parameter.
   *
   * @returns {HTMLInputElement | null}
   * @this {SweetAlert}
   */
  function getInput() {
    const innerParams = privateProps.innerParams.get(this);
    const domCache = privateProps.domCache.get(this);
    if (!domCache) {
      return null;
    }
    return getInput$1(domCache.popup, innerParams.input);
  }

  /**
   * @param {SweetAlert} instance
   * @param {string[]} buttons
   * @param {boolean} disabled
   */
  function setButtonsDisabled(instance, buttons, disabled) {
    const domCache = privateProps.domCache.get(instance);
    buttons.forEach(button => {
      domCache[button].disabled = disabled;
    });
  }

  /**
   * @param {HTMLInputElement | null} input
   * @param {boolean} disabled
   */
  function setInputDisabled(input, disabled) {
    const popup = getPopup();
    if (!popup || !input) {
      return;
    }
    if (input.type === 'radio') {
      /** @type {NodeListOf<HTMLInputElement>} */
      const radios = popup.querySelectorAll(`[name="${swalClasses.radio}"]`);
      radios.forEach(radio => {
        radio.disabled = disabled;
      });
    } else {
      input.disabled = disabled;
    }
  }

  /**
   * Enable all the buttons
   * @this {SweetAlert}
   */
  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
    const focusedElement = privateProps.focusedElement.get(this);
    if (focusedElement instanceof HTMLElement && document.activeElement === document.body) {
      focusedElement.focus();
    }
    privateProps.focusedElement.delete(this);
  }

  /**
   * Disable all the buttons
   * @this {SweetAlert}
   */
  function disableButtons() {
    privateProps.focusedElement.set(this, document.activeElement);
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }

  /**
   * Enable the input field
   * @this {SweetAlert}
   */
  function enableInput() {
    setInputDisabled(this.getInput(), false);
  }

  /**
   * Disable the input field
   * @this {SweetAlert}
   */
  function disableInput() {
    setInputDisabled(this.getInput(), true);
  }

  /**
   * Show block with validation message
   *
   * @param {string} error
   * @this {SweetAlert}
   */
  function showValidationMessage(error) {
    const domCache = privateProps.domCache.get(this);
    const params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];
    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }
    show(domCache.validationMessage);
    const input = this.getInput();
    if (input) {
      input.setAttribute('aria-invalid', 'true');
      input.setAttribute('aria-describedby', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  }

  /**
   * Hide block with validation message
   *
   * @this {SweetAlert}
   */
  function resetValidationMessage() {
    const domCache = privateProps.domCache.get(this);
    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }
    const input = this.getInput();
    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      removeClass(input, swalClasses.inputerror);
    }
  }
  const defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    draggable: false,
    animation: true,
    theme: 'light',
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    color: undefined,
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoFocus: true,
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    willOpen: undefined,
    didOpen: undefined,
    didRender: undefined,
    willClose: undefined,
    didClose: undefined,
    didDestroy: undefined,
    scrollbarPadding: true,
    topLayer: false
  };
  const updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'color', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'draggable', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'theme', 'willClose'];

  /** @type {Record<string, string | undefined>} */
  const deprecatedParams = {
    allowEnterKey: undefined
  };
  const toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'draggable', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];

  /**
   * Is valid parameter
   *
   * @param {string} paramName
   * @returns {boolean}
   */
  const isValidParameter = paramName => {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };

  /**
   * Is valid parameter for Swal.update() method
   *
   * @param {string} paramName
   * @returns {boolean}
   */
  const isUpdatableParameter = paramName => {
    return updatableParams.indexOf(paramName) !== -1;
  };

  /**
   * Is deprecated parameter
   *
   * @param {string} paramName
   * @returns {string | undefined}
   */
  const isDeprecatedParameter = paramName => {
    return deprecatedParams[paramName];
  };

  /**
   * @param {string} param
   */
  const checkIfParamIsValid = param => {
    if (!isValidParameter(param)) {
      warn(`Unknown parameter "${param}"`);
    }
  };

  /**
   * @param {string} param
   */
  const checkIfToastParamIsValid = param => {
    if (toastIncompatibleParams.includes(param)) {
      warn(`The parameter "${param}" is incompatible with toasts`);
    }
  };

  /**
   * @param {string} param
   */
  const checkIfParamIsDeprecated = param => {
    const isDeprecated = isDeprecatedParameter(param);
    if (isDeprecated) {
      warnAboutDeprecation(param, isDeprecated);
    }
  };

  /**
   * Show relevant warnings for given params
   *
   * @param {SweetAlertOptions} params
   */
  const showWarningsForParams = params => {
    if (params.backdrop === false && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }
    if (params.theme && !['light', 'dark', 'auto', 'minimal', 'borderless', 'bootstrap-4', 'bootstrap-4-light', 'bootstrap-4-dark', 'bootstrap-5', 'bootstrap-5-light', 'bootstrap-5-dark', 'material-ui', 'material-ui-light', 'material-ui-dark', 'embed-iframe', 'bulma', 'bulma-light', 'bulma-dark'].includes(params.theme)) {
      warn(`Invalid theme "${params.theme}"`);
    }
    for (const param in params) {
      checkIfParamIsValid(param);
      if (params.toast) {
        checkIfToastParamIsValid(param);
      }
      checkIfParamIsDeprecated(param);
    }
  };

  /**
   * Updates popup parameters.
   *
   * @this {any}
   * @param {SweetAlertOptions} params
   */
  function update(params) {
    const container = getContainer();
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(this);
    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      warn(`You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`);
      return;
    }
    const validUpdatableParams = filterValidParams(params);
    const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    showWarningsForParams(updatedParams);
    if (container) {
      container.dataset['swal2Theme'] = updatedParams.theme;
    }
    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */
  const filterValidParams = params => {
    /** @type {Record<string, any>} */
    const validUpdatableParams = {};
    Object.keys(params).forEach(param => {
      if (isUpdatableParameter(param)) {
        const typedParams = /** @type {Record<string, any>} */params;
        validUpdatableParams[param] = typedParams[param];
      } else {
        warn(`Invalid parameter to update: ${param}`);
      }
    });
    return validUpdatableParams;
  };

  /**
   * Dispose the current SweetAlert2 instance
   * @this {SweetAlert}
   */
  function _destroy() {
    var _globalState$eventEmi;
    const domCache = privateProps.domCache.get(this);
    const innerParams = privateProps.innerParams.get(this);
    if (!innerParams) {
      disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335
      return; // This instance has already been destroyed
    }

    // Check if there is another Swal closing
    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    }
    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    }
    (_globalState$eventEmi = globalState.eventEmitter) === null || _globalState$eventEmi === void 0 || _globalState$eventEmi.emit('didDestroy');
    disposeSwal(this);
  }

  /**
   * @param {SweetAlert} instance
   */
  const disposeSwal = instance => {
    disposeWeakMaps(instance);
    // Unset this.params so GC will dispose it (#1569)
    // @ts-ignore
    delete instance.params;
    // Unset globalState props so GC will dispose globalState (#1569)
    delete globalState.keydownHandler;
    delete globalState.keydownTarget;
    // Unset currentInstance
    delete globalState.currentInstance;
  };

  /**
   * @param {SweetAlert} instance
   */
  const disposeWeakMaps = instance => {
    // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
    if (instance.isAwaitingPromise) {
      unsetWeakMaps(privateProps, instance);
      instance.isAwaitingPromise = true;
    } else {
      unsetWeakMaps(privateMethods, instance);
      unsetWeakMaps(privateProps, instance);

      // @ts-ignore
      delete instance.isAwaitingPromise;
      // Unset instance methods
      // @ts-ignore
      delete instance.disableButtons;
      // @ts-ignore
      delete instance.enableButtons;
      // @ts-ignore
      delete instance.getInput;
      // @ts-ignore
      delete instance.disableInput;
      // @ts-ignore
      delete instance.enableInput;
      // @ts-ignore
      delete instance.hideLoading;
      // @ts-ignore
      delete instance.disableLoading;
      // @ts-ignore
      delete instance.showValidationMessage;
      // @ts-ignore
      delete instance.resetValidationMessage;
      // @ts-ignore
      delete instance.close;
      // @ts-ignore
      delete instance.closePopup;
      // @ts-ignore
      delete instance.closeModal;
      // @ts-ignore
      delete instance.closeToast;
      // @ts-ignore
      delete instance.rejectPromise;
      // @ts-ignore
      delete instance.update;
      // @ts-ignore
      delete instance._destroy;
    }
  };

  /**
   * @param {Record<string, WeakMap<any, any>>} obj
   * @param {SweetAlert} instance
   */
  const unsetWeakMaps = (obj, instance) => {
    for (const i in obj) {
      obj[i].delete(instance);
    }
  };
  var instanceMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _destroy: _destroy,
    close: close,
    closeModal: close,
    closePopup: close,
    closeToast: close,
    disableButtons: disableButtons,
    disableInput: disableInput,
    disableLoading: hideLoading,
    enableButtons: enableButtons,
    enableInput: enableInput,
    getInput: getInput,
    handleAwaitingPromise: handleAwaitingPromise,
    hideLoading: hideLoading,
    rejectPromise: rejectPromise,
    resetValidationMessage: resetValidationMessage,
    showValidationMessage: showValidationMessage,
    update: update
  });

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {(dismiss: DismissReason) => void} dismissWith
   */
  const handlePopupClick = (innerParams, domCache, dismissWith) => {
    if (innerParams.toast) {
      handleToastClick(innerParams, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache);

      // Ignore click events that had mousedown on the container but mouseup on the popup
      handleContainerMousedown(domCache);
      handleModalClick(innerParams, domCache, dismissWith);
    }
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {(dismiss: DismissReason) => void} dismissWith
   */
  const handleToastClick = (innerParams, domCache, dismissWith) => {
    // Closing toast by internal click
    domCache.popup.onclick = () => {
      if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
        return;
      }
      dismissWith(DismissReason.close);
    };
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */
  const isAnyButtonShown = innerParams => {
    return Boolean(innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton);
  };
  let ignoreOutsideClick = false;

  /**
   * @param {DomCache} domCache
   */
  const handleModalMousedown = domCache => {
    domCache.popup.onmousedown = () => {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = () => {};
        // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup
        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  /**
   * @param {DomCache} domCache
   */
  const handleContainerMousedown = domCache => {
    domCache.container.onmousedown = e => {
      // prevent the modal text from being selected on double click on the container (allowOutsideClick: false)
      if (e.target === domCache.container) {
        e.preventDefault();
      }
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = () => {};
        // We also need to check if the mouseup target is a child of the popup
        if (e.target === domCache.popup || e.target instanceof HTMLElement && domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {(dismiss: DismissReason) => void} dismissWith
   */
  const handleModalClick = (innerParams, domCache, dismissWith) => {
    domCache.container.onclick = e => {
      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }
      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  /**
   * @param {unknown} elem
   * @returns {boolean}
   */
  const isJqueryElement = elem => typeof elem === 'object' && elem !== null && 'jquery' in elem;

  /**
   * @param {unknown} elem
   * @returns {boolean}
   */
  const isElement = elem => elem instanceof Element || isJqueryElement(elem);

  /**
   * @param {ReadonlyArray<unknown>} args
   * @returns {SweetAlertOptions}
   */
  const argsToParams = args => {
    /** @type {Record<string, unknown>} */
    const params = {};
    if (typeof args[0] === 'object' && !isElement(args[0])) {
      Object.assign(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach((name, index) => {
        const arg = args[index];
        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error(`Unexpected type of ${name}! Expected "string" or "Element", got ${typeof arg}`);
        }
      });
    }
    return /** @type {SweetAlertOptions} */params;
  };

  /**
   * Main method to create a new SweetAlert2 popup
   *
   * @this {new (...args: any[]) => any}
   * @param  {...SweetAlertOptions} args
   * @returns {Promise<SweetAlertResult>}
   */
  function fire(...args) {
    return new this(...args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlert}
   * @this {typeof import('../SweetAlert.js').SweetAlert}
   */
  function mixin(mixinParams) {
    // @ts-ignore: 'this' refers to the SweetAlert constructor
    class MixinSwal extends this {
      /**
       * @param {any} params
       * @param {any} priorityMixinParams
       */
      _main(params, priorityMixinParams) {
        return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
      }
    }
    // @ts-ignore
    return MixinSwal;
  }

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   *
   * @returns {number | undefined}
   */
  const getTimerLeft = () => {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };

  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  const stopTimer = () => {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };

  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  const resumeTimer = () => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };

  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  const toggleTimer = () => {
    const timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };

  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @param {number} ms
   * @returns {number | undefined}
   */
  const increaseTimer = ms => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.increase(ms);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };

  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   *
   * @returns {boolean}
   */
  const isTimerRunning = () => {
    return Boolean(globalState.timeout && globalState.timeout.isRunning());
  };
  let bodyClickListenerAdded = false;
  /** @type {Record<string, any>} */
  const clickHandlers = {};

  /**
   * @this {any}
   * @param {string} attr
   */
  function bindClickHandler(attr = 'data-swal-template') {
    clickHandlers[attr] = this;
    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }

  /**
   * @param {MouseEvent} event
   */
  const bodyClickListener = event => {
    for (let el = /** @type {any} */event.target; el && el !== document; el = el.parentNode) {
      for (const attr in clickHandlers) {
        const template = el.getAttribute && el.getAttribute(attr);
        if (template) {
          clickHandlers[attr].fire({
            template
          });
          return;
        }
      }
    }
  };

  // Source: https://gist.github.com/mudge/5830382?permalink_comment_id=2691957#gistcomment-2691957

  class EventEmitter {
    constructor() {
      /** @type {Events} */
      this.events = {};
    }

    /**
     * @param {string} eventName
     * @returns {EventHandlers}
     */
    _getHandlersByEventName(eventName) {
      if (typeof this.events[eventName] === 'undefined') {
        // not Set because we need to keep the FIFO order
        // https://github.com/sweetalert2/sweetalert2/pull/2763#discussion_r1748990334
        this.events[eventName] = [];
      }
      return this.events[eventName];
    }

    /**
     * @param {string} eventName
     * @param {EventHandler} eventHandler
     */
    on(eventName, eventHandler) {
      const currentHandlers = this._getHandlersByEventName(eventName);
      if (!currentHandlers.includes(eventHandler)) {
        currentHandlers.push(eventHandler);
      }
    }

    /**
     * @param {string} eventName
     * @param {EventHandler} eventHandler
     */
    once(eventName, eventHandler) {
      /**
       * @param {...any} args
       */
      const onceFn = (...args) => {
        this.removeListener(eventName, onceFn);
        // @ts-ignore
        eventHandler.apply(this, args);
      };
      this.on(eventName, onceFn);
    }

    /**
     * @param {string} eventName
     * @param {...any} args
     */
    emit(eventName, ...args) {
      this._getHandlersByEventName(eventName).forEach(
      /**
       * @param {EventHandler} eventHandler
       */
      eventHandler => {
        try {
          // @ts-ignore
          eventHandler.apply(this, args);
        } catch (error) {
          console.error(error);
        }
      });
    }

    /**
     * @param {string} eventName
     * @param {EventHandler} eventHandler
     */
    removeListener(eventName, eventHandler) {
      const currentHandlers = this._getHandlersByEventName(eventName);
      const index = currentHandlers.indexOf(eventHandler);
      if (index > -1) {
        currentHandlers.splice(index, 1);
      }
    }

    /**
     * @param {string} eventName
     */
    removeAllListeners(eventName) {
      if (this.events[eventName] !== undefined) {
        // https://github.com/sweetalert2/sweetalert2/pull/2763#discussion_r1749239222
        this.events[eventName].length = 0;
      }
    }
    reset() {
      this.events = {};
    }
  }
  globalState.eventEmitter = new EventEmitter();

  /**
   * @param {string} eventName
   * @param {EventHandler} eventHandler
   */
  const on = (eventName, eventHandler) => {
    if (globalState.eventEmitter) {
      globalState.eventEmitter.on(eventName, eventHandler);
    }
  };

  /**
   * @param {string} eventName
   * @param {EventHandler} eventHandler
   */
  const once = (eventName, eventHandler) => {
    if (globalState.eventEmitter) {
      globalState.eventEmitter.once(eventName, eventHandler);
    }
  };

  /**
   * @param {string} [eventName]
   * @param {EventHandler} [eventHandler]
   */
  const off = (eventName, eventHandler) => {
    if (!globalState.eventEmitter) {
      return;
    }

    // Remove all handlers for all events
    if (!eventName) {
      globalState.eventEmitter.reset();
      return;
    }
    if (eventHandler) {
      // Remove a specific handler
      globalState.eventEmitter.removeListener(eventName, eventHandler);
    } else {
      // Remove all handlers for a specific event
      globalState.eventEmitter.removeAllListeners(eventName);
    }
  };
  var staticMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    argsToParams: argsToParams,
    bindClickHandler: bindClickHandler,
    clickCancel: clickCancel,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    enableLoading: showLoading,
    fire: fire,
    getActions: getActions,
    getCancelButton: getCancelButton,
    getCloseButton: getCloseButton,
    getConfirmButton: getConfirmButton,
    getContainer: getContainer,
    getDenyButton: getDenyButton,
    getFocusableElements: getFocusableElements,
    getFooter: getFooter,
    getHtmlContainer: getHtmlContainer,
    getIcon: getIcon,
    getIconContent: getIconContent,
    getImage: getImage,
    getInputLabel: getInputLabel,
    getLoader: getLoader,
    getPopup: getPopup,
    getProgressSteps: getProgressSteps,
    getTimerLeft: getTimerLeft,
    getTimerProgressBar: getTimerProgressBar,
    getTitle: getTitle,
    getValidationMessage: getValidationMessage,
    increaseTimer: increaseTimer,
    isDeprecatedParameter: isDeprecatedParameter,
    isLoading: isLoading,
    isTimerRunning: isTimerRunning,
    isUpdatableParameter: isUpdatableParameter,
    isValidParameter: isValidParameter,
    isVisible: isVisible,
    mixin: mixin,
    off: off,
    on: on,
    once: once,
    resumeTimer: resumeTimer,
    showLoading: showLoading,
    stopTimer: stopTimer,
    toggleTimer: toggleTimer
  });
  class Timer {
    /**
     * @param {() => void} callback
     * @param {number} delay
     */
    constructor(callback, delay) {
      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    /**
     * @returns {number}
     */
    start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }
      return this.remaining;
    }

    /**
     * @returns {number}
     */
    stop() {
      if (this.started && this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date().getTime() - this.started.getTime();
      }
      return this.remaining;
    }

    /**
     * @param {number} n
     * @returns {number}
     */
    increase(n) {
      const running = this.running;
      if (running) {
        this.stop();
      }
      this.remaining += n;
      if (running) {
        this.start();
      }
      return this.remaining;
    }

    /**
     * @returns {number}
     */
    getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }
      return this.remaining;
    }

    /**
     * @returns {boolean}
     */
    isRunning() {
      return this.running;
    }
  }
  const swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];

  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */
  const getTemplateParams = params => {
    const template = typeof params.template === 'string' ? (/** @type {HTMLTemplateElement} */document.querySelector(params.template)) : params.template;
    if (!template) {
      return {};
    }
    /** @type {DocumentFragment} */
    const templateContent = template.content;
    showWarningsForElements(templateContent);
    const result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, string | boolean | number>}
   */
  const getSwalParams = templateContent => {
    /** @type {Record<string, string | boolean | number>} */
    const result = {};
    /** @type {HTMLElement[]} */
    const swalParams = Array.from(templateContent.querySelectorAll('swal-param'));
    swalParams.forEach(param => {
      showWarningsForAttributes(param, ['name', 'value']);
      const paramName = /** @type {keyof SweetAlertOptions} */param.getAttribute('name');
      const value = param.getAttribute('value');
      if (!paramName || !value) {
        return;
      }
      if (paramName in defaultParams && typeof defaultParams[(/** @type {keyof typeof defaultParams} */paramName)] === 'boolean') {
        result[paramName] = value !== 'false';
      } else if (paramName in defaultParams && typeof defaultParams[(/** @type {keyof typeof defaultParams} */paramName)] === 'object') {
        result[paramName] = JSON.parse(value);
      } else {
        result[paramName] = value;
      }
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, () => void>}
   */
  const getSwalFunctionParams = templateContent => {
    /** @type {Record<string, () => void>} */
    const result = {};
    /** @type {HTMLElement[]} */
    const swalFunctions = Array.from(templateContent.querySelectorAll('swal-function-param'));
    swalFunctions.forEach(param => {
      const paramName = /** @type {keyof SweetAlertOptions} */param.getAttribute('name');
      const value = param.getAttribute('value');
      if (!paramName || !value) {
        return;
      }
      result[paramName] = new Function(`return ${value}`)();
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, string | boolean>}
   */
  const getSwalButtons = templateContent => {
    /** @type {Record<string, string | boolean>} */
    const result = {};
    /** @type {HTMLElement[]} */
    const swalButtons = Array.from(templateContent.querySelectorAll('swal-button'));
    swalButtons.forEach(button => {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      const type = button.getAttribute('type');
      if (!type || !['confirm', 'cancel', 'deny'].includes(type)) {
        return;
      }
      result[`${type}ButtonText`] = button.innerHTML;
      result[`show${capitalizeFirstLetter(type)}Button`] = true;
      const color = button.getAttribute('color');
      if (color !== null) {
        result[`${type}ButtonColor`] = color;
      }
      const ariaLabel = button.getAttribute('aria-label');
      if (ariaLabel !== null) {
        result[`${type}ButtonAriaLabel`] = ariaLabel;
      }
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {Pick<SweetAlertOptions, 'imageUrl' | 'imageWidth' | 'imageHeight' | 'imageAlt'>}
   */
  const getSwalImage = templateContent => {
    const result = {};
    /** @type {HTMLElement | null} */
    const image = templateContent.querySelector('swal-image');
    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);
      // getAttribute returns null if attribute is absent; `|| undefined` converts empty string to undefined
      const src = image.getAttribute('src');
      if (src !== null) result.imageUrl = src || undefined;
      const width = image.getAttribute('width');
      if (width !== null) result.imageWidth = width || undefined;
      const height = image.getAttribute('height');
      if (height !== null) result.imageHeight = height || undefined;
      const alt = image.getAttribute('alt');
      if (alt !== null) result.imageAlt = alt || undefined;
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {object}
   */
  const getSwalIcon = templateContent => {
    const result = {};
    /** @type {HTMLElement | null} */
    const icon = templateContent.querySelector('swal-icon');
    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);
      if (icon.hasAttribute('type')) {
        result.icon = icon.getAttribute('type');
      }
      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }
      result.iconHtml = icon.innerHTML;
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {object}
   */
  const getSwalInput = templateContent => {
    /** @type {Record<string, any>} */
    const result = {};
    /** @type {HTMLElement | null} */
    const input = templateContent.querySelector('swal-input');
    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      result.input = input.getAttribute('type') || 'text';
      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }
      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }
      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }
    /** @type {HTMLElement[]} */
    const inputOptions = Array.from(templateContent.querySelectorAll('swal-input-option'));
    if (inputOptions.length) {
      result.inputOptions = {};
      inputOptions.forEach(option => {
        showWarningsForAttributes(option, ['value']);
        const optionValue = option.getAttribute('value');
        if (!optionValue) {
          return;
        }
        const optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @param {string[]} paramNames
   * @returns {Record<string, string>}
   */
  const getSwalStringParams = (templateContent, paramNames) => {
    /** @type {Record<string, string>} */
    const result = {};
    for (const i in paramNames) {
      const paramName = paramNames[i];
      /** @type {HTMLElement | null} */
      const tag = templateContent.querySelector(paramName);
      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   */
  const showWarningsForElements = templateContent => {
    const allowedElements = swalStringParams.concat(['swal-param', 'swal-function-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    Array.from(templateContent.children).forEach(el => {
      const tagName = el.tagName.toLowerCase();
      if (!allowedElements.includes(tagName)) {
        warn(`Unrecognized element <${tagName}>`);
      }
    });
  };

  /**
   * @param {HTMLElement} el
   * @param {string[]} allowedAttributes
   */
  const showWarningsForAttributes = (el, allowedAttributes) => {
    Array.from(el.attributes).forEach(attribute => {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn([`Unrecognized attribute "${attribute.name}" on <${el.tagName.toLowerCase()}>.`, `${allowedAttributes.length ? `Allowed attributes are: ${allowedAttributes.join(', ')}` : 'To set the value, use HTML within the element.'}`]);
      }
    });
  };
  const SHOW_CLASS_TIMEOUT = 10;

  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {SweetAlertOptions} params
   */
  const openPopup = params => {
    var _globalState$eventEmi, _globalState$eventEmi2;
    const container = getContainer();
    const popup = getPopup();
    if (!container || !popup) {
      return;
    }
    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    }
    (_globalState$eventEmi = globalState.eventEmitter) === null || _globalState$eventEmi === void 0 || _globalState$eventEmi.emit('willOpen', popup);
    const bodyStyles = window.getComputedStyle(document.body);
    const initialBodyOverflow = bodyStyles.overflowY;
    addClasses(container, popup, params);

    // scrolling is 'hidden' until animation is done, after that 'auto'
    setTimeout(() => {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);
    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding !== undefined ? params.scrollbarPadding : false, initialBodyOverflow);
      setAriaHidden();
    }

    // https://github.com/sweetalert2/sweetalert2/issues/2923
    if (isIOS && params.backdrop === false && popup.scrollHeight > container.clientHeight) {
      // remove pointer-events: none from container, it breaks scrolling tall popups in iOS
      container.style.pointerEvents = 'auto';
    }
    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }
    if (typeof params.didOpen === 'function') {
      const didOpen = params.didOpen;
      setTimeout(() => didOpen(popup));
    }
    (_globalState$eventEmi2 = globalState.eventEmitter) === null || _globalState$eventEmi2 === void 0 || _globalState$eventEmi2.emit('didOpen', popup);
  };

  /**
   * @param {Event} event
   */
  const swalOpenAnimationFinished = event => {
    const popup = getPopup();
    if (!popup || event.target !== popup) {
      return;
    }
    const container = getContainer();
    if (!container) {
      return;
    }
    popup.removeEventListener('animationend', swalOpenAnimationFinished);
    popup.removeEventListener('transitionend', swalOpenAnimationFinished);
    container.style.overflowY = 'auto';

    // no-transition is added in init() in case one swal is opened right after another
    removeClass(container, swalClasses['no-transition']);
  };

  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   */
  const setScrollingVisibility = (container, popup) => {
    if (hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener('animationend', swalOpenAnimationFinished);
      popup.addEventListener('transitionend', swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  /**
   * @param {HTMLElement} container
   * @param {boolean} scrollbarPadding
   * @param {string} initialBodyOverflow
   */
  const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
    iOSfix();
    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      replaceScrollbarWithPadding(initialBodyOverflow);
    }

    // sweetalert2/issues/1247
    setTimeout(() => {
      container.scrollTop = 0;
    });
  };

  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */
  const addClasses = (container, popup, params) => {
    var _params$showClass;
    if ((_params$showClass = params.showClass) !== null && _params$showClass !== void 0 && _params$showClass.backdrop) {
      addClass(container, params.showClass.backdrop);
    }
    if (params.animation) {
      // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059
      popup.style.setProperty('opacity', '0', 'important');
      show(popup, 'grid');
      setTimeout(() => {
        var _params$showClass2;
        // Animate popup right after showing it
        if ((_params$showClass2 = params.showClass) !== null && _params$showClass2 !== void 0 && _params$showClass2.popup) {
          addClass(popup, params.showClass.popup);
        }
        // and remove the opacity workaround
        popup.style.removeProperty('opacity');
      }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062
    } else {
      show(popup, 'grid');
    }
    addClass([document.documentElement, document.body], swalClasses.shown);
    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };
  var defaultInputValidators = {
    /**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
    email: (string, validationMessage) => {
      return /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    /**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
    url: (string, validationMessage) => {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (params.inputValidator) {
      return;
    }
    if (params.input === 'email') {
      params.inputValidator = defaultInputValidators['email'];
    }
    if (params.input === 'url') {
      params.inputValidator = defaultInputValidators['url'];
    }
  }

  /**
   * @param {SweetAlertOptions} params
   */
  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }

  /**
   * Set type, text and actions on popup
   *
   * @param {SweetAlertOptions} params
   */
  function setParameters(params) {
    setDefaultInputValidators(params);

    // showLoaderOnConfirm && preConfirm
    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    }
    validateCustomTargetElement(params);

    // Replace newlines with <br> in title
    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }
    init(params);
  }

  /** @type {SweetAlert} */
  let currentInstance;
  var _promise = /*#__PURE__*/new WeakMap();
  class SweetAlert {
    /**
     * @param {...(SweetAlertOptions | string)} args
     * @this {SweetAlert}
     */
    constructor(...args) {
      /**
       * @type {Promise<SweetAlertResult>}
       */
      _classPrivateFieldInitSpec(this, _promise, /** @type {Promise<SweetAlertResult>} */
      Promise.resolve({
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      }));
      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      }
      currentInstance = this;

      // @ts-ignore
      const outerParams = Object.freeze(this.constructor.argsToParams(args));

      /** @type {Readonly<SweetAlertOptions>} */
      this.params = outerParams;

      /** @type {boolean} */
      this.isAwaitingPromise = false;
      _classPrivateFieldSet2(_promise, this, this._main(currentInstance.params));
    }

    /**
     * @param {any} userParams
     * @param {any} mixinParams
     */
    _main(userParams, mixinParams = {}) {
      showWarningsForParams(Object.assign({}, mixinParams, userParams));
      if (globalState.currentInstance) {
        const swalPromiseResolve = privateMethods.swalPromiseResolve.get(globalState.currentInstance);
        const {
          isAwaitingPromise
        } = globalState.currentInstance;
        globalState.currentInstance._destroy();
        if (!isAwaitingPromise) {
          swalPromiseResolve({
            isDismissed: true
          });
        }
        if (isModal()) {
          unsetAriaHidden();
        }
      }
      globalState.currentInstance = currentInstance;
      const innerParams = prepareParams(userParams, mixinParams);
      setParameters(innerParams);
      Object.freeze(innerParams);

      // clear the previous timer
      if (globalState.timeout) {
        globalState.timeout.stop();
        delete globalState.timeout;
      }

      // clear the restore focus timeout
      clearTimeout(globalState.restoreFocusTimeout);
      const domCache = populateDomCache(currentInstance);
      render(currentInstance, innerParams);
      privateProps.innerParams.set(currentInstance, innerParams);
      return swalPromise(currentInstance, domCache, innerParams);
    }

    // `catch` cannot be the name of a module export, so we define our thenable methods here instead
    /**
     * @param {any} onFulfilled
     */
    // oxlint-disable-next-line unicorn/no-thenable
    then(onFulfilled) {
      return _classPrivateFieldGet2(_promise, this).then(onFulfilled);
    }

    /**
     * @param {any} onFinally
     */
    finally(onFinally) {
      return _classPrivateFieldGet2(_promise, this).finally(onFinally);
    }
  }

  /**
   * @param {SweetAlert} instance
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {Promise<SweetAlertResult>}
   */
  const swalPromise = (instance, domCache, innerParams) => {
    return new Promise((resolve, reject) => {
      // functions to handle all closings/dismissals
      /**
       * @param {DismissReason} dismiss
       */
      const dismissWith = dismiss => {
        instance.close({
          isDismissed: true,
          dismiss,
          isConfirmed: false,
          isDenied: false
        });
      };
      privateMethods.swalPromiseResolve.set(instance, resolve);
      privateMethods.swalPromiseReject.set(instance, reject);
      domCache.confirmButton.onclick = () => {
        handleConfirmButtonClick(instance);
      };
      domCache.denyButton.onclick = () => {
        handleDenyButtonClick(instance);
      };
      domCache.cancelButton.onclick = () => {
        handleCancelButtonClick(instance, dismissWith);
      };
      domCache.closeButton.onclick = () => {
        dismissWith(DismissReason.close);
      };
      handlePopupClick(innerParams, domCache, dismissWith);
      addKeydownHandler(globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams);

      // Scroll container to top on open (#1247, #1946)
      setTimeout(() => {
        domCache.container.scrollTop = 0;
      });
    });
  };

  /**
   * @param {SweetAlertOptions} userParams
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlertOptions}
   */
  const prepareParams = (userParams, mixinParams) => {
    const templateParams = getTemplateParams(userParams);
    const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131
    params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
    params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
    if (params.animation === false) {
      params.showClass = {
        backdrop: 'swal2-noanimation'
      };
      params.hideClass = {};
    }
    return params;
  };

  /**
   * @param {SweetAlert} instance
   * @returns {DomCache}
   */
  const populateDomCache = instance => {
    const domCache = /** @type {DomCache} */{
      popup: (/** @type {HTMLElement} */getPopup()),
      container: (/** @type {HTMLElement} */getContainer()),
      actions: (/** @type {HTMLElement} */getActions()),
      confirmButton: (/** @type {HTMLElement} */getConfirmButton()),
      denyButton: (/** @type {HTMLElement} */getDenyButton()),
      cancelButton: (/** @type {HTMLElement} */getCancelButton()),
      loader: (/** @type {HTMLElement} */getLoader()),
      closeButton: (/** @type {HTMLElement} */getCloseButton()),
      validationMessage: (/** @type {HTMLElement} */getValidationMessage()),
      progressSteps: (/** @type {HTMLElement} */getProgressSteps())
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {(dismiss: DismissReason) => void} dismissWith
   */
  const setupTimer = (globalState, innerParams, dismissWith) => {
    const timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);
    if (innerParams.timer) {
      globalState.timeout = new Timer(() => {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);
      if (innerParams.timerProgressBar && timerProgressBar) {
        show(timerProgressBar);
        applyCustomClass(timerProgressBar, innerParams, 'timerProgressBar');
        setTimeout(() => {
          if (globalState.timeout && globalState.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(/** @type {number} */innerParams.timer);
          }
        });
      }
    }
  };

  /**
   * Initialize focus in the popup:
   *
   * 1. If `toast` is `true`, don't steal focus from the document.
   * 2. Else if there is an [autofocus] element, focus it.
   * 3. Else if `focusConfirm` is `true` and confirm button is visible, focus it.
   * 4. Else if `focusDeny` is `true` and deny button is visible, focus it.
   * 5. Else if `focusCancel` is `true` and cancel button is visible, focus it.
   * 6. Else focus the first focusable element in a popup (if any).
   *
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   */
  const initFocus = (domCache, innerParams) => {
    if (innerParams.toast) {
      return;
    }
    // TODO: this is dumb, remove `allowEnterKey` param in the next major version
    if (!callIfFunction(innerParams.allowEnterKey)) {
      warnAboutDeprecation('allowEnterKey', 'preConfirm: () => false');
      domCache.popup.focus();
      return;
    }
    if (focusAutofocus(domCache)) {
      return;
    }
    if (focusButton(domCache, innerParams)) {
      return;
    }
    setFocus(-1, 1);
  };

  /**
   * @param {DomCache} domCache
   * @returns {boolean}
   */
  const focusAutofocus = domCache => {
    const autofocusElements = Array.from(domCache.popup.querySelectorAll('[autofocus]'));
    for (const autofocusElement of autofocusElements) {
      if (autofocusElement instanceof HTMLElement && isVisible$1(autofocusElement)) {
        autofocusElement.focus();
        return true;
      }
    }
    return false;
  };

  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */
  const focusButton = (domCache, innerParams) => {
    if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }
    if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }
    if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }
    return false;
  };

  // Assign instance methods from src/instanceMethods/*.js to prototype
  SweetAlert.prototype.disableButtons = disableButtons;
  SweetAlert.prototype.enableButtons = enableButtons;
  SweetAlert.prototype.getInput = getInput;
  SweetAlert.prototype.disableInput = disableInput;
  SweetAlert.prototype.enableInput = enableInput;
  SweetAlert.prototype.hideLoading = hideLoading;
  SweetAlert.prototype.disableLoading = hideLoading;
  SweetAlert.prototype.showValidationMessage = showValidationMessage;
  SweetAlert.prototype.resetValidationMessage = resetValidationMessage;
  SweetAlert.prototype.close = close;
  SweetAlert.prototype.closePopup = close;
  SweetAlert.prototype.closeModal = close;
  SweetAlert.prototype.closeToast = close;
  SweetAlert.prototype.rejectPromise = rejectPromise;
  SweetAlert.prototype.update = update;
  SweetAlert.prototype._destroy = _destroy;

  // Assign static methods from src/staticMethods/*.js to constructor
  Object.assign(SweetAlert, staticMethods);

  // Proxy to instance methods to constructor, for now, for backwards compatibility
  Object.keys(instanceMethods).forEach(key => {
    /**
     * @param {...(SweetAlertOptions | string | undefined)} args
     * @returns {SweetAlertResult | Promise<SweetAlertResult> | undefined}
     */
    // @ts-ignore: Dynamic property assignment for backwards compatibility
    SweetAlert[key] = function (...args) {
      // @ts-ignore
      if (currentInstance && currentInstance[key]) {
        // @ts-ignore
        return currentInstance[key](...args);
      }
      return undefined;
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '11.26.25';
  const Swal = SweetAlert;
  // @ts-ignore
  Swal.default = Swal;
  return Swal;
});
if (typeof this !== 'undefined' && this.Sweetalert2) {
  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2;
}
"undefined" != typeof document && function (e, t) {
  var n = e.createElement("style");
  if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);else try {
    n.innerHTML = t;
  } catch (e) {
    n.innerText = t;
  }
}(document, ":root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:auto}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:auto}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}");

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_caja-bancos_caja-bancos_module_ts.js.map