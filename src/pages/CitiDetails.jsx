import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
//import Cardcitidetails from '../components/Cards/Cardcitidetails';
import Footer from '../components/Footer/Footer';
import NavBarDetails from '../components/navbardetails/navBarDetails';
import ItineraryDetails from '../components/ItineraryDetails/ItineraryDetails';
import Cardcitidetails from '../components/Cards/Cardcitidetails';




const CitiDetails = () => {
  const { country } = useParams();
  const [cityDetails, setCityDetails] = useState({});
  //const [itineraries, setItineraries] = useState([]);
  useEffect(() => {
    // Realiza una solicitud al servidor para obtener los detalles de la ciudad con el ID proporcionado
    fetch(`http://localhost:3000/api/city?country=${country}`)  // Ajusta la ruta a tu API
      .then(response => response.json())
      .then(data => { console.log('Data from API:', data); setCityDetails(data.res[0]) })
      .catch(error => console.error(error));
  }, [country]);

  console.log('City Details:', cityDetails);

  return (

    <div>
      <NavBarDetails />
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
      
      <ItineraryDetails country={country}/>
      <Footer />

    </div>
  );
}


export default CitiDetails