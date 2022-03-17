const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// sound effects
let scoreSFX = new Audio("https://archive.org/download/classiccoin/classiccoin.wav");
let gameOverSFX = new Audio("https://archive.org/download/smb_gameover/smb_gameover.wav");
let jumpSFX = new Audio("https://archive.org/download/jump_20210424/jump.wav");


function drawBackgroundLine() {
  ctx.beginPath();
  ctx.moveTo(0,400);
  ctx.lineTo(600,400);
  ctx.lineWidth = 1.9;
  ctx.strokeStyle = "black";
  ctx.stroke();
}

class Player {
constructor(x,y,size,color){
        this.x=x;
        this.y=y;
        this.size=size;
        this.color=color;
        this.jumpHeight = 12;
        // These three are for jump config.
        this.shouldJump = false;
        this.jumpCounter = 0;
  
    }
     
    jump() {
        if(this.shouldJump){
             this.jumpCounter++;
             if(this.jumpCounter < 15){
            // go up
            this.y -= this.jumpHeight; 
         }else if(this.jumpCounter > 14 && this.jumpCounter < 19){
             this.y += 0;
         }else if(this.jumpCounter < 33){
            //  come back down
            this.y += this.jumpHeight;
        }
        
        //  end cycle
        if(this.jumpCounter >= 32){
            this.shouldJump = false;
        }
    }
 }

  draw(){
        this.jump();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.size,this.size); 
    }
}

let player = new Player(150, 350, 50, "black");



function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,canvas.width,canvas.height);


// canvas Logic
   drawBackgroundLine();
// foreground 
   player.draw();
}

animate();
// event listeners
addEventListener("keydown", e => {
      if(e.code === "space bar"){
          if(!player.shouldJump){
              jumpSFX.play();
              player.jumpCounter = 0;
              player.shouldJump = true;
          }
      }

})
