module.exports = {
    devServer : {
        proxy : {
            '/api':{
                target: 'http://39.97.33.178',
                changeOrigin: true
            }
        }
    }
}



// module.exports = {
//     devServer: {    //环境的配置
//         proxy: {   //反向代理
//             '/api': { //代理的接口--api
//                 target: 'http://39.97.33.178',   //反向代理的目标
//                 changeOrigin: true       //反向代理时是否改变地址
//             }
//         }
//     }
// }