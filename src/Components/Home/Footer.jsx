import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import WebSuKu from '../../assets/images/WebSuKu.png';
import './FooterStyle.css'

function Footer() {
  return (
    <div className='footer'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>WebsuKu</h2>
                    <Link to="/"><img src={WebSuKu} className="logo2" alt="logo2" /></Link>
                </div>
                <div className="col">
                    <h3>Quick Links</h3>
                <div className="nav">
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/products'>Products</Link>
                            </li>
                            <li>
                                <Link to='/about'>About </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <h3>Follow us</h3>
                    <div className="right">
                        <Link to='/'><FontAwesomeIcon icon={faFacebookSquare}/></Link>
                        <Link to='/'><FontAwesomeIcon icon={faTwitterSquare}/></Link>
                        <Link to='/'><FontAwesomeIcon icon={faInstagramSquare}/></Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                     <hr />
                    <div className="copyRights">
                        
                        <p className='copy'>&copy; 2022. All Rights Reserved. Powered by WebSuKu</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer