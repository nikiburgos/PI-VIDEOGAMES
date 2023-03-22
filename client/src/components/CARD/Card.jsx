import React from "react";
import { Link } from "react-router-dom";

export default function Card({ name, image, genres, id}) {
    return (
        <div>
            <Link to={`/videogames/${id}`}>        
            <h3>{name}</h3>
            </Link>
           
{/* ARREGLAR: CUNANDO SE HACE CLICK, ABRE UNA CARD; 
PERO SI SE TRATA DE ABRIR OTRA, SE RENDERIZA LA ANTERRIOR ANTES DE CARGAR DE VUELTA LA NUEVA */}
            
            <h5>{genres}</h5>
            <img src={image} alt={name}  width='200px' height= '200px'/>
        </div>
    )
}