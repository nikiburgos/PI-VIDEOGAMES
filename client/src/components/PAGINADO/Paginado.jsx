import React from 'react';
import styles from '../PAGINADO/Paginado.module.css'


export default function Paginado ({ videogamesPerPage, allVideogames, paginado }){
    const pageNumbers = []


    for (let i=1; i<Math.ceil(allVideogames/videogamesPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className={styles.ul}>
                { pageNumbers && pageNumbers.map((number) => (
                    <li className={styles.li} key={number} >
                    <a className={styles.a} onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
        
    )
}; 
