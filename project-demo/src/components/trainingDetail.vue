<template>
<div>
  <MyHeader/>
  <div class="container bgc" >
    <div class="row">
      <div class="col-md-12 " style="padding:0">
      <div class="detail-title">
          <div class="detail-subtitle">
              <h2>人鱼线雕刻</h2>
            <p>
              绝大多数女性都表示人鱼线是男人最性感的肌肉，还在等什么，赶紧练起来。「人鱼线」是腹外斜肌与骨盆连接处的轮廓，又称为腹股沟、V-cut 。「人鱼线」的训练与常规腹肌训练略有不同，它需要更多的下腹部训练动作，增加腹外斜肌下端的厚度。该训练需要对腹肌发力有较强的控制能力。
            </p>
            <p>16516515 人训练</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row bgc">
      <div class="col-md-2  col-md-offset-5">
          <h3>训练计划</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 ">
       <div class="flex-box"  >
         <div class="flex-box1" v-for="(item,index) in trainingDetail" :key=index>
           <h3>{{item.action_name}} </h3>  
           <h4>{{item.action_count}}</h4>
           <a href="#">
              <img :src="'/static/'+item.course_pic" alt="">
             </a>             
         </div>
       </div>
      </div>
    </div>  <!-- 训练内容 -->
   <div class="row" style="background:#fff;">
      <div class="col-md-2  col-md-offset-5">        
          <h3>获取跟多训练</h3>
      </div>
      <hr>
   </div>
  </div>

  <div class="tiraining-effect">
    <div class="container">
      <div class="row">
          <div class="flex-box"  >
         <div class="flex-box2" v-for="(item,index) in tirainingEffect" :key=index>
              <img :src="'/static/'+item.user_img" alt="">
             </a>             
         </div>
       </div>
      </div>
    </div>
  </div>


<footer class=" navbar navbar-inverse navbar-fixed-bottom">
    <div class="container">
        <div class="copyright">Copyright©2016 一起运动 Rx.com 版权所有&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;苏ICP备xxx号-1</div>

    </div>
</footer>
</div>

</template>

<script>
import MyHeader from './uitlity/header'

export default {
  components:{MyHeader},
  data () {
    return {
      trainingDetail:[],
      tirainingEffect:[]
    }
  },
  mounted(){
        let that=this;
      function tirainingCourse() {
        return that.$axios.get('http://127.0.0.1/Framwork_project/data/course_content/course_detail.php');
      }

      function tirainingEffect() {
        return that.$axios.get('http://127.0.0.1/Framwork_project/data/course_content/training_effect.php');
      }
    that.$axios.all([tirainingCourse(), tirainingEffect()])
    .then(that.$axios.spread(function (course, effect) {
      // 两个请求现在都执行完成
      // console.log(course);
      that.trainingDetail=course.data;
      // console.log(effect);
      that.tirainingEffect=effect.data;
    }))
    .catch((error)=>{
           console.log(error);
    });
  }
}
</script>

<style scoped>
.bgc{
  background: #EBF0F2;
}
 .detail-title{
  width: 100%;
   height: 300px;
    background-image: url("../assets/img/project/c-background.jpg");
   background-repeat:no-repeat;
   background-size:100% 85%;
   background-attachment:fixed;
   
 }
.detail-subtitle{
  position: relative;
  top:100px;
  width:90%;
  color:#fff; 
}

.flex-box{
  display:flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}


.tiraining-effect{
  background:#fff ;
}
.flex-box2 img{
  width:300px;
  height:300px;
}
</style>

