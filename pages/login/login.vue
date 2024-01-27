<template>
	<view>
		<view class="login-back" @click="back">
			<uni-icons type="arrowleft" size="20" color="#FFFFFF"></uni-icons>
		</view>
		<view style="height: 220rpx;background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);"></view>
		<view style="position: absolute;top: 200rpx;left: 0;right: 0;background-color: #FFFFFF;border-top-left-radius: 30rpx;border-top-right-radius: 30rpx;">
			<view class="login-box">
				<view class="flex">
					<text class="title">{{ type == 'login' ? '登 录':'注 册' }}</text>
				</view>
				<view class="login-form">
					<uni-icons type="person" size="20"></uni-icons>
					<input type="text" placeholder="请输入用户名" value="" class="rounded font-md" placeholder-style="color:#C4C7D2;"/>
				</view>
				<view class="login-form">
					<uni-icons type="locked" size="20"></uni-icons>
					<input type="text" password placeholder="请输入密码" value="" class="rounded font-md" placeholder-style="color:#C4C7D2;"/>
				</view>
				<view class="login-form" v-if="type == 'reg'">
					<uni-icons type="locked" size="20"></uni-icons>
					<input type="text" password placeholder="请输入确认密码" value="" class="rounded font-md" placeholder-style="color:#C4C7D2;"/>
				</view>
				
				
				<view hover-class="bg-main-hover " class="btn bg-main font-md rounded" @click="submit">
					{{ type == 'login' ? '登 录':'注 册' }}
				</view>
				
				<view class="flex justify-between align-center my-3">
					<text class="font text-light-muted py-3 text-main-disabled" @click="changeType">{{ type == 'login' ? '注册账号' : '去登录' }}</text>
					<text class="font text-light-muted py-3">忘记密码？</text>
				</view>
			</view>
			
			<view class="wechatlogin">
				<uni-icons type="weixin" size="25" color="#5CCC84"></uni-icons>
			</view>
			
			
			<checkbox-group class="flex align-center justify-center mt-3" @change="handleCheckboxChange">
			<label class="text-light-muted">
				<checkbox value="1" :checked="form.confirm" color="#5CCC84" style="transform:scale(0.7)" />已阅读并同意用户协议&隐私声明
			</label>
			</checkbox-group>
		</view>
		
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-ui/uni-icons/uni-icons.vue';
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				type:"login",
				form:{
					confirm:false
				}
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			changeType(t){
				this.type = this.type == 'login' ? 'reg' : 'login'
			},
			handleCheckboxChange(e){
				this.form.confirm = e.detail.value[0] ? true : false
			},
			submit(){
				uni.showLoading({
					title: '登录中...',
					mask: false
				});
				if(this.type == 'login'){
					this.$store.dispatch('login',{
						username:"summer",
						nickname:"帝莎编程",
						avatar:"",
						token:"sdasdjaslfaslzx3c5z1xc32zx123"
					}).then(res=>{
						uni.hideLoading()
						uni.showToast({
							title: '登录成功',
							icon: 'none'
						});
						uni.navigateBack({
							delta: 1
						});
					})
				}
			}
		}
	}
</script>

<style>
.login-back{
	position: fixed;top: 0;left: 0;width: 100rpx;height: 100rpx;display: flex;align-items: center;justify-content: center;color:#A9A5A0;
	z-index: 100;
	font-size: 13px;
}
.wechatlogin{
	display: flex;
	align-items: center;
	justify-content: center;
}
.wechatlogin .uni-icons{
	border: 1px solid #5CCC84;
	width: 47px;
	border-radius: 100%;
}
.login-box{
	padding: 60rpx 70rpx 0 70rpx;
	border-top-left-radius: 30rpx;
	border-top-right-radius: 30rpx;
	margin-top: -30rpx;
}
.login-box .title{
	margin-bottom: 50rpx;color: #2A3441;font-size: 22px;
}
.login-box .btn{
	height: 100rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #FFFFFF;
}
.login-form{
	position: relative;
	margin-bottom: 50rpx;
}
.login-form .uni-icons{
	position: absolute;left: 0;top: 0;width: 100rpx;height: 100rpx;display: flex;align-items: center;justify-content: center;color: #63625E;
}
.login-form input{
	height: 100rpx;padding-left: 100rpx;padding-right: 20rpx;background-color: #F5F5F5;
}
</style>
