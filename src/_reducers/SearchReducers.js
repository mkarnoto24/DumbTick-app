import {
    SearchEvent
} from '../_config/Constants';
const INITIAL_STATE = {
    EventSearch: [],
    isLoadingEventFeed: false,
    isErrorEventFeed: false,
}

const EventSearchReducers = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case SearchEvent.GET_SEARCH_EVENT_PENDING:
            return {
                ...state,
                isLoadingEventFeed: true
            }

        case SearchEvent.GET_SEARCH_EVENT_FULFILLED:
            return {
                ...state,
                isLoadingEventFeed: false,
                EventSearch: action.payload.data
            }

        case SearchEvent.GET_SEARCH_EVENT_REJECTED:
            return {
                ...state,
                isLoadingEventFeed: false,
                isErrorEventFeed: true
            }
        default:
            return state;
    }

}
export default EventSearchReducers;