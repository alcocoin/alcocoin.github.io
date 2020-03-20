window.onload = function() {
    var butt = document.getElementById("butt");
    var peremenia = document.getElementById("text");
    var balance = 0;
    butt.onmousedown = function() {
       butt.style.width = "310px";
       butt.style.height = "310px";
       butt.style.left = "205px";
       butt.style.top = "205px";
    }
    butt.onmouseup = function() {
       butt.style.width = "360px";
       butt.style.height = "360px";
       butt.style.left = "180px";
       butt.style.top = "180px";
    }
    butt.onclick = function() {
       balance++;
       peremenia.innerHTML = balance;
    }
};