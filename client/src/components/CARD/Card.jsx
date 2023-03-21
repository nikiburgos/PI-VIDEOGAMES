import React from "react";
import { Link } from "react-router-dom";

export default function Card({ name, image, genres, id}) {
    return (
        <div>
            <Link to={`/videogames/${id}`}> 
            <h3>{name}</h3>
            </Link>
           

            
            <h5>{genres}</h5>
            <img src={image} alt={name}  width='200px' height= '200px'/>
        </div>
    )
}