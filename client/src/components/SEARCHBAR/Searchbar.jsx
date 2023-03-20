import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogameByName } from "../../redux/actions/actions";

export default function SearchBar () {
    const dispatch = useDispatch();
    const [name, setName] = useState ('')


    function handleInputChange (event){
        event.preventDefault()
        setName(event.target.value)
        
    }

    function handleSubmit (event){
        event.preventDefault()
        dispatch(getVideogameByName(name))
        
    }

    return (
        <div>
            <input 
                type = 'text'
                placeholder="Game name..."
                onChange={event => handleInputChange(event)}
            />

            <button type="submit" onClick={event => handleSubmit(event)}>Search</button>

        </div>
    )

}

// CORREGIR: que el ´placeholder quede vacío después de haber buscado, creo que es con setName