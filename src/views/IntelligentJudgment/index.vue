<template>
  <div>
    <div class="content">
      <div class="tips">
        <ul>
          <li>若您有相关的法律文件，您可以直接进行上传，我们将会生成相应的案件文本信息给您（生成的案件信息在下面您也可以看到）</li>
        </ul>
      </div>
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
      <div class="from">
        <el-form :model="lawInfo">
          <el-form-item label="罪名预测">
            <el-input v-model="lawInfo.zuiming" type="textarea" :rows="10"></el-input>
          </el-form-item>
          <el-form-item label="法条预测">
            <el-input v-model="lawInfo.fatiao" type="textarea" :rows="10"></el-input>
          </el-form-item>
          <el-form-item label="刑期预测">
            <el-input v-model="lawInfo.xingqi" type="textarea" :rows="10"></el-input>
          </el-form-item>
        </el-form>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        lawInfo: {
          zuiming: '',
          fatiao: '',
          xingqi: ''
        }
      };
    }
  };
</script>

<style lang="scss" scoped>
  .content {
    padding: 0 30px 0 30px;

    .tips {
      margin: 20px 0 20px 0;
      font-size: 12px;
      line-height: inherit;
      padding: 14px 20px;
      vertical-align: middle;
      color: #002da0;
      border: 1px solid #d5e7ff;
      border-radius: 0;
      background: #d5e7ff;
      position: relative;
      box-sizing: border-box;
    }

    .el-upload {
      width: 100px;
    }
  }
</style>
