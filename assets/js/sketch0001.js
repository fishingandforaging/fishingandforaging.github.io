class Shape {
  onDefaults() {
    return {
        fill:255, stroke:0, strokeWeight:0, x:0.5*width, y:0.5*height
    }
  }
  constructor(args) {
    Object.assign(this, this.onDefaults(), args)
  }
  draw() {
    push()
    translate(this.x, this.y)
    this.onStyle()
    this.onDraw()
    pop()
  }
  onStyle() {
    fill(this.fill)
    stroke(this.stroke)
    strokeWeight(this.strokeWeight)
  }
  onDraw() {
    
  }
}

class Circle extends Shape {
  onDefaults() {
    return {
      ...super.onDefaults(),
      ...{d:200} }
  }
  onDraw() {
    circle(0, 0, this.d)
  }
}

var scene

function setup() {
  createCanvas(400, 400)
  scene = new Circle()
}

function draw() {
  background(0)
  scene.draw()
}