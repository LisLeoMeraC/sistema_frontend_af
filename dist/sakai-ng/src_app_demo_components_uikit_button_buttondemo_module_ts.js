"use strict";
(self["webpackChunksakai"] = self["webpackChunksakai"] || []).push([["src_app_demo_components_uikit_button_buttondemo_module_ts"],{

/***/ 20607:
/*!***************************************************************************!*\
  !*** ./src/app/demo/components/uikit/button/buttondemo-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonDemoRoutingModule: () => (/* binding */ ButtonDemoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _buttondemo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttondemo.component */ 83343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




class ButtonDemoRoutingModule {
  static {
    this.ɵfac = function ButtonDemoRoutingModule_Factory(t) {
      return new (t || ButtonDemoRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ButtonDemoRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
        path: '',
        component: _buttondemo_component__WEBPACK_IMPORTED_MODULE_0__.ButtonDemoComponent
      }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ButtonDemoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 83343:
/*!**********************************************************************!*\
  !*** ./src/app/demo/components/uikit/button/buttondemo.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonDemoComponent: () => (/* binding */ ButtonDemoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/splitbutton */ 59520);




class ButtonDemoComponent {
  constructor() {
    this.items = [];
    this.loading = [false, false, false, false];
  }
  ngOnInit() {
    this.items = [{
      label: 'Update',
      icon: 'pi pi-refresh'
    }, {
      label: 'Delete',
      icon: 'pi pi-times'
    }, {
      label: 'Angular.io',
      icon: 'pi pi-info',
      url: 'http://angular.io'
    }, {
      separator: true
    }, {
      label: 'Setup',
      icon: 'pi pi-cog'
    }];
  }
  load(index) {
    this.loading[index] = true;
    setTimeout(() => this.loading[index] = false, 1000);
  }
  static {
    this.ɵfac = function ButtonDemoComponent_Factory(t) {
      return new (t || ButtonDemoComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ButtonDemoComponent,
      selectors: [["ng-component"]],
      decls: 128,
      vars: 9,
      consts: [[1, "grid"], [1, "col-12", "md:col-6"], [1, "card"], ["pButton", "", "pRipple", "", "label", "Submit", 1, "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "label", "Disabled", "disabled", "true", 1, "mr-2", "mb-2"], ["label", "Link", "styleClass", "p-button-link mr-2 mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Primary", 1, "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Secondary", 1, "p-button-secondary", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Success", 1, "p-button-success", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Info", 1, "p-button-info", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Warning", 1, "p-button-warning", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Help", 1, "p-button-help", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Danger", 1, "p-button-danger", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Primary", 1, "p-button-text", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Secondary", 1, "p-button-secondary", "p-button-text", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Success", 1, "p-button-success", "p-button-text", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Info", 1, "p-button-info", "p-button-text", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Warning", 1, "p-button-warning", "p-button-text", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Help", 1, "p-button-help", "p-button-text", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Danger", 1, "p-button-danger", "p-button-text", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Plain", 1, "p-button-text", "p-button-plain", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Primary", 1, "p-button-outlined", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Secondary", 1, "p-button-outlined", "p-button-secondary", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Success", 1, "p-button-outlined", "p-button-success", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Info", 1, "p-button-outlined", "p-button-info", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Warning", 1, "p-button-outlined", "p-button-warning", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Help", 1, "p-button-outlined", "p-button-help", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Danger", 1, "p-button-outlined", "p-button-danger", "mr-2", "mb-2"], [1, "p-buttonset"], ["pButton", "", "pRipple", "", "label", "Save", "icon", "pi pi-check"], ["pButton", "", "pRipple", "", "label", "Delete", "icon", "pi pi-trash"], ["pButton", "", "pRipple", "", "label", "Cancel", "icon", "pi pi-times"], ["label", "Save", "icon", "pi pi-plus", "styleClass", "p-button-info mr-2 mb-2", 3, "model"], ["label", "Save", "icon", "pi pi-plus", "styleClass", "p-button-success mr-2 mb-2", 3, "model"], ["label", "Save", "icon", "pi pi-plus", "styleClass", "p-button-warning mr-2 mb-2", 3, "model"], ["label", "Save", "icon", "pi pi-plus", "styleClass", "p-button-help mr-2 mb-2", 3, "model"], ["label", "Save", "icon", "pi pi-plus", "styleClass", "p-button-danger mr-2 mb-2", 3, "model"], ["styleClass", "mr-2 mb-2 px-3"], ["alt", "logo", "src", "https://primefaces.org/primeng/assets/showcase/images/primeng-icon.svg", 2, "width", "1.5rem"], ["styleClass", "p-button-outlined mr-2 mb-2"], [1, "ml-2", "font-bold"], ["pButton", "", "pRipple", "", "icon", "pi pi-star-fill", 1, "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "label", "Submit", "icon", "pi pi-bookmark", 1, "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "label", "Submit", "icon", "pi pi-bookmark", "iconPos", "right", 1, "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Primary", 1, "p-button-raised", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Secondary", 1, "p-button-raised", "p-button-secondary", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Success", 1, "p-button-raised", "p-button-success", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Info", 1, "p-button-raised", "p-button-info", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Warning", 1, "p-button-raised", "p-button-warning", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Help", 1, "p-button-raised", "p-button-help", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Danger", 1, "p-button-raised", "p-button-danger", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Primary", 1, "p-button-rounded", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Secondary", 1, "p-button-rounded", "p-button-secondary", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Success", 1, "p-button-rounded", "p-button-success", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Info", 1, "p-button-rounded", "p-button-info", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Warning", 1, "p-button-rounded", "p-button-warning", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Help", 1, "p-button-rounded", "p-button-help", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Danger", 1, "p-button-rounded", "p-button-danger", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-check", 1, "p-button-rounded", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-bookmark", 1, "p-button-rounded", "p-button-secondary", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-search", 1, "p-button-rounded", "p-button-success", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-user", 1, "p-button-rounded", "p-button-info", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-bell", 1, "p-button-rounded", "p-button-warning", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-heart", 1, "p-button-rounded", "p-button-help", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-times", 1, "p-button-rounded", "p-button-danger", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-check", 1, "p-button-rounded", "p-button-text", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-bookmark", 1, "p-button-rounded", "p-button-secondary", "p-button-text", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-search", 1, "p-button-rounded", "p-button-success", "p-button-text", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-user", 1, "p-button-rounded", "p-button-info", "p-button-text", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-bell", 1, "p-button-rounded", "p-button-warning", "p-button-text", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-heart", 1, "p-button-rounded", "p-button-help", "p-button-text", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-times", 1, "p-button-rounded", "p-button-danger", "p-button-text", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-filter", 1, "p-button-rounded", "p-button-text", "p-button-plain", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-check", 1, "p-button-rounded", "p-button-outlined", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-bookmark", 1, "p-button-rounded", "p-button-secondary", "p-button-outlined", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-search", 1, "p-button-rounded", "p-button-success", "p-button-outlined", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-user", 1, "p-button-rounded", "p-button-info", "p-button-outlined", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-bell", 1, "p-button-rounded", "p-button-warning", "p-button-outlined", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-heart", 1, "p-button-rounded", "p-button-help", "p-button-outlined", "mr-2", "mb-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-times", 1, "p-button-rounded", "p-button-danger", "p-button-outlined", "mr-2", "mb-2"], ["label", "Search", "icon", "pi pi-search", "styleClass", "mr-2 mb-2", 3, "onClick", "loading"], ["label", "Search", "icon", "pi pi-search", "iconPos", "right", "styleClass", "mr-2 mb-2", 3, "onClick", "loading"], ["icon", "pi pi-search", "styleClass", "mr-2 mb-2", 3, "onClick", "loading"], ["label", "Search", "styleClass", "mr-2 mb-2", 3, "onClick", "loading"]],
      template: function ButtonDemoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Default");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "button", 3)(6, "button", 4)(7, "p-button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2)(9, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Severities");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "button", 6)(12, "button", 7)(13, "button", 8)(14, "button", 9)(15, "button", 10)(16, "button", 11)(17, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2)(19, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Text");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "button", 13)(22, "button", 14)(23, "button", 15)(24, "button", 16)(25, "button", 17)(26, "button", 18)(27, "button", 19)(28, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2)(30, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Outlined");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "button", 21)(33, "button", 22)(34, "button", 23)(35, "button", 24)(36, "button", 25)(37, "button", 26)(38, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2)(40, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Button Set");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "button", 29)(44, "button", 30)(45, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 2)(47, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "SplitButton");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "p-splitButton", 32)(50, "p-splitButton", 33)(51, "p-splitButton", 34)(52, "p-splitButton", 35)(53, "p-splitButton", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 2)(55, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Templating");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p-button", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p-button", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "PrimeNG");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 1)(64, "div", 2)(65, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Icons");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "button", 41)(68, "button", 42)(69, "button", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 2)(71, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Raised");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "button", 44)(74, "button", 45)(75, "button", 46)(76, "button", 47)(77, "button", 48)(78, "button", 49)(79, "button", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 2)(81, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Rounded");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "button", 51)(84, "button", 52)(85, "button", 53)(86, "button", 54)(87, "button", 55)(88, "button", 56)(89, "button", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 2)(91, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Rounded Icons");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "button", 58)(94, "button", 59)(95, "button", 60)(96, "button", 61)(97, "button", 62)(98, "button", 63)(99, "button", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 2)(101, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Rounded Text");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "button", 65)(104, "button", 66)(105, "button", 67)(106, "button", 68)(107, "button", 69)(108, "button", 70)(109, "button", 71)(110, "button", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 2)(112, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Rounded Outlined");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "button", 73)(115, "button", 74)(116, "button", 75)(117, "button", 76)(118, "button", 77)(119, "button", 78)(120, "button", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 2)(122, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Loading");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p-button", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function ButtonDemoComponent_Template_p_button_onClick_124_listener() {
            return ctx.load(0);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p-button", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function ButtonDemoComponent_Template_p_button_onClick_125_listener() {
            return ctx.load(1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p-button", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function ButtonDemoComponent_Template_p_button_onClick_126_listener() {
            return ctx.load(2);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p-button", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function ButtonDemoComponent_Template_p_button_onClick_127_listener() {
            return ctx.load(3);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](49);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.items);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.items);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.items);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.items);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.items);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](71);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.loading[0]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.loading[1]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.loading[2]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.loading[3]);
        }
      },
      dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_1__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_1__.Button, primeng_ripple__WEBPACK_IMPORTED_MODULE_2__.Ripple, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_3__.SplitButton],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 61710:
/*!*******************************************************************!*\
  !*** ./src/app/demo/components/uikit/button/buttondemo.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonDemoModule: () => (/* binding */ ButtonDemoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _buttondemo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttondemo-routing.module */ 20607);
/* harmony import */ var _buttondemo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttondemo.component */ 83343);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/splitbutton */ 59520);
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/togglebutton */ 95656);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);








class ButtonDemoModule {
  static {
    this.ɵfac = function ButtonDemoModule_Factory(t) {
      return new (t || ButtonDemoModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: ButtonDemoModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _buttondemo_routing_module__WEBPACK_IMPORTED_MODULE_0__.ButtonDemoRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6__.SplitButtonModule, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_7__.ToggleButtonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ButtonDemoModule, {
    declarations: [_buttondemo_component__WEBPACK_IMPORTED_MODULE_1__.ButtonDemoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _buttondemo_routing_module__WEBPACK_IMPORTED_MODULE_0__.ButtonDemoRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6__.SplitButtonModule, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_7__.ToggleButtonModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_uikit_button_buttondemo_module_ts.js.map