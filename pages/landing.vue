<template>
    <div class="div-main">


        <van-row>
            <van-col span="24" style="margin-top: 0vh;    display: flex;align-items: center;justify-content: center;">
                <div class="bordered" v-show="param.clubId !== undefined">
                    <strong style="color: white;">CLUB ID:</strong>
                    <strong class="club_id">{{ param.clubId }}</strong>
                </div>
                <div v-show="param.clubId === undefined" style="height: 28px;"></div>

            </van-col>
        </van-row>

        <van-row>
            <van-col span="6"></van-col>
            <van-col span="12" class="content-content">
                <img src="/m-img/content-m.png" style="width: 100vw;">
            </van-col>
            <van-col span="6"></van-col>
        </van-row>

        <van-row>
            <van-col span="24" class="content-png">
                <van-button class="button_dow" :url="url_get()">
                    <div style="display: flex; align-items: center;"><img src="/title.png" style="height: 30px;"><strong
                            style="font-size: 20px; color: white; margin-left: 10px;">Download</strong> </div>
                </van-button>

                <!-- <a :href="'https://goto-87poker.onelink.me/KMFX/67s7sb1w' + url_get()">
                    <img src="/appstore.png" style="width: 153px; height: 51px;"></a>
                <div style="width: 10px;"></div> -->
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

    </div>


</template>
<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const show = ref(false);
var client = false;
let get_val = '';
let param = {};

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
    const client = /iPhone|iPad|iPod|Mac/i.test(userAgent);

    // 获取原页面的GET参数
    const queryParams = to.query;
    if (to.path == '/landing' && !isMobile) {
        // 构建带有GET参数的新路径
        const newPath = {
            path: '/c_landing',
            query: queryParams // 将原页面的GET参数添加到新路径
        };
        router.push(newPath);
    } else {
        next();
    }
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
if (queryParams.param != undefined) {
    param = JSON.parse(atob(queryParams.param));
};
function url_get() {
    get_val = 'https://goto-87poker.onelink.me/KMFX/67s7sb1w';
    if (queryParams.param != undefined) {
        get_val += '?deep_link_value=' + queryParams.type + '&deep_link_sub2=' + queryParams.param;
    }
    return get_val;
}

</script>

<style scoped>
.div-main {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    background-image: url('/m-img/main-m.jpg');
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
    margin-top: 5vh;
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
  position: absolute;
  top: 93vh;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  font-size: 12px;
}

.button_dow {
    background-color: rgb(12, 12, 12);
    border-radius: 10px;
    width: 165px;
    height: 51px;
    display: flex;
    align-items: center;
}

.bordered {
    border: 2px solid rgb(218, 218, 218);
    /* 边框为2px宽，黑色实线 */
    border-radius: 10px;
    /* 边框圆角半径为10px */
    padding: 10px 0px 10px 10px;
    /* 可选：为了让内容远离边框，添加一些填充 */
    width: 255px;
    background-image: url('/club.png');
    object-fit: cover;
    background-size: 100% 100%;
    font-size: 29px;
}

.club_id {
    color: rgb(30, 255, 176);
    background-color: black;
    padding: 7px;
    border-radius: 7px;
    /* 边框圆角半径为10px */
    margin-left: 10px;
}
</style>