<template>
	<view style="width: 700rpx;" class="scroll-row-item flex py-2 course-border px-3" hover-class="bg-light" :hover-stay-time="150" @click="$emit('click')">
		<image :src="item.cover" style="width: 185rpx;height: 235rpx;" class="mr-3 flex-shrink bg-light rounded" ></image>
		<view class="flex flex-column flex-shrink" style="width: 480rpx;">
			<text class="font-md text-ellipsis">{{item.title}}</text>
			<view class="font-sm text-light-muted">
				<slot name="desc">{{ item.desc }}</slot>
			</view>
			<view class="flex flex-1 align-end justify-between">
				<view class="flex flex-1 align-end" v-if="showPrice">
					<text class="font-lg text-danger line-h">￥{{ item.price }}</text>
					<text class="font-sm text-through line-h text-light-muted ml-1">￥{{ item.t_price }}</text>
				</view>
				<view class="border px-2 rounded-circle text-muted flex align-center font-sm">
					<slot>1348 人订阅 </slot>
					<text class="iconfont iconxiayibu ml-1"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item:Object,
			showPrice:{
				type:Boolean,
				default:true
			}
		},
		computed: {
			
		},
	}
</script>

<style>
	.course-border{
		border-bottom: 1rpx solid #F4F4F4;
	}
</style>
