<template>
  <div class="login-form-container">
    <a-form
      :model="formState"
      name="normal_login"
      class="login-form"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item> <span> 手机登录 </span></a-form-item>
      <a-form-item name="phone">
        <a-input
          v-model:value="formState.phone"
          class="login-form-input"
          placeholder="请输入手机号"
        >
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item name="code" class="login-form-input">
        <a-input
          placeholder="验证码"
          v-model:value="formState.code"
          class="login-form-input"
        >
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item>
        <!-- <a class="login-form-forgot" href="">忘记密码</a> -->
        <a-button type="primary" shape="round" @click="getPhoneCode()"
          >获取验证码</a-button
        >
        <a href="">注册账号</a>
      </a-form-item>

      <a-form-item>
        <a-button
          :disabled="disabled"
          type="primary"
          shape="round"
          html-type="submit"
          class="login-form-button"
          @click="login()"
        >
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
 <script lang="ts" setup>
import { defineComponent, reactive, computed, ref } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { UseUserStore } from "@/store/modules/user";
import { loginByPhone, getLoginCode } from "@/api/sys/login";

const userStore = UseUserStore();

interface FormState {
  phone: string;
  code: string;
}

const formState = reactive<FormState>({
  phone: "",
  code: "",
});

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const disabled = computed(() => {
  return !(formState.phone && formState.code);
});

/**
 * @description 登录功能
 */
const login = async () => {
  try {
    const data = userStore.login(formState);
    // const data = await loginByPhone(formState);
  } catch (error) {
    console.log(error);
  }
};

/**
 * @description 获取手机验证码
 */
const getPhoneCode = async () => {
  try {
    const data = await getLoginCode(formState.phone);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
</script>


<style scoped>
.login-form {
  position: fixed;
  height: 400px;
  width: 350px;
  padding: 35px 35px 35px 24px;
  border: 1px solid #dcdfe6;
  box-shadow: 0 0 25px #909399;
  border-radius: 15px;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.login-form-input {
  border-radius: 12px;
}
.login-form-forgot {
  float: right;
}
.login-form-button {
  width: 100%;
}
</style>
  