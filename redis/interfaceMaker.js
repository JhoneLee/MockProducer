/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-08-31 11:21:16
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-08-31 15:55:46
*/

import {redis} from './index';

// 构建接口基本信息表
export async function makeInterface(opt){
    let {uuid,name,jsonPath,mockjs,method,uri,project} = opt;
    let key = `interface:${uuid}:${project}:${name}`;
    let res = await redis.hmset(key,{
        uuid,
        name,
        jsonPath,
        mockjs,
        method,
        uri,
        project
    });
    return res;
}

// 构建接口文档表
export async function makeDocument(opt){

}

// 构建mockServer接口表
export async function makeMock(opt){

}

// 构建当前用户的接口列表
export async function makeMap(opt){
    let {project,list,uuid} = opt;
    let key = `map:${uuid}:${project}`;
    let res = await redis.set(key,list.toString());
    return res;
}