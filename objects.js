// reference type
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

// context vs scope
function a_function() {
  let a = 4;
}
// instantiation
class Player {
  constructor(name, type) {
    console.log("[player]", this);
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi, I am ${this.name}. I am a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("[wizard]", this);
  }

  play() {
    console.log(`WEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly", "healer");
const wizard2 = new Wizard("Shawn", "dark magic");
