import {
    EventDetail
} from '../_config/Constants';
import axios from 'axios';
const API = "http://localhost:5000/api/v1/";

export const getEventDetail = (id) => ({
    type: EventDetail.GET_EVENT_DETAIL,
    payload: axios.get(`${API}/event/${id}/events`)
})