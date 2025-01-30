let items = document.querySelectorAll('.slider .list .item');
let thumbnails = document.querySelectorAll('.thumbnail .item');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let countItem = items.length;
let itemActive = 0;

next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
let refreshInterval = setInterval(() => {
    next.click();
}, 3000)
function showSlider(){
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active')
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}
thumbnails.forEach((thumbnails, index) => {
    thumbnails.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
})

function initMap() {
    const markers = [
        {
            locationName: 'วัดพระธาตุหมื่นหิน',
            lat: 16.704439797998152,
            lng: 104.11661107583588,
            address: 'ตำบล กุดปลาค้าว,<br> อำเภอ เขาวง,<br> กาฬสินธุ์ 46160'
        },
        {
            locationName: 'น้ำตกตาดทอง',
            lat: 16.7610077,
            lng: 104.1210911,
            address: 'ตำบล กุดปลาค้าว,<br> อำเภอ เขาวง,<br> กาฬสินธุ์ 46160'
        },
        {
            locationName: 'วัดวังคำ',
            lat: 16.6500427,
            lng: 104.146502,
            address: 'ตำบล กุดปลาค้าว,<br> อำเภอ เขาวง,<br> กาฬสินธุ์ 46160'
        },
        {
            locationName: 'วัดโพนวิมาน',
            lat: 16.6903995,
            lng: 104.0145313,
            address: 'ตำบล กุดปลาค้าว,<br> อำเภอ เขาวง,<br> กาฬสินธุ์ 46160'
        },
        {
            locationName: 'อ่างเก็บน้ำลำพะยัง',
            lat: 16.6584533,
            lng: 104.1618448,
            address: 'ตำบล กุดปลาค้าว,<br> อำเภอ เขาวง,<br> กาฬสินธุ์ 46160'
        },
        {
            locationName: 'อุโมงค์ ผันน้ำลําพะยัง',
            lat: 16.6910023,
            lng: 104.1536968,
            address: 'ตำบล กุดปลาค้าว,<br> อำเภอ เขาวง,<br> กาฬสินธุ์ 46160'
        },
    ];

    const fehMarker = '';

    const centerMap = { lat: 16.7030008, lng: 104.1165053 };

    const mapOptions = {
        center: centerMap,
        zoom: 12,
        disableDefaultUI: true
    };

    const map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

    // Add markers to the map
    for(let i = 0; i < markers.length; i++){
        const marker = new google.maps.Marker({
            position: {lat: markers[i]['lat'], lng: markers[i]['lng'] },
            map: map
        })
    }
}
