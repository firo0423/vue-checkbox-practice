<template>
  <li>
    <div class="shell">
      <label>
        <!-- 但是v-model实际上修改了props的值不建议使用 -->
        <input
          type="checkbox"
          class="box"
          :checked="todo.done"
          @change="handleCheck(todo.id)"
        />
        <div class="text">{{ todo.title }}</div>
      </label>
      <el-button type="danger" @click="handleCheckDeleteId(todo.id)"
        >清除任务</el-button
      >
    </div>
  </li>
</template>

<script>
export default {
  name: "myItem",
  //  声明插值对象 对于props 的值是不能改的 但是vue只能检测到全部修改 就是对象里面的值检测不到
  props: ["todo", "AutoCheckForAll", "DoCheck", "DeleteTodo"],
  data() {
    return {};
  },
  methods: {
    handleCheck(id) {
      this.DoCheck(id);
      this.AutoCheckForAll();
    },
    handleCheckDeleteId(id) {
      this.DeleteTodo(id);
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
.el-button {
  position: absolute;
  right:10px;
  top: 5px;
  margin: auto;
  height: 40px;
  opacity: 0;
  transition: all 0.2s;
  justify-content: center;
}
.shell {
  position: relative;
  padding: 0 5px;
  display: flex;
  width: 100%;
  height: 49px;
  border-bottom: 1px solid #ebeef5;
  line-height: 49px;
  transition: all 0.2s;
}
.shell:hover {
  background-color: #efefef;
}
.shell:hover .el-button {
  opacity: 1;
}
.text {
  margin-left: 10px;
}
label {
  display: flex;
  user-select: none;
}

.box {
  display: block;
  height: 49px;
  line-height: 49px;
  justify-content: center;
}
</style>