<template>
<div>
    <!--导航部分-->
<nav class="navbar  my-navbar navbar-fixed-top">
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
                    <img src="../assets/img/project/Download_Phone2.png" alt="">
                </a>
               <Search class="my-input" />
                        
            </div>

        </div>
    </div>
</nav>

<div class="bg">
    <video class='video-bg' src="../assets/5s.mp4" muted autoplay loop></video>
    <div class='video-control'>
        <img src="../assets/img/project/title.png" alt="">
    </div>
</div>


<!--分享部分-->
<section class="activity-sharing">
    <div class="container">
    <p class="contnet-title">分享健身成果，一起进步</p>
    <div class="row">
        <div class="col-sm-6  col-md-4">
            <div class="card-container">
                <div class="card">
                    <a href="#">
                    <img src="../assets/img/project/fit7.jpg" alt="" class="img-rounded">
                    </a>
                </div>

            </div>
        </div>
        <div class="col-sm-6  col-md-4 card-container">
            <!-- <div class="card-container"> -->
                <div class="card">
                    <a href="#">
                       <img src="../assets/img/project/running.jpg" alt="" class="img-rounded"> 
                    </a>
                    
                </div>

            <!-- </div> -->
        </div>
        <div class="col-xs-12  col-md-4">
            <div class="card-container">
                <div class="card">
                    <a href="#">
                    <img src="../assets/img/project/fit-1.jpg" alt="" class="img-rounded">
                    </a>
                </div>
            </div>

        </div>
        </div>
    </div>
</section>
<!--推荐练习-->
<section class="training">
    <div class="recommend-training">
        <p>多种健身训练供你选择</p>
        <span>训练计划针对不同人群、各种器械和阶段健身目标组合编排，适用最广泛的健身场景。</span>
    </div>
    <div class="container">
        
     
    <div class="recommend">
        <div class="row">
        <div class="training-block">
            <a href="#" class="training-item recommend_one">
                <div class="training-detail">
                    <div class="training-title">马甲线养成</div>
                    <div class="training-subTitle">12分钟 78千卡</div>
                    <div class="training-population">1,751,274人训练</div>
                </div>
            </a>
            <a href="#" class="training-item recommend_two">
                <div class="training-detail">
                    <div class="training-title">人鱼线雕刻</div>
                    <div class="training-subTitle">10分钟 34千卡</div>
                    <div class="training-population">851,274人训练</div>
                </div>
            </a>
            <a href="#" class="training-item recommend_three">
                <div class="training-detail">
                    <div class="training-title">瑜伽&韵律</div>
                    <div class="training-subTitle">32分钟 152千卡</div>
                    <div class="training-population">1,112,274人训练</div>
                </div>
            </a>
        </div>
        <div class="training-data">
            <div class="data-text">
                <span class="data-num">累积训练:6,112,274人</span>
            </div>
            <div class="data-time">
                <span class="data-min">68.79</span>
                <span class="data-text data-unit">亿分钟</span>
            </div>
            <div class="data-cont">
					<span>
						<span class="data-num">4.93</span>
						<span class="data-text data-unit">亿次</span>
					</span>
                <span>
						<span class="data-num data-cal">388.56</span>
						<span class="data-text data-unit">亿千卡</span>
					</span>
            </div>
            <div class="training-text">
                <div class="text-title">真人同步训练记录训练进度</div>
                <div class="text-cont">全程语音督导，自动同步进度，不需要背动作、记组数，跟着马上练起来。</div>
               <router-link to="/training" class="btn btn-info btn-lg" >
            <span >查看课程</span><span class="glyphicon glyphicon-chevron-right"></span>
            </router-link>
            </div>
        </div>

        <div class="training-wrap">
            <div class="body-wrap">
                <img src="../assets/img/project/body.png" alt="" class="body-pic">
                <img src="../assets/img/project/bodycircle.png" alt="" class="circle-pic">
            </div>
            <img src="../assets/img/project/traindata.png" class="data-pic">
        </div>
    </div>   
    </div><!-- recommend -->
    </div>
</section><!-- training-recommend 部分 -->

<!--run部分 -->
<section class="training">
    <div class="run-training">
        <p>户外跑步 & 精准跑步记录，让你的跑步更加系统</p>
        <span>精准跑步路线记录，跑前热身与跑后拉伸，Keep 提供更加完善和专业的跑步指导。</span>
    </div>
    <div class="running">
        <div class="run-text-wrap">
            <div class="run-text-title">用步伐量世界</div>
            <div class="run-text-subtitle">你跑！我们记录着你挥洒的汗水，那是你成功的见证。</div>
            <router-link to="/training" class="btn btn-success btn-lg" >
            <span >查看课程</span><span class="glyphicon glyphicon-chevron-right"></span>
            </router-link>
                
        </div>
        <div class="run-track-wrap">
            <img src="../assets/img/project/runtrack.png" alt="">
						<div id="run-data" style="width:500px;height:150px;"></div>
						<div class="run-data-title">
						<span>累计时间:7.80 亿/分钟</span>
						<span>累计消耗:66.6 亿千卡</span>
						<span>累计公里:9.7  分/公里</span>
						</div>
        </div>
        <div class="run-record">
            <div class="morning-running" >
                <img src="../assets/img/project/running.jpg" alt="">
            </div>
            <div class="running-frequency">
                <div class="frequency">平均步频:146</div>
                <img src="../assets/img/project/runchart.png" alt="">
            </div>
            
        </div>
    </div>
</section>

<hr>
<MyFooter></MyFooter>
</div> 

</template>


<script>
import Search from './uitlity/search'
import MyFooter from './uitlity/footer'
export default{
    components:{MyFooter,Search},
    data (){
        return {
            msg:1
        }
    },
    mounted (){
            $(window).scroll(()=> {
            if ($(".navbar").offset().top > 50) {
                $(".navbar-fixed-top").addClass("top-nav");
            } else {
                $(".navbar-fixed-top").removeClass("top-nav");
            }
        });

         $(".card").hover(
        function(){
            $(this).addClass('animated pulse');

        },
        function(){
            $(this).removeClass('animated pulse');
        }
    )
 
    $(".training-item").hover(
        function(){
            $(this).addClass('animated pulse');

        },
        function(){
            $(this).removeClass('animated pulse');
        }
        );
    var echarts = require('echarts');
       var myChart = echarts.init(document.getElementById('run-data'));
   
    var dataStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            shadowBlur: 40,
            shadowColor: 'rgba(40, 40, 40, 0.5)',
        }
    };
    
    var placeHolderStyle = {
        normal: {
            color: 'rgba(44,59,70,1)', // 未完成的圆环的颜色
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: 'rgba(44,59,70,1)' // 未完成的圆环的颜色
        }
    };
     myChart.setOption({
        title: {
            x: 'center',
            y: 'center',
            textStyle: {
                fontWeight: 'normal',
                color: '#b697cd',
                fontSize: 12
            }
        },
        tooltip: {
            show: false,
        },
        toolbox: {
            show: false,
        },
        // color : ['#3dd4de','#b697cd','#a6f08f'],
        backgroundColor: 'rgba(71,63,78,0.1)',
        series: [{
            name: 'Pie1',
            type: 'pie',
            clockWise: false,
            radius: [30, 35],
            itemStyle: dataStyle,
            hoverAnimation: true,
            center: ['15%', '50%'],
            data: [{
                value: 80,
                label: {
                    normal: {
                        formatter: '2/day',
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'normal',
                            color: '#3dd4de'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#3dd4de',
                        shadowColor: '#3dd4de',
                        shadowBlur: 10
                    }
                }
            }, {
                value: 75,
                name: 'invisible',
                itemStyle: placeHolderStyle,
            }]
        }, {
            name: 'Pie2',
            type: 'pie',
            clockWise: false,
            radius: [30, 35],
            itemStyle: dataStyle,
            hoverAnimation: true,
            center: ['50%', '50%'],
            data: [{
                value: 80,
                label: {
                    normal: {
                        formatter: '500/千卡',
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '12',
                            fontWeight: 'normal',
                            color: '#3dd4de'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#3dd4de',
                        shadowColor: '#3dd4de',
                        shadowBlur: 10
                    }
                }
            }, {
                value: 75,
                name: 'invisible',
                itemStyle: placeHolderStyle,
            }]
    
        }, {
            name: 'Pie3',
            type: 'pie',
            clockWise: false,
            radius: [30, 35],
            itemStyle: dataStyle,
            hoverAnimation: true,
            center: ['85%', '50%'],
            data: [{
                value: 100,
                label: {
                    normal: {
                        formatter: '10/公里',
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'normal',
                            color: '#a6f08f'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#a6f08f',
                        shadowColor: '#a6f08f',
                        shadowBlur: 10
                    }
                }
            }, {
                value: 25,
                name: 'invisible',
                itemStyle: placeHolderStyle,
            }]
        }, ]
    });

    }
    
}
</script>


<style>
.navbar-form{
    padding:0 ;
    margin-top: 0;
}

.myinput{
    background: transparent;
    padding:0 ;
    margin-top: 0;
}

.my-input input{
    background-color:transparent;
    color: #fff;
}
</style>
