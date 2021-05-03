// import express and cors 
const cors = require('cors');
const express = require('express');

//create the express app with colors enabled
const app = express();
app.use(cors());
app.options('*', cors());

//define port 

const port = 8085;

// define root controller (GET)
app.get('/' , (req, res, next) => {
	res.send('welcome to my api...');
});

// define GET controller for triangulo


app.get('/suma', (req, res, next) => {
	var n1 = req.query.n1; //get query
	var n2 = req.query.n2;
	

	var resul = parseFloat(n1) + parseFloat(n2);
	var objResult = {
		resultado: resul
	}
	res.send(objResult);
});

app.get('/resta', (req, res, next) => {
	var n1 = req.query.n1; //get query
	var n2 = req.query.n2;
	

	var resul = parseFloat(n1) - parseFloat(n2);
	var objResult = {
		resultado: resul
	}
	res.send(objResult);
});

app.get('/multiplicacion', (req, res, next) => {
	var n1 = req.query.n1; //get query
	var n2 = req.query.n2;
	

	var resul = parseFloat(n1) * parseFloat(n2);
	var objResult = {
		resultado: resul
	}
	res.send(objResult);
});

app.get('/division', (req, res, next) => {
	var n1 = req.query.n1; //get query
	var n2 = req.query.n2;
	

	var resul = parseFloat(n1) / parseFloat(n2);
	var objResult = {
		resultado: resul
	}
	res.send(objResult);
});

app.get('/potencia', (req, res, next) => {
	var n1 = req.query.n1; //get query
	var n2 = req.query.n2;
	

	var resul = Math.pow(parseFloat(n1), parseFloat(n2));
	console.log(resul);
	var objResult = {
		resultado: resul
	}
	res.send(objResult);
});


app.get('/sin', (req, res, next) => {

	var n1 = req.query.n1; //get query
	
	var resul = Math.sin( parseFloat( n1 ) );
	console.log(resul);
	var objResult = {
		resultado: resul
	}
	res.send(objResult);
});


app.get('/cos', (req, res, next) => {


	var n1 = req.query.n1; //get query

	var resul = Math.cos( parseFloat( n1 ) );
	console.log(resul);
	var objResult = {
		resultado: resul
	}
	res.send(objResult);
});


app.get('/tan', (req, res, next) => {


	var n1 = req.query.n1; //get query
	
	var resul = Math.tan(parseFloat(n1));
	console.log(resul);
	var objResult = {
		resultado: resul
	}
	res.send(objResult);
});

app.listen(port, () => 
	console.log('listening on port ' + port)
);
