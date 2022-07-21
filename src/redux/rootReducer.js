import { combineReducers } from "redux";
import laneReducer from "./lane/reducer"

const rootReducer = combineReducers({
    laneReducer
});

export default rootReducer