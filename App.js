/* Global variables */
const alphabet = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let arrOfColor=[];
let stringOfColor ="";

/* 
    A random color generator function
    > generate random number from 0-16 using Math.floor() and Math.random()

*/
function randomColorCode(){
    for (let j=0; j<3; j++){
        for(let i=0; i < 6; i++){
            arrOfColor[i]= alphabet[Math.floor(Math.random()*16)]; 
            stringOfColor = arrOfColor.join("");
        }   
    }
}

function myFunction(target){
    let codeColor = document.getElementById(target);
    codeColor.select();
    codeColor.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + codeColor.innerHTML);

}


function changeElementColor(mycolor){
    let backgroundColor = mycolor.backgroundColor;
    let buttonColor = mycolor.buttonColor;
    let color = mycolor.color;

    document.body.style.backgroundColor = backgroundColor;

    document.querySelector('#pantone-1').style.backgroundColor = backgroundColor;
    document.querySelector('#pantone-2').style.backgroundColor = buttonColor;
    document.querySelector('#pantone-3').style.backgroundColor = color;

    document.querySelector('.generate-btn-text').style.color = buttonColor;
    // change textcontent of color code
    document.querySelector('#code-color-1').textContent = backgroundColor;
    document.querySelector('#code-color-2').textContent = buttonColor;
    document.querySelector('#code-color-3').textContent = color;

    document.querySelector('.icon-container').style.backgroundColor = color;

}

let colorPalette = {
    woody: {
        backgroundColor: '#235952',
        buttonColor: '#c81912',
        color: '#5B270B'
    },
    retro: {
        backgroundColor: '#f1e7b6',
        buttonColor: '#fe346e',
        color: '#00bdaa'
    },
    blackOrange: {
        backgroundColor: '#1a1c20',
        buttonColor: '#da9ff9',
        color: '#fc8621'
    },
    pastel: {
        backgroundColor: '#cdc733',
        buttonColor: '#f25287',
        color: '#9fd8df'
    },
    pinkLemonad: {
        backgroundColor: '#EE91BC',
        buttonColor: '#EFB960',
        color: '#A8DF65'
    },
    sunset: {
        backgroundColor: '#eeaf61',
        buttonColor: '#ee5d6c',
        color: '#6a0d83'
    }
}



let woody = document.querySelector('#color-set-1').addEventListener('click', function () {changeElementColor(colorPalette.woody)});
let retro = document.querySelector('#color-set-2').addEventListener('click', function() {changeElementColor(colorPalette.retro)});
let blackOrange = document.querySelector('#color-set-3').addEventListener('click', function() {changeElementColor(colorPalette.blackOrange)});
let pastel = document.querySelector('#color-set-4').addEventListener('click', function() {changeElementColor(colorPalette.pastel)});
let pinkLemonad = document.querySelector('#color-set-5').addEventListener('click', function() {changeElementColor(colorPalette.pinkLemonad)});
let sunset = document.querySelector('#color-set-6').addEventListener('click', function() {changeElementColor(colorPalette.sunset)});
