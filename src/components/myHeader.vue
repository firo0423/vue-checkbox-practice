<template>
<div>
    <el-input placeholder="请输入你的任务名称" v-model="input" clearable>
    </el-input>
    <el-button type="primary" size="default" @click="UploadMission"
      >提交任务</el-button
    >
</div>
</template>

<script>
export default {
  name: "myHeader",
  data() {
    return {
      input:''
    }
  },
  methods: {
    UploadMission(){
      console.log(1);
    }
  },
};
</script>

<style scoped>

div {
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
}
.el-input {
  width: 570px;
  float: left;
}
.el-button{
  float: right;
}
</style>