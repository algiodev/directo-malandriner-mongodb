## Intro

API con Node.js hiper sencilla para poner en contexto la introducción a MongoDB, creada para la comunidad de danielprimo.io. Se trata de un CRUD básico con dos entidades para la gestión de una colección de videojuegos.

## Endpoints

Las rutas para las llamadas están definidas en el fichero `routes/index.js`, y todas las llamdas van montadas sobre `/api/v1/`.

## Instalación y arranque

Es necesario definir la cadena de conexión a la DB en el fichero `.env_example` y renombrarlo a `.env`. La variable de entorno `NODE_ENV` define si se usará la conexión a MongoDB local, en caso de valer `development` o a MongoAtlas en caso de cualquier otro valor.

Instalar con `npm install` (vaya sorpresa) y arrancar con `node app` o `nodemon app`.
