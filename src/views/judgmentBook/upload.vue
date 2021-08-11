<template>
  <div>
    <div class="bookUpload">
      <EbookUpload @onSuccess="success" @onRemove="remove"></EbookUpload>
    </div>
    <div class="tip">
      温馨提示：只要把你的判决书文件上传，我们就自动解析您上传的文件。最终会在判决书大全生成，在下面您也可以看到详细的解析结果.<br>
    </div>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" class="lawInfo">
      <el-col :span="10" :offset="1"><el-form-item label="卷宗">
        <el-input v-model="formLabelAlign.shouquanshu"></el-input>
      </el-form-item></el-col>
      <el-col :span="10" :offset="1"><el-form-item label="目录">
        <el-input v-model="formLabelAlign.mulu"></el-input>
      </el-form-item></el-col>

      <el-col :span="10" :offset="1"><el-form-item label="上诉状">
        <el-input type="textarea" rows="10" v-model="formLabelAlign.shangsuzhuagn"></el-input>
      </el-form-item></el-col>
      <el-col :span="10" :offset="1"><el-form-item label="议庭人员">
        <el-input type="textarea" rows="10" v-model="formLabelAlign.renyuan"></el-input>
      </el-form-item></el-col>

      <el-col :span="10" :offset="1"><el-form-item label="授权书">
        <el-input type="textarea" rows="10" v-model="formLabelAlign.shouquanshu"></el-input>
      </el-form-item></el-col>
      <el-col :span="10" :offset="1"><el-form-item label="案件函">
        <el-input type="textarea" rows="10" v-model="formLabelAlign.anjianhan"></el-input>
      </el-form-item></el-col>

      <el-col :span="10" :offset="1"><el-form-item label="笔录">
        <el-input type="textarea" rows="10" v-model="formLabelAlign.bilu"></el-input>
      </el-form-item></el-col>

    </el-form>
  </div>
</template>

<script>
import EbookUpload from '../../components/EbookUpload/index'
export default {
  data(){
    return {
      labelPosition: 'right',
      formLabelAlign: {
        anhao: '',
        juanzong: '',
        mulu: '',
        shangsuzhuang: '',
        renyuan: '',
        shouquanshu: '',
        anjianhan:'',
        bilu:''
      }
    }
  },
    methods:{
        success(){

        },
        remove(){

        }
    },
    components:{
      EbookUpload
    }
};
</script>
<style scoped>
  .tip{
    text-align: center;
    font-size: 13px;
    height: 80px;
    line-height: 80px;
    width: 99%;
    margin: 0 auto;
    border: 1px dashed #2e7d32;
  }
  .lawInfo{
    margin-top: 20px;

  }
  .el-textarea__inner{
    min-height: 300px !important;
  }
  .bookUpload{
    margin-top: 5px;
    width: 99%;
    margin: 10px auto;
  }
</style>

