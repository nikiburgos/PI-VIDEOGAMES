import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions/actions";
import { useEffect } from "react";

export default function Detail(){
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(getDetail(id)) //así accedo al id de ese detalle
    },[dispatch, id])


    const detailVideogame = useSelector((state)=> state.detail)



    return (
        <div>
{
             detailVideogame ? 

             <div>
                <h1>{detailVideogame?.name}</h1>                   
                <img src={detailVideogame?.image} alt={detailVideogame.name} width='100PX' height='100px'/>
                <h3>Platforms: {detailVideogame?.platforms}</h3>
                <h3>Genres: {detailVideogame?.genres}</h3>
                <h2>Released Date: {detailVideogame?.released}</h2>
                <h2>Rating: {detailVideogame?.rating}</h2>
            </div> :

            <div>
            <h3>Loading...</h3>
            </div>
}
        <Link to='/home'>
            <button>HOME</button>
        </Link>
        </div>
    )
}
