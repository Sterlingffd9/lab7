// JavaScript Document


 //var columns= document.querySelectorAll('.columns');
 
 //for( var item in columns){
	 
	 //columns[item].onclick = function(){
		// this.style.visibility = "hidden";
		 
		// }
	 //}
	 
	$(document).ready(function(){ 
	 
$('.toggle').click(function(){
	$(this).next().fadeToggle('slow');
	$(this).next().text("hello there");
});	
}); 