<template>
  <div class="content">
    <span>请输入要抽取的概念词: </span>
    <el-input v-model="input1" placeholder="请输入内容">

    </el-input>
    <el-button type="primary" plain>搜索</el-button>
    <p>抽取结果:</p>
    <div class="result">

    </div>
  </div>
</template>

<script>
  export default {
    name: "conceptExtraction"
  }
</script>

<style lang="scss" scoped>
  .content {
    padding: 30px;
    min-height: 100vh;

    .el-input {
      width: 50%;

      :nth-child(1) {
        margin-top: 20px;
      }
    }

    .result {
      width: 100%;
      height: 500px;
      background-color: #fffae8;
      border-radius: 10px;
      box-shadow: 0 0 0 1px gainsboro;
    }
  }
</style>
