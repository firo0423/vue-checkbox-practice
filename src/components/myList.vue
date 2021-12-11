<template>
  <div>
    <my-item></my-item>
    <my-item></my-item>
    <my-item></my-item>
    <my-item></my-item>
  </div>
</template>

<script>
import myItem from "./myItem.vue";

export default {
  components: { myItem },
  name: "myList",
};
</script>

<style>
</style>