'use strict';

/// param: packages
/// as a dictionary: 
/// {
///   {alias} : {package name} / {package path}
/// }
///
/// as an array: 
/// [ {pageckage name}, {pagecage path} ]

module.exports = function (packages) {
    return function *(next) {
        if(Array.isArray(packages)) {
            for(var i = 0; i < packages.length; i++) {
                this[packages[i]] = require(packages[i]);
            }
        } else if(!!packages) {
            for(var key in packages) {
                this[key] = require(packages[key]);
            }
        }
        yield next;
    };     
};