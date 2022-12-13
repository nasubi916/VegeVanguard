<template>
    <div>
        <button @click="() => useDraw()">one draw</button>
        <button @click="() => useSet()">card set</button>
        {{ hand }}
    </div>
</template>