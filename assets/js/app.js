$(document).ready(function(){
    $("a").on('click', function(event){
      if (this.hash !==""){
        event.preventDefault();
  
        var hash = this.hash;
  
        $("html, body").animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
    }
  });
$(window).scroll(function(){
    if($("#menu").offset().top > 250) {
        $("#menu").addClass("bg-info");   
    } else{
        $("#menu").removeClass("bg-info");
    }
});

$('#title-quienesomos').click(function(){
  $('#body-quienesomos').slideToggle(700);
});

$('#title-destacados').click(function(){
  $('#body-destacados').slideToggle(700);
});

});