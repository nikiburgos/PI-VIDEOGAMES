import React from 'react'; 
import { Link } from 'react-router-dom';

export default function Landing(){
    return (
        <div>
            <h1> Welcome to my Individual HenryBootamp Project</h1>

            <Link to = '/home'>
                <button>ENTER</button>
            </Link>


        </div>
    )
}