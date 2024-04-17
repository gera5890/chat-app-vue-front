import http  from "./http_services";

export function register(data){
     const response = http.post('auth/register', data);
    return response;
};

export function login(data){
    const response = http.post('auth/login', data);
    return response;
}