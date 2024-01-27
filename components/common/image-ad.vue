<template>
	<view>
		<view class="f-divider"></view>
		<view class="p-2">
			<image :src="src" mode="widthFix" class="w-100 bg-light" style="border-radius: 15rpx;"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			src:{
				type:String,
				default:""
			}
		}
	}
</script>

<style>
</style>
