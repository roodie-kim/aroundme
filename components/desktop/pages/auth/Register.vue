<template>
    <div class="container flex-center">
        <div class="card">
            <div class="card-content">
                <p class="header">회원가입</p>
                <ValidationObserver ref="observer" tag="form" @submit.prevent="submit" novalidate>
                    <ValidationProvider rules="required|email" name="이메일" v-slot="{ errors, valid }">
                        <b-field :type="{ 'is-danger': errors[0], 'is-success': valid }" :message="errors">
                            <b-input type="email" v-model="userInfo.email" placeholder="이메일"></b-input>
                        </b-field>
                    </ValidationProvider>
                    <ValidationProvider rules="required|alphaKor|between:2,12" name="닉네임" v-slot="{ errors, valid }">
                        <b-field :type="{ 'is-danger': errors[0], 'is-success': valid }" :message="errors">
                            <b-input type="text" v-model="userInfo.name" placeholder="닉네임"></b-input>
                        </b-field>
                    </ValidationProvider>
                    <ValidationProvider rules="required|min:8|confirmed:비밀번호 확인" name="비밀번호" v-slot="{ errors, valid }">
                        <b-field :type="{ 'is-danger': errors[0], 'is-success': valid }"
                                 :message="errors">
                            <b-input type="password" v-model="userInfo.password" placeholder="비밀번호"></b-input>
                        </b-field>
                    </ValidationProvider>
                    <ValidationProvider rules="required" name="비밀번호확인" v-slot="{ errors, valid }" vid="비밀번호 확인">
                        <b-field :type="{ 'is-danger': errors[0], 'is-success': valid }"
                                 :message="errors">
                            <b-input type="password" v-model="userInfo.password_confirm" placeholder="비밀번호 확인"></b-input>
                        </b-field>
                    </ValidationProvider>
                    <button type="submit" class="button is-primary">가입하기</button>
                </ValidationObserver>
                <p class="string">이미 가입한 계정이 있나요? 등록된 계정으로 <span><nuxt-link to="/auth/login">로그인</nuxt-link></span>하세요.</p>
            </div>
        </div>
    </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
    components: {
        ValidationObserver,
        ValidationProvider,
    },
    data () {
        return {
            userInfo: {
                email: '',
                name: '',
                password: '',
                password_confirm: '',
            },
        }
    },
    methods: {
        async submit () {
            const isValid = await this.$refs.observer.validate()
            if (isValid) {
                const response = await this.$store.dispatch('registerUser', this.userInfo)
                if (response.status) {
                    const userResponse = await this.$store.dispatch('fetchUser', this.userInfo)
                    if (userResponse.status) {
                        this.$router.push('/')
                    }
                } else {
                    this.manageErrorResponse(response)
                }
            } else {
                const message = '가입 정보를 다시 확인해주세요.'
                this.alertValidationWarning(message)
            }
        },
        alertValidationWarning (inputMessage) {
            this.$buefy.dialog.alert({
                title: '엇!',
                message: inputMessage,
                type: 'is-danger',
            })
        },
        manageErrorResponse (response) {
            if (response.data.response.status === 422) {
                if ('email' in response.data.response.data) {
                    if (response.data.response.data.email[0] === 'The email has already been taken.') {
                        this.alertValidationWarning('이미 사용중인 이메일입니다.')
                        this.userInfo.email = ''
                        return
                    }
                }
                if ('name' in response.data.response.data) {
                    if (response.data.response.data.name[0] === 'The name has already been taken.') {
                        this.alertValidationWarning('이미 사용중인 별명입니다.')
                        this.userInfo.name = ''
                        return
                    }
                }
            }
        },
    },
}
</script>

<style scoped>
.flex-center {
    display: flex;
    justify-content: center;
}
.card {
    width: 400px;
    margin-top: 100px;
}
.header {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 25px;
}
.field {
    height: 65px;
}
form > button {
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 24px;
}
.card-content > .string {
    font-size: 14px;
    margin-bottom: 14px;
}
</style>
