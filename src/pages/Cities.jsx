import React, { useState, useEffect, useRef } from 'react'
import NavBarcities from '../components/NavBarCities/NavBarcities'
import Footer from '../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CardsCitites from '../components/Cards/CardsCitites'

import { getAllCitis } from '../components/services/citisquerys'







const Cities = () => {
  const params = useParams()
  console.log(params)

  const [cities, setCities] = useState([])


  const inputsearch = useRef(null);



  useEffect(() => {
    getAllCitis().then(setCities);



    /* axios('http://localhost:3000/api/cities')
 
       .then(res => { setCities(res.data.res)
         console.log(res.data.res);
          console.log(res.data.response);
       })
  
     .catch(error => {
       console.error('Error fetching cities:', error);
     });*/
  }, [])


  const handleclick = (event) => {
    // console.log(inputsearch.current.value);
    let search = inputsearch.current.value
    let query = "?city="
    getAllCitis(query+search).then(setCities);

  
}



  return (
    <div >
      <NavBarcities />
      <div>   <div className="mb-3">

        <input type="text" className="form-control col-8" ref={inputsearch} />
        <button className='btn btn-primary flex grow-1' onClick={handleclick} >enviar</button>
      </div></div>
      <h1 className="text-center my-auto">cities</h1>
      <div className='row tarjeta2'> {
        cities.map(citi => <CardsCitites key={citi.country} data={citi} />)
      }</div>
      <Footer />
    </div>
  )
}

export default Cities