<template>
  <div class="shell">
    <label>
        <!-- 但是v-model实际上修改了props的值不建议使用 -->
      <input type="checkbox" class="box" @change="DoCheck(todo.id)"/>
      <div class="text">{{ todo.title }}</div>
    </label>
  </div>
</template>

<script>
export default {
  name: "myItem",
  //  声明插值对象 对于props 的值是不能改的 但是vue只能检测到全部修改 就是对象里面的值检测不到
  props: ["todo",'AutoCheckForAll','DoCheck'],
  data() {
    return {
      checked:this.todo.done
    };
  },
  watch:{
    checked:function(){
      console.log(1);
      this.AutoCheckForAll()
    }
  }
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