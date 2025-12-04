import { useState } from "react"
import movies from "./data/movies.json"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Movielist from "./components/MovieList"


function App() {

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

      <Header numberOfMovies={moviesToDisplay.length} />
      <Movielist moviesArr={moviesToDisplay} onDelete={deleteMovie} />
      <Footer />

    </>
  )
}

export default App
