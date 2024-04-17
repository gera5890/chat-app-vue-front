<template>
     <div class="flex flex-col justify-center min-h-screen py-10 bg-gray-100">
        <div class="max-w-md mx-auto px-4 bg-white shadow-lg rounded-lg">
            <div class="p-6">
            <h2 class="text-2xl font-semibold text-gray-800 mb-6">Login to your account</h2>
            <form>
                <div class="flex flex-col pt-4">
                    <label for="name">Email: </label>
                    <input v-model="user.email" class="rounded-md p-1 border-gray-300 border" type="email">
                    <small class="text-red-700" v-if="errors.email" v-for="(error, index) in errors.email" >{{ error }}</small>
                </div>
                <div class="flex flex-col pt-4">
                    <label for="name">Password: </label>
                    <input v-model="user.password" class="rounded-md p-1 border-gray-300 border" type="password">
                    <small class="text-red-700" v-if="errors.password" v-for="(error, index) in errors.password" >{{ error }}</small>

                </div>
                <div class="text-center pt-4">
                    <button @click="handleLogin" type="button" class="cursor-pointer rounded-md bg-blue-500 p-3">Login</button>
                </div>
              
            </form>
            </div>
        </div>
    </div>
</template>

<script setup>

import { reactive, ref } from "vue"
import { login } from "@/services/auth_service";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";

const user = reactive({
    email: '',
    password: ''
});

const errors = ref([]);

const router = useRouter();

const handleLogin = async() => {
    try{

        const response = await login(user);
        toast.success(response.data.message);
        
        user.email='';
        user.password='';

        console.log(response);

    }catch (error) {
        if (error.response.status === 401) {
            toast.error(error.response.data.message);
        } else {
            errors.value = error.response.data.errors;
            toast.error(error.response.data.message);
        }
    }
}

</script>

<style>

</style>