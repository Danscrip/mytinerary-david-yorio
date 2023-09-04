import { useState } from 'react'
import Mytinerary from './pages/mytinerary'

import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Cities from './pages/cities'
import CitiDetails from './pages/CitiDetails'
import Under from './components/under/under'
//import Cardcitidetails from './components/Cards/Cardcitidetails'


const router = createBrowserRouter([
     {
       path: '/',
       element: <Mytinerary />,
       
     },
     { path:'/Cities', element: <Cities /> },

   
     { path:'/CitiDetails/:country', element: <CitiDetails /> },
     { path:'/Under', element: <Under/> }
   ])
function App() {
  const [count, setCount] = useState(0)

 return (
   

     <RouterProvider router={router} />

   

  )
}


export default App
