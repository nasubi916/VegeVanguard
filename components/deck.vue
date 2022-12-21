<template>
    <div>
        <h1>Deck.vue</h1>
        VegeVanguard!!<br>
        オブジェクト配列による山札の作成:{{ allDeck }}<br>
        見やすい山札:
        <div v-for="card in allDeck">
            <ul>
                <li>
                    name:{{ card.name }} {{ 'atk:' + card.atk }} {{ 'def:' + card.def }} 満腹度: {{ card.hungry }} 腐り値:{{ card.bad }}
                </li>
            </ul>
        </div>
        ----------------------------------------------------------------------------
    </div>
</template>
<script setup lang="ts">
</script>