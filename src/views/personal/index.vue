<template>
    <div class="main">
      <el-col :span="4">
      <div class="left">
          <el-menu
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            default-active="/personalInfo"
            :router="true"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-home"></i>
                <span>个人中心</span>
              </template>
              <el-menu-item index="/personalInfo">基本资料</el-menu-item>
              <el-menu-item index="/personalHistory">我的处理记录</el-menu-item>
            </el-submenu>
          </el-menu>
      </div>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </div>
</template>

<script>
  export default {
    name: 'index',
    mounted() {
      console.log(this.$route.path)
    },
    methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .main{
    height: auto;
    max-height: 100vh;
    overflow: hidden;
  }
  .left{
    display: block;
    min-height: 100vh;
    height: auto;
    background-color: rgb(84,92,100);
  }
</style>
