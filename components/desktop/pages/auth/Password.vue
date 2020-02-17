<template>
    <div class="container flex-center">
        <div class="card">
            <div class="card-content">
                <p class="header">비밀번호 찾기</p>
                <ValidationObserver ref="observer" tag="form" @submit.prevent="submit" novalidate>
                    <ValidationProvider rules="required|email" name="이메일" v-slot="{ errors, valid }">
                        <b-field :type="{ 'is-danger': errors[0], 'is-success': valid }" :message="errors">
                            <b-input type="email" v-model="userInfo.email"
                                     placeholder="이메일" autocomplete="email"></b-input>
                        </b-field>
                    </ValidationProvider>
                    <button type="submit" class="button is-primary">비밀번호 찾기</button>
                </ValidationObserver>
                <p class="string">아직 등록된 회원이 아니신가요? 이메일로 <span><nuxt-link to="/auth/register">회원가입</nuxt-link></span>하기</p>
                <p class="string">이미 가입한 계정이 있나요? 등록된 계정으로 <span><nuxt-link to="/auth/login">로그인</nuxt-link></span>하세요.</p>
            </div>
        </div>
    </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
    name: 'PasswordChange',
    components: {
        ValidationObserver,
        ValidationProvider,
    },
    data () {
        return {
            userInfo: {
                email: '',
            },
        }
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
