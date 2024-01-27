<template>
	<view class="l-page" style="overflow-x: hidden;">
		<tab :current="tabIndex" :tabs="tabBars" @change="clickTab"></tab>
		<swiper class="flex-1 flex flex-column" :current="tabIndex" @change="swiperChange($event.detail.current)" :duration="200">
			<swiper-item class="flex" v-for="(tab,tabI) in tabBars" :key="tabI">
				<scroll-view scroll-y="true" class="flex-1" scroll-with-animation @scrolltolower="handleLoadMore(tab)">
					<view class="pb-1" v-for="(item,index) in newlist[tabI].list" :key="index">
						<course-list listType="one" :item="item" listClass="px-2"></course-list>
					</view>

					<uni-load-more :status="tab.loadStatus" :fontSize="12" :iconSize="15"></uni-load-more>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import tab from '@/components/common/tab.vue';
	import courseList from '@/components/common/course-list.vue';
	import uniLoadMore from '@/components/uni-ui/uni-load-more/uni-load-more.vue';
	export default {
		components: {
			courseList,
			uniLoadMore,
			tab
		},
		data() {
			return {
				tabBars: [{
					name: "课程",
					loadStatus: "more"
				}, {
					name: "专栏",
					loadStatus: "noMore"
				}],
				tabIndex: 0,
				newlist: [{
					list: [{
						cover: "https://edu-image.nosdn.127.net/561821cf12524f69bde0c6e9d3f3b030.png?imageView&quality=100&crop=0_0_900_499&thumbnail=223y124",
						title: "uni-app实战视频点播app小程序",
						desc: "一句话推荐",
						price: 100,
						t_price: 299
					}, {
						cover: "https://edu-image.nosdn.127.net/9d416f92eb9f4b0f99673914671a6805.png?imageView&quality=100&crop=0_0_900_499&thumbnail=223y124",
						title: "uni-app多端企业网盘全栈开发",
						desc: "一句话推荐",
						price: 100,
						t_price: 299
					}, {
						cover: "https://edu-image.nosdn.127.net/9769ffd1157747c9b0f668276cf559cc.png?imageView&quality=100&crop=0_0_1280_719&thumbnail=223y124",
						title: "VueCli 实战商城后台管理系统",
						desc: "一句话推荐",
						price: 100,
						t_price: 299
					}, {
						cover: "https://edu-image.nosdn.127.net/b4d2d9f9e6fe41d696133254133178d9.png?imageView&quality=100&crop=0_0_900_499&thumbnail=223y124",
						title: "uni-app实战商城类app和小程序",
						desc: "一句话推荐",
						price: 100,
						t_price: 299
					}]
				}, {
					list: [{
						cover: "https://edu-image.nosdn.127.net/561821cf12524f69bde0c6e9d3f3b030.png?imageView&quality=100&crop=0_0_900_499&thumbnail=223y124",
						title: "uni-app实战视频点播app小程序",
						desc: "一句话推荐",
						price: 100,
						t_price: 299
					}, {
						cover: "https://edu-image.nosdn.127.net/9d416f92eb9f4b0f99673914671a6805.png?imageView&quality=100&crop=0_0_900_499&thumbnail=223y124",
						title: "uni-app多端企业网盘全栈开发",
						desc: "一句话推荐",
						price: 100,
						t_price: 299
					}, {
						cover: "https://edu-image.nosdn.127.net/9769ffd1157747c9b0f668276cf559cc.png?imageView&quality=100&crop=0_0_1280_719&thumbnail=223y124",
						title: "VueCli 实战商城后台管理系统",
						desc: "一句话推荐",
						price: 100,
						t_price: 299
					}, {
						cover: "https://edu-image.nosdn.127.net/b4d2d9f9e6fe41d696133254133178d9.png?imageView&quality=100&crop=0_0_900_499&thumbnail=223y124",
						title: "uni-app实战商城类app和小程序",
						desc: "一句话推荐",
						price: 100,
						t_price: 299
					}]
				}],
			}
		},
		onNavigationBarSearchInputClicked() {
			uni.navigateBack({
				delta: 1
			});
		},
		methods: {
			swiperChange(tabI) {
				this.tabIndex = tabI
			},
			clickTab(tabI) {
				this.swiperChange(tabI)
			},
			handleLoadMore(tab) {
				let index = this.tabIndex
				if (tab.loadStatus == 'noMore') {
					return
				}
				tab.loadStatus = 'loading'
				setTimeout(() => {
					this.newlist[index].list.push({
						cover: "https://edu-image.nosdn.127.net/561821cf12524f69bde0c6e9d3f3b030.png?imageView&quality=100&crop=0_0_900_499&thumbnail=223y124",
						title: "uni-app实战视频点播app小程序",
						progress: 80
					})
					tab.loadStatus = 'more'
				}, 200)
			}
		}
	}
</script>

<style>
	.l-page {
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
</style>
