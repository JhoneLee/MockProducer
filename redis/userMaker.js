/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-08-30 17:30:16
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-08-30 17:43:20
*/

import uuidv4 from 'uuid/v4';
import {redis} from './index';

function makeUser(){
    let uuid = uuidv4();
    let key = `user:${uuid}`;
    redis.hmset(key,{
        name:'user1',
        uuid,
        password:'xxxxxx' // 差md5
    });
}
