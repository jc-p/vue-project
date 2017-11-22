<template>
<div>
  <MyHeader/>
   <div class="content">
    <h1>{{ msg }}</h1>
    
    <img src="static/404.jpg" alt="">
  </div>
  <MyFooter :style="{margin:0}"/>
</div>
 
</template>

<script>
import MyHeader from './header'
import MyFooter from './footer'
export default {
  components:{MyFooter,MyHeader},
  data () {
    return {
      msg: '你找到页面还在开发中...',
      timer:''
    }
  }
}
</script>

<style scoped>
  .content{
    width:100%;
    margin:0;
    padding:0;
  }
  .content h1{
    color:#fff;
    position: absolute;
  }
  .content img{
    width:100%;
    height: 500px;
  }

</style>

