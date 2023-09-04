import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { getALLItinerary } from '../services/ItinerarisQueris'
import Cardcitidetails from '../Cards/Cardcitidetails'
//import Cardcitidetails from '../Cards/Cardcitidetails'
//Cardcitidetails

const ItineraryDetails = () => {


    const { country } = useParams()
    console.log(country);

    //const [ItineraryDetails, setItineraryDetails] = useState([])
    const [itineraryData, setItineraryData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const inputsearch = useRef(null);



    useEffect(() => {
        getALLItinerary().then((data) => {
            console.log('Received itinerary data:', data);
            setItineraryData(data);
            setIsLoading(false); // Marca la carga como completa
        });



        /* axios('http://localhost:3000/api/cities')
     
           .then(res => { setCities(res.data.res)
             console.log(res.data.res);
              console.log(res.data.response);
           })
      
         .catch(error => {
           console.error('Error fetching cities:', error);
         });*/
    }, [country])


    /* const handleclick = (event) => {
       // console.log(inputsearch.current.value);
       let search = inputsearch.current.value
       let query = "?city="
       getAllCitis(query+search).then(setCities);
   
     
   }
 */
    console.log('itineraryData:', itineraryData);
    return (
        <div   >
        {isLoading ? (
          <p>Cargando itinerarios...</p>
        ) : (
          <div>
            {itineraryData && itineraryData.length > 0 ? (
                        itineraryData.map((itinerary) => (
                            <Cardcitidetails key={itinerary._id} data={itinerary} />
                        ))
                    ) : (
                        <p>No se encontraron itinerarios.</p>
                    )}
          </div>
        )}
      </div>
    )
}

export default ItineraryDetails