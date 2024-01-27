<template>
	<view :style="listType === 'one' ? 'width: 700rpx;' : 'width: 340rpx;'" :class="bodyClass" class="scroll-row-item" hover-class="bg-light" :hover-stay-time="150" @click="openDetail">
		<view :style="listType === 'one' ? 'width: 300rpx;height: 168rpx;margin-right:20rpx;' : 'width: 340rpx;height: 190rpx;'" class="position-relative">
			<image :src="item.cover" :style="listType === 'one' ? 'width: 300rpx;height: 168rpx;' : 'width: 340rpx;height: 190rpx;'" class="mr-2 flex-shrink bg-light" ></image>
			<view class="text-white font-sm px-1" style="position: absolute;right: 10rpx;bottom: 10rpx;background-color: rgba(0,0,0,0.4);">
				{{ item.type | formatType }}
			</view>
		</view>
		<view class="flex flex-column flex-shrink" :style="listType == 'one' ? 'width: 390rpx;' : 'width: 340rpx;'">
			<text class="font text-ellipsis">{{item.title}}</text>
			<view class="font-sm text-light-muted">
				<slot name="desc">{{ item.desc }}</slot>
			</view>
			<view class="flex flex-1 align-end">
				<slot>
					<text class="font-md text-danger line-h">{{ tag ? tag + ':' : ''}}￥{{ item.price }}</text>
					<text class="font-sm text-through line-h text-light-muted ml-1">￥{{ item.t_price }}</text>
				</slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		filters: {
			formatType(t) {
				let o = {
					media:"图文",
					audio:"音频",
					video:"视频",
					column:"专栏"
				}
				return o[t];
			}
		},
		props: {
			item:Object,
			listType:{
				type:String,
				default:"two"
			},
			tag:{
				type:String,
				default:""
			},
			listClass:{
				type:String,
				default:""
			}
		},
		computed: {
			bodyClass() {
				let c = this.listType === 'one' ? 'flex py-2 course-border':'mb-2' 
				c += ` ${this.listClass}`
				return c
			}
		},
		methods: {
			openDetail() {
				let type = this.item.type
				let url = type == 'column' ? `/pages/course/column/column`: `/pages/course/detail/detail?type=${type}`
				console.log(url);
				uni.navigateTo({
					url
				});
			}
		},
	}
</script>

<style>
	.course-border{
		border-bottom: 1rpx solid #F4F4F4;
	}
</style>
