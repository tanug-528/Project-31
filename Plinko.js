class Plinko{
    constructor(x,y,radius) {
var options = {
    isStatic: true
}
this.body = Bodies.circle(x,y,this.radius,options);
this.radius=10;
World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        ellipseMode(RADIUS);
        fill("white");
    }
}