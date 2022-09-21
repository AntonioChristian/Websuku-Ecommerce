import React from 'react'
import Service from '../Service/Service';
import image from '../../assets/images/image.jpg';
import "./HomeStyle.css"
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <div className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src={image} className="hero" alt="hero" />
                            <div className="content">
                                <h3 className="title">WebSuku</h3>
                                <p className="subtitle">Website Sumbawa Kuliner</p>
                                <Link to={`/products`} className='shopNow'>
                                 <button className="btn btn-shop" >
                                    Shop Now
                                </button> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Service />
        </div>
    )
}

export default Home
