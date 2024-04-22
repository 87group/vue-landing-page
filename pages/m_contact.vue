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
                    <van-image class="menu-image"  src="/m-img/menu.png" style="width: 20px; height: 20px;"/>
                </van-cell>
                <van-popup v-model:show="show" closeable position="right" :style="{ width: '100%', height: '100%' }">
                    <menu-head @updateSportData="handleUpdateSportData" :label_active="2"></menu-head>
                </van-popup>
            </van-col>
        </van-row>
    </van-sticky>

        <van-row>
            <van-col span="6"></van-col>
            <van-col span="12" class="content-content">
                <img src="/m-img/contact-img.png" style="width: 341px; height: 63px;">
            </van-col>
            <van-col span="6"></van-col>
        </van-row>

        <van-row>
            <van-col span="6"></van-col>
            <van-col span="12" class="sup">
                <a href="mailto:support@87poker.club"><img src="/sup.png" style="width: 340px; height: 52px;"></a>               
            </van-col>
            <van-col span="6"></van-col>
        </van-row>

        <van-row>
            <van-col span="6"></van-col>
            <van-col span="12" class="sup">
                <a href="https://www.facebook.com/Poker-Hub-102390622281272/"><img src="/fac.png" style="width: 340px; height: 52px;"></a>               
            </van-col>
            <van-col span="6"></van-col>
        </van-row>

        <explain> </explain>

    </div>


</template>
<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const show = ref(false);

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
    if (to.path === '/m_contact' && !isMobile) {
        router.push('/contact');
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
    object-fit: cover;
    background-image: url('/m-img/main-empty-m.png');
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
.content-content{
    display: flex;
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */
    margin-top: 25vh;
}
.poker-png{
    display: flex;
    align-items: center;
    /* 垂直居中 */
    justify-content: flex-start;
}

.van-cell {
    position: static;
}
.sup{
    display: flex;
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */
    margin-top: 3vh;
}

.explain-png {
position: absolute;
  top: 95vh;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  font-size: 12px;
}

</style>