import React, { useContext } from 'react'
import UserContext from './contexts/UserContext'

const Movie = ({ movie, }) => {

    const { toggleFavoriteMovieToUser, user } = useContext(UserContext)

    const isFavorite = user?.favoriteMovies.includes(movie.id)

    return (
        <div className='card'>
            <img
                src={movie.imageUrl}
                className='card-img-top'
                style={{
                    height: '260px',
                    objectFit: 'cover',
                    objectPosition: 'top'
                }}
            />
            <div className="card-body">
                <h4>{movie.title}</h4>
                {user?.id && <button className={
                    `btn ${isFavorite ? 'btn-success'
                        : 'btn-outline-primary'}`}
                    onClick={() => toggleFavoriteMovieToUser(movie.id)}
                >
                    Favorite
                </button>}

            </div>
        </div>
    )
}

export default Movie
