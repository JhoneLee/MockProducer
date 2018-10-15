/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-10-15 14:54:55
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-10-15 15:11:04
*/

import webpackDev from 'webpack-dev-middleware';

export default (compiler,opt)=>{
    const middleware = webpackDev(compiler,opt);
    return async (ctx,next)=>{
        await middleware(ctx.req,{
            end: (content) => {
                ctx.body = content;
            },
            setHeader: (name, value) => {
                ctx.set(name, value);
            }
        },next);
    };
};