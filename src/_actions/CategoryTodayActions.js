import {
    CategoryToday
} from '../_config/Constants';
import axios from 'axios';
const API = "http://localhost:5000/api/v1/";

export const getCategoryToday = () => ({
    type: CategoryToday.GET_CATEGORY_TODAY,
    payload: axios.get(`${API}/events`)
})