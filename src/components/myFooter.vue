<template>
  <div class="footer">
    <div class="checkbox">
        <el-checkbox v-model="checked">备选项</el-checkbox>
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

</style>