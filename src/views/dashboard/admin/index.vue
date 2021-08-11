<template>
  <div class="dashboard-editor-container">
    <div class="first">
      <p class="title">一分钟了解懂律</p>
      <p class="secondtitle">判决书管理 + 刑事智能判案 + 识别关系网络</p>
      <div class="img3">
        <img src="~@/assets/introduction/9.png" alt="">
        <img src="~@/assets/introduction/10.png" alt="">
        <img src="~@/assets/introduction/11.png" alt="">
      </div>
    </div>
    <div class="second">
      <el-col :span="12">
        <p class="title">判决书管理</p>
        <p class="secondtitle">
          系统利用ORC文字识别技术从用户上传的图片文件提取得到文字文件并永久储存到案件库中，同时生成相应的处理记录。但用户想要制作 行政判决书或者要提取相关案件的txt文件时，用户可以直接利用系统提供的搜索引擎找到案件库中的案件，系统会根据提取到的文字文件可以直接生成相应的行政判决书和TXT文件提供给用户下载。
        </p>
      </el-col>
      <el-col :span="12">
        <img src="~@/assets/introduction/8.png" alt="">
      </el-col>
    </div>
    <div class="third">
      <el-col :span="12">
        <span style="opacity: 0">.</span>
        <img src="~@/assets/introduction/12.png" alt="图片">
      </el-col>
      <el-col :span="12">
        <p class="title">刑事智能判案</p>
        <p class="secondtitle">系统利用深度学习：TextCNN对文本浅层特征的抽取从用户上传的案例文件, 分析案件，并给出罪名预测、法条预测、刑期预测</p>
      </el-col>
    </div>
    <div class="fourth">
      <el-col :span="12">
        <p class="title">识别关系网络</p>
        <p class="secondtitle">
          基于神经网络方法上进行实体识别和关系抽取联合学习，做到了关系可视化，人物抽取，人物关系抽取，人物属性抽取等功能
        </p>
      </el-col>
      <el-col :span="12">
        <img src="~@/assets/introduction/关系.webp" alt="">
      </el-col>
    </div>

  </div>
</template>

<script>


export default {
  name: 'DashboardAdmin',
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .first{
    position: relative;
    height: calc(100vh - 84px);
    background: url("~@/assets/introduction/7.jpg") no-repeat;
    background-size: 100% 100vh;
    overflow: hidden;
    .title{
      text-align: center;
      font-family: "思源黑体 CN Heavy", 微软雅黑;
      color: rgb(138,116,56);
      font-size: 60px;
      background-color: transparent;
    }
    .secondtitle{
      text-align: center;
      font-family: "思源黑体 CN Heavy", 微软雅黑;
      color: rgb(156,148,126);
      font-size: 24px;
      background-color: transparent;
    }
    .img3{
      position: absolute;
      bottom: 0;
      width: 100%;
      text-align: center;
    }
  }
  .second{
    position: relative;
    height: calc(100vh - 84px);
    background-color: rgb(95,178,240);
    img{
      position: absolute;
      top: 50%;
      width: 50%;
      transform: translate(0,-50%);
    }
    .title{
      text-align: center;
      font-family: "思源黑体 CN Heavy", 微软雅黑;
      color: rgb(202,223,86);
      font-size: 60px;
      background-color: transparent;
    }
    .secondtitle{
      font-family: "思源黑体 CN Heavy", 微软雅黑;
      color: white;
      font-size: 24px;
      background-color: transparent;
      padding: 0 30px 0 30px;
    }
  }
  .third{
    position: relative;
    height: calc(100vh - 84px);
    background-color: rgb(250,220,147);
    img{
      position: absolute;
      top: 50%;
      width: 50%;
      transform: translate(0,-50%);
    }
    .title{
      text-align: center;
      font-family: "思源黑体 CN Heavy", 微软雅黑;
      color: rgb(138,116,56);
      font-size: 60px;
      background-color: transparent;
    }
    .secondtitle{
      font-family: "思源黑体 CN Heavy", 微软雅黑;
      color: rgb(156,148,126);
      font-size: 24px;
      background-color: transparent;
      padding: 0 30px 0 30px;
    }
  }
  .fourth{
    position: relative;
    height: calc(100vh - 84px);
    background-color: rgb(246,246,246);
    img{
      position: absolute;
      top: 50%;
      width: 50%;
      transform: translate(0,-50%);
    }
    .title{
      text-align: center;
      font-family: "思源黑体 CN Heavy", 微软雅黑;
      color: black;
      font-size: 60px;
      background-color: transparent;
    }
    .secondtitle{
      font-family: "思源黑体 CN Heavy", 微软雅黑;
      color: #495057;
      font-size: 24px;
      background-color: transparent;
      padding: 0 30px 0 30px;
    }
  }
</style>
