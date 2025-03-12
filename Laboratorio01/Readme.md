# Mi Presentación con Reveal.js

Esta es una presentación básica creada con Reveal.js que puedes personalizar según tus necesidades.

## Requisitos

- Node.js y npm instalados en tu sistema

## Instalación

1. Clona o descarga este repositorio
2. Entra al directorio del proyecto
3. Instala las dependencias:

```bash
npm install
```

## Uso


```bash
npm start
```

Para ver la presentación en modo desarrollo:

```bash
npx serve
```

Luego abre tu navegador en `http://localhost:3000`

## Estructura del proyecto

```
Laboratorio01/
├── css/
│   └── styles.css       # Estilos personalizados
├── js/
│   └── init.js          # Configuración de Reveal.js
├── images/              # Carpeta para tus imágenes
│   └── ... 
├── index.html           # Presentación principal
├── package.json         # Dependencias del proyecto
└── README.md            # Este archivo
```

## Cómo editar la presentación

### Añadir nuevos slides

Para añadir un nuevo slide, agrega una nueva sección en `index.html`:

```html
<section>
  <h2>Título del Slide</h2>
  <p>Contenido del slide</p>
</section>
```

### Slides verticales

Para crear slides verticales anidados, envuelve varias secciones en una sección:

```html
<section>
  <section>Slide principal</section>
  <section>Slide vertical 1</section>
  <section>Slide vertical 2</section>
</section>
```

### Fragmentos (aparición progresiva)

Para que los elementos aparezcan progresivamente:

```html
<ul>
  <li class="fragment">Aparece primero</li>
  <li class="fragment">Aparece segundo</li>
</ul>
```

### Fondos personalizados

Para cambiar el fondo de un slide:

```html
<section data-background="#ff0000">
  <h2>Slide con fondo rojo</h2>
</section>
```

### Notas del presentador

Para añadir notas que solo tú verás (presiona 'S' durante la presentación):

```html
<section>
  <h2>Mi slide</h2>
  <p>Contenido visible</p>
  <aside class="notes">
    Estas notas solo las ves tú
  </aside>
</section>
```

## Exportar a PDF

Para generar un PDF de tu presentación:

1. Abre la presentación con `?print-pdf` al final de la URL 
   (por ejemplo: `http://localhost:3000/?print-pdf`)
2. Utiliza la función de imprimir del navegador (Ctrl+P / Cmd+P)
3. Cambia el destino a "Guardar como PDF"
4. Configura los márgenes a "Ninguno"
5. Habilita los "Gráficos de fondo"
6. Guarda el PDF

## Más recursos

- [Documentación oficial de Reveal.js](https://revealjs.com/)
- [Ejemplos de Reveal.js](https://revealjs.com/demo/)
- [GitHub de Reveal.js](https://github.com/hakimel/reveal.js/)