const { Videogame } = require('../db');

const videogameEdit = async (  
    id,
    name,
    description,
    released,
    rating,
    platforms,
    image,
    createdInDb,
    genres) => {
    // Verificar que el perro a actualizar existe en la base de datos
    const gameToUpdate = await Videogame.findByPk(id);
    if(!gameToUpdate) {
        throw new Error ('There is no info to update');
    }
    // Actualizar los datos del perro en la base de datos
    await gameToUpdate.update({
        name:name,
        description: description,
        released: released,
        rating: rating,
        platforms: platforms,
        image: image,
        createdInDb: createdInDb,
        genres: genres,
       })
    // Devolver los datos actualizados del perro.
    return gameToUpdate;
};

module.exports = { videogameEdit }; 




