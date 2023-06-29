var exp=require('express');
var app=exp();
app.get('/greet',function(req,res){
res.send("<h1>welcome to wb app</h1>")
})

app.listen(9000,function(){
    console.log("server 9000 started");
})