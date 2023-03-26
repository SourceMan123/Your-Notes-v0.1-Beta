// openning menu
document.addEventListener("click", function(elem) {
    let fullScreenDiv = document.getElementById('full-screen-div');
    if (elem.target.id != 'opening-menu' && elem.target.id != 'menu-button') {
        fullScreenDiv.style.display = 'none';
    } else if (elem.target.id == 'menu-button') {
        fullScreenDiv.style.display = (fullScreenDiv.style.display != 'block') ? 'block' : 'none';
    }
})
