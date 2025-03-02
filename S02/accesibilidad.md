# Investigación sobre Accesibilidad Web

## ¿Qué es la accesibilidad web?

La accesibilidad web se refiere al diseño y desarrollo de sitios web, herramientas y tecnologías que permiten que personas con discapacidades puedan percibir, entender, navegar, interactuar y contribuir a la web. La accesibilidad abarca todas las discapacidades que afectan el acceso a la web, incluyendo:

- Discapacidades visuales (ceguera, baja visión, daltonismo)
- Discapacidades auditivas (sordera, hipoacusia)
- Discapacidades motoras (dificultad para usar el ratón, tiempo de respuesta lento)
- Discapacidades cognitivas (dificultades de aprendizaje, discapacidad intelectual)

## ¿Por qué es importante la accesibilidad web?

La accesibilidad web es importante por múltiples razones:

1. **Inclusión social**: La web es un recurso cada vez más importante en muchos aspectos de la vida como educación, empleo, comercio, salud, recreación y participación cívica. Garantizar su accesibilidad proporciona igualdad de oportunidades.

2. **Aspecto legal**: En muchos países existen leyes y regulaciones que obligan a que los sitios web sean accesibles. Por ejemplo, en Estados Unidos (ADA), Unión Europea (Directiva de Accesibilidad Web) y España (Real Decreto 1112/2018).

3. **Alcance de audiencia más amplio**: Un sitio web accesible puede alcanzar a más usuarios, incluidas personas mayores y usuarios con dispositivos limitados.

4. **Mejora SEO**: Muchas prácticas de accesibilidad también mejoran el posicionamiento en buscadores.

5. **Mejor experiencia de usuario para todos**: Las mejoras de accesibilidad a menudo benefician a todos los usuarios, no solo a aquellos con discapacidades.

## ¿Cuáles son los estándares de accesibilidad web?

Los principales estándares de accesibilidad web son:

### WCAG (Web Content Accessibility Guidelines)

Desarrollado por el W3C a través de su iniciativa de accesibilidad web (WAI), las WCAG son el estándar internacional más reconocido. Actualmente, la versión más reciente es WCAG 2.1 (con WCAG 2.2 en desarrollo).

Las WCAG se organizan en torno a 4 principios fundamentales (POUR):

1. **Perceptible**: La información y los componentes de la interfaz de usuario deben presentarse de manera que los usuarios puedan percibirlos.

2. **Operable**: Los componentes de la interfaz y la navegación deben ser operables.

3. **Comprensible**: La información y el manejo de la interfaz de usuario deben ser comprensibles.

4. **Robusto**: El contenido debe ser suficientemente robusto para que pueda ser interpretado por una amplia variedad de agentes de usuario, incluidas las tecnologías de asistencia.

Cada principio tiene pautas específicas con criterios de conformidad en tres niveles:
- **Nivel A**: Nivel mínimo de accesibilidad
- **Nivel AA**: Elimina barreras importantes; nivel requerido por la mayoría de las regulaciones
- **Nivel AAA**: El nivel más alto de accesibilidad

### ARIA (Accessible Rich Internet Applications)

ARIA es una especificación del W3C que proporciona atributos adicionales para mejorar la accesibilidad de contenido dinámico y controles avanzados de interfaz de usuario desarrollados con HTML, JavaScript y tecnologías relacionadas.

## Análisis de elementos HTML desde la perspectiva de accesibilidad

Basándome en la tarea S01-Tarea 03, analizaré los elementos HTML utilizados y las consideraciones de accesibilidad para cada uno:

### 1. Elemento `<header>`

**Recomendaciones de accesibilidad**:
- Proporciona estructura semántica que ayuda a los lectores de pantalla a identificar la cabecera de la página.
- Debe contener elementos de encabezado (`<h1>-<h6>`) para proporcionar estructura jerárquica.
- El uso adecuado mejora la navegación por teclado y con tecnologías asistivas.

**Limitaciones**:
- Si se utilizan múltiples elementos `<header>` en una página, es importante diferenciarlos con roles ARIA apropiados o encabezados claros.

### 2. Elemento `<nav>`

**Recomendaciones de accesibilidad**:
- Identifica explícitamente la sección de navegación principal, lo cual es de gran ayuda para tecnologías asistivas.
- Debe ser navegable con teclado (usando la tecla Tab).
- Considerar añadir `aria-current="page"` al enlace de la página actual.
- Puede ser útil agregar el atributo `aria-label` para identificar el propósito de navegación cuando hay múltiples menús.

**Limitaciones**:
- Si existen múltiples elementos `<nav>`, deben diferenciarse con atributos como `aria-label` (ej: "navegación principal", "navegación secundaria").

### 3. Elemento `<article>`

**Recomendaciones de accesibilidad**:
- Representa contenido independiente que podría distribuirse o reutilizarse por separado.
- Debe tener un encabezado claro (generalmente un `<h1>-<h6>`) para identificar su contenido.
- Ayuda a los lectores de pantalla a identificar y navegar por bloques de contenido.

**Limitaciones**:
- No es suficiente con solo usar la etiqueta; necesita estructura interna adecuada.

### 4. Elemento `<section>`

**Recomendaciones de accesibilidad**:
- Debe tener un encabezado que identifique claramente su contenido.
- Ayuda a crear una estructura jerárquica significativa en la página.
- Facilita la navegación con lectores de pantalla cuando se utilizan encabezados adecuados.

**Limitaciones**:
- No proporciona beneficios significativos de accesibilidad si no contiene un encabezado claro.
- A veces se usa incorrectamente cuando `<div>` sería más apropiado para agrupaciones sin valor semántico.

### 5. Elemento `<blockquote>`

**Recomendaciones de accesibilidad**:
- Identifica semánticamente un bloque de contenido citado, lo que proporciona contexto adicional para tecnologías asistivas.
- Considerar usar el atributo `cite` para proporcionar la URL de la fuente original.

**Limitaciones**:
- No debe usarse simplemente para lograr sangría o efectos visuales; su propósito es semántico.

### 6. Elemento `<strong>`

**Recomendaciones de accesibilidad**:
- Denota texto de gran importancia o urgencia.
- Los lectores de pantalla pueden cambiar el tono de voz para enfatizar este contenido.
- Proporciona significado semántico más allá del formato visual.

**Limitaciones**:
- No debe usarse solo por efectos visuales (para eso es mejor usar CSS).
- El uso excesivo puede disminuir su efectividad.

### 7. Elemento `<em>`

**Recomendaciones de accesibilidad**:
- Indica énfasis en el texto que cambia sutilmente el significado de la oración.
- Los lectores de pantalla pueden cambiar el tono para comunicar este énfasis.
- Proporciona valor semántico, no solo visual.

**Limitaciones**:
- Similar a `<strong>`, no debe usarse solo para fines de estilo.

### 8. Elemento `<img>`

**Recomendaciones de accesibilidad**:
- **CRÍTICO**: Siempre debe incluir el atributo `alt` con texto alternativo descriptivo.
- Para imágenes decorativas, usar `alt=""` (vacío) para que los lectores de pantalla las ignoren.
- Para imágenes complejas, considerar descripciones largas (`longdesc`) o texto explicativo cercano.
- Las imágenes que transmiten información deben tener un contraste adecuado.

**Limitaciones**:
- Sin texto alternativo adecuado, la imagen es completamente inaccesible para personas que usan lectores de pantalla.
- Las imágenes con texto incrustado presentan problemas para traducción y escalado.

### 9. Elemento `<table>`

**Recomendaciones de accesibilidad**:
- Debe usarse solo para datos tabulares, no para layout.
- Incluir elementos `<caption>` para describir el propósito de la tabla.
- Usar elementos `<th>` con atributo `scope` para encabezados de fila/columna.
- Para tablas complejas, usar atributos `headers` e `id` para asociar celdas de datos con encabezados.
- Considerar añadir un resumen con `aria-describedby` para tablas complejas.

**Limitaciones**:
- Las tablas complejas pueden ser difíciles de navegar con lectores de pantalla.
- Las tablas responsivas requieren consideraciones especiales para mantener la accesibilidad en dispositivos móviles.

### 10. Elemento `<form>`

**Recomendaciones de accesibilidad**:
- Cada control de formulario debe tener una etiqueta `<label>` asociada explícitamente usando `for` e `id`.
- Agrupar controles relacionados con `<fieldset>` y `<legend>`.
- Proporcionar mensajes de error claros y accesibles.
- Asegurar que el formulario sea operable completamente mediante teclado.
- Incluir roles ARIA cuando sea necesario para componentes personalizados.
- Los campos obligatorios deben indicarse tanto visualmente como para lectores de pantalla (no solo con color).

**Limitaciones**:
- Los formularios sin etiquetas adecuadas son extremadamente difíciles de usar con tecnologías asistivas.
- Los tiempos de expiración de formularios pueden causar problemas para usuarios que necesitan más tiempo.

## Conclusiones

El HTML semántico, como el que se muestra en la tarea S01-Tarea 03, proporciona una base sólida para la accesibilidad web. Sin embargo, la simple utilización de estos elementos no garantiza una accesibilidad completa. Es necesario seguir las pautas específicas para cada elemento y considerar cómo interactúan entre sí para crear una experiencia verdaderamente accesible.

La accesibilidad web debe ser considerada desde las primeras etapas del diseño y desarrollo, no como una característica adicional. Adoptando un enfoque de "diseño para todos", no solo se cumple con obligaciones legales, sino que se crea una web más inclusiva y usable para todas las personas, independientemente de sus capacidades.