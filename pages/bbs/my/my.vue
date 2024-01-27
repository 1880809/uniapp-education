<template>
	<view>
		<bbs-list v-for="(item,index) in list" :key="index" :index="index" :item="item" @open-action="handleOpenAction"></bbs-list>
		<uni-load-more :status="loadStatus" :fontSize="12" :iconSize="15"></uni-load-more>
	</view>
</template>

<script>
	import demo from '../index/demo.js';
	import bbsList from '@/components/bbs/bbs-list.vue';
	import uniLoadMore from '@/components/uni-ui/uni-load-more/uni-load-more.vue';
	export default {
		components: {
			bbsList,
			uniLoadMore
		},
		data() {
			return {
				list:[],
				loadStatus:"more",
			}
		},
		onLoad() {
			this.list = demo
		},
		onReachBottom() {
			this.handleLoadMore()
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
			},
			handleOpenAction(e){
				uni.showActionSheet({
				    itemList:  ['删除'],
				    success: (res)=> {
				       uni.showModal({
				       	content: '是否要删除该帖子？',
				       	success: (res)=> {
				       		if (res.cancel) return
				       		this.list.splice(e.index,1)
				       		uni.showToast({
				       			title:'删除成功',
				       			icon: 'none'
				       		});
				       	}
				       });
				    },
				});
			},
		}
	}
</script>

<style>

</style>
