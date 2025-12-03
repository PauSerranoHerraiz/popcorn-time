import movies from"../data/movies.json"

function MovieList (){

    return (
        <>
        <h1>This is the MovieList</h1>

        {movies.map((moviesObj)=> {
            return (
                <div key={moviesObj.id} className ="card">
                <p>{moviesObj.title}</p>
                <p>{moviesObj.year}</p>
                <p>{moviesObj.rating}</p>
                </div>
            )

        })}
        </>
    )
}

export default MovieList