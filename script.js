var text= document.createElement('h1');
document.body.append(text)
var mousePos = null
var mousewithoutpage = null
var circle2 = document.querySelector('.circle')
var box = document.querySelector('.box')
var check = false;
var shape;
var widthBox = window.innerWidth*10/100;
var shapes = [];
var reallyCircle = document.querySelector('.really_circle')
console.dir(Date.prototype.getMilliseconds);

circle2.addEventListener('click', function(event){
    console.log(event);
    this.circle = document.createElement('div')
    shapes.push(this.circle);
    this.circle.setAttribute('id','circle'+(shapes.length));
    this.circle.setAttribute('class','circle');
    this.circle.style.top = "0px"
    this.circle.style.left = "0px"
    this.circle.style.position = 'absolute'
    box.append(this.circle)
})

box.addEventListener('click', function(event){
   if(event.target.attributes.class.value != "box"){
      shape = document.querySelector('#'+event.target.attributes.id.value);
      console.log(shape);
      check == true;
   }else{
    shape = null
   }
    if(check == false){
            check = true;
            shape.style.top = event.layerY + "px"
            shape.style.left = event.layerX + "px"

    }else{
        check = false;
    }

   

    
});

box.addEventListener('mousemove', (e) =>{
    if(check == true){ 
        shape.style.top = e.layerY + "px"
        shape.style.left = e.layerX + "px"
    }
})

reallyCircle.addEventListener('click', function(){
    this.circle = document.createElement('div')
    shapes.push(this.circle);
    this.circle.setAttribute('id','really_circle'+(shapes.length));
    this.circle.setAttribute('class','really_circle');
    this.circle.style.top = "0px"
    this.circle.style.left = "0px"
    this.circle.style.position = 'absolute'
    box.append(this.circle)
})