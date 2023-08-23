import { useState } from 'react'
import Mytinerary from './pages/mytinerary'

import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Cities from './pages/cities'

const router = createBrowserRouter([
     {
       path: '/',
       element: <Mytinerary />,
       
     },
     { path:'/Cities', element: <Cities /> },
   
   ])
function App() {
  const [count, setCount] = useState(0)

 return (
   

     <RouterProvider router={router} />

   

  )
}


export default App
