<template>
	<view :class="btnClass" class="px-2 py-1 rounded text-white flex align-center justify-center" :hover-class="'bg-'+type+'-hover'" :hover-stay-time="150" @click="handleClick"><slot></slot></view>
</template>

<script>
	export default {
		props: {
			disabled: {
				type: Boolean,
				default: false
			},
			type:{
				type: String,
				default: 'main'
			},
			bClass:{
				type: String,
				default: ''
			}
		},
		computed: {
			btnClass() {
				let color = this.disabled ? `bg-${this.type}-disabled` : `bg-${this.type}`
				return color + ' ' + this.bClass
			},
			hoverBtnClass(){
				if(this.disabled) return 
				return `bg-${this.type}-hover`
			}
		},
		methods: {
			handleClick() {
				if(this.disabled) return 
				this.$emit('click')
			}
		},
	}
</script>

<style>
</style>
