import {
    STATS_LOGIN, STATS_LOGIN_PENDING

} from "../_config/Constants"

const initialState = {
    isLogin: false
};

export const login = (state = initialState, action) => {
    switch (action.type) {
        case STATS_LOGIN:
            return {
                isLogin: true
            }
        case STATS_LOGIN_PENDING:
            return {
                isLogin: false
            }

        default:
            return state;
    }
}