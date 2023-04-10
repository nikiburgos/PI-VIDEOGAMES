const { Videogame } = require('../db');

const deleteVideogames = async (id) => {
    if (!id){
        throw new Error ('Inexistent videogame')
    } else if (typeof id === 'number') throw new Error ('You can not delete this game')
    const foundVideogame = await Videogame.findByPk(id)

    foundVideogame.destroy({
        where: { id : id }
    })
    return foundVideogame
}

module.exports = {
    deleteVideogames
}; 

// async function deleteVideogame(req, res) {
//   const { id } = req.params;

//   try {
//     // Busca el videojuego por su ID y elimínalo
//     const deleted = await Videogame.destroy({ where: { id } });

//     if (deleted) {
//       // Si se eliminó correctamente, responde con un mensaje de éxito
//       res.status(200).json({ message: `Videogame with ID ${id} was deleted.` });
//     } else {
//       // Si no se encontró el videojuego, responde con un mensaje de error
//       res.status(404).json({ message: `Videogame with ID ${id} not found.` });
//     }
//   } catch (error) {
//     // Si ocurrió un error al intentar eliminar el videojuego, responde con un mensaje de error
//     res.status(500).json({ message: 'Error trying to delete videogame.', error });
//   }
// }

// module.exports = {
//   deleteVideogame,
// };
