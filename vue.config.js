const path = require('path')

function resolve(dir) {
    return path.resolve(dir);
}

module.exports = {
    // outputDir: 'dist',
    // devServer: {
    //     proxy: {
    //         '/api': {
    //             // target: 'http://localhost:8001',// proxy 설정 URI
    //             target: 'http://arches.xenoimpact.com/',
    //             changeOrigin: true,
    //             logLevel: 'debug' // this what you want
    //         }
    //     }
    // },
    // pages: {
    //     index: {
    //         entry: 'src/main.js',
    //         template: 'public/index.html',
    //         filename: 'index.html',
    //     },
    //     login: {
    //         entry: 'public/login.js',
    //         template: 'public/login.html',
    //         filename: 'login.html'
    //     }
    // },
    configureWebpack: {
        devtool: 'source-map',
        resolve: {
            alias: {
                vue$: 'vue/dist/vue.esm.js',
                tachyon: resolve('public/deps/tachyon/tachyon.vue.esm.js'),
                vrix: resolve('public/deps/vrix/vrix.vue.esm.js'),
            },
            extensions: ['*', '.js', '.vue', '.json', '.md']
        },
    },
    // chainWebpack: (config) => {
    //     config.module
    //         .rule('raw-loader')
    //         .test(/\.txt$/i)
    //         .use('raw-loader')
    //         .loader('raw-loader')
    //         .end();
    // }
}
