class Ground{
    constructor(x,y,height,width) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,height,width,options);
      this.width= width; 
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
    rect(pos.x, pos.y, this.w,this.h);
    }
  };