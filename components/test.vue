<template>
	<div>
		<h1>test.vue</h1>
		{{ lists }}<br />
		{{ copyLists }}
		<button @click="() => test">test</button>
		<br />
		-------------------------------
	</div>
</template>
<script setup lang="ts">
import _ from 'lodash'
let lists = [{ 'key1': 'value1', 'key2': 'value2' }, { 'key1': 'value3', 'key2': undefined }]
let copyLists:any;
const test = () => {
	copyLists = _.cloneDeep(lists)

	console.log({ lists })
	console.log({ copyLists })
}
</script>