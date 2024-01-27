<template>
	<view style="overflow-x: hidden;">
		<view v-if="!detail.isbuy" class="position-relative">
			<image :src="detail.cover" style="width:100%;height: 420rpx;margin-bottom: -14rpx;" class="bg-light" ></image>
			<view class="text-white font-sm px-1" style="position: absolute;right: 10rpx;bottom: 10rpx;background-color: rgba(0,0,0,0.4);">
				{{ detail.type | formatType }}
			</view>
		</view>
		<f-audio v-else-if="type == 'audio'" :poster="detail.cover" :src="detail.content"></f-audio>
		<video v-else-if="type == 'video'" id="video" :poster="detail.cover" :src="detail.content" controls style="width:100%;height: 420rpx;"></video>
		<!-- 内容 -->
		<view class="animate__animated animate__fadeIn animate__fast">
			<view class="flex flex-column p-3">
				<text class="mb-1" style="font-size: 38rpx;line-height: 1.5;">{{detail.title}}</text>
				<text class="font-sm text-light-muted">1348 学过</text>
				<view class="flex align-end mt-2" v-if="!detail.isbuy">
					<text class="font-lg text-danger line-h">￥{{ detail.price }}</text><text class="font-sm text-through line-h text-light-muted ml-1">￥{{ detail.t_price }}</text>
				</view>
			</view> 
			<view class="f-divider"></view>
			<uni-card v-if="type != 'media'" title="课程介绍" body-style="padding: 0!important;" isFull>
				<mp-html :content="detail.try" lazy-load>
					<view class="flex align-center justify-center py-3 text-muted">加载中...</view>
				</mp-html>
			</uni-card>
			<uni-card v-else :title="detail.isbuy ? '课程内容' : '试看内容'" body-style="padding: 0!important;" isFull>
				<mp-html :content="detail.isbuy ? detail.content : detail.try" lazy-load>
					<view class="flex align-center justify-center py-3 text-muted">加载中...</view>
				</mp-html>
			</uni-card>
		</view>
		
		<!-- 底部按钮 -->
		<template v-if="!detail.isbuy">
			<view style="height: 55px;"></view>
			<view class="fixed-bottom bg-white px-3 border-top flex align-center border-light-secondary" style="height: 55px;">
				<main-button b-class="flex-1" @click="submit">
					<text class="font-md">立即订购 ￥{{ detail.price }}</text>
				</main-button>
			</view>
		</template>
		
		
	</view>
</template>

<script>
	import uniCard from '@/components/uni-ui/uni-card/uni-card.vue';
	import mainButton from '@/components/common/main-button.vue';
	import mpHtml from '@/components/common/mp-html/mp-html.vue';
	import fAudio from '@/components/common/f-audio.vue';
	import demo from '../demo.js';
	export default {
		components: {
			uniCard,
			mainButton,
			mpHtml,
			fAudio
		},
		filters: {
			formatType(t) {
				let o = {
					media:"图文",
					audio:"音频",
					video:"视频"
				}
				return o[t];
			}
		},
		data() {
			return {
				type:"media",
				detail:{
					cover:"https://edu-image.nosdn.127.net/022e32f5b9c34003b524c7d47913c27a.png",
					title:"VueCli 实战在线教育后台系统",
					desc:"一句话推荐",
					content:'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/c087e9b00b7c0dd3235e.mp3',
					price:100,
					t_price:299,
					try:"",
					isbuy:false
				},
			}
		},
		onLoad(e) {
			this.type = e.type || 'media'
			
			if(this.type == 'media'){
				this.detail.content = demo.media
			} else if(this.type == 'video'){
				this.detail.content = "https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/%E8%AF%BE%E6%97%B61.%20%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D.mp4"
			}
			
			this.detail.try = demo.content
			
			uni.setNavigationBarTitle({
				title:this.detail.title
			})
		},
		methods: {
			submit(){
				uni.showLoading({
					title: '订购中...',
					mask: false
				});
				setTimeout(()=>{
					this.detail.isbuy = true
					uni.showToast({
						title: '订购成功',
						icon: 'none'
					});
				},800)
			}
		}
	}
</script>

<style>

</style>
