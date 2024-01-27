<template>
	<view :style="getStyle" :class="getClass">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			w: {
				type: [Number,String],
				default: 0
			},
			h: {
				type: [Number,String],
				default: 0
			},
			circle:{
				type: Boolean,
				default: false
			},
			show:{
				type: Boolean,
				default: true
			},
			oStyle:{
				type: String,
				default: ''
			},
			oClass:{
				type: String,
				default: ''
			}
		},
		computed: {
			getStyle() {
				if(!this.show){
					return ''
				}
				return `width:${this.w}rpx;height:${this.h}rpx;${this.oStyle}`
			},
			getClass(){
				if(!this.show){
					return ''
				}
				let circle = this.circle ? 'rounded-circle' : ''
				return `${circle} bg-light ${this.oClass}`
			}
		},
	}
</script>

<style>
</style>
