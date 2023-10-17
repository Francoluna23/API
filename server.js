const express = require('express');
const app = express();

const sequelize = require('./src/conexion/connection');
const Categorias = require('./src/modelos/categoria');
const Actores = require('./src/modelos/actores');
const Genero = require('./src/modelos/genero');
const Catalogo = require('./src/modelos/catalogo');
const CatalogoReparto = require('./src/modelos/catalogo_reparto');
const CatalogoGenero = require('./src/modelos/catalogo_genero');
const VistaCatalogoCompleto = require('./src/modelos/catalogoview');
const { Op } = require('sequelize');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(async (req, res, next) => {
  try {
        await sequelize.authenticate();
        await Categorias.sync();
        await Actores.sync();
        await Genero.sync();
        await Catalogo.sync();
        await CatalogoReparto.sync();
        await CatalogoGenero.sync();
        await VistaCatalogoCompleto.sync();
        next();
  } catch (error) {
        res.status(500).json({ error: 'Error en el servidor', description: error.message });
  }
});


app.get('/categorias', async (req, res) => {
  try {
        const allCategorias = await Categorias.findAll();
        allCategorias.length !== 0 ? res.status(200).json(allCategorias)
                                  : res.status(404).json({ error: "No se encontraron registros para listar." });

  } catch (error) {
        res.status(500).json({ error: 'Error en el servidor', description: error.message });
  }
});


app.get('/catalogo', async (req, res) => {
  try {
    const catalogoCompleto = await VistaCatalogoCompleto.findAll();
    catalogoCompleto.length !== 0 ? res.status(200).json(catalogoCompleto)
                                  : res.status(404).json({ error: "No se encontró ningún elemento en el catálogo." });

  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor', description: error.message });
  }
});

app.get('/catalogo/:id', async (req, res) => {
  try {
    const { id } = req.params; 
    const catalogoItem = await VistaCatalogoCompleto.findOne({ where: { Catalogo_id: id } });

    if (catalogoItem) {
      res.status(200).json(catalogoItem);
    } else {
      res.status(404).json({ error: "No se encontró ninguna película/serie con el código proporcionado." });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor', description: error.message });
  }
});


app.get('/catalogo/nombre/:nombre', async (req, res) => {
  const nombre = req.params.nombre

  try {
        const catalogoItems = await VistaCatalogoCompleto.findAll({
            where: { 
              Titulo: {
                [Op.like]: `%${nombre}%`,
              },
            },
        });

        catalogoItems.length !== 0 ? res.status(200).json(catalogoItems)
                              : res.status(404).json({ error: "No se encontraron productos para listar." });
  } catch (error) {
        res.status(500).json({ error: 'Error en el servidor', description: error.message });
  }
});

app.get('/catalogo/genero/:genero', async (req, res) => {
  const genero = req.params.genero;

  try {
    const catalogoPorGenero = await VistaCatalogoCompleto.findAll({
      where: {
        Generos: {
          [Op.like]: `%${genero}%` 
        }
      }
    });

    catalogoPorGenero.length !== 0 ? res.status(200).json(catalogoPorGenero)
                                   : res.status(404).json({ error: 'No se encontraron elementos con ese género.' });
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor', description: error.message });
  }
});

app.get('/catalogo/categoria/:categoria', async (req, res) => {
  const categoria = req.params.categoria;

  try {
    const catalogoPorCategoria = await VistaCatalogoCompleto.findAll({
      where: {
        Categoria: categoria
      }
    });

    catalogoPorCategoria.length !== 0 ? res.status(200).json(catalogoPorCategoria)
                                      : res.status(404).json({ error: 'No se encontraron elementos con esa categoría.' });
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor', description: error.message });
  }
});

app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`) );
