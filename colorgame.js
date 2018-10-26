var num=6;
var colors = generaterandomcolors(num);
//Generating a lots of color of 6 pairs
var h1=document.querySelector("h1");
var squares=document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var displayedcolor=document.getElementById("displayedcolor");
displayedcolor.textContent=pickedcolor;
var messageDisplay=document.querySelector("#message");
var resetButton=document.querySelector("#reset");
var mode=document.querySelectorAll(".mode");

init();
function init(){
   setupmode();
   setupsquares();
   reset();
}
function setupmode()
  {
    for(var i=0;i<mode.length;i++)
 {
    mode[i].addEventListener("click",function()
   { 
   mode[0].classList.remove("selected");
   mode[1].classList.remove("selected");
   this.classList.add("selected");
   this.textContent === "Easy"? num=3: num=6;
   reset();
   });
}
  }
function setupsquares()
{
    for(var i=0;i<squares.length;i++)
  { 
    squares[i].style.background=colors[i];
    squares[i].addEventListener("click",function()
    {
     var clickedcolor=this.style.background;
     if(clickedcolor === pickedcolor){
     messageDisplay.textContent="Correct !";
     resetButton.textContent="Play Again";
     changecolors(clickedcolor);
     h1.style.background=clickedcolor;
     }
     else{
     this.style.background="#232323";
     messageDisplay.textContent="Try Again";
     }
    });
   }
}
function reset()
{
    colors=generaterandomcolors(num);
    pickedcolor=pickcolor();
    displayedcolor.textContent=pickedcolor;
    resetButton.textContent = "New Colors";
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
        squares[i].style.display= "block";
        squares[i].style.background = colors[i];
        }
        else
        squares[i].style.display="none";
    }
    h1.style.background="steelblue";
    messageDisplay.textContent="";
}
resetButton.addEventListener("click",function(){
    reset();
});
function changecolors(color)
{
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.background=color;
    }
}
function pickcolor()
{
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}
function generaterandomcolors(num){
    //make an array
    //add num random colors to an array
    var arr=[];
    for(var i=0;i<num;i++)
    {
        arr.push(randomcolor());
        //get random colors and push into arr
    }
    return arr;
}
function randomcolor(){
    var r= Math.floor(Math.random()*256);
    var g= Math.floor(Math.random()*256);
    var b= Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}
