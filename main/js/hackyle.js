// 注意：
// 1.不能直接在这里使用script标签引入jQuery
// 2.如果直接引入会产生递归效应
// 3.这里直接写JS代码即可，哪个HTML要调用本文件中的代码，则需要引入jQuery即可
// 4.要在引入本文件之前先引入jQuery：
// 	<script type="text/javascript" src="js/jquery-1.11.0.min.js"></script> 先引入jQuery
// 	<script type="text/javascript" src="js/hackyle.js"></script> 再引入需要的


$(function() {
/*-------------------------------------------------------------------------------*/	
	// 使用百度进行搜索
	$("#baidu").click(function() {
		var keyWords = $("#keyWords").val();
		var origin = "https://www.baidu.com/s?ie=utf-8&wd=";
		window.open(origin+keyWords)
	});
	// 使用搜狗进行搜索
	$("#sogou").click(function() {
		var keyWords = $("#keyWords").val();
		var origin = "https://www.sogou.com/web?ie=utf-8&query=";
		window.open(origin+keyWords)
	});
	// 使用DogeDoge进行搜索
	$("#dogedoge").click(function() {
		var keyWords = $("#keyWords").val();
		var origin = "https://www.dogedoge.com/results?q=";
		window.open(origin+keyWords)
	});

/*-------------------------------------------------------------------------------*/	
	// 使用Google进行搜索
	$("#google").click(function() {
		var keyWords = $("#keyWords").val();
		var origin = "https://www.google.com/search?q=";
		window.open(origin+keyWords)
	});
	// 使用duckduckgo进行搜索
	$("#duckduckgo").click(function() {
		var keyWords = $("#keyWords").val();
		var origin = "https://duckduckgo.com/?q=";
		window.open(origin+keyWords)
	});
	// 使用yandex进行搜索
	$("#yandex").click(function() {
		var keyWords = $("#keyWords").val();
		var origin = "https://yandex.com/search/?text=";
		window.open(origin+keyWords)
	});

/*-------------------------------------------------------------------------------*/	
	// 使用Bing进行搜索
	$("#bing").click(function() {
		var keyWords = $("#keyWords").val();
		var origin = "https://cn.bing.com/search?q=";
		window.open(origin+keyWords)
	});
	// 使用Magi进行搜索
	$("#magi").click(function() {
		var keyWords = $("#keyWords").val();
		var origin = "https://magi.com/search?q=";
		window.open(origin+keyWords)
	});

	// 使用miji进行搜索
	$("#miji").click(function() {
		var keyWords = $("#keyWords").val();
		var origin = "https://mijisou.com/?q=";
		window.open(origin+keyWords)
	});
	// 使用lookao进行搜索
	$("#lookao").click(function() {
		var keyWords = $("#keyWords").val();
		var origin = "https://lookao.com/search?q=";
		window.open(origin+keyWords)
	});
});



