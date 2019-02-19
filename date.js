function date(){
var temp_date = new Date();
var day = temp_date.getDate();
var month = temp_date.getMonth()+1;
var year = temp_date.getYear()+1900;
var hours = temp_date.getHours();
var minutes = temp_date.getMinutes();
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
}

setInterval(date,1000);