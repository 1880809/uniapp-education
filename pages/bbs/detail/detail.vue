<template>
	<view>
		<view class="p-3 border-bottom border-light-secondary">
			<bbs-list-header :user="detail.user" @action="handleOpenAction" :is_top="detail.is_top"></bbs-list-header>
		</view>
		<view class="p-3 flex flex-column align-center" v-for="(item,index) in detail.content" :key="index">
			<text class="font-md mb-1" v-html="item.text"></text>
			<image v-for="(img,imgI) in item.images" :key="imgI" :src="img" mode="widthFix" style="max-width: 100%;"></image>
		</view>
		
		<view class="f-divider"></view>
		
		
		<view style="height: 50px;"></view>
		<view style="height: 50px;z-index: 1;" class="fixed-bottom bg-white border-top flex align-center px-3">
			<view class="bg-light border rounded text-light-muted flex-1 mr-2 px-2 py-1" @click="openComment">
				说一句吧
			</view>
			<view @click.stop="support" :class="detail.is_support ? 'text-danger' : ''" class="flex align-center">
				<text class="iconfont icondianzan2" style="font-size: 20px!important;margin-bottom: -12rpx;"></text>
				<text class="ml-1">{{ detail.support_count || '点赞' }}</text>
			</view>
		</view>

		<comment-popup ref="comment" @send="sendComment"></comment-popup>
		
	</view>
</template>

<script>
	import bbsListHeader from '@/components/bbs/bbs-list-header.vue';
	import commentPopup from '@/components/common/comment-popup.vue';
	export default {
		components: {
			bbsListHeader,
			commentPopup
		},
		data() {
			return {
				detail:{
					content: [{
						text:"详细的uniapp实战开发app小程序课程系列，7大实战开发案例（社区交友，商城，即时通讯，音频小说、网盘、点播、直播）帮助你获得技术优势并提高面试竞争力。",
						images:["http://edu-image.nosdn.127.net/161D78327D38C28645011D73B7A7D49D.jpg?imageView&thumbnail=330y204&quality=100"]
					},{
						text:"详细的uniapp实战开发app小程序课程系列，7大实战开发案例（社区交友，商城，即时通讯，音频小说、网盘、点播、直播）帮助你获得技术优势并提高面试竞争力。",
						images:["http://www.dishait.cn/zb_users/upload/2020/10/202010131602561265333637.png"]
					},{
						text:"详细的uniapp实战开发app小程序课程系列，7大实战开发案例（社区交友，商城，即时通讯，音频小说、网盘、点播、直播）帮助你获得技术优势并提高面试竞争力。",
						images:["http://edu-image.nosdn.127.net/6acb1e3d39dc497bb98cf35b325a755d.png?imageView&quality=100&crop=0_0_899_500&thumbnail=450y250"]
					}],
					user: {
						nickname: "summer",
						avatar: "/static/avatar.jpg",
						sex: "男"
					},
					comment_count: 1,
					support_count: 0,
					is_support: false,
					is_top: 0
				}
			}
		},
		methods: {
			support(){
				this.detail.support_count = !this.detail.is_support ? this.detail.support_count+1 : this.detail.support_count-1
				this.detail.is_support = !this.detail.is_support
			},
			openComment(){
				this.$refs.comment.open()
			},
			sendComment(e){
				console.log(e);
			},
			handleOpenAction(e){
				const actionList = [
					this.detail.is_top ? '取消加精' : '加精',
					'删除',
				]
				uni.showActionSheet({
				    itemList: actionList,
				    success: (res)=> {
				       switch (res.tapIndex){
				       	case 0:
						this.detail.is_top = this.detail.is_top ? 0 : 1
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
								// this.list.splice(e.index,1)
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
		}
	}
</script>

<style>

</style>
