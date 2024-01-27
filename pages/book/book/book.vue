<template>
	<view>
		<!-- 抽屉 -->
		<uni-drawer ref="showLeft" mode="left" :width="220" maskClick>
			<scroll-view scroll-y="true" style="height: 100vh;">
				<menu-item v-for="(item,index) in menus" :key="index" :index="index" :isfree="item.isfree" :extra="false" :active="activeIndex == index" @click="changeCurrent(index)">{{ item.title }}</menu-item>
			</scroll-view>
		</uni-drawer>
		<!-- 内容 -->
		<mp-html :content="content" lazy-load>
			<view class="flex align-center justify-center py-3 text-muted">
				加载中...
			</view>
		</mp-html>
		<!-- 底部 -->
		<bottom-action :current="current" :total="total" @on-page="handleOnPage" @open-menu="openMenu"></bottom-action>
	</view>
</template>

<script>
	import bottomAction from '@/components/book/bottom-action.vue';
	import uniDrawer from '@/components/uni-ui/uni-drawer/uni-drawer.vue';
	import menuItem from '@/components/common/menu-item.vue';
	import mpHtml from '@/components/common/mp-html/mp-html.vue';
	import demo from '../detail/demo.js';
	export default {
		components: {
			bottomAction,
			uniDrawer,
			menuItem,
			mpHtml
		},
		data() {
			return {
				current:0,
				menus:[],
				content:''
			}
		},
		onLoad() {
			this.menus = demo.list
			if(this.menus.length > 0){
				this.current = 1
				this.getContent()
			}
		},
		computed: {
			total() {
				return this.menus.length 
			},
			activeIndex(){
				return this.current - 1
			},
			item(){
				return this.menus[this.activeIndex] || {}
			}
		},
		methods: {
			getContent(){
				this.content = ''
				if(this.item){
					uni.setNavigationBarTitle({
						title:`${this.current}.${this.item.title}`
					})
				}
				// 请求数据
				setTimeout(()=>{
					this.content = demo.content
				},500)
			},
			handleOnPage(current){
				this.current = current
				this.getContent()
			},
			closeMenu() {
				this.$refs.showLeft.close()
			},
			openMenu(){
				this.$refs.showLeft.open()
			},
			changeCurrent(index){
				this.current = index + 1
				this.getContent()
				this.closeMenu()
			}
		}
	}
</script>

<style>

</style>
