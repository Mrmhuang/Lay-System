<template>
    <div class="main">
      <el-page-header @back="goBack" title="返回懂律中心">
      </el-page-header>
      <div class="history">
        我的处理记录
      </div>
    </div>
</template>

<script>
  export default {
    name: 'personalhistory',
    methods:{
      goBack(){
        this.$router.push('/basic')
      }
    }
  }
</script>

<style scoped>
  .main{
    padding: 20px 00px 0 20px;
  }
</style>
