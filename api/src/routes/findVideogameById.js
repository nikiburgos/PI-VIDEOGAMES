 const { Router } = require ('express');
//const { getAllVideogamesById, getApiInfoById } = require ('../controllers/getVideogameById');
 //const { getAllVideogames, getDbInfo, getAll } = require ('../controllers/getAllVideogames');
 const router = Router(); 
 const { getAllVideogamesById } = require ('../controllers/getVideogameById')


router.get('/videogames/', async (req, res) => {
    const { id } = req.query;
    const videogameId = await getAllVideogamesById(id);
       
   if (id) {
    videogameId ? res.status(200).json(videogameId) : res.status(404).send('Videogame not found');
    }
});


module.exports = router;
