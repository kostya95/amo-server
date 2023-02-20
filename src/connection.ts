import axios from "axios";

const api = axios.create()
export function initApi() {
    axios.defaults.headers.common['X-Client-Id'] = 30878566
    return axios.get('https://test.gnzs.ru/oauth/get-token.php').then(response => {
        api.defaults.baseURL = `https://${response.data.base_domain}/api/v4`;
        api.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token
        api.defaults.headers.common['Content-Type'] = 'Bearer ' + response.data.access_token
    })
}

export default api