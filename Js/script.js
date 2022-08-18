const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


bar.addEventListener('click', () => {
    nav.style.right = "0px";
});

close.addEventListener('click', () => {
    nav.style.right = '-300px';
});



