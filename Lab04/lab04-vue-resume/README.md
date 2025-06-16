# Laboratorio 04 - Vue.js Resume

## 📋 Descripción
Aplicación de CV profesional desarrollada con Vue.js 3, Vue Router y TypeScript. Convierte una plantilla HTML estática en una Single Page Application (SPA) con navegación por rutas.

## 🚀 Deploy en vivo
**🌐 Aplicación desplegada:** [https://lab04-vue-resume-luis.surge.sh/about](https://lab04-vue-resume-luis.surge.sh/about)

## 🛠 Tecnologías utilizadas
- **Vue.js 3** - Framework reactivo de JavaScript
- **Vue Router** - Enrutamiento para SPA
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Build tool y servidor de desarrollo
- **Bootstrap 4** - Framework CSS para responsive design
- **Font Awesome** - Iconografía
- **Surge.sh** - Hosting estático

## 📁 Estructura del proyecto
```
lab04-vue-resume/
├── public/
│   ├── vendor/          # Bootstrap, Font Awesome, etc.
│   ├── img/             # Imágenes del perfil
│   └── index.html       # Punto de entrada HTML
├── src/
│   ├── assets/
│   │   └── main.css     # Estilos del resume
│   ├── components/
│   │   └── SideNav.vue  # Navegación lateral
│   ├── router/
│   │   └── index.ts     # Configuración de rutas
│   ├── views/
│   │   ├── About.vue    # Sección: Acerca de
│   │   ├── Experience.vue # Sección: Experiencia
│   │   ├── Education.vue  # Sección: Educación
│   │   ├── Skills.vue     # Sección: Habilidades
│   │   ├── Interests.vue  # Sección: Intereses
│   │   └── Awards.vue     # Sección: Premios
│   ├── App.vue          # Componente raíz
│   ├── main.ts          # Punto de entrada de la aplicación
│   └── vue-shim.d.ts    # Declaraciones de tipos TypeScript
├── package.json
├── vite.config.ts
└── README.md
```

## ⚙️ Instalación y configuración

### Prerrequisitos
- Node.js 16+ instalado
- npm o yarn como gestor de paquetes

### Clonar e instalar dependencias
```bash
# Navegar al directorio del proyecto
cd lab04-vue-resume

# Instalar dependencias
npm install
```

## 🚀 Comandos esenciales

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

## 🌐 Deploy en Surge.sh - Paso a paso completo

### IMPORTANTE: Hacer esto cuando tu aplicación esté funcionando en desarrollo

### Paso 1: Compilar tu aplicación
```bash
npm run build
```
**¿Qué hace esto?** Crea una carpeta `dist/` con tu aplicación optimizada para producción.

### Paso 2: Instalar Surge (solo la primera vez)
```bash
npm install -g surge
```

### Paso 3: Preparar archivos para Vue Router
```bash
cp dist/index.html dist/200.html
```
**¿Por qué?** Vue Router necesita esto para que las rutas funcionen en producción.

### Paso 4: Iniciar deploy
```bash
surge dist/
```

### Paso 5: Crear cuenta o login (primera vez)
Verás algo como:
```
Welcome to surge! (surge.sh)
Login or create surge account by entering email & password.
       email: 
```

**Qué hacer:**
1. **Escribe tu email** (cualquier email válido)
2. **Presiona Enter**
3. **Escribe una contraseña** (no la verás mientras escribes)
4. **Presiona Enter**

### Paso 6: Confirmar proyecto y dominio
Verás algo como:
```
Running as tu-email@gmail.com (Student)
     project: dist/
      domain: random-name.surge.sh
```

**Opciones:**
- **Opción A:** Presiona **Enter** para aceptar el dominio sugerido
- **Opción B:** Escribe tu propio dominio: `lab04-tu-nombre.surge.sh`

### Paso 7: ¡Listo!
Verás:
```
Success! - Published to tu-dominio.surge.sh
```

**¡Tu aplicación ya está en internet!** 🎉

## 📚 Funcionalidades implementadas

### ✅ Navegación SPA
- Rutas independientes para cada sección
- Navegación sin recarga de página
- URLs amigables (/about, /experience, etc.)

### ✅ Estado activo del menú
- Clase `active` automática en el enlace actual
- Estilos visuales para indicar sección activa

### ✅ Responsive Design
- Diseño adaptativo usando Bootstrap
- Navegación lateral colapsable en móviles

### ✅ Componentes Vue
- Separación clara entre componentes y vistas
- Reutilización del componente SideNav
- Estructura modular y mantenible

## 🎯 Objetivos del laboratorio cumplidos

- ✅ Separar secciones HTML en rutas Vue independientes
- ✅ Implementar navegación activa en menú lateral
- ✅ Convertir template estático en SPA funcional
- ✅ Deploy exitoso en plataforma web

---

**Desarrollado por:** Luis Jimenez 
**Curso:** Diseño de Aplicaciones Web 
**Fecha:** Junio 2025