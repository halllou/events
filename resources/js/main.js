var flkty = new Flickity( '.main-gallery', {
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  prevNextButtons: false,
  autoPlay: 5000
});


/* Menu collapse */

  $(document).ready(function(){
	// class of the button in brackets
   $(".dropbtn").click(function(){
	   // inside the function here the class of the content to show then css to change
	   // you can also add other functions but we'll go through in next meet
       $(".dropdown-content").css("display","block");
   });

});

</script>

<style type="text/css">
/* class to be hidden in css */
.dropdown-content
{
display:none;
}
</style>
