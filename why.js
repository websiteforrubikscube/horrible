var keys ={};
export default class launch{
constructor(){
 this.yoshi=0;
 this.rickroll=0;
 this.fpress=false;
 

 keys = {};
 keys[70] = false;
      window.onkeyup = function (e) {
      keys[e.keyCode] = false;
    }
    window.onkeydown = function (e) {
      keys[e.keyCode] = true;
    }
}
 start(){
 let canv = document.getElementById("Screen");
  this.ctx = canv.getContext('2d');
  
 }
 
 proccess(){
    if(keys[70]==true){
     this.fpress=true;
    }
  if((keys[70]==false)&&(this.fpress==false)){
   if(this.yoshi<1){
    this.yoshi++;
    new Audio('/jump.mp3').play()
    //('/Super Mario World 2 Yoshi's Island Music Main Theme.mp3')
              }
   }
   
this.ctx.fillStyle=("#000");
 this.ctx.fillText("Press F to...",50%,50%);
 if(this.fpress==true){
this.ctx.fillStyle=("#000");
 this.ctx.fillText("get RICKROLLED!",50%,50%);
  if(this.rickroll<1){
   this.rickroll++;
  new Audio('/Rick Astley - Never Gonna Give You Up (Video).mp3').play()
 }
 }
  }
}
window.launch=launch;

}
 
 
