<template>
	<view>
		<uni-list>
			<uni-list-item title="账户安全" @click="authJump('/pages/home/user-safe/user-safe')"></uni-list-item>
			<uni-list-item :showArrow="false" title="清除缓存">
				<text slot="right" class="font">26MB</text>
			</uni-list-item>
			<uni-list-item title="检查更新"></uni-list-item>
			<uni-list-item :showArrow="false" title="当前版本">
				<text slot="right" class="font">1.0.0</text>
			</uni-list-item>
		</uni-list>
		<view class="px-3 mt-5" v-if="user">
			<main-button bClass="mr-0 font-md" @click="handleLogout">退出登录</main-button>
		</view>
	</view>
</template>

<script>
	import uniList from '@/components/uni-ui/uni-list/uni-list.vue';
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue';
	import mainButton from '@/components/common/main-button.vue';
	import { mapState,mapActions } from 'vuex'
	export default {
		components: {
			uniList,
			uniListItem,
			mainButton
		},
		computed: {
			...mapState({
				user:state=>state.user,
			})
		},
		data() {
			return {
				
			}
		},
		methods: {
			...mapActions(['logout']),
			handleLogout(){
				this.logout()
			}
		}
	}
</script>

<style>

</style>
