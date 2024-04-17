import { defineStore } from "pinia";

export const useAuthStore = defineStore('authStore', {
    state: () => {
        return {
            user: {},
            isLoggedIn: false
        }
    },
    actions: {
        setUser(user){
            this.user = user;
            this.isLoggedIn = true;
        },
        setToken(token){
            localStorage.setItem('token',token)
        },
        getToken(){
            const token = localStorage.getItem('token')

            return token ? token : null
        },
        removeToken() {
            localStorage.removeItem('token');
        }
    }
})