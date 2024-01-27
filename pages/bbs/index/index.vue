<template>
	<view>  
		<!-- 分类 -->
		<view class="flex flex-wrap pt-2 px-1">
			<view class="border px-3 py-1 rounded mx-1 mb-2" v-for="(item,index) in menus" :key="index" :class="activeIndex == index ? 'text-white bg-main border-main' : 'text-muted bg-light'" @click="changeMenu(index)">{{ item.title }}</view>
		</view>
		
		<view class="f-divider"></view>
		<!-- 数据统计 -->
		<view class="flex py-2">
			<view class="flex-1 flex align-center justify-center text-muted font-md">
				<text class="font-weight-bold mr-2">总帖子</text>5863
			</view>
			<view class="flex-1 flex align-center justify-center text-muted font-md">
				<text class="font-weight-bold mr-2">总用户</text>5863
			</view>
		</view>
		 <view class="f-divider"></view>
		 <!-- 帖子列表 -->
		 <bbs-list v-for="(item,index) in list" :key="index" :index="index" :item="item" @open-action="handleOpenAction" @support="handleSupport"></bbs-list>
		 <uni-load-more :status="loadStatus" :fontSize="12" :iconSize="15"></uni-load-more>
	</view>
</template>

<script>
	import bbsList from '@/components/bbs/bbs-list.vue';
	import uniLoadMore from '@/components/uni-ui/uni-load-more/uni-load-more.vue';
	import uniTag from '@/components/uni-ui/uni-tag/uni-tag.vue';
	import demo from './demo.js';
	export default {
		components: {
			bbsList,
			uniLoadMore,
			uniTag
		},
		data() {
			return {
				activeIndex:0,
				menus:[{
					title:"全部"
				},{
					title:"Uniapp"
				},{
					title:"Vue"
				},{
					title:"JavaScript"
				},{
					title:"Node"
				},{
					title:"前端"
				},{
					title:"后端"
				},{
					title:"全栈开发"
				}],
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
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: '../add/add',
			});
		},
		methods: {
			getData(){
				this.loadStatus = 'loading'
				this.list = []
				setTimeout(()=>{
					this.list = demo
					this.loadStatus = 'more'
				},1000)
			},
			changeMenu(index){
				this.activeIndex = index
				this.getData()
			},
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
				const actionList = [
					e.item.is_top ? '取消加精' : '加精',
					'删除',
				]
				uni.showActionSheet({
				    itemList: actionList,
				    success: (res)=> {
				       switch (res.tapIndex){
				       	case 0:
						e.item.is_top = e.item.is_top ? 0 : 1
						uni.showToast({
							title: actionList[res.tapIndex] + '成功',
							icon: 'none'
						});
				       		break;
				       	case 1:
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
				       		break;
				       }
				    },
				});
			},
			handleSupport(e){
				e.support_count = !e.is_support ? e.support_count+1 : e.support_count-1
				e.is_support = !e.is_support
			}
		}
	}
</script>

<style>

</style>
