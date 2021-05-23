/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main/js/index.js":
/*!******************************!*
  !*** ./src/main/js/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_burger_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger-menu */ "./src/main/js/modules/burger-menu.js");
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modals */ "./src/main/js/modules/modals.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider */ "./src/main/js/slider.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_2__);



document.addEventListener('DOMContentLoaded', function () {
  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_1__.default)('.card_button', '.modal-window', '.modal-window__dialog', '.close-modal');
  (0,_modules_burger_menu__WEBPACK_IMPORTED_MODULE_0__.default)('.menu-icon', '.burger-menu', '.burger-background');
});

/***/ }),

/***/ "./src/main/js/modules/burger-menu.js":
/*!********************************************!*
  !*** ./src/main/js/modules/burger-menu.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var hamburger = function hamburger(trigger, burger, bg) {
  var button = document.querySelector(trigger);
  var menu = document.querySelector(burger);
  var background = document.querySelector(bg);
  button.addEventListener('click', function () {
    button.classList.toggle('menu-icon_open');
    background.classList.toggle('burger-background_closed');
    document.querySelector('.heading').classList.toggle('heading_disabled');

    if (button.classList.contains('menu-icon_open')) {
      menu.style.transform = 'translateX(0px)';
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
      menu.style.transform = 'translateX(320px)';
    }
  });
  background.addEventListener('click', function () {
    return button.click();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hamburger);

/***/ }),

/***/ "./src/main/js/modules/modals.js":
/*!***************************************!*
  !*** ./src/main/js/modules/modals.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcScroll": () => /* binding */ calcScroll,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var calcScroll = function calcScroll() {
  var div = document.createElement('div');
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';
  document.body.append(div);
  var scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
};

var modals = function modals(triggers, modalContainer, modalWindow, closeTrigger) {
  var buttons = document.querySelectorAll(triggers);
  var container = document.querySelector(modalContainer);
  var modal = document.querySelector(modalWindow);
  var closeModalButton = document.querySelector(closeTrigger);
  var scrollWidth = calcScroll();
  var pets;
  fetch('./assets/json/pets.json').then(function (result) {
    return result.json();
  }).then(function (result) {
    pets = result;
  });

  var renderModalWindow = function renderModalWindow(name) {
    while (modal.firstChild) {
      modal.removeChild(modal.firstChild);
    }

    var pet;
    pets.forEach(function (item) {
      if (item.name === name) {
        pet = item;
      }
    });
    modal.innerHTML = "\n    <div class=\"modal-window__image\">\n      <img src=\"".concat(pet.img, "\" alt=\"Pets\">\n    </div>\n    <div class=\"information\">\n      <div class=\"information__name\">").concat(pet.name, "</div>\n      <div class=\"information__type-pets\">").concat(pet.type, " - ").concat(pet.breed, "</div>\n      <div class=\"information__description\">").concat(pet.description, "</div>\n      <ul class=\"information__extra\">\n        <li class=\"information__extra-item\"><b>Age:</b> <span>").concat(pet.age, "</span></li>\n        <li class=\"information__extra-item\"><b>Inoculations:</b> <span>").concat(pet.inoculations, "</span></li>\n        <li class=\"information__extra-item\"><b>Diseases:</b> <span>").concat(pet.diseases, "</span></li>\n        <li class=\"information__extra-item\"><b>Parasites:</b> <span>").concat(pet.parasites, "</span></li>\n      </ul>\n    </div>");
    container.classList.remove('modal-window_closed');
    document.body.style.overflowY = 'hidden';
    document.body.style.marginRight = "".concat(scrollWidth, "px");
  };

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      renderModalWindow(button.getAttribute('data-name'));
    });
  });

  var hideModalWindow = function hideModalWindow() {
    container.classList.add('modal-window_closed');
    document.body.style.overflowY = '';
    document.body.style.marginRight = '0px';
  };

  container.addEventListener('click', function (event) {
    if (event.target === container) {
      hideModalWindow();
    }
  });
  closeModalButton.addEventListener('click', hideModalWindow);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);

/***/ }),

/***/ "./src/main/js/slider.js":
/*!*******************************!*
  !*** ./src/main/js/slider.js ***!
  \*******************************/
/***/ (() => {

function slide() {
  var items = document.querySelector('.slider__visible-area');
  var prev = document.querySelector('.slide-left');
  var next = document.querySelector('.slide-right');
  var posInitial;
  var slides = items.getElementsByClassName('cards');
  var slidesLength = slides.length;
  var slideSize = items.getElementsByClassName('cards')[0].offsetWidth;
  var firstSlide = slides[0];
  var lastSlide = slides[slidesLength - 1];
  var cloneFirst = firstSlide.cloneNode(true);
  var cloneLast = lastSlide.cloneNode(true);
  var index = 0;
  var allowShift = true;
  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);

  function shiftSlide(dir, action) {
    items.classList.add('shifting');

    if (allowShift) {
      if (!action) {
        posInitial = items.offsetLeft;
      }

      if (dir === 1) {
        items.style.left = "".concat(posInitial - slideSize, "px");
        index += 1;
      } else if (dir === -1) {
        items.style.left = "".concat(posInitial + slideSize, "px");
        index -= 1;
      }
    }

    allowShift = false;
  }

  function checkIndex() {
    items.classList.remove('shifting');

    if (index === -1) {
      items.style.left = "".concat(-(slidesLength * slideSize), "px");
      index = slidesLength - 1;
    }

    if (index === slidesLength) {
      items.style.left = "".concat(-(1 * slideSize), "px");
      index = 0;
    }

    allowShift = true;
  }

  prev.addEventListener('click', function () {
    return shiftSlide(-1);
  });
  next.addEventListener('click', function () {
    return shiftSlide(1);
  });
  items.addEventListener('transitionend', checkIndex);
}

slide();

/***/ }),

/***/ "./src/main/sass/styles.scss":
/*!***********************************!*
  !*** ./src/main/sass/styles.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ 	__webpack_require__("./src/main/sass/styles.scss");
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGVsdGVyLy4vc3JjL21haW4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9tYWluL2pzL21vZHVsZXMvYnVyZ2VyLW1lbnUuanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9tYWluL2pzL21vZHVsZXMvbW9kYWxzLmpzIiwid2VicGFjazovL3NoZWx0ZXIvLi9zcmMvbWFpbi9qcy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9tYWluL3Nhc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vc2hlbHRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaGVsdGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NoZWx0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NoZWx0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zaGVsdGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2hlbHRlci93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibW9kYWxzIiwiaGFtYnVyZ2VyIiwidHJpZ2dlciIsImJ1cmdlciIsImJnIiwiYnV0dG9uIiwicXVlcnlTZWxlY3RvciIsIm1lbnUiLCJiYWNrZ3JvdW5kIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY29udGFpbnMiLCJzdHlsZSIsInRyYW5zZm9ybSIsImJvZHkiLCJvdmVyZmxvd1kiLCJjbGljayIsImNhbGNTY3JvbGwiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwidmlzaWJpbGl0eSIsImFwcGVuZCIsInNjcm9sbFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsInJlbW92ZSIsInRyaWdnZXJzIiwibW9kYWxDb250YWluZXIiLCJtb2RhbFdpbmRvdyIsImNsb3NlVHJpZ2dlciIsImJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29udGFpbmVyIiwibW9kYWwiLCJjbG9zZU1vZGFsQnV0dG9uIiwicGV0cyIsImZldGNoIiwidGhlbiIsInJlc3VsdCIsImpzb24iLCJyZW5kZXJNb2RhbFdpbmRvdyIsIm5hbWUiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJwZXQiLCJmb3JFYWNoIiwiaXRlbSIsImlubmVySFRNTCIsImltZyIsInR5cGUiLCJicmVlZCIsImRlc2NyaXB0aW9uIiwiYWdlIiwiaW5vY3VsYXRpb25zIiwiZGlzZWFzZXMiLCJwYXJhc2l0ZXMiLCJtYXJnaW5SaWdodCIsImdldEF0dHJpYnV0ZSIsImhpZGVNb2RhbFdpbmRvdyIsImFkZCIsImV2ZW50IiwidGFyZ2V0Iiwic2xpZGUiLCJpdGVtcyIsInByZXYiLCJuZXh0IiwicG9zSW5pdGlhbCIsInNsaWRlcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzbGlkZXNMZW5ndGgiLCJsZW5ndGgiLCJzbGlkZVNpemUiLCJmaXJzdFNsaWRlIiwibGFzdFNsaWRlIiwiY2xvbmVGaXJzdCIsImNsb25lTm9kZSIsImNsb25lTGFzdCIsImluZGV4IiwiYWxsb3dTaGlmdCIsImFwcGVuZENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwic2hpZnRTbGlkZSIsImRpciIsImFjdGlvbiIsIm9mZnNldExlZnQiLCJsZWZ0IiwiY2hlY2tJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDbERDLDBEQUFNLENBQUMsY0FBRCxFQUFpQixlQUFqQixFQUFrQyx1QkFBbEMsRUFBMkQsY0FBM0QsQ0FBTjtBQUNBQywrREFBUyxDQUFDLFlBQUQsRUFBZSxjQUFmLEVBQStCLG9CQUEvQixDQUFUO0FBQ0QsQ0FI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LElBQVosYUFBc0IsRUFBRWhCLFlBQVksR0FBR0UsU0FBakIsQ0FBdEI7QUFDQU0sV0FBSyxHQUFHUixZQUFZLEdBQUcsQ0FBdkI7QUFDRDs7QUFFRCxRQUFJUSxLQUFLLEtBQUtSLFlBQWQsRUFBNEI7QUFDMUJOLFdBQUssQ0FBQ25ELEtBQU4sQ0FBWXlFLElBQVosYUFBc0IsRUFBRSxJQUFJZCxTQUFOLENBQXRCO0FBQ0FNLFdBQUssR0FBRyxDQUFSO0FBQ0Q7O0FBRURDLGNBQVUsR0FBRyxJQUFiO0FBQ0Q7O0FBRURkLE1BQUksQ0FBQ2pFLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCO0FBQUEsV0FBTWtGLFVBQVUsQ0FBQyxDQUFDLENBQUYsQ0FBaEI7QUFBQSxHQUEvQjtBQUNBaEIsTUFBSSxDQUFDbEUsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0I7QUFBQSxXQUFNa0YsVUFBVSxDQUFDLENBQUQsQ0FBaEI7QUFBQSxHQUEvQjtBQUNBbEIsT0FBSyxDQUFDaEUsZ0JBQU4sQ0FBdUIsZUFBdkIsRUFBd0N1RixVQUF4QztBQUNEOztBQUVEeEIsS0FBSyxHOzs7Ozs7Ozs7Ozs7QUN2REw7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4vbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoYW1idXJnZXIgZnJvbSAnLi9tb2R1bGVzL2J1cmdlci1tZW51JztcbmltcG9ydCBtb2RhbHMgZnJvbSAnLi9tb2R1bGVzL21vZGFscyc7XG5pbXBvcnQgc2xpZGVyIGZyb20gJy4vc2xpZGVyJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgbW9kYWxzKCcuY2FyZF9idXR0b24nLCAnLm1vZGFsLXdpbmRvdycsICcubW9kYWwtd2luZG93X19kaWFsb2cnLCAnLmNsb3NlLW1vZGFsJyk7XG4gIGhhbWJ1cmdlcignLm1lbnUtaWNvbicsICcuYnVyZ2VyLW1lbnUnLCAnLmJ1cmdlci1iYWNrZ3JvdW5kJyk7XG59KTtcbiIsImNvbnN0IGhhbWJ1cmdlciA9ICh0cmlnZ2VyLCBidXJnZXIsIGJnKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodHJpZ2dlcik7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1cmdlcik7XG4gIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJnKTtcblxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtaWNvbl9vcGVuJyk7XG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QudG9nZ2xlKCdidXJnZXItYmFja2dyb3VuZF9jbG9zZWQnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGluZycpLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRpbmdfZGlzYWJsZWQnKTtcblxuICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LWljb25fb3BlbicpKSB7XG4gICAgICBtZW51LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDBweCknO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnJztcbiAgICAgIG1lbnUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMzIwcHgpJztcbiAgICB9XG4gIH0pO1xuXG4gIGJhY2tncm91bmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBidXR0b24uY2xpY2soKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW1idXJnZXI7XG4iLCJleHBvcnQgY29uc3QgY2FsY1Njcm9sbCA9ICgpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5zdHlsZS5vdmVyZmxvd1kgPSAnc2Nyb2xsJztcbiAgZGl2LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZGl2KTtcblxuICBjb25zdCBzY3JvbGxXaWR0aCA9IGRpdi5vZmZzZXRXaWR0aCAtIGRpdi5jbGllbnRXaWR0aDtcbiAgZGl2LnJlbW92ZSgpO1xuXG4gIHJldHVybiBzY3JvbGxXaWR0aDtcbn07XG5cbmNvbnN0IG1vZGFscyA9ICh0cmlnZ2VycywgbW9kYWxDb250YWluZXIsIG1vZGFsV2luZG93LCBjbG9zZVRyaWdnZXIpID0+IHtcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodHJpZ2dlcnMpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1vZGFsQ29udGFpbmVyKTtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1vZGFsV2luZG93KTtcbiAgY29uc3QgY2xvc2VNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2xvc2VUcmlnZ2VyKTtcbiAgY29uc3Qgc2Nyb2xsV2lkdGggPSBjYWxjU2Nyb2xsKCk7XG4gIGxldCBwZXRzO1xuXG4gIGZldGNoKCcuL2Fzc2V0cy9qc29uL3BldHMuanNvbicpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0Lmpzb24oKSlcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBwZXRzID0gcmVzdWx0O1xuICAgIH0pO1xuXG4gIGNvbnN0IHJlbmRlck1vZGFsV2luZG93ID0gKG5hbWUpID0+IHtcbiAgICB3aGlsZSAobW9kYWwuZmlyc3RDaGlsZCkge1xuICAgICAgbW9kYWwucmVtb3ZlQ2hpbGQobW9kYWwuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgbGV0IHBldDtcbiAgICBwZXRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgcGV0ID0gaXRlbTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZGFsLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtd2luZG93X19pbWFnZVwiPlxuICAgICAgPGltZyBzcmM9XCIke3BldC5pbWd9XCIgYWx0PVwiUGV0c1wiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvblwiPlxuICAgICAgPGRpdiBjbGFzcz1cImluZm9ybWF0aW9uX19uYW1lXCI+JHtwZXQubmFtZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvbl9fdHlwZS1wZXRzXCI+JHtwZXQudHlwZX0gLSAke3BldC5icmVlZH08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvbl9fZGVzY3JpcHRpb25cIj4ke3BldC5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgIDx1bCBjbGFzcz1cImluZm9ybWF0aW9uX19leHRyYVwiPlxuICAgICAgICA8bGkgY2xhc3M9XCJpbmZvcm1hdGlvbl9fZXh0cmEtaXRlbVwiPjxiPkFnZTo8L2I+IDxzcGFuPiR7cGV0LmFnZX08L3NwYW4+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwiaW5mb3JtYXRpb25fX2V4dHJhLWl0ZW1cIj48Yj5Jbm9jdWxhdGlvbnM6PC9iPiA8c3Bhbj4ke3BldC5pbm9jdWxhdGlvbnN9PC9zcGFuPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cImluZm9ybWF0aW9uX19leHRyYS1pdGVtXCI+PGI+RGlzZWFzZXM6PC9iPiA8c3Bhbj4ke3BldC5kaXNlYXNlc308L3NwYW4+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwiaW5mb3JtYXRpb25fX2V4dHJhLWl0ZW1cIj48Yj5QYXJhc2l0ZXM6PC9iPiA8c3Bhbj4ke3BldC5wYXJhc2l0ZXN9PC9zcGFuPjwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PmA7XG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtd2luZG93X2Nsb3NlZCcpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW5SaWdodCA9IGAke3Njcm9sbFdpZHRofXB4YDtcbiAgfTtcblxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlbmRlck1vZGFsV2luZG93KGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgaGlkZU1vZGFsV2luZG93ID0gKCkgPT4ge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2RhbC13aW5kb3dfY2xvc2VkJyk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnJztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpblJpZ2h0ID0gJzBweCc7XG4gIH07XG5cbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gY29udGFpbmVyKSB7XG4gICAgICBoaWRlTW9kYWxXaW5kb3coKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNsb3NlTW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlTW9kYWxXaW5kb3cpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbW9kYWxzO1xuIiwiZnVuY3Rpb24gc2xpZGUoKSB7XG4gIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fdmlzaWJsZS1hcmVhJyk7XG4gIGNvbnN0IHByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGUtbGVmdCcpO1xuICBjb25zdCBuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlLXJpZ2h0Jyk7XG4gIGxldCBwb3NJbml0aWFsO1xuICBjb25zdCBzbGlkZXMgPSBpdGVtcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJkcycpO1xuICBjb25zdCBzbGlkZXNMZW5ndGggPSBzbGlkZXMubGVuZ3RoO1xuICBjb25zdCBzbGlkZVNpemUgPSBpdGVtcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJkcycpWzBdLm9mZnNldFdpZHRoO1xuICBjb25zdCBmaXJzdFNsaWRlID0gc2xpZGVzWzBdO1xuICBjb25zdCBsYXN0U2xpZGUgPSBzbGlkZXNbc2xpZGVzTGVuZ3RoIC0gMV07XG4gIGNvbnN0IGNsb25lRmlyc3QgPSBmaXJzdFNsaWRlLmNsb25lTm9kZSh0cnVlKTtcbiAgY29uc3QgY2xvbmVMYXN0ID0gbGFzdFNsaWRlLmNsb25lTm9kZSh0cnVlKTtcbiAgbGV0IGluZGV4ID0gMDtcbiAgbGV0IGFsbG93U2hpZnQgPSB0cnVlO1xuXG4gIGl0ZW1zLmFwcGVuZENoaWxkKGNsb25lRmlyc3QpO1xuICBpdGVtcy5pbnNlcnRCZWZvcmUoY2xvbmVMYXN0LCBmaXJzdFNsaWRlKTtcblxuICBmdW5jdGlvbiBzaGlmdFNsaWRlKGRpciwgYWN0aW9uKSB7XG4gICAgaXRlbXMuY2xhc3NMaXN0LmFkZCgnc2hpZnRpbmcnKTtcblxuICAgIGlmIChhbGxvd1NoaWZ0KSB7XG4gICAgICBpZiAoIWFjdGlvbikgeyBwb3NJbml0aWFsID0gaXRlbXMub2Zmc2V0TGVmdDsgfVxuICAgICAgaWYgKGRpciA9PT0gMSkge1xuICAgICAgICBpdGVtcy5zdHlsZS5sZWZ0ID0gYCR7cG9zSW5pdGlhbCAtIHNsaWRlU2l6ZX1weGA7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICB9IGVsc2UgaWYgKGRpciA9PT0gLTEpIHtcbiAgICAgICAgaXRlbXMuc3R5bGUubGVmdCA9IGAke3Bvc0luaXRpYWwgKyBzbGlkZVNpemV9cHhgO1xuICAgICAgICBpbmRleCAtPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFsbG93U2hpZnQgPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrSW5kZXgoKSB7XG4gICAgaXRlbXMuY2xhc3NMaXN0LnJlbW92ZSgnc2hpZnRpbmcnKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICBpdGVtcy5zdHlsZS5sZWZ0ID0gYCR7LShzbGlkZXNMZW5ndGggKiBzbGlkZVNpemUpfXB4YDtcbiAgICAgIGluZGV4ID0gc2xpZGVzTGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPT09IHNsaWRlc0xlbmd0aCkge1xuICAgICAgaXRlbXMuc3R5bGUubGVmdCA9IGAkey0oMSAqIHNsaWRlU2l6ZSl9cHhgO1xuICAgICAgaW5kZXggPSAwO1xuICAgIH1cblxuICAgIGFsbG93U2hpZnQgPSB0cnVlO1xuICB9XG5cbiAgcHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNoaWZ0U2xpZGUoLTEpKTtcbiAgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNoaWZ0U2xpZGUoMSkpO1xuICBpdGVtcy5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgY2hlY2tJbmRleCk7XG59XG5cbnNsaWRlKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWFpbi9qcy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tYWluL3Nhc3Mvc3R5bGVzLnNjc3NcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9