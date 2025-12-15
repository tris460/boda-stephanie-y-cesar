# 💒 Boda Stephanie & César

Sitio web de invitación digital para la boda de **Stephanie Capilla Rosas** y **César Heredia Pantaleón**.

Una elegante invitación web que incluye todos los detalles importantes de la celebración: fecha, ubicación, código de vestimenta, mesa de regalos y más.

## 🌐 Sitio en Vivo

**URL:** [https://tris460.github.io/boda-stephanie-y-cesar/](https://tris460.github.io/boda-stephanie-y-cesar/)

## ✨ Características

- 📱 **Diseño Responsivo** - Optimizado para móviles y desktop
- 💝 **Mesa de Regalos** - Enlace directo a Liverpool
- 📍 **Ubicación Interactiva** - Detalles del lugar de la ceremonia
- ⏰ **Contador Regresivo** - Cuenta atrás hasta el gran día
- 👗 **Código de Vestimenta** - Información sobre el atuendo
- 📞 **Contacto Directo** - Número de teléfono para consultas
- 🎵 **Música Ambiental** - Reproductor de música integrado

## 🛠️ Tecnologías

- **Angular 20** - Framework principal
- **TypeScript** - Lenguaje de programación
- **SCSS** - Estilos y diseño
- **GitHub Pages** - Hosting y despliegue

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [npm](https://www.npmjs.com/) (incluido con Node.js)
- [Angular CLI](https://angular.io/cli) (opcional, pero recomendado)

```bash
npm install -g @angular/cli
```

## 🚀 Instalación y Desarrollo Local

### 1. Clonar el repositorio

```bash
git clone https://github.com/tris460/boda-stephanie-y-cesar.git
cd boda-stephanie-y-cesar
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar servidor de desarrollo

```bash
npm start
# o alternativamente
ng serve
```

El sitio estará disponible en `http://localhost:4200/`

## 📦 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia el servidor de desarrollo |
| `npm run build` | Construye el proyecto para producción |
| `npm run deploy` | Construye y despliega a GitHub Pages |
| `npm test` | Ejecuta las pruebas unitarias |
| `npm run watch` | Construye en modo desarrollo con watch |

## 🚀 Despliegue

### Despliegue Automático a GitHub Pages

```bash
npm run deploy
```

Este comando:
1. Construye el proyecto en modo producción
2. Configura el `base-href` correcto
3. Despliega automáticamente a GitHub Pages

### Despliegue Manual

```bash
# 1. Construir para producción
npm run build

# 2. Los archivos estarán en dist/wedding-b-y-e/
# Puedes subir estos archivos a cualquier servidor web
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/          # Componentes de la aplicación
│   │   ├── details/         # Sección de detalles de la boda
│   │   ├── location/        # Información de ubicación
│   │   ├── dress-code/      # Código de vestimenta
│   │   ├── registry/        # Mesa de regalos
│   │   ├── contact/         # Información de contacto
│   │   └── footer/          # Pie de página
│   ├── services/            # Servicios (traducción, etc.)
│   └── pipes/               # Pipes personalizados
├── styles.scss              # Estilos globales
└── assets/                  # Recursos estáticos
```

## 🎨 Personalización

### Colores y Estilos

Los colores principales están definidos en `src/styles.scss`:

```scss
:root {
  --color-white: #ffffff;
  --color-silver: #f8f8f8;
  --color-navy: #0f2040;
  --color-black: #333333;
  --font-title: 'Playfair Display', serif;
  --font-text: 'Source Sans Pro', sans-serif;
}
```

### Contenido

Para modificar el contenido, edita los archivos HTML en cada componente:
- `src/app/components/details/details.html` - Detalles de la boda
- `src/app/components/location/location.html` - Ubicación
- `src/app/components/registry/registry.html` - Mesa de regalos

## 📱 Compatibilidad

- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)
- ✅ Dispositivos móviles iOS y Android

## 👥 Desarrollado por

**Beatriz Martínez Pérez**
- 📧 Email: trism460@gmail.com
- 📱 WhatsApp: +52 449 183 9173
- 📘 Facebook: [BettyMtzPerez](https://www.facebook.com/BettyMtzPerez/)

## 📄 Licencia

Este proyecto es privado y está desarrollado específicamente para la boda de Stephanie y César.

---

💕 **¡Nos vemos en la boda!** 💕
