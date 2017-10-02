# React: Fundamentos

El objetivo de este pequeño proyecto es consolidar los conocimientos adquiridos en los fundamentos de React.

Este proyecto emplea conceptos tales como:

* Components
* State
* Props
* ES6
* Lifecycle (componentDidMount)
* Handles (manejadores de eventos)
* React-router
* Envío de propiedaes entre rutas, así como uso de Templates
* Firebase (manejo de datos en tiempo real)
* Filtrar arreglos

### Instalación

Para poder ver el proyecto hay 2 opciones:

1. Clonar el repo > ejecutar `npm install` para instalar las dependecias > ejecutar `npm start` para verlo en localhost:3000
2. Ingresar a la siguiente link [FullPelis](https://alxchoy.github.io/pelis/)

### Descripción

El proyecto es una pequeña librería o catalogo de películas, las cuales están almacenadas en firebase. El home muestra todas las películas y un input de busqueda
para poder encontrar una película específica, además puedes darle like o dislike a cualquier película lo cual es rankeado dentro de un top 5 como las películas
con mayor likes o dislikes. Todo este pequeño sistema de votación es en tiempo real gracias a firebase.

### Detalles

Si desean crear una propia instancia de Firebase para pruebas propias deberán hacer lo siguiente:

1. Crear un archivo firebase.config.js
2. Copiar en ese archivo su propia configuración de firebase, la cual encuentra en su consola de firebase.
3. Crear sus propios items con las siguientes propiedades: id, title, description, img, like, dislike.

![Firebase config](https://github.com/alxchoy/pelis/blob/master/public/img/firebase.jpg)

4. Modificar el archivo router.js a su conveniencia.

Este proyecto se creó con [create-react-app](https://github.com/facebookincubator/create-react-app)

Nota: Se uso sólo CSS y no otro preprocesador como SASS debido a que el proyecto no presenta mucha complejidad en el manejo de estilos.


