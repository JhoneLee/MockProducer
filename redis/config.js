/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-08-30 15:10:39
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-08-30 17:18:08
*/

export default {
    port:8079,
    host:'10.117.140.34',
    family:4,
    password:'19880923',
    db:0,
    retryStrategy(times){
        return Math.min(times*50,2000);
    },
    reconnectOnError(err){
        if(err.message.slice(0,8) == 'READONLY'){
            return true;
        }
    }
}