var express=require('express');
var bodyParser = require('body-parser');
var   mysql      = require('mysql');
var app=express();
app.set('view engine','ejs');
app.use(bodyParser()); 
app.get('/',function(req,res){
	res.render('table1');
});
app.post('/', function(req, res) {
	var d1=req.body.d1;                   
	var d2=req.body.d2;
	var t1=req.body.t1;
	var t2=req.body.t2;
    res.send("starting date"+d1+"time:"+t1+"ending date"+d2+"time"+t2);       
});
app.get('/table2',function(req,res){
	res.render('table2');
});
app.get('/table3',function(req,res){
	res.render('table3');
});
app.get('/table4',function(req,res){
	res.render('table4');
});
app.listen(3004,function(){
	console.log("listening to port ");
});