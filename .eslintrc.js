module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended',
    ],
    // add your custom rules here
    rules: {
        'indent': ['error', 4],
        'comma-dangle': ['error', {
            'arrays': 'always-multiline',
            'objects': 'always-multiline',
            'imports': 'always-multiline',
            'exports': 'always-multiline',
            'functions': 'never',
        }],
        'curly': 0,
        'no-lonely-if': 0,
        'no-console': 0,
        'no-useless-return': 0,
        'dot-notation': 0,
        'vue/order-in-components': 0,
        'vue/max-attributes-per-line': 0,
        'vue/html-indent': ['error', 4],
        'vue/html-closing-bracket-newline': 0,
        'vue/multiline-html-element-content-newline': 0,
        'vue/html-self-closing': 0,
        'vue/attributes-order': 0,
        'vue/singleline-html-element-content-newline': 0,
        'vue/no-v-html': 0,
    }
}
