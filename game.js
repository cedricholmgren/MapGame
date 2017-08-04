// game.js

const moveSpeed = 3

const log = console.log

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
    block.addCollisionGroup('game')
    game.add(block)
}

function addRat (x, y) {
    var rat = new ex.Actor(x * blockSize, y * blockSize, actorSize, actorSize);
    rat.color = ex.Color.Red
    rat.collisionType = ex.CollisionType.fixed;
    rat.addCollisionGroup('game')
    game.add(rat)
}

function addDwarve (x, y) {
    var dwarve = new ex.Actor(x * blockSize, y * blockSize, actorSize, actorSize);
    dwarve.color = ex.Color.Blue
    dwarve.collisionType = ex.CollisionType.passive;
    dwarve.addCollisionGroup('game')
    game.add(dwarve)
}
function addChest (x, y) {
    var chest = new ex.Actor(x * blockSize, y * blockSize, actorSize, actorSize);
    chest.color = ex.Color.Yellow
    chest.collisionType = ex.CollisionType.fixed;
    chest.addCollisionGroup('game')
    game.add(chest)
}
function addOrc (x, y) {
    var orc = new ex.Actor(x * blockSize, y * blockSize, actorSize, actorSize);
    orc.color = ex.Color.Gray
    orc.collisionType = ex.CollisionType.fixed;
    orc.health = 10
    orc.addCollisionGroup('game')

    window.orc = orc // for debugging purposes
    
    orc.onCollidesWith('game', function (rat) {
        console.log('onCollidesWith')
        console.log(rat)
        // game.remove(rat)
        // orc.health = orc.health - 1
        // if (orc.health <= 0) {
        //     this.emit("death");
        //     this.onDeath();
        //     alert('you are dead')
        //     return;
        // }
    })
    
    game.input.keyboard.on("press", (evt) => {
        console.log(evt.key)
        switch (evt.key) {
            case ex.Input.Keys.W:
                orc.vel.y = -50
                break;
            case ex.Input.Keys.S:
                orc.vel.y = 50
                break;
            case ex.Input.Keys.A:
                orc.vel.x = -50
                break;
            case ex.Input.Keys.D:
                orc.vel.x = 50
                break;
            default:
        }
    })
    game.input.keyboard.on("release", (evt) => {
        switch (evt.key) {
            case ex.Input.Keys.W:
            case ex.Input.Keys.S:
                orc.vel.y = 0
                break;
            case ex.Input.Keys.A:
            case ex.Input.Keys.D:
                orc.vel.x = 0
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
