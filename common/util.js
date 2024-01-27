export default {
	// 数组置顶
	objToFirst(arr,index){
		if (index != 0) {
			arr.unshift(arr.splice(index,1)[0]);
		}
		return arr;
	},
	// 打开url
	/*
	{
		// webview,page,course
		type:"webview",
		url:""
	}
	*/
	open(e){
		switch (e.type){
			case 'webview':
			uni.navigateTo({
				url: '/pages/webview/webview?url='+encodeURIComponent(e.url),
			});
				break;
			case 'page':
			uni.navigateTo({
				url: `/pages/list/list?page_title=${e.page_title}`
			});
				break;
			case 'test':
			uni.navigateTo({
				url: '/pages/test/list/list'
			});
				break;
			case 'book':
			uni.navigateTo({
				url: '/pages/book/list/list'
			});
				break;
			case 'bbs':
			uni.navigateTo({
				url: '/pages/bbs/index/index'
			});
				break;
			case 'live':
			uni.navigateTo({
				url: '/pages/live/detail/detail'
			});
				break;
		}
	}
}