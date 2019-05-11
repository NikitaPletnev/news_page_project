function date(){
var temp_date = new Date();
var day = temp_date.getDate();
var month = temp_date.getMonth()+1;
var year = temp_date.getYear()+1900;
var hours = temp_date.getHours();
var minutes = temp_date.getMinutes();
var week_day = temp_date.getDay();
if (day < 10) {
day = "0" + day;
}
if (month <10) {
month = "0" + month;
}
if(minutes < 10){
minutes = "0" + minutes;
}

window.onload = function(){
document.getElementById('datetime').innerHTML = (hours + ":" + minutes + " "+ day + "." + month + "." + year );
}();

var weekArr = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'];
var monthArr = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
window.onload = function(){
	document.getElementById('small_date').innerHTML = ( day + ' ' + monthArr[month-1] + ',' + weekArr[week_day]);
}();

window.onload = function(){
	document.getElementById('small_time').innerHTML = ( hours + ':' + minutes)
}();


}

setInterval(date,1000);


