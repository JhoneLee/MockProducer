/*
* @Author: liyunjiao2048@163.com
* @Date:   2018-08-29 17:35:31
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-08-29 17:57:47
*/

// 检查端口是否被占用

const net = require('net');

async function checkPortOccupied(port){
    if(6100<=port && port <=65530){
        let server = net.createServer().listen(port);
        let promise = new Promise((resolve,reject)=>{
            server.on('listening',()=>{
                server.close();
                resolve(port);
            });
            server.on('error',(err)=>{
                if(err.code == 'EADDRINUSE'){
                    resolve(checkPortOccupied(++port));
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

module.exports = {
    checkPortOccupied
}
