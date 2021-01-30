import cuid from 'cuid';

export default function manageReviews(state = [], action) {
    
    switch(action.type) {
            case "ADD_REVIEW": {
            const newReview = { id: cuid(), text: action.review.text, restaurantId: action.review.restaurantId}
            return [...state, newReview]
        }
        case 'DELETE_REVIEW': {
            const reviews = state.filter(r => r.id !== action.id)
            return reviews
        }
        case 'DELETE_RESTAURANT':
            const reviews = state.filter(review => review.restaurantId !== action.id)
            return reviews
        default:
            return state;
    }
}