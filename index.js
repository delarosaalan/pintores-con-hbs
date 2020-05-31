//importamos los paquetes que requerimos
const express=require('express');
const hbs=require('hbs');

//creamos la aplicacion
const app= express();

//definimos el motor de plantillas 
//node vamos a emplear MVC )vista vamos a utilizar hbs
app.set('view engine', 'hbs');

//generamos los partials
hbs.registerPartials(__dirname+ '/views/partials')

// generamos el sitio estatico
app.use(express.static(__dirname+'/public'))

//configurar mis rutas
app.get('/', (req,res)=>{
    res.render('index');
})

app.get('/Picasso', (req,res)=>{
    res.render('pintor1'); 
})

app.get('/Vangogh', (req,res)=>{
    res.render('pintor2');
})

app.get('/Monet', (req,res)=>{
    res.render('pintor3');
})

app.get('/Davinci', (req,res)=>{
    res.render('pintor4');
})

//arrancamos el servidor web
app.listen(3000, ()=>{
console.log('escuchando el puerto 3000')
})