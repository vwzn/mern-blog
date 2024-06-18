import React from 'react'
import { Footer, Header } from '../../components'
import './home.scss'
import { HomeBg } from '../../assets'

const Home = () => {
    return (
        <div className='home'>
            <p><Header /></p>
            <p className='content'>Home Page</p>
            {/* <img src={HomeBg} alt='' className='img'/> */}
            <p><Footer /></p>
        </div>
    )
}

export default Home
