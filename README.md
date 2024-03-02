#CrudNodeJs 🚀
¡Hola, mundo! 🌍 Hoy les traigo un pedacito de lo que ha sido mi aventura codificando un CRUD con Node.js y PostgreSQL. Es un ejemplo de arquitectura limpia y escalable que puede servir de punto de partida para cualquier alma valiente en el vasto universo del backend.

#Comenzando 🏁
Inicié este proyecto desde cero, creando una carpeta que sería el nuevo hogar de mi código:


$ mkdir node-postgresql
$ cd node-postgresql
Una vez establecidos los cimientos, era hora de darle vida con npm init -y, creando así un package.json predeterminado, que luego he personalizado para adaptarse a las necesidades de la aplicación.

Dependencias 📦
Como un chef selecciona sus ingredientes, elegí las siguientes dependencias para sazonar mi proyecto:

express: el framework web sin el cual nuestro servidor estaría perdido en el espacio.
sequelize: el ORM que nos ayuda a mantener nuestras relaciones con PostgreSQL en armonía.
pg y pg-hstore: para conectar con la base de datos y entender su dialecto.
nodemon: para que nuestro servidor se regenere como un fénix cada vez que hacemos un cambio.
dotenv: para guardar secretos que no queremos que se filtren al espacio exterior.
cors: para que nuestro servidor pueda comunicarse sin problemas con otros planetas.
Aquí un comando que lo hace todo por ti:


$ npm install express sequelize pg pg-hstore nodemon dotenv cors --save
Estructura 🏗️
Diseñé la estructura del proyecto pensando en la claridad y la facilidad de mantenimiento. Aquí un vistazo rápido:

src: El corazón de nuestro proyecto, donde todo cobra vida.
app.js: Nuestro querido servidor Express que inicia la fiesta.
config: Archivos de configuración que son como los ajustes de nuestra nave espacial.
controllers: Controladores que dirigen el tráfico de datos como expertos pilotos.
models: Modelos de Sequelize que definen la estructura de nuestra base de datos.
routes: Rutas que son como las coordenadas intergalácticas para llegar a los datos.
services: Servicios que hacen el trabajo pesado, como robots bien programados.


Empezando 🚀
Para levantar el servidor y ver la magia suceder, solo necesitas un comando:


$ npm run dev