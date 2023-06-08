import React from 'react'
import { NavLink } from 'react-router-dom';
import FormetPrice from '../Helper/FormetPrice';


const Product = (curElem) => {

    const {id, name , image, price, category} = curElem;
  return (
    <NavLink to={`/singlepage/${id}`}>
    <div className="card">
      <figure>
        <img src={image} alt={name} />
        <figcaption className="caption">{category}</figcaption>
      </figure>

      <div className="card-data">
        <div className="card-data-flex">
          <h3>{name}</h3>
          <p className="card-data--price">{<FormetPrice price={price} />}</p>
        </div>
      </div>
    </div>
  </NavLink>
  )
}

export default Product