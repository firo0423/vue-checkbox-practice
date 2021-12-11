<template>
  <div id="app">
    <!-- 将方法传给组件 秀 -->
    <my-header :receive="addTodo"></my-header>
    <my-list
      :todoData="todos"
      :AutoCheckForAll="AutoCheckForAll"
      :DoCheck="DoCheck"
    ></my-list>
    <my-footer
      :watchCheckForAll="watchCheckForAll"
      :signal="signal"
    ></my-footer>
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
  data() {
    return {
      signal: false,
      todos: [
        {
          id: "001",
          title: "吃饭",
          done: true,
        },
        {
          id: "002",
          title: "抽烟",
          done: false,
        },
        {
          id: "003",
          title: "喝酒",
          done: false,
        },
        {
          id: "004",
          title: "烫头",
          done: false,
        },
      ],
    };
  },
  methods: {
    // 添加任务功能
    addTodo(data) {
      this.todos.unshift(data);
    },
    // 勾选和取消勾选
    // 设置这个函数的目的是避免props值的修改
    // 问题1.现在可以对元素的值进行修改 但是不是响应式 造成连锁反应就是全选功能坏了
    DoCheck(id) {
      // 非相应式舍去 /已解决 问题来自于 myitem中的 this.todo （不能加this
      this.todos.forEach((element) => {
        if (id == element.id) {
          element.done = !element.done;
        }
      });
    },
    //   for (let i = 0; i < this.todos.length; i++) {
    //     if (id == this.todos[i].id) {
    //       this.todos[i].done = !this.todos[i].done;
    //       this.$set(this.todos, i, this.todos[i]);
    //     }
    //   }
    // },
    // 全选功能
    watchCheckForAll(checked) {
      if (checked) {
        for (let i = 0; i < this.todos.length; i++) {
          this.todos[i].done = checked;
        }
      } else {
        for (let i = 0; i < this.todos.length; i++) {
          this.todos[i].done = checked;
        }
      }
    },

    // 子框全选就把全选框选了
    AutoCheckForAll() {
      //  模块判断已选子模块的个数 全选就改变全选框的值
      let CheckArr = [];
      this.todos.forEach((element) => {
        if (element.done) {
          CheckArr.push(element.id);
          console.log(CheckArr);
        }

        console.log(CheckArr.length == this.todos.length);
        //  用数组长度输出 每一次改变子模块的check都进行判断
        if (CheckArr.length == this.todos.length) {
          this.signal = true;
          console.log("ok");
        } else {
          this.signal = false;
        }
      });
    },
  },
};
</script>

<style>
* {
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
