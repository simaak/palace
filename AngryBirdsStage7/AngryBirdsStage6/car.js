class car {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          restitution:0.8,
          'friction':1.0,
          'density':1.0
          

      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("sprites/wood2.png");
      this.Visiblity = 255;
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
     // fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);
      
    }
  };
