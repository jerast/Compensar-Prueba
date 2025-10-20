# Compensar - Prueba Técnica

Autor: José Rodríguez
Rol: Desarrollador Frontend
Duración estimada: 3 días
Framework principal: React con Vite

---

## Descripción del proyecto

Este repositorio contiene mi desarrollo para la prueba técnica de frontend propuesta por la Célula de Diseño y Desarrollo - Gerencia de Innovación.
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

### Recursos del test

- Diseño en Figma:
  https://www.figma.com/file/JR9ut7HVbm9vVAEHoUdcyc/Untitled

- Documentación API (Postman):
  https://documenter.getpostman.com/view/18192740/2sA3JNcMNz

- Base URL de la API:
  https://7wmbjxblzi.execute-api.us-east-1.amazonaws.com/

Endpoints principales:

| Método | Endpoint   | Descripción            |
| :----: | ---------- | ---------------------- |
|  POST  | /login     | Inicio de sesión       |
|  POST  | /register  | Registro de usuario    |
|  POST  | /survey    | Envío de encuestas     |
|  GET   | /user/{id} | Obtener usuario por ID |
|  GET   | /          | Ruta principal         |

### Instalación y ejecución

1. Clonar el repositorio

```bash
git clone https://github.com/jerast/Compensar-Prueba.git
cd Compensar-Prueba
```
