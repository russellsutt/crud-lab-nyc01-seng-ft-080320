import { combineReducers } from "redux";
import manageReviews from './manageReviews'
import manageRestaurants from './manageRestaurants'


const rootReducer = combineReducers({
    restaurants: manageRestaurants,
    reviews: manageReviews
})

export default rootReducer