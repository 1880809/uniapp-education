<template>
	<view class="line-h">
		<video id="video" :src="src" controls style="width:100%;height: 420rpx;" :show-progress="false" :danmu-list="danmuList" enable-danmu danmu-btn title="直播页"></video>
		<!-- 目录 -->
		<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'" class="bg-light px-3" style="box-sizing: border-box;" :scroll-into-view="scrollInto" scroll-with-animation>
			<!-- 提示 -->
			<view class="text-danger my-2" style="line-height: 1.4;">
				系统提示:直播内容及互动评论须严格遵守直播规范，严禁传播违法违规、低俗血暴、吸烟酗酒、造谣诈骗等不良有害信息。
			</view>
			<view :id="'danmu'+index" class="mb-3" v-for="(item,index) in danmuList" :key="index">
				<text class="text-white rounded font-sm bg-main px-1 mr-1">{{ item.tag }}</text>
				<text class="text-muted">{{ item.name }}：</text>{{ item.text }}
			</view>
		</scroll-view>
		<!-- 发送弹幕 -->
		<view style="height: 50px;" class="bg-white flex align-center px-3">
			<view class="bg-light border rounded text-light-muted flex-1 mr-2 px-2 py-1" @click="openComment">
				说一句吧
			</view>
		</view>
		
		<comment-popup ref="comment" @send="sendComment"></comment-popup>
		
	</view>
</template>

<script>
	import tab from '@/components/common/tab';
	import commentPopup from '@/components/common/comment-popup.vue';
	import T from '@/common/time.js';
	export default {
		components: {
			tab,commentPopup
		},
		data() {
			return {
				detail:{
					cover:"https://edu-image.nosdn.127.net/022e32f5b9c34003b524c7d47913c27a.png",
					title:"VueCli 实战在线教育后台系统",
					desc:"一句话推荐",
					content:'',
					price:100,
					t_price:299
				},
				scrollH:500,
				activeIndex:0,
				src:"https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/%E8%AF%BE%E6%97%B61.%20%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D.mp4",
				videoContext:null,
				scrollInto:"",
				danmuList:[{
					tag:"学员",
					name:"学员1号",
					text:"老师讲得不错",
					color: '#FFCCCC',
					time:1
				},{
					tag:"学员",
					name:"学员2号",
					text:"老师讲得不错+1",
					color: '#FFFF99',
					time:3
				},{
					tag:"学员",
					name:"学员2号",
					text:"老师讲得不错+1",
					color: '#CCCCFF',
					time:5
				},{
					tag:"学员",
					name:"学员2号",
					text:"老师讲得不错+1",
					color: '#99CCCC',
					time:7
				},{
					tag:"学员",
					name:"学员2号",
					text:"老师讲得不错+1",
					color: '#ffffff',
					time:9
				},{
					tag:"学员",
					name:"学员2号",
					text:"老师讲得不错+1",
					color: '#FFCC99',
					time:11
				},{
					tag:"学员",
					name:"学员2号",
					text:"老师讲得不错+1",
					color: '#ff0000',
					time:13
				},{
					tag:"学员",
					name:"学员2号",
					text:"老师讲得不错+1",
					color: '#ff0000',
					time:15
				},{
					tag:"学员",
					name:"学员2号",
					text:"老师讲得不错+1",
					color: '#ff0000',
					time:21
				},{
					tag:"学员",
					name:"学员3号",
					text:"老师讲得不错+1",
					color: '#ff0000',
					time:23
				}]
			}
		},
		onLoad() {
			this.scrollH = uni.getSystemInfoSync().windowHeight - uni.upx2px(420) - 50
			uni.setNavigationBarTitle({
				title:"vuecli实战在线教育后台"
			})
		},
		mounted() {
			this.videoContext = uni.createVideoContext('video',this)
		},
		methods: {
			openComment(){
				this.$refs.comment.open()
			},
			sendComment(text){
				let index = this.danmuList.length
				this.danmuList.push({
					tag:"学员",
					name:"帝莎编程",
					text
				})
				setTimeout(()=>{
					this.scrollInto = 'danmu' + index
				},300)
			},
		}
	}
</script>

<style>
page{
	height: 100%;
	overflow: hidden;
}
</style>
