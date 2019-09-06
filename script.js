const img = document.querySelector('img')

window.onclick = function() {
    if(img.getAttribute('src') === 'sun.jpg'){
        
        img.setAttribute('src','moon.jpg')
    } else {
        img.setAttribute('src','sun.jpg')
    }
}