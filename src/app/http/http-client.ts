import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";

export class HttpClient {
    instance: AxiosInstance;

    constructor(baseURL: string) {
        this.instance = axios.create({
            baseURL,
            headers: {"Content-Type": "application/json"},
        });
        this._initializeInterceptor();
    }

    _initializeInterceptor() {
        this.instance.interceptors.request.use(
            this._handleRequest,
            this._handleError
        );

        this.instance.interceptors.response.use(
            this._handleResponse,
            this._handleError
        );
    }

    _handleRequest(config: AxiosRequestConfig) {
        config.headers["Authorization"] = `Bearer xxx`;
        return config;
    }

    _handleResponse(res: AxiosResponse) {
        return res;
    }

    _handleError(error: AxiosError) {
        return Promise.reject(error);
    }
}
