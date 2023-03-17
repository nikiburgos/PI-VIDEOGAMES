 const { Router } = require ('express');
//const { getAllVideogamesById, getApiInfoById } = require ('../controllers/getVideogameById');
 const { getAllVideogames } = require ('../controllers/getAllVideogames');
 const router = Router(); 


router.get('/videogames/:id', async (req, res) => {
    const { id } = req.params;
    const allVideogames = await getAllVideogames();

    if (id) {
        const videogameId = await allVideogames.find(game => game.id === parseInt(id));
        videogameId ? res.status(200).json(videogameId) : res.status(404).send('Videogame not found');
        }
   });


module.exports = router;
