

export const pageCharacter = (pages) => {
    return (dispatch) => {
        dispatch({
            type: 'PAGE_CHARACTER_SUCCESS',
            payload: pages
        })
    }
}

export const searchCharacter = (searchs) => {
    return (dispatch) => {
        dispatch({
            type: 'SEARCH_CHARACTER_SUCCESS',
            payload: searchs
        })
    }
}