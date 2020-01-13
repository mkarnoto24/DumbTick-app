import {
    SearchEvent
} from '../_config/Constants';
import axios from 'axios';
const API = "http://localhost:5000/api/v1/";

export const getsearchEvent = (keyword) => ({
    type: SearchEvent.GET_SEARCH_EVENT,
    payload: axios.get(`${API}/events/${keyword}`)
})