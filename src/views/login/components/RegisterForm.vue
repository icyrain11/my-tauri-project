<template>
  <div class="register-form-container">
    <a-form
      :model="formState"
      name="normal_login"
      class="register-form"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item name="email">
        <a-input
          v-model:value="formState.phone"
          class="register-form-input"
          placeholder="手机"
        >
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item name="password">
        <a-input
          placeholder="用户昵称"
          v-model:value="formState.username"
          class="register-form-input"
        >
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item name="password">
        <a-input-password
          placeholder="密码"
          v-model:value="formState.password"
          class="register-form-input"
        >
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-form-item>

      <a-form-item name="code" class="register-form-input">
        <a-input
          placeholder="验证码"
          v-model:value="formState.code"
          class="register-form-input"
        >
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item>
        <a class="register-form-forgot" href="">登录</a>
      </a-form-item>

      <a-form-item>
        <a-button
          :disabled="disabled"
          type="primary"
          shape="round"
          html-type="submit"
          class="register-form-button"
          @click="register()"
        >
          注册
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
   <script lang="ts" setup>
import { defineComponent, reactive, computed, ref } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { UseUserStore } from "@/store/modules/user";
import { registerByPhone } from "@/api/sys/register";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";

const router = useRouter();
interface FormState {
  phone: string;
  username: string;
  password: string;
  code: string;
  //   passwordConfirm: string;
}

const formState = reactive<FormState>({
  phone: "",
  username: "",
  password: "",
  code: "",
  //   passwordConfirm: "",
});

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const disabled = computed(() => {
  return !(formState.phone && formState.password);
});

/**
 * @description 注册
 */
const register = async () => {
  try {
    const data = await registerByPhone(formState);
    console.log(data);
    if (data.code == 20000) {
      message.success("注册成功!");
      router.push("/login");
    }
  } catch (err) {
    console.log(err);
  }
};
</script>
  
  
  <style scoped>
.register-form {
  position: fixed;
  height: 450px;
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

.register-form-input {
  border-radius: 12px;
}

.register-form-button {
  width: 100%;
}
</style>
    