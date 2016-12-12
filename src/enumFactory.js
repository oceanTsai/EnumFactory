import {hasVal}  from 'general-util'
/**
 * @author ocean
 * @name enum factory
 * @module
 * @description 
 */

export const create=(array)=>{
	let ENUM = null
	hasVal(array) && (ENUM={}) && array.forEach((value,index)=>{ENUM[value]=index+''})
	return ENUM
}

export const prefixCreate=(array, Prefix='')=>{
	let ENUM = null
	hasVal(array) && (ENUM={}) && array.forEach((value,index)=>{ENUM[value]=Prefix+'-'+index+''})
	return ENUM
}

const enumFactory_oc = {
	create : create,
	prefixCreate : prefixCreate
}


if(!window.enumFactory_oc){
		window.enumFactory_oc = enumFactory_oc
}

export default enumFactory_oc