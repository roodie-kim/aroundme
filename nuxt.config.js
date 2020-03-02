// dot env load
require('dotenv').config()

export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: '필굿 | PhilGood',
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
                content: '',
            },
            {
                hid: 'description',
                name: 'description',
                content: '필리핀 정보 사이트. 필리핀 여행,필리핀 사건,사고 등 필리핀에 관한 이야기,필굿',
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
                content: '필굿 | PhilGood',
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: `필리핀 정보 사이트. 필리핀 여행,필리핀 사건,사고 등 필리핀에 관한 이야기,필굿`,
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
