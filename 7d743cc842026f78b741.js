/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.keyboard {\\r\\n  padding-top: 10px;\\r\\n  background:  #2c3e50;\\r\\n  width: 840px;\\r\\n  height: 100%;\\r\\n  margin: 0 auto;\\r\\n  margin-top: 20px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  border-radius: 20px;\\r\\n}\\r\\n\\r\\n.textarea {\\r\\n  width: 800px;\\r\\n  height: 100px;\\r\\n  border-radius: 10px;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.buttons {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  margin-top: 10px;\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.row {\\r\\n  width: 800px;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n  .key {\\r\\n  border: 2px solid black;\\r\\n  border-radius: 10px;\\r\\n  width: 43px;\\r\\n  height: 35px;\\r\\n  text-align: center;\\r\\n  vertical-align: middle;\\r\\n  border-color: #3498db;\\r\\n  color: #fff;\\r\\n  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;\\r\\n  -webkit-transition: all 150ms ease-in-out;\\r\\n  transition: all 150ms ease-in-out;\\r\\n}\\r\\n.key:hover {\\r\\n  box-shadow: 0 0 5px 0 #3498db inset, 0 0 5px 4px #3498db;\\r\\n}\\r\\n.key:active {\\r\\n  box-shadow: 0 0 5px 0 #3498db inset, 0 0 5px 4px #3498db;\\r\\n}\\r\\n.key.active {\\r\\n  box-shadow: 0 0 5px 0 #3498db inset, 0 0 5px 4px #3498db;\\r\\n}\\r\\n.caps{\\r\\nwidth: 80px;\\r\\n}\\r\\n.enter{\\r\\nwidth: 80px;\\r\\n}\\r\\n.space{\\r\\nwidth: 240px;\\r\\n}\\r\\n.ctrls{\\r\\nwidth: 80px;\\r\\n}\\r\\n.shift{\\r\\nwidth: 100px;\\r\\n}\\r\\n.alts{\\r\\nwidth: 55px;\\r\\n}\\r\\n\\r\\n.upperCase{\\r\\ntext-transform: uppercase;\\r\\n}\\r\\n\\r\\n.text{\\r\\n  margin: 45px auto;\\r\\n  width: 476px;\\r\\n  font-size: 30px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://virtual_keyboard/./src/assets/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://virtual_keyboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://virtual_keyboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://virtual_keyboard/./src/assets/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://virtual_keyboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://virtual_keyboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://virtual_keyboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://virtual_keyboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://virtual_keyboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://virtual_keyboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttonActions\": () => (/* binding */ buttonActions),\n/* harmony export */   \"buttonActionsRus\": () => (/* binding */ buttonActionsRus),\n/* harmony export */   \"buttonFuncData\": () => (/* binding */ buttonFuncData),\n/* harmony export */   \"buttonShiftEng\": () => (/* binding */ buttonShiftEng),\n/* harmony export */   \"buttonShiftRus\": () => (/* binding */ buttonShiftRus),\n/* harmony export */   \"functionalButtons\": () => (/* binding */ functionalButtons)\n/* harmony export */ });\nconst functionalButtons = ['Back ⮨', 'Tab', 'DEL', 'Caps Lock', 'Enter', 'Shift', 'Ctrl', 'Win', 'Alt'];\n\nconst buttonFuncData = [\n  ['', '', '', '', '', '', '', '', '', '', '', '', '', 'Backspace'],\n  ['Tab', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Delete'],\n  ['CapsLock', '', '', '', '', '', '', '', '', '', '', '', 'Enter'],\n  ['ShiftLeft', '', '', '', '', '', '', '', '', '', '', 'ArrowUp', 'ShiftRight'],\n  ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],\n];\n\nconst buttonActions = [\n  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Back ⮨'],\n  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\\\', 'DEL'],\n  ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\\'', 'Enter'],\n  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '/', '▲', 'Shift'],\n  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◄', '▼', '►'],\n];\n\nconst buttonShiftEng = [\n  ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Back ⮨'],\n  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'DEL'],\n  ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '\"', '|', 'Enter'],\n  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift'],\n  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◄', '▼', '►'],\n];\n\nconst buttonActionsRus = [\n  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Back ⮨'],\n  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'DEL'],\n  ['Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\\\\', 'Enter'],\n  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift'],\n  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◄', '▼', '►'],\n];\n\nconst buttonShiftRus = [\n  ['Ё', '!', '\"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Back ⮨'],\n  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'DEL'],\n  ['Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '/', 'Enter'],\n  ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Shift'],\n  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◄', '▼', '►'],\n];\n\n\n\n\n//# sourceURL=webpack://virtual_keyboard/./src/constants/constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style.css */ \"./src/assets/style.css\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/constants */ \"./src/constants/constants.js\");\n/* harmony import */ var _services_keyboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/keyboard-service */ \"./src/services/keyboard-service.js\");\n\n\n\n\nconst BODY = document.querySelector('body');\nconst DIV = document.createElement('div');\nDIV.className = 'keyboard';\nBODY.append(DIV);\n\nconst TEXT = document.createElement('p');\nTEXT.className = 'text';\nBODY.append(TEXT);\nTEXT.innerHTML = 'This keyboard made in Windows \\n Change language left ctrl + left alt';\n\nconst TEXTAREA = document.createElement('textarea');\nTEXTAREA.className = 'textarea';\nDIV.append(TEXTAREA);\nTEXTAREA.setAttribute('autofocus', 'autofocus');\n\nconst BUTTONS = document.createElement('div');\nBUTTONS.className = 'buttons';\nDIV.append(BUTTONS);\n\n(0,_services_keyboard_service__WEBPACK_IMPORTED_MODULE_2__.makeRows)(BUTTONS);\n\nconst buttons = (0,_services_keyboard_service__WEBPACK_IMPORTED_MODULE_2__.getLanguage)() === 'eng' ? _constants_constants__WEBPACK_IMPORTED_MODULE_1__.buttonActions : _constants_constants__WEBPACK_IMPORTED_MODULE_1__.buttonActionsRus;\n\n(0,_services_keyboard_service__WEBPACK_IMPORTED_MODULE_2__.makeButtonValue)(buttons, BUTTONS);\n\nfunction showTextContent() {\n  document.querySelectorAll('.key').forEach((element) => {\n    element.addEventListener('click', () => {\n      for (let i = 0; i < _constants_constants__WEBPACK_IMPORTED_MODULE_1__.functionalButtons.length; i += 1) {\n        if (element.textContent === _constants_constants__WEBPACK_IMPORTED_MODULE_1__.functionalButtons[i]) {\n          return;\n        }\n      }\n      const isUpperCase = BUTTONS.childNodes[2].childNodes[0].classList.contains('upperCase');\n      const char = element.textContent;\n      let displayText = TEXTAREA.textContent;\n      displayText += isUpperCase ? char.toUpperCase() : char;\n      TEXTAREA.textContent = displayText;\n    });\n  });\n}\n\nfunction changeButtonValue() {\n  const languageToChange = (0,_services_keyboard_service__WEBPACK_IMPORTED_MODULE_2__.getLanguage)() === 'eng' ? 'rus' : 'eng';\n  if (languageToChange === 'eng') {\n    (0,_services_keyboard_service__WEBPACK_IMPORTED_MODULE_2__.makeButtonValue)(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.buttonActions, BUTTONS);\n  } else {\n    (0,_services_keyboard_service__WEBPACK_IMPORTED_MODULE_2__.makeButtonValue)(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.buttonActionsRus, BUTTONS);\n  }\n\n  (0,_services_keyboard_service__WEBPACK_IMPORTED_MODULE_2__.updateLanguage)(languageToChange);\n\n  (0,_services_keyboard_service__WEBPACK_IMPORTED_MODULE_2__.addClasses)(BUTTONS);\n  showTextContent();\n  (0,_services_keyboard_service__WEBPACK_IMPORTED_MODULE_2__.upperCase)(BUTTONS);\n}\n\n(0,_services_keyboard_service__WEBPACK_IMPORTED_MODULE_2__.runOnKeys)(\n  () => changeButtonValue(),\n  'ControlLeft',\n  'AltLeft',\n);\n\nshowTextContent();\n(0,_services_keyboard_service__WEBPACK_IMPORTED_MODULE_2__.addClasses)(BUTTONS);\n(0,_services_keyboard_service__WEBPACK_IMPORTED_MODULE_2__.upperCase)(BUTTONS);\n\nfunction changeShiftValue() {\n  if ((0,_services_keyboard_service__WEBPACK_IMPORTED_MODULE_2__.getLanguage)() === 'eng') {\n    (0,_services_keyboard_service__WEBPACK_IMPORTED_MODULE_2__.makeButtonValue)(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.buttonShiftEng, BUTTONS);\n  } else {\n    (0,_services_keyboard_service__WEBPACK_IMPORTED_MODULE_2__.makeButtonValue)(_constants_constants__WEBPACK_IMPORTED_MODULE_1__.buttonShiftRus, BUTTONS);\n  }\n  (0,_services_keyboard_service__WEBPACK_IMPORTED_MODULE_2__.addClasses)(BUTTONS);\n  showTextContent();\n}\n\n(0,_services_keyboard_service__WEBPACK_IMPORTED_MODULE_2__.runOnKeys)(\n  () => changeShiftValue(),\n  'ShiftLeft',\n);\n\nfunction handleKeyboardPress(event) {\n  const btnsElements = [...document.querySelectorAll('.key')];\n  const findBtn = (el) => {\n    let valueToCompare = el.innerText;\n    let btnKey = event.key;\n    if (el.dataset.key !== undefined) {\n      btnKey = event.code;\n      valueToCompare = el.dataset.key;\n    }\n    return valueToCompare === btnKey;\n  };\n  const btn = btnsElements.find(findBtn);\n\n  if (btn && event.type === 'keydown') {\n    btn.click();\n    btn.classList.add('active');\n  }\n  if (btn && event.type === 'keyup') {\n    btn.classList.remove('active');\n  }\n  event.preventDefault();\n}\n\ndocument.addEventListener('keydown', handleKeyboardPress);\ndocument.addEventListener('keyup', handleKeyboardPress);\n\n\n//# sourceURL=webpack://virtual_keyboard/./src/index.js?");

/***/ }),

/***/ "./src/services/keyboard-service.js":
/*!******************************************!*\
  !*** ./src/services/keyboard-service.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addClasses\": () => (/* binding */ addClasses),\n/* harmony export */   \"getLanguage\": () => (/* binding */ getLanguage),\n/* harmony export */   \"makeButtonValue\": () => (/* binding */ makeButtonValue),\n/* harmony export */   \"makeRows\": () => (/* binding */ makeRows),\n/* harmony export */   \"runOnKeys\": () => (/* binding */ runOnKeys),\n/* harmony export */   \"updateLanguage\": () => (/* binding */ updateLanguage),\n/* harmony export */   \"upperCase\": () => (/* binding */ upperCase)\n/* harmony export */ });\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ \"./src/constants/constants.js\");\n\n\nfunction updateLanguage(lang) {\n  localStorage.setItem('language', lang);\n}\n\nfunction getLanguage() {\n  return localStorage.getItem('language') || 'eng';\n}\n\nfunction makeRows(buttons) {\n  for (let i = 0; i < 5; i += 1) {\n    const row = document.createElement('div');\n    row.className = 'row';\n    buttons.append(row);\n  }\n  return buttons;\n}\n\nfunction getBtnContent(array, index) {\n  const fragment = new DocumentFragment();\n\n  for (let i = 0; i < array.length; i += 1) {\n    const key = document.createElement('div');\n    if (_constants_constants__WEBPACK_IMPORTED_MODULE_0__.buttonFuncData[index][i] !== '') {\n      key.setAttribute('data-key', _constants_constants__WEBPACK_IMPORTED_MODULE_0__.buttonFuncData[index][i]);\n    }\n    key.append(array[i]);\n    key.className = 'key';\n    fragment.append(key);\n  }\n  return fragment;\n}\n\nfunction makeButtonValue(array, buttons) {\n  [...buttons.children].forEach((row) => {\n    const r = row;\n    r.innerHTML = '';\n    return r;\n  });\n\n  array.forEach((actionsRow, index) => {\n    buttons.childNodes[index].append(getBtnContent(actionsRow, index));\n  });\n}\n\nfunction runOnKeys(func, ...codes) {\n  const pressed = new Set();\n  document.addEventListener('keydown', (event) => {\n    pressed.add(event.code);\n    for (let i = 0; i < codes.length; i += 1) {\n      if (!pressed.has(codes[i])) {\n        return;\n      }\n    }\n    pressed.clear();\n    func();\n  });\n  document.addEventListener('keyup', (event) => {\n    pressed.delete(event.code);\n  });\n}\n\nfunction addClasses(buttons) {\n  buttons.childNodes[2].childNodes[0].classList.add('caps');\n  buttons.childNodes[2].lastChild.classList.add('enter');\n  buttons.childNodes[4].childNodes[3].classList.add('space');\n  buttons.childNodes[4].childNodes[0].classList.add('ctrls');\n  buttons.childNodes[4].childNodes[5].classList.add('ctrls');\n  buttons.childNodes[3].firstChild.classList.add('shift');\n  buttons.childNodes[4].childNodes[2].classList.add('alts');\n  buttons.childNodes[4].childNodes[4].classList.add('alts');\n}\n\nfunction upperCase(buttons) {\n  const keys = Array.from(document.querySelectorAll('.key'));\n  buttons.childNodes[2].childNodes[0].addEventListener('click', () => {\n    for (let i = 0; i < keys.length; i += 1) {\n      keys[i].classList.toggle('upperCase');\n    }\n  });\n}\n\n\n\n\n//# sourceURL=webpack://virtual_keyboard/./src/services/keyboard-service.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;