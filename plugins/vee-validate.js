import Vue from 'vue'
import { validate, extend } from 'vee-validate'
import { required, email, between, min, max, confirmed } from 'vee-validate/dist/rules'

// install the 'required' rule.
extend('required', {
    ...required,
    message: '필수 정보입니다.',
})

extend('email', {
    ...email,
    message: '이메일 형식을 확인해주세요.',
})

extend('alphaKor', {
    validate (value) {
        return /^[가-힣|a-z|A-Z]+$/.test(value)
    },
    message: '한글과 영어 알파벳만 사용 가능합니다.',
})

extend('between', {
    ...between,
    validate (value, { min, max }) {
        return value.length <= max && value.length >= min
    },
    message: '{_field_}의 길이는 {min} ~ {max}사이입니다.',
})

extend('min', {
    ...min,
    validate (value, { min }) {
        return value.length >= min
    },
    params: ['min'],
    message: '{_field_}는 {min}글자 이상이어야 합니다.',
})

extend('max', {
    ...max,
    validate (value, { max }) {
        return value.length <= max
    },
    params: ['max'],
    message: '{_field_}는 {max}글자 이하여야 합니다.',
})

extend('confirmed', {
    ...confirmed,
    message: '{_field_}가 일치하지 않습니다.',
})

Vue.use(validate)
