<template>
    <div class="movies_body">
        <ul>
            <!-- <li>
                <div class="pic_show"><img src="http://p0.meituan.net/128.180/movie/115273d73084aa4e54c3401f7457e9fa1185899.jpg" alt=""></div>
                <div class="info_list">
                    <h2>唐人街探案</h2>
                    <p><span class="person">12344</span> 人想看</p>
                    <p>主演：王宝强 刘昊然</p>
                    <p>2020年上映</p>
                </div>
                <div class="btn_pre">预售</div>
            </li> -->
            <li v-for="item in comingList" :key="item.id">
                <div class="pic_show"><img :src="item.img | setWH('128.180')" alt=""></div>
                <div class="info_list">
                    <h2>{{item.nm}}</h2>
                    <p><span class="person">{{item.wish}}</span> 人想看</p>
                    <p>主演：{{item.star}}</p>
                    <p>{{item.rt}}</p>
                </div>
                <div class="btn_pre">预售</div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'ComingSoon',
        data () {
            return {
                comingList : []
            }
        },
        mounted(){
            this.axios.get('/api/movieOnInfoList?cityId=10').then((res)=>{
                var msg = res.data.msg;
                if(msg === 'ok'){
                    this.comingList = res.data.data.movieList; //<-------需要改动
                    console.log(this.comingList)
                }
            })
        }
    }
</script>

<style scoped>
    .movies_body{
        flex:1;
        overflow: auto;
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
    .movies_body .btn_mall,.movies_body .btn_pre{
        width:47px;
        height:27px;
        line-height: 28px;
        text-align: center;
        background-color: #f90;
        color:#fff;
    }
    .movies_body .btn_pre{
        background: #3c9fe6;
    }

</style>

