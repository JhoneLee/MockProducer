/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-08-29 17:15:21
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-08-29 17:16:03
*/

const Router = require('koa-router');

const path = require('path');
const fs = require('fs');
const router = new Router({
    prefix:'/api'
});


fs.readdirSync(__dirname).filter(filename =>{
    return filename !== path.basename(__filename);
}).forEach((e)=>{
    let sub = require(`./${e}`);
    router.use(sub.routes());
    router.use(sub.allowedMethods());
});

module.exports = router;