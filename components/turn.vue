<template>
	<div>
		<h1>Turn.vue</h1>
		<button @click="() => btnA()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded">
			{{ endA }}
		</button>
		<button @click="() => btnB()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded">
			{{ endB }}
		</button>
		turn:{{ turn }}
		<br/>
		-----------------------------------
	</div>
</template>
<script setup lang="ts">
//ホストをA、ゲストをBと仮称する
</script>