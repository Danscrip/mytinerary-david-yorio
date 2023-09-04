import axios from "axios"
//import { useParams } from 'react-router-dom';





export const getALLItinerary = async (queryParam="") => {
//
const URL_BASE = `http://localhost:3000/api/itinerary?country=`


try {
    
const response = await axios(URL_BASE+queryParam)
const data = response.data.res
console.log(data);

return data;

} catch (err) {
    return [] 
    }

}