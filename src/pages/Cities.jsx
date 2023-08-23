import React, { useState, useEffect } from 'react'
import NavBarcities from '../components/NavBarCities/NavBarcities'
import Footer from '../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CardsCitites from '../components/Cards/CardsCitites'





const Cities = () => {
  const params = useParams()
  console.log(params)
  const [cities, setCities] = useState([])

  useEffect(() => {
    axios('http://localhost:3000/api/cities')
      .then(res =>  setCities(res.data.response))

  }, [])

  return (
    <div> 
        <NavBarcities/>
         <h1 className="text-center my-auto">cities</h1>
         {
        cities.map(citi => <CardsCitites key={citi.country} data={citi} />)
      }
         <Footer/>
         </div>
  )
}

export default Cities