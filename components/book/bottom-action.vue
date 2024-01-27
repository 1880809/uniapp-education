<template>
	<view>
		<view style="height: 50px;"></view>
		<view class="bottom-action">
			<view  :hover-class="current <= 1 ? 'bg-light' : 'bg-light'" :hover-stay-time="200" @click="pre" :class="current <= 1 ? 'text-light-muted' : ''">
				<text class="iconfont iconshangyibu"></text>
			</view>
			<view hover-class="bg-light" :hover-stay-time="200" @click="$emit('open-menu')">
				<text class="iconfont iconleimupinleifenleileibie"></text>
				<view class="flex align-center justify-center font-sm">
					<text class="text-main">{{ current }}</text>
					<text>/</text>
					<text>{{ total }}</text>
				</view>
			</view>
			<view :hover-class="current >= total ? '':'bg-light'" :hover-stay-time="200" @click="next" :class="current >= total ? 'text-light-muted' : ''">
				<text class="iconfont iconxiayibu"></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			total: {
				type: Number,
				default: 10
			},
			current:{
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			next(){
				if(this.current >= this.total){
					return
				}
				this.$emit('on-page',this.current + 1)
			},
			pre(){
				if(this.current <= 1){
					return
				}
				this.$emit('on-page',this.current - 1)
			}
		},
	}
</script>

<style>
	.bottom-action{
		display: flex;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		border-top: 1rpx solid;
		border-color: #F4F4F4!important;
		background-color: #FFFFFF;
		height: 50px;
		z-index: 10;
	}
	.bottom-action>view{
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.bottom-action .iconfont{
		font-size: 20px;
	}
	.bottom-action view,.bottom-action text{
		line-height: 1;
	}
</style>
