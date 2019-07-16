const proxy =require("http-proxy-middleware");
module.exports = function (app) {
    app.use(proxy("/jucoo",{
        target:"https://api.juooo.com",
        changeOrigin:true,
        pathRewrite:{
            "^/jucoo":""
        }
<<<<<<< HEAD
    }));
	app.use(proxy("/juco",{
=======
    })),
    app.use(proxy("/juco",{
        target:"https://m.juooo.com",
        //target:"http://127.0.0.1",
        changeOrigin:true,
        pathRewrite:{
            "^/juco":""
        }
    }))
    app.use("/juco",proxy({
>>>>>>> 52f97760a698c0c4c478060389ae520d9db76d0e
        target:"https://m.juooo.com",
        changeOrigin:true,
        pathRewrite:{
            "^/juco":""
        }
    }))
};


