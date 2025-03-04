class Monster{
    constructor(x, y, width, height, angle) {
        var options = {
            isStatic :true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image=loadImage("Monster-01.png")
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height)
        pop();
      }
  }