import { defineStore } from "pinia";
import { store } from "@/store/index";

export const UseUserStore = defineStore("main", {
  //用户数据
  state: () => ({
    token: "" as String,
    userInfo: null as UserInfo | null,
  }),
  getters: {
    /**
     * 获取用户token信息
     * @param state 
     * @returns 
     */
    getUsetToken: (state): String => {
      return state.token;
    },
    
  },
  actions: {},
});

interface UserInfo {
  name: String;
}
