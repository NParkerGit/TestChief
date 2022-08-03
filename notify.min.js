Notify = function(text, callback, close_callback, style) {

	var time = '10000';
	var $container = $('#notifications');
	var icon = '<i class="fa fa-info-circle "></i>';
 
	if (typeof style == 'undefined' ) style = 'warning'
  
	var html = $('<div class="alert alert-' + style + '  hide">' + icon +  " " + text + '</div>');

	$container.prepend(html)
	html.removeClass('hide').hide().fadeIn('slow')

	function remove_notice() {
		html.stop().fadeOut('slow').remove()
	}
	
	var timer =  setInterval(remove_notice, time);

	$(html).hover(function(){
		clearInterval(timer);
	}, function(){
		timer = setInterval(remove_notice, time);
	});
	
	html.on('click', function () {
		clearInterval(timer)
		callback && callback()
		remove_notice()
	});
  
  
}