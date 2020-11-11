const net = require('net');

/*创建TCP服务器*/
var myServer = net.createServer((Socket) => {
    console.log("someone connects");
});

/*设置端口监听 */
myServer.listen(18001,() => {
    console.log("TCP 服务器启动成功！");
});