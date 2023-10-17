CREATE SCHEMA Trailerflix;
CHARACTER SET utf8mb4;
COLLATE utf8mb4_unicode_ci;
USE Trailerflix;

-- Tabla 'categorias'
CREATE TABLE CATEGORIAS (
    Categoria_id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(255) NOT NULL
);

-- Tabla 'actores'
CREATE TABLE ACTORES (
    Actor_id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(255) NOT NULL
);

-- Tabla 'genero'
CREATE TABLE GENERO (
    Genero_id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(255) NOT NULL
);

-- Tabla 'catalogo'
CREATE TABLE CATALOGO (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Poster VARCHAR(255) DEFAULT 'N/A',
    Titulo VARCHAR(255),
    Categoria_id INT,
    Resumen TEXT,
    Temporadas VARCHAR(10),
    Trailer VARCHAR(255) DEFAULT 'N/A',
    FOREIGN KEY (Categoria_id) REFERENCES CATEGORIAS (Categoria_id)
);

-- Tabla 'catalogo_reparto' (Tabla intermedia)
CREATE TABLE CATALOGO_REPARTO (
    Catalogo_id INT,
    Actor_id INT,
    FOREIGN KEY (Catalogo_id) REFERENCES CATALOGO (id),
    FOREIGN KEY (Actor_id) REFERENCES ACTORES (Actor_id),
    PRIMARY KEY (Catalogo_id, Actor_id)
);


-- Tabla 'catalogo_genero' (Tabla intermedia)
CREATE TABLE CATALOGO_GENERO (
    Catalogo_id INT,
    Genero_id INT,
    FOREIGN KEY (Catalogo_id) REFERENCES CATALOGO (Id),
    FOREIGN KEY (Genero_id) REFERENCES GENERO (Genero_id),
    PRIMARY KEY (Catalogo_id, Genero_id)
);

-- Vista del catalogo completo
CREATE VIEW VistaCatalogoCompleto AS
SELECT
    CATALOGO.Id AS Catalogo_id,
    CATALOGO.Poster,
    CATALOGO.Titulo,
    CATEGORIAS.Nombre AS Categoria,
    CATALOGO.Resumen,
    CATALOGO.Temporadas,
    CATALOGO.Trailer,
    GROUP_CONCAT(ACTORES.Nombre SEPARATOR ', ') AS Actores,
    GROUP_CONCAT(GENERO.Nombre SEPARATOR ', ') AS Generos
FROM CATALOGO
LEFT JOIN CATEGORIAS ON CATALOGO.Categoria_id = CATEGORIAS.Categoria_id
LEFT JOIN CATALOGO_REPARTO ON CATALOGO.Id = CATALOGO_REPARTO.Catalogo_id
LEFT JOIN ACTORES ON CATALOGO_REPARTO.Actor_id = ACTORES.Actor_id
LEFT JOIN CATALOGO_GENERO ON CATALOGO.Id = CATALOGO_GENERO.Catalogo_id
LEFT JOIN GENERO ON CATALOGO_GENERO.Genero_id = GENERO.Genero_id
GROUP BY CATALOGO.Id;