# Webpack Workflow
  Webpack, Babel, Sass & A Template Engine Handlebars

## Este Webpack workflow permite
- Uso de javascript ES6 con Babel.
- Carga y compilar Handlebars a HTML y minificarlo
- Carga y compilar SCSS a CSS y minificarlo
- Carga tipografias /fonts woff, woff2, ttf & eot
- Carga imagenes Gif, jpg y png y minifica el peso
- Carga archivos SVG

## Requerimientos

- NodeJs > v10.x;
- NPM > v6.4 ó yarn > v1.x

## Como usarlo?:

1. Clonar el Proyecto
2. Use ``cd webpack-workflow``
3. ``npm/yarn install``
4. ``npm/yarn start``

## Consideraciones
- La entrada de tus archivos está dentro de la carpeta: `src`
- El archivo webpack.config.js es para configurar webpack.

## Instalar dependencias de node.js
- Instalar dependencias de node.js: `npm/yarn install`

## Scripts creados para dev
- Borra y crea el proyecto en produccion:
  - Se inicia con:  `npx run build'` ó `yarn build`

- Iniciar un servidor local para desarrollo:
  - Se inicia con: `npm start` ó `yarn start`
 
 ## Estructura de la carpeta:

```
├── .babelrc
├── .gitignore
├── .eslintrc.json
├── .browserslistrc
|── yarn.lock
├── package.json
├── README.md
├── webpack
|   └── webpack.config.js
├── node_modules
├── dist
|   ├── static
|   │    ├── fonts
|   │    └── assets
│   ├── css
|   |   └── style.css
│   ├── js
|   |   ├── bundle.js
|   │   └── bundle.js.map
│   └── index.html
│── src
│    ├── partials
│    ├── static
│    │     └── assets
│    |── styles
│    │     ├── _variables.scss
│    │    └── main.scss
│    ├── index.hbs
│    └── app.js
```
## Contributing
Las solicitudes de modificaciones son bienvenidas. Para cambios importantes, abra primero una discusión para discutir qué le gustaría cambiar.

Asegúrese de actualizar las pruebas según corresponda.

## License
[MIT](https://choosealicense.com/licenses/mit/)