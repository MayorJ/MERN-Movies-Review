import React from 'react'
import { Typography, Row} from 'antd'

const { Title } = Typography

function Mainimage(props) {
    return (
        <div>
            <div style={{background:`linear-gradient(to bottom, rgba(0,0,0,0)
    39%,rgba(0,0,0,0)
    41%,rgba(0,0,0,0.65)
    100%),
    url('${props.image}'), #1c1c1c`, height: '500px', backgroundSize: '100%, cover', width: '100%', position: 'relative'}}></div>
            

            <div style={landing2}>
                <Title style={myTitle}>{props.title}</Title>               
                <p style={par}>{props.text}</p>
            </div>
        </div>
    )
}



const landing2 = {
    position: 'absolute',
    maxWidth: '500px',
    bottom: '15rem',
    marginLeft: '2rem'
}
const myTitle = {
    color: 'white'
}
const par = {
    color: 'white',
    fontSize: '1rem'
}



export default Mainimage
