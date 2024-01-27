<template>
	<view>
		<view class="flex align-center justify-center py-2 position-fixed left-0 right-0 text-danger bg-white border-bottom border-top border-danger font-md" style="height: 50rpx;z-index: 1000;">
			考试时间 {{ time_out | formatTime }}
		</view>
		<view style="height: 80rpx;"></view>
	</view>
</template>

<script>
	let timer = null
	
	let toHHmmss = function (data) {
		var s;
		var hours = parseInt((data % (60 * 60 * 24)) / (60 * 60));
		var minutes = parseInt((data % (60 * 60)) / 60);
		var seconds = data % 60;
		s = (hours < 10 ? ('0' + hours) : hours) + ':' + (minutes < 10 ? ('0' + minutes) : minutes) + ':' + (seconds < 10 ? ('0' + seconds) : seconds);
		return s;
	};
	export default {
		filters: {
			formatTime(val){
				return toHHmmss(val)
			}
		},
		props: {
			expire: {
				type: Number,
				default:120 
			},
		},
		data() {
			return {
				time_out:0
			}
		},
		mounted() {
			this.time_out = this.expire * 60
			if(this.time_out > 0){
				timer = setInterval(this.handleTimeOut,1000)
			}
		},
		beforeDestroy() {
			clearInterval(timer)
		},
		methods: {
			handleTimeOut() {
				if(this.time_out == 0){
					// 时间结束，自动交卷
					this.$emit('end')
					clearInterval(timer)
					return
				}
				this.time_out--
			},
		},
	}
</script>

<style>
	
</style>
