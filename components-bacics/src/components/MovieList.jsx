import Movie from './Movie';
import Heading from './heading';

export default function MovieList(props){
    return(
<div className="movie-list">
       <Heading>Some heading here</Heading>
        <ul>
            <li><Movie data={props.movies[0]}/></li>
            <li><Movie data={props.movies[1]}/></li>
            <li>{props.movies[2].title}</li>
        </ul>
        </div>
    );
}