import API from '../BaseUrl';


export const fetchCharacter = async (valuePage, valueSearch) => {
    let urlCharacter = `people/?page=${valuePage}&search=${valueSearch}`;
    return await API.get(urlCharacter).then((res) => {
        return res.data;
    }).catch((err) => {
        console.log(err);
    })
}

export const fetchMovies = async () => {
    let urlMovies = `films/`;
    return await API.get(urlMovies).then((res) => {
        return res.data;
    }).catch((err) => {
        console.log(err);
    })
}

export const fetchMoviesId = async (valueId) => {
    let urlMovies = `films/${valueId}`;
    return await API.get(urlMovies).then((res) => {
        return res.data;
    }).catch((err) => {
        console.log(err);
    })
}

export const fetchCharacterId = async (valueId) => {
    let urlMovies = `people/${valueId}`;
    return await API.get(urlMovies).then((res) => {
        return res.data;
    }).catch((err) => {
        console.log(err);
    })
}

export const fetchSearchCharacter = async (valueSearch) => {
    let urlCharacter = `people/?search=${valueSearch}`;
    return await API.get(urlCharacter).then((res) => {
        return res.data;
    }).catch((err) => {
        console.log(err);
    })
}

export const fetchSearchMovie = async (valueSearch) => {
    let urlMovies = `films/?search=${valueSearch}`;
    return await API.get(urlMovies).then((res) => {
        return res.data;
    }).catch((err) => {
        console.log(err);
    })
}