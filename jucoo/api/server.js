const express = require("express")
const app = express();
const db = require("./module/db")
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post("/login/register",function(req,res){
	// console.log(req)
	db.insertOne("registerList",{
		tel:req.body.tel,
		password:req.body.password,
		addTime:Date.now()
	},function(err,results){
		res.json({
			ok:1,
			msg:"注册成功"
		})
	})
})
app.post("/login/login",function(req,res){
	const tel=req.body.tel;
	const password=req.body.password
	console.log(tel,password)
	db.findOne("registerList",{
		tel,
		password
	},function(err,results){
		if(results){
			res.json({
				ok:2,
				msg:"登陆成功",
				tel
			})
		}else{
			res.json({
				ok:-1,
				msg:"未注册",
			})
		}
	})
})
app.listen(80,function(){
	console.log("success")
})