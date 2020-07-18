const express = require ('express');
const morgan = require ('morgan');

//manejaremos nuestra app con expresss
const app = express();

/* ---------------------------------------------------------- */
/* SETTINGS */

//usar el puerto por defecto configurado en nuestro servidor de producción, y si no tiene uno configurado que use el 3000
app.set('port', process.env.PORT || 3000);
//formatear los datos json que se retornan (que no queden todos los datos en una sola línea)
app.set('json spaces', 2);

/* ---------------------------------------------------------- */
/* MIDDLEWARES */

//le decimos a nuestra app que haga uso de morgan para mostrar los mensajes de las peticiones. 
//según el parámetro que le pasemos a morgan, nos mostrará diferentes mensajes
app.use( morgan('dev') );

//permitir a nuestro servidor que reciba y entienda datos enviados desde formularios de la manera simple (no extendida)
app.use( express.urlencoded({extended: false}) );

//permitir a nuestro servidor que reciba datos en formato json
app.use( express.json() );

/* ---------------------------------------------------------- */
/* ROUTES */
app.use(require('../routes/home') );

//las siguientes rutas deben empezar con /api/
app.use('/api/', require('../routes/root') );
app.use('/api/', require('../routes/test') );
app.use('/api/', require('../routes/movies') );

/* ---------------------------------------------------------- */

module.exports = app;