<template>
  <div class="footer">
    <div class="checkbox">
        <label class="box"><input type="checkbox"><span>全选</span></label>
    </div>
    <div class="text">已完成0/全部0</div>
    <div class="D-btn">
        <el-button type="danger">清除选中的任务</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "myFooter",
  data() {
      return {
          checked:''
      }
  },
};
</script>

<style scoped>
.footer {
    width: 100%;
    height: 40px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
}
.text,.checkbox{
    margin: 0 10px;
    float: left;
    height: 40px;
    line-height: 40px;
}
.D-btn{
    float: right;
}
.box >span {
    margin-left: 5px;
}
.checkbox{
    margin-left: 0px;
}
</style>