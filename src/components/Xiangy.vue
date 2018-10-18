<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="button" value="提示" @click="getTi">
    <button type="button" class="mui-btn mui-btn-success">绿色</button>
    <button type="button" class="mui-btn mui-btn-danger mui-btn-outlined">红色</button>
    <router-view></router-view>
  </div>
</template>

<script>
import { Indicator, Toast } from "mint-ui";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "大襄阳牛逼啊"
    };
  },
  methods: {
    getTi() {
      //           Indicator.open({
      //   text: '加载中...',
      //   spinnerType: 'fading-circle'
      // });
      Toast({
        message: "操作成功",
        iconClass: "icon icon-success"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
