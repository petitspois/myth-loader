/*
	MIT License https://www.npmjs.com/package/myth-loader-webpack
	Author petitspois
*/

var mythCompile = require('myth');

module.exports = function (source) {
    this.cacheable && this.cacheable();
    return mythCompile(source);
};
