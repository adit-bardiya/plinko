class Particle{
    constructor(x,y){
        var options = {
            isStatic:false,
            density: 0.2,
            restitution: 0.1,
            friction: 0.1
        }
        this.body = Bodies.circle(x,y,10,options);
        this.width = 20;
        this.height = 20;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill(random(255,0),random(255,0),random(255,0));
        ellipse(pos.x,pos.y,this.width,this.height);
    }
}