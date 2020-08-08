var keys ={};
export default class launch{
constructor(){
 this.yoshi=0;
 this.rickroll=0;
 this.fpress=false;
 load=true;

 keys = {};
 keys[70] = false;
      window.onkeyup = function (e) {
      keys[e.keyCode] = false;
    }
    window.onkeydown = function (e) {
      keys[e.keyCode] = true;
    }
}
 var load=false;
 if(load==true){
    if(keys[70]==true){
     this.fpress=true;
    }
 }
let canv = document.getElementById("Screen");
  this.ctx = canv.getContext('2d');
 proccess(){
  if((keys[70]==false)&&(this.fpress==false)){
   if(this.yoshi<1){
    this.yoshi++;
    new Audio('./Super Mario World 2 Yoshi's Island Music Main Theme.mp3').play()
   }
   
this.ctx.fillStyle=("#000");
 this.ctx.fillText("Press F to...",50%,50%);
 }
 if(this.fpress==true){
this.ctx.fillStyle=("#000");
 this.ctx.fillText("get RICKROLLED!",50%,50%);
  if(this.rickroll<1){
   this.rickroll++;
  new Audio('./Rick Astley - Never Gonna Give You Up (Video).mp3').play()
 }
 }
  }
}
window.launch=launch;
