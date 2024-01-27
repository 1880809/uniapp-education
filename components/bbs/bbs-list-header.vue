<template>
	<view class="flex align-center position-relative">
		<!-- 加精 -->
		<view v-if="is_top" class="bbs-top text-white bg-warning">精华</view>
		
		<image :src="user.avatar" style="width: 75rpx;height: 75rpx;" class="rounded-circle bg-light"></image>
		<view class="flex flex-column ml-2 line-h">
			<text class="text-primary font-weight-bold" style="font-size: 15px;">{{ user.nickname }}</text>
			<text class="text-muted font">{{ user.sex }}</text>
		</view>
		<view class="ml-auto text-muted px-2 animate__animated" hover-class="animate__pulse text-main" :hover-stay-time="200" @click.stop="$emit('action')">
			<text class="iconfont icongengduo" style="font-size: 18px;"></text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			user:Object,
			is_top:{
				type:[Boolean,Number],
				default:0
			}
		},
	}
</script>

<style>
	.bbs-top{
		position: absolute;
		right: 100rpx;
		/* top: 0; */
		padding: 10rpx 20rpx;
		font-size: 10px;
		line-height: 1;
	}
</style>
