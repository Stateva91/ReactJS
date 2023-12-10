import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as gameService from '../../services/gameService';
import * as commentService from '../../services/commentService'

export default function GameDetails(){
    const [game, setGame]=useState({});
    const {gameId}=useParams();

    useEffect(()=>{
        gameService.getOne(gameId)
        .then(setGame)
    }, [gameId]);

    const addCommentHandler=async(e)=>{
        e.preventDefault();
      const formData= new FormData(e.currentTarget);
      const newComment= await commentService.create(
        gameId,
        formData.get('username'),
        formData.get('comment')
         );
         console.log(newComment);
    }
    return(
        <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">

            <div className="game-header">
                <img className="game-img" src="images/MineCraft.png" />
                <h1>Bright</h1>
                <span className="levels">MaxLevel: 4</span>
                <p className="type">Action, Crime, Fantasy</p>
            </div>

            <p className="text">
                Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work
                with an Orc to find a weapon everyone is prepared to kill for. Set in a world where fantasy
                creatures live side by side with humans. A human cop is forced
                to work with an Orc to find a weapon everyone is prepared to kill for.
            </p>

            
            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                    
                    <li className="comment">
                        <p>Content: I rate this one quite highly.</p>
                    </li>
                    <li className="comment">
                        <p>Content: The best game.</p>
                    </li>
                </ul>
               
                <p className="no-comment">No comments.</p>
    </div>

            {/* <!-- Edit/Delete buttons ( Only for creator of this game )  -->
            <div className="buttons">
                <a href="#" className="button">Edit</a>
                <a href="#" className="button">Delete</a>
    </div>*/}
        </div>

        
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={addCommentHandler}> 
            <input type="text" name="username" placeholder="username" />
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input className="btn submit" type="submit" value="Add Comment"/>
            </form>
        </article>
    </section>
    );
}