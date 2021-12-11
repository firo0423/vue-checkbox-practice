<template>
  <div>
      <ul class="todos">
          <!-- :todoData 用props传输数据 -->
          <my-item v-for="todoObj in todos" :key="todoObj.id" :todoData='todoObj'/>
      </ul>
  </div>
</template>

<script>
import myItem from "./myItem.vue";

export default {
  components: { myItem },
  name: "myList",
  data() {
    return {
      todos: [
        {
          id: "001",
          title: "吃饭",
          done: true,
        },
        {
            id: "002",
          title: "抽烟",
          done: true,
        },
        {
            id: "003",
          title: "喝酒",
          done: true,
        },
        {
            id: "004",
          title: "烫头",
          done: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>