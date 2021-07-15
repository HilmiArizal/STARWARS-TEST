import API from '../BaseUrl';


export const fetchCharacter = async (valuePage, valueSearch) => {
    let urlCharacter = `people/?page=${valuePage}&search=${valueSearch}`;
    return await API.get(urlCharacter).then((res) => {
        return res.data;
    }).catch((err) => {
        console.log(err);
    })
}

export const fetchMovies = async (value) => {
    let urlMovies = `films`;
    return await API.get(urlMovies).then((res) => {
        return res.data;
    })
}