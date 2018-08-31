/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-08-30 17:30:16
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-08-31 11:45:40
*/

import uuidv4 from 'uuid/v4';
import {redis} from './index';
import jqmd5 from '../utils/md5';
let {md5} = jqmd5;

export async function makeUser(){
    // let uuid = uuidv4();
    let uuid = 'a881798c-1aca-4f7f-8bd5-9e55e89be4f2';
    let key = `user:${uuid}`;
    let res = await redis.hmset(key,{
        name:'user1',
        uuid,
        password: md5('123456'), // 差md5
        createTime:Date.now(),
        lastAccessTime:Date.now()
    });
    return res;
}

