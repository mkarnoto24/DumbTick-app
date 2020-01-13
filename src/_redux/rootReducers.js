import { combineReducers } from 'redux';
import categoryReducers from '../_reducers/CategoryReducers';
import CategoryTodayReduser from '../_reducers/CategoryTodayReducers';
import PageCategoryReducers from '../_reducers/PageCategoryReducers';
import { login } from '../_reducers/LoginReducers';
import EventSearchReducers from '../_reducers/SearchReducers';
import EventDetailReducers from '../_reducers/EventDetailReducers';
import ProfileReducers from '../_reducers/ProfileReducers';


export default combineReducers({
    login,
    Profile: ProfileReducers,
    EventDetail: EventDetailReducers,
    EventSearch: EventSearchReducers,
    category: categoryReducers,
    PageCategory: PageCategoryReducers,
    CategoryToday: CategoryTodayReduser
})