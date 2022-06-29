// navbar scrolling
$('.scroll').on('click', function(e){
  
  var tujuan = $(this).attr('href');
  var elemenTujuan = $(tujuan);

  $('html, body').animate({
      scrollTop: elemenTujuan.offset().top -73
  }, 1000, 'easeInOutExpo');

  e.preventDefault();

});

// portfolio parallax
$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  if( wScroll > $('.portfolio').offset().top -350 ){
      $('.portfolio .card').each(function(i) {
          setTimeout(function(){
              $('.portfolio .card').eq(i).addClass('muncul');
          }, 700 * (i+1));
      })
  }
});