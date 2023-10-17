# Documentación de la API

## Introducción
Esta API REST proporciona acceso a un catálogo de películas y series. Puedes utilizar los siguientes endpoints para interactuar con los datos.

## Modelo - Entidad - Relación

### Esquema E-R

![Modelo Api](https://i.imgur.com/SO2H51U.png)

### Esquema Relacional

![Modelo Api](https://i.imgur.com/tMSfqLy.png)

### Modelo Físico

![Modelo Api](https://i.imgur.com/sdmUKWm.png)


## Requisitos Previos

Asegúrate de tener Node.js y MySQL instalados en tu sistema antes de ejecutar la aplicación. Además, crea una base de datos MySQL y configura las credenciales en un archivo `.env` en la raíz del proyecto como se muestra en el siguiente ejemplo.

## Archivo `.env`

### Configuración de la base de datos
```plaintext
DATABASE=trailerflix
DBUSER=root
PASSWORD=mi_contraseña
HOST=localhost
PORT=3000
```
## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/urldelproyecto...
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd posts...
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor:

   ```bash
   npm start
   ```

La API estará disponible en `http://localhost:3000`.

## Listado de Endpoints
A continuación se muestra un listado de los endpoints disponibles en la API:

| Método HTTP | Endpoint                | Descripción                            |
|------------|-------------------------|----------------------------------------|
| GET        | /categorias              | Obtener todas las categorías disponibles |
| GET        | /catalogo                | Obtener el catálogo completo           |
| GET        | /catalogo/:id            | Filtrar por código de película/serie  |
| GET        | /catalogo/nombre/:nombre | Filtrar por nombre o parte del nombre  |
| GET        | /catalogo/genero/:genero | Filtrar por género del contenido       |
| GET        | /catalogo/categoria/:categoria | Filtrar por categoría (película o serie) |

## Utilización de los Endpoints

A continuación, se detallan los endpoints disponibles y cómo utilizarlos:

### Categorías

#### Listar todas las categorías

- **URL**: `/api/categorias`
- **Método**: `GET`
- **Respuesta Exitosa**:
  - **Código**: 200 OK
  - **Ejemplo de Respuesta**:

    ```json
    [
        {
            "Categoria_id": 1,
            "Nombre": "Serie"
        },
        {
            "Categoria_id": 2,
            "Nombre": "Película"
        }
    ]
    ```
#### Listar todo el catalogo

- **URL**: `/api/catalogo`
- **Método**: `GET`
- **Respuesta Exitosa**:
  - **Código**: 200 OK
  - **Ejemplo de Respuesta**:

    ```json
    [
        {
            "Catalogo_id": 1,
            "Poster": "/posters/3.jpg",
            "Titulo": "The Mandalorian",
            "Categoria": "Serie",
            "Resumen": "Ambientada tras la caída del Imperio...",
            "Temporadas": "2",
            "Trailer": "https://www.youtube.com/embed/aOC8E8z_ifw",
            "Actores": "Claire Fox, Olivia Colman, Matt Smith, Tobias Menzies, Vanesa Kirby, Helena Bonham Carter",
            "Generos": null
        },
        {
            "Catalogo_id": 2,
            "Poster": "/posters/4.jpg",
            "Titulo": "The Umbrella Academy",
            "Categoria": "Serie",
            "Resumen": "La muerte de su padre reúne a unos hermanos...",
            "Temporadas": "1",
            "Trailer": null,
            "Actores": "Lili Reinhart, Casey Cott, Camila Mendes, Marisol Nichols, Madelaine Petsch, Mädchen Amick",
            "Generos": null
        },...
        ...
        ...
    ]
    ```
#### Filtrar por código de la película/serie

- **URL**: `/api/catalogo/:id`
- **Método**: `GET`
- **Respuesta Exitosa**:
  - **Código**: 200 OK
  - **Ejemplo de Respuesta**:

    ```json
    [
        {
        "Catalogo_id": 17,
        "Poster": "/posters/17.jpg",
        "Titulo": "Halt and Catch Fire",
        "Categoria": "Serie",
        "Resumen": "Situada en los inicios de la década de 1980, un visionario ficticio...",
        "Temporadas": "4",
        "Trailer": "https://www.youtube.com/embed/pWrioRji60A",
        "Actores": "Lee Pace, Lee Pace, Lee Pace, Scoot McNairy, Scoot McNairy, Scoot McNairy, Mackenzie Davis, Mackenzie Davis, Mackenzie Davis, Kerry Bishé, Kerry Bishé, Kerry Bishé, Toby Huss, Toby Huss, Toby Huss, Alana Cavanaugh, Alana Cavanaugh, Alana Cavanaugh",
        "Generos": "Drama, Ficción, Tecnología, Drama, Ficción, Tecnología, Drama, Ficción, Tecnología, Drama, Ficción, Tecnología, Drama, Ficción, Tecnología, Drama, Ficción, Tecnología"
        }
    ]
    ```
#### Filtrar por nombre o parte del nombre

- **URL**: `/catalogo/nombre/:nombre`
- **Método**: `GET`
- **Respuesta Exitosa**:
  - **Código**: 200 OK
  - **Ejemplo de Respuesta**:

    ```json
    [
        {
            "Catalogo_id": 8,
            "Poster": "/posters/8.jpg",
            "Titulo": "Avengers: End Game",
            "Categoria": "Película",
            "Resumen": "Después de los devastadores eventos de los Vengadores: Infinity War...",
            "Temporadas": null,
            "Trailer": null,
            "Actores": "Robert Downey Jr., Robert Downey Jr., Robert Downey Jr., Chris Evans, Chris Evans, Chris Evans, Mark Ruffalo, Mark Ruffalo, Mark Ruffalo, Chris Hemsworth, Chris Hemsworth, Chris Hemsworth, Scarlett Johansson, Scarlett Johansson, Scarlett Johansson, Jeremy Renner, Jeremy Renner, Jeremy Renner",
            "Generos": "Aventura, Acción, Sci-Fi, Aventura, Acción, Sci-Fi, Aventura, Acción, Sci-Fi, Aventura, Acción, Sci-Fi, Aventura, Acción, Sci-Fi, Aventura, Acción, Sci-Fi"
        }
    ]
    ```
#### Filtrar por género del contenido

- **URL**: `/catalogo/genero/:genero`
- **Método**: `GET`
- **Respuesta Exitosa**:
  - **Código**: 200 OK
  - **Ejemplo de Respuesta**:

    ```json
    [
        {
            "Catalogo_id": 8,
            "Poster": "/posters/8.jpg",
            "Titulo": "Avengers: End Game",
            "Categoria": "Película",
            "Resumen": "Después de los devastadores eventos de los Vengadores: Infinity War...",
            "Temporadas": null,
            "Trailer": null,
            "Actores": "Robert Downey Jr., Robert Downey Jr., Robert Downey Jr., Chris Evans, Chris Evans, Chris Evans, Mark Ruffalo, Mark Ruffalo, Mark Ruffalo, Chris Hemsworth, Chris Hemsworth, Chris Hemsworth, Scarlett Johansson, Scarlett Johansson, Scarlett Johansson, Jeremy Renner, Jeremy Renner, Jeremy Renner",
            "Generos": "Aventura, Acción, Sci-Fi, Aventura, Acción, Sci-Fi, Aventura, Acción, Sci-Fi, Aventura, Acción, Sci-Fi, Aventura, Acción, Sci-Fi, Aventura, Acción, Sci-Fi"
        },...
        ...
        ...
    ]
    ```
#### Filtrar por serie - película o cualquier otra categoría que pueda existir

- **URL**: `/catalogo/categoria/:categoria`
- **Método**: `GET`
- **Respuesta Exitosa**:
  - **Código**: 200 OK
  - **Ejemplo de Respuesta**:

    ```json
    [
        {
            "Catalogo_id": 1,
            "Poster": "/posters/3.jpg",
            "Titulo": "The Mandalorian",
            "Categoria": "Serie",
            "Resumen": "Ambientada tras la caída del Imperio...",
            "Temporadas": "2",
            "Trailer": "https://www.youtube.com/embed/aOC8E8z_ifw",
            "Actores": "Claire Fox, Olivia Colman, Matt Smith, Tobias Menzies, Vanesa Kirby, Helena Bonham Carter",
            "Generos": null
        },
        {
            "Catalogo_id": 2,
            "Poster": "/posters/4.jpg",
            "Titulo": "The Umbrella Academy",
            "Categoria": "Serie",
            ...
        ...
        ...
    ]
    ```


## Estructura de Carpetas

El proyecto está organizado en la siguiente estructura de carpetas:

- `DB/`: Contiene los archivos necesarios para crear la base de datos, la creación de la vista completa del catálogo de series y películas, y todos los insert necesarios. 
- `src/`
  - `conexion/`: Contiene el archivo `connection.js` que establece la conexión a la base de datos MySQL.
  - `modelos/`: Contiene los modelos de Sequelize para todas las tablas.
- `.env`: Archivo de configuración de variables de entorno para la conexión a la base de datos.
- `package.json`: Archivo de configuración de dependencias y scripts.
- `server.js`: Archivo principal que inicia el servidor Express y define los endpoints de la API.