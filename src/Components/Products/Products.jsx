import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./ProductsStyle.css"

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    console.log(filter);

    let componentMounted = true;

    useEffect(() => {

        const getProducts = async () => {
            setLoading(true);

            const response = await fetch("https://631993998e51a64d2be72871.mockapi.io/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);

            }
            return () => {
                componentMounted = false;
            }
        }

        getProducts();

    }, []);

    const Loading = () => {
        return (
            <>
                <p className='loading'>Loading..</p>
            </>
        )

    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons">
                    <button className='btn' type='submit' onClick={() => setFilter(data)}>All</button>
                    <button className='btn' type='submit' onClick={() => filterProduct("Makanan")}>Makanan</button>
                    <button className='btn' type='submit' onClick={() => filterProduct("Minuman")}>Minuman</button>
                </div>
                <div className="cards">
                    {filter.map((product) => {
                        return (
                            <>
                                <div className="card" key={product.id}>
                                    <div className="card-header">
                                        <img src={product.image} alt={product.title} />
                                    </div>
                                    <div className="card-body">
                                        <h3 className="title">{product.title.substring(0, 20)}</h3>
                                        <div className="other">
                                            <span>Rp {product.price}</span>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <Link to={`/products/${product.id}`} className='buyNow'>Buy Now</Link>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>
            </>
        )
    }

    return (
        <div className='products'>
            <div className="container">
                <div className="row rowTitle">
                    <div className="col">
                        <h2 className='title'>Our Products</h2>
                        <hr />
                    </div>
                </div>
                <div className="row productsRow">
                    <div className="col">
                        {loading ? <Loading /> : <ShowProducts />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
