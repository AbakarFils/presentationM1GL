import axios from 'axios';

export const register = newUSer => {
    return axios.post('api/register', {newUSer}, {
        headers : {'Content-Type' : 'application-json'}
    })
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        })
};

export const edit = user => {
    return axios.put('api/authenticate', {
        username: user.email,
        password: user.password,
        rememberMe: true
    }, {
        headers : {'Content-Type' : 'application-json'}
    })
        .then(res => {
            localStorage.setItem('userToken', res.data.token);
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        })
};
//ou params{id:user.id}
export const getById = user => {
    return  axios.get('api/users/?id=' + user.id)
        .then(function(response){
            console.log(response.data);
            console.log(response.status); // ex.: 200
        });
}

export const getAll =  () => {
    return  axios.get('api/users')
        .then(function(response) {
            return response.data;

        });
}

export const getUserAvatar = () => {
    return axios({
        method: 'get',
        url: 'api',
        responseType: 'stream'
        })
        .then(function (response) {
           // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
        });
};

