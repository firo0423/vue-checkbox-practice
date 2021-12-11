<template>
  <div class="shell">
    <label>
      <input type="checkbox" class="box" v-model='todoData.done' checked='todoData.done'/>
      <div class="text">{{ todoData.title }}</div>
    </label>
  </div>
</template>

<script>
export default {
  name: "myItem",
  //  声明插值对象
  props: ["todoData"],
  data() {
    return {
      checked: "",
    };
  },
};
</script>

<style scoped>
.shell {
  display: flex;
  width: 100%;
  height: 49px;
  border-bottom: 1px solid #ebeef5;
  line-height: 49px;

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