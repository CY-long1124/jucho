const proxy =require("http-proxy-middleware");
module.exports = function (app) {
    app.use(proxy("/jucoo",{
        target:"https://api.juooo.com",
        changeOrigin:true,
        pathRewrite:{
            "^/jucoo":""
        }
    }))
    app.use("/juco",proxy({
        target:"https://m.juooo.com",
        changeOrigin:true,
        pathRewrite:{
            "^/juco":""
        }
    }))
};