<template>

    <van-row>
        <van-col span="8" class="left-png"><img src="/87-poker.png" style="width: 259px; height: 55px;"></van-col>
        <van-col span="8">
            <van-tabbar v-model="label_active" :fixed="false" :safe-area-inset-bottom="false" class="div-label">
                <van-tabbar-item replace to="/"> <template #icon="props">
                    <div  class="div_lable" style="margin-left: 50px;" :style="{ 'width': props.active ? '120px' : '60px', 'height': props.active ? '45px' : '20px','background-color': props.active ? 'rgb(30, 255, 176)' : '', 'border-radius': props.active ? '100px' : 'none','color':props.active ? '#000' : '#fff' }">HOME</div>
                    </template></van-tabbar-item>

                <van-tabbar-item replace to="/about_us"> <template #icon="props">
                    <div  class="div_lable" :style="{ 'width': props.active ? '150px' : '120px', 'height': props.active ? '45px' : '20px','background-color': props.active ? 'rgb(30, 255, 176)' : '', 'border-radius': props.active ? '100px' : 'none','color':props.active ? '#000' : '#fff' }">ABOUT US</div>

                    </template></van-tabbar-item>

                <van-tabbar-item replace to="/contact"> <template #icon="props">
                    <div  class="div_lable" :style="{ 'width': props.active ? '180px' : '140px', 'height': props.active ? '45px' : '20px','background-color': props.active ? 'rgb(30, 255, 176)' : '', 'border-radius': props.active ? '100px' : 'none','color':props.active ? '#000' : '#fff' }">CONTACT US</div>

                    </template></van-tabbar-item>
            </van-tabbar>
        </van-col>
        <van-col span="8"></van-col>
    </van-row>

</template>
<script setup>
import { ref } from 'vue';

let Props_lab = defineProps(['label_active']);
let label_active = Props_lab.label_active;

const index = {
    active: '/home-a.png',
    inactive: '/home.png',
};
const about_us = {
    active: '/about-a.png',
    inactive: '/about.png',
};

const contact = {
    active: '/contact-a.png',
    inactive: '/contact.png',
};

</script>

<style scoped>
[class*=van-hairline]:after {
    position: static;
}

.van-tabbar-item--active {
    background: rgba(2, 30, 143, 0) !important;
    /* 设置为透明 */
}

.van-hairline--top-bottom {
    overflow: hidden;
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
.div_lable{
    display: flex;
    align-items: center;/* 垂直居中 */
    justify-content: center; /* 水平居中 */ 
}

.div-label {
    height: 100px;
    margin-top: 30px;
    background: rgba(2, 30, 143, 0) !important;
    /* 设置为透明 */
}

.van-hairline--top-bottom {
    border: none !important;
}

.van-tabbar-item--active {
    color: #000;
}
</style>