<template>
<div>
<div class="selection">
   <div class="box" v-for="(tmp,index) in choiceness" :key=index>
        <img :src="require('../assets/img/'+tmp.article_pic)" alt="" class="box-img">
        <div class="box-title">
            <router-link to="/detail">
                <span>{{tmp.a_title}}</span>
            </router-link>
            <p class="a-subtitle">{{tmp.a_subtitle}}</p>
            <ul class="breadcrumb comment">
                <li><a href="#">666人气</a></li>
                <li><a href="#">666评论</a></li>
                <li class="active"><a href="#">66赞</a></li>
            </ul>
        </div>
    </div>
   
</div>
</div>
</template>


<script>
export default{
    props:["parentValue"],
    data () {
        return{        
            choiceness:[],  
        }
    },
    mounted (){  
        console.log('挂载结束。。。')
        // this.$nextTick(function () {
        //     console.log(this.$options.propsData);
        //         console.log('DOM更新 后调用');
        //         // this.send();
        //         // this.choiceness =this.$parent.choiceness;
        //         console.log("已经获得请求数据"+this.choiceness); 
        //     })
    },
    methods:{
        // send () {
            
        //     this.$axios.get('http://127.0.0.1/Framwork_project/data/course_content/article.php?article_id='+this.sendValue)
        //         .then((response)=>{
        //             console.log(response);
                    
        //             this.choiceness=response.data.choicenessItems;
        //             // console.log(this.choiceness);
        //         })
        //         .catch((error)=>{
        //             console.log(error);
        //         })      
        // }
    }
      
}
</script>


<style>
.a-subtitle{
    margin:10px 5px;
    color: #EA2303; 
}
</style>
