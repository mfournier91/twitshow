const {getConfig} = require('../../../backend/config');

const api = getConfig("backendUri")+"api"




export default {
    getInitialData: () => {
        const urls = [`${api}/users`,`${api}/tweets`]
        var promises = urls.map(url => fetch(url).then(data => data.json()));
        return Promise.all(promises)
    },
}