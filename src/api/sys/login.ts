import request from "@/utils/request";

export interface LoginResData {
  token: string;
}

export interface LoginReqData {
  phone: string;
  code: string;
}

/**
 * @description login by username
 * @returns LoginResData
 */
export const loginByPhone = (paramas: LoginReqData) => {
  return request.post<LoginResData>("/user/login", paramas);
};

/**
 * @description lougout api
 * @returns null
 */
export const doLogout = () => {
  return request.post("/logout");
};

/**
 * @description getLoginCode api
 * @returns null
 */
export const getLoginCode = (phone: String) => {
  return request.post(`/user/phoneCode?phone=${phone}`);
};
