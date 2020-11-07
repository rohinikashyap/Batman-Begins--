class Rain{
    constructor(x,y,r){
        var options={
        friction :0.1,
        restitution: 0.1,
        isStatic: false,
        density:9
        }
            this.r = r
            this.body  = Bodies.circle(x,y,r,options)
            World.add(world,this.body)
    }
    display(){
       push();
         translate(this.body.position.x, this.body.position.y);
         fill("blue")
         ellipseMode(RADIUS);
         ellipse(0,0,this.r,this.r)
       pop();
    }
    update(){
        if(this.body.position.y>600){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
    }
}