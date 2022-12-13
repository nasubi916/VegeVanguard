<template>
    <div>
        VegeVanguard!!<br>
        composablesテスト:{{ hello }}<br>
        オブジェクト配列による山札の作成:{{ cardList }}<br>
        見やすくする:
        <div v-for="card in cardList">
            <ul>
                <li>
                    name:{{ card.name }} {{ 'atk:' + card.atk }} {{ 'def:' + card.def }} 満腹度: {{ card.hungry }}
                </li>
            </ul>
        </div>

        default:{{ a }}<br />
        named:{{ aa }},{{ aaa }}<br />
        ----------------------------------------------------------------------------
    </div>
</template>
<script setup lang="ts">
const hello = useTest();
const cardList = useDeck();
// console.log(cardList[0]);

const a = useDefault("suzuki");
//useNamed.tsに書いた２つの関数
const aa = Hello("ando");
const aaa = Night("isowai");
</script>