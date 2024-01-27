<template>
	<view>
		<template v-if="page_title == '课程' || page_title == '专栏'">
		<view class="pb-1" v-for="(item,index) in list" :key="index">
			<course-list listType="one" :item="item" listClass="px-2"></course-list>
		</view>
		</template>
		<template v-else-if="page_title == '拼团' || page_title == '秒杀'">
			<view class="pl-3">
				<course-list v-for="(item,index) in list" :key="index" :item="item" listType="two" listClass="mr-2"><template slot="desc">{{ item.buy_num }}人已抢</template></course-list>
			</view>
		</template>
		<uni-load-more :status="loadStatus" :fontSize="12" :iconSize="15"></uni-load-more>
	</view>
</template>

<script>
	import courseList from '@/components/common/course-list.vue';
	import uniLoadMore from '@/components/uni-ui/uni-load-more/uni-load-more.vue';
	
	let demoCourseList = [{
		cover:"https://edu-image.nosdn.127.net/561821cf12524f69bde0c6e9d3f3b030.png?imageView&quality=100&crop=0_0_900_499&thumbnail=223y124",
		title:"uni-app实战视频点播app小程序",
		desc:"一句话推荐",
		price:100,
		t_price:299
	},{
		cover:"https://edu-image.nosdn.127.net/9d416f92eb9f4b0f99673914671a6805.png?imageView&quality=100&crop=0_0_900_499&thumbnail=223y124",
		title:"uni-app多端企业网盘全栈开发",
		desc:"一句话推荐",
		price:100,
		t_price:299
	},{
		cover:"https://edu-image.nosdn.127.net/9769ffd1157747c9b0f668276cf559cc.png?imageView&quality=100&crop=0_0_1280_719&thumbnail=223y124",
		title:"VueCli 实战商城后台管理系统",
		desc:"一句话推荐",
		price:100,
		t_price:299
	},{
		cover:"https://edu-image.nosdn.127.net/b4d2d9f9e6fe41d696133254133178d9.png?imageView&quality=100&crop=0_0_900_499&thumbnail=223y124",
		title:"uni-app实战商城类app和小程序",
		desc:"一句话推荐",
		price:100,
		t_price:299
	}]
	
	let demoGroupList = [{
		cover:"https://edu-image.nosdn.127.net/9b9572c6b6b14964b3e26faed9eafcb9.png",
		title:"uni-app实战直播app开发",
		buy_num:10,
		price:100,
		t_price:299
	},{
		cover:"https://edu-image.nosdn.127.net/6acb1e3d39dc497bb98cf35b325a755d.png?imageView&quality=100&crop=0_0_899_500&thumbnail=223y124",
		title:"uni-app实战仿微信app开发",
		buy_num:10,
		price:100,
		t_price:299
	},{
		cover:"https://edu-image.nosdn.127.net/9b9572c6b6b14964b3e26faed9eafcb9.png",
		title:"uni-app实战直播app开发",
		buy_num:10,
		price:100,
		t_price:299
	},{
		cover:"https://edu-image.nosdn.127.net/6acb1e3d39dc497bb98cf35b325a755d.png?imageView&quality=100&crop=0_0_899_500&thumbnail=223y124",
		title:"uni-app实战仿微信app开发",
		buy_num:10,
		price:100,
		t_price:299
	}]
	
	export default {
		components: {
			courseList,
			uniLoadMore
		},
		data() {
			return {
				loadStatus:"noMore",
				list:[],
				page_title:"课程",
			}
		}, 
		onNavigationBarSearchInputClicked() {
			uni.navigateBack({ delta: 1 });
		},
		onReachBottom() {
			this.handleLoadMore()
		},
		onPullDownRefresh() {
			setTimeout(()=>{
				uni.stopPullDownRefresh()
			})
		},
		onLoad(e) {
			if(e.page_title == '课程' || e.page_title == '专栏'){
				this.list = demoCourseList
			}
			if(e.page_title == '拼团' || e.page_title == '秒杀'){
				this.list = demoGroupList
			}
			this.page_title = e.page_title
			uni.setNavigationBarTitle({
				title:e.page_title
			})
		},
		methods: {
			handleLoadMore(){
				if(this.loadStatus == 'noMore'){
					return
				}
				this.loadStatus = 'loading'
				setTimeout(()=>{
					// this.list.push({
					// 	cover:"https://edu-image.nosdn.127.net/561821cf12524f69bde0c6e9d3f3b030.png?imageView&quality=100&crop=0_0_900_499&thumbnail=223y124",
					// 	title:"uni-app实战视频点播app小程序",
					// 	progress:80
					// })
					this.loadStatus = 'more'
				},200)
			}
		}
	}
</script>

<style>

</style>
