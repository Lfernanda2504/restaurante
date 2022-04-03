import axios from 'axios';

export const loginToken = async (datos) => {
    const res = axios.post('http://challenge-react.alkemy.org/', datos);
    console.log(datos, res)
    return res.then(response => response.data)
    
}

