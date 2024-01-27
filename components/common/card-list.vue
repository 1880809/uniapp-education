<template>
	<view>
		<view class="f-divider"></view>
		<uni-card :border="false" is-full :title="title" :extra="showMore ? '查看全部' : false" @click-extra="open">
			<view class="flex flex-wrap justify-between">
				<course-list :listType="type" v-for="(item,index) in list" :key="index" :item="item"></course-list>
			</view>
			
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
				default: "one"
			},
			title: {
				type: String,
				default: "标题"
			},
			showMore: {
				type: Boolean,
				default: true
			},
			list:{
				type: Array,
				default:(val)=>{
					return val || []
				}
			},
			more:[Object,Boolean]
		},
		methods: {
			open() {
				this.$util.open(this.more)
			}
		},
	}
</script>

<style>
</style>
