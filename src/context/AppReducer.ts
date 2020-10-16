export default (state:any, action:any) => {
    switch (action.type) {
        case "ADD_BOOK_TO_WISHLIST":
            return{
                ...state,
                wishList: [action.payload, ...state]
            }
            break;
    
        default:
            return state;
    }
};