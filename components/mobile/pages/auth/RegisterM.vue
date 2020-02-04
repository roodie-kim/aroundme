<template>
    <div class="container flex-center" style="padding: 30px 15px;">
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
import Register from '../../../desktop/pages/auth/Register'
export default {
    extends: Register,
}
</script>

<style scoped>
.flex-center {
    display: flex;
    justify-content: center;
}
.card {
    width: 400px;
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
