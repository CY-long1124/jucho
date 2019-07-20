const express = require("express")
const app = express();
const db = require("./module/db")
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post("/register",function(req,res){//注册
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
app.post("/login",function(req,res){//登录
	const tel=req.body.tel;
	const password=req.body.password
	// console.log(tel,password)
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

app.post("/buyEticket",function(req,res){//像购物车数据库添加信息
	db.insertOne("buyEticketList",{
		img:req.body.show_img,
		name:req.body.show_name,
		show_id:req.body.show_id,
		price:req.body.show_price,
		addTime:Date.now()
	},function(err,results){
		res.json({
			ok:1,
			msg:"添加成功"
		})
	})
})

app.get("/eticket",function(req,res){//从数据库里拿东西渲染票夹列表
	db.find("buyEticketList",{
		sortObj:{
			addTime:-1
		}
	},function(err,eticketList){
		// console.log(eticketList)
		res.json({
			ok:1,
			msg:"获取成功",
			eticketList
		})
	})
})


app.delete("/eticket/:id",function(req,res){
	const id=req.params.id
	// console.log(id)
	db.deleteOneById("buyEticketList",id,function(err,eticketList){
		res.json({
			ok:1,
			msg:"删除成功",
			eticketList
		})
	})
})
app.listen(80,function(){
	console.log("success")
})