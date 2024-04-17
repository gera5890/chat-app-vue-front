<template>
    <div class="flex flex-col justify-center min-h-screen py-10 bg-gray-100">
        <div class="max-w-md mx-auto px-4 bg-white shadow-lg rounded-lg">
            <div class="p-6">
            <h2 class="text-2xl font-semibold text-gray-800 mb-6">Sign in to your account</h2>
            <form>
                <div class="flex flex-col pt-4">
                    <label for="name">First name: </label>
                    <input v-model="user.first_name" class="rounded-md p-1 border-gray-300 border" type="text" id="name" placeholder="Enter your first name" >
                    <small class="text-red-700" v-if="errors.first_name" v-for="(error, index) in errors.first_name" >{{ error }}</small>
                </div>
                <div class="flex flex-col pt-4">
                    <label for="name">Last name: </label>
                    <input v-model="user.last_name" class="rounded-md p-1 border-gray-300 border" type="text">
                    <small class="text-red-700" v-if="errors.last_name" v-for="(error, index) in errors.last_name" >{{ error }}</small>

                </div>
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
                <div class="flex flex-col pt-4">
                    <label for="name">Confirm your password: </label>
                    <input v-model="user.password_confirmation" class="rounded-md p-1 border-gray-300 border" type="password">
                </div>
                <div class="text-center pt-4">
                    <button @click="handleRegister" type="button" class="cursor-pointer rounded-md bg-blue-500 p-3">Crear cuenta</button>
                </div>
              
            </form>
            </div>
        </div>
    </div>

</template>

<script setup>

import {reactive, ref} from "vue"
import { register } from "@/services/auth_service";
import { toast } from 'vue3-toastify';
import { useRouter } from "vue-router";

const user = reactive({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const errors = ref([]);
const router = useRouter();


const handleRegister = async() => {
    try{
        const response = await register(user);
        toast.success(response.data.message)
        user.first_name= "";

        user.last_name="";
        user.email="";
        user.password="";
        user.password_confirmation="";

        errors.value = [];

        setTimeout(() => {
            router.push("/login")
        }, 3000);
        
    }catch(error){
        errors.value = error.response.data.errors
        toast.error(error.response.data.message);
    }
}





</script>

<style lang="scss" scoped>

</style>