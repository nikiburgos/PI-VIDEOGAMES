import React from 'react';
import { useState, useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { getVideogames, filteredVideogamesByGenres, filteredByOrigin} from '../../redux/actions/actions';
import { Link } from 'react-router-dom'
import Card from '../CARD/Card';
import Paginado from '../PAGINADO/Paginado';

export default function Home()  {

    const dispatch = useDispatch()
    const allVideogames = useSelector((state) => state.videogames)  //es como el mapStatetoProps

    //PAGINADO: 
    //defino estados locales que me muestren cuántas CARDS quiero por página: mi ReadMe pide 15 cards
    const [currentPage, setCurrentPage]   = useState(1) 
    const [videogamesPerPage, setVideogamesPerPage] = useState(15)

    const indexOfLastVideogame = currentPage * videogamesPerPage  //al principio será 15
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage  //al principio será 0
    
    const currentVideogames = allVideogames.slice(indexOfFirstVideogame, indexOfLastVideogame) //slice agarra un arreglo y me toma la porción que yo quiero: el indice del primer videogame y el del ultimo. 

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {   //aca armamos el dispatch 
        dispatch(getVideogames());
    },[])

    function handleClick(event){ //Handle Click que me muestra ALL VIDEOGAMES
        event.preventDefault(); //ponerlo para que no se nos recargue la página por el useEffect! 
        dispatch(getVideogames());
    }
    
    function handleFilteredGenre(event){ //Handle del filtrado by GENRES
        dispatch(filteredVideogamesByGenres(event.target.value));
    }
    
    function handleFilteredByOrigin(event){ //Handle del filtrado by ORIGIN
        dispatch(filteredByOrigin(event.target.value))
    }

    return (
        <div>
            <Link to='/videogames'>Add Videogame</Link> 

            {/* TITULO DE LA PAGINA */}
            <h1>VIDEOGAMES INDIVIDUAL PROJECT</h1>
            <button onClick={event => {handleClick(event)}}>All Videogames</button>

            {/* FILTROS Y ORDENAMIENTO  */}            
            <div>  
                <select> {/* ordenar ascendente/descendente  */}
                    <option value='asc'>A-Z</option>
                    <option value='desc'>Z-A</option>
                </select>

                <select onChange={event => handleFilteredGenre(event)}> {/* filtrar por género  */}
                    <option value='All'>All Genres</option>
                    <option value='Action'>Action</option>
                    <option value='Indie'>Indie</option>
                    <option value='Adventure'>Adventure</option>
                    <option value='RPG'>RPG</option>
                    <option value='Strategy'>Strategy</option>
                    <option value='Shooter'>Shooter</option>
                    <option value='Casual'>Casual</option>
                    <option value='Simulation'>Simulation</option>
                    <option value='Puzzle'>Puzzle</option>
                    <option value='Arcade'>Arcade</option>
                    <option value='Platformer'>Platformer</option>
                    <option value='Racing'>Racing</option>
                    <option value='Massively Multiplayer'>Massively Multiplayer</option>
                    <option value='Sports'>Sports</option>
                    <option value='Fighting'>Fighting</option>
                    <option value='Family'>Family</option>
                    <option value='Board Games'>Board Games</option>
                    <option value='Educational'>Educational</option>
                    <option value='Card'>Card</option>                    
                </select>

                <select onChange={event => handleFilteredByOrigin(event)}> {/* filtrar por origen: api o bbd  */}
                    <option value='all'>All</option>
                    <option value='database'>Created by you</option>
                    <option value='Api'>Our DataBase</option>
                </select>  

                {/* RENDERIZACION PAGINADO */}
                <Paginado 
                videogamesPerPage = {videogamesPerPage}
                allVideogames = {allVideogames.length}
                paginado = {paginado}                
                />        


            </div>
        
         {/* RENDERIZADO DE LA CARD  */} { 
            currentVideogames?.map ((element) => {
                return (
                    <Card name={element.name} image = {element.image} genres= {element.genres} key ={element.id}/>
                )
               
            })
        }
        
        

        </div>
    )
}