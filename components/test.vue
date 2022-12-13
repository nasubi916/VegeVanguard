<template>
    <div>
        VegeVanguard!!<br>
        オブジェクト配列による山札の作成:{{ allDeck }}<br>
        見やすい山札:
        <div v-for="card in allDeck">
            <ul>
                <li>
                    name:{{ card.name }} {{ 'atk:' + card.atk }} {{ 'def:' + card.def }} 満腹度: {{ card.hungry }}
                </li>
            </ul>
        </div>
        ----------------------------------------------------------------------------
    </div>
</template>
<script setup lang="ts">
</script>