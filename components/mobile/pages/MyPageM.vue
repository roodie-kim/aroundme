<template>
    <div class="my-page" style="padding: 30px 20px 20px;">
        <!-- nickname div -->
        <div class="part">
            <p style="font-weight: 600;">닉네임</p>
            <div>
                <ValidationObserver ref="observerName" tag="form" @submit.prevent="submitNickname" novalidate
                                    style="display: flex; margin-top: 0;">
                    <ValidationProvider rules="required|alphaKor|between:2,12" name="닉네임" v-slot="{ errors, valid }">
                        <b-field :type="{ 'is-danger': errors[0], 'is-success': valid }" :message="errors">
                            <b-input type="text" v-model="userInfo.name" placeholder="닉네임"></b-input>
                        </b-field>
                    </ValidationProvider>
                    <button type="submit" class="button is-primary"
                            style="width: 100px; margin-left: 10px;">
                        변경
                    </button>
                </ValidationObserver>
            </div>
        </div>
        <!-- password div -->
        <div class="part">
            <p style="font-weight: 600;">비밀번호</p>
            <ValidationObserver ref="observerPassword" tag="form" @submit.prevent="submitPassword" novalidate
                                style="margin-top: 0; max-width: 450px;">
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
                <div style="display: flex; justify-content: flex-end;">
                    <button class="button is-primary" style="width: 100px;">
                        변경
                    </button>
                </div>
            </ValidationObserver>
        </div>
        <div class="part">
            <button @click="logout" class="button is-primary is-inverted"
                    style="border: 1px solid #283593;">
                <strong>로그아웃</strong>
            </button>
        </div>
    </div>
</template>

<script>
import MyPage from '../../desktop/pages/MyPage'
export default {
    extends: MyPage,
}
</script>

<style scoped>
.part {
    margin-bottom: 30px;
}
</style>
