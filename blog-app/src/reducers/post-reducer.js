export const postsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_API_DATA':
            return action.payload;
        default:
            return state;
    }
}

export const userReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_USER_DATA':
            return [...state, action.payload];
        default:
            return state;
    }
}