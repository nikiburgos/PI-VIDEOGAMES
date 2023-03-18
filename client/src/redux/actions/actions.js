import axios from 'axios'; 
import { GET_VIDEOGAMES, } from '../actions/action-types'




export const getVideogames = () => {
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

