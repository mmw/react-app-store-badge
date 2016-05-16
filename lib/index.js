/******/ (function(modules) { // webpackBootstrap
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
	exports.default = AppStoreBadge;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _styles = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function AppStoreBadge(_ref) {
	  var url = _ref.url;
	  var textHeading = _ref.textHeading;
	  var textAppStore = _ref.textAppStore;

	  return _react2.default.createElement(
	    'a',
	    {
	      className: 'ReactVendor--AppStoreButton',
	      href: url,
	      style: _styles.wrapperStyle
	    },
	    _react2.default.createElement(
	      'i',
	      { style: _styles.iconStyle },
	      'A'
	    ),
	    _react2.default.createElement(
	      'span',
	      { style: _styles.textHeadingStyle },
	      textHeading || 'Available on the'
	    ),
	    _react2.default.createElement(
	      'span',
	      { style: _styles.textAppStoreStyle },
	      textAppStore || 'App Store'
	    )
	  );
	}

	// export default compose(
	//   setPropTypes({
	//     downloadLink: React.PropTypes.string.isRequired,
	//     textHeading: React.PropTypes.string,
	//     textAppStore: React.PropTypes.string
	//   }),
	//   pure
	// )(AppStoreBadge);

	// import { compose, setPropTypes, pure } from 'recompose';

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var defaults = {
	  primaryColor: '#ffffff',
	  secondaryColor: '#000000'
	};

	var wrapperStyle = {
	  color: defaults.primaryColor,
	  backgroundColor: defaults.secondaryColor,
	  border: '1px solid ' + defaults.primaryColor,
	  borderRadius: '3px',
	  display: 'inline-block',
	  boxSizing: 'border-box',
	  fontWeight: 'normal',
	  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
	  height: '66px',
	  marigin: '24px 12px 6px 0',
	  padding: '9px 0',
	  textAlign: 'center',
	  textDecoration: 'none',
	  width: '192px'
	};

	var textAppStoreStyle = {
	  color: '#fff',
	  fontSize: '18px',
	  boxSizing: 'border-box',
	  lineHeight: '24px',
	  position: 'relative',
	  top: '-3px',
	  textTransform: 'none'
	};

	var iconStyle = {
	  color: defaults.primaryColor,
	  display: 'block',
	  boxSizing: 'border-box',
	  float: 'left',
	  fontSize: '40px',
	  lineHeight: 1.3,
	  position: 'relative',
	  left: '15px'
	};

	var textHeadingStyle = {
	  color: defaults.primaryColor,
	  display: 'block',
	  fontSize: '9px',
	  boxSizing: 'border-box',
	  lineHeight: '24px',
	  textTransform: 'uppercase'
	};

	exports.wrapperStyle = wrapperStyle;
	exports.textAppStoreStyle = textAppStoreStyle;
	exports.iconStyle = iconStyle;
	exports.textHeadingStyle = textHeadingStyle;

/***/ }
/******/ ]);