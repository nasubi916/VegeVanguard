<template>
	<div>
		<h1>Status.vue</h1>
		{{ status }}
		<button @click="() => damage()"
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded">damege</button>
		<button @click="() => eat()"
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded">eat</button>
		<br />
		---------------------------------------------------------
	</div>
</template>
<script setup lang="ts">

</script>