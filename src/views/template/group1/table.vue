<template>
  <div class="table">
        <el-table :data="lists" style="width: 100%">
            <el-table-column type="index"></el-table-column>
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="age" label="年龄" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
        lists:[]
    }
  },
  mounted(){
      this.fn()
  },
  methods:{
        fn(){
            console.log(this)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .table{
        width:100%;
        height:200px;
        background:blue;;
    }
</style>