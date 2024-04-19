<template>
    <div class="div-main">
        <lable :label_active="1"></lable>

        <van-row style="height: 680px; display: flex; align-items: flex-end; justify-content: center;">
            <van-col span="12" class="frame-img">
                <img src="/frame.png" style="width: 663px; height: 560px;padding-left: 15vw;">
            </van-col>
            <van-col span="12" class="frame-img">   
                <img src="/star.png" style="width: 544px; height: 467px;padding-right: 15vw;">
            </van-col>
        </van-row>

        <explain></explain>

    </div>


</template>
<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

function handleRoute(to, from, next) {
    const userAgent = window.navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    if (to.path === '/about_us' && isMobile) {
        router.push('/m_about_us');
    } else {
        next();
    };
}

function initializeRouteHandling() {
    if (typeof window !== 'undefined' && window.navigator) {
        handleRoute(router.currentRoute.value, router.currentRoute, () => { });
        router.beforeEach(handleRoute);
    }
}
initializeRouteHandling();

</script>

<style scoped>
.div-main {
    width: 100vw;
    height: 100vh;

    background-image: url('/main-empty.png');
    background-size: 100% 100%;
    /* 让背景图片拉伸以填满整个容器 */
    background-repeat: no-repeat;
    /* 禁止背景图片重复 */
    background-position: center;
    /* 将背景图片居中显示 */
    overflow-x: hidden;
    overflow-y: hidden; 
    /* 保证不会出现左右滚动条 */
}

.body {
    background-color: black !important;
}

.left-png {
    display: flex;
    align-items: center;
    /* 垂直居中 */
    /* 水平居中 */
    margin-top: 30px;
    height: 100px;
    padding-left: 50px;
}

.frame-img {
    display: flex;
    justify-content: center;
    /* 水平居中 */
}

.content {
    display: inline-block;
    /* 使内容成为行内块元素 */
    vertical-align: bottom;
    /* 将内容垂直对齐到底部 */
}
</style>