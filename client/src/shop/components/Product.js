import React from 'react'
import { Link } from "react-router-dom"
import './Product.css'



const Product = ({ imageUrl, description, price, name, productId }) => {
    console.log(`imageUrl is`, imageUrl)
    return (
        <div className="product" >
            {/* <img src={imageUrl} alt={name} /> */}

            <div className="product__info" >
                <img src={imageUrl} alt={name} />
                <p className="info__name">{name}</p>
                <p className="info__description">{description.substring(0, 100)}...</p>
                <p className="info__price">${price}</p>
                <Link to={`/product/${productId}`} className="info__button">
                    View
        </Link>
            </div>
        </div>
    )
}

export default Product
