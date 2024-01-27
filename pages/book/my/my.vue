<template>
	<view>
		<book-list v-for="(item,index) in list" :key="index" :item="item" :showPrice="false">继续学习</book-list>
		<uni-load-more :status="loadStatus" :fontSize="12" :iconSize="15"></uni-load-more>
	</view>
</template>

<script>
	import bookList from '@/components/common/book-list.vue';
	import uniLoadMore from '@/components/uni-ui/uni-load-more/uni-load-more.vue';
	let demoList = [{
		cover:"https://cdn.colorhub.me/4CRL61UxJSbP7wvP8kxYhXd7CZ_HNCU1L_cqb79ee3Q/auto/280/0/ce/0/bG9jYWw6Ly8vZDgv/ZjQvYWNjZWNkYjZj/MGJhMzNkNzEyZjQ5/MzMzNjMxN2YzZjU0/ZTk4ZDhmNC5qcGVn.jpg",
		title:"uni-app实战视频点播app小程序",
		desc:"一句话推荐",
		price:100,
		t_price:299
	},{
		cover:"https://cdn.colorhub.me/axujFagemjEv-rQGUBMgTrrMZv3NQXq66PfqpNysy8s/auto/280/0/ce/0/bG9jYWw6Ly8vZTUv/YjQvZDAwOWVlN2Y5/OGU0MzRjMmI2MTgx/YjlmODZmMDQxNjI3/NjVmZTViNC5qcGVn.jpg",
		title:"uni-app多端企业网盘全栈开发",
		desc:"一句话推荐",
		price:100,
		t_price:299
	}]
	export default {
		components: {
			bookList,
			uniLoadMore
		},
		data() {
			return {
				list:[],
				loadStatus:"noMore",
			}
		},
		created() {
			this.list = demoList
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
					console.log('数据');
					this.loadStatus = 'more'
				},200)
			}
		}
	}
</script>

<style>

</style>
