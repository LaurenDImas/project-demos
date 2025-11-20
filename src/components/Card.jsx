import React from 'react'
import {AiFillStar} from "react-icons/ai";
import {BsFillBagHeartFill} from "react-icons/bs";

const Card = ({img, title, reviews, prevPrice, newPrice}) => {
    return (
        <div className="card">
            <img src={img} alt={title} className="card-img"/>
            <div className="card-details">
                <h3 className="card-title">{title}</h3>
                <div className="card-reviews">
                    <AiFillStar className="ratings-start" />
                    <AiFillStar className="ratings-start" />
                    <AiFillStar className="ratings-start" />
                    <AiFillStar className="ratings-start" />
                    <span className="total-reviews">4</span>
                </div>
                <div className="card-price">
                    <div className="price">
                        <del>${prevPrice}</del> {newPrice}
                    </div>
                    <div className="bag">
                        <BsFillBagHeartFill className="bag-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card
