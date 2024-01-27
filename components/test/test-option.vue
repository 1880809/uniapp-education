<template>
	<view class="border rounded px-3 py-2 mb-2 flex align-start" :class="checked ? 'border-main text-main' : ''" @click="handleClick">
		<text v-if="showIndex" class="mr-2" style="font-size: 14px;"><slot></slot></text>
		<view class="flex-1">
			<mp-html :content="label" lazy-load></mp-html>
		</view>
	</view>
</template>

<script>
	import mpHtml from '@/components/common/mp-html/mp-html';
	export default {
		components: {
			mpHtml
		},
		props: {
			checked:{
				type: Boolean,
				default: true
			},
			showIndex:{
				type: Boolean,
				default: true
			},
			label:{
				type: String,
				default: ''
			},
			value: [Number,String],
		},
		methods: {
			handleClick(){
				this.$emit('click')
			}
		},
	}
</script>

<style>
</style>
