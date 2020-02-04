<template>
    <div class="my-page" style="padding: 30px 20px 20px;">
        <!-- nickname div -->
        <div class="part">
            <p style="font-weight: 600;">닉네임</p>
            <div>
                <ValidationObserver ref="observerName" tag="form" @submit.prevent="submitNickname" novalidate
                                    style="width: 450px; display: flex; margin-top: 0;">
                    <ValidationProvider rules="required|alphaKor|between:2,12" name="닉네임" v-slot="{ errors, valid }">
                        <b-field :type="{ 'is-danger': errors[0], 'is-success': valid }" :message="errors">
                            <b-input type="text" v-model="userInfo.name" placeholder="닉네임"
                                     style="width: 340px;"></b-input>
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
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
    components: {
        ValidationObserver,
        ValidationProvider,
    },
    data () {
        return {
            userInfo: {
                name: null,
                password: null,
                password_confirm: null,
            },
        }
    },
    methods: {
        async submitNickname () {
            const isValid = await this.$refs.observerName.validate()
            if (isValid) {
                if (this.user.name === this.userInfo.name) {
                    this.$buefy.toast.open('현재 사용중인 닉네임입니다.')
                    return
                }
                const response = await this.$store.dispatch('changeNickname', this.userInfo)
                if (response.status) {
                    this.$buefy.toast.open('닉네임이 변경되었습니다.')
                } else {
                    this.manageErrorResponse(response)
                }
            } else {
                const message = '닉네임을 다시 확인해주세요.'
                this.alertValidationWarning(message)
            }
        },
        async submitPassword () {
            const isValid = await this.$refs.observerPassword.validate()
            if (isValid) {
                const response = await this.$store.dispatch('changePassword', this.userInfo)
                if (response.status) {
                    this.userInfo.password = null
                    this.userInfo.password_confirm = null
                    this.$buefy.toast.open('비밀번호가 변경되었습니다.')
                } else {
                    this.manageErrorResponse(response)
                }
            } else {
                const message = '비밀번호를 다시 확인해주세요.'
                this.alertValidationWarning(message)
            }
        },
        logout () {
            this.$store.commit('LOG_OUT')
            this.$router.push('/')
        },
        alertValidationWarning (inputMessage) {
            this.$buefy.dialog.alert({
                title: '엇!',
                message: inputMessage,
                type: 'is-danger',
            })
        },
        manageErrorResponse (response) {
            // if (response.data.response.status === 422) {
            //     if ('email' in response.data.response.data) {
            //         if (response.data.response.data.email[0] === 'The email has already been taken.') {
            //             this.alertValidationWarning('이미 사용중인 이메일입니다.')
            //             this.userInfo.email = ''
            //             return
            //         }
            //     }
            //     if ('name' in response.data.response.data) {
            //         if (response.data.response.data.name[0] === 'The name has already been taken.') {
            //             this.alertValidationWarning('이미 사용중인 별명입니다.')
            //             this.userInfo.name = ''
            //             return
            //         }
            //     }
            // }
        },
    },
    mounted () {
        this.userInfo.name = this.user.name
    },
}
</script>

<style scoped>
.part {
    margin-bottom: 30px;
}
</style>
