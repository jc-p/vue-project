<template>
<div>
    <MyHeader></MyHeader>
  <!--轮播部分-->
<div id="carousel" class="carousel slide" data-ride="carousel" data-interval="2500">
    <!-- Indicators -->
    <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
        <div class="item active">
            <img src="../assets/img/carousel/fit-03.jpg" alt="...">
            <div class="carousel-caption">
                <p> 大量训练会影响生活吗？</p>
            </div>
        </div>
        <div class="item">
            <img src="../assets/img/carousel/fit-02.jpg" alt="...">
            <div class="carousel-caption">
                <p>你知道锻炼的小技巧吗？</p>
            </div>
        </div>

        <div class="item">
            <img src="../assets/img/carousel/fit-01.jpg" alt="...">
            <div class="carousel-caption">
                <p>坚持做瑜伽对女生的好处有哪些？</p>
            </div>
        </div>

    </div>

    <!-- Controls -->
    <a class="left carousel-control" href="#carousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#carousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
    </a>
</div>

<div class="info_nav">
    <div class="info-content">
        <ul class="list-inline">
            <li v-for="(item,index) in article" :key=index :class="{active:index==active}" @click="jumpTo(index)"><span>{{item}}</span></li>
           
        </ul>
    </div>
</div>

<div class="selection">
   <div class="box" v-for="(tmp,index) in choiceness" :key=index>
        <img :src="'/static/'+tmp.article_pic" alt="" class="box-img">
        <div class="box-title">
            <router-link to="/s_detail">
                <span>{{tmp.a_title}}</span>
            </router-link>
            <div >
                <p v-if="tmp.article_id==1" class="a-subtitle">{{tmp.a_subtitle}}</p>
                <p v-else-if="tmp.article_id==2" class="b-subtitle">{{tmp.a_subtitle}}</p>
                <p v-else-if="tmp.article_id==3" class="c-subtitle">{{tmp.a_subtitle}}</p>
                <p v-else-if="tmp.article_id==4" class="d-subtitle">{{tmp.a_subtitle}}</p>
            </div>         
            <ul class="breadcrumb comment">
                <li><a href="#">666人气</a></li>
                <li><a href="#">666评论</a></li>
                <li class="active"><a href="#">66赞</a></li>
            </ul>
        </div>
    </div>
   
</div>
<hr>
<footer class=" navbar navbar-inverse navbar-fixed-bottom">
    <div class="container">
        <div class="copyright">Copyright©2016 一起运动 Rx.com 版权所有&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;苏ICP备xxx号-1</div>
    </div>

</footer>
</div>




</template>


<script>
import MyHeader from './uitlity/header'
export default{
    components:{MyHeader},
    data () {
        return{
           article:["精选","饮食","问答","技巧"],
           active:0,
           choose:1,
           choiceness:[],
           scrollWatch: true         
        }
    },
    beforeMount(){

         $(window).scroll(()=> {
             if(this.scrollWatch){
                    if ($(".info_nav").offset().top < $("html,body").scrollTop()) {
                    $(".info-content").css("position", "fixed");
                } else {
                    $(".info-content").css("position", "absolute");
                }
             }         
        });
        this.$nextTick(function(){
           this.send();
        }) 
    },
    destroyed () {
    this.scrollWatch = false;
    },
    methods:{
        jumpTo:function(index){ 
            this.choose=index+1;
            this.send();
            this.animate_scroll();         
            if(index==0){
                this.active=index;
            }else if(index==1){
                this.active=index;     
            }else if(index==2){
                this.active=index;
            }else if(index==3){
                this.active=index;
            }   
        },
        animate_scroll:function (){
            $("html,body").animate({scrollTop:$(".info_nav").offset().top},500);
        },
        send () {
            var chooseValue=this.choose;         
            this.$axios.get('http://127.0.0.1/Framwork_project/data/course_content/article.php?article_id='+chooseValue)
                .then((response)=>{
                    // console.log(response);
                    if(chooseValue==2){
                     this.choiceness=response.data.foodItems;
                    }else if(chooseValue==3){
                        console.log(response.data.AskItems);
                        this.choiceness=response.data.AskItems;
                    }else if(chooseValue==4){
                        this.choiceness=response.data.skillItems;
                        console.log(response.data.skillItems);
                    }else{
                        this.choiceness=response.data.choicenessItems;
                    }
                    
                })
                .catch((error)=>{
                    console.log(error);
                })      
        }
    }
}
</script>


<style>
.a-subtitle{
    margin:10px 5px;
    color: #EA2303; 
}
.b-subtitle{
    margin:10px 5px;
    color: #FECD42; 
}
.c-subtitle{
    margin:10px 5px;
    color: #007ACC; 
}
.d-subtitle{
    margin:10px 5px;
    color: #00BC00; 
}
</style>
