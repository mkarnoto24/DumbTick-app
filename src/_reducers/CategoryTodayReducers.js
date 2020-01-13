import {
    CategoryToday
} from '../_config/Constants';
const INITIAL_STATE = {
    CategoryToday: [],
    isLoadingPageTodayFeed: false,
    isErrorPageTodayFeed: false,
}

const CategoryTodayReduser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CategoryToday.GET_CATEGORY_TODAY_PENDING:
            return {
                ...state,
                isLoadingPageFTodayeed: true
            }

        case CategoryToday.GET_CATEGORY_TODAY_FULFILLED:
            return {
                ...state,
                isLoadingPageTodayFeed: false,
                CategoryToday: action.payload.data
            }

        case CategoryToday.GET_CATEGORY_TODAY_REJECTED:
            return {
                ...state,
                isLoadingPageTodayFeed: false,
                isErrorPageTodayFeed: true
            }
        default:
            return state;
    }

}
export default CategoryTodayReduser;