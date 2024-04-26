<template>
    <div class="div-main">
        <Lable :label_active="2"></Lable>

        <van-row>
            <van-col span="24" class="frame-img">   
                <img src="/contact-img.png" style="width: 440px; height: 114px;">
            </van-col>
        </van-row>

        <van-row>
            <van-col span="24" class="sup">   
                <a href="mailto:support@87poker.club"><img src="/sup.png" style="width: 436px; height: 65px;"></a>
            </van-col>
        </van-row>

        <van-row>
            <van-col span="24" class="sup">
                <a href="https://twitter.com/87pokerofficial"><img src="/fac.png" style="width: 436px; height: 65px;"></a>                   
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
    if (to.path === '/contact' && isMobile) {
        router.push('/m_contact');
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
    margin-top: 22vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* 水平居中 */
}
.sup{
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* 水平居中 */
}

.explain-png {
    margin-top: 22vh;
    text-align: center;
    /* 如果您希望内容水平居中 */
}
</style>