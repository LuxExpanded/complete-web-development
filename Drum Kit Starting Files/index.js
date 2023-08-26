var drums = document.getElementsByClassName('drum');
for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener('click', handleClick);
}
function handleClick() {
    alert("Ooh!! Click me again Daddy!")
}