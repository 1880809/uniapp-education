<template>
	<view>
		<uni-list>
			<uni-list-item :showArrow="false" title="原密码">
				<input type="text" password v-model="form.opassword" placeholder="请输入原密码" slot="right" class="text-right font-md" placeholder-class="text-light-muted"/>
			</uni-list-item>
			<uni-list-item :showArrow="false" title="新密码">
				<input slot="right" type="text" password v-model="form.password" placeholder="请输入新密码" class="text-right font-md" placeholder-class="text-light-muted"/>
			</uni-list-item>
			<uni-list-item :showArrow="false" title="确认密码">
				<input slot="right" type="text" password v-model="form.repassword" placeholder="请输入确认密码" class="text-right font-md" placeholder-class="text-light-muted"/>
			</uni-list-item>
		</uni-list>
		<view class="mt-5 p-4">
			<main-button bClass="mr-0 font-md">保 存</main-button>
		</view>
	</view>
</template>

<script>
	import uniList from '@/components/uni-ui/uni-list/uni-list.vue';
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue';
	import mainButton from '@/components/common/main-button.vue';
	export default {
		components: {
			uniList,
			uniListItem,
			mainButton
		},
		data() {
			return {
				form:{
					opassword:"",
					password:"",
					repassword:"",
				}
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
