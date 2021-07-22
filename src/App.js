import React from 'react'
import Navbar from './components/Navbar'
import MovieList from './components/MovieList'
import { UserProvider } from './components/contexts/UserContext'
import { MoviesProvider } from './components/contexts/MovieContext'

const App = () => {

  return (
    <div>
      <UserProvider>
        <MoviesProvider>
          <Navbar />
          <MovieList />
        </MoviesProvider>
      </UserProvider>
    </div>
  )
}

export default App
