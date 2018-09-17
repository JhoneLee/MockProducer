/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-08-29 17:35:31
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-09-06 14:15:30
*/

// 检查端口是否被占用

import net from 'net';

async function checkPort(port){
    if(6200<=port && port <=65530){
        let server = net.createServer().listen(port);
        let promise = new Promise((resolve,reject)=>{
            server.on('listening',()=>{
                server.close();
                resolve(port);
            });
            server.on('error',(err)=>{
                if(err.code == 'EADDRINUSE'){
                    resolve(checkPort(++port));
                } else {
                    reject(err);
                }
            })
        });
        return await promise.then(port=>port,err=>err);
    } else {
        return false;
    }
}

export default checkPort;
