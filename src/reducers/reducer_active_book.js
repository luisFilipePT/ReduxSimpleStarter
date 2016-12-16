/**
 * Created by luis on 16/12/2016.
 */
// State arg is not application state is only the state this reducer is responsible for
export default function (state = null, action) {

    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
            break;
        default:
            console.log("Something went wrong evaluating " + action.type + ".");
    }

    return state;
}