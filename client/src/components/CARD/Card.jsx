import React from "react";
import { Link } from "react-router-dom";
import styles from '../CARD/Card.module.css';


export default function Card({ name, image, genres, id}) {
    return (
        <div className={styles.cardContainer}>

            <div className={styles.cardContent}>

            
                   
            <h3 className={styles.title}>{name}</h3>
            <h5 className={styles.genres}>{genres.join(", ")}</h5>

            <Link to={`/videogames/${id}`}> 
            <img src={image} alt={name}  width='200px' height= '200px'/>
            </Link>
           
{/* ARREGLAR: CUNANDO SE HACE CLICK, ABRE UNA CARD; 
PERO SI SE TRATA DE ABRIR OTRA, SE RENDERIZA LA ANTERRIOR ANTES DE CARGAR DE VUELTA LA NUEVA */}
            
            

            </div>
        </div>
    )
}