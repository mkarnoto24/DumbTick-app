import {
    ProfileTypes
} from '../_config/Constants';
import axios from 'axios';
const API = "http://localhost:5000/api/v1/";

export const getProfile = (idUser) => ({
    type: ProfileTypes.GET_PROFILE,
    payload: axios.get(`${API}/profile/${idUser}`)
})