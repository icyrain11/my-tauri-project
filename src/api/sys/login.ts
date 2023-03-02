import request from "@/utils/request";

export namespace Login {
  export interface LoginResData {
    token: string;
  }

  export interface LoginReqData {
    username: string;
    password: string;
  }
}

export const doLoginByUsername = (paramas: Login.LoginReqData) => {
  return request.post<Login.LoginResData>("/login/username", paramas);
};
