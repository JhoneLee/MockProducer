/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-08-30 15:12:53
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-08-30 16:27:00
*/

import Redis from 'ioredis';
import {convertMapToArray,convertObjectToArray} from '../utils/tools';

Redis.Command.setArgumentTransformer('hmset', function (args) {
    if (args.length === 2) {
        if (typeof Map !== 'undefined' && args[1] instanceof Map) {
            return [args[0]].concat(convertMapToArray(args[1]));
        }
        if ( typeof args[1] === 'object' && args[1] !== null) {
            return [args[0]].concat(convertObjectToArray(args[1]));
        }
    }
    return args;
});

export default Redis;