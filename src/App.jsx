import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import movies from "./data/movies.json"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Movielist from "./pages/MovieList"
import About from "./pages/About"
import Contact from "./pages/Contact"



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
      {/* <Movielist moviesArr={moviesToDisplay} onDelete={deleteMovie} /> */}

      <Routes>
        <Route path="/" element= {<Movielist moviesArr={moviesToDisplay} onDelete={deleteMovie} />}  />
        <Route path="/about" element = {<About />} />
        <Route path="/contact" element = {<Contact />} />
        <Route path="*" element = {<h1>Page not found</h1>} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
