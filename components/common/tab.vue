<template>
	<view class="flex tab-bottom">
		<view class="tab-item" v-for="(tab,tabI) in tabs"
		:key="tabI" :class="tabI == current ? 'tab-item-active' : ''" @click="$emit('change',tabI)">
			<text class="font-md">{{ tab.name }}</text>
			<view v-if="current == tabI" class="tab-line animate__animated animate__faster" :class="current == tabI ? 'animate__fadeIn' : ''"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			current: {
				type: Number,
				default: 0
			},
			tabs:Array
		},
	}
</script>

<style>
</style>
