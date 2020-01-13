import {
    CategoryTypes
} from '../_config/Constants';
const INITIAL_STATE = {
    Category: [],
    isLoadingCategoryFeed: false,
    isErrorCategoryFeed: false,
}

const categoryReducers = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CategoryTypes.GET_CATEGORY_PENDING:
            return {
                ...state,
                isLoadingCategoryFeed: true
            }

        case CategoryTypes.GET_CATEGORY_FULFILLED:
            return {
                ...state,
                isLoadingCategoryFeed: false,
                Category: action.payload.data
            }

        case CategoryTypes.GET_CATEGORY_REJECTED:
            return {
                ...state,
                isLoadingCategoryFeed: false,
                isErrorCategoryFeed: true
            }
        default:
            return state;
    }

}
export default categoryReducers;