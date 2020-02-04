<template>
    <section class="city_body">
        <div class="city_wrap">
            <div class="hot_city">
                <h2>热门城市</h2>
                <ul class="clearfix">
                    <li>北京</li><li>上海</li><li>广州</li><li>天津</li><li>杭州</li><li>南京</li><li>成都</li>
                </ul>
            </div>
            <div class="city_sort">
                <div>
                    <h2>A</h2>
                    <ul><li>阿拉善盟</li><li>鞍山</li><li>安庆</li><li>安阳</li><li>阿坝</li><li>安顺</li><li>安福</li><li>阿荣旗</li></ul>
                </div>
            </div>
        </div>
        <div class="city_index">
            <ul>
                <li>A</li><li>B</li><li>C</li><li>D</li>
            </ul>
        </div>
        <!-- <section class="hot_city">
            <h2>热门城市</h2>
            <ul>
            <li v-for="item in hotList" :key="item.id">{{item.nm}}</li>
            </ul>
        </section>
        <section class="city_list" ref="city_list">
            <div v-for="item in cityList" :key="item.index">
            <h2>{{item.index}}</h2>
            <ul>
                <li v-for="itemList in item.list" :key="itemList.id">{{itemList.nm}}</li>
            </ul>
            </div>
        </section>
        <section class="city_num" >
            <ul>
            <li v-for="(item,index) in cityList" :key="item.index" @touchstart='handleToIndex(index)'>{{item.index}}</li>
            </ul>
        </section> -->
    </section>
</template>

<script>
    export default {
        name: 'City',
        data () {
            return {

            }
        },
    }
</script>

<style scoped>
    #content .city_body{
        margin-top: 45px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
    }
    .city_wrap{
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        overflow: auto;
        background: #fff5f0;
    }
    .hot_city h2{
        padding-left: 15px;
        line-height: 30px;
        font-size: 14px;
        background: #f0f0f0;
        font-weight: 400;
    }
    .hot_city ul{
        display: flex;
        flex-wrap: wrap;
    }
    .hot_city ul li{
        float: left;
        background: #fff;
        width: 29%;
        height: 33px;
        margin-top: 15px;
        margin-left: 3%;
        padding: 0 4px;
        border: 1px solid #e6e6e6;
        border-radius: 3px;
        line-height: 33px;  
        text-align: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .city_index{
        width: 20px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        text-align: center;
        border-left: 1px solid #e6e6e6;
    }
    .city_body .city_sort h2{
        padding-left: 15px;
        line-height: 30px;
        font-size: 14px;
        background: #f0f0f0;
        font-weight: 400;
    }
    .city_body .city_sort ul
    {
        padding-left: 10px;
        margin-top: 10px;
    } 
    .city_body .city_sort ul li{
        line-height: 30px;
    } 
    .city_body .city_sort div{
    margin-top: 20px;
}
    
</style>
