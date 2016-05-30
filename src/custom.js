$(document).ready(function(){

	if(Cookies.get('visited') == 'true') {
      $('#message').text('Welcome back!');
    } else {
      $('#message').text('Welcome!');
    }

    Cookies.set('visited', 'true');

})