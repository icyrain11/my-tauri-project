<template>
  <a-form
    :model="formState"
    name="normal_login"
    class="login-form"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username">
        <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
      </a-input>
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>

    <a-form-item>
      <a-form-item name="remember" no-style>
        <!-- <a-checkbox v-model:checked="formState.remember"
          >Remember me</a-checkbox
        > -->
      </a-form-item>
      <a class="login-form-forgot" href="">Forgot password</a>
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
        Log in
      </a-button>
      Or
      <a href="">register now!</a>
    </a-form-item>
  </a-form>
</template>
 <script lang="ts" setup>
import { defineComponent, reactive, computed } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { UseUserStore } from "@/store/modules/user";
import { doLoginByUsername } from "@/api/sys/login";

const userStore = UseUserStore();

interface FormState {
  username: string;
  password: string;
  // remember: boolean;
}

const formState = reactive<FormState>({
  username: "",
  password: "",
  // remember: true,
});
const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const disabled = computed(() => {
  return !(formState.username && formState.password);
});

/**
 * 登录接口
 */
const login = async () => {
  const data = await doLoginByUsername(formState);
  console.log(data);
};
</script>


<style scoped>
.login-form {
  position: absolute;
  max-width: 300px;
}
.login-form-forgot {
  float: right;
}
.login-form-button {
  width: 100%;
}
</style>
  