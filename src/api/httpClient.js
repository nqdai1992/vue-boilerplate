import axios from 'axios'
import logRequestInfo from './interceptorRequest/logRequestInfo'
import logResponseInfo from './interceptorResponse/logResponseInfo'

const httpClient = axios.create({
    baseURL: process.env.VUE_APP_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

httpClient.interceptors.request.use(logRequestInfo.alertLoading, logRequestInfo.alertError)
httpClient.interceptors.response.use(logResponseInfo.alertLoading, logResponseInfo.alertError)

export default httpClient;