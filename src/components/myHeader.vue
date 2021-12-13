<template>
  <div>
    <!-- el-input屎中屎  @keyup.native.enter 解决 这事件是真的垃圾 -->
    <el-form status-icon>
      <el-form-item>
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
          >提交任务</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "myHeader",
  // 用自定义事件就不需要传数据到子组件
  // props: ["receive"],
  data() {
    return {
      input: "",
      // 将用户的输入包含成一个对象
      
    };
  },
  methods: {  
        UploadMission() {
          const todoObj = { id: nanoid(), title: this.input, done: false };
          this.input = "";
          this.$emit("addTodo", todoObj);
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