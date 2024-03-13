function changeColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

setInterval(function() {
    var myDiv = document.getElementById('myDiv');
    myDiv.style.width = (myDiv.offsetWidth + 15) + 'px';
    myDiv.style.height = (myDiv.offsetHeight + 15) + 'px';
    myDiv.style.backgroundColor = changeColor();
}, 1000);
