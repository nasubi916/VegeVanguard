<template>
	<div>
		<h1>test.vue</h1>
		{{ check }}
		<button @click="changelist[2]">1</button>
		<br/>
		-------------------------------
	</div>
</template>
<script setup lang="ts">
const check=ref(0);

const changelist={
	"1":function(){func1();},
	"2":function(){check.value=2;},
	"3":function(){check.value=3;},
}

function func1(){
	check.value=1;
}
</script>