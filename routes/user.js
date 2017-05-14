var route=require('koa-router')();
route.get('/list',function (ctx,next) {
    ctx.body='this is listpage'
});
module.exports=route;
