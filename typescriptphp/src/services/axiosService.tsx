import createAxios from "./createAxios";


export const DEFAULT_URL: string = "http://127.0.0.1:8000";

class axiosService 
{
    login: any = (data: Object) => 
    {
        return createAxios.post(DEFAULT_URL+'/api/auth/login', data);
    }

    register: any = (data: Object) => 
    {
        return createAxios.post(DEFAULT_URL+'/api/auth/register', data);
    }
}

export default new axiosService();