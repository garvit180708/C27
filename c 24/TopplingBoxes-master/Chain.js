class Chain{
    constructor(bodyA,bodyB)
    {
          var options = {
          bodyA:bodyA,
          bodyB:bodyB,
          length :10,
          stiffness : 0.04

          }
 
          this.chain1 = Constraint.create(options)
          World.add(world,this.chain1)
    }

    display()
    {
     
        var pointA = this.chain1.bodyA.position
        var pointB = this.chain1.bodyB.position
        strokeWeight (4)
        fill ("black")
        line (pointA.x,pointA.y,pointB.x,pointB.y)


}

}

