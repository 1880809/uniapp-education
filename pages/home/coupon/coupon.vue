<template>
	<view>
		<view class="coupon" :class="item.used || item.expired ? 'coupon-used' : ''" v-for="(item,index) in list" :key="index">
			<view class="coupon-body bg-hover-warning">
				<text class="font-lg">￥{{ item.price }}</text>
				<text class="font-sm">适用{{ item.typeName }}：{{ item.title }}</text>
			</view>
			<view hover-class="bg-hover-warning" class="coupon-btn bg-warning">{{ item.btn }}</view>
		</view>
		<uni-load-more :status="loadStatus" :fontSize="12" :iconSize="15"></uni-load-more>
	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-ui/uni-load-more/uni-load-more.vue';
	export default {
		components: {
			uniLoadMore
		},
		data() {
			return {
				loadStatus:"noMore",
				list:[{
					end_time: "2021-10-18 16:00:00",
					id: 14,
					price: "6.66",
					start_time: "2021-04-17 16:00:00",
					status: 1,
					type: "column",
					used: 0,
					title: "我是新专栏1"
				},{
					end_time: "2021-04-18 16:00:00",
					id: 14,
					price: "6.66",
					start_time: "2021-04-17 16:00:00",
					status: 1,
					type: "column",
					used: 0,
					title: "我是新专栏1"
				},{
					end_time: "2021-04-18 16:00:00",
					id: 14,
					price: "6.66",
					start_time: "2021-04-17 16:00:00",
					status: 1,
					type: "column",
					used: 0,
					title: "我是新专栏1"
				},{
					end_time: "2021-04-18 16:00:00",
					id: 14,
					price: "6.66",
					start_time: "2021-04-17 16:00:00",
					status: 1,
					type: "column",
					used: 0,
					title: "我是新专栏1"
				},{
					end_time: "2021-04-18 16:00:00",
					id: 14,
					price: "6.66",
					start_time: "2021-04-17 16:00:00",
					status: 1,
					type: "column",
					used: 1,
					title: "我是新专栏1"
				}]
			}
		},
		onLoad() {
			this.list = this.formatList(this.list)
		},
		onReachBottom() {
			this.handleLoadMore()
		},
		onPullDownRefresh() {
			setTimeout(()=>{
				uni.stopPullDownRefresh()
			})
		},
		methods: {
			handleLoadMore(){
				if(this.loadStatus == 'noMore'){
					return
				}
				this.loadStatus = 'loading'
				setTimeout(()=>{
					this.loadStatus = 'more'
				},200)
			},
			formatList(list){
				let o = {
					course:"课程",
					column:"专栏"
				}
				list.map(v=>{
					v.typeName = o[v.type]
					v.expired = (new Date(v.end_time)).getTime() < (new Date()).getTime()
					v.btn = v.used ? '已使用' : (v.expired ? '已过期' : '立即使用')
					return v
				})
				
				return list
			}
		}
	}
</script>

<style>
page{
	padding: 30rpx;
}
.coupon{
	border-radius: 10rpx;
	overflow: hidden;
	margin-bottom: 30rpx;
}
.coupon,.coupon-body,.coupon-btn{
	display: flex;
}
.coupon-body{
	flex-direction: column;
	color: #FFFFFF;
	align-items: flex-start;
	padding: 20rpx;
	flex: 1;
	border-right: 4rpx dashed;
}
.coupon-body>text:first-child{
	line-height: 1.2;
}
.coupon-btn{
	align-items: center;
	justify-content: center;
	width: 200rpx;
	color: #FFFFFF;
}
.coupon-used .coupon-body,.coupon-used .coupon-btn{
	background-color: #CCCCCC;
}
</style>
