import axios from 'axios';

/**
 * cette methode va enyoer un new user
 * au service et sera inserer dans la
 * base de donnée
 * @param newUSer
 * @returns {Promise<AxiosResponse<T> | never>}
 */
export const save = newUSer => {
    return axios.post('api/register', {newUSer}, {
        headers : {'Content-Type' : 'application-json'}
    })
        .then(res => {
            return res;
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        })
};

/**
 * methode pour mettre
 * à jour un utilisateur en base
 * @param user
 * @returns {Promise<AxiosResponse<T> | never>}
 */
export const edit = user => {
    return axios.put('api/user', {
        user
    }, {
        headers : {'Content-Type' : 'application-json'}
    })
        .then(res => {
            return res;
        })
        .catch(error => {
            return ;
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

