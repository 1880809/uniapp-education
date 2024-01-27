<template>
	<view>
		<uni-list>
			<uni-list-item title="头像" @click="changeAvatar" :showArrow="false">
				<image slot="right" :src="form.avatar" style="width: 80rpx;height: 80rpx;border-radius:100%;" class="bg-hover-light" mode="widthFix"></image>
			</uni-list-item>
		<uni-list-item title="昵称" :showArrow="false">
			<input slot="right" type="text" v-model="form.nickname" placeholder="未填写" class="text-right font-md" placeholder-class="text-light-muted"/>
		</uni-list-item>
		<uni-list-item title="性别" @click="changeGender" :showArrow="false">
			<text slot="right" class="font-md">{{ form.gender | formatGender }}</text>
		</uni-list-item>
		<uni-list-item title="手机" :showArrow="false">
			<text slot="right" class="font-md">{{ form.mobile || '未绑定' }}</text>
		</uni-list-item>
		</uni-list>
		<view class="px-3 mt-5">
			<main-button bClass="mr-0 font-md">保 存</main-button>
		</view>
	</view>
</template>

<script>
	import uniList from '@/components/uni-ui/uni-list/uni-list.vue';
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue';
	import mainButton from '@/components/common/main-button.vue';
	let genderOptions = ["未知","男","女"]
	export default {
		components: {
			uniList,
			uniListItem,
			mainButton
		},
		filters: {
			formatGender(i) {
				return genderOptions[i];
			}
		},
		data() {
			return {
				genderOptions,
				form:{
					avatar:"",
					nickname:"summer",
					gender:1,
					mobile:""
				}
			}
		},
		methods: {
			changeAvatar(){
				uni.chooseImage({
					count:1,
					success: (res) => {
						this.form.avatar = res.tempFilePaths[0]
					}
				})
			},
			changeGender(){
				uni.showActionSheet({
					itemList: genderOptions,
					success: res => {
						this.form.gender = res.tapIndex
					},
				});
			}
		}
	}
</script>

<style>

</style>
