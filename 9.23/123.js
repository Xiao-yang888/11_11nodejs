var obj = {
	name : "zengyang",
	age : "20"
}
//转字符串
var jsonStr = JSON.stringify(obj);

//JSON字符串：一种特殊格式的字符串，里面以key-value格式
console.log("字符串" + jsonStr);
console.log(obj);

//字符串转JSON对象 == js对象
var jsonObj = JSON.parse(jsonStr);
console.log("对象" + jsonObj.name);

//目的：在js中许多对象不能直接通过网络传输，
//网络传输只能是字节流与字符流（二进制与字符串）
//js对象转换成的字符串叫json字符串，jion字符串可以转换为js对象==jsonduix