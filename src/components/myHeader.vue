<template>
  <div>
    <!-- el-input屎中屎  @keyup.native.enter 解决 这事件是真的垃圾 -->
    <el-input
      placeholder="请输入你的任务名称"
      v-model="input"
      clearable
      @keyup.native.enter="UploadMission"
    >
    </el-input>
    <el-button
      type="primary"
      size="default"
      @click="UploadMission"
      @keyup="test"
      >提交任务</el-button
    >
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "myHeader",
  props: ["receive"],
  data() {
    return {
      input: "",
    };
  },
  // 将用户的输入包含成一个对象
  methods: {
    UploadMission() {
      const todoObj = { id: nanoid(), title: this.input, done: false };
      this.receive(todoObj);
      this.input = ''
      console.log(todoObj);
    },
    test() {
      console.log(1);
    },
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
.el-button {
  float: right;
}
</style>