import React, {useEffect, useState} from 'react'
import { FaCode } from "react-icons/fa";
import { Props as props } from 'react-dom';
import  Mainimage  from './Sections/Mainimage'
import GridCard from './Sections/GridCard'
import {API_URL, API_KEY, IMAGE_URL} from '../../Config'

import { Typography, Row } from 'antd';
const { Title } = Typography

function LandingPage() {

    const [Movies, setMovies] = useState([])
    const [CurrentPage, setCurrentPage] = useState()
    useEffect(() => {
       const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        fetchMovies(endpoint)
    }, [])

    const fetchMovies =(path) => {
        fetch(path)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setMovies([...Movies, ...response.results])
                setCurrentPage(response.page)
            })
    }


    const handleClick =() => {
        let endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`;
        
        fetchMovies(endpoint)
    }

    return (
    
        <div style={{ width: '100%', margin: 0 }}>

            {Movies[1] &&
            <Mainimage image={`${IMAGE_URL}/w1280/${Movies[1].backdrop_path && Movies[1].backdrop_path}`} 
                title={Movies[1].original_title} text={Movies[1].overview} />
            }
                            
            <div style={landingBody}>
                <Title level={2}>Movies by latest</Title>
                <hr />


                <Row gutter={[16, 16]}>
                {Movies && Movies.map((movie, index) => (
                    <React.Fragment key={index}>
                        <GridCard 
                        image={movie.poster_path && `${IMAGE_URL}w500${movie.poster_path}`}
                        movieId={movie.id}
                        />
                    </React.Fragment>
                ))}
                </Row>
                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={handleClick}>Load More</button>
                </div>
            </div>
        </div>
        
    )
}


const landingBody = {
    width: '85%',
    margin: '1rem auto'
}

export default LandingPage
