<template>
	<view>
		<uni-card v-if="list.length" :border="false" is-full title="历史记录" extra="清除全部" @click-extra="clearHistory">
		<view class="flex flex-wrap" style="margin-right: -30rpx;">
			<uni-tag style="margin-right: 25rpx;margin-bottom: 25rpx;" v-for="(item,index) in list" :key="index" :inverted="true" :text="item" @click="handleClickTag(item)"/>
		</view>
		</uni-card>
	</view>
</template>

<script>
	import uniCard from '@/components/uni-ui/uni-card/uni-card.vue';
	import uniTag from '@/components/uni-ui/uni-tag/uni-tag.vue';
	export default {
		components: {
			uniCard,
			uniTag
		},
		data() {
			return {
				list:[],
				keyword:""
			}
		},
		// 监听导航输入
		onNavigationBarSearchInputChanged(e){
			this.keyword = e.text
		},
		onNavigationBarButtonTap() {
			this.handleSearchEvent()
		},
		onNavigationBarSearchInputConfirmed(){
			this.handleSearchEvent()
		},
		onLoad() {
			// 取出搜索历史
			let list = uni.getStorageSync('historyKeyword')
			if(list){
				this.list = JSON.parse(list)
			}
		},
		methods: {
			addHistory(){
				// 加入搜索历史
				let index = this.list.findIndex(v => v == this.keyword)
				if(index !== -1){
					this.$util.objToFirst(this.list,index)
				} else {
					this.list.unshift(this.keyword)
				}
				uni.setStorageSync('historyKeyword',JSON.stringify(this.list))
			},
			handleSearchEvent(){
				uni.navigateTo({
					url: '../search-result/search-result?keyword='+this.keyword
				});
				this.addHistory()
			},
			clearHistory(){
				uni.showModal({
					content: '是否要清除搜索记录？',
					success: (res)=>{
						uni.removeStorageSync('historyKeyword')
						this.list = []
					}
				});
			},
			handleClickTag(text){
				this.keyword = text
				this.handleSearchEvent()
			}
		}
	}
</script>

<style>

</style>
