var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
});

function openNav() {

	var x = document.getElementById("navigation");

	if (x.className === "navigation") {
		x.className += " menujs";
		document.getElementById("threeline-icon").innerHTML = "&Cross;";

	} else {
		x.className = "navigation";
		document.getElementById("threeline-icon").innerHTML = "&#9776;";
		
	}



}