
import { useState } from "react"
import movies from "../data/movies.json"
import MovieSummary from "./MovieSummary"

function MovieList() {

    const [moviesToDisplay, setMoviesToDisplay] = useState(movies)

    const deleteMovie = (movieId) => {
        const newList = moviesToDisplay.filter((movieDetails) => {
            if (movieDetails.id !== movieId) {
                return true;
            }
            else {
                return false
            }

        })

        setMoviesToDisplay(newList)
    }

    return (
        <>
            <h2>Number of movies: {moviesToDisplay.length}</h2>

            {moviesToDisplay.map((moviesObj) => {
                return (

                    <MovieSummary key={moviesObj.id}
                        movieDetails={moviesObj}
                        onDelete={deleteMovie}
                    />
                )

            })}
        </>
    )
}

export default MovieList