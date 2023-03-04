import { defineStore } from "pinia";
import { store } from "@/store/index";
import { loginByPhone, LoginReqData, doLogout } from "@/api/sys/login";

interface UserInfo {
  username: string;
}

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
    async login(loginForm: LoginReqData) {
      try{
        const res = await loginByPhone(loginForm);
        const token: string = res.data.token;
        this.token = token;
        localStorage.setItem("Authoreziton", token)
      }catch (error){
        
      }
    },
    /**
     * @description: logout
     */
    async logout() {
      const data = await doLogout();
      //如果成功则退出登录
      localStorage.setItem("token", "");
    },
  },
});
