

export const pageCharacter = (pages) => {
    return (dispatch) => {
        dispatch({
            type: 'CHARACTER_SUCCESS',
            payload: pages
        })
    }
}