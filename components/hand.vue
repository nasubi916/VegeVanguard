<template>
    <div>
        <button @click="useSet">set hand</button>
    </div>
    <div v-for="card in hand">
        <ul>
            <li>
                name:{{ card.name }} {{ 'atk:' + card.atk }} {{ 'def:' + card.def }} 満腹度: {{ card.hungry }}
            </li>
        </ul>
    </div>

</template>
<script setup lang="ts">
const hand =
</script>