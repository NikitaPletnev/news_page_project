$(document).ready(function(){
	//Логика кнопки всплывающего меню
	$('#menu_button').on('click',function(){
        if($('#menu_button').hasClass('done')){
        	//Изменение стилей ключевых элементов
        	$('#menu-container').css({'display':'none'});
		    $('#header').css({'height':'100px'});
		    $('#weather').css({'visibility':'visible'});
		    $('body').css({'position':'static','overflow':'visible'});
		    //Добавление класса для отслеживания срабатывания кнопки
		    $('#menu_button').removeClass('done');
        }else{
        	//Изменение стилей ключевых элементов
        	$('#menu-container').css({'display':'block'});
		    $('#header').css({'height':'50px','overflow':'hidden'});
		    $('#weather').css({'visibility':'hidden'});
		    $('body').css({'position':'fixed','overflow':'hidden'});
		    //Удаление класса для отслеживания срабатывания кнопки
            $('#menu_button').addClass('done');
        }	
	});
});