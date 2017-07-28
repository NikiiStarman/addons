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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.fireEvent = fireEvent;\nexports.toggleScroll = toggleScroll;\nexports.disableScroll = disableScroll;\nexports.enableScroll = enableScroll;\nfunction fireEvent(element, eventName, options) {\n    var event;\n    if (window.CustomEvent) {\n        event = new CustomEvent(eventName, options);\n    } else {\n        event = document.createEvent(\"CustomEvent\");\n        event.initCustomEvent(eventName, true, true, options);\n    }\n    element.dispatchEvent(event);\n}\n\nfunction toggleScroll() {\n    if ($(\"body\")[0].style.overflow) {\n        enableScroll();\n    } else {\n        disableScroll();\n    }\n}\n\nfunction disableScroll() {\n    $(\"body\").addClass(\"NoScroll\");\n}\n\nfunction enableScroll() {\n    $(\"body\").removeClass(\"NoScroll\");\n}\n\n/**\n * Provides requestAnimationFrame in a cross browser way.\n */\n\nif (!window.requestAnimationFrame) {\n    window.requestAnimationFrame = function () {\n        return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (\n        /* function FrameRequestCallback */callback,\n        /* DOMElement Element */element) {\n            window.setTimeout(callback, 1000 / 60);\n        };\n    }();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2dpdC9vdmFyaWFuY2FuYWRhL3RoZW1lcy9vdmFyaWFuY2FuYWRhL3NyYy9qcy91dGlsaXR5LmpzP2E0NGMiXSwibmFtZXMiOlsiZmlyZUV2ZW50IiwidG9nZ2xlU2Nyb2xsIiwiZGlzYWJsZVNjcm9sbCIsImVuYWJsZVNjcm9sbCIsImVsZW1lbnQiLCJldmVudE5hbWUiLCJvcHRpb25zIiwiZXZlbnQiLCJ3aW5kb3ciLCJDdXN0b21FdmVudCIsImRvY3VtZW50IiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiJCIsInN0eWxlIiwib3ZlcmZsb3ciLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7OztRQUFnQkEsUyxHQUFBQSxTO1FBV0FDLFksR0FBQUEsWTtRQVFBQyxhLEdBQUFBLGE7UUFJQUMsWSxHQUFBQSxZO0FBdkJULFNBQVNILFNBQVQsQ0FBbUJJLE9BQW5CLEVBQTRCQyxTQUE1QixFQUF1Q0MsT0FBdkMsRUFBZ0Q7QUFDbkQsUUFBSUMsS0FBSjtBQUNBLFFBQUlDLE9BQU9DLFdBQVgsRUFBd0I7QUFDcEJGLGdCQUFRLElBQUlFLFdBQUosQ0FBZ0JKLFNBQWhCLEVBQTJCQyxPQUEzQixDQUFSO0FBQ0gsS0FGRCxNQUVPO0FBQ0hDLGdCQUFRRyxTQUFTQyxXQUFULENBQXFCLGFBQXJCLENBQVI7QUFDQUosY0FBTUssZUFBTixDQUFzQlAsU0FBdEIsRUFBaUMsSUFBakMsRUFBdUMsSUFBdkMsRUFBNkNDLE9BQTdDO0FBQ0g7QUFDREYsWUFBUVMsYUFBUixDQUFzQk4sS0FBdEI7QUFDSDs7QUFFTSxTQUFTTixZQUFULEdBQXdCO0FBQzNCLFFBQUlhLEVBQUUsTUFBRixFQUFVLENBQVYsRUFBYUMsS0FBYixDQUFtQkMsUUFBdkIsRUFBaUM7QUFDN0JiO0FBQ0gsS0FGRCxNQUVPO0FBQ0hEO0FBQ0g7QUFDSjs7QUFFTSxTQUFTQSxhQUFULEdBQXlCO0FBQzVCWSxNQUFFLE1BQUYsRUFBVUcsUUFBVixDQUFtQixVQUFuQjtBQUNIOztBQUVNLFNBQVNkLFlBQVQsR0FBd0I7QUFDM0JXLE1BQUUsTUFBRixFQUFVSSxXQUFWLENBQXNCLFVBQXRCO0FBQ0g7O0FBRUQ7Ozs7QUFJQSxJQUFJLENBQUNWLE9BQU9XLHFCQUFaLEVBQW1DO0FBQy9CWCxXQUFPVyxxQkFBUCxHQUFnQyxZQUFXO0FBQ3ZDLGVBQ0lYLE9BQU9ZLDJCQUFQLElBQ0FaLE9BQU9hLHdCQURQLElBRUFiLE9BQU9jLHNCQUZQLElBR0FkLE9BQU9lLHVCQUhQLElBSUE7QUFDSSwyQ0FBb0NDLFFBRHhDO0FBRUksZ0NBQXlCcEIsT0FGN0IsRUFHRTtBQUNFSSxtQkFBT2lCLFVBQVAsQ0FBa0JELFFBQWxCLEVBQTRCLE9BQU8sRUFBbkM7QUFDSCxTQVZMO0FBWUgsS0FiOEIsRUFBL0I7QUFjSCIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGZpcmVFdmVudChlbGVtZW50LCBldmVudE5hbWUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZXZlbnQ7XG4gICAgaWYgKHdpbmRvdy5DdXN0b21FdmVudCkge1xuICAgICAgICBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtcbiAgICAgICAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVTY3JvbGwoKSB7XG4gICAgaWYgKCQoXCJib2R5XCIpWzBdLnN0eWxlLm92ZXJmbG93KSB7XG4gICAgICAgIGVuYWJsZVNjcm9sbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc2FibGVTY3JvbGwoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlU2Nyb2xsKCkge1xuICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwiTm9TY3JvbGxcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVTY3JvbGwoKSB7XG4gICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJOb1Njcm9sbFwiKTtcbn1cblxuLyoqXG4gKiBQcm92aWRlcyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgaW4gYSBjcm9zcyBicm93c2VyIHdheS5cbiAqL1xuXG5pZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgLyogZnVuY3Rpb24gRnJhbWVSZXF1ZXN0Q2FsbGJhY2sgKi8gY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgLyogRE9NRWxlbWVudCBFbGVtZW50ICovIGVsZW1lbnRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH0pKCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL2dpdC9vdmFyaWFuY2FuYWRhL3RoZW1lcy9vdmFyaWFuY2FuYWRhL3NyYy9qcy91dGlsaXR5LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _header = __webpack_require__(2);\n\nvar _overrides = __webpack_require__(3);\n\n$(function () {\n    (0, _header.setupHeader)();\n    (0, _overrides.fixToggleFlyoutBehaviour)();\n\n    $('select').wrap('<div class=\"SelectWrapper\"></div>');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2dpdC9vdmFyaWFuY2FuYWRhL3RoZW1lcy9vdmFyaWFuY2FuYWRhL3NyYy9qcy9pbmRleC5qcz8wNDAwIl0sIm5hbWVzIjpbIiQiLCJ3cmFwIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUVBQSxFQUFFLFlBQU07QUFDSjtBQUNBOztBQUVBQSxNQUFFLFFBQUYsRUFBWUMsSUFBWixDQUFpQixtQ0FBakI7QUFDSCxDQUxEIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldHVwSGVhZGVyfSBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQge2ZpeFRvZ2dsZUZseW91dEJlaGF2aW91cn0gZnJvbSAnLi9vdmVycmlkZXMnO1xuXG4kKCgpID0+IHtcbiAgICBzZXR1cEhlYWRlcigpO1xuICAgIGZpeFRvZ2dsZUZseW91dEJlaGF2aW91cigpO1xuXG4gICAgJCgnc2VsZWN0Jykud3JhcCgnPGRpdiBjbGFzcz1cIlNlbGVjdFdyYXBwZXJcIj48L2Rpdj4nKVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL2dpdC9vdmFyaWFuY2FuYWRhL3RoZW1lcy9vdmFyaWFuY2FuYWRhL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.setupHeader = setupHeader;\n\nvar _utility = __webpack_require__(0);\n\n/**\n * Call this event on the window in order to collapse default collapsing elements.\n *\n * fireEvent(window, EVENT_COLLAPSE_DEFAULTS);\n */\nvar EVENT_COLLAPSE_DEFAULTS = \"vanilla_collapse_defaults\";\n\n// Strings to represent the current state in a data-attribute\nvar STATE_CLOSED = \"CLOSED\";\nvar STATE_OPEN = \"OPEN\";\n\nfunction setupHeader() {\n    initNavigationDropdown();\n    initCategoriesModule();\n    (0, _utility.fireEvent)(window, EVENT_COLLAPSE_DEFAULTS);\n    initNavigationVisibility();\n}\n\nfunction initNavigationListeners() {\n    var $navigation = $('#navdrawer');\n    var className = 'isStuck';\n\n    var setupListener = function setupListener() {\n        var offset = $navigation.offset().top;\n\n        $(window).on('scroll', function () {\n            window.requestAnimationFrame(function () {\n                if (!$navigation.hasClass(className) && $(window).scrollTop() >= offset) {\n                    $navigation.addClass(className);\n                } else if ($navigation.hasClass(className)) {\n                    $navigation.removeClass(className);\n                }\n            });\n        });\n    };\n}\n\n/**\n * Initialize the mobile menu open/close listeners\n */\nfunction initNavigationDropdown() {\n    var $menuButton = $(\"#menu-button\");\n    var $menuList = $(\"#navdrawer\");\n    setupBetterHeightTransitions($menuList, $menuButton, true);\n}\n\n/**\n * Initialize the listeners for the accordian style categories module\n */\nfunction initCategoriesModule() {\n    var $children = $(\".CategoriesModule-children\");\n    var $chevrons = $(\".CategoriesModule-chevron\");\n\n    $chevrons.each(function (index, chevron) {\n        var $chevron = $(chevron);\n        var $childList = $chevron.parent().parent().find(\".CategoriesModule-children\").first();\n        setupBetterHeightTransitions($childList, $chevron, true);\n    });\n}\n\n/**\n * Initialzie the navigation menus visibility.\n *\n * We initially hide all of the nav items while the measure themselves,\n * then move to their initial states. By default they are hidden,\n * This overrides the baked in hiding styles.\n */\nfunction initNavigationVisibility() {\n    var $nav = $(\"#navdrawer\");\n    $nav.css({ position: \"relative\", visibility: \"visible\" });\n    $nav.addClass('isReadyToTransition');\n}\n\n/**\n * Measure approximate real heights of an element and store/use it\n * to have a more accurate max-height transition.\n *\n * @param {any} $elementToMeasure\n * @param {any} toState\n */\nfunction applyNewElementMeasurements($elementToMeasure, toState) {\n    var trueHeight = $elementToMeasure.outerHeight() + \"px\";\n    var previouslyCalculatedOldHeight = $elementToMeasure.attr(\"data-true-height\");\n\n    if (!previouslyCalculatedOldHeight) {\n        $elementToMeasure.attr(\"data-true-height\", trueHeight);\n    }\n\n    $elementToMeasure.attr(\"data-valid-open-state\", false);\n\n    if (toState === STATE_CLOSED) {\n        $elementToMeasure.attr(\"data-valid-open-state\", false);\n        $elementToMeasure.css(\"overflow\", \"hidden\");\n        $elementToMeasure.css(\"max-height\", \"0px\");\n    } else if (toState === STATE_OPEN) {\n        $elementToMeasure.attr(\"data-valid-open-state\", true);\n        $elementToMeasure.css(\"max-height\", $elementToMeasure.attr(\"data-true-height\"));\n        $elementToMeasure.on(\"transitionend\", function handler() {\n            if ($elementToMeasure.attr(\"data-valid-open-state\") === \"true\") {\n                $elementToMeasure.css(\"overflow\", \"visible\");\n                $elementToMeasure.off(\"transitionend\", handler);\n            }\n        });\n    }\n\n    $elementToMeasure.attr(\"data-state\", toState);\n}\n\n/**\n * Setup a more accurate max-height transition on an element to be triggered by another element.\n *\n * @param {jquery.element} $elementToMeasure The jquery element to measure\n * @param {jquery.element} $triggeringElement The jquery element that triggers the transition\n * @param {boolean} collapseByDefault whether or not to collapse the element by default. This will happen after everything has been measured and you fire the EVENT_COLLAPSE_DEFAULTS from the window\n */\nfunction setupBetterHeightTransitions($elementToMeasure, $triggeringElement, collapseByDefault) {\n    applyNewElementMeasurements($elementToMeasure, STATE_OPEN);\n\n    $triggeringElement.on(\"click\", function () {\n        var elementState = $elementToMeasure.attr(\"data-state\");\n\n        if (elementState === STATE_CLOSED) {\n            $triggeringElement.toggleClass(\"isToggled\");\n            applyNewElementMeasurements($elementToMeasure, STATE_OPEN);\n        } else if (elementState === STATE_OPEN) {\n            $triggeringElement.toggleClass(\"isToggled\");\n            applyNewElementMeasurements($elementToMeasure, STATE_CLOSED);\n        }\n    });\n\n    if (collapseByDefault) {\n        window.addEventListener(EVENT_COLLAPSE_DEFAULTS, function () {\n            applyNewElementMeasurements($elementToMeasure, STATE_CLOSED);\n        });\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2dpdC9vdmFyaWFuY2FuYWRhL3RoZW1lcy9vdmFyaWFuY2FuYWRhL3NyYy9qcy9oZWFkZXIuanM/YmU2NCJdLCJuYW1lcyI6WyJzZXR1cEhlYWRlciIsIkVWRU5UX0NPTExBUFNFX0RFRkFVTFRTIiwiU1RBVEVfQ0xPU0VEIiwiU1RBVEVfT1BFTiIsImluaXROYXZpZ2F0aW9uRHJvcGRvd24iLCJpbml0Q2F0ZWdvcmllc01vZHVsZSIsIndpbmRvdyIsImluaXROYXZpZ2F0aW9uVmlzaWJpbGl0eSIsImluaXROYXZpZ2F0aW9uTGlzdGVuZXJzIiwiJG5hdmlnYXRpb24iLCIkIiwiY2xhc3NOYW1lIiwic2V0dXBMaXN0ZW5lciIsIm9mZnNldCIsInRvcCIsIm9uIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaGFzQ2xhc3MiLCJzY3JvbGxUb3AiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiJG1lbnVCdXR0b24iLCIkbWVudUxpc3QiLCJzZXR1cEJldHRlckhlaWdodFRyYW5zaXRpb25zIiwiJGNoaWxkcmVuIiwiJGNoZXZyb25zIiwiZWFjaCIsImluZGV4IiwiY2hldnJvbiIsIiRjaGV2cm9uIiwiJGNoaWxkTGlzdCIsInBhcmVudCIsImZpbmQiLCJmaXJzdCIsIiRuYXYiLCJjc3MiLCJwb3NpdGlvbiIsInZpc2liaWxpdHkiLCJhcHBseU5ld0VsZW1lbnRNZWFzdXJlbWVudHMiLCIkZWxlbWVudFRvTWVhc3VyZSIsInRvU3RhdGUiLCJ0cnVlSGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJwcmV2aW91c2x5Q2FsY3VsYXRlZE9sZEhlaWdodCIsImF0dHIiLCJoYW5kbGVyIiwib2ZmIiwiJHRyaWdnZXJpbmdFbGVtZW50IiwiY29sbGFwc2VCeURlZmF1bHQiLCJlbGVtZW50U3RhdGUiLCJ0b2dnbGVDbGFzcyIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7O1FBYWdCQSxXLEdBQUFBLFc7O0FBYmhCOztBQUVBOzs7OztB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LEVBQStDckMsWUFBL0M7QUFDSCxTQUZEO0FBR0g7QUFDSiIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4vdXRpbGl0eS5qc1wiO1xuXG4vKipcbiAqIENhbGwgdGhpcyBldmVudCBvbiB0aGUgd2luZG93IGluIG9yZGVyIHRvIGNvbGxhcHNlIGRlZmF1bHQgY29sbGFwc2luZyBlbGVtZW50cy5cbiAqXG4gKiBmaXJlRXZlbnQod2luZG93LCBFVkVOVF9DT0xMQVBTRV9ERUZBVUxUUyk7XG4gKi9cbmNvbnN0IEVWRU5UX0NPTExBUFNFX0RFRkFVTFRTID0gXCJ2YW5pbGxhX2NvbGxhcHNlX2RlZmF1bHRzXCI7XG5cbi8vIFN0cmluZ3MgdG8gcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXRlIGluIGEgZGF0YS1hdHRyaWJ1dGVcbmNvbnN0IFNUQVRFX0NMT1NFRCA9IFwiQ0xPU0VEXCI7XG5jb25zdCBTVEFURV9PUEVOID0gXCJPUEVOXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cEhlYWRlcigpIHtcbiAgICBpbml0TmF2aWdhdGlvbkRyb3Bkb3duKCk7XG4gICAgaW5pdENhdGVnb3JpZXNNb2R1bGUoKTtcbiAgICBmaXJlRXZlbnQod2luZG93LCBFVkVOVF9DT0xMQVBTRV9ERUZBVUxUUyk7XG4gICAgaW5pdE5hdmlnYXRpb25WaXNpYmlsaXR5KCk7XG59XG5cbmZ1bmN0aW9uIGluaXROYXZpZ2F0aW9uTGlzdGVuZXJzKCkge1xuICAgIGNvbnN0ICRuYXZpZ2F0aW9uID0gJCgnI25hdmRyYXdlcicpO1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9ICdpc1N0dWNrJztcblxuICAgIGNvbnN0IHNldHVwTGlzdGVuZXIgPSBmdW5jdGlvbiBzZXR1cExpc3RlbmVyKCkge1xuICAgICAgICBjb25zdCBvZmZzZXQgPSAkbmF2aWdhdGlvbi5vZmZzZXQoKS50b3A7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoISRuYXZpZ2F0aW9uLmhhc0NsYXNzKGNsYXNzTmFtZSkgJiYgJCh3aW5kb3cpLnNjcm9sbFRvcCgpID49IG9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICAkbmF2aWdhdGlvbi5hZGRDbGFzcyhjbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoJG5hdmlnYXRpb24uaGFzQ2xhc3MoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAkbmF2aWdhdGlvbi5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIG1vYmlsZSBtZW51IG9wZW4vY2xvc2UgbGlzdGVuZXJzXG4gKi9cbmZ1bmN0aW9uIGluaXROYXZpZ2F0aW9uRHJvcGRvd24oKSB7XG4gICAgdmFyICRtZW51QnV0dG9uID0gJChcIiNtZW51LWJ1dHRvblwiKTtcbiAgICB2YXIgJG1lbnVMaXN0ID0gJChcIiNuYXZkcmF3ZXJcIik7XG4gICAgc2V0dXBCZXR0ZXJIZWlnaHRUcmFuc2l0aW9ucygkbWVudUxpc3QsICRtZW51QnV0dG9uLCB0cnVlKTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBsaXN0ZW5lcnMgZm9yIHRoZSBhY2NvcmRpYW4gc3R5bGUgY2F0ZWdvcmllcyBtb2R1bGVcbiAqL1xuZnVuY3Rpb24gaW5pdENhdGVnb3JpZXNNb2R1bGUoKSB7XG4gICAgY29uc3QgJGNoaWxkcmVuID0gJChcIi5DYXRlZ29yaWVzTW9kdWxlLWNoaWxkcmVuXCIpO1xuICAgIGNvbnN0ICRjaGV2cm9ucyA9ICQoXCIuQ2F0ZWdvcmllc01vZHVsZS1jaGV2cm9uXCIpO1xuXG4gICAgJGNoZXZyb25zLmVhY2goKGluZGV4LCBjaGV2cm9uKSA9PiB7XG4gICAgICAgIGNvbnN0ICRjaGV2cm9uID0gJChjaGV2cm9uKTtcbiAgICAgICAgY29uc3QgJGNoaWxkTGlzdCA9ICRjaGV2cm9uXG4gICAgICAgICAgICAucGFyZW50KClcbiAgICAgICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAgICAgLmZpbmQoXCIuQ2F0ZWdvcmllc01vZHVsZS1jaGlsZHJlblwiKVxuICAgICAgICAgICAgLmZpcnN0KCk7XG4gICAgICAgIHNldHVwQmV0dGVySGVpZ2h0VHJhbnNpdGlvbnMoJGNoaWxkTGlzdCwgJGNoZXZyb24sIHRydWUpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIEluaXRpYWx6aWUgdGhlIG5hdmlnYXRpb24gbWVudXMgdmlzaWJpbGl0eS5cbiAqXG4gKiBXZSBpbml0aWFsbHkgaGlkZSBhbGwgb2YgdGhlIG5hdiBpdGVtcyB3aGlsZSB0aGUgbWVhc3VyZSB0aGVtc2VsdmVzLFxuICogdGhlbiBtb3ZlIHRvIHRoZWlyIGluaXRpYWwgc3RhdGVzLiBCeSBkZWZhdWx0IHRoZXkgYXJlIGhpZGRlbixcbiAqIFRoaXMgb3ZlcnJpZGVzIHRoZSBiYWtlZCBpbiBoaWRpbmcgc3R5bGVzLlxuICovXG5mdW5jdGlvbiBpbml0TmF2aWdhdGlvblZpc2liaWxpdHkoKSB7XG4gICAgY29uc3QgJG5hdiA9ICQoXCIjbmF2ZHJhd2VyXCIpO1xuICAgICRuYXYuY3NzKHsgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgdmlzaWJpbGl0eTogXCJ2aXNpYmxlXCIgfSk7XG4gICAgJG5hdi5hZGRDbGFzcygnaXNSZWFkeVRvVHJhbnNpdGlvbicpO1xufVxuXG4vKipcbiAqIE1lYXN1cmUgYXBwcm94aW1hdGUgcmVhbCBoZWlnaHRzIG9mIGFuIGVsZW1lbnQgYW5kIHN0b3JlL3VzZSBpdFxuICogdG8gaGF2ZSBhIG1vcmUgYWNjdXJhdGUgbWF4LWhlaWdodCB0cmFuc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7YW55fSAkZWxlbWVudFRvTWVhc3VyZVxuICogQHBhcmFtIHthbnl9IHRvU3RhdGVcbiAqL1xuZnVuY3Rpb24gYXBwbHlOZXdFbGVtZW50TWVhc3VyZW1lbnRzKCRlbGVtZW50VG9NZWFzdXJlLCB0b1N0YXRlKSB7XG4gICAgY29uc3QgdHJ1ZUhlaWdodCA9ICRlbGVtZW50VG9NZWFzdXJlLm91dGVySGVpZ2h0KCkgKyBcInB4XCI7XG4gICAgY29uc3QgcHJldmlvdXNseUNhbGN1bGF0ZWRPbGRIZWlnaHQgPSAkZWxlbWVudFRvTWVhc3VyZS5hdHRyKFxuICAgICAgICBcImRhdGEtdHJ1ZS1oZWlnaHRcIlxuICAgICk7XG5cbiAgICBpZiAoIXByZXZpb3VzbHlDYWxjdWxhdGVkT2xkSGVpZ2h0KSB7XG4gICAgICAgICRlbGVtZW50VG9NZWFzdXJlLmF0dHIoXCJkYXRhLXRydWUtaGVpZ2h0XCIsIHRydWVIZWlnaHQpO1xuICAgIH1cblxuICAgICRlbGVtZW50VG9NZWFzdXJlLmF0dHIoXCJkYXRhLXZhbGlkLW9wZW4tc3RhdGVcIiwgZmFsc2UpO1xuXG4gICAgaWYgKHRvU3RhdGUgPT09IFNUQVRFX0NMT1NFRCkge1xuICAgICAgICAkZWxlbWVudFRvTWVhc3VyZS5hdHRyKFwiZGF0YS12YWxpZC1vcGVuLXN0YXRlXCIsIGZhbHNlKTtcbiAgICAgICAgJGVsZW1lbnRUb01lYXN1cmUuY3NzKFwib3ZlcmZsb3dcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICRlbGVtZW50VG9NZWFzdXJlLmNzcyhcIm1heC1oZWlnaHRcIiwgXCIwcHhcIik7XG4gICAgfSBlbHNlIGlmICh0b1N0YXRlID09PSBTVEFURV9PUEVOKSB7XG4gICAgICAgICRlbGVtZW50VG9NZWFzdXJlLmF0dHIoXCJkYXRhLXZhbGlkLW9wZW4tc3RhdGVcIiwgdHJ1ZSk7XG4gICAgICAgICRlbGVtZW50VG9NZWFzdXJlLmNzcyhcbiAgICAgICAgICAgIFwibWF4LWhlaWdodFwiLFxuICAgICAgICAgICAgJGVsZW1lbnRUb01lYXN1cmUuYXR0cihcImRhdGEtdHJ1ZS1oZWlnaHRcIilcbiAgICAgICAgKTtcbiAgICAgICAgJGVsZW1lbnRUb01lYXN1cmUub24oXCJ0cmFuc2l0aW9uZW5kXCIsIGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICBpZiAoJGVsZW1lbnRUb01lYXN1cmUuYXR0cihcImRhdGEtdmFsaWQtb3Blbi1zdGF0ZVwiKSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICAkZWxlbWVudFRvTWVhc3VyZS5jc3MoXCJvdmVyZmxvd1wiLCBcInZpc2libGVcIik7XG4gICAgICAgICAgICAgICAgJGVsZW1lbnRUb01lYXN1cmUub2ZmKFwidHJhbnNpdGlvbmVuZFwiLCBoYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJGVsZW1lbnRUb01lYXN1cmUuYXR0cihcImRhdGEtc3RhdGVcIiwgdG9TdGF0ZSk7XG59XG5cbi8qKlxuICogU2V0dXAgYSBtb3JlIGFjY3VyYXRlIG1heC1oZWlnaHQgdHJhbnNpdGlvbiBvbiBhbiBlbGVtZW50IHRvIGJlIHRyaWdnZXJlZCBieSBhbm90aGVyIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtqcXVlcnkuZWxlbWVudH0gJGVsZW1lbnRUb01lYXN1cmUgVGhlIGpxdWVyeSBlbGVtZW50IHRvIG1lYXN1cmVcbiAqIEBwYXJhbSB7anF1ZXJ5LmVsZW1lbnR9ICR0cmlnZ2VyaW5nRWxlbWVudCBUaGUganF1ZXJ5IGVsZW1lbnQgdGhhdCB0cmlnZ2VycyB0aGUgdHJhbnNpdGlvblxuICogQHBhcmFtIHtib29sZWFufSBjb2xsYXBzZUJ5RGVmYXVsdCB3aGV0aGVyIG9yIG5vdCB0byBjb2xsYXBzZSB0aGUgZWxlbWVudCBieSBkZWZhdWx0LiBUaGlzIHdpbGwgaGFwcGVuIGFmdGVyIGV2ZXJ5dGhpbmcgaGFzIGJlZW4gbWVhc3VyZWQgYW5kIHlvdSBmaXJlIHRoZSBFVkVOVF9DT0xMQVBTRV9ERUZBVUxUUyBmcm9tIHRoZSB3aW5kb3dcbiAqL1xuZnVuY3Rpb24gc2V0dXBCZXR0ZXJIZWlnaHRUcmFuc2l0aW9ucyhcbiAgICAkZWxlbWVudFRvTWVhc3VyZSxcbiAgICAkdHJpZ2dlcmluZ0VsZW1lbnQsXG4gICAgY29sbGFwc2VCeURlZmF1bHRcbikge1xuICAgIGFwcGx5TmV3RWxlbWVudE1lYXN1cmVtZW50cygkZWxlbWVudFRvTWVhc3VyZSwgU1RBVEVfT1BFTik7XG5cbiAgICAkdHJpZ2dlcmluZ0VsZW1lbnQub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRTdGF0ZSA9ICRlbGVtZW50VG9NZWFzdXJlLmF0dHIoXCJkYXRhLXN0YXRlXCIpO1xuXG4gICAgICAgIGlmIChlbGVtZW50U3RhdGUgPT09IFNUQVRFX0NMT1NFRCkge1xuICAgICAgICAgICAgJHRyaWdnZXJpbmdFbGVtZW50LnRvZ2dsZUNsYXNzKFwiaXNUb2dnbGVkXCIpO1xuICAgICAgICAgICAgYXBwbHlOZXdFbGVtZW50TWVhc3VyZW1lbnRzKCRlbGVtZW50VG9NZWFzdXJlLCBTVEFURV9PUEVOKTtcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50U3RhdGUgPT09IFNUQVRFX09QRU4pIHtcbiAgICAgICAgICAgICR0cmlnZ2VyaW5nRWxlbWVudC50b2dnbGVDbGFzcyhcImlzVG9nZ2xlZFwiKTtcbiAgICAgICAgICAgIGFwcGx5TmV3RWxlbWVudE1lYXN1cmVtZW50cygkZWxlbWVudFRvTWVhc3VyZSwgU1RBVEVfQ0xPU0VEKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGNvbGxhcHNlQnlEZWZhdWx0KSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKEVWRU5UX0NPTExBUFNFX0RFRkFVTFRTLCAoKSA9PiB7XG4gICAgICAgICAgICBhcHBseU5ld0VsZW1lbnRNZWFzdXJlbWVudHMoJGVsZW1lbnRUb01lYXN1cmUsIFNUQVRFX0NMT1NFRCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvZ2l0L292YXJpYW5jYW5hZGEvdGhlbWVzL292YXJpYW5jYW5hZGEvc3JjL2pzL2hlYWRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.fixToggleFlyoutBehaviour = fixToggleFlyoutBehaviour;\n\nvar _utility = __webpack_require__(0);\n\n/**\n * Resets this listener\n * https://github.com/vanilla/vanilla/blob/f751e382da325e05784ba918016b1af2902f3c3a/js/global.js#L790\n * in order to work visibility:hidden instead of display:none\n *\n * The main js file should not rely on certain CSS styles!!!\n */\nfunction fixToggleFlyoutBehaviour() {\n    $(document).undelegate(\".ToggleFlyout\", \"click\");\n    var lastOpen = null;\n    $(document).delegate(\".ToggleFlyout\", \"click\", function (e) {\n        var $flyout = $(\".Flyout\", this);\n        var isHandle = false;\n\n        if ($(e.target).closest(\".Flyout\").length === 0) {\n            e.stopPropagation();\n            isHandle = true;\n        } else if ($(e.target).hasClass(\"Hijack\") || $(e.target).closest(\"a\").hasClass(\"Hijack\")) {\n            return;\n        }\n        e.stopPropagation();\n\n        // Dynamically fill the flyout.\n        var rel = $(this).attr(\"rel\");\n        if (rel) {\n            $(this).attr(\"rel\", \"\");\n            $flyout.html('<div class=\"InProgress\" style=\"height: 30px\"></div>');\n\n            $.ajax({\n                url: gdn.url(rel),\n                data: { DeliveryType: \"VIEW\" },\n                success: function success(data) {\n                    $flyout.html(data);\n                },\n                error: function error(xhr) {\n                    $flyout.html(\"\");\n                    gdn.informError(xhr, true);\n                }\n            });\n        }\n\n        if ($flyout.css(\"visibility\") == \"hidden\") {\n            if (lastOpen !== null) {\n                $(\".Flyout\", lastOpen).hide();\n                $(lastOpen).removeClass(\"Open\").closest(\".Item\").removeClass(\"Open\");\n            }\n\n            $(this).addClass(\"Open\").closest(\".Item\").addClass(\"Open\");\n            $flyout.show();\n            (0, _utility.disableScroll)();\n            lastOpen = this;\n        } else {\n            $flyout.hide();\n            $(this).removeClass(\"Open\").closest(\".Item\").removeClass(\"Open\");\n            (0, _utility.enableScroll)();\n        }\n\n        if (isHandle) return false;\n    });\n\n    // Close ToggleFlyout menu even if their links are hijacked\n    $(document).delegate('.ToggleFlyout a', 'mouseup', function () {\n        if ($(this).hasClass('FlyoutButton')) return;\n\n        $('.ToggleFlyout').removeClass('Open').closest('.Item').removeClass('Open');\n        $('.Flyout').hide();\n    });\n\n    $(document).delegate(document, 'click', function () {\n        if (lastOpen) {\n            $('.Flyout', lastOpen).hide();\n            $(lastOpen).removeClass('Open').closest('.Item').removeClass('Open');\n        }\n        $('.ButtonGroup').removeClass('Open');\n    });\n\n    $('.Button.Primary.Handle').on('click', function () {\n        (0, _utility.disableScroll)();\n    });\n\n    $('.Dropdown').on('click', function () {\n        (0, _utility.enableScroll)();\n    });\n\n    $('.Options .Flyout').on('click', function () {\n        (0, _utility.enableScroll)();\n    });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2dpdC9vdmFyaWFuY2FuYWRhL3RoZW1lcy9vdmFyaWFuY2FuYWRhL3NyYy9qcy9vdmVycmlkZXMuanM/YWZmNyJdLCJuYW1lcyI6WyJmaXhUb2dnbGVGbHlvdXRCZWhhdmlvdXIiLCIkIiwiZG9jdW1lbnQiLCJ1bmRlbGVnYXRlIiwibGFzdE9wZW4iLCJkZWxlZ2F0ZSIsImUiLCIkZmx5b3V0IiwiaXNIYW5kbGUiLCJ0YXJnZXQiLCJjbG9zZXN0IiwibGVuZ3RoIiwic3RvcFByb3BhZ2F0aW9uIiwiaGFzQ2xhc3MiLCJyZWwiLCJhdHRyIiwiaHRtbCIsImFqYXgiLCJ1cmwiLCJnZG4iLCJkYXRhIiwiRGVsaXZlcnlUeXBlIiwic3VjY2VzcyIsImVycm9yIiwieGhyIiwiaW5mb3JtRXJyb3IiLCJjc3MiLCJoaWRlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInNob3ciLCJvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFTZ0JBLHdCLEdBQUFBLHdCOztBQVRoQjs7QUFFQTs7Ozs7OztBQU9PLFNBQVNBLHdCQUFULEdBQW9DO0FBQ3ZDQyxNQUFFQyxRQUFGLEVBQVlDLFVBQVosQ0FBdUIsZUFBdkIsRUFBd0MsT0FBeEM7QUFDQSxRQUFJQyxXQUFXLElBQWY7QUFDQUgsTUFBRUMsUUFBRixFQUFZRyxRQUFaLENBQXFCLGVBQXJCLEVBQXNDLE9BQXRDLEVBQStDLFVBQVNDLENBQVQsRUFBWTtBQUN2RCxZQUFJQyxVQUFVTixFQUFFLFNBQUYsRUFBYSxJQUFiLENBQWQ7QUFDQSxZQUFJTyxXQUFXLEtBQWY7O0FBRUEsWUFBSVAsRUFBRUssRUFBRUcsTUFBSixFQUFZQyxPQUFaLENBQW9CLFNBQXBCLEVBQStCQyxNQUEvQixLQUEwQyxDQUE5QyxFQUFpRDtBQUM3Q0wsY0FBRU0sZUFBRjtBQUNBSix1QkFBVyxJQUFYO0FBQ0gsU0FIRCxNQUdPLElBQ0hQLEVBQUVLLEVBQUVHLE1BQUosRUFBWUksUUFBWixDQUFxQixRQUFyQixLQUNBWixFQUFF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Q0FBeUIsT0FBekIsRUFBa0MsWUFBTTtBQUNwQztBQUNILEtBRkQ7QUFHSCIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkaXNhYmxlU2Nyb2xsLCBlbmFibGVTY3JvbGwsIHRvZ2dsZVNjcm9sbH0gZnJvbSAnLi91dGlsaXR5JztcblxuLyoqXG4gKiBSZXNldHMgdGhpcyBsaXN0ZW5lclxuICogaHR0cHM6Ly9naXRodWIuY29tL3ZhbmlsbGEvdmFuaWxsYS9ibG9iL2Y3NTFlMzgyZGEzMjVlMDU3ODRiYTkxODAxNmIxYWYyOTAyZjNjM2EvanMvZ2xvYmFsLmpzI0w3OTBcbiAqIGluIG9yZGVyIHRvIHdvcmsgdmlzaWJpbGl0eTpoaWRkZW4gaW5zdGVhZCBvZiBkaXNwbGF5Om5vbmVcbiAqXG4gKiBUaGUgbWFpbiBqcyBmaWxlIHNob3VsZCBub3QgcmVseSBvbiBjZXJ0YWluIENTUyBzdHlsZXMhISFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpeFRvZ2dsZUZseW91dEJlaGF2aW91cigpIHtcbiAgICAkKGRvY3VtZW50KS51bmRlbGVnYXRlKFwiLlRvZ2dsZUZseW91dFwiLCBcImNsaWNrXCIpO1xuICAgIHZhciBsYXN0T3BlbiA9IG51bGw7XG4gICAgJChkb2N1bWVudCkuZGVsZWdhdGUoXCIuVG9nZ2xlRmx5b3V0XCIsIFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgJGZseW91dCA9ICQoXCIuRmx5b3V0XCIsIHRoaXMpO1xuICAgICAgICB2YXIgaXNIYW5kbGUgPSBmYWxzZTtcblxuICAgICAgICBpZiAoJChlLnRhcmdldCkuY2xvc2VzdChcIi5GbHlvdXRcIikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgaXNIYW5kbGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgJChlLnRhcmdldCkuaGFzQ2xhc3MoXCJIaWphY2tcIikgfHxcbiAgICAgICAgICAgICQoZS50YXJnZXQpLmNsb3Nlc3QoXCJhXCIpLmhhc0NsYXNzKFwiSGlqYWNrXCIpXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgLy8gRHluYW1pY2FsbHkgZmlsbCB0aGUgZmx5b3V0LlxuICAgICAgICB2YXIgcmVsID0gJCh0aGlzKS5hdHRyKFwicmVsXCIpO1xuICAgICAgICBpZiAocmVsKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoXCJyZWxcIiwgXCJcIik7XG4gICAgICAgICAgICAkZmx5b3V0Lmh0bWwoJzxkaXYgY2xhc3M9XCJJblByb2dyZXNzXCIgc3R5bGU9XCJoZWlnaHQ6IDMwcHhcIj48L2Rpdj4nKTtcblxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IGdkbi51cmwocmVsKSxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IERlbGl2ZXJ5VHlwZTogXCJWSUVXXCIgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICRmbHlvdXQuaHRtbChkYXRhKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIpIHtcbiAgICAgICAgICAgICAgICAgICAgJGZseW91dC5odG1sKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBnZG4uaW5mb3JtRXJyb3IoeGhyLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkZmx5b3V0LmNzcyhcInZpc2liaWxpdHlcIikgPT0gXCJoaWRkZW5cIikge1xuICAgICAgICAgICAgaWYgKGxhc3RPcGVuICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgJChcIi5GbHlvdXRcIiwgbGFzdE9wZW4pLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkKGxhc3RPcGVuKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJPcGVuXCIpXG4gICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KFwiLkl0ZW1cIilcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiT3BlblwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcIk9wZW5cIikuY2xvc2VzdChcIi5JdGVtXCIpLmFkZENsYXNzKFwiT3BlblwiKTtcbiAgICAgICAgICAgICRmbHlvdXQuc2hvdygpO1xuICAgICAgICAgICAgZGlzYWJsZVNjcm9sbCgpO1xuICAgICAgICAgICAgbGFzdE9wZW4gPSB0aGlzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGZseW91dC5oaWRlKCk7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiT3BlblwiKS5jbG9zZXN0KFwiLkl0ZW1cIikucmVtb3ZlQ2xhc3MoXCJPcGVuXCIpO1xuICAgICAgICAgICAgZW5hYmxlU2Nyb2xsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNIYW5kbGUpIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIENsb3NlIFRvZ2dsZUZseW91dCBtZW51IGV2ZW4gaWYgdGhlaXIgbGlua3MgYXJlIGhpamFja2VkXG4gICAgJChkb2N1bWVudCkuZGVsZWdhdGUoJy5Ub2dnbGVGbHlvdXQgYScsICdtb3VzZXVwJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdGbHlvdXRCdXR0b24nKSlcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAkKCcuVG9nZ2xlRmx5b3V0JykucmVtb3ZlQ2xhc3MoJ09wZW4nKS5jbG9zZXN0KCcuSXRlbScpLnJlbW92ZUNsYXNzKCdPcGVuJyk7XG4gICAgICAgICQoJy5GbHlvdXQnKS5oaWRlKCk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5kZWxlZ2F0ZShkb2N1bWVudCwgJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChsYXN0T3Blbikge1xuICAgICAgICAgICAgJCgnLkZseW91dCcsIGxhc3RPcGVuKS5oaWRlKCk7XG4gICAgICAgICAgICAkKGxhc3RPcGVuKS5yZW1vdmVDbGFzcygnT3BlbicpLmNsb3Nlc3QoJy5JdGVtJykucmVtb3ZlQ2xhc3MoJ09wZW4nKTtcbiAgICAgICAgfVxuICAgICAgICAkKCcuQnV0dG9uR3JvdXAnKS5yZW1vdmVDbGFzcygnT3BlbicpO1xuICAgIH0pO1xuXG5cbiAgICAkKCcuQnV0dG9uLlByaW1hcnkuSGFuZGxlJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkaXNhYmxlU2Nyb2xsKCk7XG4gICAgfSlcblxuICAgICQoJy5Ecm9wZG93bicpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZW5hYmxlU2Nyb2xsKCk7XG4gICAgfSlcblxuICAgICQoJy5PcHRpb25zIC5GbHlvdXQnKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGVuYWJsZVNjcm9sbCgpO1xuICAgIH0pXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL2dpdC9vdmFyaWFuY2FuYWRhL3RoZW1lcy9vdmFyaWFuY2FuYWRhL3NyYy9qcy9vdmVycmlkZXMuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);