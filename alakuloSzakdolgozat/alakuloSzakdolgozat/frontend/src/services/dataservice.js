import Axios from "axios";
Axios.defaults.baseURL = 'http://localhost:3001';

export default {

    getProductsById() {
        return Axios.get(`/`)
            .then(resp => {
                //console.log(resp.data);
                return resp.data;
            })
            .catch((err) => {
                //console.log(err);
                return Promise.reject(err)
            })
    },
    signup(UserData) {
        console.log(UserData)
        return Axios.post('/signup',UserData)
        .then(() => {})
        .catch(err => {
            console.log(err)

        })
    },
    login(UserData){
        console.log(UserData)
        return Axios.post('/login',UserData)
        .then(() => {})
        .catch(err => {
            console.log(err)

        })
    }

    
}





