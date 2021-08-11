<template>
  <div class="main">
    <el-page-header @back="goBack" title="返回懂律中心">
    </el-page-header>
    <el-col :span="5" :offset="1">
      <div class="left">
        <div class="avatar">
          <img src="@/assets/NavBarImg/头像1.png" alt="">
        </div>
        <div class="introduction">
          <p class="nickname"></p>
          <p>这个人很懒，什么都没有留下~~~~~~...</p>
        </div>
      </div>
    </el-col>
    <el-col :span="15" :offset="1">
      <div class="information">
        <p class="title">基本资料</p>
        <div>
          <el-form :model="user" label-position="right" label-width="80px">
            <el-form-item label="账号">
              <el-input v-model="user.userid" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="昵称">
              <el-input v-model="user.nickname" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="我的身份">
              <el-input style="width: 300px" v-model="user.faguan" disabled>

              </el-input>
            </el-form-item>
            <el-form-item label="个人说明">
              <el-input v-model="user.introduction" type="textarea" :rows="10" style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">保存设置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-col>
    <el-col></el-col>
  </div>
</template>

<script>
  import {mapGetters} from "vuex"
  export default {
    name: 'personalInfo',
    data(){
      return {
        user:{
          nickname:'king2',
          userid:'2',
          introduction:'这个人很懒',
          faguan:'法官'
        }
      }
    },
    computed:{
      ...mapGetters([
        'nickname',
        'userid'
      ])
    },
    methods:{
      goBack(){
        this.$router.push('/basic')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    padding: 20px 0px 0 20px;
    min-height: 100vh;
    height: auto;
    background-color: rgb(245,245,245);
  }

  .left{
    height: 290px;
    width: 300px;
    background-color: white;
    margin-top: 50px;
    box-shadow: 0 0 1px 0 gray;
    border-radius: 3px;
    padding: 30px;
    text-align: center;
    .avatar{
      img{
        width: 90px;
      }
    }
    .introduction{
      margin-top: 10px;
    }
  }

  .information{
    width: 780px;
    min-height: 85vh;
    background-color: white;
    margin-top: 50px;
    box-shadow: 0 0 1px 0 gray;
    overflow: hidden;
    .title{
      font-size: 18px;
      color: black;
      font-weight: 500;
      text-indent: 20px;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid rgb(245,245,245);
    }
  }
</style>
