import axios, { AxiosPromise } from 'axios';

export default abstract class HttpRequestService {

    public abstract getPrefix(): string;

    public abstract getPostfix(): string;

    public get<T>(what: string, atr ?: string): AxiosPromise<T> {
        const _atr = atr !== undefined ? '&' + atr : ''; // extra attributes
        
        return axios.get<T>(this.getPrefix() + what + this.getPostfix() + _atr);
    }

}