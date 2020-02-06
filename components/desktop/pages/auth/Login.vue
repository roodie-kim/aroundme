<template>
    <div class="container flex-center">
        <div class="card">
            <div class="card-content">
                <p class="header">로그인</p>
                <ValidationObserver ref="observer" tag="form" @submit.prevent="submit" novalidate>
                    <ValidationProvider rules="required|email" name="이메일" v-slot="{ errors, valid }">
                        <b-field :type="{ 'is-danger': errors[0], 'is-success': valid }" :message="errors">
                            <b-input type="email" v-model="userInfo.email"
                                     placeholder="이메일" autocomplete="email"></b-input>
                        </b-field>
                    </ValidationProvider>
                    <ValidationProvider rules="required" name="비밀번호" v-slot="{ errors, valid }">
                        <b-field :type="{ 'is-danger': errors[0], 'is-success': valid }"
                                 :message="errors">
                            <b-input type="password" v-model="userInfo.password" placeholder="비밀번호"
                                     autocomplete="password"></b-input>
                        </b-field>
                    </ValidationProvider>
                    <button type="submit" class="button is-primary">로그인</button>
                </ValidationObserver>
                <p class="string">아직 등록된 회원이 아니신가요? 이메일로 <span><nuxt-link to="/auth/register">회원가입</nuxt-link></span>하기</p>
                <p class="string">비밀번호를 잊어버리셨나요? <span><nuxt-link to="/auth/password">비밀번호</nuxt-link></span> 찾기.</p>
            </div>
        </div>
    </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
    name: 'Login',
    components: {
        ValidationObserver,
        ValidationProvider,
    },
    data () {
        return {
            userInfo: {
                email: '',
                password: '',
            },
        }
    },
    methods: {
        async submit () {
            const isValid = await this.$refs.observer.validate()
            if (isValid) {
                const response = await this.$store.dispatch('login', this.userInfo)
                if (response.status) {
                    const userResponse = await this.$store.dispatch('fetchUser', this.userInfo)
                    if (userResponse.status) {
                        this.$router.push('/')
                    }
                } else {
                    let message
                    if (response.data.message === 'user does not exist') {
                        message = '가입되지 않은 이메일입니다.'
                    } else if (response.data.message === 'wrong password') {
                        message = '비밀번호가 틀렸습니다.'
                    }
                    this.$buefy.dialog.alert({
                        title: '엇!',
                        message,
                        type: 'is-danger',
                    })
                }
            } else {
                const message = '로그인 정보를 확인해주세요.'
                this.alertValidationWarning(message)
            }
        },
        alertValidationWarning (inputMessage) {
            this.$buefy.dialog.alert({
                message: inputMessage,
                type: 'is-danger',
            })
        },
    },
    mounted () {
        this.toggleSidebar(false)
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
