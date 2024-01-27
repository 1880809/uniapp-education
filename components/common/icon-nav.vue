<template>
	<view class="flex flex-wrap py-2">
		<view v-for="(item,index) in list" :key="index" style="width: 25%;" class="flex flex-column align-center justify-center py-1" hover-class="bg-light" :hover-stay-time="150" @click="open(item)">
			<image :src="item.src" class="bg-light" style="width: 70rpx;height: 70rpx;border-radius: 100%;"></image>
			<text class="font-sm text-muted mt-1">{{item.name}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default: (val)=>{
					return val || []
				}
			},
		},
		methods: {
			open(item) {
				this.$util.open(item)
			}
		},
	}
</script>

<style>
</style>
