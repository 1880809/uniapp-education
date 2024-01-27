<template>
	<view>
 
		<block v-for="(item,index) in list" :key="index">
			<uni-card isFull :title="item.title" note="true">
				<text slot="extra" class="text-danger font-sm">时长：{{ item.expire }} 分钟</text>
			    <view class="flex pt-2 font">
					<text class="flex-1">题目总数：{{ item.question_count }}</text>
					<text class="flex-1">总分数：{{ item.total_score }}</text>
					<text class="flex-1">及格分：{{ item.pass_score }}</text>
				</view>
			    <template v-slot:footer>
			        <view class="flex align-center justify-end">
						<main-button :disabled="!item.status" @click="openDetail(item)">{{ item.status ? '参加考试' : '考试已结束' }}</main-button>
					</view>
			    </template>
			</uni-card>
			<view class="f-divider"></view>
		</block>
		<uni-load-more :status="loadStatus" :fontSize="12" :iconSize="15"></uni-load-more>
		
	</view>
</template>

<script>
	import mainButton from '@/components/common/main-button.vue';
	import uniCard from '@/components/uni-ui/uni-card/uni-card.vue';
	import uniLoadMore from '@/components/uni-ui/uni-load-more/uni-load-more.vue';
	export default {
		components: {
			uniCard,
			uniLoadMore,
			mainButton
		},
		data() {
			return {
				loadStatus:"more",
				list:[{
					title:"拖拉机维修技术",
					question_count:10,
					total_score:100,
					pass_score:60,
					expire:120,
					status:0
				},{
					title:"驾驶 ( 二年级 )",
					question_count:10,
					total_score:100,
					pass_score:60,
					expire:120,
					status:1
				},{
					title:"语文 ( 一年级 )",
					question_count:10,
					total_score:100,
					pass_score:60,
					expire:120,
					status:1
				},{
					title:"	数学 ( 一年级 )",
					question_count:10,
					total_score:100,
					pass_score:60,
					expire:120,
					status:1
				},{
					title:"英语 ( 一年级 )",
					question_count:10,
					total_score:100,
					pass_score:60,
					expire:120,
					status:1
				},{
					title:"物理 ( 一年级 )",
					question_count:10,
					total_score:100,
					pass_score:60,
					expire:120,
					status:1
				},{
					title:"化学 ( 一年级 )",
					question_count:10,
					total_score:100,
					pass_score:60,
					expire:120,
					status:1
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
			openDetail(item){
				uni.showModal({
					content: '是否现在开始考试？',
					confirmText:"开始考试",
					success:(res)=>{
						if (res.cancel) return
						uni.navigateTo({
							url: '/pages/test/detail/detail',
						});
					}
				});
			}
		}
	}
</script>

<style>

</style>
