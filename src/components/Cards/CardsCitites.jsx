import React from 'react'
import { Link } from 'react-router-dom' 
import './CardsCitites.css'
const CardsCitites = ({data}) => {
  const { country, photo, population, featuredLocation, description, _id, city} = data
  //console.log(_id)




  return (
    //{country}
    <div   className=' col-4  mb-3 mx-auto  tarjeta'>
    
    <div className=" border  cards ">
    <div className="card border" style={{ width: '18rem' }} >
      <img src={photo} alt="City"   />
      <div className="card-body text-center">
        <h5 className="card-title"></h5>
        <p className="card-text">{description}.</p>
        <p className="card-text">city: {city}</p>
        <Link to={`/CitiDetails/${country}`} className="btn btn-primary">info</Link>
      </div>
    </div>
  </div>


  </div>
  )
}

export default CardsCitites