const dialog = document.getElementsByClassName("pin rongkam");
document.getElementsByClassName("pin rongkam").addEventListener("click", function(){
    dialog.showModal();
});
dialog.querySelector(".close-btn").addEventListener("click", function(){
    dialog.close();
});
dialog.querySelector(".goto-btn").addEventListener("click", function(){
    dialog.close();
    window.location.href = "mapsvg99.html";
});