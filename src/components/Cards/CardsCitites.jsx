import React from 'react'
import { Link } from 'react-router-dom' 
const CardsCitites = ({data}) => {
  const { country, photo, population, featuredLocation, description, _id } = data
  console.log(_id)




  return (
    <div className="col-md-3 mb-3 mx-auto">
    <div className="card " style={{ maxWidth: '30 rem' }}>
      <img src={photo} className="card-img-top" alt="City" />
      <div className="card-body text-center">
        <h5 className="card-title">{country}</h5>
        <p className="card-text">{description}.</p>
        <Link to="URL_DESTINO" className="btn btn-primary">info</Link>
      </div>
    </div>
  </div>
  )
}

export default CardsCitites