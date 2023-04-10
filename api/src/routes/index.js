const { Router } = require('express');


//Rutas que están bien modularizadas: 
const genresRoute = require('./getGenres');
const createVideoGameRoute = require('./routeCreateVideogame')
const videogamesRoute = require ('./getVideogames')
// const videogameByIdRoute  = require ('./findVideogameById') // --> arreglar esto 
const videogameByIdRoute = require ('./findVideogameById')
const deleteVideogame = require ('./deleteVideogame')
const editVideogame = require ('./updateVideogame')

const router = Router();

// GET
router.get('/videogames', videogamesRoute); // --> ESTA FUNCIONA!!! busca todos los Videogames y también por name 
router.get('/genres', genresRoute); // --> ESTA FUNCIONA !!!
router.get('/videogames/:id', videogameByIdRoute);  // ---> FUNCIONAAAAAAAAAA --> busca por id, x ej: http://localhost:3001/videogames/13536

// POST
router.post('/videogames', createVideoGameRoute); // --> ESTA FUNCIONA !!! HACE EL POST 

//DELETE
router.delete('/videogames/:id', deleteVideogame)

router.put('/update/:id', editVideogame)


module.exports = router;



