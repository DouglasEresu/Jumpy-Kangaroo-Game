window.addEventListener("load", function(){
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    

    
    canvas.height = 600;
    canvas.width = 1105;

const gravity = 1.5

    class Player{
constructor() {
    this.speed = 10
    this.position = {
        x: 100,
        y: 100
    }
      this.velocity = {
          x: 0,
          y: 0
      }
      this.width = 50
      this.height = 50

}

draw() {
    ctx.fillStyle = "red"
   ctx.fillRect(this.position.x, this.position.y, this.width, this.height)

}
update() {
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    
    if (this.position.y + this.height + this.velocity.y <= canvas.height)
  this.velocity.y += gravity
    
}
    }

    class Platform {
    constructor({x, y}) {
        this.position ={
            x,
            y
        }
        this.width = 200
        this.height = 20
    }

    draw() {
        ctx.fillStyle = "black"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

}


let player = new Player()
    
    let platforms = [new Platform({
        x:1, y: 400
    }),new Platform({
        x: 200, y: 400
    }), new Platform({
        x: 500, y: 200
    }), new Platform({
        x: 700, y: 300   
    }), new Platform({
        x: 1030, y: 500
    }), new Platform({
        x: 1330, y: 100
    }), new Platform({
        x: 1530,  y: 100
    }), new Platform({
        x: 1930, y: 200
    }), new Platform({
        x: 2330, y: 300   
    }), new Platform({
        x: 2730, y: 500
    })
    ]



    const keys = {
        right: {
            pressed: false
        },
        left: {
            pressed: false
        }
    }





function init() {
    
     player = new Player()
    
     platforms = [new Platform({
        x:1, y: 400
    }),new Platform({
        x: 200, y: 400
    }), new Platform({
        x: 500, y: 200
    }), new Platform({
        x: 700, y: 300   
    }), new Platform({
        x: 1030, y: 500
    }), new Platform({
        x: 1330, y: 100
    }), new Platform({
        x: 1530,  y: 100
    }), new Platform({
        x: 1930, y: 200
    }), new Platform({
        x: 2330, y: 300   
    }), new Platform({
        x: 2730, y: 500
    })
    ]



    

}

    function animate() {
        requestAnimationFrame(animate)
        ctx.clearRect(0, 0, canvas.width, canvas.height )
    



        platforms.forEach(platform =>{
            platform.draw()
        })
        player.update()
        

        if (keys.right.pressed && player.position.x < 400) {
            player.velocity.x = player.speed
        }else if (keys.left.pressed && player.position.x > 100)
      {
            player.velocity.x = player.speed
        
        }else {player.velocity.x = 0
        
        if (keys.right.pressed){
            platforms.forEach(platform =>{
                platform.position.x -= player.speed      
            })
        }else if (keys.left.pressed) {
            platforms.forEach(platform =>{
                platform.position.x += player.speed
            platform.position.x += player.speed
        })
    }
}
        // Platform collision detection
        platforms.forEach(platform =>{
        if (player.position.y + player.height <= platform.position.y
             && player.position.y + player.height + player.velocity.y >=
            platform.position.y 
            &&player.position.x + player.width >= platform.position.x 
             && player.position.x <= platform.position.x + platform.width) {
            player.velocity.y = 0
        }
    })
    

// lose condition
if (player.position.y > canvas.height) {
    init()
}


    }



    animate()


    addEventListener('keydown', ({keyCode}) => {
      
        console.log(keyCode)
        switch (keyCode) {

            case 65:
                console.log('left')
                keys.left.pressed = true
                break

                

                    case 83:
                        console.log('down')
                        break 

                    

                            case 68:
                                console.log('right')
                                keys.right.pressed = true
                                break

                            

                                    case 87:
                                        console.log('up')
                                        player.velocity.y -= 10
                                        break
        
        
        }
    

           
        
        
    })

    addEventListener('keyup', ({keyCode}) => {
      
        console.log(keyCode)
        switch (keyCode) {

            case 65:
                console.log('left')
                keys.left.pressed = false
                break

                

                    case 83:
                        console.log('down')
                        break 

                    

                            case 68:
                                console.log('right')
                                keys.right.pressed = false
                                break

                            

                                    case 87:
                                        console.log('up')
                                        player.velocity.y -= 15
                                        break
        
        
        }
    

                
        
    
        
    })

})