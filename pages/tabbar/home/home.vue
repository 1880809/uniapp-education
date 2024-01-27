<template>
	<view class="animate__animated animate__fadeInDown animate__faster overflow-hidden">
		<view class="position-fixed home-bg"></view>
		<view class="position-relative">
			<view class="p-3 flex align-center" @click="authJump('/pages/home/user-info/user-info')">
				<image :src="user ? (user.avatar || '/static/avatar.jpg') : '/static/avatar.jpg'" style="height: 120rpx;width: 120rpx;" class="bg-light rounded-circle flex-shrink"></image>
				<view class="flex flex-column pl-3 flex-1">
					<view class="font-md text-white">
						{{ !user ? '立即登录' : (user.nickname || user.username) }} 
						<text class="font-sm text-warning ml-3"
						v-if="user">
							永久会员</text>
					</view>
					<text class="font-sm text-light">
						{{ !user ? '登录解锁更多功能' : (user.desc || '暂无描述') }}
					</text>
				</view>
				<text v-if="user" class="iconfont iconset text-white p-2"></text>
			</view>
			
			<icon-card :list="icons"></icon-card>
			
		</view>
		
		<view class="pb-3 px-3">
			<view class="rounded flex">
				<uni-list>
					<uni-list-item title="我的优惠券" iconfont="icon9 text-primary" @click="navigate('home/coupon/coupon')"></uni-list-item>
					<uni-list-item title="常见问题" iconfont="iconhelp text-primary" @click="navigate('home/problem/problem')"></uni-list-item>
					<uni-list-item title="设置" iconfont="iconset text-primary" @click="navigate('home/setting/setting')"></uni-list-item>
				</uni-list>
			</view>
		</view>
	
		
	</view>
</template>

<script>
	import uniList from '@/components/uni-ui/uni-list/uni-list.vue';
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue';
	import iconCard from '@/components/common/icon-card.vue';
	import { mapState } from 'vuex';
	export default {
		components: {
			uniList,
			uniListItem,
			iconCard
		},
		computed: {
			...mapState({
				user:state=>state.user
			})
		},
		data() {
			return {
				icons:[{
					icon:"iconOrderHistory",
					name:"订单",
					path:"/pages/home/order-list/order-list",
					auth:true
				},{
					icon:"iconpinglun",
					name:"消息",
					path:"/pages/home/msg-list/msg-list",
					auth:true
				},{
					icon:"iconshoucang1",
					name:"收藏",
					path:"/pages/home/fava-list/fava-list",
					auth:true
				},{
					icon:"icone-learning-monitor",
					name:"在学",
					path:"/pages/tabbar/learn/learn",
					type:"switchTab"
				}]
			}
		},
		onNavigationBarButtonTap() {
			this.navigate('home/setting/setting')
		},
		methods: {
			
		}
	}
</script>

<style>
.home-bg{
	height: 350rpx;border-radius: 100rpx;left: -30rpx;right: -30rpx;top:-50rpx;background-color: #5CCC84;
}
</style>
