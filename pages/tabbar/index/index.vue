<template>
	<view class="animate__animated animate__fadeIn animate__faster">
		<!-- #ifndef H5 -->
		<view class="position-fixed bg-white" style="left: 0;right: 0;top: 0;z-index: 100;">
			<uni-status-bar></uni-status-bar>
		</view>
		<uni-status-bar></uni-status-bar>
		<!-- #endif -->
		<block v-for="(item,index) in data" :key="index">
			<!-- 搜索框 -->
			<view v-if="item.type == 'search'" class="mb-1"> 
				<uni-search-bar disabled @click="openSearch"/> 
			</view>
			<!-- 轮播图 -->
			<swiper v-else-if="item.type == 'swiper'" class="swiper-box" circular indicator-dots autoplay>
				<swiper-item v-for="(v, vI) in item.data" :key="vI" class="px-2" style="box-sizing: border-box;">
					<image style="width: 100%;border-radius: 15rpx;height: 300rpx;" class="bg-light shadow" :src="v.src" />
				</swiper-item>
			</swiper>
			<!-- 分类 -->
			<icon-nav v-else-if="item.type == 'icons'" :list="item.data"></icon-nav>
			<!-- 优惠券 -->
			<coupon-list v-else-if="item.type == 'coupon'" title="优惠券" :list="item.data"></coupon-list>
			<!-- 拼团 -->
			<active-list v-else-if="item.type == 'promotion'" :title="item.title" :type="item.title" :list="item.data"></active-list>
			<!-- 课程列表 -->
			<card-list v-else-if="item.type == 'list'" :title="item.title" :type="item.listType" :list="item.data" :showMore="item.showMore" :more="item.more"></card-list>
			
			<!-- 图片广告 -->
			<image-ad v-else-if="item.type == 'imageAd'" :src="item.data"></image-ad>
		</block>
		
		
	</view>
</template>

<script>
	import uniStatusBar from '@/components/uni-ui/uni-status-bar/uni-status-bar.vue';
	import uniSearchBar from '@/components/uni-ui/uni-search-bar/uni-search-bar.vue';
	import cardList from '@/components/common/card-list.vue';
	import activeList from '@/components/common/active-list.vue';
	import couponList from '@/components/common/coupon-list.vue';
	import imageAd from '@/components/common/image-ad.vue';
	import iconNav from '@/components/common/icon-nav.vue';
	
	import demo from './demo.js';
	
	export default {
		components: {
			uniSearchBar,
			cardList,
			activeList,
			couponList,
			imageAd,
			iconNav,
			uniStatusBar
		},
		data() {
			return {
				data:[],
				// icons:[{
				// 	name:"课程",
				// 	src:"/static/logo.png",
				// 	url:"/pages/list/list"
				// },{
				// 	name:"专栏",
				// 	src:"/static/logo.png"
				// },{
				// 	name:"分类",
				// 	src:"/static/logo.png"
				// },{
				// 	name:"网页",
				// 	src:"/static/logo.png",
				// 	url:"/pages/webview/webview?url=http://www.dishaxy.com"
				// }],
				// swipers: [{
				// 	url: 'http://edu-image.nosdn.127.net/96bd39ce1d334b8493bac12bb1aa4223.png?imageView&quality=100&thumbnail=1053y483',
				// },{
				// 	url: 'http://edu-image.nosdn.127.net/0447eb8e514b45d385d9ed9d6c5b6f5f.png?imageView&quality=100&thumbnail=1053y483',
				// }],
				// coupon_list:[{
				// 	price:100,
				// 	condition:"满￥200可用",
				// 	isget:false
				// },{
				// 	price:100,
				// 	condition:"满￥200可用",
				// 	isget:true
				// },{
				// 	price:100,
				// 	condition:"满￥200可用",
				// 	isget:false
				// }],
				// list1:[{
				// 	title:"uni-app实战仿微信app开发",
				// 	cover:"https://edu-image.nosdn.127.net/9b9572c6b6b14964b3e26faed9eafcb9.png",
				// 	desc:"一句话推荐",
				// 	price:100.00,
				// 	t_price:399.00
				// },{
				// 	title:"uni-app实战仿微信app开发",
				// 	cover:"https://edu-image.nosdn.127.net/9b9572c6b6b14964b3e26faed9eafcb9.png",
				// 	desc:"一句话推荐",
				// 	price:100.00,
				// 	t_price:399.00
				// }],
				// list2:[{
				// 	title:"uni-app实战仿微信app开发",
				// 	cover:"https://edu-image.nosdn.127.net/9b9572c6b6b14964b3e26faed9eafcb9.png",
				// 	desc:"一句话推荐",
				// 	price:100.00,
				// 	t_price:399.00,
				// 	buy_num:10
				// },{
				// 	title:"uni-app实战仿微信app开发",
				// 	cover:"https://edu-image.nosdn.127.net/9b9572c6b6b14964b3e26faed9eafcb9.png",
				// 	desc:"一句话推荐",
				// 	price:100.00,
				// 	t_price:399.00,
				// 	buy_num:10
				// },{
				// 	title:"uni-app实战仿微信app开发",
				// 	cover:"https://edu-image.nosdn.127.net/9b9572c6b6b14964b3e26faed9eafcb9.png",
				// 	desc:"一句话推荐",
				// 	price:100.00,
				// 	t_price:399.00,
				// 	buy_num:10
				// },{
				// 	title:"uni-app实战仿微信app开发",
				// 	cover:"https://edu-image.nosdn.127.net/9b9572c6b6b14964b3e26faed9eafcb9.png",
				// 	desc:"一句话推荐",
				// 	price:100.00,
				// 	t_price:399.00,
				// 	buy_num:10
				// }]
			}
		},
		onLoad() {
			this.data = demo
		},
		onPullDownRefresh() {
			setTimeout(()=>{
				uni.stopPullDownRefresh()
			},1000)
		},
		methods: {
			openSearch(){
				uni.navigateTo({
					url: '../../search/search',
				});
			}
		}
	}
</script>

<style>
	
</style>
