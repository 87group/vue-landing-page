<template>
    <div class="div-main">

        <Lable :label_active="0"></Lable>

        <van-row>
            <van-col span="6"></van-col>
            <van-col span="12" class="content-content">
                <img src="/content.png" style="aspect-ratio: 65/57; height: 60vh;">
            </van-col>
            <van-col span="6"></van-col>
        </van-row>

        
        <van-row>
            <van-col span="6"></van-col>
            <van-col span="12" class="content-png">
                <!-- <a href="/">
                    <img src="/google.png" style="width: 216px; height: 64px;"></a>
                <div style="width: 20px;"></div> -->
                <a :href="'https://apps.apple.com/us/app/87-poker/id6479741317' + url_get()">
                    <img src="/appstore.png" style="width: 216px; height: 64px;"></a>
                <div style="width: 20px;"></div>
                <a :href="'https://d2lx1qu2ovib6u.cloudfront.net/release/app/client/release/android/87poker-publish-release.apk' + url_get()">
                    <img src="/Android.png" style="width: 216px; height: 64px;"></a>
                <!-- <div style="width: 20px;"></div>
                <a :href="'https://goto-87poker.onelink.me/KMFX/67s7sb1w' + url_get()">
                    <img src="/windows.png" style="width: 216px; height: 64px;"></a> -->
            </van-col>
            <van-col span="6"></van-col>
        </van-row>

        <explain></explain>

        <div v-if="loading_is">
                <loading></loading>
            </div>

    </div>


</template>
<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const route = useRoute();
let get_val = '';
let loading_is = ref(true);

function handleRoute(to, from, next) {
    const userAgent = window.navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    setTimeout(function() {
    loading_is = false;
}, 1000); // 1000毫秒 = 1秒
    if (to.path === '/c_index' && isMobile) {
        router.push('/');
        loading_is = false;
    } else {
        next();
        loading_is = false;
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
function url_get()
{
    if(queryParams.deep_link_value != undefined)
    {
        get_val = '?deep_link_value=' + queryParams.deep_link_value + '&deep_link_sub2=' + queryParams.deep_link_sub2;
    }
    return get_val;
}

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
    /* overflow-y: hidden;  */
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

.content-content {
    display: flex;
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */
}

.explain-png {
    margin-top: 80px;
    text-align: center;
    /* 如果您希望内容水平居中 */
}
</style>