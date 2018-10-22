var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

/*$("#login-button").click(function(event){
		 event.preventDefault();

	 $('form').fadeOut(500);
	 $('.wrapper').addClass('form-success');
});
