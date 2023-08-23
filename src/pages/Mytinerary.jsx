import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import '../App.css'
import Carrousel from '../components/Carrousel/Carrousel'





const Mytinerary = () => {
  return (
    <div className='card .container-fluid'>
     <header>
<NavBar />
     </header>
     <main>
<Carrousel />

     </main>
     
     <footer>
<Footer/>

     </footer>
      


      </div>
  )
}

export default Mytinerary