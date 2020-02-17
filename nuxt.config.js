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
                content: '수지, 커뮤니티, 수지구, 용인, 용인시, 풍덕천동, 죽전동, 동천동, 고기동, 신봉동, 성복동, 주민, ' +
                    '상현동, 풍덕천1동, 풍덕천2동, 죽전1동, 죽전2동, 상현1동, 상현2동, 용인시민, 수지구민',
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
            {
                name: 'naver-site-verification',
                content: 'f3fdb50476390981b2db423d51cf53258fefca58',
            },
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
    // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
    // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        'nuxt-device-detect',
        '@nuxtjs/sitemap',
        '@nuxtjs/google-gtag',
    ],
    sitemap: {
        hostname: process.env.OG_URL,
        gzip: true,
        exclude: [
            '/auth/login',
            '/auth/password',
            '/auth/register',
            '/posts/create',
            '/posts/**/edit',
            '/myPage',
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
            {
                url: '/posts/2',
                changefreq: 'daily',
                priority: 1,
            },
            {
                url: '/posts/3',
                changefreq: 'daily',
                priority: 1,
            },
            {
                url: '/posts/4',
                changefreq: 'daily',
                priority: 1,
            },
            {
                url: '/posts/5',
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
    'google-gtag': {
        id: process.env.GOOGLE_ANALYTICS_ID,
        config: {
            anonymize_ip: true,
            send_page_view: false,
        },
        debug: true, // enable to track in dev mode
        disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
        additionalAccounts: [{
            // id: 'UA-158057791-1', // required if you are adding additional accounts
            // config: {
            //     send_page_view: false,
            // },
        }],
    },
}
