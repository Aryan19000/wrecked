class Polygon{
    constructor(x, y, r){
        var options={
            isStatic:false,
            restitution:1,
            friction:1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x, this.y, this.r, options);
        this.image=loadImage("polygon.png");
        World.add(world, this.body);
    }
    display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    fill(255, 0, 255);
    imageMode(CENTER)
    image(this.image, 0, 0, this.r*2, this.r*2);
    pop();
    }
}