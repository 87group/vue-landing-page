<template>
    <div class="box-card">

        <div class="poker-row">
            <van-col span="24"> <img src="/87-poker.png" style="width: 138px; height: 29px; margin-left: 10px;"></van-col>
        </div>

        <van-row class="van-row-custom">
            <van-col span="12" style="color: #fff;"><a class="rotom" href="/m_index" :style="{ color: label_active == 0 ?'#1EFFB0':'#fff' }">HOME</a> </van-col>
        </van-row>

        <van-row class="van-row-custom">
            <van-col span="12" style="color: #fff;"><a class="rotom" href="/m_about_us" :style="{ color: label_active == 1 ?'#1EFFB0':'#fff' }">ABOUT US</a> </van-col>
        </van-row>
 
        <van-row class="van-row-custom">
            <van-col span="12" style="color: #fff;"><a class="rotom" href="/m_contact" :style="{ color: label_active == 2 ?'#1EFFB0':'#fff' }">CONTACT US</a></van-col>
        </van-row>
   
    </div>
</template>

<script setup>
import { ref } from 'vue';

let Props = defineProps(['label_active']);
let label_active = Props.label_active;
</script>

<style scoped>
.box-card {
    background-color: #202020;
    overflow-x: hidden;
    overflow-y: hidden; 
    /* 保证不会出现左右滚动条 */
    min-height: 100vh;
}

.van-row-custom {
    padding-top: 10px;
    padding-bottom: 5px;
    margin-left: 10px;
}
.rotom:active{
color: #00ff5e; 
}
.rotom:hover{
color: #00ff5e; 
}
.van-row {
    margin-left: 10px;
}

.mar_top {
    margin-top: 10px;
}
.poker-row{
    margin-bottom: 30px;
    padding-top: 10px;
    background-color: #000000;
    width: 120vw;
    height: 40px;
}
</style>