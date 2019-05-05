import Reducer1 from "./reducer1";
import UserReducer from "./user_reducer";
import { combineReducers } from "redux";
import AuthReducer from "./auth_reducer";

const rootReducer = combineReducers({
    reducer1: Reducer1,
    user_reducer: UserReducer,
    auth_reducer: AuthReducer
});

export default rootReducer;
