<template>
	<uni-popup type="bottom" ref="commentPopup">
		 <view class="bg-white" style="width: 750rpx;height: 400rpx;">
			 <view class="flex justify-between align-center border-bottom border-light-secondar px-3" style="height: 100rpx;width: 100%;box-sizing: border-box;">
				<text class="font flex-1">发表</text>
				<button type="primary" size="mini" @click="send" :disabled="!commentContent.length">发送</button>
			 </view>
			 <textarea v-model="commentContent" placeholder="发表评论..." class="font bg-light p-3" style="height: 250rpx;margin-left: 30rpx;"/>
			 
		 </view>
	</uni-popup>
</template>

<script>
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue';
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				commentContent:""
			}
		},
		methods: {
			open() {
				this.$refs.commentPopup.open()
			},
			send(){
				this.$emit('send',this.commentContent)
				this.$refs.commentPopup.close()
				this.commentContent = ''
			}
		},
	}
</script>

<style>
</style>
