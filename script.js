function showPopupMeun() {
    let popupMenu = document.getElementById('popupMenu')

    if (popupMenu.style.display === 'none'){
        popupMenu.style.display = 'block';
    } else {
        popupMenu.style.display = 'none';
    }
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

let slideIndex = 1;

function showSlides(n){
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length){
        slideIndex = 1;
    }

    if (n < 1){
        slideIndex = slides.length;
    }

    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

showSlides(slideIndex);

// ฟังก์ชันเปลี่ยนสไลด์อัตโนมัติ
function autoSlides() {
    plusSlides(1);
}

// ตั้งเวลาสำหรับเปลี่ยนสไลด์ทุกๆ 3 วินาที
setInterval(autoSlides, 3000);
