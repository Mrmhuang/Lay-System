<template>
  <div class="login-register-container">
    <el-form
      ref="loginForm"
      v-show="isLogin"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      autocomplete="on"
      label-position="left"
      v-loading="LoginRegisterloading"
    >
      <div class="decoration"></div>
      <div class="title-container">
        <h3 class="title">懂律助手</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="用户名"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>
      <el-tooltip
        v-model="capsTooltip"
        content="大写已开启"
        placement="right"
        manual
      >
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="密码"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon
              :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
            />
          </span>
        </el-form-item>
      </el-tooltip>
      <el-button
        :loading="loading"
        type="primary"
        style="width:100%;margin-bottom:30px;"
        @click.native.prevent="handleLogin"
        >登陆</el-button
      >
      <div class="toRegister">
        新用户？点此 <a href="#" @click="toRegister">创建个账号</a>
      </div>
    </el-form>
    <el-form
      ref="registerForm"
      v-show="!isLogin"
      :model="registerForm"
      :rules="registerRules"
      class="register-form"
      autocomplete="on"
      label-position="left"
      v-loading="LoginRegisterloading"
    >
      <div class="decoration"></div>
      <div class="title-container">
        <h3 class="title">懂律助手</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="registerForm.username"
          placeholder="请输入用户名"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>
      <el-tooltip
        v-model="capsTooltip"
        content="大写已开启"
        placement="right"
        manual
      >
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType2"
            ref="password"
            v-model="registerForm.password"
            :type="passwordType"
            placeholder="请输入密码"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleRegister"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon
              :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
            />
          </span>
        </el-form-item>
      </el-tooltip>
      <div class="role">
        <span>你的身份是：</span>
        <el-radio v-model="rolevalue" label="admin">管理员</el-radio>
        <el-radio v-model="rolevalue" label="judge">法官</el-radio>
        <el-radio v-model="rolevalue" label="user">普通用户</el-radio>
      </div>
      <el-button
        :loading="loading"
        type="primary"
        style="width:100%;margin-bottom:30px;"
        @click.native.prevent="handleRegister"
        >注册</el-button
      >
      <div class="toLogin">已有账号？<a href="#" @click="toLogin">登陆</a></div>
    </el-form>
  </div>
</template>

<script>
import { validUsername } from "@/utils/validate";

export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value.length < 3) {
        callback(new Error("请输入不少于3个字符的用户名"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码不能少于6个字符"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: ""
      },
      registerForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ]
      },
      registerRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ]
      },
      rolevalue: null,
      passwordType: "password",
      passwordType2: "password",
      capsTooltip: false,
      loading: false,
      redirect: undefined,
      otherQuery: {},
      isLogin: true,
      LoginRegisterloading: false
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query;
        if (query) {
          this.redirect = query.redirect;
          this.otherQuery = this.getOtherQuery(query);
        }
      },
      immediate: true
    }
  },
  mounted() {
    if (this.loginForm.username === "") {
      this.$refs.username.focus();
    } else if (this.loginForm.password === "") {
      this.$refs.password.focus();
    }
  },
  methods: {
    checkCapslock(e) {
      const { key } = e;
      this.capsTooltip = key && key.length === 1 && key >= "A" && key <= "Z";
    },
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then((result) => {
              this.$router.push({
                path: this.redirect || "/",
                query: this.otherQuery
              });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    toRegister() {
      this.isLogin = false;
      this.LoginRegisterloading = true;
      setTimeout(() => {
        this.LoginRegisterloading = false;
      }, 300);
    },
    toLogin() {
      this.isLogin = true;
      this.LoginRegisterloading = true;
      setTimeout(() => {
        this.LoginRegisterloading = false;
      }, 300);
    },
    handleRegister() {},
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== "redirect") {
          acc[cur] = query[cur];
        }
        return acc;
      }, {});
    }
  }
};
</script>

<style lang="scss">
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-register-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-register-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 1px;
      padding: 12px 5px 12px 15px;
      color: black;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 2px solid transparent;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    color: #454545;
  }

  .toLogin a,
  .toRegister a {
    color: blue;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-register-container {
  min-height: 100%;
  width: 100%;
  position: relative;
  background: url("../../assets/LoginImg/law-1.jpg") no-repeat;
  background-size: cover;
  overflow: hidden;

  .login-form,
  .register-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 50px 35px 30px;
    margin: 0 auto;
    overflow: hidden;
    .decoration {
      position: absolute;
      width: 5px;
      height: 15%;
      left: 0;
      top: 30px;
      background-color: rgb(3, 106, 113);
    }
    .role {
      margin-bottom: 20px;
      text-indent: 5px;
      span {
        font-weight: 700;
      }
    }
  }

  .login-form,
  .register-form {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(255, 255, 255, 0.8);
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 37px;
      color: #00474f;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}

.el-radio {
  color: black;
}
</style>
