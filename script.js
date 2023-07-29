let box = document.querySelector('.box')
let squar = document.querySelector('.squar')
var check = false;
let shape;
let shapes = [];
let circle = document.querySelector('.circle')
let createElement;

box.addEventListener('click', function(event){
    this.createElement = document.createElement('div')
    this.createElement.setAttribute('id','box'+(shapes.length));
    this.createElement.setAttribute('class','box');
    this.createElement.style.top = "0px"
    this.createElement.style.left = "0px"
    this.createElement.style.position = 'absolute'
    squar.append(this.createElement)
    shapes.push(this.createElement);
})

squar.addEventListener('click', function(event){
    if(check==true){
       check=false
       shape=null
    }else{
        if(event.target.attributes.class.value != "squar"){
            shape = document.querySelector('#'+event.target.attributes.id.value);
            check = true;
       }else{
            shape = null
            check = false;
       }
    }   
});

squar.addEventListener('mousemove', (e) =>{
    if(check == true){ 
        shape.style.top = e.layerY + "px"
        shape.style.left = e.layerX + "px"
    }
})

circle.addEventListener('click', function(){
    this.createElement = document.createElement('div')
    this.createElement.setAttribute('id','circle'+(shapes.length));
    this.createElement.setAttribute('class','circle');
    this.createElement.style.top = "0px"
    this.createElement.style.left = "0px"
    this.createElement.style.position = 'absolute'
    squar.append(this.createElement)
    shapes.push(this.createElement);
})