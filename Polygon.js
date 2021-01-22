class Polygon {
  constructor(x, y) {
    var options = {
      'density':1.5,
      'friction': 1.0,
      'restitution':0.5
    };
    this.image = loadImage("polygon.png");
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    
    World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;
    
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    
    imageMode(CENTER)
    image(this.image, 0, 0, this.width, this.height);
    pop();
  };
};