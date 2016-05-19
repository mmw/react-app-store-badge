(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactAppStoreBadge"] = factory(require("react"));
	else
		root["ReactAppStoreBadge"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Styles

	function wrapperStyle(primaryColor, secondaryColor) {
	  return {
	    color: primaryColor,
	    backgroundColor: secondaryColor,
	    border: '1px solid ' + primaryColor,
	    borderRadius: '3px',
	    display: 'inline-block',
	    boxSizing: 'border-box',
	    fontWeight: 'normal',
	    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
	    height: '66px',
	    margin: '24px 12px 6px 0',
	    padding: '9px 0',
	    textAlign: 'center',
	    textDecoration: 'none',
	    WebkitFontSmoothing: 'antialiased',
	    width: '192px'
	  };
	}

	function textStoreNameStyle(primaryColor) {
	  return {
	    color: primaryColor,
	    fontSize: '18px',
	    boxSizing: 'border-box',
	    lineHeight: '24px',
	    position: 'relative',
	    top: '-3px',
	    textTransform: 'none'
	  };
	}

	function iconStyle(primaryColor) {
	  return {
	    color: primaryColor,
	    display: 'block',
	    boxSizing: 'border-box',
	    float: 'left',
	    fontSize: '40px',
	    lineHeight: 1.3,
	    position: 'relative',
	    left: '15px',
	    top: '-3px'
	  };
	}

	function textHeadingStyle(primaryColor) {
	  return {
	    color: primaryColor,
	    display: 'block',
	    fontSize: '9px',
	    boxSizing: 'border-box',
	    lineHeight: '24px',
	    textTransform: 'uppercase'
	  };
	}

	// Component

	function ReactAppStoreBadge(_ref) {
	  var url = _ref.url;
	  var icon = _ref.icon;
	  var textHeading = _ref.textHeading;
	  var textStoreName = _ref.textStoreName;
	  var _ref$primaryColor = _ref.primaryColor;
	  var primaryColor = _ref$primaryColor === undefined ? "#ffffff" : _ref$primaryColor;
	  var _ref$secondaryColor = _ref.secondaryColor;
	  var secondaryColor = _ref$secondaryColor === undefined ? "#000000" : _ref$secondaryColor;

	  return _react2.default.createElement(
	    'a',
	    {
	      className: 'ReactVendor--AppStoreButton',
	      href: url,
	      style: wrapperStyle(primaryColor, secondaryColor)
	    },
	    _react2.default.createElement(
	      'i',
	      { style: iconStyle(primaryColor) },
	      icon
	    ),
	    _react2.default.createElement(
	      'span',
	      { style: textHeadingStyle(primaryColor) },
	      textHeading
	    ),
	    _react2.default.createElement(
	      'span',
	      { style: textStoreNameStyle(primaryColor) },
	      textStoreName
	    )
	  );
	}

	exports.default = ReactAppStoreBadge;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;