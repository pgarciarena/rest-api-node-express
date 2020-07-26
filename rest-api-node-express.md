# VERBOS

## GET: 
para obtener datos. ejemplo: get -> /api/movies (obtener las películas)

## POST: 
para crear nuevos datos. ejemplo: post -> /api/movies (agregar una nueva película)

## PUT: 
para actualizar datos. ejemplo: put -> /api/movies/130 (actualizar la película con id 130)

## DELETE: 
para eliminar datos. ejemplo: delete -> /api/movies/130 (eliminar la película con id 130)

-------------------------------------------------------------------------------------------------

`npm init --yes` 
inicializamos nuestro proyecto, crea nuestro package.json con la descripción del proyecto y configuración.

haremos uso de los módulos `express` y `morgan`
### express:
frameword de node que nos permite escribir código del servidor de una manera más simple

### morgan:
módulo que nos permite ver por consola las peticiones que van llegando a nuestro server y nos muestra mensajes
según el parámetro que le pasemos a morgan, nos muestra mensajes más extensos o cortos.
los posibles parámetros son: 'combined', 'common', 'dev', 'short', 'tiny'
ejemplo: `app.use(morgan('dev'));`

para instalarlos: `npm i express morgan`

-------------------------------------------------------------------------------------------------

dentro de la carpeta `/src` tendremos todo el código de nuestra aplicación

`const app = express();`  //nuestra aplicación hará uso del módulo express
`app.use( morgan('dev) )` //le decimos a nuestra app que haga uso de morgan

`app.use( express.json() )` //permite que nuestro servidor reciba datos en formato json

-------------------------------------------------------------------------------------------------

para que no tengamos que andar cortando y reiniciando la ejecución de nuestro servidor, 
usaremos un módulo llamado `nodemon` que reinicia el server por nosotros cada vez que hayan cambios:
`npm i nodemon -D` lo instalamos con dependencias de desarrollo solamente

-------------------------------------------------------------------------------------------------

si las respuestas que enviamos a las rutas que se hacen a nuestro servidor no envían/retornan un html o componente, etc
y envían sólo datos en formato json, entonces, esos datos podemos capturarlos con javascript y utilizarlos luego en nuestro
frontend

-------------------------------------------------------------------------------------------------