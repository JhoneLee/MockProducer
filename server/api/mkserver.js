/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-08-29 17:15:30
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-08-29 17:56:49
*/

const Router = require('koa-router');
const router = new Router();
const {checkPortOccupied} = require('../../utils/checkPort');
const {mkServer} = require('../../mockServer/server');
let port = 6200;
router.get('/mkserver',async (ctx,next)=>{
    ctx.status = 200;
    let result = await checkPortOccupied(port);
    console.log(result);
    if(typeof result == 'number'){
        mkServer(result)
        ctx.body = {
            status:0,
            data:{
                port:result
            }
        }
    } else {
        let msg = '';
        if(result === false){
            msg = '请输入正常的端口号'
        } else {
            msg = '未知错误，请联系管理员'
        }
        ctx.body = {
            status:1,
            data:{
                msg
            }
        }
    }
});

module.exports = router;