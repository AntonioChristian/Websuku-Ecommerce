import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSignIn, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import WebSuKu from '../../assets/images/WebSuKu.png';
import './HeaderStyle.css'


const Header = () => {

    const state = useSelector((state) => state.HandleCart);

  return (
    <div className='header'>
        <div className="container">
            <div className="middle row">
                <div className="col">
                    <Link to="/"><img src={WebSuKu} className="logo" alt="logo" /></Link>
                </div>
                <div className="col">
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
                            <li>
                                <Link to='/service'>Service</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <div className="buttons">
                        <Link to="/login"><FontAwesomeIcon icon={faSignIn}/> Login</Link>
                        <Link to="/register"><FontAwesomeIcon icon={faUserPlus}/> Register</Link>
                        <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/> Cart({state.length})</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header