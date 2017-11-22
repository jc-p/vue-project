<template>

      <!--导航部分-->
<nav class="navbar  navbar-inverse ">
    <div class="container">
        <div class="navbar-header">
           <router-link to="/home" class="navbar-brand "><span>Rx</span></router-link>
            <button type="button" class="navbar-toggle " data-toggle="collapse" href="#menu">
                <span class="icon-bar "></span>
                <span class="icon-bar "></span>
                <span class="icon-bar "></span>
            </button>
        </div><!-- 头部logo +右边按钮部分-->
        <!--折叠部分-->
        <div class="navbar-collapse collapse" id="menu">
            <ul class="nav navbar-nav">
                <li>
                    <router-link to="/home">首页</router-link>
                </li>
                <li>
                    <router-link to="/share">分享</router-link>
                </li>
                <li>
                   <router-link to="/training">健身课程</router-link>
                </li>
                <li>
                    <router-link to="/about">关于我们</router-link>
                </li>
            </ul>

            <div class="navbar-right  navbar-text">
                <a href="#">
                    <span>点击下载</span>
                    <img src="../../assets/img/project/Download_Phone2.png" alt="">
                </a>
               <Search/>
            </div>

        </div>
    </div>
</nav>

</template>

<script>
import Search from './search'
export default{
    components:{Search},
    data () {
        return{
         
        }
    }
}
</script>


<style>
.navbar-text{
    margin-bottom: 0;
}
.navbar-text a {
		color: #9d9d9d;
        text-decoration: none;
}
.navbar-nav li{
    margin: 0 15px;
    font-size:18px;
}
.navbar-text a:hover {
        color: #fff;
        
}
.navbar {
		margin-bottom: 0;
}
.navbar-form{
    padding:0 ;
    margin-top: 0;
}



</style>

