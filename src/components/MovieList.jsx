import MovieSummary from "./MovieSummary"

function MovieList(props) {

    return (
        <>
            {/*}<h2>Number of movies: {moviesToDisplay.length}</h2> {*/}

            {props.moviesArr.map((moviesObj) => {
                return (

                    <MovieSummary key={moviesObj.id}
                        movieDetails={moviesObj}
                        onDelete={props.onDelete}
                    />
                )

            })}
        </>
    )
}

export default MovieList