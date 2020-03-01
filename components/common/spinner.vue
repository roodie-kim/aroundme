<template>
    <div style="display: block">
        <div class="lds-facebook"><div></div><div></div><div></div></div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.lds-facebook {
    display: inline-block;
    position: relative;
    width: 60px;
    height: 60px;
}
.lds-facebook div {
    display: inline-block;
    position: absolute;
    left: 6px;
    width: 12px;
    background: #283593;
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
    left: 6px;
    animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
    left: 24px;
    animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
    left: 42px;
    animation-delay: 0s;
}
@keyframes lds-facebook {
    0% {
        top: 8px;
        height: 40px;
    }
    50%, 100% {
        top: 24px;
        height: 18px;
    }
}
</style>
