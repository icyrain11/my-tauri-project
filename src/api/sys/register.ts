import request from "@/utils/request";

//表单数据
interface RegisterReqData {
    phone : string,
    password : string
    username : string
}

/**
 * @description register api
 * @returns null
 */
export const registerByPhone = (paramas: RegisterReqData) => {
  return request.post<RegisterReqData>("/user/register", paramas);
};
