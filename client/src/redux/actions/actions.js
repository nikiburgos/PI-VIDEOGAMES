import axios from 'axios'; 
import { GET_VIDEOGAMES, FILTERED_BY_GENRES, FILTERED_BY_ORIGIN, ORDER_BY_NAME } from '../actions/action-types'




export const getVideogames = () => { //ACTION QUE TRAE TODOS LOS VIDEOGAMES
    return async function (dispatch){ //lo hago con async await pero se puede hacer con promesas tmb, hacer uno para practicar ! 
        let json = await axios.get("http://localhost:3001/videogames", {  
        //esta es la ruta que hice en el back que me trae TODOS los videojuegos.
        //acá es donde se hace la 'comunicación entre el front y el back :)
        })
        return dispatch({
            type: GET_VIDEOGAMES,
            payload:json.data
        })
    }
}

export const filteredVideogamesByGenres = (payload) => { //ACTION QUE TRAE VIDEOGAMES FILTRADOS POR GENERO
    return {
        type: FILTERED_BY_GENRES,
        payload
    }
}

export const filteredByOrigin = (payload) => { //ACTION QUE TRAE VIDEOGAMES SEGUN FUERON CREADOS EN BDD O DE LA API
    return {
        type: FILTERED_BY_ORIGIN,
        payload
    }
}

export const orderByName = (payload) => { //ACTION QUE ORDENA VIDEOGAMES POR NOMBRE
    return{
        type: ORDER_BY_NAME,
        payload
    }
}