import {
    STATS_LOGIN, STATS_LOGIN_PENDING

} from "../_config/Constants";

export const login = login => {
    return {
        type: STATS_LOGIN,
        payload: login
    };
};
export const loginPending = () => {
    return {
        type: STATS_LOGIN_PENDING
    };
}