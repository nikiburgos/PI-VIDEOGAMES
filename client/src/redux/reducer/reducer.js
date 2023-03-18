import { GET_VIDEOGAMES, FILTERED_BY_GENRES, FILTERED_BY_ORIGIN } from '../actions/action-types'

const initialState = {
    videogames: [],
    allVideogames: [],
    genres: [],
    detail: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload,
                allVideogames: action.payload
            }

        case FILTERED_BY_GENRES:
            const allVideogames = state.allVideogames;
            const filteredGenre = action.payload === 'All'? allVideogames : allVideogames.filter((videogame) => videogame.genres?.find(v => v === action.payload));
            return {
                ...state,
                videogames: filteredGenre
            }

        case FILTERED_BY_ORIGIN:
            const allVideogames2 = state.allVideogames;
            const originFilter = action.payload === 'database' ?  allVideogames2.filter((element) => element.createdInDb) : allVideogames2.filter((element) => !element.createdInDb)
            return {
                ...state,
                videogames: action.payload === 'all' ? state.allVideogames : originFilter
            }
            
        default:
            return {...state}
    }
}
export default rootReducer;