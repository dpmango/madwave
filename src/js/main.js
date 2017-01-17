$(document).ready(function(){

 	// Prevent # errors
	$('[href="#"]').click(function (e) {
		e.preventDefault();
	});

	// smoth scroll
	$('a[href^="#section"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false;
	});

  // bootstrap tooltip
  $(function () {
    if ( $('[data-toggle="tooltip"]').length ){
      $('[data-toggle="tooltip"]').tooltip()
    }
  })

  // Prodcut tabs
  $('.product-tabs').on('click', 'a:not(.active)', function(e) {
    e.preventDefault();
		$(this).addClass('active').siblings().removeClass('active')
		.closest('.row').find('.product-tabs-content').removeClass('active').eq($(this).index()).addClass('active');
	});

  // Contact mobile toggles
  $('.shops-results-item').on('click', function(){
    $(this).toggleClass('active');
    $(this).find('.shops-results-item-toggle').toggleClass('active');
  });

  $('#shopsShowList').on('click', function(){
    $(this).addClass('active');
    $('#shopsShowMap').removeClass('active');
    $('.shops-results-scroll').addClass('active');
    $('.shops-results-map').removeClass('active');
  });

  $('#shopsShowMap').on('click', function(){
    $(this).addClass('active');
    $('#shopsShowList').removeClass('active');
    $('.shops-results-scroll').removeClass('active');
    $('.shops-results-map').addClass('active');
  });

  $('#shopsShowFilters').on('click', function(){
    $('.shops-mobile-filter').fadeIn();
  });

  $('#shopHideFilters').on('click', function(){
    $('.shops-mobile-filter').fadeOut();
  });

  // Product comments
  $('.product-testimonial-replies-toggle').on('click', function(){
    if ( $(this).text() == "Скрыть" ){
      $(this).text("Показать");
      $(this).parent().parent().find('.product-testimonial-author').fadeOut();
      $(this).parent().parent().find('.product-testimonial-date').fadeOut();
      $(this).parent().parent().find('.product-testimonial-content-type').fadeOut();
    } else {
      $(this).text("Скрыть");
      $(this).parent().parent().find('.product-testimonial-author').fadeIn();
      $(this).parent().parent().find('.product-testimonial-date').fadeIn();
      $(this).parent().parent().find('.product-testimonial-content-type').fadeIn();
    }

  });

  $('.delivery-wrapper').on('click', function(){
    $(this).toggleClass('active');
    $(this).find('.delivery-item-toggle').toggleClass('active');
    $(this).find('.delivery-content-hidden').toggleClass('active');
  });

});
