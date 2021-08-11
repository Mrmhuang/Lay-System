<template>
  <div class="content">
    <div class="upload">
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">注意上传文件的大小不得超过200M</div>
      </el-upload>
    </div>
    <p>抽取结果:</p>
    <div class="result">

    </div>
  </div>
</template>

<script>
  export default {
    name: "termExtraction"
  }
</script>

<style lang="scss" scoped>
  .content {
    padding: 30px;
    min-height: 100vh;

    .result {
      width: 100%;
      height: 500px;
      background-color: #fffae8;
      border-radius: 10px;
      box-shadow: 0 0 0 1px gainsboro;
    }
  }
</style>
