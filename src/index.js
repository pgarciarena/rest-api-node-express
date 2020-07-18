const app = require ('./server/server');

/* STARTING THE SERVER */
app.listen( app.get('port'), () =>{
  console.log(`Server on port ${app.get('port')}`);
});