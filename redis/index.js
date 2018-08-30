import Redis from './transformer';
import conf from './config';
import { Store } from "koa-session2";
export const redis = new Redis(conf);

// 使用koa-session2@babel 使获取redis结果能够同步执行 

class RedisStore extends Store {
    constructor(){
        super();
        // this.redis = new Redis(conf);
    }
    async get(key,ctx){
        // console.log('get',key,maxAge,rolling);
        let res = await redis.hgetall(key).then(r=>r).catch(e=>{
            {error:e}
        });
        return res;
    }
    async set(session, { sid =  this.getID(24), maxAge = 1000000 } = {}, ctx){
        console.log('set',session.openid,maxAge,sid);
        let seconds = Math.floor(maxAge/1000);
        await redis.hmset(sid,session);
        await redis.expire(sid,seconds);
        return sid;
    }
    async destroy(key,ctx){
        console.log('destory',key);
        await redis.del(key);
    }
}
let store = new RedisStore();

export default store;