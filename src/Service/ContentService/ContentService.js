import API from '../BaseUrl';


export const fetchCharacter = async (value) => {
    let urlCharacter = `people/?page=${value}`;
    return await API.get(urlCharacter).then((res) => {
        return res.data;
    }).catch((err) => {
        console.log(err);
    })
}