<template>
  <div>
    <el-input placeholder="请输入搜索内容" v-model="input" class="input-with-select">
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option label="搜关键词" value="1"></el-option>
        <el-option label="搜案号" value="2"></el-option>
        <el-option label="搜卷宗" value="3"></el-option>
        <el-option label="搜目录" value="4"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search" @click="handleList"></el-button>
    </el-input>

    <el-table :data="tableData" border style="width: 98%;margin:0 auto;">
      <el-table-column prop="id" label="id" width="80"></el-table-column>
      <el-table-column label="案号" width="120">
        <template slot-scope="scope">
          <a href="#" style="color: blue;">{{scope.row.anhao}}</a>
        </template>
      </el-table-column>
      <el-table-column prop="juanzong" label="卷宗" width="180">
      </el-table-column>
      <el-table-column prop="mulu" label="目录" width="180"></el-table-column>
      <el-table-column prop="shangsuzhuang" label="上诉状" width="180">
      </el-table-column>
      <el-table-column prop="renyuan" label="议庭组成人员" width="180">
      </el-table-column>
      <el-table-column prop="shouquanshu" label="授权书" width="180">
      </el-table-column>
      <el-table-column prop="anjianhan" label="报送上诉案件函" width="180">
      </el-table-column>
      <el-table-column prop="bilu" label="庭巡笔录" width="180">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100" align="center">
        <template slot-scope="scope">
          <el-button @click="handleList" type="text" size="small"
          >生成判决书
          </el-button
          >
          <el-button type="text" size="small">生成txt</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      class="pagination"
    >
    </el-pagination>
  </div>
</template>

<script>
  import {getList, getListCount} from "@/api/admin";

  export default {
    mounted() {
      this.getlist()
      getListCount().then(result => {
        this.total = result.data.data[0].count;
        console.log(result);
      });
    },
    data() {
      return {
        listQuery: {
          title: "",
          author: ""
        },
        total: 200,
        offset: 0,
        limit: 5,
        tableData: [],
        currentPage: 1,
        select: '1',
        input: ''
      };
    },
    methods: {
      handleList() {

      },
      handleSizeChange(val) {
        this.limit = val;
        this.getlist()
      },
      handleCurrentChange(val) {
        this.offset = (val - 1) * this.limit
        this.getlist()
      },
      getlist() {
        getList(this.limit, this.offset).then(result => {
          console.log(result)
          this.tableData = result.data.data;
        });
      }
    }
  };
</script>
<style lang="scss" scoped>
  .filter-item {
    margin: 10px 10px 10px 13px;
  }

  .pagination {
    margin-top: 10px;
    margin-bottom: 20px;
    margin-left: 10px;
  }

  .el-select{
    width: 130px;
    background: #909399;
    color: white;
  }

  .input-with-select{
    width: 50%;
    margin-left: 14px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>
