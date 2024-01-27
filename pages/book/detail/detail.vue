<template>
	<view class="overflow-hidden">
		
		<!-- 资料 -->
		<view style="width: 700rpx;" class="scroll-row-item flex py-3 course-border px-3">
			<image :src="detail.cover" style="width:258rpx;height: 380rpx;" class="mr-3 flex-shrink bg-light rounded" ></image>
			<view class="flex flex-column flex-shrink" style="width: 384rpx;">
				<text class="mb-1" style="font-size: 38rpx;line-height: 1.5;">{{detail.title}}</text>
				<view class="font-sm text-light-muted">
					<slot name="desc">{{ detail.desc }}</slot>
				</view>
				<view class="flex-1 flex align-end">
					<view class="border rounded p-2 flex-1" style="background-color: #FFF7F0;border-color: #FFE3CB;">
						<text class="font-md text-danger line-h">￥{{ detail.price }}</text><text class="font-sm text-through line-h text-danger ml-1">￥{{ detail.t_price }}</text>
						<text class="font-md text-danger line-h mx-1">|</text>
						<text class="font text-danger line-h">1348 人</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="f-divider"></view>
		<tab :current="tabIndex" :tabs="tabBars" @change="clickTab"></tab> 
		
		<!-- 目录 -->
		<view class="py-3 animate__animated animate__fadeIn animate__fast" v-if="tabIndex == 0">
			<view class="tip">已更新 10 篇 共 10 篇</view>
			<menu-item v-for="(item,index) in list" :key="index" :index="index" @click="openBook(item)">{{ item.title }}</menu-item>
		</view>
		<!-- 介绍 -->
		<view class="p-2 animate__animated animate__fadeIn animate__fast" v-else>
			<mp-html :content="detail.content" lazy-load>加载中...</mp-html>
		</view>
		
		<!-- 底部按钮 -->
		<view style="height: 55px;"></view>
		<view class="fixed-bottom bg-white px-3 border-top flex align-center border-light-secondary" style="height: 55px;">
			<main-button b-class="flex-1">立即订购</main-button>
		</view>
	</view>
</template>

<script>
	import tab from '@/components/common/tab';
	import mainButton from '@/components/common/main-button.vue';
	import menuItem from '@/components/common/menu-item.vue';
	import mpHtml from '@/components/common/mp-html/mp-html.vue';
	import demo from './demo.js';
	export default {
		components: {
			tab,
			mainButton,
			menuItem,
			mpHtml
		},
		data() {
			return {
				detail:{
					cover:"https://cdn.colorhub.me/4CRL61UxJSbP7wvP8kxYhXd7CZ_HNCU1L_cqb79ee3Q/auto/280/0/ce/0/bG9jYWw6Ly8vZDgv/ZjQvYWNjZWNkYjZj/MGJhMzNkNzEyZjQ5/MzMzNjMxN2YzZjU0/ZTk4ZDhmNC5qcGVn.jpg",
					title:"uni-app实战视频点播app小程序",
					desc:"一句话推荐",
					content:'',
					price:100,
					t_price:299
				},
				tabBars:[{
					name:"目录",
				},{
					name:"介绍",
				}],
				tabIndex:0,
				list:[],
			}
		},
		onLoad() {
			this.detail.content = demo.content
			this.list = demo.list
		},
		methods: {
			clickTab(tabI){
				this.tabIndex = tabI
			},
			openBook(item){
				uni.navigateTo({
					url: '../book/book',
				});
			}
		}
	}
</script>

<style>

</style>
