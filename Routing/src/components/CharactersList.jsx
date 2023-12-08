import { useEffect, useState } from "react"
import CharacterListItem from "./CharactersListItem";
import styles from "./CharacterList.module.css";

const base_url='https://swapi.dev/api';

const CharacterList = ()=>{
    const [characters, setCharacters]=useState([]);
    useEffect(()=>{
        const abortController=new AbortController();
     fetch(`${base_url}/people`, {signal:abortController.signal})
     .then(res=>res.json())
     .then(data=>{
        setCharacters(data.results);
     });
     return ()=>{
        abortController.abort();
     }
    }, []);
    
    return(
        < div className={styles.CharactersList}>
            {characters.map((character, index)=> 
                <CharacterListItem key={character.name} id={index+1} {...character}/>
            )}
        </div>

    );
};

export default CharacterList;