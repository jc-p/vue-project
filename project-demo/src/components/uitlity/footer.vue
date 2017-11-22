<template>
    <!--尾部-->

<div class="footer">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-3   footer-summary">
                <p class="footer-titel">Rx</p>
                <p class="footer-subtitel">自律-->造就完美的你</p>
            </div><!--左边标题-->

            <div class="col-xs-12 col-md-4 ">
                <div class="row">
                    <div class="col-xs-6 ">
                        <ul class="list-unstyled">
                            <li>&nbsp;</li>
                            <li><a href="#">关于我们</a></li>
                            <li>&nbsp;</li>
                            <li><a href="#">加入我们</a></li>
                            <li>&nbsp;</li>
                            <li><a href="#">联系方式</a></li>
                            <li>&nbsp;</li>
                        </ul>
                    </div>
                    <div class="col-xs-6 ">
                        <ul class="list-unstyled">
                            <li>&nbsp;</li>
                            <li><a href="#">精彩分享</a></li>
                            <li>&nbsp;</li>
                            <li><a href="#">运动轨迹</a></li>
                            <li>&nbsp;</li>
                            <li><a href="#">社区精选</a></li>
                            <li>&nbsp;</li>
                        </ul>
                    </div>

                </div>
            </div><!-- 中间 -->
            <div class="col-xs-12 col-md-4 col-offset-md-2">
                <div class="row">
                    <div class="col-xs-6 col-md-6 erweima">
                        <p>扫描二维码下载</p>
                        <a href="#"><img src="../../assets/img/project/erweima.jpg" alt=""></a>
                    </div>
                    <div class="col-xs-6 col-md-6 direct">
                        <p>直接下载</p>
                        <a href="#"><img src="../../assets/img/project/andriod.png" alt=""></a>

                        <a href="#"><img src="../../assets/img/project/apple.png" alt=""></a>
                    </div>
                </div>
            </div><!-- 右边二维码 -->

        </div>
        <hr>
        <p>要有把路走绝的精神，激流勇退是一种境界，把路走绝是一种精神。坚持到底，不会错的；坚持到底，就是成功！</p>
    </div>
</div>

</template>


<script>
    export default{
        data () {
            return {
                msg:1
            }
        }
    }
</script>   


<style>
.footer{
  margin-top:50px;
	background:#000;
	text-align:center;
}
.footer p{
    color:#fff;
    font-size: 21px;
}
.footer-summary{
	position: relative;
	top:20px;
	text-align:left;
}
.footer-summary .footer-titel{
    font-size:36px;
	color:#F2E5D4;
}
 
.footer-summary .footer-subtitel{
	color:#F2E5D4;
	font-size:24px;;
}
.erweima{
	font-size:1.2em;
	color:#fff;
}
.erweima img{
	width:150px;
}
.direct{
	font-size:1.2em;
	color:#fff;
}
.direct img{
	width:150px;
	margin-bottom:10px;
}
</style>
