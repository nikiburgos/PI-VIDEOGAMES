 const { Router } = require ('express');
 const router = Router(); 
 const { getAllVideogamesById } = require ('../controllers/getVideogameById')


router.get('/videogames/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id)
    const videogameId = await getAllVideogamesById(id);
       
   if (id) {
    videogameId ? res.status(200).json(videogameId) : res.status(404).send('Videogame not found');
    }
});


module.exports = router;

