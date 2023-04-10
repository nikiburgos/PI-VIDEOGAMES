const { Router } = require ('express');
const router = Router(); 
require('dotenv').config();
const { deleteVideogames } = require ('../controllers/delete')

router.delete('/videogames/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id)
  
    try {
      const videogame = await deleteVideogames(id);
     
      res.status(200).json({ message: `the videogame ${videogame.name} was deleted` });

    } catch (error) {
        res.status(404).send(error.message);
    
    }
  });


  
  module.exports = router; 