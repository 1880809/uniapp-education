<template>
	<view class="p-3">
		<view class="flex shadow bg-white" style="border-radius: 10rpx;">
			<view v-for="(item,index) in list" :key="index" class="flex-1 flex flex-column align-center justify-center py-3" style="line-height: 1.4;color: #40474E;" :hover-stay-time="150" hover-class="bg-light" @click="open(item.path,item.type,item.auth)">
				<text class="iconfont font-weight-bold text-warning" style="font-size: 20px;" :class="item.icon"></text>
				<text class="font-sm">{{ item.name }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: Array,
		},
		methods: {
			open(path,type,auth = false) {
				if(!path) return
				if(type == 'switchTab'){
					return uni.switchTab({
						url:path
					})
				}
				if(auth){
					return this.authJump(path)
				}
				uni.navigateTo({
					url: path
				});
			}
		},
	}
</script>

<style>
</style>
