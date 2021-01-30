import cuid from 'cuid';

export default function manageRestaurants(state = [], action) {

    switch (action.type) {
        case "ADD_RESTAURANT": {
            const newRestaurant = { id: cuid(), text: action.text }
            return [...state, newRestaurant]
        }
        case 'DELETE_RESTAURANT': {
            const restaurants = state.filter(r => r.id !== action.id)
            return restaurants
        }
        default:
            return state;
    }
}
