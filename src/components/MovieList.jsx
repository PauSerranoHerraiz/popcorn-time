import movies from"../data/movies.json"

function MovieList (){

    return (
        <>
        <h2>List of movies</h2>

        {movies.map((moviesObj)=> {
            return (
                <div key={moviesObj.id} className ="card">
                <p>{moviesObj.title}</p>

                <img src={moviesObj.imgURL} alt="Movie poster" />

                <p>{moviesObj.year}</p>
                <p>{moviesObj.rating}</p>
                </div>
            )

        })}
        </>
    )
}

export default MovieList