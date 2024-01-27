<template>
	<view class="p-2">
		<scroll-view scroll-x="true" class="scroll-row" show-scrollbar>
			<view class="mr-4 align-stretch" style="display: inline-flex;" v-for="(item,index) in list" :key="index">
				<view class="flex flex-column text-white align-center justify-center px-3 py-2" style="border-right: 4rpx dashed;" :class="item.isget ? 'bg-hover-light' : 'bg-hover-warning'">
					<text class="font-lg" style="line-height: 1.2;">￥{{ item.price }}</text>
					<text class="font-sm">{{ item.condition }}</text>
				</view>
				<view hover-class="bg-hover-warning" :class="item.isget ? 'bg-light text-muted' : 'bg-warning text-white'" class="flex align-center justify-center px-3">{{ item.isget ? '已领取' : '领取' }}</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: "标题"
			},
			list:{
				type: Array,
				default:(val)=>{
					return val || []
				}
			}
		},
	}
</script>

<style>
</style>
