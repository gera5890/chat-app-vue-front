import { defineStore } from "pinia";

export const useCommonStore = defineStore('commonStore',{
  state: () =>{
    return{
      test: "Hola desde pinia store"
    }
  }
});
