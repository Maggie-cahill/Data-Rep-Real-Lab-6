import MovieItem from './MovieItem';

export default function Movies(props) {
    return props.myMovies.map
        ((movie) => {
            return <MovieItem mymovie={movie} key={movie.imdbID}/>
     })

     
    

}