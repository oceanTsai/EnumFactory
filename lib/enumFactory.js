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