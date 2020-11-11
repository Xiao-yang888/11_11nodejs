//URL 解析
//1，加载http模块
var http = require("http");
//2,创建服务器并监听请求事件
var server = http.createServer(function(req,resp){
	//3,获取请求的rul
	var url = req.url;
	
	//4,响应字符串，设置响应模式
	resp.writeHead(200,{'content-type':'text/html;charset=utf-8'});
	

	//访问index是主页
    //访问login是登陆页面
    //访问register是注册页面
    //访问product是商品页面
    if (url === "/index") {
		resp.end("个人主页");
	}else if (url === "/login") {
		resp.end("登陆页面");
	}else if (url === "/product") {
		resp.end("商品页面");
	}else{
		resp.end("<h1>404</h1> Not Found Page!");
    }
})

//5,给server设置端口号
server.listen(3000,function(){
	console.log("服务区启动成功！....");
});


