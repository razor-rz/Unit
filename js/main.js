let modal = document.getElementById('getModal')
let btn = document.getElementById('btnVideo')

btn.onclick = function () {
    modal.style.display = 'block'
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}