/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-08-29 16:59:35
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-08-29 17:00:25
*/

const Router = require('koa-router');

const path = require('path');
const fs = require('fs');
const router = new Router();


fs.readdirSync(__dirname).filter(filename =>{
    return filename !== path.basename(__filename);
}).forEach((e)=>{
    let sub = require(`./${e}`);
    router.use(sub.routes());
    router.use(sub.allowedMethods());
});

module.exports = router;