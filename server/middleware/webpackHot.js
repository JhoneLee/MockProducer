/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-10-15 14:54:36
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-10-15 15:08:36
*/

import webpackHot from 'webpack-hot-middleware';
import stream from 'stream';
const {PassThrough} = stream;

export default (compiler,opt)=>{
    const middleware = webpackHot(compiler,opt);
    return async (ctx,next)=>{
        let stream = new PassThrough();
        ctx.body = stream;
        await middleware(ctx.req,{
            write: stream.write.bind(stream),
            writeHead: (status, headers) => {
                ctx.status = status;
                ctx.set(headers);
            }
        },next);
    };
};