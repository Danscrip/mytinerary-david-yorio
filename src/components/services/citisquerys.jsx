import axios from "axios"
import { Link, NavLink } from 'react-router-dom';



const URL_BASE = 'http://localhost:3000/api/cities'

export const getAllCitis = async (queryParam="") => {

try {
    
const response = await axios(URL_BASE+queryParam)
return response.data.res
//console.log(response.data.res);
} catch (err) {
    return []
    }

}




