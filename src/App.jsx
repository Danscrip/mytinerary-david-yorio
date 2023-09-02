import { useState } from 'react'
import Mytinerary from './pages/mytinerary'

import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Cities from './pages/cities'
import CitiDetails from './pages/CitiDetails'
//import Cardcitidetails from './components/Cards/Cardcitidetails'



const router = createBrowserRouter([
     {
       path: '/',
       element: <Mytinerary />,
       
     },
     { path:'/Cities', element: <Cities /> },

   
     { path:'/CitiDetails/:id', element: <CitiDetails /> },

   ])
function App() {
  const [count, setCount] = useState(0)

 return (
   

     <RouterProvider router={router} />

   

  )
}


export default App
