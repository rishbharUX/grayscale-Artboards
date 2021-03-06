var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/removeAllGrayscale.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/removeAllGrayscale.js":
/*!***********************************!*\
  !*** ./src/removeAllGrayscale.js ***!
  \***********************************/
/*! exports provided: onRunRemoveAllGaryscale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRunRemoveAllGaryscale", function() { return onRunRemoveAllGaryscale; });
function onRunRemoveAllGaryscale(context) {
  context.document.showMessage("Remove All Running 🙌 wo!");
  var doc = context.document;
  var page = context.document.currentPage();
  var artboards = page.artboards();
  var removedGrayArtboards = 0; //doc.showMessage("before loop");

  for (var i = 0; i < artboards.count(); i++) {
    //doc.showMessage("before layers");
    var layers = artboards[i].layers();

    for (var j = 0; j < layers.count(); j++) {
      if (layers[j].class() == "MSShapeGroup" && layers[j].name() == "*grayscaleOverlay*") {
        //doc.showMessage("delete remove");
        //artboards[i].removeLayers(layers[j]);
        layers[j].removeFromParent();
        removedGrayArtboards += 1;
      }
    }

    doc.showMessage(removedGrayArtboards + " grayscales removed! 😎");
  }
}
;

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRunRemoveAllGaryscale'] = __skpm_run.bind(this, 'onRunRemoveAllGaryscale');
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=removeAllGrayscale.js.map