import { defineStore } from "pinia";
import { store } from "@/store/index";
import { doLoginByUsername, Login } from "@/api/sys/login";

interface UserInfo {}

export const UseUserStore = defineStore("main", {
  state: () => {
    return { token: "" };
  },
  getters: {
    //返回用户所存储的token
    getUserToken(state): string {
      return state.token;
    },
  },
  actions: {
    /**
     * @description: login
     */
    async login(loginForm: Login.LoginReqData) {
      const data = await doLoginByUsername(loginForm);
      console.log(data);
    },
  },
});
