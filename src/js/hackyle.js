// 注意：
// 1.不能直接在这里使用script标签引入jQuery
// 2.如果直接引入会产生递归效应
// 3.这里直接写JS代码即可，哪个HTML要调用本文件中的代码，则需要引入jQuery即可
// 4.要在引入本文件之前先引入jQuery：
// 	<script type="text/javascript" src="js/jquery-1.11.0.min.js"></script> 先引入jQuery
// 	<script type="text/javascript" src="js/hackyle.js"></script> 再引入需要的


$(function() {
	//双击重置输入框内的数据
	$("#searcheKeys").dblclick(function() {
		 $("#searcheKeys").val("");
	});
	$("#TechKeys").dblclick(function() {
		 $("#TechKeys").val("");
	});
	
	/*通用搜索*/
	CommonsSearch();

	/*技术社区搜索*/
	TechSearch();
});



/********************************************Search*****************************************************/
function CommonsSearch() {
	/*-------------------------------------------------------------------------------*/	
	// 使用百度进行搜索
	$("#baidu").click(function() {
		var keyWords = $("#searcheKeys").val();
		var origin = "https://www.baidu.com/s?ie=utf-8&wd=";
		window.open(origin+keyWords)
	});
	// 使用搜狗进行搜索
	$("#sogou").click(function() {
		var keyWords = $("#searcheKeys").val();
		var origin = "https://www.sogou.com/web?ie=utf-8&query=";
		window.open(origin+keyWords)
	});
	// 使用WinXin进行搜索
	$("#weixin").click(function() {
		var keyWords = $("#searcheKeys").val();
		var origin = "https://weixin.sogou.com/weixin?type=2&ie=utf8&query=";
		window.open(origin+keyWords)
	});
	// 使用Bing进行搜索
	$("#bing").click(function() {
		var keyWords = $("#searcheKeys").val();
		var origin = "https://cn.bing.com/search?q=";
		window.open(origin+keyWords)
	});
/*-------------------------------------------------------------------------------*/	
	// 使用Google进行搜索
	$("#google").click(function() {
		var keyWords = $("#searcheKeys").val();
		var origin = "https://www.google.com/search?q=";
		window.open(origin+keyWords)
	});
	// 使用duckduckgo进行搜索
	$("#duckduckgo").click(function() {
		var keyWords = $("#searcheKeys").val();
		var origin = "https://duckduckgo.com/?q=";
		window.open(origin+keyWords)
	});
	// 使用yandex进行搜索
	$("#yandex").click(function() {
		var keyWords = $("#searcheKeys").val();
		var origin = "https://yandex.com/search/?text=";
		window.open(origin+keyWords)
	});

/*-------------------------------------------------------------------------------*/	
	
	// 使用Magi进行搜索
	$("#magi").click(function() {
		var keyWords = $("#searcheKeys").val();
		var origin = "https://magi.com/search?q=";
		window.open(origin+keyWords)
	});
}
/********************************************Search*****************************************************/


/********************************************小时钟*****************************************************/
/* https://github.com/bradtraversy/50projects50days/tree/master/theme-clock */
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)
/********************************************小时钟*****************************************************/
