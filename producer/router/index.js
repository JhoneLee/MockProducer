/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-08-31 16:01:16
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-09-06 13:44:10
*/

import {redis} from '../../redis';
import Router from 'koa-router';
import path from 'path';
const router = new Router();

// 根据uuid及项目名称获取全部接口 并 返回路由
export async function mkInterfaceMap(uuid,project){
    // 通过uuid 获取用户的项目
    let key = `map:${uuid}:${project}`;
    let res = await redis.get(key);
    let ifArr = [];
    if(typeof res == 'string'){
        res = res.split(',');
        for(let i=0;i<res.length;i++){
            let e = res[i];
            // 获取接口数据
            let key = `interface:${uuid}:${project}:${e}`;
            let myInterface = await redis.hgetall(key).then(r=>r).catch(e=>{
                return {error:e};
            });
            if(!myInterface.error){
                ifArr.push(myInterface);
            }
        }
        // 绑定到路由并返回
        return bind2Router(ifArr);
    } else {
        return false;
    }
}

// 将接口数据项绑定到路由
function bind2Router(arr){
    arr.forEach((e,i)=>{
        let {method,jsonPath,uri,mockjs} = e;
        method = method == 1 ? 'get':'post';
        router[method](uri,async (ctx,next)=>{
            ctx.status = 200;
            if(mockjs == 0){
                let jpath = path.resolve(__dirname,'../../asset'+jsonPath)
                const json = require(jpath);
                ctx.body = json;
            } else {
                // 使用mockjs生成动态mock数据
            }
        });
        
    });
    return router;
}

