"use strict";
(self["webpackChunksakai"] = self["webpackChunksakai"] || []).push([["main"],{

/***/ 94114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _layout_app_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/app.layout.component */ 22333);
/* harmony import */ var _demo_components_mydashboard_mydashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo/components/mydashboard/mydashboard.component */ 30811);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);





class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot([{
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
      }, {
        path: '',
        component: _layout_app_layout_component__WEBPACK_IMPORTED_MODULE_0__.AppLayoutComponent,
        children: [{
          path: 'dashboard',
          loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-panelmenu_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-styleclass_mjs"), __webpack_require__.e("default-src_app_demo_components_dashboard_dashboard-routing_module_ts"), __webpack_require__.e("src_app_demo_components_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/components/dashboard/dashboard.module */ 35422)).then(m => m.DashboardModule)
        }, {
          path: 'uikit',
          loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_uikit_uikit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/components/uikit/uikit.module */ 48098)).then(m => m.UikitModule)
        }, {
          path: 'blocks',
          loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-checkbox_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-password_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-chip_mjs"), __webpack_require__.e("src_app_demo_components_primeblocks_primeblocks_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/components/primeblocks/primeblocks.module */ 3486)).then(m => m.PrimeBlocksModule)
        }, {
          path: 'mydashboard',
          component: _demo_components_mydashboard_mydashboard_component__WEBPACK_IMPORTED_MODULE_1__.MydashboardComponent
        }, {
          path: 'mydashboard',
          component: _demo_components_mydashboard_mydashboard_component__WEBPACK_IMPORTED_MODULE_1__.MydashboardComponent
        },
        // Carga perezosa para el módulo de administrador
        {
          path: 'administrador',
          loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-panelmenu_mjs"), __webpack_require__.e("default-src_app_demo_service_cliente_service_ts-node_modules_rxjs_dist_esm_internal_operators-b3281e"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-styleclass_mjs"), __webpack_require__.e("default-src_app_demo_components_secretaria_caja_caja_component_ts-src_app_demo_components_sec-2f2a19"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-fieldset_mjs-node_modules_primeng_fesm2022_prim-b028b5"), __webpack_require__.e("default-src_app_demo_components_dashboard_dashboard-routing_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_components_Administrador_administrador_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/components/Administrador/administrador.module */ 48258)).then(m => m.AdministradorModule)
        }, {
          path: 'secretaria',
          loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-checkbox_mjs"), __webpack_require__.e("default-src_app_demo_service_cliente_service_ts-node_modules_rxjs_dist_esm_internal_operators-b3281e"), __webpack_require__.e("default-src_app_demo_components_secretaria_caja_caja_component_ts-src_app_demo_components_sec-2f2a19"), __webpack_require__.e("default-node_modules_html2canvas_dist_html2canvas_js"), __webpack_require__.e("default-src_app_demo_components_uikit_table_tabledemo-routing_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_components_secretaria_secretaria_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/components/secretaria/secretaria.module */ 2930)).then(m => m.SecretariaModule)
        }, {
          path: 'asistente-factura',
          loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_demo_service_cliente_service_ts-node_modules_rxjs_dist_esm_internal_operators-b3281e"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_components_Asistente-factura_asistente-factura_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/components/Asistente-factura/asistente-factura.module */ 44150)).then(m => m.AsistenteFacturaModule)
        }, {
          path: 'caja-bancos',
          loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_demo_components_caja-bancos_caja-bancos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/components/caja-bancos/caja-bancos.module */ 62198)).then(m => m.CajaBancosModule)
        }]
      }, {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./demo/components/auth/auth.module */ 1288)).then(m => m.AuthModule)
      }, {
        path: 'landing',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-styleclass_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-divider_mjs-node_modules_primeng_fesm2022_prime-b64a27"), __webpack_require__.e("src_app_demo_components_landing_landing_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./demo/components/landing/landing.module */ 33838)).then(m => m.LandingModule)
      }, {
        path: '**',
        redirectTo: 'pages/notfound'
      }], {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        onSameUrlNavigation: 'reload'
      }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 20092:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/service/app.layout.service */ 27693);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);




class AppComponent {
  constructor(primengConfig, layoutService) {
    this.primengConfig = primengConfig;
    this.layoutService = layoutService;
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
    document.documentElement.style.fontSize = '14px';
    this.applyTheme();
  }
  applyTheme() {
    const themeLink = document.getElementById('theme-css');
    if (themeLink) {
      const newHref = `assets/layout/styles/theme/${this.layoutService.config.theme}/theme.css`;
      themeLink.setAttribute('href', newHref);
    }
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 50635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 20092);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 94114);
/* harmony import */ var _layout_app_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/app.layout.module */ 61088);
/* harmony import */ var _demo_service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo/service/product.service */ 102);
/* harmony import */ var _demo_service_country_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo/service/country.service */ 77339);
/* harmony import */ var _demo_service_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo/service/customer.service */ 37287);
/* harmony import */ var _demo_service_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo/service/event.service */ 56653);
/* harmony import */ var _demo_service_icon_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo/service/icon.service */ 62398);
/* harmony import */ var _demo_service_node_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./demo/service/node.service */ 93747);
/* harmony import */ var _demo_service_photo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./demo/service/photo.service */ 43257);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _demo_components_mydashboard_mydashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./demo/components/mydashboard/mydashboard.component */ 30811);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/togglebutton */ 95656);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/multiselect */ 92159);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/progressbar */ 21416);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/selectbutton */ 69656);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/slider */ 47763);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/rating */ 3015);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var _demo_components_Administrador_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./demo/components/Administrador/usuarios/usuarios.component */ 40721);
/* harmony import */ var _demo_service_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./demo/service/auth.interceptor */ 90177);
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/listbox */ 69607);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/autocomplete */ 38784);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/inputtextarea */ 87058);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/chart */ 8564);
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/locales/es */ 41565);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/menu */ 23673);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/tabview */ 634);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ 34456);













//New TODO mydasboard






























(0,_angular_common__WEBPACK_IMPORTED_MODULE_13__.registerLocaleData)(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_14__["default"], 'es');
class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
      providers: [_demo_service_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__.authInterceptorProviders, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__.LocationStrategy,
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_13__.PathLocationStrategy
      }, {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_15__.LOCALE_ID,
        useValue: 'es'
      }, _demo_service_country_service__WEBPACK_IMPORTED_MODULE_4__.CountryService, _demo_service_customer_service__WEBPACK_IMPORTED_MODULE_5__.CustomerService, _demo_service_event_service__WEBPACK_IMPORTED_MODULE_6__.EventService, _demo_service_icon_service__WEBPACK_IMPORTED_MODULE_7__.IconService, _demo_service_node_service__WEBPACK_IMPORTED_MODULE_8__.NodeService, _demo_service_photo_service__WEBPACK_IMPORTED_MODULE_9__.PhotoService, _demo_service_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService, primeng_api__WEBPACK_IMPORTED_MODULE_16__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_16__.ConfirmationService],
      imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _layout_app_layout_module__WEBPACK_IMPORTED_MODULE_2__.AppLayoutModule, primeng_table__WEBPACK_IMPORTED_MODULE_17__.TableModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, primeng_rating__WEBPACK_IMPORTED_MODULE_18__.RatingModule, primeng_listbox__WEBPACK_IMPORTED_MODULE_19__.ListboxModule, primeng_button__WEBPACK_IMPORTED_MODULE_20__.ButtonModule, primeng_slider__WEBPACK_IMPORTED_MODULE_21__.SliderModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_22__.InputTextModule, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_23__.ToggleButtonModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_24__.InputTextareaModule, primeng_chart__WEBPACK_IMPORTED_MODULE_25__.ChartModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_26__.RippleModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_27__.MultiSelectModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_28__.TabViewModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_29__.DropdownModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_30__.ProgressBarModule, primeng_toast__WEBPACK_IMPORTED_MODULE_31__.ToastModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_33__.DialogModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_34__.SelectButtonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_35__.HttpClientModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_36__.AutoCompleteModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_37__.TooltipModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_38__.ConfirmDialogModule, primeng_menu__WEBPACK_IMPORTED_MODULE_39__.MenuModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _demo_components_mydashboard_mydashboard_component__WEBPACK_IMPORTED_MODULE_10__.MydashboardComponent, _demo_components_Administrador_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_11__.UsuariosComponent],
    imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _layout_app_layout_module__WEBPACK_IMPORTED_MODULE_2__.AppLayoutModule, primeng_table__WEBPACK_IMPORTED_MODULE_17__.TableModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, primeng_rating__WEBPACK_IMPORTED_MODULE_18__.RatingModule, primeng_listbox__WEBPACK_IMPORTED_MODULE_19__.ListboxModule, primeng_button__WEBPACK_IMPORTED_MODULE_20__.ButtonModule, primeng_slider__WEBPACK_IMPORTED_MODULE_21__.SliderModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_22__.InputTextModule, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_23__.ToggleButtonModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_24__.InputTextareaModule, primeng_chart__WEBPACK_IMPORTED_MODULE_25__.ChartModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_26__.RippleModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_27__.MultiSelectModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_28__.TabViewModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_29__.DropdownModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_30__.ProgressBarModule, primeng_toast__WEBPACK_IMPORTED_MODULE_31__.ToastModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormsModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_33__.DialogModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_34__.SelectButtonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_35__.HttpClientModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_36__.AutoCompleteModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_37__.TooltipModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_38__.ConfirmDialogModule, primeng_menu__WEBPACK_IMPORTED_MODULE_39__.MenuModule]
  });
})();

/***/ }),

/***/ 40721:
/*!******************************************************************************!*\
  !*** ./src/app/demo/components/Administrador/usuarios/usuarios.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsuariosComponent: () => (/* binding */ UsuariosComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_demo_service_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/user.service */ 25768);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/selectbutton */ 69656);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/confirmdialog */ 68160);















const _c0 = () => ({
  width: "350px"
});
const _c1 = () => ({
  width: "40vw"
});
function UsuariosComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44)(1, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsuariosComponent_ng_template_8_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.showModalDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function UsuariosComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Nombres");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Apellidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Rol");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Nombre de usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function UsuariosComponent_ng_template_10_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td")(12, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsuariosComponent_ng_template_10_Template_button_click_12_listener() {
      const usuario_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.showUpdateModal(usuario_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsuariosComponent_ng_template_10_Template_button_click_13_listener() {
      const usuario_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.confirmDeleteUsuario(usuario_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const usuario_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](usuario_r4.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](usuario_r4.apellido);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](usuario_r4.authorities[0].authority);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](usuario_r4.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](usuario_r4.password);
  }
}
function UsuariosComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No users found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function UsuariosComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading users data. Please wait.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class UsuariosComponent {
  constructor(fb, userService, messageService, confirmationService) {
    this.fb = fb;
    this.userService = userService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.passwordFieldType = 'password';
    this.displayModal = false;
    this.displayModalUpdate = false;
    this.roles = [];
    this.rolSeleccionado = '';
    this.usuarios = [];
    this.msgs = [];
    this.usuarioSeleccionado = null;
    this.registerForm = this.fb.group({
      nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      apellido: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      correo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      telefono: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]],
      rolFormulario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
    this.updateForm = this.fb.group({
      nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      apellido: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      correo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      telefono: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]],
      rolFormulario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
  }
  showModalDialog() {
    this.displayModal = true;
  }
  closeModalDialog() {
    this.displayModal = false;
    this.registerForm.reset();
  }
  onSubmit() {
    if (this.registerForm.invalid) {
      alert('Por favor complete todos los campos requeridos.');
      return;
    }
    const user = this.registerForm.value;
    user.rolFormulario = user.rolFormulario.name;
    this.userService.registrarUsuario(user).subscribe(data => {
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Usuario registrado correctamente'
      });
      this.closeModalDialog();
      this.obtenerUsuarios();
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Error al registrar usuario'
      });
    });
  }
  ngOnInit() {
    this.roles = [{
      name: 'Gerente',
      value: 1
    }, {
      name: 'Secretario/a',
      value: 2
    }, {
      name: 'Asistente de Facturas',
      value: 3
    }];
    this.obtenerUsuarios();
  }
  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
  obtenerUsuarios() {
    this.userService.obtenerUsuarios().subscribe(data => {
      this.usuarios = data;
    }, error => {
      console.log(error);
    });
  }
  eliminarUsuario(usuario) {
    this.userService.eliminarUsuario(usuario.id).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Usuario eliminado correctamente'
      });
      this.obtenerUsuarios();
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Error al eliminar usuario'
      });
    });
  }
  confirmDeleteUsuario(usuario) {
    this.confirmationService.confirm({
      key: 'confirm',
      message: `¿Estás seguro de que deseas eliminar a ${usuario.nombre} ${usuario.apellido}?`,
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      rejectLabel: 'No',
      accept: () => {
        this.eliminarUsuario(usuario);
      }
    });
  }
  showUpdateModal(usuario) {
    this.usuarioSeleccionado = usuario; // Asigna el usuario seleccionado
    this.updateForm.patchValue({
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      correo: usuario.correo,
      telefono: usuario.telefono,
      username: usuario.username,
      password: usuario.password,
      rolFormulario: this.roles.find(role => role.name === usuario.authorities[0].authority)
    });
    this.displayModalUpdate = true;
  }
  onUpdate() {
    const user = {
      id: this.usuarioSeleccionado.id,
      nombre: this.updateForm.get('nombre')?.value,
      apellido: this.updateForm.get('apellido')?.value,
      correo: this.updateForm.get('correo')?.value,
      telefono: this.updateForm.get('telefono')?.value,
      username: this.updateForm.get('username')?.value,
      password: this.updateForm.get('password')?.value,
      rolFormulario: this.updateForm.get('rolFormulario')?.value.name,
      enabled: this.usuarioSeleccionado.enabled
    };
    this.userService.actualizarUsuario(this.usuarioSeleccionado.id, user).subscribe(data => {
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Usuario actualizado correctamente'
      });
      this.closeUpdateModal();
      this.obtenerUsuarios();
    }, error => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Error al actualizar usuario'
      });
    });
  }
  closeUpdateModal() {
    this.displayModalUpdate = false;
    this.updateForm.reset();
  }
  static {
    this.ɵfac = function UsuariosComponent_Factory(t) {
      return new (t || UsuariosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_demo_service_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.ConfirmationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UsuariosComponent,
      selectors: [["app-usuarios"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService])],
      decls: 140,
      vars: 24,
      consts: [[1, "card", 2, "height", "30px"], [2, "margin-top", "-10px"], [1, "card"], ["responsiveLayout", "scroll", 3, "value", "paginator", "rows"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "loadingbody"], ["header", "Confirmaci\u00F3n", "key", "confirm", "icon", "pi pi-exclamation-triangle", "message", "Are you sure you want to proceed?", "acceptButtonStyleClass", "p-button-text", "rejectButtonStyleClass", "p-button-text"], [3, "visibleChange", "visible", "modal", "closable"], [3, "ngSubmit", "formGroup"], [2, "text-align", "center"], [1, "dialog-header", "cancel-button"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-times", 1, "p-button-danger", "mr-2", "mb-2", 3, "click"], [1, "grid", "p-fluid", "mt-3"], [1, "field", "col-12", "md:col-6"], [1, "p-inputgroup"], [1, "p-inputgroup-addon"], [1, "pi", "pi-user"], [1, "p-float-label"], ["type", "text", "pInputText", "", "formControlName", "nombre"], ["for", "nombre"], ["type", "text", "pInputText", "", "formControlName", "apellido"], ["for", "apellido"], [1, "pi", "pi-envelope"], ["type", "text", "pInputText", "", "formControlName", "correo"], ["for", "correo"], [1, "pi", "pi-phone"], ["type", "text", "pInputText", "", "formControlName", "telefono"], ["for", "telefono"], ["type", "text", "pInputText", "", "formControlName", "username", "autocomplete", "off"], ["for", "username"], [1, "pi", "pi-lock"], ["id", "password", "formControlName", "password", "pInputText", "", "autocomplete", "new-password", "placeholder", "Contrase\u00F1a", 3, "type"], ["for", "password"], [1, "p-inputgroup-addon", 2, "cursor", "pointer", 3, "click"], [3, "ngClass"], [1, "col-12", "md:col-12"], ["optionLabel", "name", "formControlName", "rolFormulario", 3, "options"], [1, "flex", "justify-content-end"], ["pButton", "", "label", "Registrar", "icon", "pi pi-save", "type", "submit"], ["type", "password", "pInputText", "", "formControlName", "password", "autocomplete", "new-password"], ["pButton", "", "label", "Actualizar", "icon", "pi pi-save", "type", "submit"], [1, "flex", "justify-content-between", "flex-column", "sm:flex-row"], ["pButton", "", "pRipple", "", "label", "Nuevo Usuario", "icon", "pi pi-plus", 1, "mr-2", "mb-2", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-pencil", 1, "p-button-success", "mb-2", "mr-2", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-trash", 1, "p-button-danger", "mr-2", "mb-2", 3, "click"], ["colspan", "6"]],
      template: function UsuariosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0)(2, "h4", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Administraci\u00F3n de Usuarios");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Usuarios Registrados");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p-table", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, UsuariosComponent_ng_template_8_Template, 2, 0, "ng-template", 4)(9, UsuariosComponent_ng_template_9_Template, 13, 0, "ng-template", 5)(10, UsuariosComponent_ng_template_10_Template, 14, 5, "ng-template", 6)(11, UsuariosComponent_ng_template_11_Template, 3, 0, "ng-template", 7)(12, UsuariosComponent_ng_template_12_Template, 3, 0, "ng-template", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "p-confirmDialog", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p-dialog", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("visibleChange", function UsuariosComponent_Template_p_dialog_visibleChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.displayModal, $event) || (ctx.displayModal = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "form", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UsuariosComponent_Template_form_ngSubmit_15_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h3", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Nuevo Usuario");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13)(19, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsuariosComponent_Template_button_click_19_listener() {
            return ctx.closeModalDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15)(21, "div", 16)(22, "div", 17)(23, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Nombres");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 16)(30, "div", 17)(31, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Apellidos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 16)(38, "div", 17)(39, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Correo Electronico");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 16)(46, "div", 17)(47, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Nro. Celular");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 16)(54, "div", 17)(55, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "label", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Nombre de Usuario");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 16)(62, "div", 17)(63, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "label", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Contrase\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "span", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsuariosComponent_Template_span_click_69_listener() {
            return ctx.togglePasswordVisibility();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 38)(72, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Seleccione el rol del usuario");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "p-selectButton", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "p-footer", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "button", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "p-dialog", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("visibleChange", function UsuariosComponent_Template_p_dialog_visibleChange_78_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.displayModalUpdate, $event) || (ctx.displayModalUpdate = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "form", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UsuariosComponent_Template_form_ngSubmit_79_listener() {
            return ctx.onUpdate();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "h3", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Actualizaci\u00F3n de Usuario");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 13)(83, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsuariosComponent_Template_button_click_83_listener() {
            return ctx.closeUpdateModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 15)(85, "div", 16)(86, "div", 17)(87, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Nombres");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 16)(94, "div", 17)(95, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "label", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Apellidos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 16)(102, "div", 17)(103, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Correo Electronico");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 16)(110, "div", 17)(111, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "label", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Nro. Celular");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 16)(118, "div", 17)(119, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "label", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Nombre de Usuario");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 16)(126, "div", 17)(127, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "label", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Contrase\u00F1a");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 38)(134, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Seleccione el rol del usuario");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "p-selectButton", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "p-footer", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "button", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.usuarios)("paginator", true)("rows", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("visible", ctx.displayModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("modal", true)("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](51);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("type", ctx.passwordFieldType);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.passwordFieldType === "password" ? "pi pi-eye" : "pi pi-eye-slash");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.roles);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("visible", ctx.displayModalUpdate);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("modal", true)("closable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.updateForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.roles);
        }
      },
      dependencies: [primeng_table__WEBPACK_IMPORTED_MODULE_4__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_3__.Footer, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.Ripple, primeng_toast__WEBPACK_IMPORTED_MODULE_9__.Toast, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, primeng_dialog__WEBPACK_IMPORTED_MODULE_10__.Dialog, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_11__.SelectButton, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__.ConfirmDialog],
      styles: [".dialog-header[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.cancel-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzdWFyaW9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJ1c3Vhcmlvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhbmNlbC1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL0FkbWluaXN0cmFkb3IvdXN1YXJpb3MvdXN1YXJpb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQ0Esd2ZBQXdmIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2FuY2VsLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 30811:
/*!**********************************************************************!*\
  !*** ./src/app/demo/components/mydashboard/mydashboard.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MydashboardComponent: () => (/* binding */ MydashboardComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var src_app_demo_service_customer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/customer.service */ 37287);
/* harmony import */ var src_app_demo_service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/service/product.service */ 102);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/rating */ 3015);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/slider */ 47763);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/togglebutton */ 95656);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/multiselect */ 92159);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dropdown */ 26895);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/progressbar */ 21416);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 34456);


















const _c0 = ["filter"];
const _c1 = () => ["name", "country.name", "representative.name", "status"];
const _c2 = () => ({
  "width": "12rem"
});
const _c3 = () => ({
  "min-width": "12rem"
});
const _c4 = (a0, a1) => ({
  "true-icon pi-check-circle text-green-500": a0,
  "false-icon pi-times-circle text-pink-500 ": a1
});
function MydashboardComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MydashboardComponent_ng_template_7_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      const dt1_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.clear(dt1_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 20, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function MydashboardComponent_ng_template_7_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      const dt1_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onGlobalFilter(dt1_r4, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function MydashboardComponent_ng_template_8_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32)(1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Agent Picker");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function MydashboardComponent_ng_template_8_ng_template_14_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "assets/demo/images/avatar/", option_r7.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("alt", option_r7.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](option_r7.name);
  }
}
function MydashboardComponent_ng_template_8_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-multiSelect", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function MydashboardComponent_ng_template_8_ng_template_14_Template_p_multiSelect_onChange_0_listener($event) {
      const filter_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5).filterCallback;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](filter_r6($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MydashboardComponent_ng_template_8_ng_template_14_ng_template_1_Template, 4, 4, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", value_r8)("options", ctx_r2.representatives);
  }
}
function MydashboardComponent_ng_template_8_ng_template_27_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("customer-badge status-" + option_r11.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](option_r11.label);
  }
}
function MydashboardComponent_ng_template_8_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-dropdown", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function MydashboardComponent_ng_template_8_ng_template_27_Template_p_dropdown_onChange_0_listener($event) {
      const filter_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9).filterCallback;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](filter_r10($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MydashboardComponent_ng_template_8_ng_template_27_ng_template_1_Template, 2, 3, "ng-template", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r12 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", value_r12)("options", ctx_r2.statuses);
  }
}
function MydashboardComponent_ng_template_8_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-slider", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onSlideEnd", function MydashboardComponent_ng_template_8_ng_template_32_Template_p_slider_onSlideEnd_0_listener($event) {
      const filter_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13).filterCallback;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](filter_r14($event.values));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 41)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.activityValues)("range", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.activityValues[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.activityValues[1]);
  }
}
function MydashboardComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th")(2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "p-columnFilter", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th")(6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "p-columnFilter", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th")(10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Agent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p-columnFilter", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, MydashboardComponent_ng_template_8_ng_template_13_Template, 3, 0, "ng-template", 7)(14, MydashboardComponent_ng_template_8_ng_template_14_Template, 2, 2, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th")(16, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "p-columnFilter", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th")(20, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Balance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "p-columnFilter", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th")(24, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p-columnFilter", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, MydashboardComponent_ng_template_8_ng_template_27_Template, 2, 5, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "th")(29, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Activity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p-columnFilter", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, MydashboardComponent_ng_template_8_ng_template_32_Template, 6, 7, "ng-template", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "th", 30)(34, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Verified ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "p-columnFilter", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showMatchModes", false)("showOperator", false)("showAddButton", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showMatchModes", false)("showOperator", false)("showAddButton", false);
  }
}
function MydashboardComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td", 42)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "p-progressBar", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const customer_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", customer_r15.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("flag flag-" + customer_r15.country.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](customer_r15.country.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "assets/demo/images/avatar/", customer_r15.representative.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("alt", customer_r15.representative.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](customer_r15.representative.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](13, 16, customer_r15.date, "MM/dd/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](16, 19, customer_r15.balance, "USD", "symbol"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("customer-badge status-" + customer_r15.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](customer_r15.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", customer_r15.activity)("showValue", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](23, _c4, customer_r15.verified, !customer_r15.verified));
  }
}
function MydashboardComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No customers found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function MydashboardComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Loading customers data. Please wait.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function MydashboardComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Activity");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Representative");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("frozen", ctx_r2.idFrozen);
  }
}
function MydashboardComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td", 53)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const customer_r16 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](customer_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("frozen", ctx_r2.idFrozen);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](customer_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("flag flag-" + customer_r16.country.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](customer_r16.country.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](customer_r16.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](customer_r16.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("customer-badge status-" + customer_r16.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](customer_r16.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](customer_r16.activity);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "assets/demo/images/avatar/", customer_r16.representative.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("alt", customer_r16.representative.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](customer_r16.representative.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.formatCurrency(customer_r16.balance));
  }
}
function MydashboardComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MydashboardComponent_ng_template_26_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.expandAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 56);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("icon", "pi pi-fw ", ctx_r2.isExpanded ? "pi-minus" : "pi-plus", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("label", ctx_r2.isExpanded ? "Collapse All" : "Expand All");
  }
}
function MydashboardComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "p-sortIcon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "p-sortIcon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "p-sortIcon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Reviews ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "p-sortIcon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "p-sortIcon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function MydashboardComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "p-rating", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td")(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r18 = ctx.$implicit;
    const expanded_r19 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pRowToggler", product_r18)("icon", expanded_r19 ? "pi pi-chevron-down" : "pi pi-chevron-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "assets/demo/images/product/" + product_r18.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", product_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 13, product_r18.price, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r18.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", product_r18.rating)("readonly", true)("cancel", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("product-badge status-" + product_r18.inventoryStatus.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r18.inventoryStatus);
  }
}
function MydashboardComponent_ng_template_29_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "p-sortIcon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "th", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "p-sortIcon", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "p-sortIcon", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "p-sortIcon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "p-sortIcon", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function MydashboardComponent_ng_template_29_ng_template_5_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td")(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "p-button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const order_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](order_r20.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](order_r20.customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](order_r20.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 7, order_r20.amount, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("order-badge order-" + order_r20.status.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](order_r20.status);
  }
}
function MydashboardComponent_ng_template_29_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "There are no order for this product yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function MydashboardComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 50)(2, "div", 72)(3, "p-table", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MydashboardComponent_ng_template_29_ng_template_4_Template, 17, 0, "ng-template", 7)(5, MydashboardComponent_ng_template_29_ng_template_5_Template, 15, 10, "ng-template", 8)(6, MydashboardComponent_ng_template_29_ng_template_6_Template, 3, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const product_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", product_r21.orders);
  }
}
function MydashboardComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function MydashboardComponent_ng_template_36_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 89)(1, "td", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const customer_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "assets/demo/images/avatar/", customer_r22.representative.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("alt", customer_r22.representative.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](customer_r22.representative.name);
  }
}
function MydashboardComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MydashboardComponent_ng_template_36_tr_0_Template, 5, 4, "tr", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr")(2, "td", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td", 87)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const customer_r22 = ctx.$implicit;
    const rowIndex_r23 = ctx.rowIndex;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.rowGroupMetadata[customer_r22.representative.name].index === rowIndex_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", customer_r22.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("flag flag-" + customer_r22.country.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](customer_r22.country.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", customer_r22.company, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("customer-badge status-" + customer_r22.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](customer_r22.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", customer_r22.date, " ");
  }
}
class MydashboardComponent {
  constructor(customerService, productService) {
    this.customerService = customerService;
    this.productService = productService;
    this.customers1 = [];
    this.customers2 = [];
    this.customers3 = [];
    this.selectedCustomers1 = [];
    this.selectedCustomer = {};
    this.representatives = [];
    this.statuses = [];
    this.products = [];
    this.expandedRows = {};
    this.activityValues = [0, 100];
    this.isExpanded = false;
    this.idFrozen = false;
    this.loading = true;
  }
  ngOnInit() {
    this.customerService.getCustomersLarge().then(customers => {
      this.customers1 = customers;
      this.loading = false;
      // @ts-ignore
      this.customers1.forEach(customer => customer.date = new Date(customer.date));
    });
    this.customerService.getCustomersMedium().then(customers => this.customers2 = customers);
    this.customerService.getCustomersLarge().then(customers => this.customers3 = customers);
    this.productService.getProductsWithOrdersSmall().then(data => this.products = data);
    this.representatives = [{
      name: 'Amy Elsner',
      image: 'amyelsner.png'
    }, {
      name: 'Anna Fali',
      image: 'annafali.png'
    }, {
      name: 'Asiya Javayant',
      image: 'asiyajavayant.png'
    }, {
      name: 'Bernardo Dominic',
      image: 'bernardodominic.png'
    }, {
      name: 'Elwin Sharvill',
      image: 'elwinsharvill.png'
    }, {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png'
    }, {
      name: 'Ivan Magalhaes',
      image: 'ivanmagalhaes.png'
    }, {
      name: 'Onyama Limba',
      image: 'onyamalimba.png'
    }, {
      name: 'Stephen Shaw',
      image: 'stephenshaw.png'
    }, {
      name: 'XuXue Feng',
      image: 'xuxuefeng.png'
    }];
    this.statuses = [{
      label: 'Unqualified',
      value: 'unqualified'
    }, {
      label: 'Qualified',
      value: 'qualified'
    }, {
      label: 'New',
      value: 'new'
    }, {
      label: 'Negotiation',
      value: 'negotiation'
    }, {
      label: 'Renewal',
      value: 'renewal'
    }, {
      label: 'Proposal',
      value: 'proposal'
    }];
  }
  onSort() {
    this.updateRowGroupMetaData();
  }
  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};
    if (this.customers3) {
      for (let i = 0; i < this.customers3.length; i++) {
        const rowData = this.customers3[i];
        const representativeName = rowData?.representative?.name || '';
        if (i === 0) {
          this.rowGroupMetadata[representativeName] = {
            index: 0,
            size: 1
          };
        } else {
          const previousRowData = this.customers3[i - 1];
          const previousRowGroup = previousRowData?.representative?.name;
          if (representativeName === previousRowGroup) {
            this.rowGroupMetadata[representativeName].size++;
          } else {
            this.rowGroupMetadata[representativeName] = {
              index: i,
              size: 1
            };
          }
        }
      }
    }
  }
  expandAll() {
    if (!this.isExpanded) {
      this.products.forEach(product => product && product.name ? this.expandedRows[product.name] = true : '');
    } else {
      this.expandedRows = {};
    }
    this.isExpanded = !this.isExpanded;
  }
  formatCurrency(value) {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  }
  onGlobalFilter(table, event) {
    table.filterGlobal(event.target.value, 'contains');
  }
  clear(table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }
  static {
    this.ɵfac = function MydashboardComponent_Factory(t) {
      return new (t || MydashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_service_customer_service__WEBPACK_IMPORTED_MODULE_0__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_service_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: MydashboardComponent,
      selectors: [["app-mydashboard"]],
      viewQuery: function MydashboardComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService, primeng_api__WEBPACK_IMPORTED_MODULE_3__.ConfirmationService])],
      decls: 37,
      vars: 19,
      consts: [["dt1", ""], ["filter", ""], [1, "grid"], [1, "col-12"], [1, "card"], ["dataKey", "id", "styleClass", "p-datatable-gridlines", "responsiveLayout", "scroll", 3, "value", "rows", "loading", "rowHover", "paginator", "globalFilterFields"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["pTemplate", "loadingbody"], ["offIcon", "pi pi-lock-open", "offLabel", "Freeze Id", 3, "ngModelChange", "ngModel", "onIcon", "onLabel"], ["scrollDirection", "both", "scrollHeight", "400px", "styleClass", "mt-3", "responsiveLayout", "scroll", 3, "value", "scrollable"], ["dataKey", "name", "responsiveLayout", "scroll", 3, "value", "expandedRowKeys"], ["pTemplate", "rowexpansion"], ["rowGroupMode", "subheader", "groupRowsBy", "representative.name", "sortField", "representative.name", "sortMode", "single", "responsiveLayout", "scroll", "scrollHeight", "400px", 3, "onSort", "value", "scrollable"], [1, "flex", "justify-content-between", "flex-column", "sm:flex-row"], ["pButton", "", "label", "Clear", "icon", "pi pi-filter-slash", 1, "p-button-outlined", "mb-2", 3, "click"], [1, "p-input-icon-left", "mb-2"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search Keyword", 1, "w-full", 3, "input"], [1, "flex", "justify-content-between", "align-items-center"], ["type", "text", "field", "name", "display", "menu", "placeholder", "Search by name"], ["type", "text", "field", "country.name", "display", "menu", "placeholder", "Search by country"], ["field", "representative", "matchMode", "in", "display", "menu", 3, "showMatchModes", "showOperator", "showAddButton"], ["pTemplate", "filter"], ["type", "date", "field", "date", "display", "menu", "placeholder", "mm/dd/yyyy"], ["type", "numeric", "field", "balance", "display", "menu", "currency", "USD"], ["field", "status", "matchMode", "equals", "display", "menu"], ["field", "activity", "matchMode", "between", "display", "menu", 3, "showMatchModes", "showOperator", "showAddButton"], [2, "width", "8rem"], ["type", "boolean", "field", "verified", "display", "menu"], [1, "px-3", "pt-3", "pb-0"], [1, "font-bold"], ["placeholder", "Any", "optionLabel", "name", 3, "onChange", "ngModel", "options"], ["pTemplate", "item"], [1, "p-multiselect-representative-option"], ["width", "32", 2, "vertical-align", "middle", 3, "alt", "src"], [1, "ml-2"], ["placeholder", "Any", 3, "onChange", "ngModel", "options"], ["styleClass", "m-3", 3, "onSlideEnd", "ngModel", "range"], [1, "flex", "align-items-center", "justify-content-between", "px-2"], [2, "min-width", "12rem"], ["src", "assets/demo/images/flag/flag_placeholder.png", "width", "30"], [1, "image-text", "ml-2"], [2, "min-width", "14rem"], [2, "min-width", "10rem"], [3, "value", "showValue"], [1, "text-center", 2, "min-width", "8rem"], [1, "pi", 3, "ngClass"], ["colspan", "7"], ["pFrozenColumn", "", 2, "width", "200px"], ["alignFrozen", "left", "pFrozenColumn", "", 2, "width", "200px", 3, "frozen"], [2, "width", "200px"], ["pFrozenColumn", "", "alignFrozen", "right", 2, "width", "200px"], ["pButton", "", 3, "click", "icon", "label"], [1, "flex", "table-header"], [2, "width", "3rem"], ["pSortableColumn", "name"], ["field", "name"], ["pSortableColumn", "price"], ["field", "price"], ["pSortableColumn", "category"], ["field", "category"], ["pSortableColumn", "rating"], ["field", "rating"], ["pSortableColumn", "inventoryStatus"], ["field", "inventoryStatus"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-button-text", "p-button-rounded", "p-button-plain", 3, "pRowToggler", "icon"], ["width", "100", 1, "shadow-4", 3, "src", "alt"], [2, "min-width", "8rem"], [3, "ngModel", "readonly", "cancel"], [1, "p-3"], ["dataKey", "id", "responsiveLayout", "scroll", 3, "value"], ["pSortableColumn", "id"], ["pSortableColumn", "customer"], ["field", "customer"], ["pSortableColumn", "date"], ["field", "date"], ["pSortableColumn", "amount"], ["field", "amount"], ["pSortableColumn", "stats"], ["field", "status"], [2, "width", "4rem"], ["type", "button", "icon", "pi pi-search"], ["colspan", "6"], ["pRowGroupHeader", "", 4, "ngIf"], [2, "min-width", "200px"], [1, "image-text", 2, "margin-left", ".5em"], ["pRowGroupHeader", ""], ["colspan", "5", 2, "min-width", "200px"], [1, "font-bold", "ml-2"]],
      template: function MydashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Filter Menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p-table", 5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, MydashboardComponent_ng_template_7_Template, 6, 0, "ng-template", 6)(8, MydashboardComponent_ng_template_8_Template, 37, 6, "ng-template", 7)(9, MydashboardComponent_ng_template_9_Template, 24, 26, "ng-template", 8)(10, MydashboardComponent_ng_template_10_Template, 3, 0, "ng-template", 9)(11, MydashboardComponent_ng_template_11_Template, 3, 0, "ng-template", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 3)(13, "div", 4)(14, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Frozen Columns");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p-toggleButton", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function MydashboardComponent_Template_p_toggleButton_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.idFrozen, $event) || (ctx.idFrozen = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p-table", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, MydashboardComponent_ng_template_18_Template, 19, 1, "ng-template", 7)(19, MydashboardComponent_ng_template_19_Template, 24, 17, "ng-template", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 3)(21, "div", 4)(22, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Row Expand");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "p-toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p-table", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, MydashboardComponent_ng_template_26_Template, 2, 3, "ng-template", 6)(27, MydashboardComponent_ng_template_27_Template, 19, 0, "ng-template", 7)(28, MydashboardComponent_ng_template_28_Template, 17, 16, "ng-template", 8)(29, MydashboardComponent_ng_template_29_Template, 7, 1, "ng-template", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 3)(31, "div", 4)(32, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Subheader Grouping");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p-table", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onSort", function MydashboardComponent_Template_p_table_onSort_34_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onSort());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, MydashboardComponent_ng_template_35_Template, 11, 0, "ng-template", 7)(36, MydashboardComponent_ng_template_36_Template, 15, 10, "ng-template", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.customers1)("rows", 10)("loading", ctx.loading)("rowHover", true)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](18, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.idFrozen);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("onIcon", "pi pi-lock")("onLabel", "Unfreeze Id");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.customers3)("scrollable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.products)("expandedRowKeys", ctx.expandedRows);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.customers3)("scrollable", true);
        }
      },
      dependencies: [primeng_table__WEBPACK_IMPORTED_MODULE_4__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_4__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_4__.FrozenColumn, primeng_table__WEBPACK_IMPORTED_MODULE_4__.RowGroupHeader, primeng_table__WEBPACK_IMPORTED_MODULE_4__.RowToggler, primeng_table__WEBPACK_IMPORTED_MODULE_4__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_4__.ColumnFilter, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_rating__WEBPACK_IMPORTED_MODULE_6__.Rating, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button, primeng_slider__WEBPACK_IMPORTED_MODULE_8__.Slider, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputText, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_10__.ToggleButton, primeng_ripple__WEBPACK_IMPORTED_MODULE_11__.Ripple, primeng_multiselect__WEBPACK_IMPORTED_MODULE_12__.MultiSelect, primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.Dropdown, primeng_progressbar__WEBPACK_IMPORTED_MODULE_14__.ProgressBar, primeng_toast__WEBPACK_IMPORTED_MODULE_15__.Toast, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
      styles: ["[_nghost-%COMP%]     .p-frozen-column {\n  font-weight: bold;\n}\n\n[_nghost-%COMP%]     .p-datatable-frozen-tbody {\n  font-weight: bold;\n}\n\n[_nghost-%COMP%]     .p-progressbar {\n  height: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15ZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUTtFQUNJLGlCQUFBO0FBQVo7O0FBR1E7RUFDSSxpQkFBQTtBQUFaOztBQUdRO0VBQ0ksY0FBQTtBQUFaIiwiZmlsZSI6Im15ZGFzaGJvYXJkLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICA6aG9zdCA6Om5nLWRlZXAgIC5wLWZyb3plbi1jb2x1bW4ge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlLWZyb3plbi10Ym9keSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0IDo6bmctZGVlcCAucC1wcm9ncmVzc2JhciB7XG4gICAgICAgICAgICBoZWlnaHQ6LjVyZW07XG4gICAgICAgIH1cbiAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9jb21wb25lbnRzL215ZGFzaGJvYXJkL215ZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUTtFQUNJLGlCQUFBO0FBQVo7O0FBR1E7RUFDSSxpQkFBQTtBQUFaOztBQUdRO0VBQ0ksY0FBQTtBQUFaO0FBQ0Esd3FCQUF3cUIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgOmhvc3QgOjpuZy1kZWVwICAucC1mcm96ZW4tY29sdW1uIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QgOjpuZy1kZWVwIC5wLWRhdGF0YWJsZS1mcm96ZW4tdGJvZHkge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCA6Om5nLWRlZXAgLnAtcHJvZ3Jlc3NiYXIge1xuICAgICAgICAgICAgaGVpZ2h0Oi41cmVtO1xuICAgICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 90177:
/*!**************************************************!*\
  !*** ./src/app/demo/service/auth.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor),
/* harmony export */   authInterceptorProviders: () => (/* binding */ authInterceptorProviders)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ 31070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ 93720);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);






class AuthInterceptor {
  constructor(loginService, router) {
    this.loginService = loginService;
    this.router = router;
  }
  intercept(req, next) {
    // Solo agregar el token si la solicitud es hacia tu backend
    if (req.url.includes(_helper__WEBPACK_IMPORTED_MODULE_0__["default"])) {
      const token = this.loginService.getToken();
      console.log("token: ", token);
      if (token != null) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
      }
    }
    return next.handle(req).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      if (error.status === 401) {
        // Token inválido o expirado
        this.loginService.logout();
        this.router.navigate(['/']); // Redirigir a la vista de inicio de sesión
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
    }));
  }
  static {
    this.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
  }
}
const authInterceptorProviders = [{
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}];

/***/ }),

/***/ 77339:
/*!*************************************************!*\
  !*** ./src/app/demo/service/country.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountryService: () => (/* binding */ CountryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 46443);


class CountryService {
  constructor(http) {
    this.http = http;
  }
  getCountries() {
    return this.http.get('assets/demo/data/countries.json').toPromise().then(res => res.data).then(data => data);
  }
  static {
    this.ɵfac = function CountryService_Factory(t) {
      return new (t || CountryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CountryService,
      factory: CountryService.ɵfac
    });
  }
}

/***/ }),

/***/ 37287:
/*!**************************************************!*\
  !*** ./src/app/demo/service/customer.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerService: () => (/* binding */ CustomerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 46443);


class CustomerService {
  constructor(http) {
    this.http = http;
  }
  getCustomersSmall() {
    return this.http.get('assets/demo/data/customers-small.json').toPromise().then(res => res.data).then(data => data);
  }
  getCustomersMedium() {
    return this.http.get('assets/demo/data/customers-medium.json').toPromise().then(res => res.data).then(data => data);
  }
  getCustomersLarge() {
    return this.http.get('assets/demo/data/customers-large.json').toPromise().then(res => res.data).then(data => data);
  }
  static {
    this.ɵfac = function CustomerService_Factory(t) {
      return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CustomerService,
      factory: CustomerService.ɵfac
    });
  }
}

/***/ }),

/***/ 56653:
/*!***********************************************!*\
  !*** ./src/app/demo/service/event.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventService: () => (/* binding */ EventService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 46443);


class EventService {
  constructor(http) {
    this.http = http;
  }
  getEvents() {
    return this.http.get('assets/demo/data/scheduleevents.json').toPromise().then(res => res.data).then(data => data);
  }
  static {
    this.ɵfac = function EventService_Factory(t) {
      return new (t || EventService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EventService,
      factory: EventService.ɵfac
    });
  }
}

/***/ }),

/***/ 31070:
/*!****************************************!*\
  !*** ./src/app/demo/service/helper.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//url
//let baseUrl = 'https://agrofranco-backend-cocoa-ktah.onrender.com';
let baseUrl = 'http://localhost:8080';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUrl);

/***/ }),

/***/ 62398:
/*!**********************************************!*\
  !*** ./src/app/demo/service/icon.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconService: () => (/* binding */ IconService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);



class IconService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'assets/demo/data/icons.json';
  }
  getIcons() {
    return this.http.get(this.apiUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(response => {
      this.icons = response.icons;
      return this.icons;
    }));
  }
  static {
    this.ɵfac = function IconService_Factory(t) {
      return new (t || IconService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: IconService,
      factory: IconService.ɵfac
    });
  }
}

/***/ }),

/***/ 93720:
/*!***********************************************!*\
  !*** ./src/app/demo/service/login.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginService: () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ 31070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);






class LoginService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.loginStatusSubjec = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }
  //generamos el token
  generateToken(loginData) {
    return this.http.post(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/generate-token`, loginData);
  }
  getCurrentUser() {
    let token = this.getToken();
    if (token) {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Authorization', 'Bearer ' + token);
      return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/actual-usuario`, {
        headers: headers
      });
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)('No token found');
  }
  //iniciamos sesión y establecemos el token en el localStorage
  loginUser(token) {
    localStorage.setItem('token', token);
    return true;
  }
  isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }
  //cerramoss sesion y eliminamos el token del localStorage
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.loginStatusSubjec.next(false); // Si estás utilizando esto para manejar el estado de la sesión
    this.router.navigate(['']);
    return true;
  }
  //obtenemos el token
  getToken() {
    return localStorage.getItem('token');
  }
  setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }
  getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }
  isGerente() {
    return this.getUserRole() === 'Gerente';
  }
  isSecretario() {
    return this.getUserRole() === 'Secretario/a';
  }
  static {
    this.ɵfac = function LoginService_Factory(t) {
      return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: LoginService,
      factory: LoginService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 93747:
/*!**********************************************!*\
  !*** ./src/app/demo/service/node.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeService: () => (/* binding */ NodeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 46443);


class NodeService {
  constructor(http) {
    this.http = http;
  }
  getFiles() {
    return this.http.get('assets/demo/data/files.json').toPromise().then(res => res.data);
  }
  getLazyFiles() {
    return this.http.get('assets/demo/data/files-lazy.json').toPromise().then(res => res.data);
  }
  getFilesystem() {
    return this.http.get('assets/demo/data/filesystem.json').toPromise().then(res => res.data);
  }
  getLazyFilesystem() {
    return this.http.get('assets/demo/data/filesystem-lazy.json').toPromise().then(res => res.data);
  }
  static {
    this.ɵfac = function NodeService_Factory(t) {
      return new (t || NodeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NodeService,
      factory: NodeService.ɵfac
    });
  }
}

/***/ }),

/***/ 43257:
/*!***********************************************!*\
  !*** ./src/app/demo/service/photo.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhotoService: () => (/* binding */ PhotoService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 46443);


class PhotoService {
  constructor(http) {
    this.http = http;
  }
  getImages() {
    return this.http.get('assets/demo/data/photos.json').toPromise().then(res => res.data).then(data => data);
  }
  static {
    this.ɵfac = function PhotoService_Factory(t) {
      return new (t || PhotoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PhotoService,
      factory: PhotoService.ɵfac
    });
  }
}

/***/ }),

/***/ 102:
/*!*************************************************!*\
  !*** ./src/app/demo/service/product.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductService: () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 46443);


class ProductService {
  constructor(http) {
    this.http = http;
  }
  getProductsSmall() {
    return this.http.get('assets/demo/data/products-small.json').toPromise().then(res => res.data).then(data => data);
  }
  getProducts() {
    return this.http.get('assets/demo/data/products.json').toPromise().then(res => res.data).then(data => data);
  }
  getProductsMixed() {
    return this.http.get('assets/demo/data/products-mixed.json').toPromise().then(res => res.data).then(data => data);
  }
  getProductsWithOrdersSmall() {
    return this.http.get('assets/demo/data/products-orders-small.json').toPromise().then(res => res.data).then(data => data);
  }
  static {
    this.ɵfac = function ProductService_Factory(t) {
      return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductService,
      factory: ProductService.ɵfac
    });
  }
}

/***/ }),

/***/ 25768:
/*!**********************************************!*\
  !*** ./src/app/demo/service/user.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ 31070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);



class UserService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  registrarUsuario(user) {
    return this.httpClient.post(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/usuarios/`, user);
  }
  obtenerUsuarios() {
    return this.httpClient.get(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/usuarios`);
  }
  eliminarUsuario(id) {
    return this.httpClient.delete(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/usuarios/${id}`);
  }
  actualizarUsuario(id, user) {
    return this.httpClient.put(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/usuarios/${id}`, user);
  }
  static {
    this.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 14940:
/*!************************************************!*\
  !*** ./src/app/layout/app.footer.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppFooterComponent: () => (/* binding */ AppFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/app.layout.service */ 27693);


class AppFooterComponent {
  constructor(layoutService) {
    this.layoutService = layoutService;
  }
  static {
    this.ɵfac = function AppFooterComponent_Factory(t) {
      return new (t || AppFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppFooterComponent,
      selectors: [["app-footer"]],
      decls: 5,
      vars: 0,
      consts: [[1, "layout-footer"], [1, "brand-agrofranco", 2, "font-size", "1.1rem", "opacity", "0.8"], [1, "text-500", "ml-2"]],
      template: function AppFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "AgroFranco");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00A9 2026");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
      },
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 22333:
/*!************************************************!*\
  !*** ./src/app/layout/app.layout.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppLayoutComponent: () => (/* binding */ AppLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var _app_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.sidebar.component */ 79305);
/* harmony import */ var _app_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.topbar.component */ 34367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/app.layout.service */ 27693);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _config_app_config_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/app.config.component */ 28526);
/* harmony import */ var _app_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.footer.component */ 14940);












class AppLayoutComponent {
  constructor(layoutService, renderer, router) {
    this.layoutService = layoutService;
    this.renderer = renderer;
    this.router = router;
    this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
      if (!this.menuOutsideClickListener) {
        this.menuOutsideClickListener = this.renderer.listen('document', 'click', event => {
          const isOutsideClicked = !(this.appSidebar.el.nativeElement.isSameNode(event.target) || this.appSidebar.el.nativeElement.contains(event.target) || this.appTopbar.menuButton.nativeElement.isSameNode(event.target) || this.appTopbar.menuButton.nativeElement.contains(event.target));
          if (isOutsideClicked) {
            this.hideMenu();
          }
        });
      }
      if (!this.profileMenuOutsideClickListener) {
        this.profileMenuOutsideClickListener = this.renderer.listen('document', 'click', event => {
          const isOutsideClicked = !(this.appTopbar.menu.nativeElement.isSameNode(event.target) || this.appTopbar.menu.nativeElement.contains(event.target) || this.appTopbar.topbarMenuButton.nativeElement.isSameNode(event.target) || this.appTopbar.topbarMenuButton.nativeElement.contains(event.target));
          if (isOutsideClicked) {
            this.hideProfileMenu();
          }
        });
      }
      if (this.layoutService.state.staticMenuMobileActive) {
        this.blockBodyScroll();
      }
    });
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd)).subscribe(() => {
      this.hideMenu();
      this.hideProfileMenu();
    });
  }
  hideMenu() {
    this.layoutService.state.overlayMenuActive = false;
    this.layoutService.state.staticMenuMobileActive = false;
    this.layoutService.state.menuHoverActive = false;
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
      this.menuOutsideClickListener = null;
    }
    this.unblockBodyScroll();
  }
  hideProfileMenu() {
    this.layoutService.state.profileSidebarVisible = false;
    if (this.profileMenuOutsideClickListener) {
      this.profileMenuOutsideClickListener();
      this.profileMenuOutsideClickListener = null;
    }
  }
  blockBodyScroll() {
    if (document.body.classList) {
      document.body.classList.add('blocked-scroll');
    } else {
      document.body.className += ' blocked-scroll';
    }
  }
  unblockBodyScroll() {
    if (document.body.classList) {
      document.body.classList.remove('blocked-scroll');
    } else {
      document.body.className = document.body.className.replace(new RegExp('(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }
  get containerClass() {
    return {
      'layout-theme-light': this.layoutService.config.colorScheme === 'light',
      'layout-theme-dark': this.layoutService.config.colorScheme === 'dark',
      'layout-overlay': this.layoutService.config.menuMode === 'overlay',
      'layout-static': this.layoutService.config.menuMode === 'static',
      'layout-slim': this.layoutService.config.menuMode === 'slim',
      'layout-horizontal': this.layoutService.config.menuMode === 'horizontal',
      'layout-static-inactive': this.layoutService.state.staticMenuDesktopInactive && this.layoutService.config.menuMode === 'static',
      'layout-overlay-active': this.layoutService.state.overlayMenuActive,
      'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
      'p-input-filled': this.layoutService.config.inputStyle === 'filled',
      'p-ripple-disabled': !this.layoutService.config.ripple
    };
  }
  ngOnDestroy() {
    if (this.overlayMenuOpenSubscription) {
      this.overlayMenuOpenSubscription.unsubscribe();
    }
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
    }
  }
  static {
    this.ɵfac = function AppLayoutComponent_Factory(t) {
      return new (t || AppLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: AppLayoutComponent,
      selectors: [["app-layout"]],
      viewQuery: function AppLayoutComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_app_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.AppSidebarComponent, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_app_topbar_component__WEBPACK_IMPORTED_MODULE_1__.AppTopBarComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.appSidebar = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.appTopbar = _t.first);
        }
      },
      decls: 10,
      vars: 1,
      consts: [[1, "layout-wrapper", 3, "ngClass"], [1, "layout-sidebar"], [1, "layout-main-container"], [1, "layout-main"], [1, "layout-mask"]],
      template: function AppLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-topbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 2)(5, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "app-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "app-config")(9, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.containerClass);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _config_app_config_component__WEBPACK_IMPORTED_MODULE_3__.AppConfigComponent, _app_topbar_component__WEBPACK_IMPORTED_MODULE_1__.AppTopBarComponent, _app_footer_component__WEBPACK_IMPORTED_MODULE_4__.AppFooterComponent, _app_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.AppSidebarComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 61088:
/*!*********************************************!*\
  !*** ./src/app/layout/app.layout.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppLayoutModule: () => (/* binding */ AppLayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 43835);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/sidebar */ 97196);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/badge */ 72773);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/radiobutton */ 54665);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputswitch */ 46764);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/ripple */ 30078);
/* harmony import */ var _app_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.menu.component */ 93872);
/* harmony import */ var _app_menuitem_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.menuitem.component */ 86215);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _app_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.topbar.component */ 34367);
/* harmony import */ var _app_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.footer.component */ 14940);
/* harmony import */ var _config_config_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/config.module */ 12204);
/* harmony import */ var _app_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.sidebar.component */ 79305);
/* harmony import */ var _app_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.layout.component */ 22333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);



















class AppLayoutModule {
  static {
    this.ɵfac = function AppLayoutModule_Factory(t) {
      return new (t || AppLayoutModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: AppLayoutModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_13__.SidebarModule, primeng_badge__WEBPACK_IMPORTED_MODULE_14__.BadgeModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_15__.RadioButtonModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__.InputSwitchModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_17__.RippleModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, _config_config_module__WEBPACK_IMPORTED_MODULE_4__.AppConfigModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppLayoutModule, {
    declarations: [_app_menuitem_component__WEBPACK_IMPORTED_MODULE_1__.AppMenuitemComponent, _app_topbar_component__WEBPACK_IMPORTED_MODULE_2__.AppTopBarComponent, _app_footer_component__WEBPACK_IMPORTED_MODULE_3__.AppFooterComponent, _app_menu_component__WEBPACK_IMPORTED_MODULE_0__.AppMenuComponent, _app_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.AppSidebarComponent, _app_layout_component__WEBPACK_IMPORTED_MODULE_6__.AppLayoutComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_13__.SidebarModule, primeng_badge__WEBPACK_IMPORTED_MODULE_14__.BadgeModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_15__.RadioButtonModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__.InputSwitchModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_17__.RippleModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, _config_config_module__WEBPACK_IMPORTED_MODULE_4__.AppConfigModule],
    exports: [_app_layout_component__WEBPACK_IMPORTED_MODULE_6__.AppLayoutComponent]
  });
})();

/***/ }),

/***/ 93872:
/*!**********************************************!*\
  !*** ./src/app/layout/app.menu.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppMenuComponent: () => (/* binding */ AppMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/app.layout.service */ 27693);
/* harmony import */ var _demo_service_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../demo/service/login.service */ 93720);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _app_menuitem_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.menuitem.component */ 86215);






function AppMenuComponent_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "li", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const item_r2 = ctx_r0.$implicit;
    const i_r3 = ctx_r0.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("item", item_r2)("index", i_r3)("root", true);
  }
}
function AppMenuComponent_ng_container_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "li", 5);
  }
}
function AppMenuComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppMenuComponent_ng_container_1_li_1_Template, 1, 3, "li", 2)(2, AppMenuComponent_ng_container_1_li_2_Template, 1, 0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r2.separator);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r2.separator);
  }
}
class AppMenuComponent {
  constructor(layoutService, loginService, router) {
    this.layoutService = layoutService;
    this.loginService = loginService;
    this.router = router;
    this.model = [];
  }
  ngOnInit() {
    const userRole = this.loginService.getUserRole();
    if (userRole === 'Gerente') {
      this.model = [{
        items: [{
          label: 'Inicio',
          icon: 'pi pi-home',
          routerLink: ['/administrador/dashboard-admi']
        }]
      }, {
        label: 'Administración',
        items: [{
          label: 'Usuarios',
          icon: 'pi pi-users',
          routerLink: ['/administrador/usuarios']
        }, {
          label: 'Clientes',
          icon: 'pi pi-fw pi-users',
          routerLink: ['/administrador/clientes']
        }, {
          label: 'Bancos',
          icon: 'pi pi-fw pi-building',
          routerLink: ['/caja-bancos/bancos']
        }, {
          label: 'Cuentas Bancarias',
          icon: 'pi pi-fw pi-id-card',
          routerLink: ['/caja-bancos/cuentas-bancarias']
        }, {
          label: 'Transacciones Bancarias',
          icon: 'pi pi-fw pi-arrow-right-arrow-left',
          routerLink: ['/caja-bancos/transacciones-banco']
        }, {
          label: 'Cuentas por Pagar',
          icon: 'pi pi-fw pi-money-bill',
          routerLink: ['/caja-bancos/cuentas-por-pagar']
        }, {
          label: 'Cuentas por Cobrar',
          icon: 'pi pi-fw pi-dollar',
          routerLink: ['/caja-bancos/cuentas-por-cobrar']
        }]
      }, {
        label: 'Compras de Cacao',
        items: [{
          label: 'Compras en General',
          icon: 'pi pi-shopping-cart',
          routerLink: ['/administrador/compras-semanales']
        }, {
          label: 'Por Cliente Registrado',
          icon: 'pi pi-user-edit',
          routerLink: ['/administrador/consulta-cacao']
        }]
      }, {
        label: 'Consultas',
        items: [{
          label: 'Inventario',
          icon: 'pi pi-th-large',
          routerLink: ['/administrador/inventario']
        }, {
          label: 'Caja',
          icon: 'pi pi-money-bill',
          routerLink: ['/administrador/caja']
        }, {
          label: 'Otras Compras y Ventas',
          icon: 'pi pi-cart-plus',
          routerLink: ['/administrador/view-otras-compras']
        }, {
          label: 'Reporte Mensual de Ventas',
          icon: 'pi pi-fw pi-calendar-plus',
          routerLink: ['/secretaria/reporte-mensual-clientes']
        }]
      }, {
        label: 'Transacciones',
        items: [{
          label: 'Prestamos',
          icon: 'pi pi-fw pi-wallet',
          routerLink: ['/secretaria/prestamos']
        }, {
          label: 'Ventas',
          icon: 'pi pi-shopping-cart',
          routerLink: ['/secretaria/ventas']
        }, {
          label: 'Fijaciones',
          icon: 'pi pi-file-edit',
          routerLink: ['/administrador/fijaciones']
        }, {
          label: 'Balance Comercial',
          icon: 'pi pi-chart-line',
          routerLink: ['/administrador/balance-comercial']
        }, {
          label: 'Control RA',
          icon: 'pi pi-shield',
          routerLink: ['/administrador/control-ra']
        }]
      }];
    } else if (userRole === 'Secretario/a') {
      this.model = [{
        items: [{
          label: 'Inicio',
          icon: 'pi pi-home',
          routerLink: ['secretaria/dashboard']
        }]
      }, {
        label: 'Gestión',
        items: [{
          label: 'Clientes',
          icon: 'pi pi-fw pi-users',
          routerLink: ['/secretaria/clientes']
        }, {
          label: 'Caja',
          icon: 'pi pi-money-bill',
          routerLink: ['/secretaria/caja']
        }, {
          label: 'Prestamos',
          icon: 'pi pi-fw pi-wallet',
          routerLink: ['/secretaria/prestamos']
        }, {
          label: 'Bancos',
          icon: 'pi pi-fw pi-building',
          routerLink: ['/caja-bancos/bancos']
        }, {
          label: 'Cuentas Bancarias',
          icon: 'pi pi-fw pi-id-card',
          routerLink: ['/caja-bancos/cuentas-bancarias']
        }, {
          label: 'Transacciones Bancarias',
          icon: 'pi pi-fw pi-arrow-right-arrow-left',
          routerLink: ['/caja-bancos/transacciones-banco']
        }, {
          label: 'Cuentas por Pagar',
          icon: 'pi pi-fw pi-money-bill',
          routerLink: ['/caja-bancos/cuentas-por-pagar']
        }, {
          label: 'Cuentas por Cobrar',
          icon: 'pi pi-fw pi-dollar',
          routerLink: ['/caja-bancos/cuentas-por-cobrar']
        }]
      }, {
        label: 'Inventario',
        items: [{
          label: 'Artículos',
          icon: 'pi pi-shopping-bag',
          routerLink: ['/secretaria/inventario']
        }, {
          label: 'Ventas',
          icon: 'pi pi-shopping-cart',
          routerLink: ['/secretaria/ventas']
        }]
      }, {
        label: 'Compras - Ventas',
        items: [{
          label: 'Compras de Cacao',
          icon: 'pi pi-cart-plus',
          routerLink: ['/secretaria/compras-cacao']
        }, {
          label: 'Ventas de Cacao',
          icon: 'pi pi-cart-plus',
          routerLink: ['/secretaria/ventas-cacao']
        }, {
          label: 'Otros Productos',
          icon: 'pi pi-cart-plus',
          routerLink: ['/secretaria/otras-compras']
        }]
      }, {
        label: 'Consultas',
        items: [{
          label: 'Compras de Cacao',
          icon: 'pi pi-fw pi-wallet',
          routerLink: ['/secretaria/compras-semanales']
        }, {
          label: 'Otras Compras',
          icon: 'pi pi-fw pi-wallet',
          routerLink: ['/secretaria/view-otras-compras']
        }, {
          label: 'Facturas Ingresadas',
          icon: 'pi pi-user-edit',
          routerLink: ['/administrador/consulta-cacao']
        }, {
          label: 'Reporte Mensual de Ventas',
          icon: 'pi pi-fw pi-calendar-plus',
          routerLink: ['/secretaria/reporte-mensual-clientes']
        }]
      }];
    } else if (userRole === 'Asistente de Facturas') {
      this.model = [{
        label: 'Operaciones',
        items: [{
          label: 'Facturas Ingresadas',
          icon: 'pi pi-fw pi-list',
          routerLink: ['/asistente-factura/view-facturas']
        }, {
          label: 'Consultas de Facturas',
          icon: 'pi pi-user-edit',
          routerLink: ['/administrador/consulta-cacao']
        }]
      }];
    }
    /*  this.router.events.subscribe(event => {
          if (event instanceof NavigationEnd) {
              const rutasParaOcultarSidebar = [
                  '/asistente-factura/ingreso-factura',
                  '/asistente-factura/view-facturas'
              ];
              
              if (rutasParaOcultarSidebar.includes(event.urlAfterRedirects)) {
                  // Ocultar el sidebar
                  this.layoutService.onMenuToggle();
              }
          }
      });*/
  }
  static {
    this.ɵfac = function AppMenuComponent_Factory(t) {
      return new (t || AppMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_demo_service_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AppMenuComponent,
      selectors: [["app-menu"]],
      decls: 2,
      vars: 1,
      consts: [[1, "layout-menu"], [4, "ngFor", "ngForOf"], ["app-menuitem", "", 3, "item", "index", "root", 4, "ngIf"], ["class", "menu-separator", 4, "ngIf"], ["app-menuitem", "", 3, "item", "index", "root"], [1, "menu-separator"]],
      template: function AppMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppMenuComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.model);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _app_menuitem_component__WEBPACK_IMPORTED_MODULE_2__.AppMenuitemComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 56904:
/*!********************************************!*\
  !*** ./src/app/layout/app.menu.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuService: () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class MenuService {
  constructor() {
    this.menuSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.resetSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.menuSource$ = this.menuSource.asObservable();
    this.resetSource$ = this.resetSource.asObservable();
  }
  onMenuStateChange(event) {
    this.menuSource.next(event);
  }
  reset() {
    this.resetSource.next(true);
  }
  static {
    this.ɵfac = function MenuService_Factory(t) {
      return new (t || MenuService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: MenuService,
      factory: MenuService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 86215:
/*!**************************************************!*\
  !*** ./src/app/layout/app.menuitem.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppMenuitemComponent: () => (/* binding */ AppMenuitemComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 47172);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/app.layout.service */ 27693);
/* harmony import */ var _app_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.menu.service */ 56904);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 30078);









const _c0 = ["app-menuitem", ""];
const _c1 = () => ({
  exact: true
});
function AppMenuitemComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.item.label);
  }
}
function AppMenuitemComponent_a_2_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 9);
  }
}
function AppMenuitemComponent_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppMenuitemComponent_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.itemClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppMenuitemComponent_a_2_i_4_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.item.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("href", ctx_r0.item.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("target", ctx_r0.item.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.item.items);
  }
}
function AppMenuitemComponent_a_3_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 9);
  }
}
function AppMenuitemComponent_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppMenuitemComponent_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.itemClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppMenuitemComponent_a_3_i_4_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.item.class)("routerLink", ctx_r0.item.routerLink)("routerLinkActiveOptions", ctx_r0.item.routerLinkOptions || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](14, _c1))("fragment", ctx_r0.item.fragment)("queryParamsHandling", ctx_r0.item.queryParamsHandling)("preserveFragment", ctx_r0.item.preserveFragment)("skipLocationChange", ctx_r0.item.skipLocationChange)("replaceUrl", ctx_r0.item.replaceUrl)("state", ctx_r0.item.state)("queryParams", ctx_r0.item.queryParams);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("target", ctx_r0.item.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.item.items);
  }
}
function AppMenuitemComponent_ul_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "li", 12);
  }
  if (rf & 2) {
    const child_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](child_r4.badgeClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", child_r4)("index", i_r5)("parentKey", ctx_r0.key);
  }
}
function AppMenuitemComponent_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppMenuitemComponent_ul_4_ng_template_1_Template, 1, 5, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@children", ctx_r0.submenuAnimation);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.item.items);
  }
}
class AppMenuitemComponent {
  constructor(layoutService, cd, router, menuService) {
    this.layoutService = layoutService;
    this.cd = cd;
    this.router = router;
    this.menuService = menuService;
    this.active = false;
    this.key = "";
    this.menuSourceSubscription = this.menuService.menuSource$.subscribe(value => {
      Promise.resolve(null).then(() => {
        if (value.routeEvent) {
          this.active = value.key === this.key || value.key.startsWith(this.key + '-') ? true : false;
        } else {
          if (value.key !== this.key && !value.key.startsWith(this.key + '-')) {
            this.active = false;
          }
        }
      });
    });
    this.menuResetSubscription = this.menuService.resetSource$.subscribe(() => {
      this.active = false;
    });
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd)).subscribe(params => {
      if (this.item.routerLink) {
        this.updateActiveStateFromRoute();
      }
    });
  }
  ngOnInit() {
    this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
    if (this.item.routerLink) {
      this.updateActiveStateFromRoute();
    }
  }
  updateActiveStateFromRoute() {
    let activeRoute = this.router.isActive(this.item.routerLink[0], {
      paths: 'exact',
      queryParams: 'ignored',
      matrixParams: 'ignored',
      fragment: 'ignored'
    });
    if (activeRoute) {
      this.menuService.onMenuStateChange({
        key: this.key,
        routeEvent: true
      });
    }
  }
  itemClick(event) {
    // avoid processing disabled items
    if (this.item.disabled) {
      event.preventDefault();
      return;
    }
    // execute command
    if (this.item.command) {
      this.item.command({
        originalEvent: event,
        item: this.item
      });
    }
    // toggle active state
    if (this.item.items) {
      this.active = !this.active;
    }
    this.menuService.onMenuStateChange({
      key: this.key
    });
  }
  get submenuAnimation() {
    return this.root ? 'expanded' : this.active ? 'expanded' : 'collapsed';
  }
  ngOnDestroy() {
    if (this.menuSourceSubscription) {
      this.menuSourceSubscription.unsubscribe();
    }
    if (this.menuResetSubscription) {
      this.menuResetSubscription.unsubscribe();
    }
  }
  static {
    this.ɵfac = function AppMenuitemComponent_Factory(t) {
      return new (t || AppMenuitemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_menu_service__WEBPACK_IMPORTED_MODULE_1__.MenuService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppMenuitemComponent,
      selectors: [["", "app-menuitem", ""]],
      hostVars: 4,
      hostBindings: function AppMenuitemComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("layout-root-menuitem", ctx.root)("active-menuitem", ctx.active);
        }
      },
      inputs: {
        item: "item",
        index: "index",
        root: "root",
        parentKey: "parentKey"
      },
      attrs: _c0,
      decls: 5,
      vars: 4,
      consts: [["class", "layout-menuitem-root-text", 4, "ngIf"], ["tabindex", "0", "pRipple", "", 3, "ngClass", "click", 4, "ngIf"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams", "click", 4, "ngIf"], [4, "ngIf"], [1, "layout-menuitem-root-text"], ["tabindex", "0", "pRipple", "", 3, "click", "ngClass"], [1, "layout-menuitem-icon", 3, "ngClass"], [1, "layout-menuitem-text"], ["class", "pi pi-fw pi-angle-down layout-submenu-toggler", 4, "ngIf"], [1, "pi", "pi-fw", "pi-angle-down", "layout-submenu-toggler"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "click", "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams"], ["ngFor", "", 3, "ngForOf"], ["app-menuitem", "", 3, "item", "index", "parentKey"]],
      template: function AppMenuitemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppMenuitemComponent_div_1_Template, 2, 1, "div", 0)(2, AppMenuitemComponent_a_2_Template, 5, 6, "a", 1)(3, AppMenuitemComponent_a_3_Template, 5, 15, "a", 2)(4, AppMenuitemComponent_ul_4_Template, 2, 2, "ul", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.root && ctx.item.visible !== false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (!ctx.item.routerLink || ctx.item.items) && ctx.item.visible !== false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item.routerLink && !ctx.item.items && ctx.item.visible !== false);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item.items && ctx.item.visible !== false);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, AppMenuitemComponent],
      encapsulation: 2,
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('children', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          height: '0'
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          height: '*'
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('collapsed <=> expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('400ms cubic-bezier(0.86, 0, 0.07, 1)'))])]
      }
    });
  }
}

/***/ }),

/***/ 79305:
/*!*************************************************!*\
  !*** ./src/app/layout/app.sidebar.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppSidebarComponent: () => (/* binding */ AppSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/app.layout.service */ 27693);
/* harmony import */ var _app_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.menu.component */ 93872);



class AppSidebarComponent {
  constructor(layoutService, el) {
    this.layoutService = layoutService;
    this.el = el;
  }
  static {
    this.ɵfac = function AppSidebarComponent_Factory(t) {
      return new (t || AppSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppSidebarComponent,
      selectors: [["app-sidebar"]],
      decls: 1,
      vars: 0,
      template: function AppSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-menu");
        }
      },
      dependencies: [_app_menu_component__WEBPACK_IMPORTED_MODULE_1__.AppMenuComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 34367:
/*!************************************************!*\
  !*** ./src/app/layout/app.topbar.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppTopBarComponent: () => (/* binding */ AppTopBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/app.layout.service */ 27693);
/* harmony import */ var _demo_service_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../demo/service/login.service */ 93720);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);





const _c0 = ["menubutton"];
const _c1 = ["topbarmenubutton"];
const _c2 = ["topbarmenu"];
const _c3 = a0 => ({
  "layout-topbar-menu-mobile-active": a0
});
class AppTopBarComponent {
  constructor(layoutService, loginService, router) {
    this.layoutService = layoutService;
    this.loginService = loginService;
    this.router = router;
  }
  logout() {
    this.loginService.logout();
    this.router.navigate(['/']); // Redirige al usuario a la página de inicio o cualquier otra ruta que prefieras
  }
  static {
    this.ɵfac = function AppTopBarComponent_Factory(t) {
      return new (t || AppTopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_demo_service_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppTopBarComponent,
      selectors: [["app-topbar"]],
      viewQuery: function AppTopBarComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.menuButton = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.topbarMenuButton = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
        }
      },
      decls: 20,
      vars: 3,
      consts: [["menubutton", ""], ["topbarmenubutton", ""], ["topbarmenu", ""], [1, "layout-topbar"], ["routerLink", "/", 1, "layout-topbar-logo"], [1, "brand-agrofranco"], [1, "p-link", "layout-menu-button", "layout-topbar-button", 3, "click"], [1, "pi", "pi-bars"], [1, "p-link", "layout-topbar-menu-button", "layout-topbar-button", 3, "click"], [1, "pi", "pi-ellipsis-v"], [1, "layout-topbar-menu", 3, "ngClass"], ["title", "Perfil", 1, "p-link", "layout-topbar-button"], [1, "pi", "pi-user"], ["title", "Cerrar Sesi\u00F3n", 1, "p-link", "layout-topbar-button", "logout-button", 3, "click"], [1, "pi", "pi-sign-out"]],
      template: function AppTopBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "a", 4)(2, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "AgroFranco");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 6, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppTopBarComponent_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.layoutService.onMenuToggle());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 8, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppTopBarComponent_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.layoutService.showProfileSidebar());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10, 2)(12, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Perfil");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppTopBarComponent_Template_button_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.logout());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Salir");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c3, ctx.layoutService.state.profileSidebarVisible));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 28526:
/*!*******************************************************!*\
  !*** ./src/app/layout/config/app.config.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppConfigComponent: () => (/* binding */ AppConfigComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/app.layout.service */ 27693);
/* harmony import */ var _app_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.menu.service */ 56904);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/sidebar */ 97196);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/radiobutton */ 54665);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 49136);








const _c0 = a0 => ({
  "text-primary-500": a0
});
function AppConfigComponent_i_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 42);
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, s_r1 === ctx_r1.scale));
  }
}
function AppConfigComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Tipo de Men\u00FA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 43)(4, "p-radioButton", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function AppConfigComponent_ng_container_10_Template_p_radioButton_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.menuMode, $event) || (ctx_r1.menuMode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Est\u00E1tico");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 43)(8, "p-radioButton", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function AppConfigComponent_ng_container_10_Template_p_radioButton_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.menuMode, $event) || (ctx_r1.menuMode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Escondido");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.menuMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.menuMode);
  }
}
function AppConfigComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Estilos -Cuadros de textos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 48)(4, "div", 49)(5, "p-radioButton", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function AppConfigComponent_ng_container_11_Template_p_radioButton_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.inputStyle, $event) || (ctx_r1.inputStyle = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Delineado");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 49)(9, "p-radioButton", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function AppConfigComponent_ng_container_11_Template_p_radioButton_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r1.inputStyle, $event) || (ctx_r1.inputStyle = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Completado");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.inputStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.inputStyle);
  }
}
class AppConfigComponent {
  constructor(layoutService, menuService) {
    this.layoutService = layoutService;
    this.menuService = menuService;
    this.minimal = false;
    this.scales = [12, 13, 14, 15, 16];
  }
  get visible() {
    return this.layoutService.state.configSidebarVisible;
  }
  set visible(_val) {
    this.layoutService.state.configSidebarVisible = _val;
  }
  get scale() {
    return this.layoutService.config.scale;
  }
  set scale(_val) {
    this.layoutService.config.scale = _val;
  }
  get menuMode() {
    return this.layoutService.config.menuMode;
  }
  set menuMode(_val) {
    this.layoutService.config.menuMode = _val;
  }
  get inputStyle() {
    return this.layoutService.config.inputStyle;
  }
  set inputStyle(_val) {
    this.layoutService.config.inputStyle = _val;
  }
  get ripple() {
    return this.layoutService.config.ripple;
  }
  set ripple(_val) {
    this.layoutService.config.ripple = _val;
  }
  onConfigButtonClick() {
    this.layoutService.showConfigSidebar();
  }
  changeTheme(theme, colorScheme) {
    const themeLink = document.getElementById('theme-css');
    const newHref = themeLink.getAttribute('href').replace(this.layoutService.config.theme, theme);
    this.layoutService.config.colorScheme;
    this.replaceThemeLink(newHref, () => {
      this.layoutService.config.theme = theme;
      this.layoutService.config.colorScheme = colorScheme;
      this.layoutService.onConfigUpdate();
    });
  }
  replaceThemeLink(href, onComplete) {
    const id = 'theme-css';
    const themeLink = document.getElementById('theme-css');
    const cloneLinkElement = themeLink.cloneNode(true);
    cloneLinkElement.setAttribute('href', href);
    cloneLinkElement.setAttribute('id', id + '-clone');
    themeLink.parentNode.insertBefore(cloneLinkElement, themeLink.nextSibling);
    cloneLinkElement.addEventListener('load', () => {
      themeLink.remove();
      cloneLinkElement.setAttribute('id', id);
      onComplete();
    });
  }
  decrementScale() {
    this.scale--;
    this.applyScale();
  }
  incrementScale() {
    this.scale++;
    this.applyScale();
  }
  applyScale() {
    document.documentElement.style.fontSize = this.scale + 'px';
  }
  static {
    this.ɵfac = function AppConfigComponent_Factory(t) {
      return new (t || AppConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_menu_service__WEBPACK_IMPORTED_MODULE_1__.MenuService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppConfigComponent,
      selectors: [["app-config"]],
      inputs: {
        minimal: "minimal"
      },
      decls: 120,
      vars: 7,
      consts: [["type", "button", 1, "layout-config-button", "p-link", 3, "click"], [1, "pi", "pi-cog"], ["position", "right", "styleClass", "layout-config-sidebar w-20rem", 3, "visibleChange", "visible", "transitionOptions"], [1, "flex", "align-items-center"], ["icon", "pi pi-minus", "type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "w-2rem", "h-2rem", "mr-2", 3, "click", "disabled"], [1, "flex", "gap-2", "align-items-center"], ["class", "pi pi-circle-fill text-300", 3, "ngClass", 4, "ngFor", "ngForOf"], ["icon", "pi pi-plus", "type", "button", "pButton", "", 1, "p-button-text", "p-button-rounded", "w-2rem", "h-2rem", "ml-2", 3, "click", "disabled"], [4, "ngIf"], [1, "grid"], [1, "col-3"], [1, "p-link", "w-2rem", "h-2rem", 3, "click"], ["src", "assets/layout/images/themes/bootstrap4-light-blue.svg", "alt", "Bootstrap Light Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/bootstrap4-light-purple.svg", "alt", "Bootstrap Light Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/bootstrap4-dark-blue.svg", "alt", "Bootstrap Dark Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/bootstrap4-dark-purple.svg", "alt", "Bootstrap Dark Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/md-light-indigo.svg", "alt", "Material Light Indigo", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/md-light-deeppurple.svg", "alt", "Material Light DeepPurple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/md-dark-indigo.svg", "alt", "Material Dark Indigo", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/md-dark-deeppurple.svg", "alt", "Material Dark DeepPurple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/tailwind-light.png", "alt", "Tailwind Light", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/fluent-light.png", "alt", "Fluent Light", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-light-indigo.png", "alt", "Lara Light Indigo", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-light-blue.png", "alt", "Lara Light Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-light-purple.png", "alt", "Lara Light Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-light-teal.png", "alt", "Lara Light Teal", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-dark-indigo.png", "alt", "Lara Dark Indigo", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-dark-blue.png", "alt", "Lara Dark Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-dark-purple.png", "alt", "Lara Dark Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/lara-dark-teal.png", "alt", "Lara Dark Teal", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/saga-blue.png", "alt", "Saga Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/saga-green.png", "alt", "Saga Green", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/saga-orange.png", "alt", "Saga Orange", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/saga-purple.png", "alt", "Saga Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/vela-blue.png", "alt", "Vela Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/vela-green.png", "alt", "Vela Green", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/vela-orange.png", "alt", "Vela Orange", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/vela-purple.png", "alt", "Vela Purple", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/arya-blue.png", "alt", "Arya Blue", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/arya-green.png", "alt", "Arya Green", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/arya-orange.png", "alt", "Arya Orange", 1, "w-2rem", "h-2rem"], ["src", "assets/layout/images/themes/arya-purple.png", "alt", "Arya Purple", 1, "w-2rem", "h-2rem"], [1, "pi", "pi-circle-fill", "text-300", 3, "ngClass"], [1, "field-radiobutton"], ["name", "menuMode", "value", "static", "inputId", "mode1", 3, "ngModelChange", "ngModel"], ["for", "mode1"], ["name", "menuMode", "value", "overlay", "inputId", "mode2", 3, "ngModelChange", "ngModel"], ["for", "mode2"], [1, "flex"], [1, "field-radiobutton", "flex-1"], ["name", "inputStyle", "value", "outlined", "inputId", "outlined_input", 3, "ngModelChange", "ngModel"], ["for", "outlined_input"], ["name", "inputStyle", "value", "filled", "inputId", "filled_input", 3, "ngModelChange", "ngModel"], ["for", "filled_input"]],
      template: function AppConfigComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_0_listener() {
            return ctx.onConfigButtonClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p-sidebar", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("visibleChange", function AppConfigComponent_Template_p_sidebar_visibleChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.visible, $event) || (ctx.visible = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Tama\u00F1o");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_6_listener() {
            return ctx.decrementScale();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AppConfigComponent_i_8_Template, 1, 3, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_9_listener() {
            return ctx.incrementScale();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AppConfigComponent_ng_container_10_Template, 11, 2, "ng-container", 8)(11, AppConfigComponent_ng_container_11_Template, 12, 2, "ng-container", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Estilos - Bootstrap");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9)(15, "div", 10)(16, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_16_listener() {
            return ctx.changeTheme("bootstrap4-light-blue", "light");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10)(19, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_19_listener() {
            return ctx.changeTheme("bootstrap4-light-purple", "light");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 10)(22, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_22_listener() {
            return ctx.changeTheme("bootstrap4-dark-blue", "dark");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "img", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 10)(25, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_25_listener() {
            return ctx.changeTheme("bootstrap4-dark-purple", "dark");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "img", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Dise\u00F1o - Material Design");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 9)(30, "div", 10)(31, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_31_listener() {
            return ctx.changeTheme("md-light-indigo", "light");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "img", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 10)(34, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_34_listener() {
            return ctx.changeTheme("md-light-deeppurple", "light");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "img", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 10)(37, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_37_listener() {
            return ctx.changeTheme("md-dark-indigo", "dark");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "img", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 10)(40, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_40_listener() {
            return ctx.changeTheme("md-dark-deeppurple", "dark");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "img", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Dise\u00F1o - Tailwind");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 9)(45, "div", 10)(46, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_46_listener() {
            return ctx.changeTheme("tailwind-light", "light");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Dise\u00F1o - Fluent UI");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 9)(51, "div", 10)(52, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_52_listener() {
            return ctx.changeTheme("fluent-light", "light");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "img", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Dise\u00F1o PrimeOne - 2022");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 9)(57, "div", 10)(58, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_58_listener() {
            return ctx.changeTheme("lara-light-indigo", "light");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "img", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 10)(61, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_61_listener() {
            return ctx.changeTheme("lara-light-blue", "light");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "img", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 10)(64, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_64_listener() {
            return ctx.changeTheme("lara-light-purple", "light");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "img", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 10)(67, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_67_listener() {
            return ctx.changeTheme("lara-light-teal", "light");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "img", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 10)(70, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_70_listener() {
            return ctx.changeTheme("lara-dark-indigo", "dark");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "img", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 10)(73, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_73_listener() {
            return ctx.changeTheme("lara-dark-blue", "dark");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "img", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 10)(76, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_76_listener() {
            return ctx.changeTheme("lara-dark-purple", "dark");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "img", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 10)(79, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_79_listener() {
            return ctx.changeTheme("lara-dark-teal", "dark");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "img", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Dise\u00F1o PrimeOne - 2021");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 9)(84, "div", 10)(85, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_85_listener() {
            return ctx.changeTheme("saga-blue", "light");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "img", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 10)(88, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_88_listener() {
            return ctx.changeTheme("saga-green", "light");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "img", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 10)(91, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_91_listener() {
            return ctx.changeTheme("saga-orange", "light");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "img", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 10)(94, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_94_listener() {
            return ctx.changeTheme("saga-purple", "light");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "img", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 10)(97, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_97_listener() {
            return ctx.changeTheme("vela-blue", "dark");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "img", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 10)(100, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_100_listener() {
            return ctx.changeTheme("vela-green", "dark");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "img", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 10)(103, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_103_listener() {
            return ctx.changeTheme("vela-orange", "dark");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "img", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 10)(106, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_106_listener() {
            return ctx.changeTheme("vela-purple", "dark");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "img", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 10)(109, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_109_listener() {
            return ctx.changeTheme("arya-blue", "dark");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](110, "img", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 10)(112, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_112_listener() {
            return ctx.changeTheme("arya-green", "dark");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "img", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 10)(115, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_115_listener() {
            return ctx.changeTheme("arya-orange", "dark");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](116, "img", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 10)(118, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppConfigComponent_Template_button_click_118_listener() {
            return ctx.changeTheme("arya-purple", "dark");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](119, "img", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("visible", ctx.visible);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("transitionOptions", ".3s cubic-bezier(0, 0, 0.2, 1)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.scale === ctx.scales[0]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.scales);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.scale === ctx.scales[ctx.scales.length - 1]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.minimal);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.minimal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, primeng_sidebar__WEBPACK_IMPORTED_MODULE_5__.Sidebar, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_6__.RadioButton, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 12204:
/*!************************************************!*\
  !*** ./src/app/layout/config/config.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppConfigModule: () => (/* binding */ AppConfigModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/sidebar */ 97196);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/radiobutton */ 54665);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputswitch */ 46764);
/* harmony import */ var _app_config_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.config.component */ 28526);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);








class AppConfigModule {
  static {
    this.ɵfac = function AppConfigModule_Factory(t) {
      return new (t || AppConfigModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppConfigModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_4__.SidebarModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_5__.RadioButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_7__.InputSwitchModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppConfigModule, {
    declarations: [_app_config_component__WEBPACK_IMPORTED_MODULE_0__.AppConfigComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_4__.SidebarModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_5__.RadioButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_7__.InputSwitchModule],
    exports: [_app_config_component__WEBPACK_IMPORTED_MODULE_0__.AppConfigComponent]
  });
})();

/***/ }),

/***/ 27693:
/*!******************************************************!*\
  !*** ./src/app/layout/service/app.layout.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutService: () => (/* binding */ LayoutService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


class LayoutService {
  constructor() {
    this.config = {
      ripple: false,
      inputStyle: 'outlined',
      menuMode: 'static',
      colorScheme: 'light',
      theme: 'lara-light-blue',
      scale: 14
    };
    this.state = {
      staticMenuDesktopInactive: false,
      overlayMenuActive: false,
      profileSidebarVisible: false,
      configSidebarVisible: false,
      staticMenuMobileActive: false,
      menuHoverActive: false
    };
    this.configUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.overlayOpen = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.configUpdate$ = this.configUpdate.asObservable();
    this.overlayOpen$ = this.overlayOpen.asObservable();
  }
  onMenuToggle() {
    if (this.isOverlay()) {
      this.state.overlayMenuActive = !this.state.overlayMenuActive;
      if (this.state.overlayMenuActive) {
        this.overlayOpen.next(null);
      }
    }
    if (this.isDesktop()) {
      this.state.staticMenuDesktopInactive = !this.state.staticMenuDesktopInactive;
    } else {
      this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive;
      if (this.state.staticMenuMobileActive) {
        this.overlayOpen.next(null);
      }
    }
  }
  onOverlaySubmenuOpen() {
    this.overlayOpen.next(null);
  }
  showProfileSidebar() {
    this.state.profileSidebarVisible = !this.state.profileSidebarVisible;
    if (this.state.profileSidebarVisible) {
      this.overlayOpen.next(null);
    }
  }
  showConfigSidebar() {
    this.state.configSidebarVisible = true;
  }
  isOverlay() {
    return this.config.menuMode === 'overlay';
  }
  isDesktop() {
    return window.innerWidth > 991;
  }
  isMobile() {
    return !this.isDesktop();
  }
  onConfigUpdate() {
    this.configUpdate.next(this.config);
  }
  static {
    this.ɵfac = function LayoutService_Factory(t) {
      return new (t || LayoutService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LayoutService,
      factory: LayoutService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 45312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 84429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 50635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 45312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(84429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map