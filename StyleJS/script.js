$(document).ready(function() {
	function change_language() {
		$(".row").css({ "display":"none" });
		$(".language").css({ "display":"block" });
	}

	function close_change_lan() {
		$(".row").css({ "display":"block" });
		$(".language").css({ "display":"none" });
	}

	let close = document.getElementById("close");
	close.addEventListener("click", close_change_lan);

	let btn = document.getElementById("alanguage");
	btn.addEventListener("click", change_language);

	// Карусель фотографий
	$(".owl-carousel").owlCarousel({
		margin: 10,
		loop: true,
		autoWidth: false,
		nav: true,
		responsive:{
			0:{
				items: 1,
				nav: true
			},
			800:{
				items:2,
				nav:true
			},
			1000:{
				items:4,
				nav:true,
				loop:true
			}
		}
	});
});