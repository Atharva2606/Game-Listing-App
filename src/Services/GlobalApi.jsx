import axios from "axios";
const key="de3ca023308c4d8db96fe584b8e28f8c";
const axiosCreate=axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenreList=axiosCreate.get('/genres?key='+key);
const getAllGames=axiosCreate.get('/games?key='+key)
const getGameListByGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id);
export default{
    getGenreList,
    getAllGames,
    getGameListByGenreId
}