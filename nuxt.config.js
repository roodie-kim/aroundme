import MomentLocalesPlugin from 'moment-locales-webpack-plugin'

// dot env load
require('dotenv').config()

export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: '수지사람공간',
        meta: [
            { charset: 'utf-8' },
            {
                hid: 'viewport',
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'keywords',
                name: 'keywords',
                content: '수지, 커뮤니티, 수지구, 용인, 용인시, 동천동, 풍덕천동,',
            },
            {
                hid: 'description',
                name: 'description',
                content: '수지 사람들의 생활 정보 공유공간',
            },
            {
                hid: 'image',
                name: 'image',
                content: process.env.SEO_IMAGE_PATH,
            },
            // {
            //     name: 'naver-site-verification',
            //     content: '5d1a2515128b54f7193639c45d382631e3008d3d',
            // },
            /* Open Graph */
            {
                hid: 'og:title',
                property: 'og:title',
                content: '수지사람공간',
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: `수지 사람들의 생활 정보 공유공간`,
            },
            {
                hid: 'og:url',
                property: 'og:url',
                content: process.env.OG_URL,
            },
            {
                hid: 'og:type',
                property: 'og:type',
                content: 'website',
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: process.env.SEO_IMAGE_PATH,
            },
            {
                hid: 'og:image:type',
                property: 'og:image:type',
                content: 'image/png',
            },
            // {
            //     property: 'fb:app_id',
            //     content: '307583213482718',
            // },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
        '~/assets/css/custom-bulma',
        '~/assets/css/common.css',
        'quill/dist/quill.snow.css',
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/buefy',
        '~/plugins/vee-validate',
        '~/plugins/global-mixin',
        '~/plugins/quill-functions',
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        '@nuxtjs/eslint-module',
        ['@nuxtjs/moment', {
            locales: ['ko'], defaultLocale: 'ko',
        }],
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
    // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        'nuxt-device-detect',
        '@nuxtjs/sitemap',
    ],
    sitemap: {
        hostname: 'https://example.com',
        gzip: true,
        exclude: [
            '/auth/**',
            '/posts/create',
            '/posts/**/edit',
        ],
        routes: [
            {
                url: '/',
                changefreq: 'daily',
                priority: 1,
            },
            {
                url: '/posts/1',
                changefreq: 'daily',
                priority: 1,
            },
        ],
    },
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {
        baseURL: process.env.SPACE_API,
    },
    /*
    ** Build configuration
    */
    build: {
        transpile: ['vee-validate/dist/rules'],
        /*
        ** You can extend webpack config here
        */
        extend (config, ctx) {
        },
    },
    env: process.env,
}
