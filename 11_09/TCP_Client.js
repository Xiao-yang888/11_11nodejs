const net = require('net');

//创建TCP客户端
var client = net.Socket();

//准备连接
client.connect(18001,"192.168.1.2",function(){
    console.log('连接服务器成功，请稍等...');

    //2,可以发送数据给服务器
    client.write("netName:憨憨华华, message:你好呀！");
});



//3,可以接收服务器发送的数据
client.on("data",function(data){
    console.log("客户端接收的数据为："+data.toString());
});