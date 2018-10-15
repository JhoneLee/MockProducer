/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-08-30 15:19:54
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-10-15 13:57:24
*/

var br = require('babel-register');
var fs = require('fs');
var path = require('path');
var babelConfig = JSON.parse(fs.readFileSync(path.join(__dirname , '../.babelrc')));
br(babelConfig);
require('./index.js');