<template>
    <div class="sidebar" @click="toggleSidebar(false)"
         :class="{ open: sidebarOpen }">
        <div class="sidebar-inner" @click.stop="">
            <div class="flex space-around align-items-center"
                 style="height: 100px;"
                 v-if="!isAuthenticated">
                <nuxt-link class="button is-primary" to="/auth/login">
                    <strong>로그인</strong>
                </nuxt-link>
                <nuxt-link class="button is-primary" to="/auth/register">
                    <strong>가입하기</strong>
                </nuxt-link>
            </div>
            <div>
                <div v-if="isAuthenticated" style="padding: 30px 10px 10px;">
                    <nuxt-link to="/myPage" @click.native="toggleSidebar(false)"
                               style="font-size: 18px; font-weight: 600;">
                        {{ user.name }}
                    </nuxt-link>
                </div>
                <div style="display: flex; margin-bottom: 20px; padding: 0 10px;">
                    <input v-model="keyword" class="input" placeholder="검색"
                           style="border-top-right-radius: 0; border-bottom-right-radius: 0;" />
                    <button @click="search()" class="button is-primary"
                            style="border-top-left-radius: 0; border-bottom-left-radius: 0;">
                        <img src="../../../assets/images/icons/search-white.svg"
                             style="width: 25px;"
                             alt="search">
                    </button>
                </div>
            </div>
            <div>
                <div>
                    <div class="flex align-items-center"
                         style="border: 1px solid #dbdbdb; border-left: 0; border-right: 0; height: 45px; padding: 0 10px;">
                        <p class="has-text-black-ter"
                           style="font-size: 18px; font-weight: 600;">게시판 목록</p>
                    </div>
                    <div style="padding: 10px;">
                        <div v-for="(board, index) in boards" :key="index"
                             style="padding: 2px 10px;">
                            <p @click="movePage(board.name)"
                               class="has-text-primary"
                               style="margin: 1px 0; cursor: pointer;">
                                {{ board.name }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LeftColumn from '../../desktop/common/LeftColumn'
export default {
    extends: LeftColumn,
    computed: {
        sidebarOpen () {
            return this.$store.state.sidebarOpen
        },
    },
}
</script>

<style scoped>
.sidebar {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: -100%;
    transition: linear 0.2s;
    z-index: 20;
}
.sidebar-inner {
    background-color: rgba(240, 240, 240, 0.95);
    width: 70%;
    height: 100%;
}
.sidebar.open {
    left: 0;
}
</style>
