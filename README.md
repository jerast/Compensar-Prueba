# Compensar - Prueba Técnica

- Autor: José Rodríguez
- Rol: Desarrollador Frontend
- Duración estimada: 1 día
- Framework principal: React con Vite

---

## Descripción del proyecto

Este repositorio contiene el desarrollo para la prueba técnica de frontend propuesta por la Célula de Diseño y Desarrollo - Gerencia de Innovación.
El objetivo principal es implementar la interfaz a partir del diseño en Figma, consumir la API pública indicada y asegurar una experiencia funcional tanto en desktop como en mobile.

### Objetivo técnico

- Reproducir fielmente el diseño proporcionado.
- Desarrollar una versión responsive coherente con el diseño base.
- Consumir los endpoints del API y manejar estados, errores y carga correctamente.
- Mantener un código limpio, modular y legible.
- Documentar el proyecto para facilitar su instalación y ejecución.

### Stack tecnológico

- React + Vite — framework base del proyecto
- React Router DOM — manejo de rutas
- Tailwind CSS — estilos y diseño responsivo
- Axios — consumo de la API
- Zustand — manejo de estado global
- ESLint + Prettier — control de calidad de código
- Git — control de versiones y flujo por ramas
- Vercel — despliegue de la aplicación

### Instalación y ejecución

1. Clonar el repositorio

```bash
git clone https://github.com/jerast/Compensar-Prueba.git
cd Compensar-Prueba
```

2. Instalar dependencias

```bash
# usando pnpm (recomendado si está en el proyecto)
pnpm install

# o npm
npm install

# o yarn
yarn install
```

3. Ejecutar en desarrollo

```bash
# usando pnpm
pnpm dev
```

4. Construir para producción

```bash
pnpm build
```

5. Vista previa del build

```bash
pnpm run preview
```

## Arquitectura

Estructura principal del proyecto (resumen):

- `src/` — código fuente
	- `assets/` — imágenes, íconos y estilos
	- `components/` — componentes reutilizables (Header, LoginForm, SignupForm, Socials, etc.)
	- `config/` — Configuraciones generales (en este caso, configuración de Axios)
	- `pages/` — vistas/páginas (Login, Signup, Survey, etc.)
	- `services/` — llamadas a API y lógica de cliente (`auth.service.ts`, `surveyServices.ts`)
	- `store/` — estado global con Zustand (`app.store.ts`)
	- `routes/` — definición de rutas de la aplicación

Principios y decisiones de diseño:
- API-first: las llamadas externas están centralizadas en `services/` y usan Axios.
- Estado global, ligero y persistente con Zustand para mantener información del usuario y encuesta.
- Componentización: componentes pequeños y enfocados para facilitar pruebas y reutilización.

## Funcionalidades

- Registro de usuario (signup) mediante el endpoint público `/register`.
- Inicio de sesión (login) mediante `/login` — persiste usuario en `zustand`.
- Completado y envío de encuesta (`/survey`) con envío a la API.
- Enrutamiento con `react-router-dom` entre las pantallas principales (login, signup, encuesta).
- Persistencia local (localStorage) para sesión mediante `zustand` + `persist`.
- Formularios con validaciones básicas en el cliente (campos requeridos, confirmación de contraseña en registro).

## Notas de despliegue

La aplicación está desplegada en Vercel (entorno público). Enlace de despliegue:

https://compensar-prueba-git-develop-jerasts-projects.vercel.app?_vercel_share=B5lj3nvrp0aqsoS6nOd0HCaqNVVvlU5g

Notas:
- Asegúrate de configurar variables de entorno en Vercel si cambias el `VITE_API_URL` o usas un entorno distinto.
- Para actualizar el despliegue: merge a la rama `main`.
