<template>
    <div class="explain-png">
        <img src="/explain01.png" style="width: 148px; height: 8px;display: block;margin: auto;margin-bottom: 5px;">
        <img src="/explain02.png" style="width: 188px; height: 8px;display: block;margin: auto;">
    </div>
</template>

<style setup>
.explain-png {
    position: fixed;
    /* 或者使用 position: absolute; 如果您需要它相对于某个父级元素定位 */
    left: 0;
    right: 0;
    bottom: 10px;
    margin: auto;
    text-align: center;
    /* 如果您希望内容水平居中 */
}
</style>