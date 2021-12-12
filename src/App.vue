<template>
  <div id="app">
    <!-- 将方法传给组件 秀 -->
    <my-header :receive="addTodo"></my-header>
    <my-list
      :todoData="todos"
      :AutoCheckForAll="AutoCheckForAll"
      :DoCheck="DoCheck"
      :DeleteTodo="DeleteTodo"
    ></my-list>
    <my-footer
      :watchCheckForAll="watchCheckForAll"
      :signal="signal"
      :CheckedArr="CheckedArr"
      :todos="todos"
      :DeleteCheckedItem="DeleteCheckedItem"
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
      CheckedArr: [],
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
  computed: {},
  methods: {
    // 添加任务功能
    addTodo(data) {
      this.todos.unshift(data);
    },
    // 删除任务模块
    // 思想还是传递参数 当点击侧边按钮时就删除对应的项目
    DeleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
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

    // 全选功能
    watchCheckForAll(checked) {
      if (checked) {
        this.todos.forEach((element) => {
          element.done = checked;
        });
      } else {
        let checkarr = [];
        this.todos.forEach((element) => {
          // 当勾选满的时候才全部取消全选
          if (element.done) {
            checkarr.push(element.id);
          }
        });
        if (checkarr.length == this.todos.length) {
          this.todos.forEach((element) => {
            element.done = checked;
          });
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
        }
        //  用数组长度输出 每一次改变子模块的check都进行判断
        if (CheckArr.length == this.todos.length) {
          this.signal = true;
          console.log("ok");
        } else {
          this.signal = false;
        }
      });
    },
    // 选中删除模块 问题 明显的数组问题 当删除一个元素 其他元素不是原地不动 而是补齐位置 用filter解决
    DeleteCheckedItem() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
  watch: {
    // 用来监视todos数组 使footer文字响应式变化
    todos: {
      handler: function () {
        this.CheckedArr = [];
        this.todos.forEach((element) => {
          // 当done为true 且 数组里面没有 这个元素
          if (element.done && this.CheckedArr.indexOf(element.id) == -1) {
            this.CheckedArr.push(element.id);
          }
        });
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style >
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
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 2px 5px 5px #e0e0e08f;
}
</style>
