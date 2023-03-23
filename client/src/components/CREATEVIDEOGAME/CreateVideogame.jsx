import React from "react";
import { Link, useHistory } from "react-router-dom";  
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getGenres, postVideogame } from "../../redux/actions/actions";
import styles from "../CREATEVIDEOGAME/CreateVideogame.module.css"
import Footer from "../FOOTER/Footer"


function validation (input){
  let errors = {};
  if (!input.name){
    errors.name = "Name is required"
  } else if (!input.description){
    errors.description = 'Description is required'
  } else if (!input.released){
    errors.released = 'Release date is required';
  } else if (!input.image){
    errors.image = 'Image is required' //controlar tmb q sea una url ! 
  } else if (input.rating < 0 || input.rating > 5) {
    errors.rating = 'The rating must be between "0" and "5"'; 
  } else if (!input.platforms){
    errors.platforms = 'Must select at least one platform'
  } else if (!input.genres){
    errors.genres = 'Must select at least one genre'
  }
  return errors
}



export default function CreateVideogame(){
    const dispatch = useDispatch();
    const genres = useSelector((state) => state.genres)
    const history = useHistory(); //probar mejor con USE NAVIGATE!!!


    const platformsApi = [
        "PC", "PlayStation 5", "PlayStation 4", "PlayStation 3", "Xbox One", "Xbox Series S/X", "Xbox 360", "Xbox",
        "Nintendo Switch", "Nintendo 3DS", "Nintendo DS", "Nintendo DSi", "iOS", "Android", "macOS", "Linux"]

    const [input, setInput] = useState({
         name: '',
         description: '',
         released: '',
         rating: '',
         platforms: [],
         image: '',
         genres: []      
    })

    const [errors, setErrors] = useState({})

    useEffect(() => {
        dispatch (getGenres());
    }, [])


    function handleChange(event){ 
        setInput({
            ...input,
            [event.target.name] : event.target.value
        })
        setErrors(validation({
          ...input,
          [event.target.name]: event.target.value
        }))
    }

    function handleCheck(event){
        if(event.target.checked){
          setInput(prevState => ({
            ...prevState,
            platforms: [...prevState.platforms, event.target.value]
          }))
        } else {
          setInput(prevState => ({
            ...prevState,
            platforms: prevState.platforms.filter(platform => platform !== event.target.value)
          }))
        }
      }
      

    function handleSelect(event){
        setInput({
            ...input,
            genres: [...input.genres, event.target.value]
        })
    }

    function handleRemoveGenre(genreName){
        setInput(prevState => ({
          ...prevState,
          genres: prevState.genres.filter(genre => genre !== genreName)
        }))
      }
      
    function handleSubmit(event){
        event.preventDefault();
        console.log(input);
        
        dispatch(postVideogame(input)).then((response) => {
            console.log(response);
          });
          
        alert('The videogame has been uploaded successfully')
        setInput({
            name: '',
            description: '',
            released: '',
            rating: '',
            platforms: [],
            image: '',
            genres: []  
        })

        history.push ('/home') //es un metodo del router que me redirige a la ruta que le digo, MUY ÚTIL
    }
  
    
    return (
        <div >

            <div className={styles.encabezado}> 
                
                            
                <Link to='/home'> <button className={styles.button}>All Videogames</button> </Link>
                
                <Link to='/about'> 
                <button className={styles.button}>about us</button>
                </Link>
                
                
                </div>


      
          <h2 className={styles.title}>Upload a new videogame</h2>
        <div className={styles.poneteMargen}>
          <form onSubmit={event => handleSubmit(event)} className={styles.container}> 
      
            <div >
                {/* NAME */}
              <div>
              <label className={styles.text}>Name:</label>
              <input className={styles.input} type="text" value={input.name} onChange={event => handleChange(event)} name='name' />
              {errors.name && (<p className={styles.error}>{errors.name}</p>)}
              </div>

                {/* DESCRIPTION */}
              <div className={styles.separado}>
              <label className={styles.text}>Description:</label>
              <input className={styles.input} type="text" value={input.description} onChange={event => handleChange(event)}name='description'  />
              {errors.description && (<p className={styles.error}>{errors.description}</p>)}
              </div>

                {/* RELEASE DATE */}
              <div className={styles.separado}>
              <label className={styles.text}>Realease Date:</label>
              <input className={styles.input} type="date" value={input.released} onChange={event => handleChange(event)} name='released' />
              {errors.released && (<p className={styles.error}>{errors.released}</p>)}
              </div>
      
                {/* RATING */}
              <div className={styles.separado}>
              <label className={styles.text}>Rating:</label>
              <input className={styles.input} type="number" value={input.rating} onChange={event => handleChange(event)}name='rating' 
              />
              {errors.rating && (<p className={styles.error}>{errors.rating}</p>)}

              </div>
      
                {/* PLATFORMS */}
              <div className={styles.platforms}>
              <label className={styles.text}>Platforms: <br/></label>
                 <div className={styles.fondoPlataformas}   id="checkbox-container">
                {platformsApi.map((option) => (
                  <label  key={option}>
                    <input  type="checkbox" name="platform" value={option} onChange={handleCheck} />
                    {option}
                  </label> 
                ))} 
                {errors.platform && (<p className={styles.error}>{errors.platform}</p>)}
                 </div>
              </div>
      
                {/* IMAGE */}
              <div className={styles.separado}>
              <label className={styles.text}>Image:</label>
              <input className={styles.input} type="text" value={input.image} onChange={event => handleChange(event)} name='image' />
              {errors.image && (<p className={styles.error}>{errors.image}</p>)}
              </div>
             
                {/* GENRES */}
              <div className={styles.separado}>
                <label className={styles.text}>Genre:</label>
              <select onChange={handleSelect} >
              { genres && genres.map(g => (
              <option key={g.id} value={g.name}>{g.name}</option>
              ))
              }
              </select>
              
               <ul>
                {input.genres.map((genreName, index) => (
                <li key={index}>{genreName}{' '}
                <button type="button" onClick={() => handleRemoveGenre(genreName)}>x</button>
                </li>
                 ))}
              </ul>
              {errors.genres && (<p className={styles.error}>{errors.genres}</p>)}
              </div>
                    
            </div>
          
          <button  className={styles.buttonUpload} type="submit">Upload Videogame</button>

          </form>
          </div>

          <div >
            <Footer />
          </div>

        </div>
      );

}