// game.js

const moveSpeed = 3

// Create an instance of the engine.
// I'm specifying that the game be 800 pixels wide by 600 pixels tall.
// If no dimensions are specified the game will be fullscreen.
var game = new ex.Engine({
    width: 1200,
    height: 800
})
var bottom = game.getDrawHeight()

var actorSize = 30

var blockSize = 45

function addBlock (x, y) {
    var block = new ex.Actor(x * blockSize, y * blockSize, blockSize, blockSize)
    block.color = ex.Color.Black
    block.collisionType = ex.CollisionType.fixed
    game.add(block)
}

function addRat (x, y) {
    var rat = new ex.Actor(x * blockSize, y * blockSize, actorSize, actorSize);
    rat.color = ex.Color.Red
    rat.CollisionType = ex.CollisionType.passive;
    // rat.addCollisionGroup('rat')
    game.add(rat)
}

function addDwarve (x, y) {
    var dwarve = new ex.Actor(x * blockSize, y * blockSize, actorSize, actorSize);
    dwarve.color = ex.Color.Blue
    dwarve.CollisionType = ex.CollisionType.passive;
    game.add(dwarve)
}
function addChest (x, y) {
    var chest = new ex.Actor(x * blockSize, y * blockSize, actorSize, actorSize);
    chest.color = ex.Color.Yellow
    chest.CollisionType = ex.CollisionType.fixed;
    game.add(chest)
}
function addOrc (x, y) {
    var orc = new ex.Actor(x * blockSize, y * blockSize, actorSize, actorSize);
    orc.color = ex.Color.Black
    orc.CollisionType = ex.CollisionType.passive;
    orc.health = 10
    
    orc.onCollidesWith(function (rat) {
        game.remove(rat)
        orc.health = orc.health - 1
        if (orc.health <= 0) {
            alert('you are dead')
        }
    })
    
    game.input.keyboard.on("hold", (evt) => {
        switch (evt.key) {
            case ex.Input.Keys.W:
                orc.pos.y = orc.pos.y - 3    
            break;
            case ex.Input.Keys.S:
                orc.pos.y = orc.pos.y + 3
            break;
            case ex.Input.Keys.A:
                orc.pos.x = orc.pos.x - 3    
            break;
            case ex.Input.Keys.D:
                orc.pos.x = orc.pos.x + 3
            break;
            default:
        }
    })


    game.add(orc)


}
var gameMap = [
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 0, 0, 0, 0, 2, 1, 4, 2, 0, 0, 0, 1, 0, 0, 0, 0, 2, 1, 4, 0, 0, 2, 0, 0, 0, 1 ],
    [ 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1 ],
    [ 1, 0, 0, 0, 1, 0, 1, 4, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1 ],
    [ 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1 ],
    [ 1, 0, 0, 0, 1, 0, 2, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1 ],
    [ 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1 ],
    [ 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1 ],
    [ 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1 ],
    [ 1, 5, 0, 0, 0, 2, 1, 0, 2, 0, 1, 0, 2, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 1 ],
    [ 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1 ],
    [ 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1 ],
    [ 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1 ],
    [ 1, 0, 0, 0, 1, 0, 2, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1 ],
    [ 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1 ],
    [ 1, 0, 0, 0, 1, 0, 1, 4, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1 ],
    [ 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1 ],
    [ 1, 0, 0, 0, 0, 2, 1, 4, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
]

gameMap.forEach(function (mapRow, row) {
    mapRow.forEach(function (wall, col) {
        if (wall === 1) {
            addBlock(col, row)
        } else if (wall === 2) {
            addRat(col, row)
        }
        else if (wall === 3) {
            addDwarve(col, row)
        }         
 else if (wall === 4) {
            addChest(col, row)
        }         
 else if (wall === 5) {
     addOrc(col, row)
 }
})


})


// addRat(1, 1)
// addRat(2, 1)
// addRat(3, 1)

    


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
