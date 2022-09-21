import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router'
import { addCart } from '../../redux/action';
import "./ProductStyle.css"


const Product = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {

        const getProduct = async () => {
            setLoading(true);

            const response = await fetch (`https://631993998e51a64d2be72871.mockapi.io/products/${id}`);
            setProduct(await response.json());
            setLoading(false);

        }

        getProduct();

    }, [id]);

    const Loading = () => {
        return (
            <>
                <p className='loading'>Loading..</p>
            </>
        )

    }
{/* <FontAwesomeIcon icon={faStar}/> */}
    const ShowProduct = () => {
        return (
            <>
               <div className="col">
                    <img src={product.image} alt={product.title}/>
               </div>
               <div className="col">
                    <h2>{product.title}</h2>
                    <span>{product.category}</span>
                    <h3>Description</h3>
                    <p>{product.description}</p>
                    <h2>Price {product.price}</h2>
                    <button className='add' onClick={() => addProduct(product)}><FontAwesomeIcon icon={faShoppingCart}/>Add to Cart</button>
               </div>
            </>
        )
    }

  return (
    <div className='container product'>
       <div className="row">
            {loading ? <Loading /> : <ShowProduct />}
       </div>
    </div>
  )
}

export default Product
