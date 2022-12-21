<template>
	<div>
		<h1>test.vue</h1>
		{{ }}
		<button @click="test">test</button>
		<br />
		-------------------------------
	</div>
</template>
<script setup lang="ts">
function test() {
	const handCopy = [...hand, allDeck[Math.floor(Math.random() * allDeck.length)]]
	console.log(...handCopy);
}
</script>