<template>
    <div>
        <button @click="Draw()">one draw</button>
        {{ hand }}
    </div>
</template>
<script setup lang="ts">
function Draw() {
    hand[hand.length] = {
        name: "いちご",
        special: 0,
        hungry: 0,
    };
    console.log(hand);
}
</script>