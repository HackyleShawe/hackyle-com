// 注意：
// 1.不能直接在这里使用script标签引入jQuery
// 2.如果直接引入会产生递归效应
// 3.这里直接写JS代码即可，哪个HTML要调用本文件中的代码，则需要引入jQuery即可
// 4.要在引入本文件之前先引入jQuery：
// 	<script type="text/javascript" src="js/jquery-1.11.0.min.js"></script> 先引入jQuery
// 	<script type="text/javascript" src="js/hackyle.js"></script> 再引入需要的


$(function() {
	//双击重置输入框内的数据
	$("#CommonKeys").dblclick(function() {
		 $("#CommonKeys").val("");
	});
	$("#TechKeys").dblclick(function() {
		 $("#TechKeys").val("");
	});
	
	/*通用搜索*/
	CommonsSearch();

	/*技术社区搜索*/
	TechSearch();
});



/********************************************Commons Search*****************************************************/
function CommonsSearch() {
	/*-------------------------------------------------------------------------------*/	
	// 使用百度进行搜索
	$("#baidu").click(function() {
		var keyWords = $("#CommonKeys").val();
		var origin = "https://www.baidu.com/s?ie=utf-8&wd=";
		window.open(origin+keyWords)
	});
	// 使用搜狗进行搜索
	$("#sogou").click(function() {
		var keyWords = $("#CommonKeys").val();
		var origin = "https://www.sogou.com/web?ie=utf-8&query=";
		window.open(origin+keyWords)
	});
	// 使用WinXin进行搜索
	$("#weixin").click(function() {
		var keyWords = $("#CommonKeys").val();
		var origin = "https://weixin.sogou.com/weixin?type=2&ie=utf8&query=";
		window.open(origin+keyWords)
	});
	// 使用Bing进行搜索
	$("#bing").click(function() {
		var keyWords = $("#CommonKeys").val();
		var origin = "https://cn.bing.com/search?q=";
		window.open(origin+keyWords)
	});
/*-------------------------------------------------------------------------------*/	
	// 使用Google进行搜索
	$("#google").click(function() {
		var keyWords = $("#CommonKeys").val();
		var origin = "https://www.google.com/search?q=";
		window.open(origin+keyWords)
	});
	// 使用duckduckgo进行搜索
	$("#duckduckgo").click(function() {
		var keyWords = $("#CommonKeys").val();
		var origin = "https://duckduckgo.com/?q=";
		window.open(origin+keyWords)
	});
	// 使用yandex进行搜索
	$("#yandex").click(function() {
		var keyWords = $("#CommonKeys").val();
		var origin = "https://yandex.com/search/?text=";
		window.open(origin+keyWords)
	});

/*-------------------------------------------------------------------------------*/	
	
	// 使用Magi进行搜索
	$("#magi").click(function() {
		var keyWords = $("#CommonKeys").val();
		var origin = "https://magi.com/search?q=";
		window.open(origin+keyWords)
	});
}
/*************************************************************************************************/



/*******************************************Tech Search******************************************************/
function TechSearch() {
	// 使用CSDN进行搜索
	$("#csdn").click(function() {
		var keyWords = $("#TechKeys").val();
		var origin = "https://so.csdn.net/so/search?q=";
		window.open(origin+keyWords)
	});

	// 使用JueJin进行搜索
	$("#JueJin").click(function() {
		var keyWords = $("#TechKeys").val();
		var origin = "https://juejin.cn/search?query=";
		window.open(origin+keyWords)
	});

	// 使用SegmentFault进行搜索
	$("#SegmentFault").click(function() {
		var keyWords = $("#TechKeys").val();
		var origin = "https://segmentfault.com/search?q=";
		window.open(origin+keyWords)
	});


	// 使用GeekBang进行搜索
	$("#GeekBang").click(function() {
		var keyWords = $("#TechKeys").val();
		var origin = "https://s.geekbang.org/search/c=0/k=";
		window.open(origin+keyWords+'/t=')
	});
	

/*-------------------------------------------------------------------------------*/	
	// 使用StackOverflow进行搜索
	$("#StackOverflow").click(function() {
		var keyWords = $("#TechKeys").val();
		var origin = "https://stackoverflow.com/questions/tagged/";
		window.open(origin+keyWords)
	});


/*-------------------------------------------------------------------------------*/	
	// 使用51CTO进行搜索
	$("#cto").click(function() {
		var keyWords = $("#TechKeys").val();
		var origin = "http://so.51cto.com/index.php?keywords=";
		window.open(origin+keyWords)
	});
}

/*************************************************************************************************/

