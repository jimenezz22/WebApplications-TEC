# Laboratorio 02 – Estrategias de estilos en React

Este documento recoge las diferentes formas de aplicar estilos a componentes de React, describiendo sus características, ventajas, desventajas y una perspectiva personal de uso.

---

## 1. CSS tradicional

### Descripción

El CSS tradicional utiliza archivos con extensión `.css` que se importan directamente en los componentes o en el punto de entrada de la aplicación. Cada regla se aplica globalmente, y la cascada y especificidad del navegador determinan el estilo final.

### Ventajas

* **Simplicidad y ubiquidad**: No requiere configuración adicional y funciona en cualquier proyecto web.
* **Rendimiento**: Estilos procesados una sola vez por el navegador, sin overhead en runtime.
* **Herramientas maduras**: Amplio ecosistema de linters, preprocesadores (Sass, Less) y frameworks (Bootstrap, Bulma).

### Desventajas

* **Ámbito global**: Posibles colisiones de nombres de clase y dificultades para mantener estilos en proyectos grandes.
* **Baja modularidad**: Difícil aislar estilos por componente, lo que puede derivar en dependencias implícitas entre módulos.
* **Escalabilidad limitada**: La gestión de selectores muy específicos o la organización de ficheros puede complicarse.

### Perspectiva personal

Para proyectos pequeños o prototipos rápidos, el CSS tradicional resulta eficiente y suficiente. Sin embargo, en aplicaciones de mayor escala, prefiero enfoques que ofrezcan encapsulamiento y modularidad, reduciendo el riesgo de colisiones.

---

## 2. Inline styles

### Descripción

Los estilos en línea se aplican directamente al elemento React mediante la propiedad `style` como un objeto JavaScript:

```jsx
<div style={{ padding: '1rem', backgroundColor: '#f5f5f5' }}>...</div>
```

### Ventajas

* **Dinamismo**: Permite calcular y cambiar estilos fácilmente desde la lógica de JavaScript.
* **Alcance limitado**: Cada style solo afecta ese elemento en particular, evitando colisiones globales.

### Desventajas

* **Características limitadas**: No admite pseudo-clases (`:hover`, `:focus`), media queries, ni anidamiento nativo.
* **Verboso**: Mezcla lógica de presentación con lógica de negocio, reduciendo la legibilidad.
* **Sin caché de estilos**: Cada render genera un nuevo objeto, lo que puede afectar al rendimiento si no se memoiza.

### Perspectiva personal

Útil para estilos muy puntuales o altamente dinámicos, pero lo considero un recurso de uso puntual. Para estilos complejos o reutilizables, prefiero separar la capa de presentación.

---

## 3. CSS Modules

### Descripción

Los CSS Modules convierten cada archivo `.module.css` en un objeto de clases con nombres únicos generados en build time. Los estilos importados solo aplican al componente que los solicita.

```css
/* Button.module.css */
.button { padding: 1rem; background: #0070f3; }
```

```tsx
import styles from './Button.module.css';
<button className={styles.button}>Click</button>
```

### Ventajas

* **Encapsulamiento**: Evita colisiones de nombres gracias a la generación de identificadores únicos.
* **Mantenimiento**: Facilita la organización de estilos a nivel de componente.
* **Soporte de preprocesadores**: Compatible con Sass, Less y PostCSS.

### Desventajas

* **Configuración**: Requiere soporte en el bundler (webpack, Vite), aunque la mayoría de templates lo incluyen.
* **Verbose**: La sintaxis de importación y uso de `styles.foo` puede resultar algo verbosa para componentes sencillos.

### Perspectiva personal

Es mi opción predilecta en proyectos React + TypeScript, ya que combina encapsulamiento, rendimiento y flexibilidad sin añadir dependencias externas significativas.

---

## 4. Styled-Components

### Descripción

Styled-Components es una librería CSS-in-JS que permite definir componentes React con estilos adjuntos usando template literals:

```tsx
const Button = styled.button`padding: 1rem; background: #0070f3;`;
```

### Ventajas

* **Co-location**: Estilos definidos junto al componente, mejorando la cohesión.
* **Temas y props dinámicas**: Permite alterar estilos en función de props o themes.
* **Auto-prefijo y optimización**: Optimiza y autoprefija CSS en runtime.

### Desventajas

* **Overhead en runtime**: Parsing y generación de clases durante la ejecución puede afectar ligeramente al rendimiento.
* **Curva de aprendizaje**: Requiere conocer la API de la librería y sus patrones.
* **Bundle size**: Añade peso adicional por la dependencia.

### Perspectiva personal

Excelente para componentes altamente dinámicos y con theming complejo. En mi experiencia, la co-location facilita la mantenibilidad, aunque en proyectos de gran escala pondero el impacto en bundle y rendimiento.

---

## 5. Otras herramientas CSS (Tailwind CSS)

### Descripción (Tailwind CSS)

Tailwind CSS es un framework utility-first que permite aplicar estilos usando clases de utilidad directamente en el markup JSX, sin necesidad de escribir reglas CSS personalizadas. A través de su archivo de configuración (`tailwind.config.js`), se pueden definir temas, paletas de colores y espacios de manera centralizada.

### Ventajas

* **Productividad**: Amplio conjunto de clases predefinidas que aceleran el desarrollo de interfaces.
* **Consistencia**: Fomenta un diseño uniforme basado en un sistema de diseño configurado globalmente.
* **Mantenimiento**: Ajustes de estilos globales y temas centralizados, facilitando refactors.
* **Optimización**: Integración con PurgeCSS para eliminar clases no utilizadas y reducir el tamaño del bundle en producción.

### Desventajas

* **Markup verboso**: La acumulación de clases en JSX puede dificultar la lectura si no se extraen componentes o helpers.
* **Curva de aprendizaje**: Memorización de clases de utilidad o dependencia de la documentación.
* **Configuración adicional**: Personalizaciones avanzadas requieren modificar y entender `tailwind.config.js`.

### Perspectiva personal

Trabajo a diario con Tailwind CSS por su rapidez y coherencia visual. Me permite iterar ágilmente en el frontend, manteniendo una estética unificada en todos los componentes. Para mejorar la legibilidad del código, suelo extraer combinaciones frecuentes de clases en componentes reutilizables o usar herramientas como `clsx`.

---

<div style="text-align: center; margin-top: 2rem; color: #888;">Fin del Laboratorio 02</div>
