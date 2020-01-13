import {
    CategoryTypes
} from '../_config/Constants';
import axios from 'axios';
const API = "http://localhost:5000/api/v1/";

export const getCategory = () => ({
    type: CategoryTypes.GET_CATEGORY,
    payload: axios.get(`${API}/categories`)
})