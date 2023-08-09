import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Carrousel from './components/Carrousel/Carrousel'
import Footer from './components/Footer/Footer'



function App() {
  const [count, setCount] = useState(0)

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


export default App
