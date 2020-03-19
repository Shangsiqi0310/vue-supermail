module.exports = {
    configurewebpack: {
        reslove: {
            alias: {
                // '@':'src' 内部配置过
                'components': '@/components',
                'assets': '@/assets',
                'commom': '@/common',
                'network': '@/network',
                'views': '@/views'
            }
        }
    }
}