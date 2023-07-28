var text= document.createElement('h1');
document.body.append(text)
var mousePos = null
var mousewithoutpage = null
var circle2 = document.querySelector('.circle')
var circle = null;
var box = document.querySelector('.box')
var check = false;
var widthBox = window.innerWidth*10/100;
console.log(widthBox);

circle2.addEventListener('click', function(){
    let subElement = document.createElement('div')
    subElement.setAttribute('id','circle');
    subElement.setAttribute('class','circle');
    this.circle = document.querySelector('#circle');
    box.append(subElement)
})

box.addEventListener('click', (event) => {
    console.dir(event);
    console.log(circle);
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