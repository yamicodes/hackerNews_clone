function createStore(reducer){
    let currentState = reducer(initialState,{});
    return {
        getState: () => currentState,
        dispatch: action => {
            currentState = reducer(currentState, action);
        }
    }
}
const initialState = {
    favourites: []
}

function favouriteReducer(state ,action){
    switch (action.type){
        case "ADD_FAVOURITE": {
            const addedFavourite = action.payload.favourite;
            const favourites = [...state.favourites, addedFavourite];
            return { favourites };
        }
        case "REMOVE_FAVOURITE" : {
            const removedFavourite = action.payload.favourite;
            const favourites = state.favourites.filter(favourite => favourite.id !== removedFavourite.id);
            return { favourites };
        }
        default:
            return state;
    }
}

const store = createStore(favouriteReducer);
export default store;
