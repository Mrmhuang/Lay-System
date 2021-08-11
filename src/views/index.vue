<template>
    <div class="main">
      <div class="header">
        <div class="title">
          <img src="../assets/basic/标题.png" alt="">
        </div>
        <div class="right">
          <ul>
            <router-link to="/"><li>首页</li></router-link>
            <router-link to="/basic"><li>懂律中心</li></router-link>
            <router-link to="/login" v-if="nickname==''"><li>登陆</li></router-link>
            <li class="myInfo" v-else>
              <span>你好，欢迎{{nickname}}回来</span>
<!--              <span>退出</span>-->
            </li>
          </ul>
        </div>
      </div>
      <div class="content">
        <div class="mid">
          <p class="title">每个人的法律小帮手</p>
          <p class="secondTitle">判决书案例、刑事审判案例这里都应有尽有</p>
          <div class="search">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
            <el-button type="primary" icon="el-icon-search">律一下</el-button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapGetters} from "vuex"
  export default {
    name: 'index',
    data(){
      return{
        input:''
      }
    },
    computed:{
      ...mapGetters([
        'nickname'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    min-width: 100vw;
    min-height: 100vh;
    background: url("../assets/basic/index.jpg");
    background-size: contain;
    .header{
      color: white;
      position: relative;
      height: 120px;
      .title{
        margin-left: 15%;
        font-size: 33px;
        display: inline-block;
        height: 100%;
        line-height: 120px;
        color: rgb(255,101,55);
      }
      .right{
        position: absolute;
        right: 20%;
        display: inline-block;
        height: 100%;
        line-height: 120px;
        ul{
          float: right;
          display: inline-block;
          li{
            list-style: none;
            float: left;
            margin-left: 20px;
          }
        }
        .myInfo{

        }
      }
    }
    .content{
      position: relative;
      height: calc(100vh - 120px);
      .mid{
        position: absolute;
        width: 100vw;
        top: 5%;
        left: 50%;
        transform: translate(-50%,0);
        .search{
          text-align: center;
          margin-top: 50px;
          .el-input{
            width: 40%;
            border-radius: 0 !important;
          }
          .el-button{
            background: black;
            height: 40px;
            border: 0;
          }
        }

        .title{
          text-align: center;
          font-family: "思源黑体 CN Heavy", 微软雅黑;
          color: rgb(255, 255, 255);
          font-size: 50px;
          background-color: transparent;
        }

        .secondTitle{
          font-size: 15px;
          text-align: center;
          font-family: "思源黑体 CN Heavy", 微软雅黑;
          color: rgb(255, 255, 255);
          background-color: transparent;
        }

      }
    }
  }


</style>
