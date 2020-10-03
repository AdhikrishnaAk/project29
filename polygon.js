class Polygon{
    constructor(x,y,r){
        this.body=Bodies.circle(x,y,35)
       this.radiu=35
       World.add(world,this.body)
    }
 display(){
    push()
    translate(this.body.position.x,this.body.position.y)
      
    ellipseMode(CENTER)
    fill("#F75F20")
  circle(0,0,35)
 
  pop() 

 }
     

}