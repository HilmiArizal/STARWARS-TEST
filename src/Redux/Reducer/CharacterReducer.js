const INITIAL_STATE = {
    page: 1,
    search: ''
}

const CharacterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "PAGE_CHARACTER_SUCCESS":
            return { ...state, page: action.payload };
        case "SEARCH_CHARACTER_SUCCESS":
            return { ...state, search: action.payload };
        case "CHARACTER_FAIL":
            return INITIAL_STATE;
        default:
            return state;
    }
}

export default CharacterReducer;