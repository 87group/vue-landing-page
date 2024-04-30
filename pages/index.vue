<template>
    <div class="div-main">

        <van-sticky>
            <van-row style="background-color: #000000 !important; width: 100% !important; height: 50px;">
                <van-col :span="14" class="poker-png">
                    <img src="/87-poker.png" style="width: 138px; height: 29px; margin-left: 10px;">
                </van-col>

                <van-col :span="5">

                </van-col>

                <van-col :span="5" style="height: 50px;">
                    <van-cell @click="showPopup" style="background-color: #000000 !important; ">
                        <div style="float: right;">
                            <div class="div_line"></div>
                            <div class="div_line"></div>
                            <div class="div_line"></div>
                        </div>
                    </van-cell>
                    <van-popup v-model:show="show" closeable position="right"
                        :style="{ width: '100%', height: '100%' }">
                        <menu-head @updateSportData="handleUpdateSportData" :label_active="0"></menu-head>
                    </van-popup>
                </van-col>
            </van-row>
        </van-sticky>
        <div style="transform: rotate(-90deg);">        <div class="character">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
</div></div>


        <van-row>
            <van-col span="6"></van-col>
            <van-col span="12" class="content-content">
                <img src="/content.png" style="width: 100vw;">
            </van-col>
            <van-col span="6"></van-col>
        </van-row>

        <van-row>
            <van-col span="24" class="content-png">
                <a :href="'https://apps.apple.com/us/app/87-poker/id6479741317' + url_get()">
                    <img src="/appstore.png" style="width: 153px; height: 51px;"></a>
                <div style="width: 10px;"></div>
                <a :href="'https://d2lx1qu2ovib6u.cloudfront.net/release/app/client/release/android/87poker-publish-release.apk' + url_get()">
                    <img src="/Android.png" style="width: 140px; height: 51px;"></a>
            </van-col>
        </van-row>

        <!-- <van-row>
            <van-col span="24" class="content-png">
                <img src="/windows.png" style="width: 153px; height: 51px;">
                <div style="width: 10px;"></div>
                <img src="/google.png" style="width: 172px; height: 51px;">
            </van-col>
        </van-row> -->

        <explain></explain>
        <div v-if="loading_is">
                <loading></loading>
        </div>
    </div>


</template>
<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const show = ref(false);
let get_val = '';
let loading_is = ref(true);

function showPopup() {
    show.value = true;
};

//关闭遮罩层
function handleUpdateSportData(newData) {
    show.value = false;
}

function handleRoute(to, from, next) {
    const userAgent = window.navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    
    setTimeout(function() {
    loading_is = false;
}, 1000); // 1000毫秒 = 1秒
    if (to.path === '/' && !isMobile) {
        router.push('/c_index');
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
    background-image: url('/m-img/main-m.png');
    background-size: 100% 100%;
    /* 让背景图片拉伸以填满整个容器 */
    background-repeat: no-repeat;
    /* 禁止背景图片重复 */
    background-position: center;
    /* 将背景图片居中显示 */
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
}

.content-content {
    display: flex;
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */
    margin-top: 10vh;
    margin-bottom: 20px;
}

.poker-png {
    display: flex;
    align-items: center;
    /* 垂直居中 */
    justify-content: flex-start;
}

.van-cell {
    position: static;
}

.explain-png {
  /* position: absolute;
  top: 95vh;
  left: 50%;
  transform: translateX(-50%);
  width: 100%; */
  font-size: 12px;
}

/* //// */
.div_line{
    height: 3px;
    width: 25px;
    margin-top: 6px;
    background-color: rgb(255, 255, 255);
}
</style>