const Koa=require('koa');
const router =require('koa-router')();
const app=new Koa();

//app.use(require('./routes').routes());

// app.use((ctx,next)=>{
//     const start=Date.now();
//     return next().then(()=>{
//         const ms=Date.now()-start;
//         ctx.body=`${ctx.method} ${ctx.url} - ${ms}ms`;
//         console.log(req.host);
//     })
// });
app.use((ctx,next)=>{
    return next().then(()=>{
        console.log(ctx.method,ctx.url);
    })
});
router.get('/hello/:name',(ctx,next)=>{
    var name=ctx.params.name;
    ctx.body=`<h1>Hello,${name}</h1>`

});
router.get('/',(ctx,next)=>{
    ctx.body=`<h1>Index</h1>`
});

// app.use((ctx,next)=>{
//     if(ctx.path=='/'){
//         ctx.body='hello  this is index';
//     }else if(ctx.path=='/test'){
//         ctx.body='hello  this is test';
//     }
//
// });

app.on('error',function (err,text) {
    log.error(err,text)
});
app.use(router.routes());
app.listen(3000);
app.listen(3001);

