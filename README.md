# Inlaze-Prueba

## Nombre del Proyecto: Client Movies App

**Client Movies App** es una aplicación que permite a los usuarios visualizar películas utilizando la API de TMDB. Los usuarios pueden ver detalles de películas populares y recientes, así como filtrar y agregar películas a sus favoritos.

La aplicación está desarrollada con **Next.js** en el front-end y **NestJS** en el back-end.

---

## Características

- **Ver películas populares y recientes**: Visualiza las películas más populares y las más recientes.
- **Filtrar películas**: Filtra películas por categorías como popularidad, clasificación, etc.
- **Agregar a favoritos**: Permite a los usuarios agregar películas a su lista de favoritos.

---

## Tecnologías Usadas

### Front-end (Next.js)

- **React**: Creación de componentes interactivos y reutilizables.
- **Next.js**: Renderizado del lado del servidor (SSR) y cliente (CSR).
- **Tailwind CSS**: Estilización rápida y eficiente.

### Back-end (NestJS)

- **NestJS**: Framework para construir la API y la lógica del back-end.
- **MongoDB**: Base de datos para almacenar los datos de usuario y favoritos.

---

## Instalación y Configuración

### Requisitos previos

- Node.js (v16+)
- MongoDB (local o Atlas)
- Cuenta de TMDB (API Key)

### Pasos para la instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/Inlaze-Prueba.git
   cd Inlaze-Prueba
   ```

Configura el front-end:

    cd client-movies
    npm install

    client-movies/

├── app/
│ ├── context/ # Contexto de la aplicación
│ ├── UI/ # Componentes reutilizables
│ ├── movie/ # Ruta específica de "/movies"
│ ├── lib/ # Lógica de la API
│ ├── layout.tsx # Plantilla principal
│ └── page.tsx # Página principal
├── public/
