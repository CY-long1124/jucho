const proxy =require("http-proxy-middleware");
module.exports = function (app) {
    app.use(proxy("/jucoo",{
        target:"https://api.juooo.com",
        changeOrigin:true,
        pathRewrite:{
            "^/jucoo":""
        }
    }));

    app.use(proxy("/juco",{
        target:"https://m.juooo.com",
        //target:"http://127.0.0.1",
        changeOrigin:true,
        pathRewrite:{
            "^/juco":""
        }
    }))
<<<<<<< HEAD
};
=======
};


>>>>>>> 9637c57866dd04d965c16d589a549ca760f284fe
