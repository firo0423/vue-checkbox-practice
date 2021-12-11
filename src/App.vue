<template>
  <div id="app">
        <my-header></my-header>
        <my-list></my-list>
        <my-footer></my-footer>
  </div>
</template>

<script>
import myFooter from "./components/myFooter";
import myHeader from "./components/myHeader";
import myList from "./components/myList";

export default {
  name: "App",
  components: {
    myFooter,
    myHeader,
    myList,
  },
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 100px auto;
  width: 700px;
  border: 2px solid #eee;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0px 2px 5px 5px #e0e0e08f;
}

</style>
