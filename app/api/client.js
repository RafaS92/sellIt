import {create} from 'apisauce'
import cache from '../utility/cache'


const apiClient = create({
    baseURL:'http:/10.0.0.26:9000/api'
})

const get = apiClient.get
apiClient.get = async (url,params,axiosConfig) => {
const response = get(url,params,axiosConfig) 


if(response.ok) {
    cache.storage(url,response.data)
    return response
}

const data = await cache.get(url)
return data ? {ok:true,data} : response;


}

export default apiClient