export default function launch(){
constructor(){
 keys = {};
    keys[70] = false;
      window.onkeyup = function (e) {
      keys[e.keyCode] = false;
    }
    window.onkeydown = function (e) {
      keys[e.keyCode] = true;
this.fpress=false;
    }}
    if(keys[70]==true){
    }
let canv = document.getElementById("Screen");
  this.ctx = canv.getContext('2d');
  if((keys[70]==false)&&(this.fpress==false)){
this.ctx.fillStyle=("#000");
 this.ctx.fillText("Press F to...",50%,50%);
 }
 if(this.fpress==true){
this.ctx.fillStyle=("#000");
 this.ctx.fillText("get RICKROLLED!",50%,50%);
 }
}
