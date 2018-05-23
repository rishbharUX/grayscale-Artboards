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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/grayscaleAll.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/grayscaleAll.js":
/*!*****************************!*\
  !*** ./src/grayscaleAll.js ***!
  \*****************************/
/*! exports provided: onRunAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onRunAll", function() { return onRunAll; });
function onRunAll(context) {
  context.document.showMessage("All Running 🙌 wo!");
  var doc = context.document;
  var page = context.document.currentPage();
  var artboards = page.artboards();
  var grayedArtboards = 0;
  var alreadyGrayed = 0;
  doc.showMessage("after page artboards lalal");

  for (var i = 0; i < artboards.count(); i++) {
    var layerType = artboards[i].class();

    if (artboards[i].class() == "MSArtboardGroup") {
      var addGrayFlag = 1;
      var layers = artboards[i].layers();

      for (var j = 0; j < layers.count(); j++) {
        if (layers[j].class() == "MSShapeGroup" && layers[j].name() == "*grayscaleOverlay*") {
          if (layers[j].isVisible()) {
            addGrayFlag = 0;
            alreadyGrayed = 1;
          } else if (!layers[j].isVisible()) {
            layers[j].removeFromParent();
          }
        }
      }

      if (addGrayFlag == 1) {
        var artboard = artboards.objectAtIndex(i);
        var artboardFrame = artboard.frame();
        var artboardWidth = artboardFrame.width();
        var artboardHeight = artboardFrame.height();
        var rect = MSRectangleShape.alloc().init();
        rect.setName("*grayscaleOverlay*");
        rect.frame = MSRect.rectWithRect(NSMakeRect(0, 0, artboardWidth, artboardHeight));
        var shapeGroup = MSShapeGroup.shapeWithPath(rect);
        var fill = shapeGroup.style().addStylePartOfType(0);
        fill.color = MSColor.colorWithRGBADictionary({
          r: 1,
          g: 1,
          b: 1,
          a: 1
        });
        shapeGroup.style().contextSettings().setBlendMode(14);
        artboard.addLayers([shapeGroup]);
        grayedArtboards += 1;
      }
    } else {
      //var layerType = selection[i].class();
      doc.showMessage("That's not an Artboard. You selected a " + layerType + ".");
    }

    if (grayedArtboards != 0) doc.showMessage(grayedArtboards + " Artboards grayscaled! 😎");else if (grayedArtboards == 0 && alreadyGrayed > 0) doc.showMessage("Artboards already grayscaled. 😇");
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
that['onRunAll'] = __skpm_run.bind(this, 'onRunAll');
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=grayscaleAll.js.map