const { Router } = require('express');
const router = Router();
const { videogameEdit } = require('../controllers/edit');

router.put('/update/:id', async (req, res) => {
    const { id }  = req.params; // Obtener el ID del perro a actualizar.
    const { name,
        description,
        released,
        rating,
        platforms,
        image,
        createdInDb,
        genres } = req.body; // Obtener los nuevos datos del perro.
    try {
        const updateVideogame = await videogameEdit(id, name, description, released, rating, platforms, image, createdInDb, genres);
        res.status(200).json(updateVideogame);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error in updating the game' });
    }
});

module.exports = router;