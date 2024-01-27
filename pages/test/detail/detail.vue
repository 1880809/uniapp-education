<template>
	<view>

		<timer-box :expire="expire" @end="submit"></timer-box>

		<uni-card v-if="q" isFull :title="q.type | typeFilter" :extra="'第 '+ current +' 题'">
			<!-- 题目 -->
			<view class="my-2">
				<mp-html :content="q.title" lazy-load :tag-style="tagStyle">题目加载中...</mp-html>
			</view>
			<!-- 选项 -->
			<!-- 单选（单选|判断）、多选、填空、问答 -->
			<template v-if="q.type == 'radio' || q.type == 'trueOrfalse'">
				<test-option v-for="(c,i) in q.value.options" :key="i" :label="c" :checked="q.user_value == i" @click="handleDo(i)">{{ i | formatIndex }}</test-option>
			</template>
			<template v-else-if="q.type == 'checkbox'">
				<test-option v-for="(c,i) in q.value.options" :key="i" :label="c" :checked="i | formatChecked(q.user_value)" @click="handleDo(i)">{{ i | formatIndex }}</test-option>
			</template>
			<template v-else-if="q.type == 'answer'">
				<textarea v-model="q.user_value" placeholder="请输入答案..." class="border rounded p-2 font" placeholder-class="font" style="width: 660rpx;" @input="q.do = (q.user_value != '')"/>
			</template>
			<template v-else-if="q.type == 'completion'">
				<textarea v-for="(item,index) in q.user_value" v-model="q.user_value[index]" :key="index" placeholder="请输入答案..." class="border rounded p-2 font mb-2" placeholder-class="font" style="width: 660rpx;" @input="q.do = !!q.user_value.length"/>
				<main-button @click="addCompletion">添加答案</main-button>
			</template>
		</uni-card>
		<!-- 底部操作条 -->
		<bottom-action :total="total" :current="current" @on-page="changeCurrent" @submit="beforeSubmit"></bottom-action>

		

	</view>
</template>

<script>
	import bottomAction from '@/components/test/bottom-action.vue';
	import testOption from '@/components/test/test-option.vue';
	import uniCard from '@/components/uni-ui/uni-card/uni-card.vue';
	import mpHtml from '@/components/common/mp-html/mp-html';
	import mainButton from '@/components/common/main-button';
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup';
	import timerBox from '@/components/test/timer-box.vue';
	
	import demo from './demo.js';

	const typeOptions = {
		radio: "单选题",
		checkbox: "多选题",
		trueOrfalse: "判断题",
		answer: "问答题",
		completion: "填空题"
	}

	const en = {
		0: 'A',
		1: 'B',
		2: 'C',
		3: 'D',
		4: 'E',
		5: 'F',
		6: 'G'
	}

	export default {
		components: {
			uniCard,
			bottomAction,
			mpHtml,
			testOption,
			mainButton,
			uniPopup,
			timerBox
		},
		filters: {
			typeFilter(type) {
				return typeOptions[type]
			},
			formatIndex(i) {
				return en[i]
			},
			formatChecked(val,arr){
				return arr.includes(val)
			},
		},
		data() {
			return {
				total: 0,
				current: 0,
				list: [],
				tagStyle: {
					p: "font-size:14px"
				},
				expire:120,
				isback:false
			}
		},
		onLoad() {
			this.list = demo.map(item => {
				item.do = false
				return item
			})
			this.total = this.list.length
			if (this.total > 0) {
				this.current = 1
			}
		},
		onBackPress() {
			if(this.isback){
				return false
			}
			uni.showModal({
				content: '是否要放弃这场考试？',
				cancelText: '继续做题',
				confirmText: "放弃",
				success: (res) => {
					if (res.cancel) return
					this.isback = true
					uni.navigateBack({ delta: 1 });
				}
			});
			return true
		},
		computed: {
			q(){
				if (this.current == 0) {
					return false
				}
				let index = this.current - 1
				return this.list[index] || false
			},
			undo(){
				let arr = []
				this.list.forEach((item,index)=>{
					if(!item.do){
						arr.push((index + 1))
					}
				})
				return arr
			}
		},
		methods: {
			handleDo(val) {
				if (this.q.type == 'radio' || this.q.type == 'trueOrfalse') {
					this.q.user_value = val
				} else if(this.q.type == 'checkbox'){
					let i = this.q.user_value.findIndex(v=>v ==val)
					if(i !== -1){
						this.q.user_value.splice(i,1)
					} else {
						this.q.user_value.push(val)
					}
				}
				this.q.do = true
			},
			changeCurrent(e) {
				this.current = e
			},
			beforeSubmit(){
				if(this.undo.length > 0){
					return uni.showModal({
						content: `还有题目没有完成：第${this.undo.join(',')}题`,
						showCancel:false
					});
				}
				uni.showModal({
					content: '是否要交卷？',
					cancelText: '继续做题',
					confirmText: "现在交卷",
					success: (res) => {
						if (res.cancel) return
						this.submit()
					}
				});
			},
			submit() {
				console.log('提交试卷')
			},
			addCompletion(){
				this.q.user_value.push('')
			}
		}
	}
</script>

<style>

</style>
