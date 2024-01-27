<template>
	<view style="overflow-x: hidden;">
		<image :src="detail.cover" style="width:100%;height: 420rpx;margin-bottom: -14rpx;" class="bg-light" ></image>
		<!-- 资料 -->
		<tab :current="tabIndex" :tabs="tabBars" @change="clickTab"></tab> 
		
		<!-- 目录 -->
		<view class="py-3 animate__animated animate__fadeIn animate__fast" v-if="tabIndex == 1">
			<view class="tip">已更新 10 篇 共 10 篇</view>
			<menu-item v-for="(item,index) in list" :key="index" :index="index" @click="openPlay(item)">{{ item.title }}
				<view name="extra">
					<text class="border font-small text-danger border-danger px-1 rounded">{{ item.type | formatType }}</text>
				</view>
			</menu-item>
		</view>
		<!-- 介绍 -->
		<view class="animate__animated animate__fadeIn animate__fast" v-else>
			<view class="flex flex-column p-3">
				<text class="mb-1" style="font-size: 38rpx;line-height: 1.5;">{{detail.title}}</text>
				<text class="font-sm text-light-muted">1348 学过</text>
				<view class="flex align-end mt-2">
					<text class="font-lg text-danger line-h">￥{{ detail.price }}</text><text class="font-sm text-through line-h text-light-muted ml-1">￥{{ detail.t_price }}</text>
				</view>
			</view> 
			<view class="f-divider"></view>
			<uni-card title="课程介绍" body-style="padding: 0!important;" isFull>
				<mp-html :content="detail.content" lazy-load>
					<view class="flex align-center justify-center py-3 text-muted">加载中...</view>
				</mp-html>
			</uni-card>
		</view>
		
		<!-- 底部按钮 -->
		<view style="height: 55px;"></view>
		<view class="fixed-bottom bg-white px-3 border-top flex align-center border-light-secondary" style="height: 55px;">
			<main-button b-class="flex-1">
				<text class="font-md">立即订购 ￥{{ detail.price }}</text>
			</main-button>
		</view>
	</view>
</template>

<script>
	import tab from '@/components/common/tab';
	import uniCard from '@/components/uni-ui/uni-card/uni-card.vue';
	import mainButton from '@/components/common/main-button.vue';
	import menuItem from '@/components/common/menu-item.vue';
	import mpHtml from '@/components/common/mp-html/mp-html.vue';
	
	import demo from '../demo.js';
	export default {
		components: {
			uniCard,
			tab,
			mainButton,
			menuItem,
			mpHtml,
		},
		filters: {
			formatType(t) {
				let o = {
					media:"图文",
					audio:"音频",
					video:"视频"
				}
				return o[t];
			}
		},
		data() {
			return {
				detail:{
					cover:"https://edu-image.nosdn.127.net/022e32f5b9c34003b524c7d47913c27a.png",
					title:"VueCli 实战在线教育后台系统",
					desc:"一句话推荐",
					content:'',
					price:100,
					t_price:299
				},
				tabBars:[{
					name:"介绍",
				},{
					name:"目录",
				}],
				tabIndex:0,
				list:[],
			}
		},
		onLoad() {
			this.detail.content = demo.content
			this.list = demo.list
			
			uni.setNavigationBarTitle({
				title:this.detail.title
			})
		},
		methods: {
			clickTab(tabI){
				this.tabIndex = tabI
			},
			openPlay(item){
				uni.navigateTo({
					url:`/pages/course/detail/detail?type=${item.type}`
				});
			}
		}
	}
</script>

<style>

</style>
