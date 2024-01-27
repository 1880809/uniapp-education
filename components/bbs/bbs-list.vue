<template>
	<view class="position-relative">
		<view class="p-3">
			<bbs-list-header v-if="showHeader" :user="item.user" @action="openAction" :is_top="item.is_top"></bbs-list-header>
			<view class="pb-2 pt-3" hover-class="bg-light" :hover-stay-time="200" @click.top="openDetail">
				<text v-html="item.content"></text>
				<view class="flex flex-wrap mt-2">
					<view style="width: 33%;" v-for="(img,imgI) in item.images" :key="imgI">
						<image :src="img" mode="aspectFill" class="rounded" style="width: 220rpx;height: 220rpx;"></image>
					</view>
				</view>
			</view>
			<view class="bbs-footer">
				<view @click.stop="openDetail">
					<text class="iconfont iconpinglun2"></text>
					<text class="ml-1">{{ item.comment_count || '评论' }}</text>
				</view>
				<view @click.stop="support" :class="item.is_support ? 'text-danger' : ''">
					<text class="iconfont icondianzan2"></text>
					<text class="ml-1">{{ item.support_count || '点赞' }}</text>
				</view>
				<text class="ml-auto text-light-muted">
					{{ item.created_time }}
				</text>
			</view>
		</view>
		<view class="f-divider"></view>
	</view>
</template>

<script>
	import bbsListHeader from './bbs-list-header.vue';
	export default {
		components: {
			bbsListHeader,
		},
		props: {
			item: Object,
			index:Number,
			showHeader:{
				type:Boolean,
				default:true
			}
		},
		methods: {
			openDetail() {
				uni.navigateTo({
					url: '/pages/bbs/detail/detail',
				});
			},
			openAction(){
				this.$emit('open-action',{
					item:this.item,
					index:this.index
				})
			},
			support(){
				this.$emit('support',this.item)
			}
		},
	}
</script>

<style>
	.bbs-footer{
		display: flex;
		align-items: center;
		padding: 20rpx 0;
	}
	.bbs-footer>view{
		display: flex;
		align-items: center;
		padding-right: 40rpx;
	}
	.bbs-footer view,.bbs-footer text{
		line-height: 1;
	}
	.bbs-footer>view>text:first-child{
		font-size: 20px!important;margin-bottom: -12rpx;
	}
</style>
