function smoothScroll(){
	document.getElementById("smoothScroll").addEventListener("mouseenter", function(event){
    event.preventDefault()
		console.log("hello");
		return false;
});
}



// $(document).on('click', 'a[href^="#"]', function (event) {
//
//     event.preventDefault();
//
//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 500);
// });
