import {create} from 'apisauce'
import cache from '../utility/cache'
import authStorage from "../auth/storage"


const apiClient = create({
    baseURL:'http:/10.0.0.26:9000/api'
})

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken()

  if(!authToken) return;
  request.headers["x-auth-token"] = authToken;
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