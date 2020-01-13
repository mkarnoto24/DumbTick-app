import {
    PageCategory
} from '../_config/Constants';
import axios from 'axios';
const API = "http://localhost:5000/api/v1";

export const getPageCategory = (idCategory) => ({
    type: PageCategory.GET_PAGE_CATEGORY,
    payload: axios.get(`${API}/category/${idCategory}/events`)
})