<template>
    <div>
        <h1>Hand.vue</h1>
        <button @click="() => draw()"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded">one draw</button>
        <button @click="() => set()"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded">card set</button>
        手札枚数:{{ hand.length }}
        <div v-for="(card, index) in hand">
            <button @click="change[index + 1](index + 1)"
                class="bg-blue-500 hover:bg-blue-800 font-bold py-2 px-4 m-1 rounded focus:outline-none">{{ index + 1
                }}:{{ card
}}</button>
        </div>
        
        <br />
        --------------------------------------
    </div>
</template>
<script setup lang="ts">

</script>