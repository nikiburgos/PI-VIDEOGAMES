import React from "react";
import { Link, useHistory } from "react-router-dom";  
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getGenres, postVideogame } from "../../redux/actions/actions";

export default function CreateVideogame(){
    const dispatch = useDispatch();
    const genres = useSelector((state) => state.genres)
    const history = useHistory();


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


    useEffect(() => {
        dispatch (getGenres());
    }, [])


    function handleChange(event){ //Handle Change de los inputs
        setInput({
            ...input,
            [event.target.name] : event.target.value
        })
        console.log(input);
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
        <div>
          <Link to='/home'>BACK</Link>
      
          <h2>Upload a new videogame</h2>
      
          <form onSubmit={event => handleSubmit(event)}> 
      
            <div>
                {/* NAME */}
              <div>
              <label>Name:</label>
              <input type="text" value={input.name} onChange={event => handleChange(event)} name='name' required={true}/>
              </div>

                {/* DESCRIPTION */}
              <div>
              <label>Description:</label>
              <input type="text" value={input.description} onChange={event => handleChange(event)}name='description' required={true} />
              </div>

                {/* RELEASE DATE */}
              <div>
              <label>Realease Date:</label>
              <input type="date" value={input.released} onChange={event => handleChange(event)} name='released' required={true}/>
              </div>
      
                {/* RATING */}
              <div>
              <label>Rating:</label>
              <input type="number" value={input.rating} onChange={event => handleChange(event)}name='rating' 
               placeholder= "0.00 - 5.00"
               min= {0.00}
               max= {5}
               required={true}
              />

              </div>
      
                {/* PLATFORMS */}
              <div>
              <label>Platforms: <br/></label>
                 <div id="checkbox-container">
                {platformsApi.map((option) => (
                  <label key={option}>
                    <input type="checkbox" name="platform" value={option} onChange={handleCheck} />
                    {option}
                  </label>
                ))}
                 </div>
              </div>
      
                {/* IMAGE */}
              <div>
              <label>Image:</label>
              <input type="text" value={input.image} onChange={event => handleChange(event)} name='image' />
              </div>
              
                {/* GENRES */}
              <div>
              <select onChange={handleSelect}>
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

              </div>
                    
            </div>


          
          <button type="submit">Upload Videogame</button>

          </form>
        </div>
      );

}