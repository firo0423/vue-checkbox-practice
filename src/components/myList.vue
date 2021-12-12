<template>
  <div>
    <ul class="todos">
      <!-- :todoData 用props传输数据 -->
      <my-item
        v-for="todoObj in todoData"
        :key="todoObj.id"
        :todo="todoObj"
        :AutoCheckForAll="AutoCheckForAll"
        :DoCheck="DoCheck"
        :DeleteTodo='DeleteTodo'
      />
    </ul>
  </div>
</template>

<script>
import myItem from "./myItem.vue";

export default {
  components: { myItem },
  name: "myList",
  props: ["todoData", "AutoCheckForAll", "DoCheck",'DeleteTodo'],
  methods: {},
};
</script>

<style>
</style>