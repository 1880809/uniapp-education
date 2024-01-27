<template>
	<view>
 
		<block v-for="(item,index) in list" :key="index">
			<uni-card isFull :title="item.testpaper.title" note="2021-01-12 01:00:00">
				<text slot="extra" class="text-success font-sm">考试完成</text>
			    <view class="flex pt-2 font">
					<text class="flex-1">题目总数：{{ item.testpaper.question_count }}</text>
					<view class="flex-1 flex align-center">
						最终得分：<text class="text-danger">{{ item.status ? item.score : '正在阅卷' }}</text>
					</view>
				</view>
			</uni-card>
			<view class="f-divider"></view>
		</block>
		<uni-load-more :status="loadStatus" :fontSize="12" :iconSize="15"></uni-load-more>
		
	</view>
</template>

<script>
	import uniCard from '@/components/uni-ui/uni-card/uni-card.vue';
	import uniLoadMore from '@/components/uni-ui/uni-load-more/uni-load-more.vue';
	export default {
		components: {
			uniCard,
			uniLoadMore,
		},
		data() {
			return {
				loadStatus:"noMore",
				list:[{
					testpaper:{
						title:"试卷名称",
						question_count:10,
						total_score:100,
						pass_score:60,
					},
					status:0,
					score:0
				}]
			}
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
					// 加载数据
					this.loadStatus = 'more'
				},200)
			},
		}
	}
</script>

<style>

</style>
