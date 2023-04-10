import React from "react";
import { Link, useParams, useHistory} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions/actions";
import { useEffect } from "react";
import Footer from "../FOOTER/Footer";
import Header from "../HEADER/Header";
import styles from "../DETAIL/Detail.module.css";
import { deleteVideogame } from "../../redux/actions/actions";



export default function Detail(){
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(getDetail(id)) 
    },[dispatch, id])

    const detailVideogame = useSelector((state)=> state.detail)
    console.log(detailVideogame.id)

    function handleDelete() {
        if (typeof detailVideogame.id == 'number') {
            alert('You can not delete this game');
          return;
        } else {
          if (window.confirm("You are going to delete this game. Are you sure?")) {
            dispatch(deleteVideogame(detailVideogame.id));
            alert("El videojuego fue borrado");
            history.push("/home");
          }
        }
      }
      
    const history = useHistory();
    


    return (
        <div className={styles.background}>
                <Header />

            <div className={styles.fondo}>       

        {  

             detailVideogame ? 


             <div className={styles.contenedor}>
                <div className={styles.columnaizquierda}> 
                    <img  className={styles.img} src={detailVideogame?.image} alt={detailVideogame.name} width='300px' height='100px'/>                
                </div>

                <div className={styles.columnaderecha}>
                    
                    <h1 className={styles.name}>{detailVideogame?.name}</h1>  

                    <button className={styles.button} onClick={handleDelete}>DELETE</button> 

                    <h3 className={styles.text}> <b>PLATFORMS:</b> {detailVideogame.platforms}</h3>
                    <h3 className={styles.text}> <b>GENRES:</b> {detailVideogame.genres}</h3>
                    <h2 className={styles.text}> <b>RELEASE DATE:</b> {detailVideogame?.released}</h2>
                    <h2 className={styles.text}> <b>RATING:</b> {detailVideogame?.rating}</h2>
                    <p className={styles.text}>{detailVideogame.description}</p>

                   

                </div>
             
            </div>:

            <div>
                <img src="/loading.gif" alt="" />
            </div>
}


            </div>

                        <div className={styles.margin}>            
                        <Footer />             
                        </div>


        

        </div>
    )
}




