<template>
    <div>
        <MyHeader/>
            
<div class="header-img">
    <div class='header-title'>
        <p>制定专属的计划</p>
        <p>丰富的课程训练，正确的动作，让你不再做无用功</p>
    </div>
    <img src="../assets/img/project/demo-1.jpg" alt="">
</div>

<div class="course">
    <div class="course-content">
        <div class="course-title">
            特色的训练计划
        </div>
        <p class="course-subtitle">丰富的训练课程，规范你的训练过程</p>
    </div>
    <div class="course-list">
        <ul >
        <transition-group tag="ul" name="slide">
        <li class="plan-item" v-for="(item,index) in courseData" :key=index>
            <img :src="'/static/'+item.c_pic" alt="">
            <router-link to="/t_detail">
                <span>{{item.cname}}</span>
            </router-link>
        </li> 
        </transition-group>    
        </ul>
    </div>
    
</div>
        <MyFooter/>
    </div>
</template>


<script>
import MyHeader from './uitlity/header'
import MyFooter from './uitlity/footer'
export default{
    components:{MyHeader,MyFooter},
    data () {
        return{
            courseData:[]
        
        }
    },
    mounted(){ 
        // console.log(this);     
        this.$axios.get('http://127.0.0.1/Framwork_project/data/course_content/course.php')
        .then((response)=>{
            // console.log(response);
            this.courseData=response.data;
            // console.log(this.courseData);
        })
        .catch((error)=>{
            console.log(error);
        })      
    },
    
}
</script>


<style>
.header-img{
		position: relative;

}
.header-img img{
		width:100%;
}
.header-title {
		position: absolute;
		top: 210px;
		left:140px;		
}
.header-title p{
    color:#fff;
	font-size: 36px;
}
.course{
		position: relative;
		margin-top: 50px;
}
.course ul {
   margin-left: 0;
}
.course-content{
	font-size: 20px;
	margin-bottom: 8px;
	font-weight: bold;
}
.course .course-title{
		text-align: center;
		margin-bottom: 20px;
		color: #2C82CB;
		font-size: 30px;
}
.course .course-subtitle{
		text-align: center;
		font-size: 18px;
		margin-bottom: 60px;
}
.course-list{
	display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.course-list .plan-item{
		position: relative;
		list-style: none;
		height: 230px;
		width: 250px;
		float: left;
		margin-left: 30px;
		background-color: #fff;
		text-align: center;
		color: #282a2e;
}
.course-list .plan-item span{
		position: absolute;
		top:30%;
		left:30%;
		font-size: 24px;
		color:#fff;
}
.course-list .plan-item img{
		width:256px;
		height:190px;

}

.bg {
		display: table;
		width: 100%;
		height: 100%;
}
</style>
