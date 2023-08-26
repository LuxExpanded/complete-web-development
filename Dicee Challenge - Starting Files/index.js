//die 1
var randomNumber1 = Math.ceil(Math.random() * 6);
//console.log(randomNumber1);
var randomImage1 = 'dice' + randomNumber1 + '.png';
var randomImageSource1 = './images/' + randomImage1;
document.querySelector(".img1").setAttribute('src', randomImageSource1);

//die 2
var randomNumber2 = Math.ceil(Math.random() * 6);
var randomImage2 = 'dice' + randomNumber2 + '.png';
var randomImageSource2 = './images/' + randomImage2;
document.querySelector(".img2").setAttribute('src', randomImageSource2);


//My Original Solution
// if (randomNumber1 === 1) {
//     document.querySelector(".dice .img1").setAttribute('src', './images/dice1.png');
// }
// else if (randomNumber1 === 2) {
//     document.querySelector(".dice .img1").setAttribute('src', './images/dice2.png');
// }
// else if (randomNumber1 === 3) {
//     document.querySelector(".dice .img1").setAttribute('src', './images/dice3.png');
// }
// else if (randomNumber1 === 4) {
//     document.querySelector(".dice .img1").setAttribute('src', './images/dice4.png');
// }
// else if (randomNumber1 === 5) {
//     document.querySelector(".dice .img1").setAttribute('src', './images/dice5.png');
// }
// else {
//     document.querySelector(".dice .img1").setAttribute('src', './images/dice6.png');
// }

// console.log(randomNumber2);

// if (randomNumber2 === 1) {
//     document.querySelector(".img2").setAttribute('src', './images/dice1.png');
// }
// else if (randomNumber2 === 2) {
//     document.querySelector(".img2").setAttribute('src', './images/dice2.png');
// }
// else if (randomNumber2 === 3) {
//     document.querySelector(".img2").setAttribute('src', './images/dice3.png');
// }
// else if (randomNumber2 === 4) {
//     document.querySelector(".img2").setAttribute('src', './images/dice4.png');
// }
// else if (randomNumber2 === 5) {
//     document.querySelector(".img2").setAttribute('src', './images/dice5.png');
// }
// else {
//     document.querySelector(".img2").setAttribute('src', './images/dice6.png');
// }




    if (randomNumber1 > randomNumber2) {
        document.querySelector('h1').innerHTML = '🏳️ Player 1 Wins! 🏳️';
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector('h1').innerHTML = ' 🏴 Player 2 Wins! 🏴';
    }
    else {
        document.querySelector('h1').innerHTML = '🏳️‍🌈 Draw!! 🏳️‍🌈';
    }

