<template>
	<view>
		<view class="f-divider"></view>
		<uni-card :border="false" is-full :title="title">
			<scroll-view scroll-x="true" class="scroll-row" show-scrollbar>
				<course-list v-for="(item,index) in list" :key="index" :item="item" listType="two" listClass="mr-2">
					<template slot="desc">{{ item.buy_num }}人已抢</template>
				</course-list>
			</scroll-view>
		</uni-card>
	</view>
</template>
 
<script>
	import uniCard from '@/components/uni-ui/uni-card/uni-card.vue';
	import courseList from './course-list.vue';
	export default {
		components: {
			uniCard,
			courseList
		},
		props: {
			type:{
				type: String,
				default: "限时优惠"
			},
			title: {
				type: String,
				default: "标题"
			},
			list:{
				type: Array,
				default:(val)=>{
					return val || []
				}
			}
		},
	}
</script>

<style>
</style>
