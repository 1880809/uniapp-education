<template>
	<view>
		<web-view :src="url" :webview-styles="webviewStyles"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:"",
				webviewStyles: {
					progress: {
						color: '#5CCC84'
					}
				}
			}
		},
		onLoad(e) {
			this.url = decodeURIComponent(e.url)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
