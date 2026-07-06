"use strict";
(self["webpackChunksakai"] = self["webpackChunksakai"] || []).push([["src_app_demo_components_uikit_uikit_module_ts"],{

/***/ 86883:
/*!***************************************************************!*\
  !*** ./src/app/demo/components/uikit/uikit-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UikitRoutingModule: () => (/* binding */ UikitRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);



class UikitRoutingModule {
  static {
    this.ɵfac = function UikitRoutingModule_Factory(t) {
      return new (t || UikitRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UikitRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild([{
        path: 'formlayout',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_uikit_formlayout_formlayout_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./formlayout/formlayout.module */ 45419)).then(m => m.FormlayoutModule)
      }, {
        path: 'button',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-tieredmenu_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-splitbutton_mjs"), __webpack_require__.e("src_app_demo_components_uikit_button_buttondemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./button/buttondemo.module */ 61710)).then(m => m.ButtonDemoModule)
      }, {
        path: 'charts',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_uikit_charts_charts_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./charts/charts.module */ 59505)).then(m => m.ChartsModule)
      }, {
        path: 'file',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-messages_mjs"), __webpack_require__.e("src_app_demo_components_uikit_file_filedemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./file/filedemo.module */ 93014)).then(m => m.FileDemoModule)
      }, {
        path: 'floatlabel',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-cascadeselect_mjs-node_modules_primeng_fesm2022-2b9ce5"), __webpack_require__.e("src_app_demo_components_uikit_floatlabel_floatlabeldemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./floatlabel/floatlabeldemo.module */ 886)).then(m => m.FloatlabelDemoModule)
      }, {
        path: 'input',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-checkbox_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-cascadeselect_mjs-node_modules_primeng_fesm2022-2b9ce5"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-chip_mjs"), __webpack_require__.e("src_app_demo_components_uikit_input_inputdemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./input/inputdemo.module */ 5892)).then(m => m.InputDemoModule)
      }, {
        path: 'invalidstate',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-cascadeselect_mjs-node_modules_primeng_fesm2022-2b9ce5"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-password_mjs"), __webpack_require__.e("src_app_demo_components_uikit_invalid_invalidstatedemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./invalid/invalidstatedemo.module */ 29439)).then(m => m.InvalidStateDemoModule)
      }, {
        path: 'list',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_rxjs_dist_esm_internal_observable_interval_js-node_modules_primeng_fesm2-dfece2"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_components_uikit_list_listdemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./list/listdemo.module */ 33834)).then(m => m.ListDemoModule)
      }, {
        path: 'media',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_uikit_media_mediademo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./media/mediademo.module */ 29652)).then(m => m.MediaDemoModule)
      }, {
        path: 'message',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-messages_mjs"), __webpack_require__.e("src_app_demo_components_uikit_messages_messagesdemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./messages/messagesdemo.module */ 18558)).then(m => m.MessagesDemoModule)
      }, {
        path: 'misc',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-chip_mjs"), __webpack_require__.e("src_app_demo_components_uikit_misc_miscdemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./misc/miscdemo.module */ 46134)).then(m => m.MiscDemoModule)
      }, {
        path: 'overlay',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_uikit_overlays_overlaysdemo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./overlays/overlaysdemo.module */ 18980)).then(m => m.OverlaysDemoModule)
      }, {
        path: 'panel',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-tieredmenu_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-fieldset_mjs-node_modules_primeng_fesm2022_prim-b028b5"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-divider_mjs-node_modules_primeng_fesm2022_prime-b64a27"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-splitbutton_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_demo_components_uikit_panels_panelsdemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./panels/panelsdemo.module */ 69448)).then(m => m.PanelsDemoModule)
      }, {
        path: 'table',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_demo_components_uikit_table_tabledemo-routing_module_ts"), __webpack_require__.e("src_app_demo_components_uikit_table_tabledemo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./table/tabledemo.module */ 89112)).then(m => m.TableDemoModule)
      }, {
        path: 'tree',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_demo_components_uikit_tree_treedemo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tree/treedemo.module */ 55902)).then(m => m.TreeDemoModule)
      }, {
        path: 'menu',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-panelmenu_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2022_primeng-tieredmenu_mjs"), __webpack_require__.e("default-node_modules_rxjs_dist_esm_internal_observable_interval_js-node_modules_primeng_fesm2-dfece2"), __webpack_require__.e("src_app_demo_components_uikit_menus_menus_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./menus/menus.module */ 78233)).then(m => m.MenusModule)
      }]), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UikitRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 48098:
/*!*******************************************************!*\
  !*** ./src/app/demo/components/uikit/uikit.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UikitModule: () => (/* binding */ UikitModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _uikit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uikit-routing.module */ 86883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);



class UikitModule {
  static {
    this.ɵfac = function UikitModule_Factory(t) {
      return new (t || UikitModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UikitModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _uikit_routing_module__WEBPACK_IMPORTED_MODULE_0__.UikitRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UikitModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _uikit_routing_module__WEBPACK_IMPORTED_MODULE_0__.UikitRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_demo_components_uikit_uikit_module_ts.js.map