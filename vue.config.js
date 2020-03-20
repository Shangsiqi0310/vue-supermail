module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                // '@':'src' 内部配置过
                'components': '@/components',
                'assets': '@/assets',
                'commom': '@/common',
                'network': '@/network',
                'views': '@/views'
            }
        },
        module: {
            rules: [{
                test: /\.less$/,
                use: [
                    // ...其他 loader 配置
                    {
                        loader: 'less-loader',
                        options: {
                            modifyVars: {
                                // 直接覆盖变量
                                'text-color': '#111',
                                'border-color': '#eee',
                                'active-color': '#000'
                                    // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                                    // 'hack': `true; @import "your-less-file-path.less";`
                            }
                        }
                    }
                ]

            }]
        }
    }
}