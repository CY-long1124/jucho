const jwt=require("jwt-simple");//这个模块是要安装的
const key="&&"   //生成token需要的令牌
module.exports={
	decode(token){//解密
		try{
			const info=jwt.dacode(token,key);
			if(info.lastTime<Date.now){//过期了
				return {
					ok:-1,
					msg:"过期了"
				}
			}else{//没过期
				return {
					ok:1,
					msg:"解密成功",
					info
				}
			}
		}catch(err){
			return {
				ok:-1,
				mag:"解析失败"
			}
		}
	},
	encode(adminName){//加密
		return jwt.encode({
			adminName,
			lastTime:Date.now()+(10*60*1000)//过期时间
		},key)
	}
}
// encode(123456);

