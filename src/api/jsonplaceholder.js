import axios from 'axios';

const getUsers = (url)=> {
    axios.get(url).then(res=> res);
}

let api= {
    getUsers
};
export default api;