(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.prefixCreate = exports.create = undefined;

var _generalUtil = require('general-util');

/**
 * @author ocean
 * @name enum factory
 * @module
 * @description 
 */

var create = exports.create = function create(array) {
	var ENUM = null;
	(0, _generalUtil.hasVal)(array) && (ENUM = {}) && array.forEach(function (value, index) {
		ENUM[value] = index + '';
	});
	return ENUM;
};

var prefixCreate = exports.prefixCreate = function prefixCreate(array) {
	var Prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	var ENUM = null;
	(0, _generalUtil.hasVal)(array) && (ENUM = {}) && array.forEach(function (value, index) {
		ENUM[value] = Prefix + '-' + index + '';
	});
	return ENUM;
};

var enumFactory_oc = {
	create: create,
	prefixCreate: prefixCreate
};

if (!window.enumFactory_oc) {
	window.enumFactory_oc = enumFactory_oc;
}

exports.default = enumFactory_oc;

},{"general-util":2}],2:[function(require,module,exports){
'use strict';

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
	return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

/**
 * @author ocean
 * @name 一般工具 
 * @module
 */

//判斷有無數值
var hasVal = exports.hasVal = function hasVal(val) {
	return !(val === null || typeof val === 'undefined' || val === '' || val === false);
};

//數值轉字串
var toStr = exports.toStr = function toStr(number) {
	return hasVal(number) ? number + '' : null;
};

//字串轉10進數值
var toInt = exports.toInt = function toInt(numStr) {
	return hasVal(numStr) ? parseInt(numStr, 10) : NaN;
};

//取整數
var clearFloat = exports.clearFloat = function clearFloat(number) {
	return hasVal(number) && !isNaN(number) ? number | 0 : NaN;
};

var filterInt = exports.filterInt = function filterInt(value) {
	return (/^(\-|\+)?([0-9]+|Infinity)$/.test(value) ? Number(value) : NaN
	);
};

var filterFloat = exports.filterFloat = function filterFloat(value) {
	return (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value) ? Number(value) : NaN
	);
};

var conditionLevel1 = function conditionLevel1(val) {
	return !(val === null || typeof val === 'undefined');
};
var conditionLevel2 = function conditionLevel2(val) {
	return !(val === null || typeof val === 'undefined' || val === '');
};
var conditionLevel3 = function conditionLevel3(val) {
	return !(val === null || typeof val === 'undefined' || val === '' || val === '-1' || val === -1);
};

//過濾掉空欄位
var filterEmptyField = exports.filterEmptyField = function filterEmptyField(item) {
	var conditionLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '1';

	if (hasVal(item)) {
		var keys = Object.keys(item);
		if (hasVal(keys)) {
			var _ret = function () {
				var result = {};
				var fun = conditionLevel1;
				switch (conditionLevel) {
					case '1':
						fun = conditionLevel1;
						break;
					case '2':
						fun = conditionLevel2;
						break;
					case '3':
						fun = conditionLevel3;
						break;
				}
				keys.forEach(function (key) {
					var val = item[key];
					fun(val) && (result[key] = val);
				});
				return {
					v: result
				};
			}();

			if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
		} else {
			return item;
		}
	} else {
		return item;
	}
};

var generalUtil = {
	hasVal: hasVal,
	toStr: toStr,
	toInt: toInt,
	clearFloat: clearFloat,
	filterInt: filterInt,
	filterFloat: filterFloat,
	filterEmptyField: filterEmptyField
};

if (!window.generalUtil) {
	window.generalUtil = generalUtil;
}

exports.default = generalUtil;

},{}]},{},[1]);
