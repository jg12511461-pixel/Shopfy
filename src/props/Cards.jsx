import { NavLink } from 'react-router-dom'
import './Cards.css'

export default function Cards({ image, title, price, rating }) {
  const filledStars = Math.round(rating)

  return (
    <div>
      <div className="card h-100 product-card" style={{ width: '100%' }}>
        <div className="product-card__image">
          <img src={image} className="card-img-top" alt="Nail polish" />
        </div>
        <div className="card-body">
          <NavLink to="#" className="product-card__title-link text-decoration-none">
            <h5 className="card-title text-black">{title}</h5>
          </NavLink>
          <p className="card-text" aria-label={`Rating: ${rating} out of 5`}>
            <span style={{ color: '#f5a623', fontSize:"22px"}}>{'★'.repeat(filledStars)}{'☆'.repeat(5 - filledStars)}</span>
            {' '}{rating}/5
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <p className="card-text mb-0" style={{ color: "#3a87eb", fontSize:"19px" }}><b>{price}</b></p>
            <NavLink to="#" className="btn btn-primary product-card__button">🛒</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
