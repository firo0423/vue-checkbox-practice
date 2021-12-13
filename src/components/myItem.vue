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
        <div class="text" v-show="!todo.isEdit">
          <span>{{ todo.title }}</span>
        </div>
        <input
          type="text"
          v-show="todo.isEdit"
          :value="todo.title"
          ref="input"
          class="ChangeInputValue"
          @blur="ShowChangeContent(todo,$event)"
        />
        <!-- 上边的$event 收集到事件对象 -->
      </label>
      <el-button type="primary" class="change" @click="ChangeInputValue(todo)"
        >修改内容</el-button
      >
      <el-button
        type="danger"
        @click="handleCheckDeleteId(todo.id)"
        class="danger"
        >清除任务</el-button
      >
    </div>
  </li>
</template>

<script>
export default {
  name: "myItem",
  //  声明插值对象 对于props 的值是不能改的 但是vue只能检测到全部修改 就是对象里面的值检测不到
  props: ["todo"],
  data() {
    return {};
  },
  methods: {
    handleCheck(id) {
      // this.DoCheck(id);
      // this.AutoCheckForAll();
      this.$bus.$emit("DoCheck", id);
      this.$bus.$emit("AutoCheckForAll");
    },
    handleCheckDeleteId(id) {
      // this.DeleteTodo(id);
      this.$bus.$emit("DeleteTodo", id);
    },
    ChangeInputValue(todo) {
      this.$set(todo, "isEdit", true);
      // 自动获取焦点
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    ShowChangeContent(todo,e) {
      this.$bus.$emit('UpdateToda',todo.id, e.target.value)
      this.todo.isEdit = false;
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
.el-button.change {
  position: absolute;
  right: 110px;
  top: 5px;
  margin: auto;
  height: 40px;
  opacity: 0;
  transition: all 0.2s;
  justify-content: center;
}
.el-button.danger {
  position: absolute;
  right: 10px;
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
.ChangeInputValue {
  margin-left: 10px;
  width: 550px;
  outline: none;
  border: none;
  background-color: #efefef00;
  font-size: 16px;
  line-height: 49px;
}
</style>