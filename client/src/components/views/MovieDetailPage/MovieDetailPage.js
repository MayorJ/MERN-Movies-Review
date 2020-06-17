import React, { useEffect, useState } from 'react'
import {API_URL, API_KEY, IMAGE_URL} from '../../Config'
import Mainimage from '../LandingPage/Sections/Mainimage'

function MovieDetailPage(props) {
    
    const [Movie, setMovies] = useState([])

    
    useEffect(() => {
        
        const movieId = props.match.params.movieId

        fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setMovies(response)
            })

    }, [])

    return (
        <div>
            <div>
                {Movie[1] &&
                <Mainimage image={`${IMAGE_URL}/w1280/${Movie[1].backdrop_path && Movie[1].backdrop_path}`} 
                    title={Movie[1].original_title} text={Movie[1].overview} />
                }

            </div>
        </div>
    )
}

export default MovieDetailPage
