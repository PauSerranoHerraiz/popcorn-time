function MovieSummary(props) {
    return (
        <div className="card">
            <p>{props.movieDetails.title}</p>
            {props.movieDetails.imgURL
                && <img src={props.movieDetails.imgURL} alt="Movie poster" />
            }
            <p>Year: {props.movieDetails.year}</p>
            <p>Rating: {props.movieDetails.rating}</p>

            <button onClick={() => {props.onDelete(props.movieDetails.id)}}>Delete</button>

        </div>
    )
}

export default MovieSummary