Instrucciones para Ejecutar el Proyecto
Requisitos Previos
Asegúrate de tener instalado lo siguiente en tu máquina:

Node.js (versión 14 o superior)
npm (incluido con Node.js)

Pasos para Ejecutar

1. Clona el repositorio:
   git clone <URL-del-repositorio>
   cd movie-explorer

2. Instala las dependencias:
   npm install

3. Inicia la aplicación:
   npm start

4. Abre la aplicación en tu navegador: La aplicación estará disponible en http://localhost:3000.

Instrucciones para Ejecutar las Pruebas
Si el proyecto incluye pruebas, puedes ejecutarlas con el siguiente comando:

npm test

Esto ejecutará las pruebas configuradas en el proyecto y mostrará los resultados en la terminal.

El proyecto está organizado con sus archivos funcionales de la siguiente manera:

movie-explorer/
├── public/ Archivos públicos (HTML, favicon, etc.)
├── src/ Código fuente de la aplicación
│ ├── components/ Componentes reutilizables de React
│ │ ├── MovieList.js Componente para mostrar la lista de películas
│ │ ├── MovieDetail.js Componente para mostrar detalles de una película
│ │ └── Search.js Componente para buscar películas
│ ├── App.js Componente principal de la aplicación
│ ├── App.css Estilos globales de la aplicación
│ └── index.js Punto de entrada de la aplicación
├── package.json Configuración del proyecto y dependencias
└── README.md

Descripción de los Archivos Principales
App.js: Define las rutas principales de la aplicación utilizando React Router.
MovieList.js: Muestra una lista de películas.
MovieDetail.js: Muestra información detallada de una película seleccionada.
Search.js: Permite buscar películas por título.
App.css: Contiene los estilos globales de la aplicación.

API Utilizada
La aplicación utiliza la API de The Movie Database (TMDb) para obtener información sobre películas. Asegúrate de configurar tu clave de API en el código antes de ejecutar el proyecto.
