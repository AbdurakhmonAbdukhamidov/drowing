// function str(text){
//     let secondText = "";
//     for(let i=text.length-1;i>=0;i--){
//         secondText = secondText + text[i];
//     }
//      console.log(secondText);
//     if(text == secondText){
//         return "to`g`ri"
//     }else{
//         return "notog`ri"
//     }

// }
// console.log(str("kiyik"));
// a = true


// console.log(typeof a + "");

// const str = " Abdurahmon Abduhamidov "

// let result = str.trim()

// console.log(result);

// const input = document.querySelector('#floatingInput')
// const btn = document.querySelector('#send').addEventListener('click', ()=>{
//     console.log(input.value);
// })

// let input = +prompt("1-100 son kriting");

// function finde(input){
//    if(input%3==0&&input%5==0){
//     console.log('finbazz');
//    }else if(input%3==0){
//        console.log('bazz');
//    }else if(input%5==0){
//     console.log('fizz');
//    }else
//    console.log('not');
// }

// finde(input)
// z=5
// console.log(z);


// var z =6;


// let sec2 = document.querySelector('.sec2')
// let sec1 = document.querySelector('.sec1')

// console.dir(sec2.scrollTop)


// let section = document.querySelector('.sec2').addEventListener('click' , ()=>{
//     console.log(window.scrollY)
// })

// var element = document.querySelector('.sec2');

// var rect = element.getBoundingClientRect().top;

// console.log(rect);

// setInterval(() => {
//     let section = document.querySelector('.sec2');
//     if(window.scrollY > 900){
//         section.style['background'] = 'yellow'
//         console.log(1);
//     }
//     else{
//         section.style['background'] = 'red'
//     }
// }, 10);


// var line = document.querySelector('.line');

// setInterval(() => {
    
//     let left = parseInt(getComputedStyle(line).left)
    
//     console.log(left);
//     if(left < -500){
//         line.style.left= "0px"
//     }else{
//         let nextleft = left+(-300);
//         line.style.left = nextleft + 'px'
//     }
// }, 3000);

// const person = {
//     name: "Abdurahmon"
// }


// const secondPerson = {...person};

// secondPerson.name = "Abduhakim"
// console.log(secondPerson);
// console.log(person);

var text= document.createElement('h1');
document.body.append(text)
var mousePos = null
var mousewithoutpage = null
var circle = document.querySelector('.circle');
var box = document.querySelector('.box')
var check = false;
var widthBox = window.innerWidth*10/100;
console.log(widthBox);

box.addEventListener('click', (event) => {
    console.dir(event);
    let topElement = parseInt(window.getComputedStyle(circle).top);
    let  leftElement = parseInt(window.getComputedStyle(circle).left)
    mousePos = { x: event.layerX, y: event.layerY};
    mousewithoutpage ={ x: event.pageX, y: event.pageY} 
    // console.log(`(${mousePos.x}, ${mousePos.y})`);
    // console.log(topElement);
    // console.log(leftElement);
    if(check == false){
        if(mousewithoutpage.x >= leftElement && mousewithoutpage.x <= leftElement + parseInt(window.getComputedStyle(circle).width) || mousewithoutpage.y >= topElement && mousewithoutpage.y <= topElement + parseInt(window.getComputedStyle(circle).height) ){
            check = true;
            circle.style.top = e.layerY + "px"
            circle.style.left = e.layerX + "px"
        }
    }else{
        check = false;
    }

    
});

box.addEventListener('mousemove', (e) =>{
    
    if(check == true){ 
        circle.style.top = e.layerY + "px"
        circle.style.left = e.layerX + "px"
    }
})