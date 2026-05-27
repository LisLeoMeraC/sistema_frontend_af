"use strict";
(self["webpackChunksakai"] = self["webpackChunksakai"] || []).push([["src_app_demo_components_landing_landing_module_ts"],{

/***/ 68351:
/*!*******************************************************************!*\
  !*** ./src/app/demo/components/landing/landing-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingRoutingModule: () => (/* binding */ LandingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.component */ 23471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




class LandingRoutingModule {
  static {
    this.ɵfac = function LandingRoutingModule_Factory(t) {
      return new (t || LandingRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: LandingRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
        path: '',
        component: _landing_component__WEBPACK_IMPORTED_MODULE_0__.LandingComponent
      }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LandingRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 23471:
/*!**************************************************************!*\
  !*** ./src/app/demo/components/landing/landing.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingComponent: () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/layout/service/app.layout.service */ 27693);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/divider */ 36171);
/* harmony import */ var primeng_styleclass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/styleclass */ 50053);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 49136);






class LandingComponent {
  constructor(layoutService, router) {
    this.layoutService = layoutService;
    this.router = router;
  }
  static {
    this.ɵfac = function LandingComponent_Factory(t) {
      return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LandingComponent,
      selectors: [["app-landing"]],
      decls: 309,
      vars: 5,
      consts: [[1, "surface-0", "flex", "justify-content-center"], ["id", "home", 1, "landing-wrapper", "overflow-hidden"], [1, "py-4", "px-4", "mx-0", "md:mx-6", "lg:mx-8", "lg:px-8", "flex", "align-items-center", "justify-content-between", "relative", "lg:static", "mb-3"], ["href", "#", 1, "flex", "align-items-center"], ["alt", "Sakai Logo", "height", "50", 1, "mr-0", "lg:mr-2", 3, "src"], [1, "text-900", "font-medium", "text-2xl", "line-height-3", "mr-8"], ["pRipple", "", "pStyleClass", "@next", "enterClass", "hidden", "leaveToClass", "hidden", 1, "cursor-pointer", "block", "lg:hidden", "text-700", 3, "hideOnOutsideClick"], [1, "pi", "pi-bars", "text-4xl"], [1, "align-items-center", "surface-0", "flex-grow-1", "justify-content-between", "hidden", "lg:flex", "absolute", "lg:static", "w-full", "left-0", "px-6", "lg:px-0", "z-2", 2, "top", "85%"], [1, "list-none", "p-0", "m-0", "flex", "lg:align-items-center", "select-none", "flex-column", "lg:flex-row", "cursor-pointer"], ["pRipple", "", 1, "flex", "m-0", "md:ml-5", "px-0", "py-3", "text-900", "font-medium", "line-height-3", 3, "click"], [1, "flex", "justify-content-between", "lg:block", "border-top-1", "lg:border-top-none", "surface-border", "py-3", "lg:py-0", "mt-3", "lg:mt-0"], ["pButton", "", "pRipple", "", "label", "Login", 1, "p-button-text", "p-button-rounded", "border-none", "font-light", "line-height-2", "text-blue-500"], ["pButton", "", "pRipple", "", "label", "Register", 1, "p-button-rounded", "border-none", "ml-5", "font-light", "line-height-2", "bg-blue-500", "text-white"], ["id", "hero", 1, "grid", "py-4", "px-4", "lg:px-8", "relative"], [1, "mx-4", "md:mx-8", "mt-0", "md:mt-4"], [1, "text-6xl", "font-bold", "text-gray-900", "line-height-2"], [1, "font-light", "block"], [1, "font-normal", "text-2xl", "line-height-3", "md:mt-3", "text-gray-700"], ["pButton", "", "pRipple", "", "type", "button", "label", "Get Started", 1, "p-button-rounded", "text-xl", "border-none", "mt-3", "bg-blue-500", "font-normal", "line-height-3", "px-3", "text-white"], ["src", "assets/demo/images/landing/screen-1.png", "alt", "", 1, "sm:mt-5", "md:mt-0", 2, "right", "10%"], ["id", "features", 1, "py-4", "px-4", "lg:px-8", "mt-5", "mx-0", "lg:mx-8"], [1, "grid", "justify-content-center"], [1, "col-12", "text-center", "mt-8", "mb-4"], [1, "text-900", "font-normal", "mb-2"], [1, "text-600", "text-2xl"], [1, "col-12", "md:col-12", "lg:col-4", "p-0", "lg:pr-5", "lg:pb-5", "mt-4", "lg:mt-0"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(253, 228, 165, 0.2),rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2),rgba(187, 199, 205, 0.2))"], [1, "p-3", "surface-card", "h-full", 2, "border-radius", "8px"], [1, "flex", "align-items-center", "justify-content-center", "bg-yellow-200", "mb-3", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-users", "text-2xl", "text-yellow-700"], [1, "mb-2", "text-900"], [1, "text-600"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(145,226,237,0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))"], [1, "flex", "align-items-center", "justify-content-center", "bg-cyan-200", "mb-3", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-palette", "text-2xl", "text-cyan-700"], [1, "col-12", "md:col-12", "lg:col-4", "p-0", "lg:pb-5", "mt-4", "lg:mt-0"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(172, 180, 223, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(246, 158, 188, 0.2))"], [1, "flex", "align-items-center", "justify-content-center", "bg-indigo-200", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-map", "text-2xl", "text-indigo-700"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2),rgba(145, 210, 204, 0.2))"], [1, "flex", "align-items-center", "justify-content-center", "bg-bluegray-200", "mb-3", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-id-card", "text-2xl", "text-bluegray-700"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(145, 226, 237, 0.2),rgba(160, 210, 250, 0.2))"], [1, "flex", "align-items-center", "justify-content-center", "bg-orange-200", "mb-3", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-star", "text-2xl", "text-orange-700"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(251, 199, 145, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(212, 162, 221, 0.2))"], [1, "flex", "align-items-center", "justify-content-center", "bg-pink-200", "mb-3", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-moon", "text-2xl", "text-pink-700"], [1, "col-12", "md:col-12", "lg:col-4", "p-0", "lg:pr-5", "mt-4", "lg:mt-0"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(160, 210, 250, 0.2)), linear-gradient(180deg, rgba(187, 199, 205, 0.2), rgba(145, 210, 204, 0.2))"], [1, "flex", "align-items-center", "justify-content-center", "bg-teal-200", "mb-3", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-shopping-cart", "text-2xl", "text-teal-700"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(251, 199, 145, 0.2), rgba(160, 210, 250, 0.2))"], [1, "flex", "align-items-center", "justify-content-center", "bg-blue-200", "mb-3", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-globe", "text-2xl", "text-blue-700"], [1, "col-12", "md:col-12", "lg:col-4", "p-0", "lg-4", "mt-4", "lg:mt-0"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(160, 210, 250, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(246, 158, 188, 0.2), rgba(212, 162, 221, 0.2))"], [1, "flex", "align-items-center", "justify-content-center", "bg-purple-200", "mb-3", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-eye", "text-2xl", "text-purple-700"], [1, "col-12", "mt-8", "mb-8", "p-2", "md:p-8", 2, "border-radius", "20px", "background", "linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EFE1AF 0%, #C3DCFA 100%)"], [1, "flex", "flex-column", "justify-content-center", "align-items-center", "text-center", "px-3", "py-3", "md:py-0"], [1, "text-gray-900", "mb-2"], [1, "text-gray-600", "text-2xl"], [1, "text-gray-900", "sm:line-height-2", "md:line-height-4", "text-2xl", "mt-4", 2, "max-width", "800px"], ["src", "assets/demo/images/landing/peak-logo.svg", "alt", "Company logo", 1, "mt-4"], ["id", "highlights", 1, "py-4", "px-4", "lg:px-8", "mx-0", "my-6", "lg:mx-8"], [1, "text-center"], [1, "grid", "mt-8", "pb-2", "md:pb-8"], [1, "flex", "justify-content-center", "col-12", "lg:col-6", "bg-purple-100", "p-0", "flex-order-1", "lg:flex-order-0", 2, "border-radius", "8px"], ["src", "assets/demo/images/landing/mockup.svg", "alt", "mockup mobile", 1, "w-11"], [1, "col-12", "lg:col-6", "my-auto", "flex", "flex-column", "lg:align-items-end", "text-center", "lg:text-right"], [1, "flex", "align-items-center", "justify-content-center", "bg-purple-200", "align-self-center", "lg:align-self-end", 2, "width", "4.2rem", "height", "4.2rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-mobile", "text-5xl", "text-purple-700"], [1, "line-height-1", "text-900", "text-4xl", "font-normal"], [1, "text-700", "text-2xl", "line-height-3", "ml-0", "md:ml-2", 2, "max-width", "650px"], [1, "grid", "my-8", "pt-2", "md:pt-8"], [1, "col-12", "lg:col-6", "my-auto", "flex", "flex-column", "text-center", "lg:text-left", "lg:align-items-start"], [1, "flex", "align-items-center", "justify-content-center", "bg-yellow-200", "align-self-center", "lg:align-self-start", 2, "width", "4.2rem", "height", "4.2rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-desktop", "text-5xl", "text-yellow-700"], [1, "text-700", "text-2xl", "line-height-3", "mr-0", "md:mr-2", 2, "max-width", "650px"], [1, "flex", "justify-content-end", "flex-order-1", "sm:flex-order-2", "col-12", "lg:col-6", "bg-yellow-100", "p-0", 2, "border-radius", "8px"], ["src", "assets/demo/images/landing/mockup-desktop.svg", "alt", "mockup", 1, "w-11"], ["id", "pricing", 1, "py-4", "px-4", "lg:px-8", "my-2", "md:my-4"], [1, "grid", "justify-content-between", "mt-8", "md:mt-0"], [1, "col-12", "lg:col-4", "p-0", "md:p-3"], [1, "p-3", "flex", "flex-column", "border-200", "pricing-card", "cursor-pointer", 2, "border", "2px solid", "border-radius", "10px"], [1, "text-900", "text-center", "my-5"], ["src", "assets/demo/images/landing/free.svg", "alt", "free", 1, "w-10", "h-10", "mx-auto"], [1, "my-5", "text-center"], [1, "text-5xl", "font-bold", "mr-2", "text-900"], ["pButton", "", "pRipple", "", "label", "Get Started", 1, "block", "mx-auto", "mt-4", "p-button-rounded", "border-none", "ml-3", "font-light", "line-height-2", "bg-blue-500", "text-white"], [1, "w-full", "bg-surface-200"], [1, "my-5", "list-none", "p-0", "flex", "text-900", "flex-column"], [1, "py-2"], [1, "pi", "pi-fw", "pi-check", "text-xl", "text-cyan-500", "mr-2"], [1, "text-xl", "line-height-3"], [1, "col-12", "lg:col-4", "p-0", "md:p-3", "mt-4", "md:mt-0"], ["src", "assets/demo/images/landing/startup.svg", "alt", "startup", 1, "w-10", "h-10", "mx-auto"], ["pButton", "", "pRipple", "", "label", "Try Free", 1, "block", "mx-auto", "mt-4", "p-button-rounded", "border-none", "ml-3", "font-light", "line-height-2", "bg-blue-500", "text-white"], ["src", "assets/demo/images/landing/enterprise.svg", "alt", "enterprise", 1, "w-10", "h-10", "mx-auto"], ["pButton", "", "pRipple", "", "label", "Get a Quote", 1, "block", "mx-auto", "mt-4", "p-button-rounded", "border-none", "ml-3", "font-light", "line-height-2", "bg-blue-500", "text-white"], [1, "py-4", "px-4", "mx-0", "mt-8", "lg:mx-8"], [1, "grid", "justify-content-between"], [1, "col-12", "md:col-2", 2, "margin-top", "-1.5rem"], [1, "flex", "flex-wrap", "align-items-center", "justify-content-center", "md:justify-content-start", "md:mb-0", "mb-3", "cursor-pointer", 3, "click"], ["alt", "footer sections", "width", "50", "height", "50", 1, "mr-2", 3, "src"], [1, "font-medium", "text-3xl", "text-900"], [1, "col-12", "md:col-10", "lg:col-7"], [1, "grid", "text-center", "md:text-left"], [1, "col-12", "md:col-3"], [1, "font-medium", "text-2xl", "line-height-3", "mb-3", "text-900"], [1, "line-height-3", "text-xl", "block", "cursor-pointer", "mb-2", "text-700"], [1, "line-height-3", "text-xl", "block", "cursor-pointer", "text-700"], [1, "col-12", "md:col-3", "mt-4", "md:mt-0"], ["src", "assets/demo/images/landing/new-badge.svg", 1, "ml-2"]],
      template: function LandingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "SAKAI");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "ul", 9)(11, "li")(12, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_12_listener() {
            return ctx.router.navigate(["/pages/landing"], {
              fragment: "home"
            });
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li")(16, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_16_listener() {
            return ctx.router.navigate(["/pages/landing"], {
              fragment: "features"
            });
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Features");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li")(20, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_20_listener() {
            return ctx.router.navigate(["/pages/landing"], {
              fragment: "highlights"
            });
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Highlights");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_24_listener() {
            return ctx.router.navigate(["/pages/landing"], {
              fragment: "pricing"
            });
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Pricing");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "button", 12)(29, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14)(31, "div", 15)(32, "h1", 16)(33, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Eu sem integer");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "eget magna fermentum");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Sed blandit libero volutpat sed cras. Fames ac turpis egestas integer. Placerat in egestas erat... ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 21)(41, "div", 22)(42, "div", 23)(43, "h2", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Marvelous Features");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Placerat in egestas erat...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 26)(48, "div", 27)(49, "div", 28)(50, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h5", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Easy to Use");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Posuere morbi leo urna molestie.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 26)(57, "div", 33)(58, "div", 28)(59, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "h5", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Fresh Design");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Semper risus in hendrerit.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 36)(66, "div", 37)(67, "div", 28)(68, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "h5", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Well Documented");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Non arcu risus quis varius quam quisque.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 26)(75, "div", 40)(76, "div", 28)(77, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "i", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "h5", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Responsive Layout");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Nulla malesuada pellentesque elit.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 26)(84, "div", 43)(85, "div", 28)(86, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "i", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "h5", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Clean Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Condimentum lacinia quis vel eros.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 36)(93, "div", 46)(94, "div", 28)(95, "div", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "i", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "h5", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Dark Mode");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Convallis tellus id interdum velit laoreet.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 49)(102, "div", 50)(103, "div", 28)(104, "div", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "i", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "h5", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Ready to Use");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Mauris sit amet massa vitae.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 49)(111, "div", 53)(112, "div", 28)(113, "div", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "i", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "h5", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Modern Practices");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Elementum nibh tellus molestie nunc non.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 56)(120, "div", 57)(121, "div", 28)(122, "div", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "i", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "h5", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "Privacy");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Neque egestas congue quisque.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 60)(129, "div", 61)(130, "h3", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Jos\u00E9phine Miller");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "span", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Peak Interactive");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "p", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "\u201CDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\u201D");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "img", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 66)(138, "div", 67)(139, "h2", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Powerful Everywhere");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Amet consectetur adipiscing elit...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 68)(144, "div", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "img", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 71)(147, "div", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "i", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "h2", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "Congue Quisque Egestas");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "span", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Sit amet mattis vulputate enim nulla aliquet.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 76)(154, "div", 77)(155, "div", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "i", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "h2", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Celerisque Eu Ultrices");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "span", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Adipiscing commodo elit at imperdiet dui. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Suspendisse in est ante in. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](162, "img", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 83)(164, "div", 67)(165, "h2", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Matchless Pricing");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Amet consectetur adipiscing elit...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 84)(170, "div", 85)(171, "div", 86)(172, "h3", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "Free");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](174, "img", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "div", 89)(176, "span", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "$0");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "per month");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](180, "button", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "p-divider", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "ul", 93)(183, "li", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](184, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "span", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "Responsive Layout");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "li", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](188, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "span", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "Unlimited Push Messages");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "li", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](192, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "span", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "50 Support Ticket");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "li", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](196, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "span", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "Free Shipping");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 97)(200, "div", 86)(201, "h3", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "Startup");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](203, "img", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div", 89)(205, "span", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "$1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "per month");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](209, "button", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](210, "p-divider", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "ul", 93)(212, "li", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](213, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "span", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "Responsive Layout");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "li", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](217, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "span", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "Unlimited Push Messages");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "li", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](221, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "span", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "50 Support Ticket");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "li", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](225, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "span", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "Free Shipping");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 97)(229, "div", 86)(230, "h3", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, "Enterprise");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](232, "img", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "div", 89)(234, "span", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](235, "$999");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "per month");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](238, "button", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](239, "p-divider", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "ul", 93)(241, "li", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](242, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "span", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](244, "Responsive Layout");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "li", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](246, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "span", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, "Unlimited Push Messages");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "li", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](250, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "span", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, "50 Support Ticket");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "li", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](254, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "span", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, "Free Shipping");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "div", 102)(258, "div", 103)(259, "div", 104)(260, "a", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_260_listener() {
            return ctx.router.navigate(["/pages/landing"], {
              fragment: "home"
            });
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](261, "img", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "h4", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, "SAKAI");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "div", 108)(265, "div", 109)(266, "div", 110)(267, "h4", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, "Company");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "a", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270, "About Us");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "a", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, "News");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "a", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](274, "Investor Relations");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "a", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, "Careers");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "a", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](278, "Media Kit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "div", 114)(280, "h4", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](281, "Resources");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "a", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](283, "Get Started");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "a", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, "Learn");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "a", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](287, "Case Studies");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "div", 114)(289, "h4", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, "Community");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "a", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](292, "Discord");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "a", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](294, "Events");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](295, "img", 115);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "a", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](297, "FAQ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "a", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](299, "Blog");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "div", 114)(301, "h4", 111);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](302, "Legal");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "a", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, "Brand Policy");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "a", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](306, "Privacy Policy");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "a", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](308, "Terms of Service");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/layout/images/", ctx.layoutService.config.colorScheme === "light" ? "logo-dark" : "logo-white", ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hideOnOutsideClick", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](254);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/layout/images/", ctx.layoutService.config.colorScheme === "light" ? "logo-dark" : "logo-white", ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      },
      dependencies: [primeng_divider__WEBPACK_IMPORTED_MODULE_3__.Divider, primeng_styleclass__WEBPACK_IMPORTED_MODULE_4__.StyleClass, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective],
      styles: ["#hero[_ngcontent-%COMP%] {\n  background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EEEFAF 0%, #C3E3FA 100%);\n  height: 700px;\n  overflow: hidden;\n}\n\n.pricing-card[_ngcontent-%COMP%]:hover {\n  border: 2px solid var(--cyan-200) !important;\n}\n\n@media screen and (min-width: 768px) {\n  #hero[_ngcontent-%COMP%] {\n    clip-path: ellipse(150% 87% at 93% 13%);\n    height: 530px;\n  }\n}\n@media screen and (min-width: 1300px) {\n  #hero[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    position: absolute;\n    transform: scale(1.2);\n    top: 15%;\n  }\n  #hero[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    max-width: 450px;\n  }\n}\n@media screen and (max-width: 1300px) {\n  #hero[_ngcontent-%COMP%] {\n    height: 600px;\n  }\n  #hero[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    position: static;\n    transform: scale(1);\n    margin-left: auto;\n  }\n  #hero[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  #hero[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNRO0VBQ0ksaUtBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFBWjs7QUFHUTtFQUNJLDRDQUFBO0FBQVo7O0FBR1E7RUFDSTtJQUVJLHVDQUFBO0lBQ0EsYUFBQTtFQUFkO0FBQ0Y7QUFHUTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSxxQkFBQTtJQUNBLFFBQUE7RUFEZDtFQUlNO0lBQ1EsZ0JBQUE7RUFGZDtBQUNGO0FBS1E7RUFDSTtJQUNJLGFBQUE7RUFIZDtFQU1NO0lBQ0ksZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0VBSlY7RUFPTTtJQUNJLFdBQUE7RUFMVjtFQVFNO0lBQ1EsV0FBQTtJQUNBLGVBQUE7RUFOZDtBQUNGIiwiZmlsZSI6ImxhbmRpbmcuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICNoZXJve1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpKSwgcmFkaWFsLWdyYWRpZW50KDc3LjM2JSAyNTYuOTclIGF0IDc3LjM2JSA1Ny41MiUsICNFRUVGQUYgMCUsICNDM0UzRkEgMTAwJSk7XG4gICAgICAgICAgICBoZWlnaHQ6NzAwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAucHJpY2luZy1jYXJkOmhvdmVye1xuICAgICAgICAgICAgYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1jeWFuLTIwMCkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAjaGVyb3tcbiAgICAgICAgICAgICAgICAtd2Via2l0LWNsaXAtcGF0aDogZWxsaXBzZSgxNTAlIDg3JSBhdCA5MyUgMTMlKTtcbiAgICAgICAgICAgICAgICBjbGlwLXBhdGg6IGVsbGlwc2UoMTUwJSA4NyUgYXQgOTMlIDEzJSk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzMDBweCl7XG4gICAgICAgICAgICAjaGVybyA+IGltZyB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgxLjIpO1xuICAgICAgICAgICAgICAgIHRvcDoxNSU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgI2hlcm8gPiBkaXYgPiBwIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KXtcbiAgICAgICAgICAgICNoZXJvIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICNoZXJvID4gaW1nIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOnN0YXRpYztcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgICNoZXJvID4gZGl2IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgI2hlcm8gPiBkaXYgPiBwIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1E7RUFDSSxpS0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUFaOztBQUdRO0VBQ0ksNENBQUE7QUFBWjs7QUFHUTtFQUNJO0lBRUksdUNBQUE7SUFDQSxhQUFBO0VBQWQ7QUFDRjtBQUdRO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLHFCQUFBO0lBQ0EsUUFBQTtFQURkO0VBSU07SUFDUSxnQkFBQTtFQUZkO0FBQ0Y7QUFLUTtFQUNJO0lBQ0ksYUFBQTtFQUhkO0VBTU07SUFDSSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7RUFKVjtFQU9NO0lBQ0ksV0FBQTtFQUxWO0VBUU07SUFDUSxXQUFBO0lBQ0EsZUFBQTtFQU5kO0FBQ0Y7QUFBQSxnMkVBQWcyRSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAjaGVyb3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSksIHJhZGlhbC1ncmFkaWVudCg3Ny4zNiUgMjU2Ljk3JSBhdCA3Ny4zNiUgNTcuNTIlLCAjRUVFRkFGIDAlLCAjQzNFM0ZBIDEwMCUpO1xuICAgICAgICAgICAgaGVpZ2h0OjcwMHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByaWNpbmctY2FyZDpob3ZlcntcbiAgICAgICAgICAgIGJvcmRlcjoycHggc29saWQgdmFyKC0tY3lhbi0yMDApICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgI2hlcm97XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IGVsbGlwc2UoMTUwJSA4NyUgYXQgOTMlIDEzJSk7XG4gICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBlbGxpcHNlKDE1MCUgODclIGF0IDkzJSAxMyUpO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzAwcHgpe1xuICAgICAgICAgICAgI2hlcm8gPiBpbWcge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMS4yKTtcbiAgICAgICAgICAgICAgICB0b3A6MTUlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICNoZXJvID4gZGl2ID4gcCB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCl7XG4gICAgICAgICAgICAjaGVybyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAjaGVybyA+IGltZyB7XG4gICAgICAgICAgICBwb3NpdGlvbjpzdGF0aWM7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAjaGVybyA+IGRpdiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgICNoZXJvID4gZGl2ID4gcCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 33838:
/*!***********************************************************!*\
  !*** ./src/app/demo/components/landing/landing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingModule: () => (/* binding */ LandingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-routing.module */ 68351);
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.component */ 23471);
/* harmony import */ var primeng_styleclass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/styleclass */ 50053);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/divider */ 36171);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/chart */ 8564);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/panel */ 55222);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);









class LandingModule {
  static {
    this.ɵfac = function LandingModule_Factory(t) {
      return new (t || LandingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: LandingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandingRoutingModule, primeng_divider__WEBPACK_IMPORTED_MODULE_4__.DividerModule, primeng_styleclass__WEBPACK_IMPORTED_MODULE_5__.StyleClassModule, primeng_chart__WEBPACK_IMPORTED_MODULE_6__.ChartModule, primeng_panel__WEBPACK_IMPORTED_MODULE_7__.PanelModule, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LandingModule, {
    declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_1__.LandingComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandingRoutingModule, primeng_divider__WEBPACK_IMPORTED_MODULE_4__.DividerModule, primeng_styleclass__WEBPACK_IMPORTED_MODULE_5__.StyleClassModule, primeng_chart__WEBPACK_IMPORTED_MODULE_6__.ChartModule, primeng_panel__WEBPACK_IMPORTED_MODULE_7__.PanelModule, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_landing_landing_module_ts.js.map