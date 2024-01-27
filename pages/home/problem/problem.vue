<template>
	<view>
		
		<uni-collapse accordion="true">
		    <uni-collapse-item title="购买之后怎么开发票？" showAnimation>
		        <view style="padding: 30rpx;">
		            购买之后怎么开发票？购买之后怎么开发票？购买之后怎么开发票？购买之后怎么开发票？购买之后怎么开发票？购买之后怎么开发票？
		        </view>
		    </uni-collapse-item>
		    <uni-collapse-item title="怎么注册？" showAnimation>
		        <view style="padding: 30rpx;">
		            怎么注册
		        </view>
		    </uni-collapse-item>
		    <uni-collapse-item title="怎么登录？" showAnimation>
		        <view style="padding: 30rpx;">
		            怎么注册
		        </view>
		    </uni-collapse-item>
		</uni-collapse>
		
	</view>
</template>

<script>
	import uniCollapse from '@/components/uni-ui/uni-collapse/uni-collapse.vue';
	import uniCollapseItem from '@/components/uni-ui/uni-collapse-item/uni-collapse-item.vue';
	export default {
		components: {
			uniCollapse,
			uniCollapseItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
