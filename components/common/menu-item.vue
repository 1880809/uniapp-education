<template>
	<view class="flex align-center font-md p-3 border-bottom border-light-secondary" :hover-stay-time="200" hover-class="bg-light" @click="$emit('click')">
		<text class="flex-shrink" style="width: 90rpx;" :class="active ? 'text-main' : 'text-muted'">{{ (index + 1) | formatIndex }}</text>
		<text class="flex-1" style="line-height: 1.2;" :class="active ? 'text-main' : 'text-muted'"><slot></slot></text>
		<view v-if="extra || isfree" style="width: 90rpx;" class="flex justify-end flex-shrink">
			<slot name="extra">
				<text class="border font-small text-danger border-danger px-1 rounded" v-if="isfree">试读</text>
			</slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			index: {
				type: Number,
				default: 0
			},
			isfree:{
				type: Number,
				default: 0
			},
			extra:{
				type: Boolean,
				default: true
			},
			active:{
				type: Boolean,
				default: false
			}
		},
		filters: {
			formatIndex(value) {
				if(value < 10){
					return '00' + value
				}
				if(value > 10 && value < 100){
					return '0' + value
				}
				return value;
			},
		},
	}
</script>

<style>
</style>
