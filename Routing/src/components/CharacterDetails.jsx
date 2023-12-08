
import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";


const CharacterDetails=()=>{
    const {id}=useParams();
    const location=useLocation();
    const navigate=useNavigate();

    const [character, setCharacters]=useState({});

    useEffect(()=>{

        fetch(`https://swapi.dev/api/people/${id}`)
        .then(res=>{
             if(!res.ok){
                throw new Error ('Not found')
             }
             return res.json();
        })
        .then(setCharacters)
        .catch((err)=>{
            navigate('/characters')
        });
    }, [id]);

    return(
<>
<h1>{character.name}</h1>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident enim veritatis sunt corrupti similique ullam eveniet neque aliquid eaque laboriosam atque consectetur, voluptatem placeat molestias repudiandae! Porro tempore ut expedita.</p>
</>
    );
}

export default CharacterDetails;