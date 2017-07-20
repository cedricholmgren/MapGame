// game.js

const moveSpeed = 3

// Create an instance of the engine.
// I'm specifying that the game be 800 pixels wide by 600 pixels tall.
// If no dimensions are specified the game will be fullscreen.
var game = new ex.Engine({
    width: 1100,
    height: 800
})
var bottom = game.getDrawHeight()

var blockSize = 40

function addBlock (x, y) {
    var block = new ex.Actor(x, y, blockSize, blockSize)
    block.color = ex.Color.Black
    block.collisionType = ex.CollisionType.fixed
    game.add(block)
}




var gameMap = [
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
    [ 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
]

gameMap.forEach(function (mapRow, row) {
    mapRow.forEach(function (wall, col) {
        if (wall === 1) {
            addBlock(col * blockSize, row * blockSize)
        } else {
            // blank, dont do anything
        }
    })
})


// var side = new ex.Actor(0, bottom - 630, 200, 210);
// side.color = ex.Color.Black
// side.collisionType = ex.CollisionType.fixed;
// game.add(side)

// var side = new ex.Actor(240, bottom - 635, 200, 222);
// side.color = ex.Color.Black
// side.collisionType = ex.CollisionType.fixed;
// game.add(side)

// var side = new ex.Actor(0, bottom - 780, 2200, 10);
// side.color = ex.Color.Black
// side.collisionType = ex.CollisionType.fixed;
// game.add(side)

// var side = new ex.Actor(0, bottom - 300, 2200, 10);
// side.color = ex.Color.Black
// side.collisionType = ex.CollisionType.fixed;
// game.add(side)

// var side = new ex.Actor(0, bottom - 410, 200, 150);
// side.color = ex.Color.Black
// side.collisionType = ex.CollisionType.fixed;
// game.add(side)

// var side = new ex.Actor(240, bottom - 410, 200, 150);
// side.color = ex.Color.Black
// side.collisionType = ex.CollisionType.fixed;
// game.add(side)

// var side = new ex.Actor(480, bottom - 540, 200, 250);
// side.color = ex.Color.Black
// side.collisionType = ex.CollisionType.fixed;
// game.add(side)

// var side = new ex.Actor(480, bottom - 300, 200, 150);
// side.color = ex.Color.Black
// side.collisionType = ex.CollisionType.fixed;
// game.add(side)


// var side = new ex.Actor(480, bottom - 780, 200, 150);
// side.color = ex.Color.Black
// side.collisionType = ex.CollisionType.fixed;
// game.add(side)

// var side = new ex.Actor(875, bottom - 700, 500, 300);
// side.color = ex.Color.Black
// side.collisionType = ex.CollisionType.fixed;
// game.add(side)

// var side = new ex.Actor(875, bottom - 345, 500, 300);
// side.color = ex.Color.Black
// side.collisionType = ex.CollisionType.fixed;
// game.add(side)












// var fart = new ex.Actor(50, game.getDrawHeight() - 400, 50, 125);
// fart.color = ex.Color.Green
// fart.collisionType = ex.CollisionType.Fixed;
// game.add(fart)

// game.input.keyboard.on("press", (evt) => {
//     switch (evt.key) {
        
//         case 87: // "w"
//             fart.pos.y = fart.pos.y - 30
        

//         break;
//         case 83: // "s"
//             fart.pos.y = fart.pos.y + 30
//         break;
//         default:
        
//     }
// })
// var sweat = new ex.Actor(750, game.getDrawHeight() - 400, 50, 125);
// sweat.color = ex.Color.Red
// sweat.collisionType = ex.CollisionType.Fixed;
// game.add(sweat)
// game.input.keyboard.on("press", (evt) =>{
//     switch (evt.key) {

//         case 79: // "o"
//             sweat.pos.y = sweat.pos.y - 30
//         break;
        
//         case 76: // "l"
//             sweat.pos.y = sweat.pos.y + 30}
// }
// )
// var poop = new ex.Actor(100, 300, 20, 20);
// poop.color = ex.Color.Yellow;
// poop.vel.setTo(100, 100)
// poop.collisionType = ex.CollisionType.Elastic;
// game.add(poop);
// poop.on('update', function () {
//     if (this.pos.y + (this.getHeight() / 2) > game.getDrawHeight()) {
//         this.vel.y *= -1.1
//     }
//     if (this.pos.y < (this.getHeight() / 2)) {
//         this.vel.y *= -1.1;
//     }

//     if (this.pos.x < 0) {
//         game.stop()
//         alert("left side lost, right side won")
//     }

//     if (this.pos.x > game.getDrawWidth()) {
//         game.stop()
//         alert("right side lost, left side won")
//     }
// }); 

// Start the engine to begin the game.
game.start();
