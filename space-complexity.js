const ocean = ['hello', 'name', 'is', 'nemo'];

const findNemo = fishes => {
  fishes.forEach(fish => {
    if (fish == 'nemo') {
      console.log('nemo FOUND!');
    }
  });
};
const findNemo1 = fishes => {
  for (let fish of fishes) {
    if (fish == 'nemo') {
      console.log('nemo FOUND!');
    }
  }
};

findNemo(ocean);
findNemo1(ocean);
