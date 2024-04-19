<template>
    <div class="div-main">

        <lable :label_active="0"></lable>

        <van-row>
            <van-col span="6"></van-col>
            <van-col span="12" class="content-content">
                <img src="/content.png" style="width: 650px; height: 570px;">
            </van-col>
            <van-col span="6"></van-col>
        </van-row>

        <van-row>
            <van-col span="6"></van-col>
            <van-col span="12" class="content-png">
                <a href="/">
                    <img src="/google.png" style="width: 216px; height: 64px;"></a>
                <div style="width: 20px;"></div>
                <a href="/">
                    <img src="/appstore.png" style="width: 216px; height: 64px;"></a>
                <div style="width: 20px;"></div>
                <a href="/">
                    <img src="/Android.png" style="width: 216px; height: 64px;"></a>
                <div style="width: 20px;"></div>
                <a :href="'/?' + queryParams">
                    <img src="/windows.png" style="width: 216px; height: 64px;"></a>
            </van-col>
            <van-col span="6"></van-col>
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
    if (to.path === '/' && isMobile) {
        router.push('/m_index');
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




// 获取当前页面的 URL
const queryParams = route.query;
console.log(queryParams);

</script>

<style scoped>
.div-main {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    background-image: url('/image-main.png');
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

.content-png {
    display: flex;
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */
    margin-top: 10px;
    height: 80px;
}

.explain-png {
    position: fixed;
    /* 或者使用 position: absolute; 如果您需要它相对于某个父级元素定位 */
    left: 0;
    right: 0;
    bottom: 40px;
    margin: auto;
    text-align: center;
    /* 如果您希望内容水平居中 */
}

.content-content {
    display: flex;
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */
}
</style>