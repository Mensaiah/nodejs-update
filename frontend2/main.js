$("#btn-email").click(function () {
    $('.form2').addClass('d-none')
   $('.form1').toggleClass("d-none") ; 
    
});

$("#btn-link").click(function () {
    $('.form1').addClass('d-none')
    $('.form2').toggleClass("d-none") ;
    
 });
 $('#back').click(function(){
    $('.form1').addClass('d-none')
    $('.form2').addClass('d-none')
 })
 
