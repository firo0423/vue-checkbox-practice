<template>
   <div class="shell">
       <el-checkbox v-model="checked" size="medium"></el-checkbox>
       <div class="text">xxxxxxxxx</div>
   </div>
</template>

<script>
export default {
 name: "myItem",
 data() {
     return {
         checked:'',
     }
 },
}
</script>

<style scoped>
.shell{
    display: flex;
    width: 100%;
    height: 49px;
    border-bottom:1px solid #EBEEF5;
    line-height: 49px;
}
.text {
    margin-left: 10px;
}

</style>