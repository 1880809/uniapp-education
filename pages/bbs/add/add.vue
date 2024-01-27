<template>
	<view>
		<uni-card isFull note="true" v-for="(item,index) in form" :key="index">
		    <view class="flex pt-2">
				<textarea placeholder="请填写帖子内容" v-model="item.text" class="font-md bg-light rounded p-2" style="height: 200rpx;width: 100%;"/>
			</view>
		    <template v-slot:footer>
		        <view class="flex align-center" style="margin: -20rpx;">
		        	<upload-image :list="item.images"></upload-image>
		        </view>
		    </template>
		</uni-card>
		<!-- 底部按钮 -->
		<view style="height: 55px;"></view>
		<view class="fixed-bottom bg-white px-3 border-top flex align-center border-light-secondary" style="height: 55px;">
			<main-button b-class="flex-1" @click="addForm">添加内容</main-button>
		</view>
	</view>
</template>

<script>
	import uniCard from '@/components/uni-ui/uni-card/uni-card.vue';
	import uploadImage from '@/components/common/upload-image.vue';
	import mainButton from '@/components/common/main-button.vue';
	export default {
		components: {
			uniCard,
			uploadImage,
			mainButton
		},
		data() {
			return {
				form:[{
					text:"",
					images:[]
				}]
			}
		},
		onNavigationBarButtonTap() {
			this.submit()
		},
		methods: {
			submit(){
				console.log('发布帖子');
				uni.navigateBack({
					delta: 1
				});
				setTimeout(()=>{
					uni.showToast({
						title: '发布成功',
						icon: 'none'
					});
				},300)
			},
			addForm(){
				this.form.push({
					text:"",
					images:[]
				})
			}
		}
	}
</script>

<style>

</style>
