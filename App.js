/* Global variables */
const alphabet = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let arrOfColor=[];
let stringOfColor ="";
let body = document.body;
let pantoneOne = document.querySelector('#pantone-1');
let pantoneTwo = document.querySelector('#pantone-2');
let pantoneThree = document.querySelector('#pantone-3');
let btn = document.querySelector('.generate-btn-text')
let colorCodeOne = document.querySelector('#code-color-1');
let colorCodeTwo = document.querySelector('#code-color-2');
let colorCodeThree = document.querySelector('#code-color-3');
let iconBg = document.querySelector('.icon-container');

// colorPalette object
let colorPalette = {
    woody: {
        backgroundColor: '#235952',
        buttonColor: '#c81912',
        secondBgColor: '#5B270B'
    },
    retro: {
        backgroundColor: '#f1e7b6',
        buttonColor: '#fe346e',
        secondBgColor: '#00bdaa'
    },
    blackOrange: {
        backgroundColor: '#1a1c20',
        buttonColor: '#da9ff9',
        secondBgColor: '#fc8621'
    },
    pastel: {
        backgroundColor: '#cdc733',
        buttonColor: '#f25287',
        secondBgColor: '#9fd8df'
    },
    pinkLemonad: {
        backgroundColor: '#EE91BC',
        buttonColor: '#EFB960',
        secondBgColor: '#A8DF65'
    },
    sunset: {
        backgroundColor: '#eeaf61',
        buttonColor: '#ee5d6c',
        secondBgColor: '#6a0d83'
    }
};

/* 
    A random color generator function
    > generate random number from 0-16 using Math.floor() and Math.random()

*/
function randomColorCode(id,gg){
    for(let i=0; i < 6; i++){
        arrOfColor[i]= alphabet[Math.floor(Math.random()*16)]; 
        stringOfColor = arrOfColor.join("");     
    } 

    document.getElementById(id).style.backgroundColor = `#`+ stringOfColor;
    document.getElementById(gg).textContent = `#`+stringOfColor;
};

function overlayOn(){
    document.getElementById("gen-color-overlay").style.display = "block";
}
function off() {
    document.getElementById("gen-color-overlay").style.display = "none";
  }

/*
    This is a copy color code function
*/
function copyColorCode(target){
    let codeColor = document.getElementById(target);
    codeColor.select();
    codeColor.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + codeColor.innerHTML);

}
/*
    A color change function takes 3 parameter 
    > it changes background color of the body,3 pantones, and icon container.
    > it changes color code text to match the color
    > it also changes button text color
*/
function changeColor(bgColor,btnColor,secondBg){
    body.style.backgroundColor = bgColor;
    pantoneOne.style.backgroundColor = bgColor;
    pantoneTwo.style.backgroundColor = secondBg;
    pantoneThree.style.backgroundColor = btnColor;
    
    btn.style.color= btnColor;

    colorCodeOne.textContent = bgColor;
    colorCodeTwo.textContent = secondBg;
    colorCodeThree.textContent = btnColor;

    iconBg.style.backgroundColor = secondBg; 
}

//functions with ES6 destructuring assignment
//for when a user click of those color provided palette 
const woody = ({woody: {backgroundColor,buttonColor,secondBgColor}}) => {
    changeColor(backgroundColor,buttonColor,secondBgColor);
}
const retro = ({retro: {backgroundColor,buttonColor,secondBgColor}}) => {
    changeColor(backgroundColor,buttonColor,secondBgColor);
}
const blackOrange = ({blackOrange: {backgroundColor,buttonColor,secondBgColor}}) => {
    changeColor(backgroundColor,buttonColor,secondBgColor);
}
const pastel = ({pastel: {backgroundColor,buttonColor,secondBgColor}}) => {
    changeColor(backgroundColor,buttonColor,secondBgColor);
}
const pinkLemonad = ({pinkLemonad: {backgroundColor,buttonColor,secondBgColor}}) => {
    changeColor(backgroundColor,buttonColor,secondBgColor);
}
const sunset = ({sunset: {backgroundColor,buttonColor,secondBgColor}}) => {
    changeColor(backgroundColor,buttonColor,secondBgColor);
}

