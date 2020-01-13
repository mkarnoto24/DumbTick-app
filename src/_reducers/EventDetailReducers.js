import {
    EventDetail
} from '../_config/Constants';
const INITIAL_STATE = {
    EventDetail: [],
    isLoadingEventDetailFeed: false,
    isErrorEventDetailFeed: false,
}

const eventDetailReducers = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case EventDetail.GET_EVENT_DETAIL:
            return {
                ...state,
                isLoadingEventDetailFeed: true
            }

        case EventDetail.GET_EVENT_DETAIL_FULFILLED:
            return {
                ...state,
                isLoadingEventDetailFeed: false,
                EventDetail: action.payload.data
            }

        case EventDetail.GET_EVENT_DETAIL_REJECTED:
            return {
                ...state,
                isLoadingEventDetailFeed: false,
                isErrorEventDetailFeed: true
            }
        default:
            return state;
    }

}
export default eventDetailReducers;