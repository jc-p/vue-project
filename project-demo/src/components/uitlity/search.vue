<template>
<!-- search 部分 -->
    <form class="navbar-form navbar-right">
                <div class="search-input">
                <!-- $event是实参，表示event对象 -->
                <!--
                    输入搜索内容即时搜索，所以有一个keyup事件。
                    按回车键有一个进入搜索内容页面，所以有一个keydown.enter事件
                    按上下键可以选择列表条目
                -->
                <input type="text" v-model="keyword"   @keyup="get($event)" @keydown.enter="search()" @keydown.down="selectDown()" @keydown.up.prevent="selectUp()">
                <!-- 这是一个小叉叉，点击它可清除输入框内容 -->
                <span class="search-reset" @click="clearInput()">&times;</span>
                <button class="search-btn" @click="search()"><span class="glyphicon glyphicon-search form-control-feedback" ></span></button>
                <div class="search-select">
                <!-- transition-group也是vue2.0中的新特性,tag='ul'表示用ul包裹v-for出来的li -->
                    <transition-group name="itemfade" tag="ul" mode="out-in" v-cloak>
                        <li v-for="(value,index) in myData" :class="{selectback:index==now}" class="search-select-option search-select-list" @mouseover="selectHover(index)" @click="selectClick(index)" :key="index">
                            {{value.cname}}
                        </li>
                    </transition-group>
                </div>
            </div>
    </form>
</template>

<script>
export default{
    data () {
        return{
            myData: [],//用来接收ajax得到的数据
            keyword: '',//v-model绑定的输入框的value
            now: -1,
            searchIndex: 0,
        }
    },
    methods:{
        // searchBlur:function(){
        //     this.myData=[];
        // },
       // &event是实参，表示event对象
        get: function(ev){
            // 如果按得键是上或者下，就不进行ajax
            // console.log(ev);
            if (ev.keyCode == 38 || ev.keyCode == 40) {
                return;
            }
            this.$axios.get('http://127.0.0.1/Framwork_project/data/course_content/search.php?kw='+ this.keyword )
            .then((res)=> {
                // console.log(res.data);
                 this.myData = res.data;
            });
        },
        selectDown: function() {
            this.now++;
            //到达最后一个时，再按下就回到第一个
            if (this.now == this.myData.length) {
                this.now = 0;
            }
            this.keyword = this.myData[this.now].cname;
        },
        selectUp: function() {
            this.now--;
            //同上
            if (this.now == -1) {
                this.now = this.myData.length - 1;
            }
            this.keyword = this.myData[this.now].cname;
        },
        search: function() {
            //打开对应的搜索界面
            this.$router.push('training');
            // window.open('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=' + this.keyword);
        },
        selectHover: function(index) {
            this.now = index;
        },
        selectClick: function(index) {
             this.keyword = this.myData[index].cname;
             this.myData=[];
            this.search();          
        },
        clearInput: function() {
            this.keyword = '';
            this.$axios.get('http://127.0.0.1/Framwork_project/data/course_content/search.php?kw='+ this.keyword )
            .then((res)=> {
                this.myData = res.data;
            });
        },
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



.search-input {
    height: 30px;
    width: 200px;
    margin: 0 auto;
    position: relative;
    left:15px;
}

.search-input input {
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    border-radius: 50px;
    outline: none;
    width: 220px;
    height: 34px;
    font-size: 18px;
    color: #000; 
    float: left;
    padding-left: 10px;
    padding-right: 10px;
    overflow: hidden;
}

.search-btn {
    height: 34px;
    width: 34px;
    background-color: #000;
    border-radius:50px; 
    color: white;
    font-size: 12px;
    font-weight: bold;
    position: absolute;
    top:0;
    right:-55px;;
}

.search-btn {
    cursor: pointer
}

.search-select {
    position: absolute;
    top: 34px;
    left:-23px;
    width: 220px;
    box-sizing: border-box;
    z-index: 999;
}

.search-select li {
    list-style: none;
    border: 1px solid #d4d4d4;;
    border-top: none;
    border-bottom: none;
    background-color: #fff;
    width: 100%
}

.search-select-option {
    box-sizing: border-box;
    padding: 7px 10px;
}

.selectback {
    background-color: #eee !important;
    cursor: pointer
}

input::-ms-clear {
    display: none
}

.search-reset {
    width: 21px;
    height: 21px;
    position: absolute;
    display: block;
    line-height: 21px;
    text-align: center;
    cursor: pointer;
    font-size: 20px;
    right:0px;
    top: 8px
}

.search-select-list {
    transition: all 0.5s
}

.itemfade-enter,
.itemfade-leave-active {
    opacity: 0;
}
</style>

