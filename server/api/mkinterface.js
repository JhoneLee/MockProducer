/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-08-31 14:33:09
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-08-31 15:59:42
*/

import Router from 'koa-router';
import {makeInterface,makeMap} from '../../redis/interfaceMaker';
const router = new Router();

router.get('/mkinterface',async (ctx,next)=>{
    let params = ctx.request.query;
    // let {uuid,name,jsonPath,mockjs,method} = params;
    let res = await makeInterface({
        uuid:'a881798c-1aca-4f7f-8bd5-9e55e89be4f2',
        name:'getUserMap',
        uri:'/api/getUserMap',
        jsonPath:'/json/userMap.json',
        project:'test',
        mockjs:0,
        method:1 // 1:get  2:post   
    })
    ctx.status = 200;
    ctx.body = {
        status:0,
        data:res
    };
}).get('/mkmap',async (ctx,next)=>{
    let res = await makeMap({
        project:'test',
        uuid:'a881798c-1aca-4f7f-8bd5-9e55e89be4f2',
        list:[
            'getUserInfo',
            'getUserMap'
        ]
    });
    ctx.status = 200;
    ctx.body = {
        status:0,
        data:res
    };
});

export default router;