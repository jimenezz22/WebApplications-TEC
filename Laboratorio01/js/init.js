// Inicialización y configuración de Reveal.js

// Más información sobre opciones en: https://revealjs.com/config/
Reveal.initialize({
    // Opciones de presentación
    width: 1200,
    height: 700,
    margin: 0.1,
    minScale: 0.2,
    maxScale: 2.0,
  
    // Controles de navegación
    controls: true,
    progress: true,
    history: true,
    center: true,
    
    // Transiciones
    transition: 'slide', // none/fade/slide/convex/concave/zoom
    transitionSpeed: 'default', // default/fast/slow
  
    // Comportamiento
    mouseWheel: false,
    hideInactiveCursor: true,
    hideCursorTime: 3000,
  
    // Plugins
    plugins: [
      RevealMarkdown,
      RevealHighlight,
      RevealNotes,
      RevealZoom
    ],
  
    // Configuración adicional
    keyboard: {
      // Teclas personalizadas (opcional)
      // 'KeyB': () => { /* función personalizada */ }
    },
  
    // Personalización de la barra de progreso
    progressBarHeight: 3,
    
    // Número de slides a pre-cargar
    preloadIframes: true,
    previewLinks: false,
  
    // Ajustes de vista móvil
    embedded: false,
    touch: true,
    
    // Opciones de impresión/PDF (accede a ?print-pdf en la URL)
    // Ver: https://revealjs.com/pdf-export/
    pdfSeparateFragments: false,
  });
  
  // Registrar eventos (opcional)
  Reveal.on('slidechanged', event => {
    // Hacer algo cuando cambia de slide
    // console.log(`Slide cambiado: ${event.indexh}/${event.indexv}`);
  });
  
  // Configuración para mostrar el número de slide si se presiona 'c'
  document.addEventListener('keypress', function(event) {
    if (event.key === 'c') {
      let indices = Reveal.getIndices();
      alert(`Estás en el slide: Horizontal: ${indices.h}, Vertical: ${indices.v}`);
    }
  });