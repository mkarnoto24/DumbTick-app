import {
    ProfileTypes
} from '../_config/Constants';
const INITIAL_STATE = {
    Profile: [],
    isLoadingProfileFeed: false,
    isErrorProfileFeed: false,
}

const ProfileReducers = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ProfileTypes.GET_PROFILE:
            return {
                ...state,
                isLoadingProfileFeed: true
            }

        case ProfileTypes.GET_PROFILE_FULFILLED:
            return {
                ...state,
                isLoadingProfileFeed: false,
                Profile: action.payload.data
            }

        case ProfileTypes.GET_PROFILE_REJECTED:
            return {
                ...state,
                isLoadingProfileFeed: false,
                isErrorProfileFeed: true
            }
        default:
            return state;
    }

}
export default ProfileReducers;