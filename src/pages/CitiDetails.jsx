



import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Cardcitidetails from '../components/Cards/Cardcitidetails';


const CitiDetails = () => {
  const { id } = useParams();
  const [cityDetails, setCityDetails] = useState({});

  useEffect(() => {
    // Realiza una solicitud al servidor para obtener los detalles de la ciudad con el ID proporcionado
    fetch(`http://localhost:3000/api/cities/${id}`)  // Ajusta la ruta a tu API
      .then(response => response.json())
      .then(data => setCityDetails(data.res))
      .catch(error => console.error(error));
  }, [id]);

  return (
    
    <div>
 <div className="card mx-auto" style={{ width: '60rem' }}>
      <img src={cityDetails.photo} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">country: {cityDetails.country}</h5>
        <p className="card-text">fundation: {cityDetails.fundation}</p>
       <p className="card-text">population: {cityDetails.population}</p>
       <p className="card-text"> city: {cityDetails.city}</p>
       <p className="text-break">description: {cityDetails.description}</p>
       <p className="card-text text-truncate">smalldescription: {cityDetails.smalldescription}</p>
       <p className="card-text text-truncate">description: {cityDetails.description}</p>
       <p className="card-text">featuredelocation: {cityDetails.featuredLocation}</p>
        <Link className=" btn btn-primary" to="/Cities">back to citys</Link>
      </div>
    </div>
   

      
    </div>
  );
}


export default CitiDetails