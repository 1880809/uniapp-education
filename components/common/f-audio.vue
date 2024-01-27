<template>
	<view class="f-audio">
		<view class="px-5 pt-5">
			<image :src="poster" mode="aspectFill" style="width: 100%;height: 400rpx;border-radius: 20rpx;"
				class="bg-hover-light shadow"></image>
		</view>

		<view class="slider">
			<slider activeColor="#5CCC84" block-color="#5CCC84" block-size="15" :value="position" :min="0"
				:max="duration" @changing="onchanging" @change="onchange"></slider>
			<text class="current-time">{{currentTime|formatTime}}</text>
			<text class="duration">{{duration|formatTime}}</text>
		</view>

		<view class="flex justify-center align-center">
			<text class="iconfont iconziyuan11 px-2 mx-3" style="font-size: 20px;" @click="loop" :class="loopStatus ? 'text-main' : 'text-light-muted'"></text>
			<view @click="play">
				<text class="iconfont text-main" :class="isPlaying ? 'icontianchongxing-' : 'iconziyuan1'" style="font-size: 50px;"></text>
			</view>
			<text @click="$emit('fava')" class="iconfont iconshoucang2 px-2 mx-3 text-light-muted" style="font-size: 20px;" :class="isfava ? 'text-main' : 'text-light-muted'"></text>
		</view>
		
		
	</view>
</template>
<script>

	import time from '@/common/time.js';
	export default {
		filters: {
			formatTime(t) {
				if (!t) {
					return '00:00'
				}
				return time.formateSeconds(t)
			}
		},
		props: {
			poster: {
				type: String,
				default: ''
			},
			isfava:{
				type:Boolean,
				default:false
			},
			src:{
				type: String,
				default: ''
			}
		},
		data() {
			return {
				title: "innerAudioContext",
				isPlaying: false,
				isPlayEnd: false,
				loopStatus:false,
				currentTime: 0,
				duration: 100
			}
		},
		computed: {
			position() {
				return this.isPlayEnd ? 0 : this.currentTime;
			},
			playImage() {
				return this.isPlaying ? "暂停" : "播放"
			}
		},
		created() {
			this._isChanging = false;
			this._audioContext = null;
			this.createAudio();
		},
		beforeDestroy() {
			if (this._audioContext != null && this.isPlaying) {
				this.stop();
			}
		},
		methods: {
			createAudio() {
				var innerAudioContext = this._audioContext = uni.createInnerAudioContext();
				innerAudioContext.autoplay = false;
				innerAudioContext.src = this.src;
				innerAudioContext.onPlay(() => {
					// console.log('开始播放');
				});
				innerAudioContext.onTimeUpdate((e) => {
					if (this._isChanging === true) {
						return;
					}
					this.currentTime = innerAudioContext.currentTime || 0;
					this.duration = innerAudioContext.duration || 0;
				});
				innerAudioContext.onEnded(() => {
					this.currentTime = 0;
					this.isPlaying = false;
					this.isPlayEnd = true;
				});
				innerAudioContext.onError((res) => {
					this.isPlaying = false;
					console.log(res.errMsg);
					console.log(res.errCode);
				});
				return innerAudioContext;
			},
			onchanging() {
				this._isChanging = true;
			},
			onchange(e) {
				console.log(e.detail.value);
				this._audioContext.seek(e.detail.value);
				this._isChanging = false;
			},
			play() {
				if (this.isPlaying) {
					this.pause();
					return;
				}
				this.isPlaying = true;
				this._audioContext.play();
				this.isPlayEnd = false;
			},
			pause() {
				this._audioContext.pause();
				this.isPlaying = false;
			},
			stop() {
				this._audioContext.stop();
				this.isPlaying = false;
			},
			loop(){
				this.loopStatus = !this.loopStatus
				this._audioContext.loop = this.loopStatus
				uni.showToast({
					title: (this.loopStatus ? '开启' : '关闭')+'循环',
					icon: 'none'
				});
			}
		}
	}
</script>
<style>
	.f-audio {
		background-color: #F5F5F4;
	}

	.f-audio .slider {
		position: relative;
	}

	.f-audio .slider text {
		position: absolute;
		top: 25rpx;
		font-size: 12px;
		color: #5CCC84;
	}

	.f-audio .slider .current-time {
		left: 30rpx;
	}

	.f-audio .slider .duration {
		right: 30rpx;
	}
</style>
