import {
    PageCategory
} from '../_config/Constants';
const INITIAL_STATE = {
    PageCategory: [],
    categoryId: [],
    isLoadingPageCategoryFeed: false,
    isErrorPageCategoryFeed: false,
}

const PageCategoryReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PageCategory.GET_PAGE_CATEGORY_PENDING:
            return {
                ...state,
                isLoadingPageCategoryFeed: true
            }

        case PageCategory.GET_PAGE_CATEGORY_FULFILLED:
            return {
                ...state,
                isLoadingPageCategoryFeed: false,
                PageCategory: action.payload.data,
                categoryId: action.payload.data.categoryId
            }

        case PageCategory.GET_PAGE_CATEGORY_REJECTED:
            return {
                ...state,
                isLoadingPageTodayFeed: false,
                isErrorPageCategoryFeed: true
            }
        default:
            return state;
    }

}
export default PageCategoryReducers;