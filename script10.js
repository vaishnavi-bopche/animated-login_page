var login = document.querySelector('#next');
var signup = document.querySelector('#submit');
var wraper = document.querySelector('#wraper');
var l = document.querySelector('#login');
var s = document.querySelector('#signup');
login.addEventListener('click', function() {
    l.style.transform = "translateX(-100%)";
    s.style.transform = "translateX(-100%)";
})
signup.addEventListener('click', function() {
    l.style.transform = "translateX(0)";
    s.style.transform = "translateX(0)";
})