const INITIAL_STATE = {
    page: 1
}

const CharacterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "CHARACTER_SUCCESS":
            return { page: action.payload };
        case "CHARACTER_FAIL":
            return INITIAL_STATE;
        default:
            return state;
    }
}

export default CharacterReducer;