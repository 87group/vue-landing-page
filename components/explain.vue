<template>
    <div class="explain-png">
        <img src="/explain01.png" style="width: 231px; height: 15px;display: block;margin: auto;margin-bottom: 10px;">
        <img src="/explain02.png" style="width: 293px; height: 15px;display: block;margin: auto;">
    </div>
</template>

<style setup>
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
</style>