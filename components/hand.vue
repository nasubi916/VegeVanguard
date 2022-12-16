<template>
    <div>
        <h1>Hand.vue</h1>
        <button @click="() => useDraw()"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded">one draw</button>
        <button @click="() => useSet()"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded">card set</button>
        手札枚数:{{ hand.length }}
        <div v-for="(card, index) in hand">
            <button @click="change" :class="{ 'text-red-600': isChoose }"
                class="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 m-1 rounded">{{ index + 1 }}:{{ card
                }}</button>
        </div>
        <br/>
        --------------------------------------
    </div>
</template>
<script setup lang="ts">
//内部的な配列はuseHandでいいが、表示時にはソートしたい
</script>