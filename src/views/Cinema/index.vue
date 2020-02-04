<template>
    <div id="main">
        <Header title="喵🐱影院"/>
        <div id="content">
            <div class="cinema_menu">
                <div class="city_switch">
                        全城 
                        <i class="iconfont icon-f11"></i>
                </div>
                <div class="brand_swtich">
                        品牌 
                        <i class="iconfont icon-f11"></i>
                </div>
                <div class="feature_switch">
                        特色 
                        <i class="iconfont icon-f11"></i>
                    </div>
            </div>
            <CinemaList/>
        </div>
        <tabBar/>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import TabBar from '@/components/TabBar'
    import CinemaList from '@/components/CinemaList'
    export default {
        name: 'Cinema',
        data () {
            return {

            }
        },
        components: {
            Header,
            TabBar,
            CinemaList
        }
    }
</script>

<style scoped>
    #content .cinema_menu{
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #e6e6e6;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #fff;
}
    
</style>
