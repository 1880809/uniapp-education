<template>
	<view class="p-2">
		<view class="mb-2 p-2 bg-white rounded border-bottom border-light-secondary" hover-class="bg-light"
		v-for="(item,index) in list" :key="index">
			<view class="font">
				{{item.desc}}
			</view>
			<view class="font text-light-muted">{{item.create_time}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						title:"uni-app第三季仿微信app正式开售啦",
						desc:"开启纯nvue原生渲染，大大提高性能",
						create_time:"9月份"
					},
					{
						title:"uni-app第三季仿微信app正式开售啦",
						desc:"开启纯nvue原生渲染，大大提高性能",
						create_time:"9月份"
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
page{
	background-color: #EEEEEE;
}
</style>
