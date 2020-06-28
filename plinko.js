class Plinko{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x,y,10,options);
        this.width = 20;
        this.height = 20;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("orange");
        ellipse(pos.x,pos.y,this.width,this.height);
    }
}