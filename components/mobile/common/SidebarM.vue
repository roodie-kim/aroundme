<template>
    <div class="sidebar"
         :class="{ open: sidebarOpen }">
        <div class="flex flex-center align-items-center"
             style="height: 100px;"
             v-if="!isAuthenticated">
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
            <div class="flex align-items-center"
                 style="border: 1px solid #dbdbdb; border-left: 0;
                  border-right: 0; height: 45px; padding: 0 10px;">
                <p class="has-text-black-ter"
                   style="font-size: 18px; font-weight: 600;">트렌딩 해시태그</p>
            </div>
            <div>
                <div v-for="(tag, index) in tags" :key="index">
                    <nuxt-link @click.native="toggleSidebar(false)"
                               :to="{ name: 'index', query: { tags: tag.name } }"
                               class="has-text-warm-red"
                               style="margin: 1px 0; cursor: pointer; padding: 0 20px;">
                        #{{ tag.name }}
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RightColumn from '../../desktop/common/RightColumn'
export default {
    extends: RightColumn,
    computed: {
        sidebarOpen () {
            return this.$store.state.sidebarOpen
        },
    },
}
</script>

<style scoped>
.sidebar {
    background-color: rgba(240, 240, 240, 0.95);
    height: calc(100% - 50px);
    width: 70%;
    position: fixed;
    top: 50px;
    left: -70%;
    transition: linear 0.2s;
    z-index: 10;
}
.sidebar.open {
    left: 0;
}
</style>
