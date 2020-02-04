<template>
    <div class="movies_body">
        <ul>
            <li>
                <div class="pic_show">
                    <img src="http://p1.meituan.net/128.180/movie/967b253953bc7e660cfadbf9d78f67b62852693.jpg">
                </div>
                <div class="info_list">
                    <h2>误杀   <img src="" alt=""></h2>
                    <p>观众评 <span class="grade">9.5</span></p>
                    <p>主演：肖央,谭卓,陈冲</p>
                    <p>今天暂无场次</p>
                </div>
                <div class=" btn btn_mall">购票</div>
            </li>
            <li>
                <div class="pic_show">
                    <img src="http://p1.meituan.net/128.180/movie/967b253953bc7e660cfadbf9d78f67b62852693.jpg">
                </div>
                <div class="info_list">
                    <h2>误杀   <img src="" alt=""></h2>
                    <p>观众评 <span class="grade">9.5</span></p>
                    <p>主演：肖央,谭卓,陈冲</p>
                    <p>今天暂无场次</p>
                </div>
                <div class=" btn btn_mall">购票</div>
            </li>
            <!-- <li v-for="item in movieList" :key="item.id">
                <div class="pic_show"><img :src="item.img | setWH('128.180')"/></div>
                <div class="info_list">
                    <h2>{{ item.nm }} <img v-if=" item.version " src="@/assets/images/max.png" alt=""></h2>
                    <p>观众评 <span class="grade">{{ item.sc }}</span></p>
                    <p>主演：{{ item.star }}</p>
                    <p>{{ item.showInfo }}</p>
                </div>
                <div class=" btn btn_mall">购票</div>
            </li> -->
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'PlayingNow',
        data () {
            return {

            }
        },
    }
</script>

<style scoped>
    .movies_body{
        flex:1;
        overflow: auto;
        padding-bottom:45px;
    }
    .movies_body ul{
        margin:0 12px;
        overflow: hidden;
    }
    .movies_body ul li{
        margin-top:12px;
        display: flex;
        align-items: center;
        border-bottom: 1px #e6e6e6 solid;
        padding-bottom:10px;
    }
    .movies_body .pic_show{
        width:64px;
        height:90px;
        overflow: hidden;
    }
    .movies_body .pic_show img{
        width:100%;
        display: block;
    }
    .movies_body .info_list{
        margin-left:10px;
        flex:1;
        position: relative;
    }
    .movies_body .info_list h2{
        font-size:17px;
        line-height: 24px;
        width: 150px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .movies_body .info_list p{
        font-size:13px;
        color:#666;
        line-height: 22px;
        width: 200px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .movies_body .info_list .grade{
        font-weight:700;
        color:#faaf00;
        font-size:15px;
    }
    .movies_body .info_list img{
        width:50px;
        position: absolute;
        right:10px;
        top:5px;
    }
    .movies_body .btn{
        width:47px;
        height:27px;
        line-height: 28px;
        text-align: center;
        background-color: #f90;
        color:#fff;
    }

</style>

