const express = require ('express');
const morgan = require ('morgan');

//manejaremos nuestra app con expresss
const app = express();


/* ---------------------------------------------------------- */
/* SETTINGS */

//usar el puerto configurado por defecto y si no tiene uno configurado que use el 3000
app.set('port', process.env.PORT || 3000);
//que los datos json retornadas se formateen a 2 espacios
app.set('json spaces', 2);


/* ---------------------------------------------------------- */
/* MIDDLEWARES */

//con morgan podemos ver mensajes en consola
//hay diferentes formatos de mensajes, nosotros usaremos 'dev'
app.use( morgan('dev') );

//permitir a nuestro servidor que reciba y entienda datos enviados desde formularios de la manera simple (no extendida)
app.use( express.urlencoded({extended: false}) );

//permitir a nuestro servidor que reciba datos en formato json
app.use( express.json() );


/* ---------------------------------------------------------- */
/* ROUTES */

app.use(require('../routes/home') );

//las siguientes rutas deben empezar con /api/
app.use('/api/', require('../routes/root') ); // sería: /api
app.use('/api/', require('../routes/test') ); // sería: /api/test
app.use('/api/', require('../routes/movies') ); //sería: /api/movies


/* ---------------------------------------------------------- */
/* STARTING THE SERVER */
app.listen( app.get('port'), () =>{
  console.log(`Server on port ${app.get('port')}`);
});

module.exports = app;