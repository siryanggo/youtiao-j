import axios from 'axios'
import {BASEURL} from './common'
const request =  axios.create({
    baseURL: BASEURL,

})
export default request