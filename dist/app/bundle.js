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
/******/ 	__webpack_require__.p = "/app/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar canvas = document.getElementById('canvas');\nvar ctx = canvas.getContext('2d');\nvar inputWidth = document.getElementById('width');\nvar inputColor = document.getElementById('color');\nvar clearBtn = document.getElementById('clear');\nvar saveBtn = document.getElementById('save');\n//let backBtn = document.getElementById('back');\n\nvar width = void 0,\n    height = void 0,\n    posx = void 0,\n    posy = void 0,\n    color = void 0,\n    lineWidth = void 0,\n    dragging = void 0,\n    valueOfId = void 0,\n    ctxArr = void 0;\n\nvalueOfId = 0;\ninputWidth.value = 5;\nwidth = document.documentElement.clientWidth;\nheight = 600;\ncolor = inputColor.value;\nlineWidth = inputWidth.value;\ndragging = false;\ncanvas.width = width;\ncanvas.height = height;\n//ctxArr = [];\n\ncanvas.addEventListener(\"mousedown\", clickOn);\ncanvas.addEventListener(\"mousemove\", detectedMousePosition);\ncanvas.addEventListener(\"mouseup\", clickOff);\n\nclearBtn.addEventListener('click', clearCanvas);\nsaveBtn.addEventListener('click', saveImage);\n\nfunction clickOn() {\n  valueOfId++;\n  dragging = true;\n}\n\nfunction clickOff() {\n  dragging = false;\n  ctx.beginPath();\n  //ctxArr.push(ctx);\n}\n\nfunction toDrow() {\n  if (dragging) {\n    ctx.id = valueOfId;\n    ctx.lineTo(posx, posy);\n    ctx.stroke();\n    ctx.strokeStyle = color;\n    ctx.lineWidth = lineWidth * 2;\n    ctx.beginPath();\n\n    ctx.arc(posx, posy, lineWidth, 0, 2 * Math.PI);\n    ctx.fillStyle = color;\n    ctx.fill();\n    ctx.beginPath();\n\n    ctx.moveTo(posx, posy);\n  }\n}\n\nfunction detectedMousePosition(e) {\n  if (e.pageX || e.pageY) {\n    posx = e.pageX;\n    posy = e.pageY;\n  } else if (e.clientX || e.clientY) {\n    posx = e.clientX;\n    posy = e.clientY;\n  } else if (e.clientX || e.clientY) {\n    posx = e.offsetX;\n    posy = e.offsetY;\n  }\n\n  toDrow();\n}\n\nfunction clearCanvas() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n}\n\nfunction saveImage() {\n  var data = canvas.toDataURL();\n\n  window.open(data, '', 'location=1, menubar=1');\n}\n\ninputWidth.oninput = function () {\n  lineWidth = inputWidth.value;\n};\n\ninputColor.oninput = function () {\n  color = inputColor.value;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvaW5kZXguanM/OTlhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG5sZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbmxldCBpbnB1dFdpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpZHRoJyk7XHJcbmxldCBpbnB1dENvbG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yJyk7XHJcbmxldCBjbGVhckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhcicpO1xyXG5sZXQgc2F2ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlJyk7XHJcbi8vbGV0IGJhY2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjaycpO1xyXG5cclxubGV0IHdpZHRoLCBoZWlnaHQsIHBvc3gsIHBvc3ksIGNvbG9yLCBsaW5lV2lkdGgsIGRyYWdnaW5nLCB2YWx1ZU9mSWQsIGN0eEFycjtcclxuXHJcbnZhbHVlT2ZJZCA9IDA7XHJcbmlucHV0V2lkdGgudmFsdWUgPSA1O1xyXG53aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuaGVpZ2h0ID0gNjAwO1xyXG5jb2xvciA9IGlucHV0Q29sb3IudmFsdWU7XHJcbmxpbmVXaWR0aCA9IGlucHV0V2lkdGgudmFsdWU7XHJcbmRyYWdnaW5nID0gZmFsc2U7XHJcbmNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4vL2N0eEFyciA9IFtdO1xyXG5cclxuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgY2xpY2tPbilcclxuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZGV0ZWN0ZWRNb3VzZVBvc2l0aW9uKVxyXG5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgY2xpY2tPZmYpXHJcblxyXG5jbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyQ2FudmFzKTsgXHJcbnNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzYXZlSW1hZ2UpOyBcclxuXHJcbmZ1bmN0aW9uIGNsaWNrT24oKSB7XHJcbiAgdmFsdWVPZklkICsrO1xyXG4gIGRyYWdnaW5nID0gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xpY2tPZmYoKSB7XHJcbiAgZHJhZ2dpbmcgPSBmYWxzZTtcclxuICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgLy9jdHhBcnIucHVzaChjdHgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b0Ryb3coKSB7XHJcbiAgaWYgKGRyYWdnaW5nKSB7IFxyXG4gICAgY3R4LmlkID0gdmFsdWVPZklkO1xyXG4gICAgY3R4LmxpbmVUbyhwb3N4LCBwb3N5KTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aCoyO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG5cclxuICAgIGN0eC5hcmMocG9zeCwgcG9zeSwgbGluZVdpZHRoLCAwLCAyKk1hdGguUEkpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgY3R4LmZpbGwoKTtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuXHJcbiAgICBjdHgubW92ZVRvKHBvc3gsIHBvc3kpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGV0ZWN0ZWRNb3VzZVBvc2l0aW9uKGUpIHtcclxuICBpZiAoZS5wYWdlWCB8fCBlLnBhZ2VZKSB7XHJcbiAgICBwb3N4ID0gZS5wYWdlWDtcclxuICAgIHBvc3kgPSBlLnBhZ2VZO1xyXG4gIH0gZWxzZSBpZiAoZS5jbGllbnRYIHx8IGUuY2xpZW50WSkge1xyXG4gICAgcG9zeCA9IGUuY2xpZW50WDtcclxuICAgIHBvc3kgPSBlLmNsaWVudFk7XHJcbiAgfSAgZWxzZSBpZiAoZS5jbGllbnRYIHx8IGUuY2xpZW50WSkge1xyXG4gICAgcG9zeCA9IGUub2Zmc2V0WDtcclxuICAgIHBvc3kgPSBlLm9mZnNldFk7XHJcbiAgfVxyXG5cclxuICB0b0Ryb3coKTsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyQ2FudmFzKCkge1xyXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZUltYWdlKCkge1xyXG4gIHZhciBkYXRhID0gY2FudmFzLnRvRGF0YVVSTCgpO1xyXG4gIFxyXG4gIHdpbmRvdy5vcGVuKGRhdGEsICcnLCAnbG9jYXRpb249MSwgbWVudWJhcj0xJyk7XHJcbn1cclxuXHJcbmlucHV0V2lkdGgub25pbnB1dCA9IGZ1bmN0aW9uKCkge1xyXG4gIGxpbmVXaWR0aCA9IGlucHV0V2lkdGgudmFsdWVcclxufVxyXG5cclxuaW5wdXRDb2xvci5vbmlucHV0ID0gZnVuY3Rpb24oKSB7XHJcbiAgY29sb3IgPSBpbnB1dENvbG9yLnZhbHVlXHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);