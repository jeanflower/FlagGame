(this["webpackJsonpFlagGame"] = this["webpackJsonpFlagGame"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.rc-slider {\n  position: relative;\n  height: 14px;\n  padding: 5px 0;\n  width: 100%;\n  border-radius: 6px;\n  touch-action: none;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-rail {\n  position: absolute;\n  width: 100%;\n  background-color: #e9e9e9;\n  height: 4px;\n  border-radius: 6px;\n}\n.rc-slider-track {\n  position: absolute;\n  left: 0;\n  height: 4px;\n  border-radius: 6px;\n  background-color: #abe2fb;\n}\n.rc-slider-handle {\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  cursor: -webkit-grab;\n  margin-top: -5px;\n  cursor: grab;\n  border-radius: 50%;\n  border: solid 2px #96dbfa;\n  background-color: #fff;\n  touch-action: pan-x;\n}\n.rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {\n  border-color: #57c5f7;\n  box-shadow: 0 0 0 5px #96dbfa;\n}\n.rc-slider-handle:focus {\n  outline: none;\n}\n.rc-slider-handle-click-focused:focus {\n  border-color: #96dbfa;\n  box-shadow: unset;\n}\n.rc-slider-handle:hover {\n  border-color: #57c5f7;\n}\n.rc-slider-handle:active {\n  border-color: #57c5f7;\n  box-shadow: 0 0 5px #57c5f7;\n  cursor: grabbing;\n}\n.rc-slider-mark {\n  position: absolute;\n  top: 18px;\n  left: 0;\n  width: 100%;\n  font-size: 12px;\n}\n.rc-slider-mark-text {\n  position: absolute;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  cursor: pointer;\n  color: #999;\n}\n.rc-slider-mark-text-active {\n  color: #666;\n}\n.rc-slider-step {\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background: transparent;\n}\n.rc-slider-dot {\n  position: absolute;\n  bottom: -2px;\n  margin-left: -4px;\n  width: 8px;\n  height: 8px;\n  border: 2px solid #e9e9e9;\n  background-color: #fff;\n  cursor: pointer;\n  border-radius: 50%;\n  vertical-align: middle;\n}\n.rc-slider-dot-active {\n  border-color: #96dbfa;\n}\n.rc-slider-dot-reverse {\n  margin-right: -4px;\n}\n.rc-slider-disabled {\n  background-color: #e9e9e9;\n}\n.rc-slider-disabled .rc-slider-track {\n  background-color: #ccc;\n}\n.rc-slider-disabled .rc-slider-handle,\n.rc-slider-disabled .rc-slider-dot {\n  border-color: #ccc;\n  box-shadow: none;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.rc-slider-disabled .rc-slider-mark-text,\n.rc-slider-disabled .rc-slider-dot {\n  cursor: not-allowed !important;\n}\n.rc-slider-vertical {\n  width: 14px;\n  height: 100%;\n  padding: 0 5px;\n}\n.rc-slider-vertical .rc-slider-rail {\n  height: 100%;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-track {\n  left: 5px;\n  bottom: 0;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-handle {\n  margin-left: -5px;\n  touch-action: pan-y;\n}\n.rc-slider-vertical .rc-slider-mark {\n  top: 0;\n  left: 18px;\n  height: 100%;\n}\n.rc-slider-vertical .rc-slider-step {\n  height: 100%;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-dot {\n  left: 2px;\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:first-child {\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:last-child {\n  margin-bottom: -4px;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  display: block !important;\n  animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-leave {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  display: block !important;\n  animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,\n.rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {\n  animation-name: rcSliderTooltipZoomDownIn;\n  animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {\n  animation-name: rcSliderTooltipZoomDownOut;\n  animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  transform: scale(0, 0);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n}\n.rc-slider-tooltip-zoom-down-leave {\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n@keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    transform-origin: 50% 100%;\n    transform: scale(0, 0);\n  }\n  100% {\n    transform-origin: 50% 100%;\n    transform: scale(1, 1);\n  }\n}\n@keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    transform-origin: 50% 100%;\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    transform-origin: 50% 100%;\n    transform: scale(0, 0);\n  }\n}\n.rc-slider-tooltip {\n  position: absolute;\n  left: -9999px;\n  top: -9999px;\n  visibility: visible;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-tooltip * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-tooltip-hidden {\n  display: none;\n}\n.rc-slider-tooltip-placement-top {\n  padding: 4px 0 8px 0;\n}\n.rc-slider-tooltip-inner {\n  padding: 6px 2px;\n  min-width: 24px;\n  height: 24px;\n  font-size: 12px;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  background-color: #6c6c6c;\n  border-radius: 6px;\n  box-shadow: 0 0 4px #d9d9d9;\n}\n.rc-slider-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {\n  bottom: 4px;\n  left: 50%;\n  margin-left: -4px;\n  border-width: 4px 4px 0;\n  border-top-color: #6c6c6c;\n}\n\ncanvas{\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n#chartjs-tooltip {\n  opacity: 1;\n  position: absolute;\n  background:white;\n  color: white;\n  border-radius: 3px;\n  transition: all .1s ease;\n  pointer-events: auto !important;\n  /*pointer-events: none;*/\n  transform: translate(-50%, 0);\n}\n\n.chartjs-tooltip-key {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin-right: 10px;\n}\n", "",{"version":3,"sources":["webpack://src/App.css"],"names":[],"mappings":"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","sourcesContent":[".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.rc-slider {\n  position: relative;\n  height: 14px;\n  padding: 5px 0;\n  width: 100%;\n  border-radius: 6px;\n  touch-action: none;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-rail {\n  position: absolute;\n  width: 100%;\n  background-color: #e9e9e9;\n  height: 4px;\n  border-radius: 6px;\n}\n.rc-slider-track {\n  position: absolute;\n  left: 0;\n  height: 4px;\n  border-radius: 6px;\n  background-color: #abe2fb;\n}\n.rc-slider-handle {\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n  cursor: -webkit-grab;\n  margin-top: -5px;\n  cursor: grab;\n  border-radius: 50%;\n  border: solid 2px #96dbfa;\n  background-color: #fff;\n  touch-action: pan-x;\n}\n.rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {\n  border-color: #57c5f7;\n  box-shadow: 0 0 0 5px #96dbfa;\n}\n.rc-slider-handle:focus {\n  outline: none;\n}\n.rc-slider-handle-click-focused:focus {\n  border-color: #96dbfa;\n  box-shadow: unset;\n}\n.rc-slider-handle:hover {\n  border-color: #57c5f7;\n}\n.rc-slider-handle:active {\n  border-color: #57c5f7;\n  box-shadow: 0 0 5px #57c5f7;\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n.rc-slider-mark {\n  position: absolute;\n  top: 18px;\n  left: 0;\n  width: 100%;\n  font-size: 12px;\n}\n.rc-slider-mark-text {\n  position: absolute;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  cursor: pointer;\n  color: #999;\n}\n.rc-slider-mark-text-active {\n  color: #666;\n}\n.rc-slider-step {\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background: transparent;\n}\n.rc-slider-dot {\n  position: absolute;\n  bottom: -2px;\n  margin-left: -4px;\n  width: 8px;\n  height: 8px;\n  border: 2px solid #e9e9e9;\n  background-color: #fff;\n  cursor: pointer;\n  border-radius: 50%;\n  vertical-align: middle;\n}\n.rc-slider-dot-active {\n  border-color: #96dbfa;\n}\n.rc-slider-dot-reverse {\n  margin-right: -4px;\n}\n.rc-slider-disabled {\n  background-color: #e9e9e9;\n}\n.rc-slider-disabled .rc-slider-track {\n  background-color: #ccc;\n}\n.rc-slider-disabled .rc-slider-handle,\n.rc-slider-disabled .rc-slider-dot {\n  border-color: #ccc;\n  box-shadow: none;\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.rc-slider-disabled .rc-slider-mark-text,\n.rc-slider-disabled .rc-slider-dot {\n  cursor: not-allowed !important;\n}\n.rc-slider-vertical {\n  width: 14px;\n  height: 100%;\n  padding: 0 5px;\n}\n.rc-slider-vertical .rc-slider-rail {\n  height: 100%;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-track {\n  left: 5px;\n  bottom: 0;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-handle {\n  margin-left: -5px;\n  touch-action: pan-y;\n}\n.rc-slider-vertical .rc-slider-mark {\n  top: 0;\n  left: 18px;\n  height: 100%;\n}\n.rc-slider-vertical .rc-slider-step {\n  height: 100%;\n  width: 4px;\n}\n.rc-slider-vertical .rc-slider-dot {\n  left: 2px;\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:first-child {\n  margin-bottom: -4px;\n}\n.rc-slider-vertical .rc-slider-dot:last-child {\n  margin-bottom: -4px;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  display: block !important;\n  animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-leave {\n  animation-duration: 0.3s;\n  animation-fill-mode: both;\n  display: block !important;\n  animation-play-state: paused;\n}\n.rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,\n.rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {\n  animation-name: rcSliderTooltipZoomDownIn;\n  animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {\n  animation-name: rcSliderTooltipZoomDownOut;\n  animation-play-state: running;\n}\n.rc-slider-tooltip-zoom-down-enter,\n.rc-slider-tooltip-zoom-down-appear {\n  transform: scale(0, 0);\n  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n}\n.rc-slider-tooltip-zoom-down-leave {\n  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n}\n@keyframes rcSliderTooltipZoomDownIn {\n  0% {\n    opacity: 0;\n    transform-origin: 50% 100%;\n    transform: scale(0, 0);\n  }\n  100% {\n    transform-origin: 50% 100%;\n    transform: scale(1, 1);\n  }\n}\n@keyframes rcSliderTooltipZoomDownOut {\n  0% {\n    transform-origin: 50% 100%;\n    transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    transform-origin: 50% 100%;\n    transform: scale(0, 0);\n  }\n}\n.rc-slider-tooltip {\n  position: absolute;\n  left: -9999px;\n  top: -9999px;\n  visibility: visible;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-tooltip * {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.rc-slider-tooltip-hidden {\n  display: none;\n}\n.rc-slider-tooltip-placement-top {\n  padding: 4px 0 8px 0;\n}\n.rc-slider-tooltip-inner {\n  padding: 6px 2px;\n  min-width: 24px;\n  height: 24px;\n  font-size: 12px;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  background-color: #6c6c6c;\n  border-radius: 6px;\n  box-shadow: 0 0 4px #d9d9d9;\n}\n.rc-slider-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {\n  bottom: 4px;\n  left: 50%;\n  margin-left: -4px;\n  border-width: 4px 4px 0;\n  border-top-color: #6c6c6c;\n}\n\ncanvas{\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n}\n#chartjs-tooltip {\n  opacity: 1;\n  position: absolute;\n  background:white;\n  color: white;\n  border-radius: 3px;\n  -webkit-transition: all .1s ease;\n  transition: all .1s ease;\n  pointer-events: auto !important;\n  /*pointer-events: none;*/\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n}\n\n.chartjs-tooltip-key {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin-right: 10px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT;;cAEY;EACZ,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE;aACW;AACb","sourcesContent":["body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default, AppContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContent", function() { return AppContent; });
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBar */ "./src/NavBar.tsx");
/* harmony import */ var _svgs_ad_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svgs/ad.svg */ "./src/svgs/ad.svg");
/* harmony import */ var _svgs_ae_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./svgs/ae.svg */ "./src/svgs/ae.svg");
/* harmony import */ var _svgs_af_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./svgs/af.svg */ "./src/svgs/af.svg");
/* harmony import */ var _svgs_ag_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./svgs/ag.svg */ "./src/svgs/ag.svg");
/* harmony import */ var _svgs_ai_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./svgs/ai.svg */ "./src/svgs/ai.svg");
/* harmony import */ var _svgs_al_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./svgs/al.svg */ "./src/svgs/al.svg");
/* harmony import */ var _svgs_am_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./svgs/am.svg */ "./src/svgs/am.svg");
/* harmony import */ var _svgs_ao_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./svgs/ao.svg */ "./src/svgs/ao.svg");
/* harmony import */ var _svgs_aq_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./svgs/aq.svg */ "./src/svgs/aq.svg");
/* harmony import */ var _svgs_ar_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./svgs/ar.svg */ "./src/svgs/ar.svg");
/* harmony import */ var _svgs_as_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./svgs/as.svg */ "./src/svgs/as.svg");
/* harmony import */ var _svgs_at_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./svgs/at.svg */ "./src/svgs/at.svg");
/* harmony import */ var _svgs_au_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./svgs/au.svg */ "./src/svgs/au.svg");
/* harmony import */ var _svgs_aw_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./svgs/aw.svg */ "./src/svgs/aw.svg");
/* harmony import */ var _svgs_ax_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./svgs/ax.svg */ "./src/svgs/ax.svg");
/* harmony import */ var _svgs_az_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./svgs/az.svg */ "./src/svgs/az.svg");
/* harmony import */ var _svgs_ba_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./svgs/ba.svg */ "./src/svgs/ba.svg");
/* harmony import */ var _svgs_bb_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./svgs/bb.svg */ "./src/svgs/bb.svg");
/* harmony import */ var _svgs_bd_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./svgs/bd.svg */ "./src/svgs/bd.svg");
/* harmony import */ var _svgs_be_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./svgs/be.svg */ "./src/svgs/be.svg");
/* harmony import */ var _svgs_bf_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./svgs/bf.svg */ "./src/svgs/bf.svg");
/* harmony import */ var _svgs_bg_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./svgs/bg.svg */ "./src/svgs/bg.svg");
/* harmony import */ var _svgs_bh_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./svgs/bh.svg */ "./src/svgs/bh.svg");
/* harmony import */ var _svgs_bi_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./svgs/bi.svg */ "./src/svgs/bi.svg");
/* harmony import */ var _svgs_bj_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./svgs/bj.svg */ "./src/svgs/bj.svg");
/* harmony import */ var _svgs_bl_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./svgs/bl.svg */ "./src/svgs/bl.svg");
/* harmony import */ var _svgs_bm_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./svgs/bm.svg */ "./src/svgs/bm.svg");
/* harmony import */ var _svgs_bn_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./svgs/bn.svg */ "./src/svgs/bn.svg");
/* harmony import */ var _svgs_bo_svg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./svgs/bo.svg */ "./src/svgs/bo.svg");
/* harmony import */ var _svgs_bq_svg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./svgs/bq.svg */ "./src/svgs/bq.svg");
/* harmony import */ var _svgs_br_svg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./svgs/br.svg */ "./src/svgs/br.svg");
/* harmony import */ var _svgs_bs_svg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./svgs/bs.svg */ "./src/svgs/bs.svg");
/* harmony import */ var _svgs_bt_svg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./svgs/bt.svg */ "./src/svgs/bt.svg");
/* harmony import */ var _svgs_bv_svg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./svgs/bv.svg */ "./src/svgs/bv.svg");
/* harmony import */ var _svgs_bw_svg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./svgs/bw.svg */ "./src/svgs/bw.svg");
/* harmony import */ var _svgs_by_svg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./svgs/by.svg */ "./src/svgs/by.svg");
/* harmony import */ var _svgs_bz_svg__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./svgs/bz.svg */ "./src/svgs/bz.svg");
/* harmony import */ var _svgs_ca_svg__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./svgs/ca.svg */ "./src/svgs/ca.svg");
/* harmony import */ var _svgs_cc_svg__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./svgs/cc.svg */ "./src/svgs/cc.svg");
/* harmony import */ var _svgs_cd_svg__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./svgs/cd.svg */ "./src/svgs/cd.svg");
/* harmony import */ var _svgs_cf_svg__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./svgs/cf.svg */ "./src/svgs/cf.svg");
/* harmony import */ var _svgs_cg_svg__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./svgs/cg.svg */ "./src/svgs/cg.svg");
/* harmony import */ var _svgs_ch_svg__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./svgs/ch.svg */ "./src/svgs/ch.svg");
/* harmony import */ var _svgs_ci_svg__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./svgs/ci.svg */ "./src/svgs/ci.svg");
/* harmony import */ var _svgs_ck_svg__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./svgs/ck.svg */ "./src/svgs/ck.svg");
/* harmony import */ var _svgs_cl_svg__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./svgs/cl.svg */ "./src/svgs/cl.svg");
/* harmony import */ var _svgs_cm_svg__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./svgs/cm.svg */ "./src/svgs/cm.svg");
/* harmony import */ var _svgs_cn_svg__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./svgs/cn.svg */ "./src/svgs/cn.svg");
/* harmony import */ var _svgs_co_svg__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./svgs/co.svg */ "./src/svgs/co.svg");
/* harmony import */ var _svgs_cr_svg__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./svgs/cr.svg */ "./src/svgs/cr.svg");
/* harmony import */ var _svgs_cu_svg__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./svgs/cu.svg */ "./src/svgs/cu.svg");
/* harmony import */ var _svgs_cv_svg__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./svgs/cv.svg */ "./src/svgs/cv.svg");
/* harmony import */ var _svgs_cw_svg__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./svgs/cw.svg */ "./src/svgs/cw.svg");
/* harmony import */ var _svgs_cx_svg__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./svgs/cx.svg */ "./src/svgs/cx.svg");
/* harmony import */ var _svgs_cy_svg__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./svgs/cy.svg */ "./src/svgs/cy.svg");
/* harmony import */ var _svgs_cz_svg__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./svgs/cz.svg */ "./src/svgs/cz.svg");
/* harmony import */ var _svgs_de_svg__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./svgs/de.svg */ "./src/svgs/de.svg");
/* harmony import */ var _svgs_dj_svg__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./svgs/dj.svg */ "./src/svgs/dj.svg");
/* harmony import */ var _svgs_dk_svg__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./svgs/dk.svg */ "./src/svgs/dk.svg");
/* harmony import */ var _svgs_dm_svg__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./svgs/dm.svg */ "./src/svgs/dm.svg");
/* harmony import */ var _svgs_do_svg__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./svgs/do.svg */ "./src/svgs/do.svg");
/* harmony import */ var _svgs_dz_svg__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./svgs/dz.svg */ "./src/svgs/dz.svg");
/* harmony import */ var _svgs_ec_svg__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./svgs/ec.svg */ "./src/svgs/ec.svg");
/* harmony import */ var _svgs_ee_svg__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./svgs/ee.svg */ "./src/svgs/ee.svg");
/* harmony import */ var _svgs_eg_svg__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./svgs/eg.svg */ "./src/svgs/eg.svg");
/* harmony import */ var _svgs_eh_svg__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./svgs/eh.svg */ "./src/svgs/eh.svg");
/* harmony import */ var _svgs_er_svg__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./svgs/er.svg */ "./src/svgs/er.svg");
/* harmony import */ var _svgs_es_svg__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./svgs/es.svg */ "./src/svgs/es.svg");
/* harmony import */ var _svgs_et_svg__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./svgs/et.svg */ "./src/svgs/et.svg");
/* harmony import */ var _svgs_fi_svg__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./svgs/fi.svg */ "./src/svgs/fi.svg");
/* harmony import */ var _svgs_fj_svg__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./svgs/fj.svg */ "./src/svgs/fj.svg");
/* harmony import */ var _svgs_fk_svg__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./svgs/fk.svg */ "./src/svgs/fk.svg");
/* harmony import */ var _svgs_fm_svg__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./svgs/fm.svg */ "./src/svgs/fm.svg");
/* harmony import */ var _svgs_fo_svg__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./svgs/fo.svg */ "./src/svgs/fo.svg");
/* harmony import */ var _svgs_fr_svg__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./svgs/fr.svg */ "./src/svgs/fr.svg");
/* harmony import */ var _svgs_ga_svg__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./svgs/ga.svg */ "./src/svgs/ga.svg");
/* harmony import */ var _svgs_gb_svg__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./svgs/gb.svg */ "./src/svgs/gb.svg");
/* harmony import */ var _svgs_gb_eng_svg__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./svgs/gb-eng.svg */ "./src/svgs/gb-eng.svg");
/* harmony import */ var _svgs_gb_nir_svg__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./svgs/gb-nir.svg */ "./src/svgs/gb-nir.svg");
/* harmony import */ var _svgs_gb_sct_svg__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./svgs/gb-sct.svg */ "./src/svgs/gb-sct.svg");
/* harmony import */ var _svgs_gb_wls_svg__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./svgs/gb-wls.svg */ "./src/svgs/gb-wls.svg");
/* harmony import */ var _svgs_gd_svg__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./svgs/gd.svg */ "./src/svgs/gd.svg");
/* harmony import */ var _svgs_ge_svg__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./svgs/ge.svg */ "./src/svgs/ge.svg");
/* harmony import */ var _svgs_gf_svg__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./svgs/gf.svg */ "./src/svgs/gf.svg");
/* harmony import */ var _svgs_gg_svg__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./svgs/gg.svg */ "./src/svgs/gg.svg");
/* harmony import */ var _svgs_gh_svg__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./svgs/gh.svg */ "./src/svgs/gh.svg");
/* harmony import */ var _svgs_gi_svg__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./svgs/gi.svg */ "./src/svgs/gi.svg");
/* harmony import */ var _svgs_gl_svg__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./svgs/gl.svg */ "./src/svgs/gl.svg");
/* harmony import */ var _svgs_gm_svg__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./svgs/gm.svg */ "./src/svgs/gm.svg");
/* harmony import */ var _svgs_gn_svg__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./svgs/gn.svg */ "./src/svgs/gn.svg");
/* harmony import */ var _svgs_gp_svg__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./svgs/gp.svg */ "./src/svgs/gp.svg");
/* harmony import */ var _svgs_gq_svg__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./svgs/gq.svg */ "./src/svgs/gq.svg");
/* harmony import */ var _svgs_gr_svg__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./svgs/gr.svg */ "./src/svgs/gr.svg");
/* harmony import */ var _svgs_gs_svg__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./svgs/gs.svg */ "./src/svgs/gs.svg");
/* harmony import */ var _svgs_gt_svg__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./svgs/gt.svg */ "./src/svgs/gt.svg");
/* harmony import */ var _svgs_gu_svg__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./svgs/gu.svg */ "./src/svgs/gu.svg");
/* harmony import */ var _svgs_gw_svg__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./svgs/gw.svg */ "./src/svgs/gw.svg");
/* harmony import */ var _svgs_gy_svg__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./svgs/gy.svg */ "./src/svgs/gy.svg");
/* harmony import */ var _svgs_hk_svg__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./svgs/hk.svg */ "./src/svgs/hk.svg");
/* harmony import */ var _svgs_hm_svg__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./svgs/hm.svg */ "./src/svgs/hm.svg");
/* harmony import */ var _svgs_hn_svg__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./svgs/hn.svg */ "./src/svgs/hn.svg");
/* harmony import */ var _svgs_hr_svg__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./svgs/hr.svg */ "./src/svgs/hr.svg");
/* harmony import */ var _svgs_ht_svg__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./svgs/ht.svg */ "./src/svgs/ht.svg");
/* harmony import */ var _svgs_hu_svg__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./svgs/hu.svg */ "./src/svgs/hu.svg");
/* harmony import */ var _svgs_id_svg__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./svgs/id.svg */ "./src/svgs/id.svg");
/* harmony import */ var _svgs_ie_svg__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./svgs/ie.svg */ "./src/svgs/ie.svg");
/* harmony import */ var _svgs_il_svg__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./svgs/il.svg */ "./src/svgs/il.svg");
/* harmony import */ var _svgs_im_svg__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./svgs/im.svg */ "./src/svgs/im.svg");
/* harmony import */ var _svgs_in_svg__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./svgs/in.svg */ "./src/svgs/in.svg");
/* harmony import */ var _svgs_io_svg__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./svgs/io.svg */ "./src/svgs/io.svg");
/* harmony import */ var _svgs_iq_svg__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./svgs/iq.svg */ "./src/svgs/iq.svg");
/* harmony import */ var _svgs_ir_svg__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./svgs/ir.svg */ "./src/svgs/ir.svg");
/* harmony import */ var _svgs_is_svg__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ./svgs/is.svg */ "./src/svgs/is.svg");
/* harmony import */ var _svgs_it_svg__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ./svgs/it.svg */ "./src/svgs/it.svg");
/* harmony import */ var _svgs_je_svg__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ./svgs/je.svg */ "./src/svgs/je.svg");
/* harmony import */ var _svgs_jm_svg__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ./svgs/jm.svg */ "./src/svgs/jm.svg");
/* harmony import */ var _svgs_jo_svg__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ./svgs/jo.svg */ "./src/svgs/jo.svg");
/* harmony import */ var _svgs_jp_svg__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ./svgs/jp.svg */ "./src/svgs/jp.svg");
/* harmony import */ var _svgs_ke_svg__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ./svgs/ke.svg */ "./src/svgs/ke.svg");
/* harmony import */ var _svgs_kg_svg__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ./svgs/kg.svg */ "./src/svgs/kg.svg");
/* harmony import */ var _svgs_kh_svg__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ./svgs/kh.svg */ "./src/svgs/kh.svg");
/* harmony import */ var _svgs_ki_svg__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! ./svgs/ki.svg */ "./src/svgs/ki.svg");
/* harmony import */ var _svgs_km_svg__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! ./svgs/km.svg */ "./src/svgs/km.svg");
/* harmony import */ var _svgs_kn_svg__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! ./svgs/kn.svg */ "./src/svgs/kn.svg");
/* harmony import */ var _svgs_kp_svg__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! ./svgs/kp.svg */ "./src/svgs/kp.svg");
/* harmony import */ var _svgs_kr_svg__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! ./svgs/kr.svg */ "./src/svgs/kr.svg");
/* harmony import */ var _svgs_kw_svg__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! ./svgs/kw.svg */ "./src/svgs/kw.svg");
/* harmony import */ var _svgs_ky_svg__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! ./svgs/ky.svg */ "./src/svgs/ky.svg");
/* harmony import */ var _svgs_kz_svg__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! ./svgs/kz.svg */ "./src/svgs/kz.svg");
/* harmony import */ var _svgs_la_svg__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! ./svgs/la.svg */ "./src/svgs/la.svg");
/* harmony import */ var _svgs_lb_svg__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! ./svgs/lb.svg */ "./src/svgs/lb.svg");
/* harmony import */ var _svgs_lc_svg__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! ./svgs/lc.svg */ "./src/svgs/lc.svg");
/* harmony import */ var _svgs_li_svg__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! ./svgs/li.svg */ "./src/svgs/li.svg");
/* harmony import */ var _svgs_lk_svg__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! ./svgs/lk.svg */ "./src/svgs/lk.svg");
/* harmony import */ var _svgs_lr_svg__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! ./svgs/lr.svg */ "./src/svgs/lr.svg");
/* harmony import */ var _svgs_ls_svg__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! ./svgs/ls.svg */ "./src/svgs/ls.svg");
/* harmony import */ var _svgs_lt_svg__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! ./svgs/lt.svg */ "./src/svgs/lt.svg");
/* harmony import */ var _svgs_lu_svg__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! ./svgs/lu.svg */ "./src/svgs/lu.svg");
/* harmony import */ var _svgs_lv_svg__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! ./svgs/lv.svg */ "./src/svgs/lv.svg");
/* harmony import */ var _svgs_ly_svg__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! ./svgs/ly.svg */ "./src/svgs/ly.svg");
/* harmony import */ var _svgs_ma_svg__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! ./svgs/ma.svg */ "./src/svgs/ma.svg");
/* harmony import */ var _svgs_mc_svg__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! ./svgs/mc.svg */ "./src/svgs/mc.svg");
/* harmony import */ var _svgs_md_svg__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! ./svgs/md.svg */ "./src/svgs/md.svg");
/* harmony import */ var _svgs_me_svg__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! ./svgs/me.svg */ "./src/svgs/me.svg");
/* harmony import */ var _svgs_mf_svg__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! ./svgs/mf.svg */ "./src/svgs/mf.svg");
/* harmony import */ var _svgs_mg_svg__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(/*! ./svgs/mg.svg */ "./src/svgs/mg.svg");
/* harmony import */ var _svgs_mh_svg__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(/*! ./svgs/mh.svg */ "./src/svgs/mh.svg");
/* harmony import */ var _svgs_mk_svg__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(/*! ./svgs/mk.svg */ "./src/svgs/mk.svg");
/* harmony import */ var _svgs_ml_svg__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(/*! ./svgs/ml.svg */ "./src/svgs/ml.svg");
/* harmony import */ var _svgs_mm_svg__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(/*! ./svgs/mm.svg */ "./src/svgs/mm.svg");
/* harmony import */ var _svgs_mn_svg__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(/*! ./svgs/mn.svg */ "./src/svgs/mn.svg");
/* harmony import */ var _svgs_mo_svg__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(/*! ./svgs/mo.svg */ "./src/svgs/mo.svg");
/* harmony import */ var _svgs_mp_svg__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(/*! ./svgs/mp.svg */ "./src/svgs/mp.svg");
/* harmony import */ var _svgs_mq_svg__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(/*! ./svgs/mq.svg */ "./src/svgs/mq.svg");
/* harmony import */ var _svgs_mr_svg__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(/*! ./svgs/mr.svg */ "./src/svgs/mr.svg");
/* harmony import */ var _svgs_ms_svg__WEBPACK_IMPORTED_MODULE_158__ = __webpack_require__(/*! ./svgs/ms.svg */ "./src/svgs/ms.svg");
/* harmony import */ var _svgs_mt_svg__WEBPACK_IMPORTED_MODULE_159__ = __webpack_require__(/*! ./svgs/mt.svg */ "./src/svgs/mt.svg");
/* harmony import */ var _svgs_mu_svg__WEBPACK_IMPORTED_MODULE_160__ = __webpack_require__(/*! ./svgs/mu.svg */ "./src/svgs/mu.svg");
/* harmony import */ var _svgs_mv_svg__WEBPACK_IMPORTED_MODULE_161__ = __webpack_require__(/*! ./svgs/mv.svg */ "./src/svgs/mv.svg");
/* harmony import */ var _svgs_mw_svg__WEBPACK_IMPORTED_MODULE_162__ = __webpack_require__(/*! ./svgs/mw.svg */ "./src/svgs/mw.svg");
/* harmony import */ var _svgs_mx_svg__WEBPACK_IMPORTED_MODULE_163__ = __webpack_require__(/*! ./svgs/mx.svg */ "./src/svgs/mx.svg");
/* harmony import */ var _svgs_my_svg__WEBPACK_IMPORTED_MODULE_164__ = __webpack_require__(/*! ./svgs/my.svg */ "./src/svgs/my.svg");
/* harmony import */ var _svgs_mz_svg__WEBPACK_IMPORTED_MODULE_165__ = __webpack_require__(/*! ./svgs/mz.svg */ "./src/svgs/mz.svg");
/* harmony import */ var _svgs_na_svg__WEBPACK_IMPORTED_MODULE_166__ = __webpack_require__(/*! ./svgs/na.svg */ "./src/svgs/na.svg");
/* harmony import */ var _svgs_nc_svg__WEBPACK_IMPORTED_MODULE_167__ = __webpack_require__(/*! ./svgs/nc.svg */ "./src/svgs/nc.svg");
/* harmony import */ var _svgs_ne_svg__WEBPACK_IMPORTED_MODULE_168__ = __webpack_require__(/*! ./svgs/ne.svg */ "./src/svgs/ne.svg");
/* harmony import */ var _svgs_nf_svg__WEBPACK_IMPORTED_MODULE_169__ = __webpack_require__(/*! ./svgs/nf.svg */ "./src/svgs/nf.svg");
/* harmony import */ var _svgs_ng_svg__WEBPACK_IMPORTED_MODULE_170__ = __webpack_require__(/*! ./svgs/ng.svg */ "./src/svgs/ng.svg");
/* harmony import */ var _svgs_ni_svg__WEBPACK_IMPORTED_MODULE_171__ = __webpack_require__(/*! ./svgs/ni.svg */ "./src/svgs/ni.svg");
/* harmony import */ var _svgs_nl_svg__WEBPACK_IMPORTED_MODULE_172__ = __webpack_require__(/*! ./svgs/nl.svg */ "./src/svgs/nl.svg");
/* harmony import */ var _svgs_no_svg__WEBPACK_IMPORTED_MODULE_173__ = __webpack_require__(/*! ./svgs/no.svg */ "./src/svgs/no.svg");
/* harmony import */ var _svgs_np_svg__WEBPACK_IMPORTED_MODULE_174__ = __webpack_require__(/*! ./svgs/np.svg */ "./src/svgs/np.svg");
/* harmony import */ var _svgs_nr_svg__WEBPACK_IMPORTED_MODULE_175__ = __webpack_require__(/*! ./svgs/nr.svg */ "./src/svgs/nr.svg");
/* harmony import */ var _svgs_nu_svg__WEBPACK_IMPORTED_MODULE_176__ = __webpack_require__(/*! ./svgs/nu.svg */ "./src/svgs/nu.svg");
/* harmony import */ var _svgs_nz_svg__WEBPACK_IMPORTED_MODULE_177__ = __webpack_require__(/*! ./svgs/nz.svg */ "./src/svgs/nz.svg");
/* harmony import */ var _svgs_om_svg__WEBPACK_IMPORTED_MODULE_178__ = __webpack_require__(/*! ./svgs/om.svg */ "./src/svgs/om.svg");
/* harmony import */ var _svgs_pa_svg__WEBPACK_IMPORTED_MODULE_179__ = __webpack_require__(/*! ./svgs/pa.svg */ "./src/svgs/pa.svg");
/* harmony import */ var _svgs_pe_svg__WEBPACK_IMPORTED_MODULE_180__ = __webpack_require__(/*! ./svgs/pe.svg */ "./src/svgs/pe.svg");
/* harmony import */ var _svgs_pf_svg__WEBPACK_IMPORTED_MODULE_181__ = __webpack_require__(/*! ./svgs/pf.svg */ "./src/svgs/pf.svg");
/* harmony import */ var _svgs_pg_svg__WEBPACK_IMPORTED_MODULE_182__ = __webpack_require__(/*! ./svgs/pg.svg */ "./src/svgs/pg.svg");
/* harmony import */ var _svgs_ph_svg__WEBPACK_IMPORTED_MODULE_183__ = __webpack_require__(/*! ./svgs/ph.svg */ "./src/svgs/ph.svg");
/* harmony import */ var _svgs_pk_svg__WEBPACK_IMPORTED_MODULE_184__ = __webpack_require__(/*! ./svgs/pk.svg */ "./src/svgs/pk.svg");
/* harmony import */ var _svgs_pl_svg__WEBPACK_IMPORTED_MODULE_185__ = __webpack_require__(/*! ./svgs/pl.svg */ "./src/svgs/pl.svg");
/* harmony import */ var _svgs_pm_svg__WEBPACK_IMPORTED_MODULE_186__ = __webpack_require__(/*! ./svgs/pm.svg */ "./src/svgs/pm.svg");
/* harmony import */ var _svgs_pn_svg__WEBPACK_IMPORTED_MODULE_187__ = __webpack_require__(/*! ./svgs/pn.svg */ "./src/svgs/pn.svg");
/* harmony import */ var _svgs_pr_svg__WEBPACK_IMPORTED_MODULE_188__ = __webpack_require__(/*! ./svgs/pr.svg */ "./src/svgs/pr.svg");
/* harmony import */ var _svgs_ps_svg__WEBPACK_IMPORTED_MODULE_189__ = __webpack_require__(/*! ./svgs/ps.svg */ "./src/svgs/ps.svg");
/* harmony import */ var _svgs_pt_svg__WEBPACK_IMPORTED_MODULE_190__ = __webpack_require__(/*! ./svgs/pt.svg */ "./src/svgs/pt.svg");
/* harmony import */ var _svgs_pw_svg__WEBPACK_IMPORTED_MODULE_191__ = __webpack_require__(/*! ./svgs/pw.svg */ "./src/svgs/pw.svg");
/* harmony import */ var _svgs_py_svg__WEBPACK_IMPORTED_MODULE_192__ = __webpack_require__(/*! ./svgs/py.svg */ "./src/svgs/py.svg");
/* harmony import */ var _svgs_qa_svg__WEBPACK_IMPORTED_MODULE_193__ = __webpack_require__(/*! ./svgs/qa.svg */ "./src/svgs/qa.svg");
/* harmony import */ var _svgs_re_svg__WEBPACK_IMPORTED_MODULE_194__ = __webpack_require__(/*! ./svgs/re.svg */ "./src/svgs/re.svg");
/* harmony import */ var _svgs_ro_svg__WEBPACK_IMPORTED_MODULE_195__ = __webpack_require__(/*! ./svgs/ro.svg */ "./src/svgs/ro.svg");
/* harmony import */ var _svgs_rs_svg__WEBPACK_IMPORTED_MODULE_196__ = __webpack_require__(/*! ./svgs/rs.svg */ "./src/svgs/rs.svg");
/* harmony import */ var _svgs_ru_svg__WEBPACK_IMPORTED_MODULE_197__ = __webpack_require__(/*! ./svgs/ru.svg */ "./src/svgs/ru.svg");
/* harmony import */ var _svgs_rw_svg__WEBPACK_IMPORTED_MODULE_198__ = __webpack_require__(/*! ./svgs/rw.svg */ "./src/svgs/rw.svg");
/* harmony import */ var _svgs_sa_svg__WEBPACK_IMPORTED_MODULE_199__ = __webpack_require__(/*! ./svgs/sa.svg */ "./src/svgs/sa.svg");
/* harmony import */ var _svgs_sb_svg__WEBPACK_IMPORTED_MODULE_200__ = __webpack_require__(/*! ./svgs/sb.svg */ "./src/svgs/sb.svg");
/* harmony import */ var _svgs_sc_svg__WEBPACK_IMPORTED_MODULE_201__ = __webpack_require__(/*! ./svgs/sc.svg */ "./src/svgs/sc.svg");
/* harmony import */ var _svgs_sd_svg__WEBPACK_IMPORTED_MODULE_202__ = __webpack_require__(/*! ./svgs/sd.svg */ "./src/svgs/sd.svg");
/* harmony import */ var _svgs_se_svg__WEBPACK_IMPORTED_MODULE_203__ = __webpack_require__(/*! ./svgs/se.svg */ "./src/svgs/se.svg");
/* harmony import */ var _svgs_sg_svg__WEBPACK_IMPORTED_MODULE_204__ = __webpack_require__(/*! ./svgs/sg.svg */ "./src/svgs/sg.svg");
/* harmony import */ var _svgs_sh_svg__WEBPACK_IMPORTED_MODULE_205__ = __webpack_require__(/*! ./svgs/sh.svg */ "./src/svgs/sh.svg");
/* harmony import */ var _svgs_si_svg__WEBPACK_IMPORTED_MODULE_206__ = __webpack_require__(/*! ./svgs/si.svg */ "./src/svgs/si.svg");
/* harmony import */ var _svgs_sj_svg__WEBPACK_IMPORTED_MODULE_207__ = __webpack_require__(/*! ./svgs/sj.svg */ "./src/svgs/sj.svg");
/* harmony import */ var _svgs_sk_svg__WEBPACK_IMPORTED_MODULE_208__ = __webpack_require__(/*! ./svgs/sk.svg */ "./src/svgs/sk.svg");
/* harmony import */ var _svgs_sl_svg__WEBPACK_IMPORTED_MODULE_209__ = __webpack_require__(/*! ./svgs/sl.svg */ "./src/svgs/sl.svg");
/* harmony import */ var _svgs_sm_svg__WEBPACK_IMPORTED_MODULE_210__ = __webpack_require__(/*! ./svgs/sm.svg */ "./src/svgs/sm.svg");
/* harmony import */ var _svgs_sn_svg__WEBPACK_IMPORTED_MODULE_211__ = __webpack_require__(/*! ./svgs/sn.svg */ "./src/svgs/sn.svg");
/* harmony import */ var _svgs_so_svg__WEBPACK_IMPORTED_MODULE_212__ = __webpack_require__(/*! ./svgs/so.svg */ "./src/svgs/so.svg");
/* harmony import */ var _svgs_sr_svg__WEBPACK_IMPORTED_MODULE_213__ = __webpack_require__(/*! ./svgs/sr.svg */ "./src/svgs/sr.svg");
/* harmony import */ var _svgs_ss_svg__WEBPACK_IMPORTED_MODULE_214__ = __webpack_require__(/*! ./svgs/ss.svg */ "./src/svgs/ss.svg");
/* harmony import */ var _svgs_st_svg__WEBPACK_IMPORTED_MODULE_215__ = __webpack_require__(/*! ./svgs/st.svg */ "./src/svgs/st.svg");
/* harmony import */ var _svgs_sv_svg__WEBPACK_IMPORTED_MODULE_216__ = __webpack_require__(/*! ./svgs/sv.svg */ "./src/svgs/sv.svg");
/* harmony import */ var _svgs_sx_svg__WEBPACK_IMPORTED_MODULE_217__ = __webpack_require__(/*! ./svgs/sx.svg */ "./src/svgs/sx.svg");
/* harmony import */ var _svgs_sy_svg__WEBPACK_IMPORTED_MODULE_218__ = __webpack_require__(/*! ./svgs/sy.svg */ "./src/svgs/sy.svg");
/* harmony import */ var _svgs_sz_svg__WEBPACK_IMPORTED_MODULE_219__ = __webpack_require__(/*! ./svgs/sz.svg */ "./src/svgs/sz.svg");
/* harmony import */ var _svgs_tc_svg__WEBPACK_IMPORTED_MODULE_220__ = __webpack_require__(/*! ./svgs/tc.svg */ "./src/svgs/tc.svg");
/* harmony import */ var _svgs_td_svg__WEBPACK_IMPORTED_MODULE_221__ = __webpack_require__(/*! ./svgs/td.svg */ "./src/svgs/td.svg");
/* harmony import */ var _svgs_tf_svg__WEBPACK_IMPORTED_MODULE_222__ = __webpack_require__(/*! ./svgs/tf.svg */ "./src/svgs/tf.svg");
/* harmony import */ var _svgs_tg_svg__WEBPACK_IMPORTED_MODULE_223__ = __webpack_require__(/*! ./svgs/tg.svg */ "./src/svgs/tg.svg");
/* harmony import */ var _svgs_th_svg__WEBPACK_IMPORTED_MODULE_224__ = __webpack_require__(/*! ./svgs/th.svg */ "./src/svgs/th.svg");
/* harmony import */ var _svgs_tj_svg__WEBPACK_IMPORTED_MODULE_225__ = __webpack_require__(/*! ./svgs/tj.svg */ "./src/svgs/tj.svg");
/* harmony import */ var _svgs_tk_svg__WEBPACK_IMPORTED_MODULE_226__ = __webpack_require__(/*! ./svgs/tk.svg */ "./src/svgs/tk.svg");
/* harmony import */ var _svgs_tl_svg__WEBPACK_IMPORTED_MODULE_227__ = __webpack_require__(/*! ./svgs/tl.svg */ "./src/svgs/tl.svg");
/* harmony import */ var _svgs_tm_svg__WEBPACK_IMPORTED_MODULE_228__ = __webpack_require__(/*! ./svgs/tm.svg */ "./src/svgs/tm.svg");
/* harmony import */ var _svgs_tn_svg__WEBPACK_IMPORTED_MODULE_229__ = __webpack_require__(/*! ./svgs/tn.svg */ "./src/svgs/tn.svg");
/* harmony import */ var _svgs_to_svg__WEBPACK_IMPORTED_MODULE_230__ = __webpack_require__(/*! ./svgs/to.svg */ "./src/svgs/to.svg");
/* harmony import */ var _svgs_tr_svg__WEBPACK_IMPORTED_MODULE_231__ = __webpack_require__(/*! ./svgs/tr.svg */ "./src/svgs/tr.svg");
/* harmony import */ var _svgs_tt_svg__WEBPACK_IMPORTED_MODULE_232__ = __webpack_require__(/*! ./svgs/tt.svg */ "./src/svgs/tt.svg");
/* harmony import */ var _svgs_tv_svg__WEBPACK_IMPORTED_MODULE_233__ = __webpack_require__(/*! ./svgs/tv.svg */ "./src/svgs/tv.svg");
/* harmony import */ var _svgs_tw_svg__WEBPACK_IMPORTED_MODULE_234__ = __webpack_require__(/*! ./svgs/tw.svg */ "./src/svgs/tw.svg");
/* harmony import */ var _svgs_tz_svg__WEBPACK_IMPORTED_MODULE_235__ = __webpack_require__(/*! ./svgs/tz.svg */ "./src/svgs/tz.svg");
/* harmony import */ var _svgs_ua_svg__WEBPACK_IMPORTED_MODULE_236__ = __webpack_require__(/*! ./svgs/ua.svg */ "./src/svgs/ua.svg");
/* harmony import */ var _svgs_ug_svg__WEBPACK_IMPORTED_MODULE_237__ = __webpack_require__(/*! ./svgs/ug.svg */ "./src/svgs/ug.svg");
/* harmony import */ var _svgs_um_svg__WEBPACK_IMPORTED_MODULE_238__ = __webpack_require__(/*! ./svgs/um.svg */ "./src/svgs/um.svg");
/* harmony import */ var _svgs_us_svg__WEBPACK_IMPORTED_MODULE_239__ = __webpack_require__(/*! ./svgs/us.svg */ "./src/svgs/us.svg");
/* harmony import */ var _svgs_uy_svg__WEBPACK_IMPORTED_MODULE_240__ = __webpack_require__(/*! ./svgs/uy.svg */ "./src/svgs/uy.svg");
/* harmony import */ var _svgs_uz_svg__WEBPACK_IMPORTED_MODULE_241__ = __webpack_require__(/*! ./svgs/uz.svg */ "./src/svgs/uz.svg");
/* harmony import */ var _svgs_va_svg__WEBPACK_IMPORTED_MODULE_242__ = __webpack_require__(/*! ./svgs/va.svg */ "./src/svgs/va.svg");
/* harmony import */ var _svgs_vc_svg__WEBPACK_IMPORTED_MODULE_243__ = __webpack_require__(/*! ./svgs/vc.svg */ "./src/svgs/vc.svg");
/* harmony import */ var _svgs_ve_svg__WEBPACK_IMPORTED_MODULE_244__ = __webpack_require__(/*! ./svgs/ve.svg */ "./src/svgs/ve.svg");
/* harmony import */ var _svgs_vg_svg__WEBPACK_IMPORTED_MODULE_245__ = __webpack_require__(/*! ./svgs/vg.svg */ "./src/svgs/vg.svg");
/* harmony import */ var _svgs_vi_svg__WEBPACK_IMPORTED_MODULE_246__ = __webpack_require__(/*! ./svgs/vi.svg */ "./src/svgs/vi.svg");
/* harmony import */ var _svgs_vn_svg__WEBPACK_IMPORTED_MODULE_247__ = __webpack_require__(/*! ./svgs/vn.svg */ "./src/svgs/vn.svg");
/* harmony import */ var _svgs_vu_svg__WEBPACK_IMPORTED_MODULE_248__ = __webpack_require__(/*! ./svgs/vu.svg */ "./src/svgs/vu.svg");
/* harmony import */ var _svgs_wf_svg__WEBPACK_IMPORTED_MODULE_249__ = __webpack_require__(/*! ./svgs/wf.svg */ "./src/svgs/wf.svg");
/* harmony import */ var _svgs_ws_svg__WEBPACK_IMPORTED_MODULE_250__ = __webpack_require__(/*! ./svgs/ws.svg */ "./src/svgs/ws.svg");
/* harmony import */ var _svgs_xk_svg__WEBPACK_IMPORTED_MODULE_251__ = __webpack_require__(/*! ./svgs/xk.svg */ "./src/svgs/xk.svg");
/* harmony import */ var _svgs_ye_svg__WEBPACK_IMPORTED_MODULE_252__ = __webpack_require__(/*! ./svgs/ye.svg */ "./src/svgs/ye.svg");
/* harmony import */ var _svgs_yt_svg__WEBPACK_IMPORTED_MODULE_253__ = __webpack_require__(/*! ./svgs/yt.svg */ "./src/svgs/yt.svg");
/* harmony import */ var _svgs_za_svg__WEBPACK_IMPORTED_MODULE_254__ = __webpack_require__(/*! ./svgs/za.svg */ "./src/svgs/za.svg");
/* harmony import */ var _svgs_zm_svg__WEBPACK_IMPORTED_MODULE_255__ = __webpack_require__(/*! ./svgs/zm.svg */ "./src/svgs/zm.svg");
/* harmony import */ var _svgs_zw_svg__WEBPACK_IMPORTED_MODULE_256__ = __webpack_require__(/*! ./svgs/zw.svg */ "./src/svgs/zw.svg");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_257__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_257___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_257__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/jeanflower/outsideICloud/git/FlagClient/src/App.tsx";


































































































































































































































































let images = {};
images['ad'] = {
  image: _svgs_ad_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  name: 'Andorra'
};
images['ae'] = {
  image: _svgs_ae_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
  name: 'United Arab Emirates'
};
images['af'] = {
  image: _svgs_af_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
  name: 'Afghanistan'
};
images['ag'] = {
  image: _svgs_ag_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
  name: 'Antigua and Barbuda'
};
images['ai'] = {
  image: _svgs_ai_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
  name: 'Anguilla'
};
images['al'] = {
  image: _svgs_al_svg__WEBPACK_IMPORTED_MODULE_8__["default"],
  name: 'Albania'
};
images['am'] = {
  image: _svgs_am_svg__WEBPACK_IMPORTED_MODULE_9__["default"],
  name: 'Armenia'
};
images['ao'] = {
  image: _svgs_ao_svg__WEBPACK_IMPORTED_MODULE_10__["default"],
  name: 'Angola'
};
images['aq'] = {
  image: _svgs_aq_svg__WEBPACK_IMPORTED_MODULE_11__["default"],
  name: 'Antarctica'
};
images['ar'] = {
  image: _svgs_ar_svg__WEBPACK_IMPORTED_MODULE_12__["default"],
  name: 'Argentina'
};
images['as'] = {
  image: _svgs_as_svg__WEBPACK_IMPORTED_MODULE_13__["default"],
  name: 'American Samoa'
};
images['at'] = {
  image: _svgs_at_svg__WEBPACK_IMPORTED_MODULE_14__["default"],
  name: 'Austria'
};
images['au'] = {
  image: _svgs_au_svg__WEBPACK_IMPORTED_MODULE_15__["default"],
  name: 'Australia'
};
images['aw'] = {
  image: _svgs_aw_svg__WEBPACK_IMPORTED_MODULE_16__["default"],
  name: 'Aruba'
};
images['ax'] = {
  image: _svgs_ax_svg__WEBPACK_IMPORTED_MODULE_17__["default"],
  name: 'Åland Islands'
};
images['az'] = {
  image: _svgs_az_svg__WEBPACK_IMPORTED_MODULE_18__["default"],
  name: 'Azerbaijan'
};
images['ba'] = {
  image: _svgs_ba_svg__WEBPACK_IMPORTED_MODULE_19__["default"],
  name: 'Bosnia and Herzegovina'
};
images['bb'] = {
  image: _svgs_bb_svg__WEBPACK_IMPORTED_MODULE_20__["default"],
  name: 'Barbados'
};
images['bd'] = {
  image: _svgs_bd_svg__WEBPACK_IMPORTED_MODULE_21__["default"],
  name: 'Bangladesh'
};
images['be'] = {
  image: _svgs_be_svg__WEBPACK_IMPORTED_MODULE_22__["default"],
  name: 'Belgium'
};
images['bf'] = {
  image: _svgs_bf_svg__WEBPACK_IMPORTED_MODULE_23__["default"],
  name: 'Burkina Faso'
};
images['bg'] = {
  image: _svgs_bg_svg__WEBPACK_IMPORTED_MODULE_24__["default"],
  name: 'Bulgaria'
};
images['bh'] = {
  image: _svgs_bh_svg__WEBPACK_IMPORTED_MODULE_25__["default"],
  name: 'Bahrain'
};
images['bi'] = {
  image: _svgs_bi_svg__WEBPACK_IMPORTED_MODULE_26__["default"],
  name: 'Burundi'
};
images['bj'] = {
  image: _svgs_bj_svg__WEBPACK_IMPORTED_MODULE_27__["default"],
  name: 'Benin'
};
images['bl'] = {
  image: _svgs_bl_svg__WEBPACK_IMPORTED_MODULE_28__["default"],
  name: 'Saint Barthélemy'
};
images['bm'] = {
  image: _svgs_bm_svg__WEBPACK_IMPORTED_MODULE_29__["default"],
  name: 'Bermuda'
};
images['bn'] = {
  image: _svgs_bn_svg__WEBPACK_IMPORTED_MODULE_30__["default"],
  name: 'Brunei'
};
images['bo'] = {
  image: _svgs_bo_svg__WEBPACK_IMPORTED_MODULE_31__["default"],
  name: 'Bolivia'
};
images['bq'] = {
  image: _svgs_bq_svg__WEBPACK_IMPORTED_MODULE_32__["default"],
  name: 'Caribbean Netherlands'
};
images['br'] = {
  image: _svgs_br_svg__WEBPACK_IMPORTED_MODULE_33__["default"],
  name: 'Brazil'
};
images['bs'] = {
  image: _svgs_bs_svg__WEBPACK_IMPORTED_MODULE_34__["default"],
  name: 'Bahamas'
};
images['bt'] = {
  image: _svgs_bt_svg__WEBPACK_IMPORTED_MODULE_35__["default"],
  name: 'Bhutan'
};
images['bv'] = {
  image: _svgs_bv_svg__WEBPACK_IMPORTED_MODULE_36__["default"],
  name: 'Bouvet Island'
};
images['bw'] = {
  image: _svgs_bw_svg__WEBPACK_IMPORTED_MODULE_37__["default"],
  name: 'Botswana'
};
images['by'] = {
  image: _svgs_by_svg__WEBPACK_IMPORTED_MODULE_38__["default"],
  name: 'Belarus'
};
images['bz'] = {
  image: _svgs_bz_svg__WEBPACK_IMPORTED_MODULE_39__["default"],
  name: 'Belize'
};
images['ca'] = {
  image: _svgs_ca_svg__WEBPACK_IMPORTED_MODULE_40__["default"],
  name: 'Canada'
};
images['cc'] = {
  image: _svgs_cc_svg__WEBPACK_IMPORTED_MODULE_41__["default"],
  name: 'Cocos (Keeling) Islands'
};
images['cd'] = {
  image: _svgs_cd_svg__WEBPACK_IMPORTED_MODULE_42__["default"],
  name: 'DR Congo'
};
images['cf'] = {
  image: _svgs_cf_svg__WEBPACK_IMPORTED_MODULE_43__["default"],
  name: 'Central African Republic'
};
images['cg'] = {
  image: _svgs_cg_svg__WEBPACK_IMPORTED_MODULE_44__["default"],
  name: 'Republic of the Congo'
};
images['ch'] = {
  image: _svgs_ch_svg__WEBPACK_IMPORTED_MODULE_45__["default"],
  name: 'Switzerland'
};
images['ci'] = {
  image: _svgs_ci_svg__WEBPACK_IMPORTED_MODULE_46__["default"],
  name: 'Côte d\'Ivoire (Ivory Coast)'
};
images['ck'] = {
  image: _svgs_ck_svg__WEBPACK_IMPORTED_MODULE_47__["default"],
  name: 'Cook Islands'
};
images['cl'] = {
  image: _svgs_cl_svg__WEBPACK_IMPORTED_MODULE_48__["default"],
  name: 'Chile'
};
images['cm'] = {
  image: _svgs_cm_svg__WEBPACK_IMPORTED_MODULE_49__["default"],
  name: 'Cameroon'
};
images['cn'] = {
  image: _svgs_cn_svg__WEBPACK_IMPORTED_MODULE_50__["default"],
  name: 'China'
};
images['co'] = {
  image: _svgs_co_svg__WEBPACK_IMPORTED_MODULE_51__["default"],
  name: 'Colombia'
};
images['cr'] = {
  image: _svgs_cr_svg__WEBPACK_IMPORTED_MODULE_52__["default"],
  name: 'Costa Rica'
};
images['cu'] = {
  image: _svgs_cu_svg__WEBPACK_IMPORTED_MODULE_53__["default"],
  name: 'Cuba'
};
images['cv'] = {
  image: _svgs_cv_svg__WEBPACK_IMPORTED_MODULE_54__["default"],
  name: 'Cape Verde'
};
images['cw'] = {
  image: _svgs_cw_svg__WEBPACK_IMPORTED_MODULE_55__["default"],
  name: 'Curaçao'
};
images['cx'] = {
  image: _svgs_cx_svg__WEBPACK_IMPORTED_MODULE_56__["default"],
  name: 'Christmas Island'
};
images['cy'] = {
  image: _svgs_cy_svg__WEBPACK_IMPORTED_MODULE_57__["default"],
  name: 'Cyprus'
};
images['cz'] = {
  image: _svgs_cz_svg__WEBPACK_IMPORTED_MODULE_58__["default"],
  name: 'Czechia'
};
images['de'] = {
  image: _svgs_de_svg__WEBPACK_IMPORTED_MODULE_59__["default"],
  name: 'Germany'
};
images['dj'] = {
  image: _svgs_dj_svg__WEBPACK_IMPORTED_MODULE_60__["default"],
  name: 'Djibouti'
};
images['dk'] = {
  image: _svgs_dk_svg__WEBPACK_IMPORTED_MODULE_61__["default"],
  name: 'Denmark'
};
images['dm'] = {
  image: _svgs_dm_svg__WEBPACK_IMPORTED_MODULE_62__["default"],
  name: 'Dominica'
};
images['do'] = {
  image: _svgs_do_svg__WEBPACK_IMPORTED_MODULE_63__["default"],
  name: 'Dominican Republic'
};
images['dz'] = {
  image: _svgs_dz_svg__WEBPACK_IMPORTED_MODULE_64__["default"],
  name: 'Algeria'
};
images['ec'] = {
  image: _svgs_ec_svg__WEBPACK_IMPORTED_MODULE_65__["default"],
  name: 'Ecuador'
};
images['ee'] = {
  image: _svgs_ee_svg__WEBPACK_IMPORTED_MODULE_66__["default"],
  name: 'Estonia'
};
images['eg'] = {
  image: _svgs_eg_svg__WEBPACK_IMPORTED_MODULE_67__["default"],
  name: 'Egypt'
};
images['eh'] = {
  image: _svgs_eh_svg__WEBPACK_IMPORTED_MODULE_68__["default"],
  name: 'Western Sahara'
};
images['er'] = {
  image: _svgs_er_svg__WEBPACK_IMPORTED_MODULE_69__["default"],
  name: 'Eritrea'
};
images['es'] = {
  image: _svgs_es_svg__WEBPACK_IMPORTED_MODULE_70__["default"],
  name: 'Spain'
};
images['et'] = {
  image: _svgs_et_svg__WEBPACK_IMPORTED_MODULE_71__["default"],
  name: 'Ethiopia'
};
images['fi'] = {
  image: _svgs_fi_svg__WEBPACK_IMPORTED_MODULE_72__["default"],
  name: 'Finland'
};
images['fj'] = {
  image: _svgs_fj_svg__WEBPACK_IMPORTED_MODULE_73__["default"],
  name: 'Fiji'
};
images['fk'] = {
  image: _svgs_fk_svg__WEBPACK_IMPORTED_MODULE_74__["default"],
  name: 'Falkland Islands'
};
images['fm'] = {
  image: _svgs_fm_svg__WEBPACK_IMPORTED_MODULE_75__["default"],
  name: 'Micronesia'
};
images['fo'] = {
  image: _svgs_fo_svg__WEBPACK_IMPORTED_MODULE_76__["default"],
  name: 'Faroe Islands'
};
images['fr'] = {
  image: _svgs_fr_svg__WEBPACK_IMPORTED_MODULE_77__["default"],
  name: 'France'
};
images['ga'] = {
  image: _svgs_ga_svg__WEBPACK_IMPORTED_MODULE_78__["default"],
  name: 'Gabon'
};
images['gb'] = {
  image: _svgs_gb_svg__WEBPACK_IMPORTED_MODULE_79__["default"],
  name: 'United Kingdom'
};
images['gbeng'] = {
  image: _svgs_gb_eng_svg__WEBPACK_IMPORTED_MODULE_80__["default"],
  name: 'England'
};
images['gbnir'] = {
  image: _svgs_gb_nir_svg__WEBPACK_IMPORTED_MODULE_81__["default"],
  name: 'Northern Ireland'
};
images['gbsct'] = {
  image: _svgs_gb_sct_svg__WEBPACK_IMPORTED_MODULE_82__["default"],
  name: 'Scotland'
};
images['gbwls'] = {
  image: _svgs_gb_wls_svg__WEBPACK_IMPORTED_MODULE_83__["default"],
  name: 'Wales'
};
images['gd'] = {
  image: _svgs_gd_svg__WEBPACK_IMPORTED_MODULE_84__["default"],
  name: 'Grenada'
};
images['ge'] = {
  image: _svgs_ge_svg__WEBPACK_IMPORTED_MODULE_85__["default"],
  name: 'Georgia'
};
images['gf'] = {
  image: _svgs_gf_svg__WEBPACK_IMPORTED_MODULE_86__["default"],
  name: 'French Guiana'
};
images['gg'] = {
  image: _svgs_gg_svg__WEBPACK_IMPORTED_MODULE_87__["default"],
  name: 'Guernsey'
};
images['gh'] = {
  image: _svgs_gh_svg__WEBPACK_IMPORTED_MODULE_88__["default"],
  name: 'Ghana'
};
images['gi'] = {
  image: _svgs_gi_svg__WEBPACK_IMPORTED_MODULE_89__["default"],
  name: 'Gibraltar'
};
images['gl'] = {
  image: _svgs_gl_svg__WEBPACK_IMPORTED_MODULE_90__["default"],
  name: 'Greenland'
};
images['gm'] = {
  image: _svgs_gm_svg__WEBPACK_IMPORTED_MODULE_91__["default"],
  name: 'Gambia'
};
images['gn'] = {
  image: _svgs_gn_svg__WEBPACK_IMPORTED_MODULE_92__["default"],
  name: 'Guinea'
};
images['gp'] = {
  image: _svgs_gp_svg__WEBPACK_IMPORTED_MODULE_93__["default"],
  name: 'Guadeloupe'
};
images['gq'] = {
  image: _svgs_gq_svg__WEBPACK_IMPORTED_MODULE_94__["default"],
  name: 'Equatorial Guinea'
};
images['gr'] = {
  image: _svgs_gr_svg__WEBPACK_IMPORTED_MODULE_95__["default"],
  name: 'Greece'
};
images['gs'] = {
  image: _svgs_gs_svg__WEBPACK_IMPORTED_MODULE_96__["default"],
  name: 'South Georgia'
};
images['gt'] = {
  image: _svgs_gt_svg__WEBPACK_IMPORTED_MODULE_97__["default"],
  name: 'Guatemala'
};
images['gu'] = {
  image: _svgs_gu_svg__WEBPACK_IMPORTED_MODULE_98__["default"],
  name: 'Guam'
};
images['gw'] = {
  image: _svgs_gw_svg__WEBPACK_IMPORTED_MODULE_99__["default"],
  name: 'Guinea-Bissau'
};
images['gy'] = {
  image: _svgs_gy_svg__WEBPACK_IMPORTED_MODULE_100__["default"],
  name: 'Guyana'
};
images['hk'] = {
  image: _svgs_hk_svg__WEBPACK_IMPORTED_MODULE_101__["default"],
  name: 'Hong Kong'
};
images['hm'] = {
  image: _svgs_hm_svg__WEBPACK_IMPORTED_MODULE_102__["default"],
  name: 'Heard Island and McDonald Islands'
};
images['hn'] = {
  image: _svgs_hn_svg__WEBPACK_IMPORTED_MODULE_103__["default"],
  name: 'Honduras'
};
images['hr'] = {
  image: _svgs_hr_svg__WEBPACK_IMPORTED_MODULE_104__["default"],
  name: 'Croatia'
};
images['ht'] = {
  image: _svgs_ht_svg__WEBPACK_IMPORTED_MODULE_105__["default"],
  name: 'Haiti'
};
images['hu'] = {
  image: _svgs_hu_svg__WEBPACK_IMPORTED_MODULE_106__["default"],
  name: 'Hungary'
};
images['id'] = {
  image: _svgs_id_svg__WEBPACK_IMPORTED_MODULE_107__["default"],
  name: 'Indonesia'
};
images['ie'] = {
  image: _svgs_ie_svg__WEBPACK_IMPORTED_MODULE_108__["default"],
  name: 'Ireland'
};
images['il'] = {
  image: _svgs_il_svg__WEBPACK_IMPORTED_MODULE_109__["default"],
  name: 'Israel'
};
images['im'] = {
  image: _svgs_im_svg__WEBPACK_IMPORTED_MODULE_110__["default"],
  name: 'Isle of Man'
};
images['in'] = {
  image: _svgs_in_svg__WEBPACK_IMPORTED_MODULE_111__["default"],
  name: 'India'
};
images['io'] = {
  image: _svgs_io_svg__WEBPACK_IMPORTED_MODULE_112__["default"],
  name: 'British Indian Ocean Territory'
};
images['iq'] = {
  image: _svgs_iq_svg__WEBPACK_IMPORTED_MODULE_113__["default"],
  name: 'Iraq'
};
images['ir'] = {
  image: _svgs_ir_svg__WEBPACK_IMPORTED_MODULE_114__["default"],
  name: 'Iran'
};
images['is'] = {
  image: _svgs_is_svg__WEBPACK_IMPORTED_MODULE_115__["default"],
  name: 'Iceland'
};
images['it'] = {
  image: _svgs_it_svg__WEBPACK_IMPORTED_MODULE_116__["default"],
  name: 'Italy'
};
images['je'] = {
  image: _svgs_je_svg__WEBPACK_IMPORTED_MODULE_117__["default"],
  name: 'Jersey'
};
images['jm'] = {
  image: _svgs_jm_svg__WEBPACK_IMPORTED_MODULE_118__["default"],
  name: 'Jamaica'
};
images['jo'] = {
  image: _svgs_jo_svg__WEBPACK_IMPORTED_MODULE_119__["default"],
  name: 'Jordan'
};
images['jp'] = {
  image: _svgs_jp_svg__WEBPACK_IMPORTED_MODULE_120__["default"],
  name: 'Japan'
};
images['ke'] = {
  image: _svgs_ke_svg__WEBPACK_IMPORTED_MODULE_121__["default"],
  name: 'Kenya'
};
images['kg'] = {
  image: _svgs_kg_svg__WEBPACK_IMPORTED_MODULE_122__["default"],
  name: 'Kyrgyzstan'
};
images['kh'] = {
  image: _svgs_kh_svg__WEBPACK_IMPORTED_MODULE_123__["default"],
  name: 'Cambodia'
};
images['ki'] = {
  image: _svgs_ki_svg__WEBPACK_IMPORTED_MODULE_124__["default"],
  name: 'Kiribati'
};
images['km'] = {
  image: _svgs_km_svg__WEBPACK_IMPORTED_MODULE_125__["default"],
  name: 'Comoros'
};
images['kn'] = {
  image: _svgs_kn_svg__WEBPACK_IMPORTED_MODULE_126__["default"],
  name: 'Saint Kitts and Nevis'
};
images['kp'] = {
  image: _svgs_kp_svg__WEBPACK_IMPORTED_MODULE_127__["default"],
  name: 'North Korea'
};
images['kr'] = {
  image: _svgs_kr_svg__WEBPACK_IMPORTED_MODULE_128__["default"],
  name: 'South Korea'
};
images['kw'] = {
  image: _svgs_kw_svg__WEBPACK_IMPORTED_MODULE_129__["default"],
  name: 'Kuwait'
};
images['ky'] = {
  image: _svgs_ky_svg__WEBPACK_IMPORTED_MODULE_130__["default"],
  name: 'Cayman Islands'
};
images['kz'] = {
  image: _svgs_kz_svg__WEBPACK_IMPORTED_MODULE_131__["default"],
  name: 'Kazakhstan'
};
images['la'] = {
  image: _svgs_la_svg__WEBPACK_IMPORTED_MODULE_132__["default"],
  name: 'Laos'
};
images['lb'] = {
  image: _svgs_lb_svg__WEBPACK_IMPORTED_MODULE_133__["default"],
  name: 'Lebanon'
};
images['lc'] = {
  image: _svgs_lc_svg__WEBPACK_IMPORTED_MODULE_134__["default"],
  name: 'Saint Lucia'
};
images['li'] = {
  image: _svgs_li_svg__WEBPACK_IMPORTED_MODULE_135__["default"],
  name: 'Liechtenstein'
};
images['lk'] = {
  image: _svgs_lk_svg__WEBPACK_IMPORTED_MODULE_136__["default"],
  name: 'Sri Lanka'
};
images['lr'] = {
  image: _svgs_lr_svg__WEBPACK_IMPORTED_MODULE_137__["default"],
  name: 'Liberia'
};
images['ls'] = {
  image: _svgs_ls_svg__WEBPACK_IMPORTED_MODULE_138__["default"],
  name: 'Lesotho'
};
images['lt'] = {
  image: _svgs_lt_svg__WEBPACK_IMPORTED_MODULE_139__["default"],
  name: 'Lithuania'
};
images['lu'] = {
  image: _svgs_lu_svg__WEBPACK_IMPORTED_MODULE_140__["default"],
  name: 'Luxembourg'
};
images['lv'] = {
  image: _svgs_lv_svg__WEBPACK_IMPORTED_MODULE_141__["default"],
  name: 'Latvia'
};
images['ly'] = {
  image: _svgs_ly_svg__WEBPACK_IMPORTED_MODULE_142__["default"],
  name: 'Libya'
};
images['ma'] = {
  image: _svgs_ma_svg__WEBPACK_IMPORTED_MODULE_143__["default"],
  name: 'Morocco'
};
images['mc'] = {
  image: _svgs_mc_svg__WEBPACK_IMPORTED_MODULE_144__["default"],
  name: 'Monaco'
};
images['md'] = {
  image: _svgs_md_svg__WEBPACK_IMPORTED_MODULE_145__["default"],
  name: 'Moldova'
};
images['me'] = {
  image: _svgs_me_svg__WEBPACK_IMPORTED_MODULE_146__["default"],
  name: 'Montenegro'
};
images['mf'] = {
  image: _svgs_mf_svg__WEBPACK_IMPORTED_MODULE_147__["default"],
  name: 'Saint Martin'
};
images['mg'] = {
  image: _svgs_mg_svg__WEBPACK_IMPORTED_MODULE_148__["default"],
  name: 'Madagascar'
};
images['mh'] = {
  image: _svgs_mh_svg__WEBPACK_IMPORTED_MODULE_149__["default"],
  name: 'Marshall Islands'
};
images['mk'] = {
  image: _svgs_mk_svg__WEBPACK_IMPORTED_MODULE_150__["default"],
  name: 'North Macedonia'
};
images['ml'] = {
  image: _svgs_ml_svg__WEBPACK_IMPORTED_MODULE_151__["default"],
  name: 'Mali'
};
images['mm'] = {
  image: _svgs_mm_svg__WEBPACK_IMPORTED_MODULE_152__["default"],
  name: 'Myanmar'
};
images['mn'] = {
  image: _svgs_mn_svg__WEBPACK_IMPORTED_MODULE_153__["default"],
  name: 'Mongolia'
};
images['mo'] = {
  image: _svgs_mo_svg__WEBPACK_IMPORTED_MODULE_154__["default"],
  name: 'Macau'
};
images['mp'] = {
  image: _svgs_mp_svg__WEBPACK_IMPORTED_MODULE_155__["default"],
  name: 'Northern Mariana Islands'
};
images['mq'] = {
  image: _svgs_mq_svg__WEBPACK_IMPORTED_MODULE_156__["default"],
  name: 'Martinique'
};
images['mr'] = {
  image: _svgs_mr_svg__WEBPACK_IMPORTED_MODULE_157__["default"],
  name: 'Mauritania'
};
images['ms'] = {
  image: _svgs_ms_svg__WEBPACK_IMPORTED_MODULE_158__["default"],
  name: 'Montserrat'
};
images['mt'] = {
  image: _svgs_mt_svg__WEBPACK_IMPORTED_MODULE_159__["default"],
  name: 'Malta'
};
images['mu'] = {
  image: _svgs_mu_svg__WEBPACK_IMPORTED_MODULE_160__["default"],
  name: 'Mauritius'
};
images['mv'] = {
  image: _svgs_mv_svg__WEBPACK_IMPORTED_MODULE_161__["default"],
  name: 'Maldives'
};
images['mw'] = {
  image: _svgs_mw_svg__WEBPACK_IMPORTED_MODULE_162__["default"],
  name: 'Malawi'
};
images['mx'] = {
  image: _svgs_mx_svg__WEBPACK_IMPORTED_MODULE_163__["default"],
  name: 'Mexico'
};
images['my'] = {
  image: _svgs_my_svg__WEBPACK_IMPORTED_MODULE_164__["default"],
  name: 'Malaysia'
};
images['mz'] = {
  image: _svgs_mz_svg__WEBPACK_IMPORTED_MODULE_165__["default"],
  name: 'Mozambique'
};
images['na'] = {
  image: _svgs_na_svg__WEBPACK_IMPORTED_MODULE_166__["default"],
  name: 'Namibia'
};
images['nc'] = {
  image: _svgs_nc_svg__WEBPACK_IMPORTED_MODULE_167__["default"],
  name: 'New Caledonia'
};
images['ne'] = {
  image: _svgs_ne_svg__WEBPACK_IMPORTED_MODULE_168__["default"],
  name: 'Niger'
};
images['nf'] = {
  image: _svgs_nf_svg__WEBPACK_IMPORTED_MODULE_169__["default"],
  name: 'Norfolk Island'
};
images['ng'] = {
  image: _svgs_ng_svg__WEBPACK_IMPORTED_MODULE_170__["default"],
  name: 'Nigeria'
};
images['ni'] = {
  image: _svgs_ni_svg__WEBPACK_IMPORTED_MODULE_171__["default"],
  name: 'Nicaragua'
};
images['nl'] = {
  image: _svgs_nl_svg__WEBPACK_IMPORTED_MODULE_172__["default"],
  name: 'Netherlands'
};
images['no'] = {
  image: _svgs_no_svg__WEBPACK_IMPORTED_MODULE_173__["default"],
  name: 'Norway'
};
images['np'] = {
  image: _svgs_np_svg__WEBPACK_IMPORTED_MODULE_174__["default"],
  name: 'Nepal'
};
images['nr'] = {
  image: _svgs_nr_svg__WEBPACK_IMPORTED_MODULE_175__["default"],
  name: 'Nauru'
};
images['nu'] = {
  image: _svgs_nu_svg__WEBPACK_IMPORTED_MODULE_176__["default"],
  name: 'Niue'
};
images['nz'] = {
  image: _svgs_nz_svg__WEBPACK_IMPORTED_MODULE_177__["default"],
  name: 'New Zealand'
};
images['om'] = {
  image: _svgs_om_svg__WEBPACK_IMPORTED_MODULE_178__["default"],
  name: 'Oman'
};
images['pa'] = {
  image: _svgs_pa_svg__WEBPACK_IMPORTED_MODULE_179__["default"],
  name: 'Panama'
};
images['pe'] = {
  image: _svgs_pe_svg__WEBPACK_IMPORTED_MODULE_180__["default"],
  name: 'Peru'
};
images['pf'] = {
  image: _svgs_pf_svg__WEBPACK_IMPORTED_MODULE_181__["default"],
  name: 'French Polynesia'
};
images['pg'] = {
  image: _svgs_pg_svg__WEBPACK_IMPORTED_MODULE_182__["default"],
  name: 'Papua New Guinea'
};
images['ph'] = {
  image: _svgs_ph_svg__WEBPACK_IMPORTED_MODULE_183__["default"],
  name: 'Philippines'
};
images['pk'] = {
  image: _svgs_pk_svg__WEBPACK_IMPORTED_MODULE_184__["default"],
  name: 'Pakistan'
};
images['pl'] = {
  image: _svgs_pl_svg__WEBPACK_IMPORTED_MODULE_185__["default"],
  name: 'Poland'
};
images['pm'] = {
  image: _svgs_pm_svg__WEBPACK_IMPORTED_MODULE_186__["default"],
  name: 'Saint Pierre and Miquelon'
};
images['pn'] = {
  image: _svgs_pn_svg__WEBPACK_IMPORTED_MODULE_187__["default"],
  name: 'Pitcairn Islands'
};
images['pr'] = {
  image: _svgs_pr_svg__WEBPACK_IMPORTED_MODULE_188__["default"],
  name: 'Puerto Rico'
};
images['ps'] = {
  image: _svgs_ps_svg__WEBPACK_IMPORTED_MODULE_189__["default"],
  name: 'Palestine'
};
images['pt'] = {
  image: _svgs_pt_svg__WEBPACK_IMPORTED_MODULE_190__["default"],
  name: 'Portugal'
};
images['pw'] = {
  image: _svgs_pw_svg__WEBPACK_IMPORTED_MODULE_191__["default"],
  name: 'Palau'
};
images['py'] = {
  image: _svgs_py_svg__WEBPACK_IMPORTED_MODULE_192__["default"],
  name: 'Paraguay'
};
images['qa'] = {
  image: _svgs_qa_svg__WEBPACK_IMPORTED_MODULE_193__["default"],
  name: 'Qatar'
};
images['re'] = {
  image: _svgs_re_svg__WEBPACK_IMPORTED_MODULE_194__["default"],
  name: 'Réunion'
};
images['ro'] = {
  image: _svgs_ro_svg__WEBPACK_IMPORTED_MODULE_195__["default"],
  name: 'Romania'
};
images['rs'] = {
  image: _svgs_rs_svg__WEBPACK_IMPORTED_MODULE_196__["default"],
  name: 'Serbia'
};
images['ru'] = {
  image: _svgs_ru_svg__WEBPACK_IMPORTED_MODULE_197__["default"],
  name: 'Russia'
};
images['rw'] = {
  image: _svgs_rw_svg__WEBPACK_IMPORTED_MODULE_198__["default"],
  name: 'Rwanda'
};
images['sa'] = {
  image: _svgs_sa_svg__WEBPACK_IMPORTED_MODULE_199__["default"],
  name: 'Saudi Arabia'
};
images['sb'] = {
  image: _svgs_sb_svg__WEBPACK_IMPORTED_MODULE_200__["default"],
  name: 'Solomon Islands'
};
images['sc'] = {
  image: _svgs_sc_svg__WEBPACK_IMPORTED_MODULE_201__["default"],
  name: 'Seychelles'
};
images['sd'] = {
  image: _svgs_sd_svg__WEBPACK_IMPORTED_MODULE_202__["default"],
  name: 'Sudan'
};
images['se'] = {
  image: _svgs_se_svg__WEBPACK_IMPORTED_MODULE_203__["default"],
  name: 'Sweden'
};
images['sg'] = {
  image: _svgs_sg_svg__WEBPACK_IMPORTED_MODULE_204__["default"],
  name: 'Singapore'
};
images['sh'] = {
  image: _svgs_sh_svg__WEBPACK_IMPORTED_MODULE_205__["default"],
  name: 'Saint Helena, Ascension and Tristan da Cunha'
};
images['si'] = {
  image: _svgs_si_svg__WEBPACK_IMPORTED_MODULE_206__["default"],
  name: 'Slovenia'
};
images['sj'] = {
  image: _svgs_sj_svg__WEBPACK_IMPORTED_MODULE_207__["default"],
  name: 'Svalbard and Jan Mayen'
};
images['sk'] = {
  image: _svgs_sk_svg__WEBPACK_IMPORTED_MODULE_208__["default"],
  name: 'Slovakia'
};
images['sl'] = {
  image: _svgs_sl_svg__WEBPACK_IMPORTED_MODULE_209__["default"],
  name: 'Sierra Leone'
};
images['sm'] = {
  image: _svgs_sm_svg__WEBPACK_IMPORTED_MODULE_210__["default"],
  name: 'San Marino'
};
images['sn'] = {
  image: _svgs_sn_svg__WEBPACK_IMPORTED_MODULE_211__["default"],
  name: 'Senegal'
};
images['so'] = {
  image: _svgs_so_svg__WEBPACK_IMPORTED_MODULE_212__["default"],
  name: 'Somalia'
};
images['sr'] = {
  image: _svgs_sr_svg__WEBPACK_IMPORTED_MODULE_213__["default"],
  name: 'Suriname'
};
images['ss'] = {
  image: _svgs_ss_svg__WEBPACK_IMPORTED_MODULE_214__["default"],
  name: 'South Sudan'
};
images['st'] = {
  image: _svgs_st_svg__WEBPACK_IMPORTED_MODULE_215__["default"],
  name: 'São Tomé and Príncipe'
};
images['sv'] = {
  image: _svgs_sv_svg__WEBPACK_IMPORTED_MODULE_216__["default"],
  name: 'El Salvador'
};
images['sx'] = {
  image: _svgs_sx_svg__WEBPACK_IMPORTED_MODULE_217__["default"],
  name: 'Sint Maarten'
};
images['sy'] = {
  image: _svgs_sy_svg__WEBPACK_IMPORTED_MODULE_218__["default"],
  name: 'Syria'
};
images['sz'] = {
  image: _svgs_sz_svg__WEBPACK_IMPORTED_MODULE_219__["default"],
  name: 'Eswatini (Swaziland)'
};
images['tc'] = {
  image: _svgs_tc_svg__WEBPACK_IMPORTED_MODULE_220__["default"],
  name: 'Turks and Caicos Islands'
};
images['td'] = {
  image: _svgs_td_svg__WEBPACK_IMPORTED_MODULE_221__["default"],
  name: 'Chad'
};
images['tf'] = {
  image: _svgs_tf_svg__WEBPACK_IMPORTED_MODULE_222__["default"],
  name: 'French Southern and Antarctic Lands'
};
images['tg'] = {
  image: _svgs_tg_svg__WEBPACK_IMPORTED_MODULE_223__["default"],
  name: 'Togo'
};
images['th'] = {
  image: _svgs_th_svg__WEBPACK_IMPORTED_MODULE_224__["default"],
  name: 'Thailand'
};
images['tj'] = {
  image: _svgs_tj_svg__WEBPACK_IMPORTED_MODULE_225__["default"],
  name: 'Tajikistan'
};
images['tk'] = {
  image: _svgs_tk_svg__WEBPACK_IMPORTED_MODULE_226__["default"],
  name: 'Tokelau'
};
images['tl'] = {
  image: _svgs_tl_svg__WEBPACK_IMPORTED_MODULE_227__["default"],
  name: 'Timor-Leste'
};
images['tm'] = {
  image: _svgs_tm_svg__WEBPACK_IMPORTED_MODULE_228__["default"],
  name: 'Turkmenistan'
};
images['tn'] = {
  image: _svgs_tn_svg__WEBPACK_IMPORTED_MODULE_229__["default"],
  name: 'Tunisia'
};
images['to'] = {
  image: _svgs_to_svg__WEBPACK_IMPORTED_MODULE_230__["default"],
  name: 'Tonga'
};
images['tr'] = {
  image: _svgs_tr_svg__WEBPACK_IMPORTED_MODULE_231__["default"],
  name: 'Turkey'
};
images['tt'] = {
  image: _svgs_tt_svg__WEBPACK_IMPORTED_MODULE_232__["default"],
  name: 'Trinidad and Tobago'
};
images['tv'] = {
  image: _svgs_tv_svg__WEBPACK_IMPORTED_MODULE_233__["default"],
  name: 'Tuvalu'
};
images['tw'] = {
  image: _svgs_tw_svg__WEBPACK_IMPORTED_MODULE_234__["default"],
  name: 'Taiwan'
};
images['tz'] = {
  image: _svgs_tz_svg__WEBPACK_IMPORTED_MODULE_235__["default"],
  name: 'Tanzania'
};
images['ua'] = {
  image: _svgs_ua_svg__WEBPACK_IMPORTED_MODULE_236__["default"],
  name: 'Ukraine'
};
images['ug'] = {
  image: _svgs_ug_svg__WEBPACK_IMPORTED_MODULE_237__["default"],
  name: 'Uganda'
};
images['um'] = {
  image: _svgs_um_svg__WEBPACK_IMPORTED_MODULE_238__["default"],
  name: 'United States Minor Outlying Islands'
};
images['us'] = {
  image: _svgs_us_svg__WEBPACK_IMPORTED_MODULE_239__["default"],
  name: 'United States'
};
images['uy'] = {
  image: _svgs_uy_svg__WEBPACK_IMPORTED_MODULE_240__["default"],
  name: 'Uruguay'
};
images['uz'] = {
  image: _svgs_uz_svg__WEBPACK_IMPORTED_MODULE_241__["default"],
  name: 'Uzbekistan'
};
images['va'] = {
  image: _svgs_va_svg__WEBPACK_IMPORTED_MODULE_242__["default"],
  name: 'Vatican City (Holy See)'
};
images['vc'] = {
  image: _svgs_vc_svg__WEBPACK_IMPORTED_MODULE_243__["default"],
  name: 'Saint Vincent and the Grenadines'
};
images['ve'] = {
  image: _svgs_ve_svg__WEBPACK_IMPORTED_MODULE_244__["default"],
  name: 'Venezuela'
};
images['vg'] = {
  image: _svgs_vg_svg__WEBPACK_IMPORTED_MODULE_245__["default"],
  name: 'British Virgin Islands'
};
images['vi'] = {
  image: _svgs_vi_svg__WEBPACK_IMPORTED_MODULE_246__["default"],
  name: 'United States Virgin Islands'
};
images['vn'] = {
  image: _svgs_vn_svg__WEBPACK_IMPORTED_MODULE_247__["default"],
  name: 'Vietnam'
};
images['vu'] = {
  image: _svgs_vu_svg__WEBPACK_IMPORTED_MODULE_248__["default"],
  name: 'Vanuatu'
};
images['wf'] = {
  image: _svgs_wf_svg__WEBPACK_IMPORTED_MODULE_249__["default"],
  name: 'Wallis and Futuna'
};
images['ws'] = {
  image: _svgs_ws_svg__WEBPACK_IMPORTED_MODULE_250__["default"],
  name: 'Samoa'
};
images['xk'] = {
  image: _svgs_xk_svg__WEBPACK_IMPORTED_MODULE_251__["default"],
  name: 'Kosovo'
};
images['ye'] = {
  image: _svgs_ye_svg__WEBPACK_IMPORTED_MODULE_252__["default"],
  name: 'Yemen'
};
images['yt'] = {
  image: _svgs_yt_svg__WEBPACK_IMPORTED_MODULE_253__["default"],
  name: 'Mayotte'
};
images['za'] = {
  image: _svgs_za_svg__WEBPACK_IMPORTED_MODULE_254__["default"],
  name: 'South Africa'
};
images['zm'] = {
  image: _svgs_zm_svg__WEBPACK_IMPORTED_MODULE_255__["default"],
  name: 'Zambia'
};
images['zw'] = {
  image: _svgs_zw_svg__WEBPACK_IMPORTED_MODULE_256__["default"],
  name: 'Zimbabwe'
};
const imageKeys = Object.keys(images);
let myApp;
const numFlagsShown = 4;
let image; //const json = require('./codes.json');

/*
console.log(`json = ${json}`);
const codes = Object.keys(json);
console.log(`codes = ${JSON.stringify(codes)}`);
let printMe = '';
codes.forEach((c)=>{
  printMe += `import ${c}Image from './svgs/${c}.svg';\n`;
})
printMe += `let images = {};`;
codes.forEach((c)=>{
  printMe += `images['${c}'] = { image: ${c}Image, name: '${json[c]}' };\n`;
})
console.log(printMe);
*/

function App() {
  const reqSvgs = __webpack_require__("./src/svgs sync recursive \\.svg$");

  const allSvgFilePaths = reqSvgs.keys();
  const imagePath = allSvgFilePaths[0];
  console.log(`imagePath = ${imagePath}`);
  image = reqSvgs(imagePath);
  console.log(`image = ${image}`);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_257__["jsxDEV"])(AppContent, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 545,
    columnNumber: 5
  }, this);
}

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);
class AppContent extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      key: Math.random(),
      score: 0,
      message: '',
      numbersSelected: [],
      correctPlace: ''
    };
    myApp = this;
  }

  render() {
    if (this.state.numbersSelected.length === 0) {
      const numFlagsTotal = imageKeys.length;
      const numbersSelected = [];

      for (let i = 0; i < numFlagsShown; i = i + 1) {
        let randNum = Math.random();
        randNum = Math.floor(randNum * (numFlagsTotal - i)); // console.log(`randNum = ${randNum}`);

        let sorted = [];
        sorted = sorted.concat(numbersSelected);
        sorted.sort((a, b) => {
          return a < b ? -1 : 1;
        }); // console.log(`sorted = ${sorted}`);

        for (let j = 0; j < i; j = j + 1) {
          // console.log(`check ${randNum} against ${sorted[j]}`);
          if (randNum >= sorted[j]) {
            // console.log(`${randNum} >= ${sorted[j]} so add one`);
            randNum = randNum + 1;
          }
        }

        numbersSelected.push(randNum);
        console.log(`numbersSelected = ${numbersSelected}`);
      } //console.log(numbersSelected);


      const correctOne = Math.floor(Math.random() * numFlagsShown);
      const correctPlace = images[imageKeys[numbersSelected[correctOne]]].name;
      this.setState({
        numbersSelected: numbersSelected,
        correctPlace: correctPlace
      });
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_257__["jsxDEV"])("h2", {
        children: "..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 608,
        columnNumber: 5
      }, this);
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_257__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_257__["jsxDEV"])(_NavBar__WEBPACK_IMPORTED_MODULE_2__["FlagNavBar"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 616,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_257__["jsxDEV"])("h2", {
        children: ["Score ", myApp.state.score]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 618,
        columnNumber: 5
      }, this), this.state.numbersSelected.map(i => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_257__["jsxDEV"])("img", {
          src: images[imageKeys[i]].image,
          alt: images[imageKeys[i]].name,
          width: 200,
          height: 'auto',
          onClick: function () {
            if (images[imageKeys[i]].name === myApp.state.correctPlace) {
              // alert("WIN");
              myApp.setState({
                key: Math.random(),
                score: myApp.state.score + 1,
                numbersSelected: [],
                message: ''
              });
            } else {
              myApp.setState({
                message: `that was ${images[imageKeys[i]].name} - try again!`
              });
            }
          }
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 622,
          columnNumber: 15
        }, this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_257__["jsxDEV"])("h2", {
        children: ["Your task : click on the flag for ", this.state.correctPlace]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 647,
        columnNumber: 5
      }, this), this.state.message]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 615,
      columnNumber: 5
    }, this);
  }

}

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/NavBar.tsx":
/*!************************!*\
  !*** ./src/NavBar.tsx ***!
  \************************/
/*! exports provided: FlagNavBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagNavBar", function() { return FlagNavBar; });
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _van_icon_125866_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./van_icon_125866.png */ "./src/van_icon_125866.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/jeanflower/outsideICloud/git/FlagClient/src/NavBar.tsx";




class FlagNavBar extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Navbar"], {
      bg: "primary",
      variant: "dark",
      expand: "lg",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
        src: _van_icon_125866_png__WEBPACK_IMPORTED_MODULE_2__["default"],
        alt: "Van",
        width: 70,
        height: 'auto'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Navbar"].Brand, {
        href: "#home",
        children: "Flags galore"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Navbar"].Toggle, {
        "aria-controls": "basic-navbar-nav"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Navbar"].Collapse, {
        id: "basic-navbar-nav",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Nav"], {
          className: "mr-auto"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }, this);
  }

}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/jeanflower/outsideICloud/git/FlagClient/src/index.tsx";



 // AccordionCollapse triggers red console text

/*
ReactDOM.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/


react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 17,
  columnNumber: 3
}, undefined), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_3__["default"])();

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reportWebVitals.ts":
/*!********************************!*\
  !*** ./src/reportWebVitals.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.es5.min.js")).then(_ref => {
      let {
        getCLS,
        getFID,
        getFCP,
        getLCP,
        getTTFB
      } = _ref;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reportWebVitals);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/svgs sync recursive \\.svg$":
/*!******************************!*\
  !*** ./src/svgs sync \.svg$ ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ad.svg": "./src/svgs/ad.svg",
	"./ae.svg": "./src/svgs/ae.svg",
	"./af.svg": "./src/svgs/af.svg",
	"./ag.svg": "./src/svgs/ag.svg",
	"./ai.svg": "./src/svgs/ai.svg",
	"./al.svg": "./src/svgs/al.svg",
	"./am.svg": "./src/svgs/am.svg",
	"./ao.svg": "./src/svgs/ao.svg",
	"./aq.svg": "./src/svgs/aq.svg",
	"./ar.svg": "./src/svgs/ar.svg",
	"./as.svg": "./src/svgs/as.svg",
	"./at.svg": "./src/svgs/at.svg",
	"./au.svg": "./src/svgs/au.svg",
	"./aw.svg": "./src/svgs/aw.svg",
	"./ax.svg": "./src/svgs/ax.svg",
	"./az.svg": "./src/svgs/az.svg",
	"./ba.svg": "./src/svgs/ba.svg",
	"./bb.svg": "./src/svgs/bb.svg",
	"./bd.svg": "./src/svgs/bd.svg",
	"./be.svg": "./src/svgs/be.svg",
	"./bf.svg": "./src/svgs/bf.svg",
	"./bg.svg": "./src/svgs/bg.svg",
	"./bh.svg": "./src/svgs/bh.svg",
	"./bi.svg": "./src/svgs/bi.svg",
	"./bj.svg": "./src/svgs/bj.svg",
	"./bl.svg": "./src/svgs/bl.svg",
	"./bm.svg": "./src/svgs/bm.svg",
	"./bn.svg": "./src/svgs/bn.svg",
	"./bo.svg": "./src/svgs/bo.svg",
	"./bq.svg": "./src/svgs/bq.svg",
	"./br.svg": "./src/svgs/br.svg",
	"./bs.svg": "./src/svgs/bs.svg",
	"./bt.svg": "./src/svgs/bt.svg",
	"./bv.svg": "./src/svgs/bv.svg",
	"./bw.svg": "./src/svgs/bw.svg",
	"./by.svg": "./src/svgs/by.svg",
	"./bz.svg": "./src/svgs/bz.svg",
	"./ca.svg": "./src/svgs/ca.svg",
	"./cc.svg": "./src/svgs/cc.svg",
	"./cd.svg": "./src/svgs/cd.svg",
	"./cf.svg": "./src/svgs/cf.svg",
	"./cg.svg": "./src/svgs/cg.svg",
	"./ch.svg": "./src/svgs/ch.svg",
	"./ci.svg": "./src/svgs/ci.svg",
	"./ck.svg": "./src/svgs/ck.svg",
	"./cl.svg": "./src/svgs/cl.svg",
	"./cm.svg": "./src/svgs/cm.svg",
	"./cn.svg": "./src/svgs/cn.svg",
	"./co.svg": "./src/svgs/co.svg",
	"./cr.svg": "./src/svgs/cr.svg",
	"./cu.svg": "./src/svgs/cu.svg",
	"./cv.svg": "./src/svgs/cv.svg",
	"./cw.svg": "./src/svgs/cw.svg",
	"./cx.svg": "./src/svgs/cx.svg",
	"./cy.svg": "./src/svgs/cy.svg",
	"./cz.svg": "./src/svgs/cz.svg",
	"./de.svg": "./src/svgs/de.svg",
	"./dj.svg": "./src/svgs/dj.svg",
	"./dk.svg": "./src/svgs/dk.svg",
	"./dm.svg": "./src/svgs/dm.svg",
	"./do.svg": "./src/svgs/do.svg",
	"./dz.svg": "./src/svgs/dz.svg",
	"./ec.svg": "./src/svgs/ec.svg",
	"./ee.svg": "./src/svgs/ee.svg",
	"./eg.svg": "./src/svgs/eg.svg",
	"./eh.svg": "./src/svgs/eh.svg",
	"./er.svg": "./src/svgs/er.svg",
	"./es.svg": "./src/svgs/es.svg",
	"./et.svg": "./src/svgs/et.svg",
	"./fi.svg": "./src/svgs/fi.svg",
	"./fj.svg": "./src/svgs/fj.svg",
	"./fk.svg": "./src/svgs/fk.svg",
	"./fm.svg": "./src/svgs/fm.svg",
	"./fo.svg": "./src/svgs/fo.svg",
	"./fr.svg": "./src/svgs/fr.svg",
	"./ga.svg": "./src/svgs/ga.svg",
	"./gb-eng.svg": "./src/svgs/gb-eng.svg",
	"./gb-nir.svg": "./src/svgs/gb-nir.svg",
	"./gb-sct.svg": "./src/svgs/gb-sct.svg",
	"./gb-wls.svg": "./src/svgs/gb-wls.svg",
	"./gb.svg": "./src/svgs/gb.svg",
	"./gd.svg": "./src/svgs/gd.svg",
	"./ge.svg": "./src/svgs/ge.svg",
	"./gf.svg": "./src/svgs/gf.svg",
	"./gg.svg": "./src/svgs/gg.svg",
	"./gh.svg": "./src/svgs/gh.svg",
	"./gi.svg": "./src/svgs/gi.svg",
	"./gl.svg": "./src/svgs/gl.svg",
	"./gm.svg": "./src/svgs/gm.svg",
	"./gn.svg": "./src/svgs/gn.svg",
	"./gp.svg": "./src/svgs/gp.svg",
	"./gq.svg": "./src/svgs/gq.svg",
	"./gr.svg": "./src/svgs/gr.svg",
	"./gs.svg": "./src/svgs/gs.svg",
	"./gt.svg": "./src/svgs/gt.svg",
	"./gu.svg": "./src/svgs/gu.svg",
	"./gw.svg": "./src/svgs/gw.svg",
	"./gy.svg": "./src/svgs/gy.svg",
	"./hk.svg": "./src/svgs/hk.svg",
	"./hm.svg": "./src/svgs/hm.svg",
	"./hn.svg": "./src/svgs/hn.svg",
	"./hr.svg": "./src/svgs/hr.svg",
	"./ht.svg": "./src/svgs/ht.svg",
	"./hu.svg": "./src/svgs/hu.svg",
	"./id.svg": "./src/svgs/id.svg",
	"./ie.svg": "./src/svgs/ie.svg",
	"./il.svg": "./src/svgs/il.svg",
	"./im.svg": "./src/svgs/im.svg",
	"./in.svg": "./src/svgs/in.svg",
	"./io.svg": "./src/svgs/io.svg",
	"./iq.svg": "./src/svgs/iq.svg",
	"./ir.svg": "./src/svgs/ir.svg",
	"./is.svg": "./src/svgs/is.svg",
	"./it.svg": "./src/svgs/it.svg",
	"./je.svg": "./src/svgs/je.svg",
	"./jm.svg": "./src/svgs/jm.svg",
	"./jo.svg": "./src/svgs/jo.svg",
	"./jp.svg": "./src/svgs/jp.svg",
	"./ke.svg": "./src/svgs/ke.svg",
	"./kg.svg": "./src/svgs/kg.svg",
	"./kh.svg": "./src/svgs/kh.svg",
	"./ki.svg": "./src/svgs/ki.svg",
	"./km.svg": "./src/svgs/km.svg",
	"./kn.svg": "./src/svgs/kn.svg",
	"./kp.svg": "./src/svgs/kp.svg",
	"./kr.svg": "./src/svgs/kr.svg",
	"./kw.svg": "./src/svgs/kw.svg",
	"./ky.svg": "./src/svgs/ky.svg",
	"./kz.svg": "./src/svgs/kz.svg",
	"./la.svg": "./src/svgs/la.svg",
	"./lb.svg": "./src/svgs/lb.svg",
	"./lc.svg": "./src/svgs/lc.svg",
	"./li.svg": "./src/svgs/li.svg",
	"./lk.svg": "./src/svgs/lk.svg",
	"./lr.svg": "./src/svgs/lr.svg",
	"./ls.svg": "./src/svgs/ls.svg",
	"./lt.svg": "./src/svgs/lt.svg",
	"./lu.svg": "./src/svgs/lu.svg",
	"./lv.svg": "./src/svgs/lv.svg",
	"./ly.svg": "./src/svgs/ly.svg",
	"./ma.svg": "./src/svgs/ma.svg",
	"./mc.svg": "./src/svgs/mc.svg",
	"./md.svg": "./src/svgs/md.svg",
	"./me.svg": "./src/svgs/me.svg",
	"./mf.svg": "./src/svgs/mf.svg",
	"./mg.svg": "./src/svgs/mg.svg",
	"./mh.svg": "./src/svgs/mh.svg",
	"./mk.svg": "./src/svgs/mk.svg",
	"./ml.svg": "./src/svgs/ml.svg",
	"./mm.svg": "./src/svgs/mm.svg",
	"./mn.svg": "./src/svgs/mn.svg",
	"./mo.svg": "./src/svgs/mo.svg",
	"./mp.svg": "./src/svgs/mp.svg",
	"./mq.svg": "./src/svgs/mq.svg",
	"./mr.svg": "./src/svgs/mr.svg",
	"./ms.svg": "./src/svgs/ms.svg",
	"./mt.svg": "./src/svgs/mt.svg",
	"./mu.svg": "./src/svgs/mu.svg",
	"./mv.svg": "./src/svgs/mv.svg",
	"./mw.svg": "./src/svgs/mw.svg",
	"./mx.svg": "./src/svgs/mx.svg",
	"./my.svg": "./src/svgs/my.svg",
	"./mz.svg": "./src/svgs/mz.svg",
	"./na.svg": "./src/svgs/na.svg",
	"./nc.svg": "./src/svgs/nc.svg",
	"./ne.svg": "./src/svgs/ne.svg",
	"./nf.svg": "./src/svgs/nf.svg",
	"./ng.svg": "./src/svgs/ng.svg",
	"./ni.svg": "./src/svgs/ni.svg",
	"./nl.svg": "./src/svgs/nl.svg",
	"./no.svg": "./src/svgs/no.svg",
	"./np.svg": "./src/svgs/np.svg",
	"./nr.svg": "./src/svgs/nr.svg",
	"./nu.svg": "./src/svgs/nu.svg",
	"./nz.svg": "./src/svgs/nz.svg",
	"./om.svg": "./src/svgs/om.svg",
	"./pa.svg": "./src/svgs/pa.svg",
	"./pe.svg": "./src/svgs/pe.svg",
	"./pf.svg": "./src/svgs/pf.svg",
	"./pg.svg": "./src/svgs/pg.svg",
	"./ph.svg": "./src/svgs/ph.svg",
	"./pk.svg": "./src/svgs/pk.svg",
	"./pl.svg": "./src/svgs/pl.svg",
	"./pm.svg": "./src/svgs/pm.svg",
	"./pn.svg": "./src/svgs/pn.svg",
	"./pr.svg": "./src/svgs/pr.svg",
	"./ps.svg": "./src/svgs/ps.svg",
	"./pt.svg": "./src/svgs/pt.svg",
	"./pw.svg": "./src/svgs/pw.svg",
	"./py.svg": "./src/svgs/py.svg",
	"./qa.svg": "./src/svgs/qa.svg",
	"./re.svg": "./src/svgs/re.svg",
	"./ro.svg": "./src/svgs/ro.svg",
	"./rs.svg": "./src/svgs/rs.svg",
	"./ru.svg": "./src/svgs/ru.svg",
	"./rw.svg": "./src/svgs/rw.svg",
	"./sa.svg": "./src/svgs/sa.svg",
	"./sb.svg": "./src/svgs/sb.svg",
	"./sc.svg": "./src/svgs/sc.svg",
	"./sd.svg": "./src/svgs/sd.svg",
	"./se.svg": "./src/svgs/se.svg",
	"./sg.svg": "./src/svgs/sg.svg",
	"./sh.svg": "./src/svgs/sh.svg",
	"./si.svg": "./src/svgs/si.svg",
	"./sj.svg": "./src/svgs/sj.svg",
	"./sk.svg": "./src/svgs/sk.svg",
	"./sl.svg": "./src/svgs/sl.svg",
	"./sm.svg": "./src/svgs/sm.svg",
	"./sn.svg": "./src/svgs/sn.svg",
	"./so.svg": "./src/svgs/so.svg",
	"./sr.svg": "./src/svgs/sr.svg",
	"./ss.svg": "./src/svgs/ss.svg",
	"./st.svg": "./src/svgs/st.svg",
	"./sv.svg": "./src/svgs/sv.svg",
	"./sx.svg": "./src/svgs/sx.svg",
	"./sy.svg": "./src/svgs/sy.svg",
	"./sz.svg": "./src/svgs/sz.svg",
	"./tc.svg": "./src/svgs/tc.svg",
	"./td.svg": "./src/svgs/td.svg",
	"./tf.svg": "./src/svgs/tf.svg",
	"./tg.svg": "./src/svgs/tg.svg",
	"./th.svg": "./src/svgs/th.svg",
	"./tj.svg": "./src/svgs/tj.svg",
	"./tk.svg": "./src/svgs/tk.svg",
	"./tl.svg": "./src/svgs/tl.svg",
	"./tm.svg": "./src/svgs/tm.svg",
	"./tn.svg": "./src/svgs/tn.svg",
	"./to.svg": "./src/svgs/to.svg",
	"./tr.svg": "./src/svgs/tr.svg",
	"./tt.svg": "./src/svgs/tt.svg",
	"./tv.svg": "./src/svgs/tv.svg",
	"./tw.svg": "./src/svgs/tw.svg",
	"./tz.svg": "./src/svgs/tz.svg",
	"./ua.svg": "./src/svgs/ua.svg",
	"./ug.svg": "./src/svgs/ug.svg",
	"./um.svg": "./src/svgs/um.svg",
	"./us.svg": "./src/svgs/us.svg",
	"./uy.svg": "./src/svgs/uy.svg",
	"./uz.svg": "./src/svgs/uz.svg",
	"./va.svg": "./src/svgs/va.svg",
	"./vc.svg": "./src/svgs/vc.svg",
	"./ve.svg": "./src/svgs/ve.svg",
	"./vg.svg": "./src/svgs/vg.svg",
	"./vi.svg": "./src/svgs/vi.svg",
	"./vn.svg": "./src/svgs/vn.svg",
	"./vu.svg": "./src/svgs/vu.svg",
	"./wf.svg": "./src/svgs/wf.svg",
	"./ws.svg": "./src/svgs/ws.svg",
	"./xk.svg": "./src/svgs/xk.svg",
	"./ye.svg": "./src/svgs/ye.svg",
	"./yt.svg": "./src/svgs/yt.svg",
	"./za.svg": "./src/svgs/za.svg",
	"./zm.svg": "./src/svgs/zm.svg",
	"./zw.svg": "./src/svgs/zw.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/svgs sync recursive \\.svg$";

/***/ }),

/***/ "./src/svgs/ad.svg":
/*!*************************!*\
  !*** ./src/svgs/ad.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ad.25ac0ed2.svg");

/***/ }),

/***/ "./src/svgs/ae.svg":
/*!*************************!*\
  !*** ./src/svgs/ae.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ae.3cb683e7.svg");

/***/ }),

/***/ "./src/svgs/af.svg":
/*!*************************!*\
  !*** ./src/svgs/af.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/af.39e74801.svg");

/***/ }),

/***/ "./src/svgs/ag.svg":
/*!*************************!*\
  !*** ./src/svgs/ag.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ag.ca92e98b.svg");

/***/ }),

/***/ "./src/svgs/ai.svg":
/*!*************************!*\
  !*** ./src/svgs/ai.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ai.a1b02c9a.svg");

/***/ }),

/***/ "./src/svgs/al.svg":
/*!*************************!*\
  !*** ./src/svgs/al.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/al.dd17f9b0.svg");

/***/ }),

/***/ "./src/svgs/am.svg":
/*!*************************!*\
  !*** ./src/svgs/am.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/am.bf875297.svg");

/***/ }),

/***/ "./src/svgs/ao.svg":
/*!*************************!*\
  !*** ./src/svgs/ao.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ao.3d13492f.svg");

/***/ }),

/***/ "./src/svgs/aq.svg":
/*!*************************!*\
  !*** ./src/svgs/aq.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/aq.34fd7fc6.svg");

/***/ }),

/***/ "./src/svgs/ar.svg":
/*!*************************!*\
  !*** ./src/svgs/ar.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ar.3dd319bc.svg");

/***/ }),

/***/ "./src/svgs/as.svg":
/*!*************************!*\
  !*** ./src/svgs/as.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/as.3eef14f8.svg");

/***/ }),

/***/ "./src/svgs/at.svg":
/*!*************************!*\
  !*** ./src/svgs/at.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/at.3f24aadd.svg");

/***/ }),

/***/ "./src/svgs/au.svg":
/*!*************************!*\
  !*** ./src/svgs/au.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/au.85ccb166.svg");

/***/ }),

/***/ "./src/svgs/aw.svg":
/*!*************************!*\
  !*** ./src/svgs/aw.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/aw.81ee4363.svg");

/***/ }),

/***/ "./src/svgs/ax.svg":
/*!*************************!*\
  !*** ./src/svgs/ax.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ax.dae59e50.svg");

/***/ }),

/***/ "./src/svgs/az.svg":
/*!*************************!*\
  !*** ./src/svgs/az.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/az.90f878f4.svg");

/***/ }),

/***/ "./src/svgs/ba.svg":
/*!*************************!*\
  !*** ./src/svgs/ba.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ba.24168cd5.svg");

/***/ }),

/***/ "./src/svgs/bb.svg":
/*!*************************!*\
  !*** ./src/svgs/bb.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/bb.1cc03970.svg");

/***/ }),

/***/ "./src/svgs/bd.svg":
/*!*************************!*\
  !*** ./src/svgs/bd.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/bd.b90eb817.svg");

/***/ }),

/***/ "./src/svgs/be.svg":
/*!*************************!*\
  !*** ./src/svgs/be.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/be.e0476389.svg");

/***/ }),

/***/ "./src/svgs/bf.svg":
/*!*************************!*\
  !*** ./src/svgs/bf.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/bf.07ab1498.svg");

/***/ }),

/***/ "./src/svgs/bg.svg":
/*!*************************!*\
  !*** ./src/svgs/bg.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/bg.c3f2878c.svg");

/***/ }),

/***/ "./src/svgs/bh.svg":
/*!*************************!*\
  !*** ./src/svgs/bh.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/bh.ef7de265.svg");

/***/ }),

/***/ "./src/svgs/bi.svg":
/*!*************************!*\
  !*** ./src/svgs/bi.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/bi.fa653f3c.svg");

/***/ }),

/***/ "./src/svgs/bj.svg":
/*!*************************!*\
  !*** ./src/svgs/bj.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/bj.bf771f47.svg");

/***/ }),

/***/ "./src/svgs/bl.svg":
/*!*************************!*\
  !*** ./src/svgs/bl.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/bl.bfa68d22.svg");

/***/ }),

/***/ "./src/svgs/bm.svg":
/*!*************************!*\
  !*** ./src/svgs/bm.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/bm.d3f55ba9.svg");

/***/ }),

/***/ "./src/svgs/bn.svg":
/*!*************************!*\
  !*** ./src/svgs/bn.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/bn.f421a4dd.svg");

/***/ }),

/***/ "./src/svgs/bo.svg":
/*!*************************!*\
  !*** ./src/svgs/bo.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/bo.86a0310e.svg");

/***/ }),

/***/ "./src/svgs/bq.svg":
/*!*************************!*\
  !*** ./src/svgs/bq.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/bq.c4696c0a.svg");

/***/ }),

/***/ "./src/svgs/br.svg":
/*!*************************!*\
  !*** ./src/svgs/br.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/br.0195f143.svg");

/***/ }),

/***/ "./src/svgs/bs.svg":
/*!*************************!*\
  !*** ./src/svgs/bs.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/bs.139f285d.svg");

/***/ }),

/***/ "./src/svgs/bt.svg":
/*!*************************!*\
  !*** ./src/svgs/bt.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/bt.cf61bcae.svg");

/***/ }),

/***/ "./src/svgs/bv.svg":
/*!*************************!*\
  !*** ./src/svgs/bv.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/bv.af9b74eb.svg");

/***/ }),

/***/ "./src/svgs/bw.svg":
/*!*************************!*\
  !*** ./src/svgs/bw.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/bw.543b804a.svg");

/***/ }),

/***/ "./src/svgs/by.svg":
/*!*************************!*\
  !*** ./src/svgs/by.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/by.be6fc507.svg");

/***/ }),

/***/ "./src/svgs/bz.svg":
/*!*************************!*\
  !*** ./src/svgs/bz.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/bz.8c10af1e.svg");

/***/ }),

/***/ "./src/svgs/ca.svg":
/*!*************************!*\
  !*** ./src/svgs/ca.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ca.314f8d47.svg");

/***/ }),

/***/ "./src/svgs/cc.svg":
/*!*************************!*\
  !*** ./src/svgs/cc.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/cc.df63c31b.svg");

/***/ }),

/***/ "./src/svgs/cd.svg":
/*!*************************!*\
  !*** ./src/svgs/cd.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/cd.096011a1.svg");

/***/ }),

/***/ "./src/svgs/cf.svg":
/*!*************************!*\
  !*** ./src/svgs/cf.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/cf.209ffd57.svg");

/***/ }),

/***/ "./src/svgs/cg.svg":
/*!*************************!*\
  !*** ./src/svgs/cg.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/cg.a88f186e.svg");

/***/ }),

/***/ "./src/svgs/ch.svg":
/*!*************************!*\
  !*** ./src/svgs/ch.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ch.8804e0a9.svg");

/***/ }),

/***/ "./src/svgs/ci.svg":
/*!*************************!*\
  !*** ./src/svgs/ci.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ci.7a067489.svg");

/***/ }),

/***/ "./src/svgs/ck.svg":
/*!*************************!*\
  !*** ./src/svgs/ck.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ck.2f409655.svg");

/***/ }),

/***/ "./src/svgs/cl.svg":
/*!*************************!*\
  !*** ./src/svgs/cl.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/cl.f477fc62.svg");

/***/ }),

/***/ "./src/svgs/cm.svg":
/*!*************************!*\
  !*** ./src/svgs/cm.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/cm.75758d5f.svg");

/***/ }),

/***/ "./src/svgs/cn.svg":
/*!*************************!*\
  !*** ./src/svgs/cn.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/cn.acb9cced.svg");

/***/ }),

/***/ "./src/svgs/co.svg":
/*!*************************!*\
  !*** ./src/svgs/co.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/co.49a1e31d.svg");

/***/ }),

/***/ "./src/svgs/cr.svg":
/*!*************************!*\
  !*** ./src/svgs/cr.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/cr.fba3ebb5.svg");

/***/ }),

/***/ "./src/svgs/cu.svg":
/*!*************************!*\
  !*** ./src/svgs/cu.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/cu.8b800c64.svg");

/***/ }),

/***/ "./src/svgs/cv.svg":
/*!*************************!*\
  !*** ./src/svgs/cv.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/cv.af3471f4.svg");

/***/ }),

/***/ "./src/svgs/cw.svg":
/*!*************************!*\
  !*** ./src/svgs/cw.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/cw.49c7e139.svg");

/***/ }),

/***/ "./src/svgs/cx.svg":
/*!*************************!*\
  !*** ./src/svgs/cx.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/cx.a0e97b7d.svg");

/***/ }),

/***/ "./src/svgs/cy.svg":
/*!*************************!*\
  !*** ./src/svgs/cy.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/cy.c7e8ab5f.svg");

/***/ }),

/***/ "./src/svgs/cz.svg":
/*!*************************!*\
  !*** ./src/svgs/cz.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/cz.51a0d6fd.svg");

/***/ }),

/***/ "./src/svgs/de.svg":
/*!*************************!*\
  !*** ./src/svgs/de.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/de.ed5be695.svg");

/***/ }),

/***/ "./src/svgs/dj.svg":
/*!*************************!*\
  !*** ./src/svgs/dj.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/dj.89d8376e.svg");

/***/ }),

/***/ "./src/svgs/dk.svg":
/*!*************************!*\
  !*** ./src/svgs/dk.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/dk.ce7c702b.svg");

/***/ }),

/***/ "./src/svgs/dm.svg":
/*!*************************!*\
  !*** ./src/svgs/dm.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/dm.2ac8b434.svg");

/***/ }),

/***/ "./src/svgs/do.svg":
/*!*************************!*\
  !*** ./src/svgs/do.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/do.75e69c18.svg");

/***/ }),

/***/ "./src/svgs/dz.svg":
/*!*************************!*\
  !*** ./src/svgs/dz.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/dz.8fee433a.svg");

/***/ }),

/***/ "./src/svgs/ec.svg":
/*!*************************!*\
  !*** ./src/svgs/ec.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ec.79b6a040.svg");

/***/ }),

/***/ "./src/svgs/ee.svg":
/*!*************************!*\
  !*** ./src/svgs/ee.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ee.5ea34c7e.svg");

/***/ }),

/***/ "./src/svgs/eg.svg":
/*!*************************!*\
  !*** ./src/svgs/eg.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/eg.5398d660.svg");

/***/ }),

/***/ "./src/svgs/eh.svg":
/*!*************************!*\
  !*** ./src/svgs/eh.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/eh.77f36af4.svg");

/***/ }),

/***/ "./src/svgs/er.svg":
/*!*************************!*\
  !*** ./src/svgs/er.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/er.5e3dc854.svg");

/***/ }),

/***/ "./src/svgs/es.svg":
/*!*************************!*\
  !*** ./src/svgs/es.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/es.e26a0ad9.svg");

/***/ }),

/***/ "./src/svgs/et.svg":
/*!*************************!*\
  !*** ./src/svgs/et.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/et.370673cb.svg");

/***/ }),

/***/ "./src/svgs/fi.svg":
/*!*************************!*\
  !*** ./src/svgs/fi.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/fi.e5f6b305.svg");

/***/ }),

/***/ "./src/svgs/fj.svg":
/*!*************************!*\
  !*** ./src/svgs/fj.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/fj.439cb569.svg");

/***/ }),

/***/ "./src/svgs/fk.svg":
/*!*************************!*\
  !*** ./src/svgs/fk.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/fk.af6dd5a3.svg");

/***/ }),

/***/ "./src/svgs/fm.svg":
/*!*************************!*\
  !*** ./src/svgs/fm.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/fm.db691c5b.svg");

/***/ }),

/***/ "./src/svgs/fo.svg":
/*!*************************!*\
  !*** ./src/svgs/fo.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/fo.4348c39a.svg");

/***/ }),

/***/ "./src/svgs/fr.svg":
/*!*************************!*\
  !*** ./src/svgs/fr.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/fr.2b73cc5a.svg");

/***/ }),

/***/ "./src/svgs/ga.svg":
/*!*************************!*\
  !*** ./src/svgs/ga.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ga.337f88ad.svg");

/***/ }),

/***/ "./src/svgs/gb-eng.svg":
/*!*****************************!*\
  !*** ./src/svgs/gb-eng.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/gb-eng.0da2d3ca.svg");

/***/ }),

/***/ "./src/svgs/gb-nir.svg":
/*!*****************************!*\
  !*** ./src/svgs/gb-nir.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/gb-nir.88d04380.svg");

/***/ }),

/***/ "./src/svgs/gb-sct.svg":
/*!*****************************!*\
  !*** ./src/svgs/gb-sct.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/gb-sct.0e1b783f.svg");

/***/ }),

/***/ "./src/svgs/gb-wls.svg":
/*!*****************************!*\
  !*** ./src/svgs/gb-wls.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/gb-wls.0a94356c.svg");

/***/ }),

/***/ "./src/svgs/gb.svg":
/*!*************************!*\
  !*** ./src/svgs/gb.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/gb.1c2fbca1.svg");

/***/ }),

/***/ "./src/svgs/gd.svg":
/*!*************************!*\
  !*** ./src/svgs/gd.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/gd.3a634a9f.svg");

/***/ }),

/***/ "./src/svgs/ge.svg":
/*!*************************!*\
  !*** ./src/svgs/ge.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ge.2bec9c7c.svg");

/***/ }),

/***/ "./src/svgs/gf.svg":
/*!*************************!*\
  !*** ./src/svgs/gf.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/gf.f8adb485.svg");

/***/ }),

/***/ "./src/svgs/gg.svg":
/*!*************************!*\
  !*** ./src/svgs/gg.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/gg.df2355b9.svg");

/***/ }),

/***/ "./src/svgs/gh.svg":
/*!*************************!*\
  !*** ./src/svgs/gh.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/gh.7c58c56e.svg");

/***/ }),

/***/ "./src/svgs/gi.svg":
/*!*************************!*\
  !*** ./src/svgs/gi.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/gi.5c0ebf0e.svg");

/***/ }),

/***/ "./src/svgs/gl.svg":
/*!*************************!*\
  !*** ./src/svgs/gl.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/gl.afe39827.svg");

/***/ }),

/***/ "./src/svgs/gm.svg":
/*!*************************!*\
  !*** ./src/svgs/gm.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/gm.bd16cc59.svg");

/***/ }),

/***/ "./src/svgs/gn.svg":
/*!*************************!*\
  !*** ./src/svgs/gn.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/gn.4747aac7.svg");

/***/ }),

/***/ "./src/svgs/gp.svg":
/*!*************************!*\
  !*** ./src/svgs/gp.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/gp.e72571b6.svg");

/***/ }),

/***/ "./src/svgs/gq.svg":
/*!*************************!*\
  !*** ./src/svgs/gq.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/gq.bb11dca8.svg");

/***/ }),

/***/ "./src/svgs/gr.svg":
/*!*************************!*\
  !*** ./src/svgs/gr.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/gr.bbe33ba4.svg");

/***/ }),

/***/ "./src/svgs/gs.svg":
/*!*************************!*\
  !*** ./src/svgs/gs.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/gs.2ec26ca3.svg");

/***/ }),

/***/ "./src/svgs/gt.svg":
/*!*************************!*\
  !*** ./src/svgs/gt.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/gt.c2f133b4.svg");

/***/ }),

/***/ "./src/svgs/gu.svg":
/*!*************************!*\
  !*** ./src/svgs/gu.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/gu.9ef9a109.svg");

/***/ }),

/***/ "./src/svgs/gw.svg":
/*!*************************!*\
  !*** ./src/svgs/gw.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/gw.e46819f1.svg");

/***/ }),

/***/ "./src/svgs/gy.svg":
/*!*************************!*\
  !*** ./src/svgs/gy.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/gy.ddfa83e3.svg");

/***/ }),

/***/ "./src/svgs/hk.svg":
/*!*************************!*\
  !*** ./src/svgs/hk.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/hk.f032f0ae.svg");

/***/ }),

/***/ "./src/svgs/hm.svg":
/*!*************************!*\
  !*** ./src/svgs/hm.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/hm.15a28b2b.svg");

/***/ }),

/***/ "./src/svgs/hn.svg":
/*!*************************!*\
  !*** ./src/svgs/hn.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/hn.8c6234e6.svg");

/***/ }),

/***/ "./src/svgs/hr.svg":
/*!*************************!*\
  !*** ./src/svgs/hr.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/hr.43ed8320.svg");

/***/ }),

/***/ "./src/svgs/ht.svg":
/*!*************************!*\
  !*** ./src/svgs/ht.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ht.7265c63e.svg");

/***/ }),

/***/ "./src/svgs/hu.svg":
/*!*************************!*\
  !*** ./src/svgs/hu.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/hu.64fe83a2.svg");

/***/ }),

/***/ "./src/svgs/id.svg":
/*!*************************!*\
  !*** ./src/svgs/id.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/id.af166a84.svg");

/***/ }),

/***/ "./src/svgs/ie.svg":
/*!*************************!*\
  !*** ./src/svgs/ie.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ie.fed6e4f7.svg");

/***/ }),

/***/ "./src/svgs/il.svg":
/*!*************************!*\
  !*** ./src/svgs/il.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/il.7e01155c.svg");

/***/ }),

/***/ "./src/svgs/im.svg":
/*!*************************!*\
  !*** ./src/svgs/im.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/im.fb09ebd5.svg");

/***/ }),

/***/ "./src/svgs/in.svg":
/*!*************************!*\
  !*** ./src/svgs/in.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/in.2ba1ab61.svg");

/***/ }),

/***/ "./src/svgs/io.svg":
/*!*************************!*\
  !*** ./src/svgs/io.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/io.35dfa7ba.svg");

/***/ }),

/***/ "./src/svgs/iq.svg":
/*!*************************!*\
  !*** ./src/svgs/iq.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/iq.49a9a4bf.svg");

/***/ }),

/***/ "./src/svgs/ir.svg":
/*!*************************!*\
  !*** ./src/svgs/ir.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ir.9f951dd0.svg");

/***/ }),

/***/ "./src/svgs/is.svg":
/*!*************************!*\
  !*** ./src/svgs/is.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/is.bb94eeba.svg");

/***/ }),

/***/ "./src/svgs/it.svg":
/*!*************************!*\
  !*** ./src/svgs/it.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/it.1f95c8f2.svg");

/***/ }),

/***/ "./src/svgs/je.svg":
/*!*************************!*\
  !*** ./src/svgs/je.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/je.c637d378.svg");

/***/ }),

/***/ "./src/svgs/jm.svg":
/*!*************************!*\
  !*** ./src/svgs/jm.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/jm.c8d51bb6.svg");

/***/ }),

/***/ "./src/svgs/jo.svg":
/*!*************************!*\
  !*** ./src/svgs/jo.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/jo.93492209.svg");

/***/ }),

/***/ "./src/svgs/jp.svg":
/*!*************************!*\
  !*** ./src/svgs/jp.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/jp.e2f58c0d.svg");

/***/ }),

/***/ "./src/svgs/ke.svg":
/*!*************************!*\
  !*** ./src/svgs/ke.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ke.c5f66beb.svg");

/***/ }),

/***/ "./src/svgs/kg.svg":
/*!*************************!*\
  !*** ./src/svgs/kg.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/kg.4f1d3e99.svg");

/***/ }),

/***/ "./src/svgs/kh.svg":
/*!*************************!*\
  !*** ./src/svgs/kh.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/kh.ccda0a1b.svg");

/***/ }),

/***/ "./src/svgs/ki.svg":
/*!*************************!*\
  !*** ./src/svgs/ki.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ki.427569b9.svg");

/***/ }),

/***/ "./src/svgs/km.svg":
/*!*************************!*\
  !*** ./src/svgs/km.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/km.c75f417e.svg");

/***/ }),

/***/ "./src/svgs/kn.svg":
/*!*************************!*\
  !*** ./src/svgs/kn.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/kn.240df9de.svg");

/***/ }),

/***/ "./src/svgs/kp.svg":
/*!*************************!*\
  !*** ./src/svgs/kp.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/kp.c00c2449.svg");

/***/ }),

/***/ "./src/svgs/kr.svg":
/*!*************************!*\
  !*** ./src/svgs/kr.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/kr.b6392a9e.svg");

/***/ }),

/***/ "./src/svgs/kw.svg":
/*!*************************!*\
  !*** ./src/svgs/kw.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/kw.11d1af06.svg");

/***/ }),

/***/ "./src/svgs/ky.svg":
/*!*************************!*\
  !*** ./src/svgs/ky.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ky.a1897118.svg");

/***/ }),

/***/ "./src/svgs/kz.svg":
/*!*************************!*\
  !*** ./src/svgs/kz.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/kz.6acb3f67.svg");

/***/ }),

/***/ "./src/svgs/la.svg":
/*!*************************!*\
  !*** ./src/svgs/la.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/la.9f10257a.svg");

/***/ }),

/***/ "./src/svgs/lb.svg":
/*!*************************!*\
  !*** ./src/svgs/lb.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/lb.a5038a58.svg");

/***/ }),

/***/ "./src/svgs/lc.svg":
/*!*************************!*\
  !*** ./src/svgs/lc.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/lc.cb052707.svg");

/***/ }),

/***/ "./src/svgs/li.svg":
/*!*************************!*\
  !*** ./src/svgs/li.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/li.813c4b04.svg");

/***/ }),

/***/ "./src/svgs/lk.svg":
/*!*************************!*\
  !*** ./src/svgs/lk.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/lk.96b93cda.svg");

/***/ }),

/***/ "./src/svgs/lr.svg":
/*!*************************!*\
  !*** ./src/svgs/lr.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/lr.45b0874c.svg");

/***/ }),

/***/ "./src/svgs/ls.svg":
/*!*************************!*\
  !*** ./src/svgs/ls.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ls.bfda25f0.svg");

/***/ }),

/***/ "./src/svgs/lt.svg":
/*!*************************!*\
  !*** ./src/svgs/lt.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/lt.170086e9.svg");

/***/ }),

/***/ "./src/svgs/lu.svg":
/*!*************************!*\
  !*** ./src/svgs/lu.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/lu.2c344846.svg");

/***/ }),

/***/ "./src/svgs/lv.svg":
/*!*************************!*\
  !*** ./src/svgs/lv.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/lv.cfcb2922.svg");

/***/ }),

/***/ "./src/svgs/ly.svg":
/*!*************************!*\
  !*** ./src/svgs/ly.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ly.2dde683b.svg");

/***/ }),

/***/ "./src/svgs/ma.svg":
/*!*************************!*\
  !*** ./src/svgs/ma.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ma.4c691df4.svg");

/***/ }),

/***/ "./src/svgs/mc.svg":
/*!*************************!*\
  !*** ./src/svgs/mc.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/mc.18b2c7d8.svg");

/***/ }),

/***/ "./src/svgs/md.svg":
/*!*************************!*\
  !*** ./src/svgs/md.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/md.c243e069.svg");

/***/ }),

/***/ "./src/svgs/me.svg":
/*!*************************!*\
  !*** ./src/svgs/me.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/me.4ac0f765.svg");

/***/ }),

/***/ "./src/svgs/mf.svg":
/*!*************************!*\
  !*** ./src/svgs/mf.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/mf.2b73cc5a.svg");

/***/ }),

/***/ "./src/svgs/mg.svg":
/*!*************************!*\
  !*** ./src/svgs/mg.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/mg.246199b7.svg");

/***/ }),

/***/ "./src/svgs/mh.svg":
/*!*************************!*\
  !*** ./src/svgs/mh.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/mh.dd7c5e18.svg");

/***/ }),

/***/ "./src/svgs/mk.svg":
/*!*************************!*\
  !*** ./src/svgs/mk.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/mk.fb85539b.svg");

/***/ }),

/***/ "./src/svgs/ml.svg":
/*!*************************!*\
  !*** ./src/svgs/ml.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ml.766ed557.svg");

/***/ }),

/***/ "./src/svgs/mm.svg":
/*!*************************!*\
  !*** ./src/svgs/mm.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/mm.059173df.svg");

/***/ }),

/***/ "./src/svgs/mn.svg":
/*!*************************!*\
  !*** ./src/svgs/mn.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/mn.6f7b178c.svg");

/***/ }),

/***/ "./src/svgs/mo.svg":
/*!*************************!*\
  !*** ./src/svgs/mo.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/mo.906af564.svg");

/***/ }),

/***/ "./src/svgs/mp.svg":
/*!*************************!*\
  !*** ./src/svgs/mp.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/mp.fc6a2893.svg");

/***/ }),

/***/ "./src/svgs/mq.svg":
/*!*************************!*\
  !*** ./src/svgs/mq.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/mq.007386bd.svg");

/***/ }),

/***/ "./src/svgs/mr.svg":
/*!*************************!*\
  !*** ./src/svgs/mr.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/mr.080aa60e.svg");

/***/ }),

/***/ "./src/svgs/ms.svg":
/*!*************************!*\
  !*** ./src/svgs/ms.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ms.2418cb74.svg");

/***/ }),

/***/ "./src/svgs/mt.svg":
/*!*************************!*\
  !*** ./src/svgs/mt.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/mt.22c4d64f.svg");

/***/ }),

/***/ "./src/svgs/mu.svg":
/*!*************************!*\
  !*** ./src/svgs/mu.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/mu.e3207be0.svg");

/***/ }),

/***/ "./src/svgs/mv.svg":
/*!*************************!*\
  !*** ./src/svgs/mv.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/mv.ca073416.svg");

/***/ }),

/***/ "./src/svgs/mw.svg":
/*!*************************!*\
  !*** ./src/svgs/mw.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/mw.cec19039.svg");

/***/ }),

/***/ "./src/svgs/mx.svg":
/*!*************************!*\
  !*** ./src/svgs/mx.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/mx.ceb499c1.svg");

/***/ }),

/***/ "./src/svgs/my.svg":
/*!*************************!*\
  !*** ./src/svgs/my.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/my.21310d2e.svg");

/***/ }),

/***/ "./src/svgs/mz.svg":
/*!*************************!*\
  !*** ./src/svgs/mz.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/mz.5851c957.svg");

/***/ }),

/***/ "./src/svgs/na.svg":
/*!*************************!*\
  !*** ./src/svgs/na.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/na.61a06038.svg");

/***/ }),

/***/ "./src/svgs/nc.svg":
/*!*************************!*\
  !*** ./src/svgs/nc.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/nc.597a3b4b.svg");

/***/ }),

/***/ "./src/svgs/ne.svg":
/*!*************************!*\
  !*** ./src/svgs/ne.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ne.7f89cafb.svg");

/***/ }),

/***/ "./src/svgs/nf.svg":
/*!*************************!*\
  !*** ./src/svgs/nf.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/nf.f115f4ab.svg");

/***/ }),

/***/ "./src/svgs/ng.svg":
/*!*************************!*\
  !*** ./src/svgs/ng.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ng.0d0edb99.svg");

/***/ }),

/***/ "./src/svgs/ni.svg":
/*!*************************!*\
  !*** ./src/svgs/ni.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ni.03e91143.svg");

/***/ }),

/***/ "./src/svgs/nl.svg":
/*!*************************!*\
  !*** ./src/svgs/nl.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/nl.1ea06a36.svg");

/***/ }),

/***/ "./src/svgs/no.svg":
/*!*************************!*\
  !*** ./src/svgs/no.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/no.af9b74eb.svg");

/***/ }),

/***/ "./src/svgs/np.svg":
/*!*************************!*\
  !*** ./src/svgs/np.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/np.0f535d07.svg");

/***/ }),

/***/ "./src/svgs/nr.svg":
/*!*************************!*\
  !*** ./src/svgs/nr.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/nr.d2dfb949.svg");

/***/ }),

/***/ "./src/svgs/nu.svg":
/*!*************************!*\
  !*** ./src/svgs/nu.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/nu.7a54f93b.svg");

/***/ }),

/***/ "./src/svgs/nz.svg":
/*!*************************!*\
  !*** ./src/svgs/nz.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/nz.7d3b165d.svg");

/***/ }),

/***/ "./src/svgs/om.svg":
/*!*************************!*\
  !*** ./src/svgs/om.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/om.b9790bab.svg");

/***/ }),

/***/ "./src/svgs/pa.svg":
/*!*************************!*\
  !*** ./src/svgs/pa.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/pa.8667769d.svg");

/***/ }),

/***/ "./src/svgs/pe.svg":
/*!*************************!*\
  !*** ./src/svgs/pe.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/pe.433e0c9c.svg");

/***/ }),

/***/ "./src/svgs/pf.svg":
/*!*************************!*\
  !*** ./src/svgs/pf.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/pf.c6c003e2.svg");

/***/ }),

/***/ "./src/svgs/pg.svg":
/*!*************************!*\
  !*** ./src/svgs/pg.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/pg.257eb7ff.svg");

/***/ }),

/***/ "./src/svgs/ph.svg":
/*!*************************!*\
  !*** ./src/svgs/ph.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ph.d87b41fe.svg");

/***/ }),

/***/ "./src/svgs/pk.svg":
/*!*************************!*\
  !*** ./src/svgs/pk.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/pk.8a1682f7.svg");

/***/ }),

/***/ "./src/svgs/pl.svg":
/*!*************************!*\
  !*** ./src/svgs/pl.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/pl.7bb91391.svg");

/***/ }),

/***/ "./src/svgs/pm.svg":
/*!*************************!*\
  !*** ./src/svgs/pm.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/pm.74aa8119.svg");

/***/ }),

/***/ "./src/svgs/pn.svg":
/*!*************************!*\
  !*** ./src/svgs/pn.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/pn.9496dff5.svg");

/***/ }),

/***/ "./src/svgs/pr.svg":
/*!*************************!*\
  !*** ./src/svgs/pr.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/pr.a70db419.svg");

/***/ }),

/***/ "./src/svgs/ps.svg":
/*!*************************!*\
  !*** ./src/svgs/ps.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ps.3009e0c8.svg");

/***/ }),

/***/ "./src/svgs/pt.svg":
/*!*************************!*\
  !*** ./src/svgs/pt.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/pt.ba9c7874.svg");

/***/ }),

/***/ "./src/svgs/pw.svg":
/*!*************************!*\
  !*** ./src/svgs/pw.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/pw.5fa73249.svg");

/***/ }),

/***/ "./src/svgs/py.svg":
/*!*************************!*\
  !*** ./src/svgs/py.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/py.e403ac55.svg");

/***/ }),

/***/ "./src/svgs/qa.svg":
/*!*************************!*\
  !*** ./src/svgs/qa.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/qa.9e01d2b5.svg");

/***/ }),

/***/ "./src/svgs/re.svg":
/*!*************************!*\
  !*** ./src/svgs/re.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/re.bd321c3d.svg");

/***/ }),

/***/ "./src/svgs/ro.svg":
/*!*************************!*\
  !*** ./src/svgs/ro.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ro.346f1bc1.svg");

/***/ }),

/***/ "./src/svgs/rs.svg":
/*!*************************!*\
  !*** ./src/svgs/rs.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/rs.06b5537e.svg");

/***/ }),

/***/ "./src/svgs/ru.svg":
/*!*************************!*\
  !*** ./src/svgs/ru.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ru.4d7206c7.svg");

/***/ }),

/***/ "./src/svgs/rw.svg":
/*!*************************!*\
  !*** ./src/svgs/rw.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/rw.9b86cdb0.svg");

/***/ }),

/***/ "./src/svgs/sa.svg":
/*!*************************!*\
  !*** ./src/svgs/sa.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/sa.2ef0a2f1.svg");

/***/ }),

/***/ "./src/svgs/sb.svg":
/*!*************************!*\
  !*** ./src/svgs/sb.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/sb.076350fb.svg");

/***/ }),

/***/ "./src/svgs/sc.svg":
/*!*************************!*\
  !*** ./src/svgs/sc.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/sc.da4ec92c.svg");

/***/ }),

/***/ "./src/svgs/sd.svg":
/*!*************************!*\
  !*** ./src/svgs/sd.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/sd.d94252fd.svg");

/***/ }),

/***/ "./src/svgs/se.svg":
/*!*************************!*\
  !*** ./src/svgs/se.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/se.56b78fc6.svg");

/***/ }),

/***/ "./src/svgs/sg.svg":
/*!*************************!*\
  !*** ./src/svgs/sg.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/sg.e4b110e4.svg");

/***/ }),

/***/ "./src/svgs/sh.svg":
/*!*************************!*\
  !*** ./src/svgs/sh.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/sh.8ac44af5.svg");

/***/ }),

/***/ "./src/svgs/si.svg":
/*!*************************!*\
  !*** ./src/svgs/si.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/si.4e3a1132.svg");

/***/ }),

/***/ "./src/svgs/sj.svg":
/*!*************************!*\
  !*** ./src/svgs/sj.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/sj.af9b74eb.svg");

/***/ }),

/***/ "./src/svgs/sk.svg":
/*!*************************!*\
  !*** ./src/svgs/sk.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/sk.7cfdb214.svg");

/***/ }),

/***/ "./src/svgs/sl.svg":
/*!*************************!*\
  !*** ./src/svgs/sl.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/sl.da5e6211.svg");

/***/ }),

/***/ "./src/svgs/sm.svg":
/*!*************************!*\
  !*** ./src/svgs/sm.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/sm.20dd53e1.svg");

/***/ }),

/***/ "./src/svgs/sn.svg":
/*!*************************!*\
  !*** ./src/svgs/sn.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/sn.db3a85d1.svg");

/***/ }),

/***/ "./src/svgs/so.svg":
/*!*************************!*\
  !*** ./src/svgs/so.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/so.7ae700cd.svg");

/***/ }),

/***/ "./src/svgs/sr.svg":
/*!*************************!*\
  !*** ./src/svgs/sr.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/sr.9a7e8bfd.svg");

/***/ }),

/***/ "./src/svgs/ss.svg":
/*!*************************!*\
  !*** ./src/svgs/ss.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ss.9731b1dd.svg");

/***/ }),

/***/ "./src/svgs/st.svg":
/*!*************************!*\
  !*** ./src/svgs/st.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/st.6fc432ad.svg");

/***/ }),

/***/ "./src/svgs/sv.svg":
/*!*************************!*\
  !*** ./src/svgs/sv.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/sv.45dcf514.svg");

/***/ }),

/***/ "./src/svgs/sx.svg":
/*!*************************!*\
  !*** ./src/svgs/sx.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/sx.b6d0db02.svg");

/***/ }),

/***/ "./src/svgs/sy.svg":
/*!*************************!*\
  !*** ./src/svgs/sy.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/sy.38189413.svg");

/***/ }),

/***/ "./src/svgs/sz.svg":
/*!*************************!*\
  !*** ./src/svgs/sz.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/sz.7b1de13a.svg");

/***/ }),

/***/ "./src/svgs/tc.svg":
/*!*************************!*\
  !*** ./src/svgs/tc.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/tc.72d02197.svg");

/***/ }),

/***/ "./src/svgs/td.svg":
/*!*************************!*\
  !*** ./src/svgs/td.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/td.7613bd02.svg");

/***/ }),

/***/ "./src/svgs/tf.svg":
/*!*************************!*\
  !*** ./src/svgs/tf.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/tf.c200af78.svg");

/***/ }),

/***/ "./src/svgs/tg.svg":
/*!*************************!*\
  !*** ./src/svgs/tg.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/tg.fbafee72.svg");

/***/ }),

/***/ "./src/svgs/th.svg":
/*!*************************!*\
  !*** ./src/svgs/th.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/th.fad1a8c3.svg");

/***/ }),

/***/ "./src/svgs/tj.svg":
/*!*************************!*\
  !*** ./src/svgs/tj.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/tj.58a209ea.svg");

/***/ }),

/***/ "./src/svgs/tk.svg":
/*!*************************!*\
  !*** ./src/svgs/tk.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/tk.2752f426.svg");

/***/ }),

/***/ "./src/svgs/tl.svg":
/*!*************************!*\
  !*** ./src/svgs/tl.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/tl.0d454090.svg");

/***/ }),

/***/ "./src/svgs/tm.svg":
/*!*************************!*\
  !*** ./src/svgs/tm.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/tm.acee921d.svg");

/***/ }),

/***/ "./src/svgs/tn.svg":
/*!*************************!*\
  !*** ./src/svgs/tn.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/tn.9e6d7086.svg");

/***/ }),

/***/ "./src/svgs/to.svg":
/*!*************************!*\
  !*** ./src/svgs/to.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/to.4173b316.svg");

/***/ }),

/***/ "./src/svgs/tr.svg":
/*!*************************!*\
  !*** ./src/svgs/tr.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/tr.0eb94b06.svg");

/***/ }),

/***/ "./src/svgs/tt.svg":
/*!*************************!*\
  !*** ./src/svgs/tt.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/tt.e2c9d857.svg");

/***/ }),

/***/ "./src/svgs/tv.svg":
/*!*************************!*\
  !*** ./src/svgs/tv.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/tv.697370be.svg");

/***/ }),

/***/ "./src/svgs/tw.svg":
/*!*************************!*\
  !*** ./src/svgs/tw.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/tw.a72a99cb.svg");

/***/ }),

/***/ "./src/svgs/tz.svg":
/*!*************************!*\
  !*** ./src/svgs/tz.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/tz.bcd8f739.svg");

/***/ }),

/***/ "./src/svgs/ua.svg":
/*!*************************!*\
  !*** ./src/svgs/ua.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ua.8a140163.svg");

/***/ }),

/***/ "./src/svgs/ug.svg":
/*!*************************!*\
  !*** ./src/svgs/ug.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ug.a7d6ec6b.svg");

/***/ }),

/***/ "./src/svgs/um.svg":
/*!*************************!*\
  !*** ./src/svgs/um.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/um.14abad61.svg");

/***/ }),

/***/ "./src/svgs/us.svg":
/*!*************************!*\
  !*** ./src/svgs/us.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/us.14abad61.svg");

/***/ }),

/***/ "./src/svgs/uy.svg":
/*!*************************!*\
  !*** ./src/svgs/uy.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/uy.6f3ab525.svg");

/***/ }),

/***/ "./src/svgs/uz.svg":
/*!*************************!*\
  !*** ./src/svgs/uz.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/uz.e22893e4.svg");

/***/ }),

/***/ "./src/svgs/va.svg":
/*!*************************!*\
  !*** ./src/svgs/va.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/va.0d419ae5.svg");

/***/ }),

/***/ "./src/svgs/vc.svg":
/*!*************************!*\
  !*** ./src/svgs/vc.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/vc.869540ca.svg");

/***/ }),

/***/ "./src/svgs/ve.svg":
/*!*************************!*\
  !*** ./src/svgs/ve.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ve.143e6456.svg");

/***/ }),

/***/ "./src/svgs/vg.svg":
/*!*************************!*\
  !*** ./src/svgs/vg.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/vg.c671fee4.svg");

/***/ }),

/***/ "./src/svgs/vi.svg":
/*!*************************!*\
  !*** ./src/svgs/vi.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/vi.9d718266.svg");

/***/ }),

/***/ "./src/svgs/vn.svg":
/*!*************************!*\
  !*** ./src/svgs/vn.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/vn.5d0e6fe0.svg");

/***/ }),

/***/ "./src/svgs/vu.svg":
/*!*************************!*\
  !*** ./src/svgs/vu.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/vu.3ff7db7d.svg");

/***/ }),

/***/ "./src/svgs/wf.svg":
/*!*************************!*\
  !*** ./src/svgs/wf.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/wf.947f086e.svg");

/***/ }),

/***/ "./src/svgs/ws.svg":
/*!*************************!*\
  !*** ./src/svgs/ws.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ws.63653e93.svg");

/***/ }),

/***/ "./src/svgs/xk.svg":
/*!*************************!*\
  !*** ./src/svgs/xk.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/xk.0d8bf5b9.svg");

/***/ }),

/***/ "./src/svgs/ye.svg":
/*!*************************!*\
  !*** ./src/svgs/ye.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ye.4b3ca24e.svg");

/***/ }),

/***/ "./src/svgs/yt.svg":
/*!*************************!*\
  !*** ./src/svgs/yt.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/yt.66764b4a.svg");

/***/ }),

/***/ "./src/svgs/za.svg":
/*!*************************!*\
  !*** ./src/svgs/za.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/za.140aa05d.svg");

/***/ }),

/***/ "./src/svgs/zm.svg":
/*!*************************!*\
  !*** ./src/svgs/zm.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/zm.76c93fc6.svg");

/***/ }),

/***/ "./src/svgs/zw.svg":
/*!*************************!*\
  !*** ./src/svgs/zw.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/zw.0f24efd0.svg");

/***/ }),

/***/ "./src/van_icon_125866.png":
/*!*********************************!*\
  !*** ./src/van_icon_125866.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ 1:
/*!***********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.tsx ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/jeanflower/outsideICloud/git/FlagClient/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/jeanflower/outsideICloud/git/FlagClient/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/jeanflower/outsideICloud/git/FlagClient/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/jeanflower/outsideICloud/git/FlagClient/src/index.tsx */"./src/index.tsx");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map