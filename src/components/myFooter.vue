<template>
  <div class="footer">
    <div class="checkbox">
      <!-- 这里的check值明显只有一个值 肯定会报错 使用函数取反 -->
      <label class="box"
        ><input type="checkbox" v-model="checked" /><span>全选</span></label
      >
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
  props: ["watchCheckForAll", "signal"],
  data() {
    return {
      checked: "",
    };
  },
  watch: {
    checked: function (checked) {
      this.watchCheckForAll(checked);
    },
    signal: function () {
      if (this.signal) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
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
.text,
.checkbox {
  margin: 0 10px;
  float: left;
  height: 40px;
  line-height: 40px;
}
.D-btn {
  float: right;
}
.box > span {
  margin-left: 5px;
}
.checkbox {
  margin-left: 0px;
}
</style>