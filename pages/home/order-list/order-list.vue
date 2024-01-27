<template>
	<view>
		
		<view v-for="i in 4" :key="i">
			<uni-card note="true" isFull>
				<view>
					<view class="flex justify-between py-2 font-sm text-muted">
						<text>订单时间：2021-01-04 09:49</text>
						<text>订单号：123456</text>
					</view>
					<view class="flex justify-between font-md">
						uniCloud单商户商城app
					</view>
					<view class="flex justify-end font-md font-weight-bold text-danger">
						￥198
					</view>
				</view>
				<view slot="footer">
					交易已完成
				</view>
			</uni-card>
			<view class="f-divider"></view>
		</view>
		
		<uni-load-more status="noMore"></uni-load-more>
		
	</view>
</template>

<script>
	import uniCard from '@/components/uni-ui/uni-card/uni-card.vue';
	import uniLoadMore from '@/components/uni-ui/uni-load-more/uni-load-more.vue';
	export default {
		components: {
			uniCard,
			uniLoadMore
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
