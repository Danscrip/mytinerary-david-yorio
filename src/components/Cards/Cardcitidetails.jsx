import React from 'react'
import { Link } from 'react-router-dom' 
import Under from '../under/under'



const Cardcitidetails = ({data}) => {
if (!data) return <h1>loading</h1>
   const {country, photo, name, price, duration, likes, activities, hashtags} = data;



  return (
    
    <div className="card  mx-auto" style={{ width: '18rem' }}>
      <img src={photo} className="card-img-top" alt="..." />
      <div className="card-body">
        <h1 className="card-title">{country}</h1>
        <p className="card-text">name: {name}</p>
        <p className="card-text">price: {price}</p>
        <p className="card-text">duration: {duration}</p>
        <p className="card-text">likes: {likes}</p>
        <p className="card-text">activities: {activities}</p>
        <p className="card-text">hashtags: {hashtags}</p>
        <Link to="/under" className="btn btn-primary"> view more </Link>
      </div>
    </div>
  
  )
}

export default Cardcitidetails